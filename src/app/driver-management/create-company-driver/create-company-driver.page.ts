import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-company-driver',
  templateUrl: './create-company-driver.page.html',
  styleUrls: ['./create-company-driver.page.scss'],
})
export class CreateCompanyDriverPage implements OnInit {
  public createDriver: FormGroup;
  public submitted = false;

  constructor(
    private modalCtrl: ModalController,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.createDriver = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      nif: ['', Validators.required],
      car: ['', Validators.required],
      description: [''],
    });
  }

  public submitForm() {
    this.submitted = true;
    if (!this.createDriver.valid) {
      console.log('Please provide all the required values!');
      return false;
    } else {
      console.log(this.createDriver);
    }
  }

  get errorControl() {
    return this.createDriver.controls;
  }

  public close() {
    this.modalCtrl.dismiss();
  }
}
