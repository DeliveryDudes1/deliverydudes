import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICustomer } from '../customer/customer';
import { IDelivery} from '../delivery-list/delivery'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import {catchError,tap} from 'rxjs/operators';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { database } from 'firebase';
import { map } from 'rxjs/operators';
import { AuthService } from '../service/auth.service';
/// =============== Service coded by Marek ================ // 
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  CustomersCollection: AngularFirestoreCollection<ICustomer>;
 
  testEmail: string;
  customers: Observable<ICustomer[]>;
// ============ 
  constructor(private _http:HttpClient,  private _afs: AngularFirestore, private _auth :AuthService ) { 
    this.testEmail = this._auth.getCutomerEmail();
    console.log(this.testEmail);
    this.CustomersCollection = _afs.collection<ICustomer>("customers");
  }

  addCustomer(customer: ICustomer) {
    this.CustomersCollection.add(customer);
  }
  getCustomers(): Observable<ICustomer[]> {
    this.customers = this.CustomersCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as ICustomer;
        //console.log("GetCustomers : data " + JSON.stringify(data));// removed due to security issues == 
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
    return this.customers;
 }

}

