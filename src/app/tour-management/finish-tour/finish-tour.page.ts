import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyServiceService } from 'src/app/create-company/company-service.service';
import { VehicleManagementService } from 'src/app/vehicle-management/vehicle-management-service';
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
  public enterprise_commission = 0.75;
  public drivers = [
    {
      name: 'driver1',
    },
    {
      name: 'driver2',
    },
  ];

  data: any;
  id: any;

  constructor(
    private formBuilder: FormBuilder,
    private srvc: TourServiceService,
    private accountsrvc: CompanyServiceService,
    private route: ActivatedRoute,
    private vehicleSvc: VehicleManagementService
  ) {}

  ngOnInit() {
    this.tourFinishForm = this.formBuilder.group({
      price: [
        '',
        [
          Validators.required,
          Validators.pattern('^(\\d+(\\.\\d{0,2})?|\\.?\\d{1,2})$'),
        ],
      ],
      price_ind: [Validators.required],
      driver: [''],
    });
    this.srvc.getCountryCurrencyList().subscribe((res) => {
      this.countryCurrencyList = res;
    });
    this.route.params.subscribe((params) => {
      this.data = params;
    });

    this.tourFinishForm.get('price_ind').setValue('EUR');
  }

  public submitTour() {
    this.isSubmitted = true;
    if (!this.tourFinishForm.valid) {
      console.log('Please provide all the required values!');
      return false;
    } else {
      const data_road = {
        description: this.data['description'],
        price: '' + this.tourFinishForm.get('price').value,
        duration: '2 h',
        image: 'teste.png',
        title: this.data['name'],
        location: 'POINT(1212121212 -1212121212)',
        city_id: 1,
        enterprise: '' + localStorage.getItem('userID'),
      };
      this.srvc.createTour(data_road);
    }
  }

  get errorControl() {
    return this.tourFinishForm.controls;
  }
}
