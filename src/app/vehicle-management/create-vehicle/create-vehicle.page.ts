import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { VehicleManagementService } from '../vehicle-management-service';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.page.html',
  styleUrls: ['./create-vehicle.page.scss'],
})
export class CreateVehiclePage implements OnInit {
  ionicForm: FormGroup;
  public isSubmitted = false;
  id: any;
  public image_list = [];

  constructor(
    public formBuilder: FormBuilder,
    public router: Router,
    private srvc: VehicleManagementService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      title: ['', Validators.required],
      seats: ['', [Validators.required, Validators.min(1), Validators.max(10000)]],
      registration: ['', Validators.required],
      description: ['', Validators.required],
    });

    this.id = localStorage.getItem('userID');
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
    this.router.navigate(['/vehicle-management']);
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
        enterprise: Number(this.id),
        state: "Test",
        arquivado: "Test",
      };
      this.srvc.createVehicle(form_data);
      this.close();
    }
  }

  get errorControl() {
    return this.ionicForm.controls;
  }
}
