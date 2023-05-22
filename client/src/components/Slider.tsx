import React, {useState} from 'react';
import {BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs";
import {RxDotFilled} from "react-icons/rx";
import first from "../assets/slides/1.webp";
import second from "../assets/slides/2.jpg";
import third from "../assets/slides/3.jpg";

const slides = [
    {
        img: first
    },
    {
        img: second
    },
    {
        img: third
    },
];


const Slider: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const ifFirstSlide = currentIndex === 0;
        const newIndex = ifFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlides = currentIndex === slides.length - 1;
        const newIndex = isLastSlides ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (index:number) => {
        setCurrentIndex(index)
    }

    return (
        <div className='max-w-[1300px] h-[600px] w-full m-auto pb-16 relative group '>
            <div style={{backgroundImage: `url(${slides[currentIndex].img})`}}
                 className=' w-full h-full rounded-2xl bg-center bg-cover duration-500'>
            </div>
            <div>
                <BsChevronCompactLeft
                    onClick={prevSlide}
                    className='hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[-50%]
                        left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer' size={30}/>
            </div>
            <div>
                <BsChevronCompactRight
                    onClick={nextSlide}
                    className='hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[-50%]
                        right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer' size={30}/>
            </div>
            <div className='flex top-4 justify-center py-2'>
                {slides.map((slide,index) => (
                    <div key={index} onClick={() => goToSlide(index)} className='text-3xl cursor-pointer'>
                        <RxDotFilled/>
                    </div>
                    ) )}
            </div>
        </div>
    );
};

export default Slider;