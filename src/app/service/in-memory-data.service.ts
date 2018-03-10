import { InMemoryDbService } from 'angular-in-memory-web-api';
import { IUser } from '../model/user.model';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const USERS: IUser[] = [
            {
                id: 1,
                name: 'User1',
                email: 'user1@gmail.com',
                gender: 'Male',
                dob: new Date('2010/10/06').toDateString(),
                country: 'Country1',
                address: {
                    street: 'Street1',
                    city: 'City1',
                    pincode: 123456
                }
            },
            {
                id: 2,
                name: 'User2',
                email: 'user2@gmail.com',
                gender: 'Female',
                dob: new Date('2001/01/14').toDateString(),
                country: 'Country1',
                address: {
                    street: 'Street1',
                    city: 'City2',
                    pincode: 123456
                }
            }];
            return {USERS};
    }
}
