import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { IUser } from '../model/user.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'user-detail',
    templateUrl: './userdetail.component.html'
})

export class UserDetailComponent implements OnInit, OnChanges {

    constructor(private fb: FormBuilder) { }

    @Input() selectedUser: IUser;
    genderList: string[];
    userDetailForm: FormGroup;
    fullName: FormControl;
    gender: FormControl;
    email: FormControl;
    dob: FormControl;
    country: FormControl;
    address: FormGroup;
    street: FormControl;
    city: FormControl;
    pincode: FormControl;

    ngOnInit() {
        this.genderList = ['Male', 'Female'];

        this.userDetailForm = this.fb.group({
            fullName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            gender: ['', Validators.required],
            dob: ['', Validators.required],
            country: ['', Validators.required],
            address: this.fb.group({
                street: [''],
                city: [''],
                pincode: ['']
            })
        });
    }

    ngOnChanges() {
        if (this.selectedUser) {
            this.userDetailForm.setValue({
                fullName: this.selectedUser.name,
                email: this.selectedUser.email,
                gender: this.selectedUser.gender,
                dob: this.selectedUser.dob,
                country: this.selectedUser.country,
                address: this.selectedUser.address
            });
        }
    }
}

