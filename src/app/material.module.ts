import { NgModule } from '@angular/core';
import {
  MatButtonModule, 
  MatCheckboxModule, 
  MatToolbarModule, 
  MatMenuModule, 
  MatFormFieldModule, 
  MatInputModule,
  MatFormFieldControl
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule, 
    MatCheckboxModule,
    MatToolbarModule,
    MatMenuModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  exports: [
    MatButtonModule, 
    MatCheckboxModule,
    MatToolbarModule,
    MatMenuModule,
    MatInputModule,
    MatFormFieldModule,
  ]
})
export class MaterialModule { }
