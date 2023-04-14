import React from 'react'
import Lottie from 'react-lottie'
import FadeIn from "react-fade-in";

const CustomAnimation = ({ name, height, width, message, customClass }) => { 
    const defaultOptions = {
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require(`../../public/${name}`),
            rendererSettings: {
                preserveAspectRatio: "xMidYMid slice"
            } 
    }
  return (
    <FadeIn transitionDuration={600} className={customClass}>
        <Lottie options={defaultOptions} width={width} height={height} />
        <span className='message-text'>{message}</span>
    </FadeIn>
  )
}

export default CustomAnimation