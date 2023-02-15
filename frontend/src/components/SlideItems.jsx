import React, { useState } from 'react'
import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';

function SlideItems({ image, title, price, topDesc }) {

    const [index, setIndex] = useState(0);

    const handlePrev = () => {
        if (index === 0) return setIndex(9)
        setIndex(index - 1);
    };

    const handleNext = () => {
        if (index === 3) return setIndex(0)
        return setIndex(index + 1);
    };

    return (
        <>
            <h2>{topDesc}</h2>
            <div className="slider-container">
                <h1><ArrowBackIosNewSharpIcon onClick={handlePrev} /></h1>
                <div className="slider">
                    {/* Render your cards here */}
                    <div
                        className="slider-card"
                        style={{ transform: `translateX(-${index * 100}%)` }}
                    >
                        {image && image?.map((item, key) => (
                            <div key={key} className='all'>
                                < img src={item} alt="" width='246.700px' height='179.413px' />
                                <h3>{title}</h3>
                                <p>{price}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <h1><ArrowForwardIosSharpIcon onClick={handleNext} /></h1>
            </div>
        </>
    );

}

export default SlideItems