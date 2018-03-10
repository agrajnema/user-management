import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Subject } from 'rxjs/Subject';
import { catchError, tap, map } from 'rxjs/operators';
import { IUser } from '../model/user.model';


@Injectable()

export class UserService {

    private apiURL = `/api/users`;
    constructor(private http: HttpClient) { }

    private handleError(error: string) {
        console.log(error);
    }

    getUsers(): Observable<IUser[]> {
        return this.http.get<IUser[]>(this.apiURL);
    }

    // getUsers() {
    //     return USERS_DIRECT;
    // }
}
