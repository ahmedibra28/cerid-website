import axios from 'axios'

const baseUrl = 'https://api.cerid.so/wp-json/wp/v2'

export const config = () => {
  return {
    headers: {
      'Content-Type': 'application/json',
    },
  }
}

const api = async (method: string, url: string, obj = {}) => {
  try {
    switch (method) {
      case 'GET':
        return await axios
          .get(`${baseUrl}/${url}`, config())
          .then((res) => res.data)

      case 'POST':
        return await axios
          .post(`${baseUrl}/${url}`, obj, config())
          .then((res) => res.data)

      case 'PUT':
        return await axios
          .put(`${baseUrl}/${url}`, obj, config())
          .then((res) => res.data)

      case 'DELETE':
        return await axios
          .delete(`${baseUrl}/${url}`, config())
          .then((res) => res.data)
    }
  } catch (error: any) {
    throw error?.response?.data?.error
  }
}

export default api
