import React, { useEffect, useState } from "react"
import axios from "axios"

const API = "https://fakestoreapi.com"

const useAxios = (path, method, body) => {
  const [response, setResponse] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal

    axios(`${API}${path}`, {
      method,
      ...(body ? { body } : {}),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!signal.aborted) {
          setResponse(response.data)
          setLoading(false)
        }
      })
      .catch((error) => console.warn("Something gone wrong", error))

    return () => abortController.abort()
  }, [path, method, body])
  return { response, loading }
}

export default useAxios
