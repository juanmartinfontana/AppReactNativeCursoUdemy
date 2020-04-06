import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer UTltHT7wyfvJyZ-DpDQOIOr0sfu2NIffScVLSGrGqPmr8HK862ZoqCikIN9Lr67LJMvyoz1Oz4nelwkhsfCl796HL0uxvZkVMysQe85U-c_IVWG9svGjBLHrOBqJXnYx'
    }
})