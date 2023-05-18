import React from 'react'
import { useLoaderData } from 'react-router-dom'

const ToyDetails = () => {
    const toyDetails = useLoaderData()
  return (
    <div>ToyDetails</div>
  )
}

export default ToyDetails