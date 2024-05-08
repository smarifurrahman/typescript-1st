{
    // union types
    type FrontendDeveloper = 'fakibazDeveloper' | 'juniorDeveloper'; // string literal types
    type FullstackDeveloper = 'frontendDeveloper' | 'expertDeveloper';
    type Developer = FrontendDeveloper | FullstackDeveloper;


    const newDeveloper: FrontendDeveloper = 'juniorDeveloper';
    const newDeveloper2: Developer = 'expertDeveloper';

    // object type
    type User = {
        name: string;
        email: string;
        gender: 'Male' | 'Female';
        bloodGroup?: 'O+' | 'A+' | 'AB+';
    };

    const user1: User = {
        name: 'Arif',
        email: 'abc@xyz.com',
        gender: 'Male',
    }

    // intersection types

    type FrontendDev = {
        skills: string[];
        designation1: 'frontend developer';
    };
    type BackendDev = {
        skills: string[];
        designation2: 'backend developer';
    };

    type FullstackDev = FrontendDev & BackendDev;

    const fullstackDev: FullstackDev = {
        skills: ['HTML', 'CSS', 'NODE', 'EXPRESS', 'MONGODB'],
        designation1: 'frontend developer',
        designation2: 'backend developer',
    };



    //
}