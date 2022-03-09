import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmServiceService } from './confirm-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-confirm-account',
  templateUrl: './confirm-account.page.html',
  styleUrls: ['./confirm-account.page.scss'],
})
export class ConfirmAccountPage implements OnInit {
  confirmForm: FormGroup;
  submited = false;
  private source: any;

  constructor(
    public formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private svc: ConfirmServiceService,
    private menuCtrl: MenuController
  ) {
    this.route.queryParams.subscribe((params) => {
      if (params && params.source) {
        this.source = params.source;
      }
    });
  }

  ngOnInit() {
    this.menuCtrl.enable(false);
    this.confirmForm = this.formBuilder.group({
      code: ['', Validators.required],
    });
  }

  public submitForm() {
    this.submited = true;
    if (!this.confirmForm.valid) {
      return false;
    } else {
      const data = {
        email: '' + localStorage.getItem('emailCache'),
        code: '' + this.confirmForm.get('code').value,
      };
      console.log(localStorage.getItem('emailCache'));
      console.log(this.confirmForm.get('code').value);
      if (this.source === 'company') {
        this.svc.confirmEnterpriseAccount(data);
      } else {
        this.svc.confirmDriverAccount(data);
      }
    }
  }

  public resendCode() {
    const data = {
      email: localStorage.getItem('emailCache'),
    };
    this.svc.resendCodeAccount(data);
  }

  get errorControl() {
    return this.confirmForm.controls;
  }
}
