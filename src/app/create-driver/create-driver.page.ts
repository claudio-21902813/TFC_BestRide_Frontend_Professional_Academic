import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateDriverServiceService } from './create-driver-service.service';

@Component({
  selector: 'app-create-driver',
  templateUrl: './create-driver.page.html',
  styleUrls: ['./create-driver.page.scss'],
})
export class CreateDriverPage implements OnInit {
  public driverForm: FormGroup;
  public isSubmitted = false;

  constructor(
    public form: FormBuilder,
    private driver_serv: CreateDriverServiceService,
    private router: Router
  ) {
    this.driverForm = this.form.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit() {}

  public create_account() {
    /*this.isSubmitted = true;
    if (!this.driverForm.valid) {
      return false;
    } else {
      const form_data = {
        username: 'driver test',
        email: this.driverForm.get('email').value,
        password: this.driverForm.get('password').value,
      };
      this.driver_serv.create_driver_account(form_data);
    }*/
    this.router.navigate(['/form-professional']);
  }

  get errorControl() {
    return this.driverForm.controls;
  }
}
