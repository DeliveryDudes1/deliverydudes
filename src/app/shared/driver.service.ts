import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import {catchError,tap} from 'rxjs/operators';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { database } from 'firebase';
import { map } from 'rxjs/operators';
import { IDriver } from '../driver';

@Injectable({
  providedIn: 'root'
})
//code by Arif Matin - S00167749
export class DriverService {
  driversCollection:  AngularFirestoreCollection<IDriver>;
  drivers: Observable<IDriver[]>;


  constructor(private _http:HttpClient,  
    private _afs: AngularFirestore ) { 
    this.driversCollection = _afs.collection<IDriver>("drivers");
  }
//code by Arif Matin - S00167749
getDrivers() : Observable<IDriver[]> {

  this.drivers = this.driversCollection.snapshotChanges().pipe(
    map(actions => actions.map(a => {
      const data = a.payload.doc.data() as IDriver;
      //console.log("Drivers : data " + JSON.stringify(data));
      const id = a.payload.doc.id;
      return { id, ...data };
    }))
  );
  return this.drivers;
}

}
