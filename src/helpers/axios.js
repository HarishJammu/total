import axios from 'axios';
import { Api } from '../urlConfig';

const token=window.localStorage.getItem('token')

const axiosIntance=axios.create({
   baseURL:Api,
   headers:{
       "Authorization": token ? `Bearer ${token}`:''
    }
})
export default axiosIntance;