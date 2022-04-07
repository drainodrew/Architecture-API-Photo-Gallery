import { useState } from "react"
import Loading from './Loading'
import { ReactComponent as LeftArrow } from "./assets/arrow-left.svg";
import { ReactComponent as RightArrow } from "./assets/arrow-right.svg";
import ImageImport from "./ImagesImport";


const images = [{}]

let Images = () => {
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
          src={imageURL}
          onLoad={handleImageLoad}
          className={currentImage === index ? "display" : "hide"}
        />
      ))}
      
  </figure>
 )
}

export default Images