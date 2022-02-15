import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { TourServiceService } from '../tour-service.service';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import { PointInterest } from '../create-tour-point/PointInterest';
import { CreateTourPointPage } from '../create-tour-point/create-tour-point.page';
import { NavigationExtras, Router } from '@angular/router';
import { ViewTourPoiPage } from '../view-tour-poi/view-tour-poi.page';
import { EditTourPoiPage } from '../edit-tour-poi/edit-tour-poi.page';
@Component({
  selector: 'app-create-tour',
  templateUrl: './create-tour.page.html',
  styleUrls: ['./create-tour.page.scss'],
})
export class CreateTourPage implements OnInit {
  ionicForm: FormGroup;
  public isSubmitted = false;
  public ipoints_arr: Array<PointInterest> = [
    {
      title: 'something...',
      address: 'lirem',
      description: 'eded deede de ee',
    },
  ];
  public interest_points = false;

  constructor(
    public formBuilder: FormBuilder,
    private geocoder: NativeGeocoder,
    private tour_svc: TourServiceService,
    private modalCtrl: ModalController,
    private navParams: NavParams,
    private router: Router
  ) {}

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      photo: [''],
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
  }

  public submitForm() {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log('Please provide all the required values!');
      return false;
    } else {
      this.modalCtrl.dismiss();
      const data_env = this.ionicForm.value;
      this.router.navigate(['/finish-tour', data_env]);
    }
  }

  get errorControl() {
    return this.ionicForm.controls;
  }

  async openInterestPoint() {
    const modal = await this.modalCtrl.create({
      component: CreateTourPointPage,
    });

    // get Interest Point
    modal.onDidDismiss().then((data) => {
      this.ipoints_arr.push({
        title: data['data'].title,
        address: data['data'].address,
        description: data['data'].description,
        lat: data['data'].lat,
        lng: data['data'].lng,
        image: data['data'].image,
      });
    });
    return await modal.present();
  }

  public close() {
    this.modalCtrl.dismiss();
  }

  async seePOI(poi: any) {
    const modal = await this.modalCtrl.create({
      component: ViewTourPoiPage,
      componentProps: {
        poi: poi,
      },
    });

    await modal.present();
  }

  public deletePoiItemList(index: any) {
    /**
     * Remove element from list
     */
    this.ipoints_arr.splice(index, 1);
  }

  public async editPoiItemList(index, poi: any) {
    /**
     * Open the modal to edit POI
     */
    const modal = await this.modalCtrl.create({
      component: EditTourPoiPage,
      componentProps: {
        poi: poi,
      },
    });

    await modal.present();

    return modal.onDidDismiss();
  }
}
