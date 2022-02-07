import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-edit-tour',
  templateUrl: './edit-tour.page.html',
  styleUrls: ['./edit-tour.page.scss'],
})
export class EditTourPage implements OnInit {
  public tour;
  public editTourForm: FormGroup;
  public submited = false;
  constructor(
    private modalCtrl: ModalController,
    public formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    console.log(this.tour);
    this.editTourForm = this.formBuilder.group({
      name: ['' + this.tour.title, Validators.required],
      description: ['' + this.tour.description, Validators.required],
      photo: [''],
      price: ['' + this.tour.price, Validators.required],
    });
  }

  public submitForm() {
    this.submited = true;
    if (!this.editTourForm.valid) {
      console.log('Please provide all the required values!');
      return false;
    } else {
    }
  }

  get errorControl() {
    return this.editTourForm.controls;
  }

  public closeModal() {
    this.modalCtrl.dismiss();
  }
}
