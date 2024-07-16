import React, { useState, useEffect, useRef } from "react"
import axios from "axios"

const API = "https://fakestoreapi.com"

export default function useGetMultuAxios(pathArray, method, bodyArray) {
  const [response, setResponse] = useState(null)
  const [loading, setLoading] = useState(true)
  const { current: patharr } = useRef(pathArray)
  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal
    let promiseArray = patharr.map((path) => axios.get(`${API}${path}`))
    axios
      .all(promiseArray)
      .then((response) => {
        if (!signal.aborted) {
          let data = response.map(({ data }) => data)
          setResponse(data)
          setLoading(false)
        }
      })
      .catch((error) => console.warn("Something gone wrong", error))

    return () => abortController.abort()
  }, [patharr])
  return { response, loading }
}
