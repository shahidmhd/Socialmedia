import axios from 'axios'
const slice=localStorage.getItem("reduxState")
let tokendata=JSON.parse(slice)
const token=tokendata.Authslice.token



const instance = axios.create({
    baseURL: "http://localhost:8000",
    // headers: { authorization: `Bearer ${token}` },
  });


  export default instance