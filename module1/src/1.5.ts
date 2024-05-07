//reference type --> object;

// const user = {
//     firstName: 'S M',
//     middleName: 'Arifur',
//     lastName: 'Rahman'
// }

const user: {
    company: 'Programming Hero'; //type --> literal types
    readonly firstName: string; //access modifier read only
    middleName?: string;  //optional property
    lastName: string;
    isMarried: boolean;
} = {
    company: 'Programming Hero',
    firstName: 'S M',
    // middleName: 'Arifur',
    lastName: 'Rahman',
    isMarried: false,
}

user.isMarried = true;
// user.firstName = 'Arif'; //error
