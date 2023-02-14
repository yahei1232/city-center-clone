import React, { useState } from 'react'
import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';

function Sliders({ asd }) {

    const [index, setIndex] = useState(0);

    const handlePrev = () => {
        if (index === 0) return setIndex(9)
        setIndex(index - 1);
    };

    const handleNext = () => {
        if (index === 9) return setIndex(0)
        return setIndex(index + 1);
    };

    return (
        <div className="slider-container">
            <h1><ArrowBackIosNewSharpIcon onClick={handlePrev} /></h1>
            <div className="slider">
                {/* Render your cards here */}
                <div
                    className="slider-card"
                    style={{ transform: `translateX(-${index * 100}%)` }}
                >
                    {asd && asd?.map((item, key) => (
                        <div key={key}>
                            < img src={item} alt="" width='522rem' height='100%' />
                        </div>
                    ))}
                </div>
            </div>
            <h1><ArrowForwardIosSharpIcon onClick={handleNext} /></h1>
        </div>
    );

}

export default Sliders