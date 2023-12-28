import {
	Box,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Grid,
	Tab,
	Tabs
} from '@mui/material';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { FormModalTabI, FormModalTabPropsI } from './FormModalTab.interface';

const FormModalTab = ({
	tabs,
	id,
	show = false,
	onClose
}: FormModalTabPropsI) => {
	const [_tabs, setTabs] = useState<FormModalTabI[]>([])


	const tabIndexActive = useMemo(() => _tabs.findIndex(tab => tab.active), [_tabs])

	const backButton = useMemo(() => _tabs[tabIndexActive]?.buttons.back, [_tabs, tabIndexActive])
	const nextButton = useMemo(() => _tabs[tabIndexActive]?.buttons.next, [_tabs, tabIndexActive])

	const handleChangeStatusTab = useCallback((index: number) => {
		setTabs(_tabs.map((tab, i) => {
			tab.active = i == index
			return tab
		}))
	}, [_tabs])

	useEffect(() => {
		setTabs(tabs)
	}, [tabs])

	return (
		<Dialog open={show} onClose={onClose} maxWidth="xl" fullWidth>
			<DialogTitle>
				{_tabs[tabIndexActive]?.title}
			</DialogTitle>
			<DialogContent>
				<Grid container>
					<Box sx={{ width: '100%' }}>
						<Box sx={{ borderBottom: 1, borderColor: 'divider', marginBottom: 5 }}>
							<Tabs value={tabIndexActive} onChange={() => { }} aria-label="basic tabs example">
								{_tabs.map((tab, i) => (
									<Tab
										disabled={tab.disabled}
										key={`${id}-title-${i}`}
										label={tab.label}
										value={i}
										id={`${id}-title-${i}`}
										aria-labelledby={`${id}-title-${i}`}
										onClick={() => !tab.disabled && handleChangeStatusTab(i)}
									/>
								))}
							</Tabs>
						</Box>
						{_tabs.map((tab, i) => (
							<div
								role="tabpanel"
								hidden={!tab.active}
								id={`${id}-${i}`}
								aria-labelledby={`${id}-${i}`}
								key={`${id}-${i}`}
							>
								{tab.active && (
									tab.render
								)}
							</div>
						))}
					</Box>
				</Grid>
			</DialogContent>
			<DialogActions>
			{backButton ? (
					<Button onClick={backButton.onClick} color="primary">
						{backButton.title}
					</Button>
				) : null}

				{nextButton ? (
					<Button onClick={nextButton.onClick} color="primary" disabled={_tabs[tabIndexActive+1]?.disabled}>
						{nextButton.title}
					</Button>
				) : null}
			</DialogActions>
		</Dialog>
	)
}

export default FormModalTab
