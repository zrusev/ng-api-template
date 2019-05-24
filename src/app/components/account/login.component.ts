import { Component } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { AuthService } from '../../core/services/index';

import { UserLogin } from '../../core/models/index';

@Component({
    selector: 'login',
    styleUrls: ['./login.component.css'],
    templateUrl: 'login.component.html'
})

export class LoginComponent {
    constructor(private authService: AuthService) { }

    public userLogin: UserLogin = new UserLogin();
    public errorMessage: string = null;

    public login(): void {
        this.authService.login(this.userLogin).subscribe(
            () => { },
            (error: HttpErrorResponse) => this.errorMessage = error.error || 'Invalid login.');
    }
}
