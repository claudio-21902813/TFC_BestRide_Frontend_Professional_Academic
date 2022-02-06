import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Map, tileLayer, marker } from 'leaflet';
import { TourServiceService } from '../../tour-management/tour-service.service';
import { Address } from './AddressMarker';
import { PointInterest } from './PointInterest';
@Component({
  selector: 'app-create-tour-point',
  templateUrl: './create-tour-point.page.html',
  styleUrls: ['./create-tour-point.page.scss'],
})
export class CreateTourPointPage implements OnInit {
  interestForm: FormGroup;
  submited = false;
  private map: Map;
  private newMarker: any;
  public poi: PointInterest = {};
  public searchValue: string;
  public ListSuggestions: Array<string> = [];
  public image_list = [];

  constructor(
    private formBuilder: FormBuilder,
    private service: TourServiceService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.interestForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      address: ['', Validators.required],
      lat: ['', Validators.required],
      lng: ['', Validators.required],
      image: [''],
    });
  }

  ionViewDidEnter() {
    this.loadMap();
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  loadMap() {
    this.map = new Map('map').setView([38.72847, -9.13823], 13);

    tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      attribution: 'BestRide.com',
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    }).addTo(this.map);

    this.map.on('click', (e) => {
      if (this.newMarker != null) {
        this.map.removeLayer(this.newMarker);
      }
      this.onMapClick(e);
    });
  }

  onMapClick(e) {
    /**
     * Get Coordinates and address from marker
     */
    this.newMarker = marker([e.latlng.lat, e.latlng.lng]).addTo(this.map);
    const coords = {
      lat: e.latlng.lat,
      lng: e.latlng.lng,
    };
    this.service.get_address(coords).subscribe((res) => {
      this.interestForm.get('address').setValue(res['address']['ShortLabel']);
      this.interestForm.get('lat').setValue(res['location'].y);
      this.interestForm.get('lng').setValue(res['location'].x);
    });
  }

  public submitForm() {
    this.submited = true;
    if (!this.interestForm.valid) {
      console.log('Please provide all the required values!');
      return false;
    } else {
      if (this.image_list[0] != null) {
        this.interestForm.get('image').setValue(this.image_list[0]);
      }
      this.modalCtrl.dismiss({
        title: this.interestForm.get('title').value,
        address: this.interestForm.get('address').value,
        description: this.interestForm.get('description').value,
        lat: this.interestForm.get('lat').value,
        lng: this.interestForm.get('lng').value,
        image: this.interestForm.get('image').value,
      });
    }
  }
  public get errorControl() {
    return this.interestForm.controls;
  }

  updateSearch(event: any) {
    this.ListSuggestions = [];
    const place = event['detail'].value;
    this.service.get_suggestions(place).subscribe(
      (res) => {
        for (let r of res['suggestions']) {
          this.ListSuggestions.push(r.text);
        }
      },
      (err) => {
        //console.log(err);
      }
    );
  }

  public itemClick(name: any) {
    /**
     * Event when item in list is clicked
     * retrieve coordinates and address
     * from marker
     */
    console.log(name);
    this.service.get_suggestions_coords(name).subscribe(
      (res) => {
        this.interestForm.get('address').setValue(res['candidates'][0].address);
        this.interestForm
          .get('lat')
          .setValue(res['candidates'][0]['location'].y);
        this.interestForm
          .get('lng')
          .setValue(res['candidates'][0]['location'].x);
        if (this.newMarker != null) {
          this.map.removeLayer(this.newMarker);
        }
        this.newMarker = marker([
          res['candidates'][0]['location'].y,
          res['candidates'][0]['location'].x,
        ]).addTo(this.map);

        this.map.setView(
          [
            res['candidates'][0]['location'].y,
            res['candidates'][0]['location'].x,
          ],
          15
        );
        this.ListSuggestions = [];
      },
      (err) => {
        console.log(err);
      }
    );
  }

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
}
