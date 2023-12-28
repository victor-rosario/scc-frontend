import { faker } from '@faker-js/faker'

export const TotalIncomeDarkCardDummyData = {
    amount: `$${faker.finance.amount()}`,
    title: `${faker.commerce.productName()}`
}