import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Map } from 'leaflet';
import { TourServiceService } from '../../tour-management/tour-service.service';
import { CreateTourPointService } from './create-tour-point.service';
import { PointInterest } from './PointInterest';
@Component({
  selector: 'app-create-tour-point',
  templateUrl: './create-tour-point.page.html',
  styleUrls: ['./create-tour-point.page.scss'],
})
export class CreateTourPointPage implements OnInit {
  public interestForm: FormGroup;
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
    private modalCtrl: ModalController,
    private leafService: CreateTourPointService
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
    this.map = this.leafService.loadMap();
    this.map.on('click', (e) => {
      if (this.newMarker != null) {
        this.map.removeLayer(this.newMarker);
      }
      this.leafService.onMapClick(e).subscribe((response) => {
        this.interestForm
          .get('address')
          .setValue(response['address']['ShortLabel']);
        this.interestForm.get('lat').setValue(response['location'].y);
        this.interestForm.get('lng').setValue(response['location'].x);
      });
    });
  }

  public submitForm() {
    this.submited = true;
    if (!this.interestForm.valid) {
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
    this.service.get_suggestions(place).subscribe((res) => {
      for (let r of res['suggestions']) {
        this.ListSuggestions.push(r.text);
      }
    });
  }

  public itemClick(name: any) {
    /**
     * Event when item in list is clicked
     * retrieve coordinates and address
     * from marker
     */
    this.service.get_suggestions_coords(name).subscribe(
      (res) => {
        this.interestForm.get('address').setValue(res['candidates'][0].address);
        this.interestForm
          .get('lat')
          .setValue(res['candidates'][0]['location'].y);
        this.interestForm
          .get('lng')
          .setValue(res['candidates'][0]['location'].x);

        this.leafService.markerList(res);
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
