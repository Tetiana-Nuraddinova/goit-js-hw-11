import axios from 'axios';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";



const API_KEY = "51454391-664c00f7a8e881ab1c8a3c773";
const BASE_URL = "https://pixabay.com/api/";

export async function getImagesByQuery(query) {
    const params = {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    };

    return axios.get(BASE_URL, { params })
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log('Error:',error);
        }
        );
}

