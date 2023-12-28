import { NavItemType } from '@interfaces/UI/general.interface'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

export const modules: NavItemType = {
	id: 'modules-navigation',
	title: '',
	type: 'group',
	children: [
		{
			id: 'Solicitudes',
			title: 'Solicitudes',
			type: 'item',
			icon: HomeRoundedIcon,
			url: '/requests'
		},
	]
}