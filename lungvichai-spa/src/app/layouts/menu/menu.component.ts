import { Component, OnInit } from "@angular/core";
export interface RouteInfo {
  path: string;
  title: string;
  iconClass: string;
  class: string;
  /**
   * sdf
   */
  hrefId?: string;
  subPath: RouteInfo[];
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/home",
    title: "Dashboard",
    iconClass: "fas fa-atlas",
    class: "",
    hrefId: "dashboard",
    subPath: []
  },
  {
    path: "",
    title: "Transactions",
    iconClass: "fas fa-atlas",
    class: "",
    hrefId: "transactions",
    subPath: [
      {
        path: "/transactions/stock-in",
        title: "Stock in",
        iconClass: "fas fa-atlas",
        class: "",
        subPath: []
      },
      {
        path: "/transactions/stock-out",
        title: "Stock out",
        iconClass: "fas fa-atlas",
        class: "",
        subPath: []
      },
      {
        path: "/transactions/stock-adjust",
        title: "Adjust stock",
        iconClass: "fas fa-atlas",
        class: "",
        subPath: []
      }
    ]
  },
  {
    path: "",
    title: "Master Data",
    iconClass: "fas fa-atlas",
    class: "",
    hrefId: "masterData",
    subPath: [
      {
        path: "/master/products",
        title: "Products",
        iconClass: "fas fa-atlas",
        class: "",
        subPath: []
      },
      {
        path: "/master/categories",
        title: "Categories",
        iconClass: "fas fa-atlas",
        class: "",
        subPath: []
      },
      {
        path: "/master/locations",
        title: "Locations",
        iconClass: "fas fa-atlas",
        class: "",
        subPath: []
      }
    ]
  },
  {
    path: "/accounting",
    title: "Accounting",
    iconClass: "fas fa-atlas",
    class: "",
    hrefId: "accounting",
    subPath: []
  },
  {
    path: "/logging",
    title: "Logging",
    iconClass: "fas fa-atlas",
    class: "",
    hrefId: "logging",
    subPath: []
  }
];
@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"]
})
export class MenuComponent implements OnInit {
  public menuItems: RouteInfo[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
}
