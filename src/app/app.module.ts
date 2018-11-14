import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule,
  MatMenuModule, MatIconModule , MatListModule, MatProgressSpinnerModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotificationsComponent } from './notifications/notifications.component';

import { AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { AuthGuard } from './service/auth.guard';
import { AuthService } from './service/auth.service';
import { NotificationService } from './service/notification.service';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RegisterComponent,
    LoginComponent,
    NotificationsComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatListModule,
    MatMenuModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase,),
    AngularFireAuthModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy},AuthService, AuthGuard, NotificationService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
