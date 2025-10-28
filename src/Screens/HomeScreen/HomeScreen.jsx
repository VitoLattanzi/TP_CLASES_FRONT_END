import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch' 

const HomeScreen = () => {
  const {sendRequest, responce, loading, error} = useFetch()

  useEffect( 
    ()=>{
      sendRequest(
        () => GetWorkspaces()
      )
    },
    []
  )
  console.log(responce, loading, error)
  return (
    <div>
      <GetWorkspaces/>
    </div>
  )
}

export default HomeScreen