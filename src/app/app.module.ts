import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import {  MatButtonModule, MatCardModule, MatFormFieldModule,MatFormFieldControl, MatInputModule,
          MatMenuModule, MatIconModule , MatSelectModule,
          MatListModule, MatProgressSpinnerModule, MatTooltipModule,
          MatSnackBarModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotificationsComponent } from './notifications/notifications.component';

import { AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireModule, } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { AuthGuard } from './service/auth.guard';
import { AuthService } from './service/auth.service';
import { NotificationService } from './service/notification.service';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { CustomerComponent } from './customer/customer.component';
import {DeliveryListComponent} from './delivery-list/delivery-list.component';
import { AddDeliveryComponent } from './add-delivery/add-delivery.component';
import { AgmCoreModule } from '@agm/core';
import { DiverComponent } from './diver/diver.component';


/** Navigation does include the auth without authGaurd */

const routes: Routes = [
  { path: '', redirectTo:'login',pathMatch:'full',  },
  { path:'login', component: LoginComponent },
  { path:'signup', component:RegisterComponent },
  { path: 'customer', component: CustomerComponent, canActivate: [AuthGuard]},
  { path: 'add-delivery', component:AddDeliveryComponent,canActivate: [AuthGuard]},
  { path: 'delivery-list', component:DeliveryListComponent,canActivate: [AuthGuard]},
  { path: 'driver', component: DiverComponent ,canActivate: [AuthGuard]},
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
    AddDeliveryComponent,
    DiverComponent,
  
  ],
  imports: [
    HttpClientModule,
    HttpModule,
    BrowserModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatTooltipModule,
    //MatFormFieldControl,
    MatFormFieldModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    ReactiveFormsModule,
    AngularFirestoreModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase,),
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyBUp3Y-GD97Imt6axIjoY9zNz_M-bTObLA' }),
    AngularFireAuthModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy},AuthService, AuthGuard, NotificationService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
