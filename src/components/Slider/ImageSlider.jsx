import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
{
    url: 'https://www.reviewbox.es/wp-content/uploads/2021/04/pexels-shane-aldendorff-786003-scaled.jpg'
},
{
    url: 'https://cdn.pixabay.com/photo/2020/05/03/19/09/nike-5126389_960_720.jpg'
},
{
    url: 'https://cdn.pixabay.com/photo/2016/11/21/15/54/countryside-1846093_960_720.jpg'
},
];

const ImageSlider = () => {

    const properties = {
        duration: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        indicators: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    
return (
<div className='slide-container'>
<Slide {...properties}>
    {slideImages.map((slideImage, index)=> (
    <div className='each-slide' key={index}>
        <div className='bg-center bg-cover h-[800px]' style={{'backgroundImage': `url(${slideImage.url})`}}>
        </div>
    </div>
    ))} 
</Slide>
</div>
)
}

export default ImageSlider
