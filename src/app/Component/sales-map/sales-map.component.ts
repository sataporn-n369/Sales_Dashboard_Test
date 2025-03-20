import { Component, AfterViewInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

@Component({
  selector: 'app-sales-map',
  imports: [],
  templateUrl: './sales-map.component.html',
  styleUrl: './sales-map.component.css'
})


export class SalesMapComponent{
  ngOnInit(){
    var root = am5.Root.new("chartdiv"); 

// Set themes
root.setThemes([
  am5themes_Animated.new(root)
]);

var chart = root.container.children.push(
  am5map.MapChart.new(root, {
    panX: "rotateX",
    projection: am5map.geoNaturalEarth1()
  })
);

// Create polygon series
var polygonSeries = chart.series.push(
  am5map.MapPolygonSeries.new(root, {
    geoJSON: am5geodata_worldLow,
    exclude: ["AQ"]
  })
);

polygonSeries.mapPolygons.template.setAll({
  fill: am5.color(0xE0E0E0)
});

polygonSeries.mapPolygons.template.setAll({
  tooltipText: "{name}",
  templateField: "polygonSettings"
});

polygonSeries.mapPolygons.template.states.create("hover", {
  fill: am5.color(0x677935)
});

polygonSeries.data.setAll([{
  id: "CN",
  polygonSettings: {
    fill: am5.color(0x8950FC)
  }
}, {
  id: "SA",
  polygonSettings: {
    fill: am5.color(0x00AB9A)
  }
}, {
  id: "ID",
  polygonSettings: {
    fill: am5.color(0x0BB783)
  }
}, {
  id: "CD",
  polygonSettings: {
    fill: am5.color(0x6993FF)
  }
}, {
  id: "BR",
  polygonSettings: {
    fill: am5.color(0xF64E60)
  }
}, {
  id: "US",
  polygonSettings: {
    fill: am5.color(0xFFA800)
  }
}]);

  };
}
