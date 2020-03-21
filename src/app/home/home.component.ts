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
    var request = new XMLHttpRequest();
    var token = "F9bQK456iUpJVZJLTZsMEKhhENqnGJ";

    request.open(
      "GET",
      "https://coronaviva.herokuapp.com/api/1/cronavirues/area/"
    );

    var pointsDataMarkers = Array();

    window.onload = function() {
      request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var data = JSON.parse(this.responseText);

          var defaultZoom = 4;
          var defaultCenter = [52.215933, 19.134422];
          var map = L.map("map", {
            center: defaultCenter,
            zoom: defaultZoom,
            maxZoom: 20,
            minZoom: 2
          });

          L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          }).addTo(map);

          map.addLayer(pointsLayer);

          console.log(data);
          data.forEach(point => {
            var don = L.marker([point.lat, point.long]);
            don
              .addTo(map)
              .bindPopup(
                "<b>Country:</b> " +
                  point.country +
                  "<br />" +
                  " <b>Confirmed Case:</b> " +
                  point.totalConfirmed +
                  "<br />" +
                  " <b>Death Cases:</b> " +
                  point.totalDeaths +
                  "<br />" +
                  " <b>Recovered Cases:</b> " +
                  point.totalRecovered
              );

            // map.fitBounds(don.getBounds());

            // marker.bindPopup(display_text);
            // pointsDataMarkers.push(marker);
          });
        }
      };

      var pointsLayer = L.layerGroup(pointsDataMarkers);
      request.setRequestHeader("Content-Type", "application/json");
      request.setRequestHeader("Authorization", "Bearer " + token);
      request.send();
    };
  }
}
