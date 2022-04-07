import React, { useState, useEffect } from 'react'
//import axios from "axios"
import { createApi } from 'unsplash-js';
import nodeFetch from 'node-fetch';
import 'whatwg-fetch';


const unsplash = createApi({
  accessKey: 'afNUMbyjegNpBU6fk3cn971f1YxW2wCl2igUQX6kUho',
  fetch: nodeFetch,
});
images = [];

export default function ImageImport(props) {
  const [image, setImage] = useState(0)


  unsplash.image.get({ query: wanderlust })
  .then(response => response.json)
    .then(result => setImage(result))
    .catch(error => console.error(error, 'error'))
  
  // const apiCall = async () => {
  //   const data = await axios('https://api.unsplash.com/search/photos?query=wanderlust')
  //   console.log(data)
  //   setImage(data)
  // }
  // const apiCall = (event) => {
  //   fetch('https://api.unsplash.com/search/photos?query=wanderlust')
  //     .then(response => response.json)
  //     .then(result => setImage(result))
}
  useEffect(() => {
    apiCall()
  }, [])
//i believe i need to put the left and right arrows in the []
  
  return (
    <div>{image}
    </div>

  )

}