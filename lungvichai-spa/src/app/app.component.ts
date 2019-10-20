import { environment } from "./../environments/environment";
import { Component, OnInit, AfterViewInit } from "@angular/core";
import { jsUtility } from "./jsUtility";
import {
  Router,
  NavigationStart,
  NavigationEnd,
  NavigationCancel
} from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  constructor(private _router: Router) {}
  ngOnInit(): void {
    this._router.events.subscribe(route => {
      if (route instanceof NavigationStart) {
        console.log("nav start");
      }
      if (route instanceof NavigationEnd) {
        
        console.log("nav end");
        jsUtility.initialApp();
      }
      if (route instanceof NavigationCancel) {
        console.log("nav end");
      }
    });
  }
  title = "lungvichai-spa";
}
