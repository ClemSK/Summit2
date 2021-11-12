import axios from 'axios'

export const getAllExerciseWeightInfo = async () => {
  const options = {
    method: 'GET',
    url: `http://localhost:8000/exercise/api/`
  }

  const { data } = await axios.request(options)

  return data
}

export const addSessionWeight = (exercise_weight) => {
  return axios.post(`http://localhost:8000/exercise/api/`, exercise_weight)
}
