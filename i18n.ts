import i18n, { Callback } from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

export const initTranslator = (callBack: Callback) => {
	try {
		i18n.use(Backend)
			.use(LanguageDetector)
			.use(initReactI18next)
			.init(
				{
					// backend: {
					// 	loadPath: `${config.server.url}/public/locales/{{lng}}/admin-panel/{{ns}}.json`
					// },
					// fallbackLng: 'en',
					// debug: false, // Set it to true to enable debug output
					// interpolation: {
					// 	escapeValue: false // React handles escaping
					// },
					// ns: [
					// 	'general',
					// 	'layout',
					// 	'company',
					// 	'branch-office',
					// 	'document-types',
					// 	'users',
					// 	'roles',
					// 	'permissions',
					// 	'cards',
					// 	'clients',
					// 	'receipt',
					// 	'payment-terms',
					// 	'payment-conditions',
					// 	'income-types',
					// 	'document-statuses',
					// 	'voucher-types',
					// 	'voucher-ranges',
					// 	'currencies',
					// 	'product-classes',
					// 	'product-types',
					// 	'boxes',
					// 	'units-of-measurement',
					// 	'payment-methods',
					// 	'banks',
					// 	'itbis-types',
					// 	'itbis',
					// 	'ledger-accounts',
					// 	'doctors',
					// 	'service-orders',
					// 	'file-manager',
					// 	'warehouses',
					// 	'products',
					// 	'price-lists',
					// 	'price-determination',
					// 	'sales-payments',
					// 	'login',
					// 	'forgot-password',
					// 	'404',
					// 	'errors',
					// 	'whatsapp'
					// ],
					// detection: {
					// 	order: ['localStorage'],
					// 	caches: ['localStorage']
					// },
					// react: {
					// 	bindI18n: 'languageChanged',
					// 	bindI18nStore: 'localStorage',
					// 	transEmptyNodeValue: '',
					// 	transSupportBasicHtmlNodes: true,
					// 	transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
					// 	useSuspense: true
					// }
				},
				callBack
			)
	} catch (error) {
		console.log('translate error: ', error)
	}
}

export default i18n
