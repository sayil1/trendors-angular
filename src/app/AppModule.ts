import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { FeedsModule } from './feeds/feeds.module';
import { MainModule } from './main/main.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { GeneralModule } from './general/general.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    // CardsComponent,
    // SplashScreenComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    AuthenticationModule,
    FeedsModule,
    MainModule,
    GeneralModule,
    BrowserAnimationsModule,
    MatSidenavModule,
  ],
})
export class AppModule {}
