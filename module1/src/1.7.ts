{
    // spread operator
    // rest operator
    

    // spread operator
    const bros1: string[] = ['Arif', 'Hasnat', 'Rian'];
    const bros2: string[] = ['Abdullah', 'Khalid', 'Hafiz'];
    // bros1.push(bros2); //error
    bros1.push(...bros2);

    const mentors1 = {
        typescript: 'Mezba',
        redux: 'Mir',
        dbms: 'Mizan',
    }

    const mentors2 = {
        prisma: 'Firoz',
        next: 'Tanmoy',
        cloud: 'Nahid',
    }

    const mentorsList = {
        ...mentors1,
        ...mentors2,
    }

    // rest operator    
    const greetFriends = (...friends: string[]) => {
        friends.forEach((friend: string) => console.log(`Hi, ${friend}`));
    }

    greetFriends('Abul', 'Babul', 'Cabul', 'Dabul');

}