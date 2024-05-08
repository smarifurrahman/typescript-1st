{
    // type alias

    type Student = {
        name: string;
        age: number;
        gender: string;
        contactNo?: string;
        address: string;
    };

    const student1: Student = {
        name: 'Arif',
        age: 26,
        gender: 'Male',
        contactNo: '01800000000',
        address: 'Chittagong',
    };


    const student2: Student = {
        name: 'Mezba',
        age: 28,
        gender: 'Male',
        address: 'Chittagong',
    }

    const student3: Student = {
        name: 'Mir',
        age: 30,
        gender: 'Male',
        address: 'Dhaka',
    }

    const student4: Student = {
        name: 'Hasnat',
        age: 26,
        gender: 'Male',
        contactNo: '01900000001',
        address: 'DXB',
    }

    type UserName = string;
    type IsAdmin = boolean;

    const userName: UserName = 'Arif';
    const isAdmin: IsAdmin = true;

    // function type alias
    type Add = (num1: number, num2: number) => number;
    const add: Add = (num1, num2) => num1 + num2;


    //
}