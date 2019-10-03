import axios from 'axios'

const apiHost = 'http://127.0.0.1:3001'

const getApplications = () => {
  return axios.get(`${apiHost}/applications`).then((res) => {
    return Promise.resolve(res.data.data)
  })
}

const createApplication = (name, type, resources) => {
  return axios.post(`${apiHost}/applications`,{name, type, resources}).then((res) =>{
    return Promise.resolve(res)
  })
}
export {
  getApplications, 
  createApplication
}
