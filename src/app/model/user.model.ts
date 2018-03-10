export interface IUser {
    id: number;
    name: string;
    email: string;
    gender: string;
    dob: string;
    country: string;
    address: {
        street: string,
        city: string
        pincode: number
    };
}

export const USERS: IUser[] = [
    {
        id: 1,
        name: 'Agraj Nema',
        email: 'agrajnema@gmail.com',
        gender: 'Male',
        dob: new Date('1986/11/06').toDateString(),
        country: 'India',
        address: {
            street: 'Moon Palace',
            city: 'Indore',
            pincode: 452009
        }
    },
    {
        id: 2,
        name: 'Swati Nema',
        email: 'swatinema@gmail.com',
        gender: 'Female',
        dob: new Date('1986/04/08').toDateString(),
        country: 'India',
        address: {
            street: 'Moon Palace',
            city: 'Indore',
            pincode: 452009
        }
    }
];
