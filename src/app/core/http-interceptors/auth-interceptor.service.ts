﻿import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs';

import { IdentityService } from '../services/identity.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
    constructor(private identityService: IdentityService) { }

    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authToken = this.identityService.getToken();

        if (authToken) {
            const authRequest = request.clone({ setHeaders: { Authorization: `Bearer ${authToken}` } });

            return next.handle(authRequest);
        }

        return next.handle(request);
    }
}
