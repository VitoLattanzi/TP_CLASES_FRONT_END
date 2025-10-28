import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch' 
import { GetWorkspaces } from '../../services/workspaceService' 


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