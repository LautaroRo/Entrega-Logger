import { faker } from "@faker-js/faker";

export const createUsers = () => {

    const numberRandom = parseInt(Math.floor(Math.random() * 20))

    let users = []
    for(let i = 0; i < numberRandom; i++){

        const secondNumberRandom = parseInt(Math.floor(Math.random() * 80))

        let telephone = '';

        for(let i = 0; i < 9; i++){
            const randomNumber = Math.floor(Math.random() * 9)
            telephone += randomNumber.toString();
        }

        const user = {
            first_name: faker.person.firstName(),
            last_name: faker.person.lastName(),
            number: telephone,
            id: faker.database.mongodbObjectId(),
            email: faker.internet.email(),
            age: secondNumberRandom,
            role: secondNumberRandom % 2 === 0 ? "Usuario" : "Admin",
            password: faker.internet.password(8)
        }

        users.push(user)
    }

    return users
}

