export class Employee{
    id: number;
    name: string;
    address: string;
    age: number;
    department: Department;
    phoneList: Phone
  }
  
  export class Department{
    id: number;
    name: string;
  }
  
  export class Phone{
    id: number;
    number: string[];
  }