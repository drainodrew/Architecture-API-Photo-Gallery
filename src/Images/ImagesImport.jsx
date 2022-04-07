import React, { useState, useEffect } from 'react'
import ReactDOM from "react-dom";
//import axios from "axios"
// server
//import fetch from 'node-fetch';
global.fetch = fetch;
// browser
//import 'whatwg-fetch';
import { createApi } from 'unsplash-js';
import Loading from './Loading'

export default function ImageImport(props) {

const api = createApi({
  accessKey: 'afNUMbyjegNpBU6fk3cn971f1YxW2wCl2igUQX6kUho',
});

  const [data, setImageResponse] = useState(null);

  useEffect(() => {
    api.search()
      .getPhotos({ query: "wanderlust", orientation: "portrait" })
      .then(result => {
        setImageResponse(result)
        console.log(result)
      })
    .catch(error => console.error(error, "Error"))
  }, [])

  if (data === null) {
    <Loading />
  }


  

}