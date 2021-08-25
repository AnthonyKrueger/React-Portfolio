import Flickity from 'react-flickity-component'



export default function Carousel({images}) {
    const flickityOptions = {
        initialIndex: 0,
        contain: true,
        prevNextButtons: true,
    }

    const imagesList = images.map(image => {
        return <img src={image} alt=""></img>
    })
    
    return (
        <div className="center">
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