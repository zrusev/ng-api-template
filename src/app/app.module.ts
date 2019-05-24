import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from 'src/app/material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { APP_SERVICES, AuthInterceptorService, AuthErrorsInterceptorService } from './core/services/index';

import { ToolbarComponent } from './components/shared/toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
  ],
  providers: [
    APP_SERVICES,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthErrorsInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
