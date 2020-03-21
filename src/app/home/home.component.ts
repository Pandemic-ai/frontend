import { Component, OnInit } from "@angular/core";
import * as L from "leaflet";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  private map;

  constructor() {}

  ngOnInit() {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map("map").setView([46.879966, -121.726909], 3);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
  }

}
