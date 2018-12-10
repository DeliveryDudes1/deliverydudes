import { Component, OnInit, Inject } from '@angular/core';
import { IDriver } from '../driver';
import { DriverService } from '../shared/driver.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { stringify } from 'querystring';

@Component({
  selector: 'app-diver',
  templateUrl: './diver.component.html',
  styleUrls: ['./diver.component.css']
})
export class DiverComponent implements OnInit {
//code by Arif Matin - S00167749
  driverData : IDriver[];
  drivers: IDriver[];
  public driver_ID: number;

  constructor(private _Driver: DriverService,  public dialogRef: MatDialogRef<DiverComponent>,
    @Inject(MAT_DIALOG_DATA) public driveiD: number) { }
    
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    console.log(this.driver_ID);
    this._Driver.getDrivers().subscribe(data => {
      this.driverData = data;
      this.drivers = this.getDriverData();

    });

  }
<<<<<<< HEAD
  //trying to filter drivers array but not working.

//code by Arif Matin - S00167749

  //trying to filter drivers array but not working.
=======
  
  //filter drivers array but not working .
>>>>>>> d2fe05803485370331a49d4ca80912e24eb33fa5
  getDriverData() : IDriver[]{
      let x: number = this.driver_ID;
  
     let obj: IDriver[] = this.driverData.filter(function(node) {
          return node.driverID==x;
      });
  
      return obj;   
  }

 
}
