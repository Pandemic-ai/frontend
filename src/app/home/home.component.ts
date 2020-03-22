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

          // map.addLayer(pointsLayer);

          var greenIcon = L.icon({
            iconUrl:
              "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png",

            iconSize: [50, 40], // size of the icon

            iconAnchor: [25, 40] // point of the icon which will correspond to marker's location
          });

          data.forEach(point => {
            var don = L.marker([point.lat, point.long], { icon: greenIcon });
            // coordinates.push(don);

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

            // var group = new L.featureGroup(don);
            // map.fitBounds(group.getBounds());
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
