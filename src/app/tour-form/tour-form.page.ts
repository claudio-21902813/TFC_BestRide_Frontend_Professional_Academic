import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Tour } from './tour';
import { Map, tileLayer, marker } from 'leaflet';
import {
  NativeGeocoder,
} from '@ionic-native/native-geocoder/ngx';
import { TourServiceService } from './tour-service.service';
@Component({
  selector: 'app-tour-form',
  templateUrl: './tour-form.page.html',
  styleUrls: ['./tour-form.page.scss'],
})
export class TourFormPage implements OnInit {
  ionicForm: FormGroup;
  public isSubmitted = false;
  public tour_array: Array<Tour> = [];
  map: Map;
  newMarker: any;
  public street_address: String;
  public lat: string;
  public lng: string;
  public interest_points = false;
  public drivers = [
    {
      name: 'Driver 1',
    },
    {
      name: 'Driver 2',
    },
    {
      name: 'Driver 3',
    },
  ];

  constructor(
    public formBuilder: FormBuilder,
    private geocoder: NativeGeocoder,
    private tour_svc: TourServiceService
  ) {}

  ngOnInit() {
    //this.loadMap();
    //this.locatePosition();
    this.ionicForm = this.formBuilder.group({
      name: ['', Validators.required],
      vehicle : ['',Validators.required],
      photos : ['',Validators.required],
      videos : ['',Validators.required],
      interest_name : ['',Validators.required],
      description : ['',Validators.required],
      driver : ['',Validators.required],
      max_persons : ['',Validators.required],
      tour_price : ['',Validators.required],
    });
  }

  // The below function is added
  ionViewWillEnter() {
    this.loadMap();
  }

  ionViewDidEnter() {
    this.locatePosition();
  }

  // The below function is added
  loadMap() {
    this.map = new Map('mapId').setView([38.72847, -9.13823], 13);

    tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      attribution: 'BestRide.com',
    }).addTo(this.map);
  }

  locatePosition() {
    this.map.locate({ setView: true }).on('locationfound', (e: any) => {
      this.newMarker = marker([e.latitude, e.longitude], {
        draggable: true,
      }).addTo(this.map);
      this.newMarker.bindPopup('You are located here!').openPopup();
      this.newMarker.on('dragend', () => {
        const position = this.newMarker.getLatLng();
        this.tour_svc
          .get_address({
            lat: position.lat,
            lng: position.lng,
          })
          .subscribe((res) => {
            this.lat = position.lat;
            this.lng = position.lng;
            this.street_address = res['address'].Address;
          });
      });
    });
  }

  public addTourList() {
    this.interest_points = true;
    if (!this.ionicForm.get('interest_name').valid) {
      return false;
    } else {
      this.tour_array.push({
        street: '' + this.street_address,
        lat: this.lat,
        lng: this.lng,
        name: this.ionicForm.get('name').value,
        description: this.ionicForm.get('description').value,
      });
    }
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

  get errorControl() {
    return this.ionicForm.controls;
  }

  public removeTourList(index: any) {
    this.tour_array.splice(index, 1);
  }
}
