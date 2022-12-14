import React from 'react';
import Slider from 'react-slick';
import Poster from '../Poster/Poster.Component';

const PosterSlider = (props) => {

    const { posters, title, subtitle, isDark, config } = props;

    const settings = {
        infinite: false,
        speed: 500,
        initialSlide: 1,
        slidesToShow: 6,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    initialSlide: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                }
            }
        ]
    };

    return (
        <>
            <div className='flex flex-col items-start sm:ml-3 ml-0 my-2'>
                <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>
                    {title}
                </h3>
                <p className={`text-sm ${isDark ? 'text-white' : 'text-gray-800'}`}>
                    {subtitle}
                </p>
            </div>
            {config && (<Slider {...config} className=''>
                {posters.map((each) => (
                    <Poster {...each} isDark={isDark} />
                ))}
            </Slider>)}
            {!config && <Slider {...settings} className=''>
                {posters.map((each) => (
                    <Poster {...each} isDark={isDark} />
                ))}
            </Slider>}
        </>
    )
}

export default PosterSlider