import { faker } from '@faker-js/faker'

export const earningCardDummyData = {
    title: faker.company.name(),
    amount: faker.finance.amount()
}