import httpClient from 'src/utils/apiClient'

export const fetchQuestion = path => httpClient.get(path)

export const fetchQuestions = () => httpClient.get(`/questions`)

export const saveAnswer = path => httpClient.post(path)