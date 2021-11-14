import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-professional',
  templateUrl: './form-professional.page.html',
  styleUrls: ['./form-professional.page.scss'],
})
export class FormProfessionalPage implements OnInit {
  public submited = false;
  public professionalForm: FormGroup;

  constructor(public formBuilder: FormBuilder) {}

  ngOnInit() {
    this.professionalForm = this.formBuilder.group({
      docImage: ['', Validators.required],
      nif: ['', Validators.required],
      course: ['', Validators.required],
      driver_l: ['', Validators.required],
      ancat_l: ['', Validators.required],
      rnaat_l: ['', Validators.required],
      bank_iban: ['', Validators.required],
      emerg_contact_name: ['', Validators.required],
      emerg_contact_phone: ['', Validators.required],
      emerg_contact_relation: ['', Validators.required],
      profile_photo: ['', Validators.required],
      driver_type: ['', Validators.required],
      about: ['', Validators.required],
      video: [''],
      activity_start: [''],
    });
  }

  getIdDocs() {
    this.professionalForm.get('docImage').setValue('');
  }

  public submitForm() {
    this.submited = true;
    if (!this.professionalForm.valid) {
      console.log('Please provide all the required values!');
      return false;
    } else {
      console.log(this.professionalForm.value);
    }
  }

  public get errorControl() {
    return this.professionalForm.controls;
  }
}
