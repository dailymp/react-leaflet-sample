import { GeoJson, getPins } from "./geoModel";

const buildGeoJsonExample = (): GeoJson => ({
  "typeName": "FeatureCollection",
  "crs": {
    "typeName": "name",
    "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" }
  },
  "features": [
    {
      "typeName": "Feature",
      "properties": { "name": "Somalia", "childNum": 1, "cp": null },
      "geometry": {
        "typeName": "Polygon",
        "coordinates": [
          [
            [47.97822265625001, 7.9970703125],
            [46.97822265625001, 7.9970703125],
            [43.98378906250002, 9.008837890624989],
          ]
        ]
      }
    },
    {
      "typeName": "Feature",
      "properties": { "name": "Liechtenstein", "childNum": 1, "cp": null },
      "geometry": {
        "typeName": "Polygon",
        "coordinates": [
          [
            [9.579979133936737, 47.05856388629306],
            [9.409458596647225, 47.02019676540292],
            [9.46249431093294, 47.09010747968864],
            [9.46249431093294, 47.19858962254578],
            [9.527658197470123, 47.27026989773668],
            [9.579979133936737, 47.05856388629306]
          ]
        ]
      }
    }
  ]
});

describe('Testing getPins', () => {
    it('Get all the pins', () => {
      const geoJson: GeoJson = buildGeoJsonExample();

      const allPins: number[][] = getPins(geoJson);

      expect(allPins.length).toBeGreaterThan(0);
      expect(allPins[0].length).toBe(2);
    });
});
