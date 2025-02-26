import React, { useState, useEffect } from 'react'

function App() {
  const [instrument, setInstrument] = useState([])
  function getInstrument() {
    return new Promise((resolve, reject) => {
      let url = 'https://boundless-server-5xs0.onrender.com/api/instrument'
      fetch(url, {
        method: 'GET',
        credentials: 'include',
      })
        .then((response) => {
          return response.json()
        })
        .then((result) => {
          resolve(result)
          setInstrument(result)
          console.log(result)
        })
        .catch((error) => {
          console.log(error)
          reject()
        })
    })
  }

  useEffect(() => {
    getInstrument()
  }, [])

  return (
    <div>
      <h1>Data from Express API:</h1>
      <p>{instrument ? JSON.stringify(instrument) : 'Loading...'}</p>
    </div>
  )
}

export default App
