{
    // object destructuring
    const user = {
        id: 12,
        name: {
            firstName: 'S M',
            middleName: 'Arifur',
            lastName: 'Rahman',
        },
        contactNo: '01800000000',
        address: 'Bangladesh',
    }

    const { contactNo, name: { middleName } } = user;

    // array destructuring
    const myFriends = ['Hasnat', 'Rian', 'Arif', 'Abdullah', 'Hafiz', 'Khalid'];
    const [, , bestFriend, ...rest] = myFriends;

}