import Flickity from 'react-flickity-component'
import ProjectImage from './ProjectImage'

export default function Carousel({images}) {
    const flickityOptions = {
        initialIndex: 0,
        contain: true,
        prevNextButtons: false,
        autoPlay: 5000,
        wrapAround: true
    }

    const imagesList = images.map(image => {
        return <img src={image} key={image} alt=""></img>
    })
    
    return (
        <div className="center md:mx-16">
        <Flickity
                className={'carousel'} // default ''
                elementType={'div'} // default 'div'
                options={flickityOptions} // takes flickity options {}
                disableImagesLoaded={false} // default false
                reloadOnUpdate // default false
                static // default false
            >
                {imagesList}
            </Flickity>
        </div>
    )
}