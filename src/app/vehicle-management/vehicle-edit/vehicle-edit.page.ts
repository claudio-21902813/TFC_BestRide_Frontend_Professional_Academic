import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Vehicle } from '../vehicle';
import { VehicleManagementService } from '../vehicle-management-service';

@Component({
  selector: 'app-vehicle-edit',
  templateUrl: './vehicle-edit.page.html',
  styleUrls: ['./vehicle-edit.page.scss'],
})
export class VehicleEditPage implements OnInit {
  ionicForm: FormGroup;
  idVehicle: any;

  public isSubmitted = false;
  public image_list = [];

  constructor(
    public activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    public router: Router,
    private srvc: VehicleManagementService,
    private modalCtrl: ModalController
  ) {
    this.ionicForm = this.formBuilder.group({
      title: ['', Validators.required],
      seats: ['', [Validators.required, Validators.min(1), Validators.max(10000)]],
      registration: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  private formPut(control: string, val: string) {
    this.ionicForm.get('' + control).setValue(val);
  }

  ngOnInit() {
    this.srvc.getVehicle(Number(this.idVehicle)).subscribe(
      (resp) => {
        this.formPut('title', resp[0]['title']);
        this.formPut('seats', resp[0]['seats']);
        this.formPut('description', resp[0]['description']);
        this.image_list.push(resp[0]['image']);
        this.formPut('registration', resp[0]['registration']);
      },
      (error) => {}
    );
  }

  ionViewDidEnter() {}

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

  public close() {
    this.modalCtrl.dismiss();
  }

  public submitForm() {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      return false;
    } else {
      const form_data = {
        title: '' + this.ionicForm.get('title').value,
        seats: Number('' + this.ionicForm.get('seats').value),
        description: '' + this.ionicForm.get('description').value,
        image: '' + this.image_list,
        registration: '' + this.ionicForm.get('registration').value,
        enterprise: Number(localStorage.getItem('userID')),
      };
      this.srvc.updateVehicle(form_data, this.idVehicle);
      this.close();
    }
  }

  public deleteVehicle(id: any) {
    this.srvc.deleteVehicle(Number(id));
    this.close();
  }

  get errorControl() {
    return this.ionicForm.controls;
  }
}
