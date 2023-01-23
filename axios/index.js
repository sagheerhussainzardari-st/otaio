import axios from 'axios'
import { apiEndPoint, apiMethods } from 'constants/apiEndPoint';
class ApiWrapper {
   constructor() {
      this.baseURL = apiEndPoint
      this.axiosInstance = axios.create({
         baseURL: this.baseURL,
         timeout: 10000,
         timeoutErrorMessage: 'server request is failed',
      });
   }
   async method(methodType, body = null, config = {}) {
      if (apiMethods.includes(methodType.toLowerCase())) {
         try {
            return Promise.resolve(await this.axiosInstance[methodType.toLowerCase()](type, this.baseURL, body, config))
         } catch (error) {
            return Promise.reject(error);
         }
      }
   }
}
export const api = new ApiWrapper();
