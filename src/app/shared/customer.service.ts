import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICustomer } from '../customer/customer';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import {catchError,tap} from 'rxjs/operators';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { database } from 'firebase';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  CustomersCollection: AngularFirestoreCollection<ICustomer>;

  constructor(private _http:HttpClient,  private _afs: AngularFirestore ) { 
    this.CustomersCollection = _afs.collection<ICustomer>("customers");
  }
  addCustomer(customer: ICustomer) {
    this.CustomersCollection.add(customer);
  }
}
