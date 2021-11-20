import axios from 'axios'

export const getAllExerciseWeightInfo = async () => {
  const options = {
    method: 'GET',
    url: `http://localhost:8000/exercise/api/`
  }

  const { data } = await axios.request(options)

  return data
}

export const addSessionWeight = (formData) => {
  return axios.post(
    `https://summit2app.herokuapp.com/exercise/userlog/`,
    formData
  )
}

// AUTH METHODS

// export const registerUser = (formData) => {
//   return axios.post(`http://localhost:8000/exercise/user/`, formData)
// }

// export const loginUser = (formData) => {
//   return axios.post(
//     `http://localhost:8000/exercise/accounts/login/`,
//     formData
//   )
// }

export const removeToken = () => {
  return window.localStorage.removeItem('token')
}
