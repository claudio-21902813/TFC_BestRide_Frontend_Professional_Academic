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

  public imageDoc: any;
  async getIdDocs(fileInput: any, variable: String) {
    this.professionalForm.get('' + variable).setValue('');
    if (fileInput.target.files && fileInput.target.files[0]) {
      // Size Filter Bytes
      const max_size = 20971520;
      const allowed_types = ['image/png', 'image/jpeg'];
      const max_height = 15200;
      const max_width = 25600;

      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = (rs) => {
          const img_height = rs.currentTarget['height'];
          const img_width = rs.currentTarget['width'];

          console.log(img_height, img_width);
          const imgBase64Path = e.target.result;
          this.imageDoc = imgBase64Path;
          this.professionalForm.get('' + variable).setValue('' + imgBase64Path);
          //this.isImageSaved = true;
        };
      };

      reader.readAsDataURL(fileInput.target.files[0]);
    }
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
