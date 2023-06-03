import React, {useState} from 'react'
import {Data} from './Data'
import {AiOutlineDoubleLeft, AiOutlineDoubleRight} from 'react-icons/ai'

const Sliders = ({slides}) => {
    const [click, setClick] = useState(0)
    const length = slides.length;

    const nextSlide = () => {
        setClick(click === length -1 ? 0 : click + 1)
    }

    const prevSlide = () => {
        setClick(click === 0 ? length -1 : click -1)
    }

    if(!Array.isArray(slides) || slides.length <=0){
        return null
    }

  return (
    <div className="carousel">
        <AiOutlineDoubleLeft className="left-arrow" onClick={prevSlide}/>
        <AiOutlineDoubleRight className="right-arrow" onClick={nextSlide}/>
        {Data.map((slide, index) => {
            return(
                <div className={index === click ? "slide active" : "slide"} key={index}>
                    {index === click && (
                        <img src={slide.image} className="carouselImage" alt="travel"/>
                    )}
                </div>
            )
        })}
    </div>
  )
}

export default Sliders