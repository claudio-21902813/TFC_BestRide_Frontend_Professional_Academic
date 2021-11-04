import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router, private http: HttpClient) {}

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
