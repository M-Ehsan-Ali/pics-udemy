
import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID cs8Fp7PKN6R_Q-DKg0oveVnDSrjdnFhyyjjj47Bxnb4'
    }
})