const api = process.env.CSVPARSER_API_URL || 'http://localhost:9001'

let token = localStorage.token

if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const myHeaders = {
  'Accept': 'application/json',
  'Authorization': token
}

export const getSearchResults = (query) =>
  fetch(`${api}/search`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Authorization': token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(query)
  }).then(res => res.json())
    .then(data => data)

export const uploadCsvFile = (csvFile) =>
  fetch(`${api}/import`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Authorization': token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(csvFile)
      }).then(res => res.json())
        .then(data => data)
