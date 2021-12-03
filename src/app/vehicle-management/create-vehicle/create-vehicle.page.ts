import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.page.html',
  styleUrls: ['./create-vehicle.page.scss'],
})
export class CreateVehiclePage implements OnInit {
  ionicForm: FormGroup;
  public isSubmitted = false;

  constructor(
    public formBuilder: FormBuilder,
    public router: Router,
  ) {}

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      title: ['', Validators.required],
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
      this.router.navigate(['/vehicle-management'])
    }
  }

  get errorControl() {
    return this.ionicForm.controls;
  }

}
