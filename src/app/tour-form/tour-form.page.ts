import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Tour } from './tour';

@Component({
  selector: 'app-tour-form',
  templateUrl: './tour-form.page.html',
  styleUrls: ['./tour-form.page.scss'],
})
export class TourFormPage implements OnInit {
  ionicForm: FormGroup;
  public isSubmitted = false;
  constructor(public formBuilder: FormBuilder) {}
  public tour_array: Array<Tour> = [];

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      lat: ['', Validators.required],
      lng: ['', Validators.required],
    });
  }

  public addTourList() {
    const lat = this.ionicForm.get('lat').value;
    const lng = this.ionicForm.get('lng').value;
    this.tour_array.push({ lat: lat, lng: lng });
  }

  public submitForm() {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log('Please provide all the required values!');
      return false;
    } else {
      console.log(this.ionicForm.value);
    }
  }
}
