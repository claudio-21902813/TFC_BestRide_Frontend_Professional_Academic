import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {  VehicleManagementService } from '../vehicle-management-service';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.page.html',
  styleUrls: ['./create-vehicle.page.scss'],
})
export class CreateVehiclePage implements OnInit {
  ionicForm: FormGroup;
  public isSubmitted = false;
  id: any;

  constructor(
    public formBuilder: FormBuilder,
    public router: Router,
    private srvc: VehicleManagementService,
  ) {}

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      title: ['', Validators.required],
      seats: ['', Validators.required],
      description: ['', Validators.required],
    });

    this.id = localStorage.getItem("id");
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
      const form_data = {
        title: '' + this.ionicForm.get('title').value,
        seats: Number('' + this.ionicForm.get('seats').value),
        description: '' + this.ionicForm.get('description').value,
        image: '' + this.image,
        enterprise: Number(this.id),
      };
      console.log(form_data);
      this.srvc.createVehicle(form_data);
      this.router.navigate(['/vehicle-management'])
    }
  }

  get errorControl() {
    return this.ionicForm.controls;
  }

}
