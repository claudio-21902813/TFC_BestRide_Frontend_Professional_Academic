import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TourServiceService } from '../tour-service.service';
import { CountryCurrency } from './countryCurrency';

@Component({
  selector: 'app-finish-tour',
  templateUrl: './finish-tour.page.html',
  styleUrls: ['./finish-tour.page.scss'],
})
export class FinishTourPage implements OnInit {
  public tourFinishForm: FormGroup;
  public isSubmitted = false;
  public countryCurrencyList: Array<CountryCurrency>;
  public currency: string;
  public currencyCode: string;

  constructor(
    private formBuilder: FormBuilder,
    private srvc: TourServiceService
  ) {}

  ngOnInit() {
    this.tourFinishForm = this.formBuilder.group({
      price: ['', Validators.required],
      priceCode: ['', Validators.required],
      driver: ['', Validators.required],
    });
    this.srvc.getCountryCurrencyList().subscribe((res) => {
      this.countryCurrencyList = res;
    });
  }

  public submitTour() {
    this.isSubmitted = true;
    if (!this.tourFinishForm.valid) {
      console.log('Please provide all the required values!');
      return false;
    } else {
      console.log(this.tourFinishForm.value);
      this.tourFinishForm.get('price').value;
    }
  }

  get errorControl() {
    return this.tourFinishForm.controls;
  }
}
