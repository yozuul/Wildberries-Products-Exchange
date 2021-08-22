import axios from 'axios'

class Fetch {
   constructor(url) {
      this.url = url
      this.headers = {
         Authorization: `Bearer ${process.env.WD_TOKEN}`,
         'Content-Type': 'application/json'
      }
   }
   async getData(data) {
      console.log(this.headers);
      if (data) {
         return await axios.get(this.url, ...data, fetchParams)
      } else {
         return await axios.get(this.url, fetchParams)
      }
   }
   async postData(data) {
      if (data) {
         return await axios.post(this.url, ...data, fetchParams)
      } else {
         return await axios.post(this.url, fetchParams)
      }
   }
}

export { Fetch }