import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyServiceService } from 'src/app/create-company/company-service.service';
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
  data: any;
  id: any;

  constructor(
    private formBuilder: FormBuilder,
    private srvc: TourServiceService,
    private accountsrvc: CompanyServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.tourFinishForm = this.formBuilder.group({
      price: ['', Validators.required],
      priceCode: ['', Validators.required],
      driver: [''],
    });
    this.srvc.getCountryCurrencyList().subscribe((res) => {
      this.countryCurrencyList = res;
    });
    this.route.queryParams.subscribe((params) => {
      if (params && params.data) {
        console.log(params.data);
        this.data = params.data;
      }
    });
    
    this.id = localStorage.get("id")
  }

  public submitTour() {
    this.isSubmitted = true;
    if (!this.tourFinishForm.valid) {
      console.log('Please provide all the required values!');
      return false;
    } else {
      console.log(this.id);
      console.log(this.tourFinishForm.value);
      this.tourFinishForm.get('price').value;
      const data_road = {
        description: '',
        price: 2,
        duration: '',
        image: '',
        title: '',
        location: '(1212121212,-1212121212)',
        city_id: 1,
        enterprise: this.id,
      };
      this.srvc.createTour(data_road);
    }
  }

  get errorControl() {
    return this.tourFinishForm.controls;
  }
}
