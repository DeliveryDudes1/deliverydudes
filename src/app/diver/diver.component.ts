import { Component, OnInit, Inject } from '@angular/core';
import { IDriver } from '../driver';
import { DriverService } from '../shared/driver.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-diver',
  templateUrl: './diver.component.html',
  styleUrls: ['./diver.component.css']
})
export class DiverComponent implements OnInit {

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
      this.driverData = data
    });

    this.drivers = this.getDriverData();
  }
  //trying to filter drivers array but not working.
  getDriverData() : IDriver[] {


  //this.driverData.filter((driver : IDriver) => driver.driverID == this.driver_ID),

  this._Driver.getDrivers().subscribe( d =>{
    this.driverData = this.driverData.filter(d => d.driverID == this.driver_ID)
  })
  console.log("drivers id --",this.driver_ID);
  return this.driverData;
  }
}
