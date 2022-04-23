import { Component } from "@angular/core";

import { Platform } from "@ionic/angular";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    public router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.router.navigateByUrl("splash");
    });
  }

  HomeFunction() {
    let home = document.getElementById("home");
    let wetfoods = document.getElementById("wetfoods");
    let dryfoods = document.getElementById("dryfoods");
    let rawfoods = document.getElementById("rawfoods");
    let contactUs = document.getElementById("contactUs");
    let aboutUs = document.getElementById("aboutUs");
    let developers = document.getElementById("developers");
    let list = [
      home,
      wetfoods,
      dryfoods,
      rawfoods,
      contactUs,
      aboutUs,
      developers,
    ];

    for (let i = 0; i < list.length; i++) {
      list[i].classList.remove("active");
    }
    home.classList.add("active");
  }

  WetfoodsFunction() {
    let home = document.getElementById("home");
    let wetfoods = document.getElementById("wetfoods");
    let dryfoods = document.getElementById("dryfoods");
    let rawfoods = document.getElementById("rawfoods");
    let contactUs = document.getElementById("contactUs");
    let aboutUs = document.getElementById("aboutUs");
    let developers = document.getElementById("developers");
    let list = [
      home,
      wetfoods,
      dryfoods,
      rawfoods,
      contactUs,
      aboutUs,
      developers,
    ];

    for (let i = 0; i < list.length; i++) {
      list[i].classList.remove("active");
    }
    wetfoods.classList.add("active");
  }
  dryfoodsFunction() {
    let home = document.getElementById("home");
    let wetfoods = document.getElementById("wetfoods");
    let dryfoods = document.getElementById("dryfoods");
    let rawfoods = document.getElementById("rawfoods");
    let contactUs = document.getElementById("contactUs");
    let aboutUs = document.getElementById("aboutUs");
    let developers = document.getElementById("developers");
    let list = [
      home,
      wetfoods,
      dryfoods,
      rawfoods,
      contactUs,
      aboutUs,
      developers,
    ];

    for (let i = 0; i < list.length; i++) {
      list[i].classList.remove("active");
    }
    dryfoods.classList.add("active");
  }
  rawfoodsFunction() {
    let home = document.getElementById("home");
    let wetfoods = document.getElementById("wetfoods");
    let dryfoods = document.getElementById("dryfoods");
    let rawfoods = document.getElementById("rawfoods");
    let contactUs = document.getElementById("contactUs");
    let aboutUs = document.getElementById("aboutUs");
    let developers = document.getElementById("developers");
    let list = [
      home,
      wetfoods,
      dryfoods,
      rawfoods,
      contactUs,
      aboutUs,
      developers,
    ];

    for (let i = 0; i < list.length; i++) {
      list[i].classList.remove("active");
    }
    rawfoods.classList.add("active");
  }
  contactUsFunction() {
    let home = document.getElementById("home");
    let wetfoods = document.getElementById("wetfoods");
    let dryfoods = document.getElementById("dryfoods");
    let rawfoods = document.getElementById("rawfoods");
    let contactUs = document.getElementById("contactUs");
    let aboutUs = document.getElementById("aboutUs");
    let developers = document.getElementById("developers");
    let list = [
      home,
      wetfoods,
      dryfoods,
      rawfoods,
      contactUs,
      aboutUs,
      developers,
    ];
    for (let i = 0; i < list.length; i++) {
      list[i].classList.remove("active");
    }
    contactUs.classList.add("active");
  }
  aboutUsFuntion() {
    let home = document.getElementById("home");
    let wetfoods = document.getElementById("wetfoods");
    let dryfoods = document.getElementById("dryfoods");
    let rawfoods = document.getElementById("rawfoods");
    let contactUs = document.getElementById("contactUs");
    let aboutUs = document.getElementById("aboutUs");
    let developers = document.getElementById("developers");
    let list = [
      home,
      wetfoods,
      dryfoods,
      rawfoods,
      contactUs,
      aboutUs,
      developers,
    ];
    for (let i = 0; i < list.length; i++) {
      list[i].classList.remove("active");
    }
    aboutUs.classList.add("active");
  }

  developersFunction() {
    let home = document.getElementById("home");
    let wetfoods = document.getElementById("wetfoods");
    let dryfoods = document.getElementById("dryfoods");
    let rawfoods = document.getElementById("rawfoods");
    let contactUs = document.getElementById("contactUs");
    let aboutUs = document.getElementById("aboutUs");
    let developers = document.getElementById("developers");
    let list = [
      home,
      wetfoods,
      dryfoods,
      rawfoods,
      contactUs,
      aboutUs,
      developers,
    ];
    for (let i = 0; i < list.length; i++) {
      list[i].classList.remove("active");
    }
    developers.classList.add("active");
  }
}
