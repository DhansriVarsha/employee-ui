import { Department, Employee, Phone } from "src/app/shared/models/employee.model";

export const departments: Department[] = [
    {id: 1, name: 'department-1'},
    {id: 2, name: 'department-2'},
    {id: 3, name: 'department-3'},
    {id: 4, name: 'department-4'},
    {id: 5, name: 'department-5'},
    {id: 6, name: 'department-6'},
    {id: 7, name: 'department-7'},
    {id: 8, name: 'department-8'},
    {id: 9, name: 'department-9'},
    {id: 10, name: 'department-10'}
];
export const phones: Phone[] = [
    {id: 1, number: ['9887483747']},
    {id: 2, number: ['7865479238']},
    {id: 3, number: ['4567454364', '9561623411']},
    {id: 4, number: ['3253476589']},
    {id: 5, number: ['9864537265', '9090931256']},
    {id: 6, number: ['9974133111', '7896784212', '9956451321']},
    {id: 7, number: ['8932122135']},
    {id: 8, number: ['9090874635']},
    {id: 9, number: ['9876766567']},
    {id: 10, number: ['9183742211', '9984739237', '8955454342', '9864746212']},
];

export const employees: Employee[] = [
    {
        id: 1,
        name: 'Pooja V',
        address: 'No: 1223, 12th cross st',
        age: 32,
        department: {id: 1, name: 'department-1'},
        phoneList: {id: 1, number: ['9887483747']}
    },
    {
        id: 2,
        name: 'Ram Kumar E',
        address: 'No: 43/12, Kannapan nagar',
        age: 24,
        department: {id: 7, name: 'department-7'},
        phoneList: {id: 8, number: ['9090874635']},
    },
    {
        id: 3,
        name: 'Palaniswani B',
        address: 'SB Illam, Ganesan road',
        age: 43,
        department: {id: 4, name: 'department-4'},
        phoneList: {id: 10, number: ['9183742211', '9984739237', '8955454342', '9864746212']}
    },
    {
        id: 4,
        name: 'Suran Raj',
        address: 'No: 3/21, Santhome Rd.',
        age: 65,
        department: {id: 4, name: 'department-4'},
        phoneList: {id: 4, number: ['3253476589']}
    },
    {
        id: 5,
        name: 'Sreeja',
        address: 'No: 93/123, Maniyakaranpalayam',
        age: 19,
        department: {id: 5, name: 'department-5'},
        phoneList: {id: 3, number: ['4567454364', '9561623411']}
    },
    {
        id: 6,
        name: 'Kadhar',
        address: 'Vels house, OMR Road',
        age: 50,
        department: {id: 4, name: 'department-4'},
        phoneList: {id: 9, number: ['9876766567']}
    },
    {
        id: 7,
        name: 'Sankar G',
        address: 'No: 2/12, Annur',
        age: 52,
        department: {id: 5, name: 'department-5'},
        phoneList: {id: 2, number: ['7865479238']}
    },
    {
        id: 8,
        name: 'Gokul',
        address: 'No: 4/765, Neru nagar',
        age: 33,
        department: {id: 5, name: 'department-5'},
        phoneList: {id: 6, number: ['9974133111', '7896784212', '9956451321']}
    },
    {
        id: 9,
        name: 'Mohana',
        address: 'No: 74, Wellesly st.',
        age: 22,
        department: {id: 3, name: 'department-3'},
        phoneList: {id: 5, number: ['9864537265', '9090931256']}
    },
    {
        id: 10,
        name: 'Ramesh',
        address: 'WA Illam, Joka',
        age: 34,
        department: {id: 7, name: 'department-7'},
        phoneList: {id: 7, number: ['8932122135']}
    },
];