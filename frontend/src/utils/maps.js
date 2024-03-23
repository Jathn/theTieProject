import axios from 'axios';

const getNearestRoads = (reported_point) => {
    const url = 'https://roads.googleapis.com/v1/nearestRoads';
    const params = {
        key: 'AIzaSyDc9OHUFfCXq9Qp9I3_8uoe-y7GSBsdiSw',
        lat: reported_point.lat,
        lng: reported_point.lng,
    };

    try {
        return axios.get(url, {params: params});
    } catch (error) {
        console.error(error);
    }
}

export default { getNearestRoads };