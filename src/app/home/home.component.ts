import { UserService } from './../services/user.service';
import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../_models/user';


@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    loading = false;
    users: User[];

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.loading = true;
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.loading = false;
            this.users = users;
        });
    }
}
