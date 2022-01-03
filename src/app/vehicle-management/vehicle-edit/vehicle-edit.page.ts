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


  constructor(
    public formBuilder: FormBuilder,
    public router: Router,
    private vehicleApi: VehicleManagementService,
  ) { }

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      title: ['', Validators.required],
      seats: ['', Validators.required],
      description: ['', Validators.required],
      photo: ['', Validators.required],
    });
  }

  ionViewDidEnter() {}

  image: any;
  loadImageFromDevice(event) {
    const file = event.target.files[0];

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      // note using fat arrow function here if we intend to point at current Class context.

      this.image = reader.result;
    };

    reader.onerror = (error) => {
      //handle errors
    };
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
