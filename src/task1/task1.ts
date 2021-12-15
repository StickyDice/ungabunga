type User = {
    name: string;
    age: number;
    occupation: string;
    messagesCount: number,
    registrationDate: Date,
    warningsCount: number,
}

export const users: User[] = [
    {
        name: 'Calvin Klein',
        age: 38,
        occupation: 'Artist',
        messagesCount: 0,
        registrationDate: new Date('12/7/2021'),
        warningsCount: 0,
    },
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep',
        messagesCount: 16,
        registrationDate: new Date('12/7/2018'),
        warningsCount: 3,
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut',
        messagesCount: 243,
        registrationDate: new Date('1/7/2020'),
        warningsCount: 12,
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Developer',
        messagesCount: 434,
        registrationDate: new Date('5/11/2021'),
        warningsCount: 14,
    },
    {
        name: 'Chloe Price',
        age: 19,
        occupation: 'Student',
        messagesCount: 167,
        registrationDate: new Date('6/3/2019'),
        warningsCount: 67,
    },
];

export class TrustedUser { }

export class ConfidenceHelper { }

export function checkUsersConfidence(users: User[]) {
    throw new Error('Function not implemented');
}

console.log(checkUsersConfidence(users));
