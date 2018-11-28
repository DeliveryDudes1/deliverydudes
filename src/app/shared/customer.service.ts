import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICustomer } from '../customer/customer';
import { IDelivery} from '../delivery-list/delivery'
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
  RequestCollection:AngularFirestoreCollection<IDelivery>;


  delveries: Observable<IDelivery[]>;

  constructor(private _http:HttpClient,  private _afs: AngularFirestore ) { 
    this.CustomersCollection = _afs.collection<ICustomer>("customers");
    this.RequestCollection = _afs.collection<IDelivery>("deliveries", ref => ref.where('cargoType', '==', 'books'));
    //can query by where clause!
  }

  addCustomer(customer: ICustomer) {
    this.CustomersCollection.add(customer);
  }
  
  addDelivery( delivery:IDelivery){
    this.RequestCollection.add(delivery);
  }

  getProducts(): Observable<IDelivery[]> {
    


     this.delveries = this.RequestCollection.snapshotChanges().pipe(
       map(actions => actions.map(a => {
         const data = a.payload.doc.data() as IDelivery;
         console.log("GetProducts : data " + JSON.stringify(data));
         const id = a.payload.doc.id;
         console.log("getProducts.id = "+id );
         return { id, ...data };
       }))
     );
     return this.delveries;
     
  }

  /*
  getCustomerData(){
    tableOne.on('value', function (snapshot) {
      var userId = snapshot.val().userId; // line 1 (results like 1,2,3,4,5,6)
      anotherTable.child('userdetails').child(userId).once('value', function(mediaSnap) {
          console.log(userId + ":" + mediaSnap.val().name);
      });
  });
  }

tableOne.orderByKey().on("value", function (snapshot) {
    //console.log(snapshot.val());
    snapshot.forEach(function (data) {
        tableTwo.once('value').then(function (info) {
            info = info.val();
        });
    });
});
   */
}
