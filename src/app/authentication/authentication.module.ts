import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SplashScreenComponent } from '../general/splash-screen/splash-screen.component';
import { OtpPageComponent } from './otp-page/otp-page.component';
import { NgOtpInputModule } from 'ng-otp-input';
import { AuthComponentHeader } from '../general/header/auth/auth.component';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    SplashScreenComponent,
    OtpPageComponent, 
    AuthComponentHeader
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    NgOtpInputModule
  ]
})
export class AuthenticationModule { }
