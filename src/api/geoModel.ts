type TypeName = "name" | "Feature" | "FeatureCollection" | "Polygon";
type Pins = number[][];

interface ObjectJson {
    typeName: TypeName;
}

export interface GeoJson extends ObjectJson {
    crs: Crs;
    features: FeatureJson[];
}

interface Crs extends ObjectJson {
    properties: {
        name: string;
    };
}

interface FeatureJson extends ObjectJson {
    properties: {
        name: string;
        childNum: number;
        cp: any;
    };
    geometry: Geometry;
}

interface Geometry extends ObjectJson {
    coordinates: Pins[];
}

export const getPins = (geoJSON: GeoJson, nameCountry?: string): Pins => {
    if (nameCountry) {
        return geoJSON.features.filter(featureJson => featureJson.properties.name === nameCountry)[0].geometry[0];
    }
    
    // If we don't know the country, returns all the pins by default.
    return getAllPins(geoJSON);
}

const getAllPins = (geoJSON: GeoJson): Pins => {
    let allPins: Pins = [];

    geoJSON.features.forEach(feature => {
        allPins = allPins.concat(feature.geometry.coordinates[0]);
    });

    return allPins;
}
