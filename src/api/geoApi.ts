import axios from 'axios';
import { GeoJson } from './geoModel';

const baseRoot = 'https://my-json-server.typicode.com/dailymp/react-leaflet-sample/GeoJson';

export const postGeoJson = (geo: GeoJson): Promise<GeoJson> => {
    return axios.post(baseRoot, geo);
}

export const getGeoJson = (): Promise<GeoJson> => {
    return axios.get(baseRoot)
        .then((response: any): GeoJson => ({...response.data}));
}

export const putGeoJson = (geo: GeoJson): Promise<GeoJson> => {
    return axios.put(baseRoot, geo);
}

export const deleteGeoJson = (): Promise<GeoJson> => {
    return axios.delete(baseRoot);
}
