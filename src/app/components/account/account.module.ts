import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AccountRoutingModule } from './account.routes';

import { ACCOUNT_COMPONENTS } from './index';
import { MaterialModule } from 'src/app/material.module';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [ACCOUNT_COMPONENTS],

    imports: [
        CommonModule,
        FormsModule,
        AccountRoutingModule,
        MaterialModule,
    ],
    providers: []
})
export class AccountModule { }
