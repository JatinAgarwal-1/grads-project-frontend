import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EHomeComponent } from './e-home/e-home.component';
import { EHeaderComponent } from './e-header/e-header.component';
import { EJobpostingComponent } from './e-jobposting/e-jobposting.component';
import { FormsModule } from '@angular/forms';
import { ELeaderboardComponent } from './e-leaderboard/e-leaderboard.component';
import { EReferralsComponent } from './e-referrals/e-referrals.component';
import { RHeaderComponent } from './r-header/r-header.component';
import { RHomeComponent } from './r-home/r-home.component';
import { RStageComponent } from './r-stage/r-stage.component';
import { RJobpostingComponent } from './r-jobposting/r-jobposting.component';
import { HttpClientModule } from '@angular/common/http';
import {  GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';
import { LoginComponent } from './login/login.component';
import { GoogleSignInComponent } from './login/google-sign-in/google-sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    EHomeComponent,
    EHeaderComponent,
    EJobpostingComponent,
    ELeaderboardComponent,
    EReferralsComponent,
    RHeaderComponent,
    RHomeComponent,
    RStageComponent,
    RJobpostingComponent,
    LoginComponent,
    GoogleSignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '445163907538-7487rdor3baqo2f84uct9g6d3boihjh8.apps.googleusercontent.com' 
            )
          }
        ]
      } as SocialAuthServiceConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
