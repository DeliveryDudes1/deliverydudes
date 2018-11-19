import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule,
  MatMenuModule, MatIconModule ,
   MatListModule, MatProgressSpinnerModule} from '@angular/material';
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
import { CustomerComponent } from './customer/customer.component';
import {DeliveryListComponent} from './delivery-list/delivery-list.component';
import { LoginListComponent } from './login-list/login-list.component';
import { AddDeliveryComponent } from './add-delivery/add-delivery.component'


/** Navigation does not include the auth needs to be added */

const routes: Routes = [
  { path: '', redirectTo:'login',pathMatch:'full',  },
  { path:'home', component: NavComponent, },
  { path:'login', component: LoginComponent },
  { path:'signup', component:RegisterComponent },
  { path: 'add-delivery', component:AddDeliveryComponent},
  { path: 'delivery-list', component:DeliveryListComponent},
  { path: '**', redirectTo:'login' , }
];

export class AppRoutingModule {}

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RegisterComponent,
    LoginComponent,
    NotificationsComponent,
    CustomerComponent,
    DeliveryListComponent,
    LoginListComponent,
    AddDeliveryComponent,
  
  ],
  imports: [
    HttpClientModule,
    HttpModule,
    BrowserModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    ReactiveFormsModule,
    AngularFirestoreModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase,),
    AngularFireAuthModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy},AuthService, AuthGuard, NotificationService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
