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
/// =============== Service coded by Marek ===
@Injectable({
  providedIn: 'root'
})
export class DeliveryService {
  RequestCollection:AngularFirestoreCollection<IDelivery>;
  delveries: Observable<IDelivery[]>;

  constructor(private _http:HttpClient,  private _afs: AngularFirestore, private _auth :AuthService) { 
    this.RequestCollection = _afs.collection<IDelivery>("deliveries");


  }

  addDelivery( delivery:IDelivery){
    this.RequestCollection.add(delivery);
  }

  getDelivery(): Observable<IDelivery[]> {
    
     this.delveries = this.RequestCollection.snapshotChanges().pipe(
       map(actions => actions.map(a => {
         const data = a.payload.doc.data() as IDelivery;
         console.log("GetProducts : data " + JSON.stringify(data));
         const id = a.payload.doc.id;
         return { id, ...data };
       }))
     );
     return this.delveries;
  }


  deleteRequest(id:string): void {
    this.RequestCollection.doc(id).delete()
    .catch(error => {console.log("deleteRequest error: "+error)})
    .then(() => console.log("deleteRequested: id = "+id));
  }
}
