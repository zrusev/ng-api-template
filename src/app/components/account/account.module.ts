import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AccountRoutingModule } from './account.routes';

import { ACCOUNT_COMPONENTS } from './index'

@NgModule({
    declarations: [ACCOUNT_COMPONENTS],

    imports: [
        CommonModule,
        FormsModule,

        AccountRoutingModule
    ],
    providers: []
})
export class AccountModule { }
