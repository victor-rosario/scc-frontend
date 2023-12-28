import { faker } from '@faker-js/faker'
interface ISerie {
    name: string
    data: Array<number>
}


function calculateAmount(series: ISerie[]) {
    return series.reduce((acc, item) => {
        acc += item.data.reduce((acc, item) => acc += item, 0)
        return acc
    }, 0)
}

const yearSeries = [
    {
        name: 'serie1',
        data: Array.from({ length: 10 }).map(() => faker.number.int({ min: 10, max: 100 }))
    }
]

const monthSeries = [
    {
        name: 'serie1',
        data: Array.from({ length: 10 }).map(() => faker.number.int({ min: 10, max: 100 }))
    }
]

export const totalOrderLineChartCardDummyData = {
    monthSeries,
    yearSeries,
    amountMonth: `$${calculateAmount(monthSeries)}`,
    amountYear: `$${calculateAmount(yearSeries)}`,
}