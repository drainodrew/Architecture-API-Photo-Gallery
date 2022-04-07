import React, { useState, useEffect } from 'react'
import axios from "axios"

export default function ImageImport() {
  const [image, setImage] = useState(0)

  const apiCall = async () => {
    const data = await axios('https://api.unsplash.com/search/photos?query=wanderlust')
    console.log(data)
    setImage(data)
  }

  useEffect(() => {
    apiCall()
  }, [])
//i believe i need to put the left and right arrows in the []
  
  return (
    <div>{image}</div>

  )

}