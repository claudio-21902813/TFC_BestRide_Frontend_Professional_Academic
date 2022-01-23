import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {VehicleManagementService} from '../vehicle-management-service'

@Component({
  selector: 'app-vehicle-edit',
  templateUrl: './vehicle-edit.page.html',
  styleUrls: ['./vehicle-edit.page.scss'],
})
export class VehicleEditPage implements OnInit {
  id : any;
  ionicForm: FormGroup;
  public isSubmitted = false;
  public image_list = [];

  constructor(
    public formBuilder: FormBuilder,
    public router: Router,
    private vehicleApi: VehicleManagementService,
  ) { }

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      title: ['', Validators.required],
      seats: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      registration: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  ionViewDidEnter() {}

  public getFilesPOI(event) {
    // reset images
    this.image_list = [];

    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();
        reader.onload = (event) => {
          this.image_list.push(event.target.result);
        };

        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }

  public submitForm() {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log('Please provide all the required values!');
      return false;
    } else {
      console.log(this.ionicForm.value);
      //UPDATE VEHICLE
      this.vehicleApi.updateVehicle(this.id, this.ionicForm)
      this.router.navigate(['/vehicle-management'])
    }
  }

  public deleteVehicle() {
    
  }

  get errorControl() {
    return this.ionicForm.controls;
  }
  
}
