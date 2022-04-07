import { useEffect, useState } from "react"
import Loading from './Loading'
import { ReactComponent as LeftArrow } from "./arrows/arrow-left.svg";
import { ReactComponent as RightArrow } from "./arrows/arrow-right.svg";
import {useParams} from 'react-router-dom'


let Images = () => {
  const [images, setImages] = useState([])


  const apiCall = () => {
    fetch(`https://api.unsplash.com/topics/architecture/photos/?client_id=afNUMbyjegNpBU6fk3cn971f1YxW2wCl2igUQX6kUho`)
      .then(response => response.json())
      .then(result => setImages(result))
      .catch(error => console.error(error, "error"))
  }

  useEffect(() => {
    apiCall()
  }, [])
  
  const [currentImage, setCurrentImage] = useState(0)

  const handleClickNext = () => {
    const length = images.length - 1;

    setCurrentImage((currentImage) => {
     return currentImage < length ? currentImage + 1 : 0; 
    })
  }
  const handleClickBack = () => {
    const length = images.length - 1;

    setCurrentImage((currentImage) => {
     return currentImage > 0 ? currentImage - 1 : length; 
    })
  }
  const [numLoaded, setNumLoaded] = useState(0)

  const handleImageLoad = () => {
    setNumLoaded((numLoaded) => numLoaded + 1)
  }

  return (
  
    <figure>
      {numLoaded < images.length && (
        <Loading calculatedWidth={(numLoaded / images.length) * 100} />
      )}
      <nav>
        <LeftArrow onClick={handleClickBack}/>
        <RightArrow onClick={handleClickNext}/>
      </nav>
      <figcaption>{currentImage + 1} / {images.length}</figcaption>
      {images.map((imageURL, index) => (
        <img
          alt=""
          key={imageURL}
          src={images[currentImage].urls.regular}
          onLoad={handleImageLoad}
          className={currentImage === index ? "display" : "hide"}
        />
      ))}
      <header>{currentImage === 0 ? "background1" : "body" }</header>
  </figure>
 )
}

export default Images