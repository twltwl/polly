import axios from 'axios'

const config = {
  baseURL: 'https://polls.apiblueprint.org/'
}

const getClient = () => {
  const { baseURL } = config
  const httpClient = axios.create({ baseURL, timeout: 10000 })

  // Add interceptor to handle errors
  httpClient.interceptors.response.use(
    response => Promise.resolve(response.data),
    error => {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error('Request failed:', {
          statusCode: error.response.status,
          method: error.response.config.method.toUpperCase(),
          url: error.response.config.url,
          data: error.response.data
        })
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        const opts = error.request._options
        console.error('Request failed:', {
          method: opts && opts.method && opts.method.toUpperCase(),
          path: opts && opts.path
        })
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Request failed', error.message)
      }

      return Promise.resolve(null)
    }
  )

  return httpClient
}

export default getClient()
