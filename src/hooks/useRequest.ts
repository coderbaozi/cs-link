import { useEffect, useState } from 'react'

const useRequest = (fn: Function,...rest: any[]) => {
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<String| null>(null) 
  const [data, setData] = useState<any>()
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const reponse = await fn(...rest)
        setData(reponse)
      } catch {
        setError("An error has ocurred when trying to request data")
      }finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return {
    data,
    loading,
    error
  }
}

export default useRequest