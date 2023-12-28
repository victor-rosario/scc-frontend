import { faker } from '@faker-js/faker'

interface IRequest {
    uuid: string;
    fullName: string;
    identification: string;
    age: number;
    gender: string;
    email: string;
    phone: string;
    mobile: string;
    status: string;
    date: string;
    caseNumber: string;

}

export function createRandomRequest(): IRequest {
    const date = new Date(faker.date.anytime().toLocaleString());
    return {
        uuid: faker.string.uuid(),
        email: faker.internet.email(),
        phone: faker.phone.number(),
        gender: faker.helpers.arrayElement(['Masculino', 'Femenino', 'Otro']),
        identification: "001-0057793-3",
        age: faker.number.int({ min: 18, max: 35 }),
        mobile: faker.phone.number(),
        fullName: faker.person.fullName(),
        status: faker.helpers.arrayElement(['Progreso', 'Certificado', 'Pausado', "Denegado"]),
        date: faker.date.anytime().toLocaleString(),
        caseNumber: `XCZ-${date.getFullYear()}-${faker.number.int({ min: 0, max: 100 })}-JS`
    };
}

export const REQUESTS: IRequest[] = faker.helpers.multiple(createRandomRequest, {
    count: 10,
});

export const ONE_REQUEST: IRequest = createRandomRequest();