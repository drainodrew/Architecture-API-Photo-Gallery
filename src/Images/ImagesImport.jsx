// import React, { useState, useEffect } from 'react'
// import ReactDOM from "react-dom";
// //import axios from "axios"
// // server
// //import fetch from 'node-fetch';
// global.fetch = fetch;
// // browser
// //import 'whatwg-fetch';
// import { createApi } from 'unsplash-js';
// import { photos } from 'unsplash-js/dist/internals';
// import Loading from './Loading'

// function ImageImport([{ images }]) {
//   const { user, urls } = images;

//   return (
//     <>
//       <img className="img" src={urls.regular} />
//       <a
//         className="credit"
//         target="_blank"
//         href={`https://unsplash.com/@${user.username}`}
//       >
//         {user.name}
//       </a>
//     </>
//   );
// };

// const api = createApi({
//   accessKey: 'afNUMbyjegNpBU6fk3cn971f1YxW2wCl2igUQX6kUho',
// });

//   const [data, setImageResponse] = useState(null);

//   useEffect(() => {
//     api.search()
//       .getPhotos({ query: "wanderlust", orientation: "portrait" })
//       .then(result => {
//         setImageResponse(result)
//         console.log(result)
//       })
//     .catch(error => console.error(error, "Error"))
//   }, [])

//   if (data === null) {
//    return <Loading /> 
//   } else if (data.errors) {
//     return (
//       <div>{data.errors[0]}</div>
//     )
//   } else {
//     <div className='api-test'>
//       <ul className='api-test-list'>
//         {data.response.results.map(images => (
//         <li key={images.id}>
//         <ImageImport images={images} />
//         </li>
//         ))}
//       </ul>
//     </div>
//   }
    
  


  

//}