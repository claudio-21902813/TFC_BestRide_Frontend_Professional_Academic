import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertPopup } from '../shared/services/alert-popup';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public slideOpts = {
    initialSlide: 1,
    speed: 300,
    effect: 'flip',
  };

  public scheduleTours = [
    {
      name: 'Lisbon Tour',
      duration: '2 h',
      people: '5',
      start_hour: '15:45',
      end_hour: '16:34',
    },
    {
      name: 'Alameda Tour',
      duration: '25 Min',
      people: '10',
      start_hour: '16:00',
      end_hour: '16:25',
    },
    {
      name: 'Cais Sodre Tour',
      duration: '1 h',
      people: '7',
      start_hour: '17:30',
      end_hour: '18:30',
    },
  ];

  public dateToday: Date = new Date();

  constructor(
    private router: Router,
    private http: HttpClient,
    private alert: AlertPopup
  ) {}

  ngOnInit() {}

  image: any;
  private file: File;

  getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

  async uploadPhoto(fileChangeEvent) {
    // Get a reference to the file that has just been added to the input
    this.file = fileChangeEvent.target.files[0];

    await this.getBase64(this.file).then((data) => {
      this.image = data;
      console.log(this.image);
    });

    await console.log(this.image);
  }

  public navigate(page: string) {
    this.router.navigate(['/' + page]);
  }
}
