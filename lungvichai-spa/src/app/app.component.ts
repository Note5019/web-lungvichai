import { environment } from './../environments/environment';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private http: HttpClient) {
    this.http.get(`${environment.baseApiURL}/values`).subscribe(res=> console.log(res));
  }
  title = 'lungvichai-spa';
}
