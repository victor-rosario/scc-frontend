import '../scss/style.scss'
import 'dayjs/locale/es-do'

import Snackbar from '@components/app/extended/Snackbar'
import SweetAlert from '@components/app/extended/SweetAlert'
import { AppPropsLayout } from '@interfaces/UI/app-with-layout/app-with-layout.interface'
import { store } from '@redux/store'
import withAuthMiddleware from '@utils/middlewares/auth.middleware'
import { AppContext } from 'next/app'
import { Fragment, useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import { ConfigProvider } from '../contexts/general/ConfigContext'
import ThemeCustomization from '../themes'
import i18nCustom, { initTranslator } from '../i18n'
import { I18nextProvider } from 'react-i18next'
import Loader from '@components/app/Loader'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import CaseModal from '@components/app/extended/CaseModal'
import dayjs from 'dayjs'

function MyApp(props: AppPropsLayout) {
	const getLayout = props.Component.getLayout || ((page) => page)

	const [showPage, setShowPage] = useState(false)

	useEffect(() => {
		initTranslator(() => {
			setShowPage(true)
			dayjs.locale('es-do')
		})
	}, [])

	if (!showPage) return <Loader />

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='es-do'>
			<I18nextProvider i18n={i18nCustom}>
				<Provider store={store}>
					<ConfigProvider>
						<ThemeCustomization>
							<Fragment>
								{getLayout(<props.Component {...props.pageProps} {...(props.props || {})} />)}
								<SweetAlert />
								<Snackbar />
								<CaseModal />
							</Fragment>
						</ThemeCustomization>
					</ConfigProvider>
				</Provider>
			</I18nextProvider>
		</LocalizationProvider>
	)
}

MyApp.getInitialProps = ({ ctx }: AppContext) => withAuthMiddleware(ctx)

export default MyApp
