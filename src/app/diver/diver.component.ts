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
  //trying to filter drivers array but not working.

//code by Arif Matin - S00167749

  //trying to filter drivers array but not working.
  getDriverData() : IDriver[]{
      let x: number = this.driver_ID;
  
     let obj: IDriver[] = this.driverData.filter(function(node) {
          return node.driverID==x;
      });
  
      return obj;   
  }

    // console.log("1: Driver: ",JSON.stringify( this.driverData));
    //     console.log(this.driver_ID);

    //  return this.driverData.filter((driver : IDriver) => {console.log("2: Driver: ",JSON.stringify(driver)),driver.driverID == this.driver_ID});
    // console.log(this.driver_ID);
  // }
}
