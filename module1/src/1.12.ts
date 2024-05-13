{
    // nullable type
    const searchName = (value: string | null) => {
        if (value) {
            console.log('Searching');
        }
        else {
            console.log('There is nothing to search');
        }
    }

    searchName(null);

    // unknown type
    const getSpeedInMeterPerSecond = (value: unknown) => {
        if (typeof value === 'number') {
            const convertedSpeed = (value * 1000 / 3600);
            console.log(`The speed is ${convertedSpeed} ms^-1`);
        }
        else if (typeof value === 'string') {
            const [result, unit] = value.split(' ');
            const convertedSpeed = (parseFloat(result) * 1000 / 3600);
            console.log(`The speed is ${convertedSpeed} ms^-1`);
        }
        else {
            console.log('Wrong Input');
        }
    }

    // getSpeedInMeterPerSecond(100);
    // getSpeedInMeterPerSecond('100 kmh^-1');
    getSpeedInMeterPerSecond(null);

    // never type (never return anything)
    const throwError = (message: string): never => {
        throw new Error(message);
    }

    throwError('Error by mistake');


    // 
}