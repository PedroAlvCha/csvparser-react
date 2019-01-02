const api = process.env.CSVPARSER_API_URL || 'http://localhost:9001'

export const getSearchResults = (query) =>
    fetch(`${api}/search`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: JSON.stringify(query)
    }).then(res => res.json())
      .then(data => data)

export const uploadCsvFile = (csvFile) =>
    fetch(`${api}/import`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: JSON.stringify(csvFile),
      }).then(res => res.json())
        .then(data => data)
