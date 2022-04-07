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
    
    <body style={{
      backgroundColor: currentImage === 0 ? '#294910'
        : currentImage === 1 ? '#A57051'
          : currentImage === 2 ? '#D7CEC1'
            : currentImage === 4 ? '#305B80'
              : currentImage === 6 ? '#5B5B5B'
                : currentImage === 7 ? '#31363C'
                  : currentImage === 8 ? '#811111'
                  : currentImage === 9 ? '#395561'
        : "initial",
      color: currentImage === 0 ? '#C1E8FC'
        : currentImage === 1 ? '#141718'
        : currentImage === 2 ? '#487A8A'
            : currentImage === 3 ? '#CF9868'
              : currentImage === 3 ? '#CF9868'
                : currentImage === 4 ? '#CFD7E8'
                  : currentImage === 5 ? '#4D6232'
                    : currentImage === 6 ? '#468299'
                      : currentImage === 7 ? '#959597'
                        : currentImage === 8 ? '#B5C1BB'
                        : currentImage === 9 ? '#3F2B24'
          : "initial"
          
    }}>
    <section>
      
    <header>
      <h1> draino gallery
          </h1>
          {/* {images.map((photographerName) => (
            <h2 
              key={photographerName}
              src={images[currentImage].user.name.value}
              hey
           /> ))}
     <br />
    <h2>by images[currentImage].user.name</h2>
     */}
     
    </header>
    
    
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
      
      </figure>
      </section>
      </body>
 )
}

export default Images