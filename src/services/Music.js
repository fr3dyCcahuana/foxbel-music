/* eslint-disable */
import axios from "axios";

const URL = `${process.env.VUE_APP_API_URL}/search`;

export default{
    
    find(data={}){
        console.log(URL);
        return axios.get(URL, {
            params: data
        });
    }
};