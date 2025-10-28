import React, { useEffect, useState, useFetch } from 'react'


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