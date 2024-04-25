import { useState } from 'react';
import CSS_Icon from '../assets/Icons/CSS3.png';
import HTML_Icon from '../assets/Icons/Html5.png';
import JAVASCRIPT_Icon from '../assets/Icons/JavaScript.png';
import PHP_Icon from '../assets/Icons/PHP.png';
import PYTHON_Icon from '../assets/Icons/Python.png';
import REACT_Icon from '../assets/Icons/React.png';
import LARAVEL_Icon from '../assets/Icons/Laravel.png';

type IconMap = {
    HTML: string;
    CSS: string;
    JAVASCRIPT: string;
    PHP: string;
    PYTHON: string;
    REACT: string;
    LARAVEL: string;
};

const iconMap: IconMap = {
    HTML: HTML_Icon,
    CSS: CSS_Icon,
    JAVASCRIPT: JAVASCRIPT_Icon,
    PHP: PHP_Icon,
    PYTHON: PYTHON_Icon,
    REACT: REACT_Icon,
    LARAVEL: LARAVEL_Icon,
};

export default function AboutSection() {
    const iconsList1: (keyof IconMap)[] = ['HTML', 'CSS', 'PHP', 'JAVASCRIPT', 'PYTHON'];
    const iconsList2: (keyof IconMap)[] = ['REACT', 'LARAVEL'];

    const [isHovering1, setIsHovering1] = useState(-1);
    const [isHovering2, setIsHovering2] = useState(-1);

    const handleMouseEnter1 = (index: number) => setIsHovering1(index);
    const handleMouseLeave1 = () => setIsHovering1(-1);

    const handleMouseEnter2 = (index: number) => setIsHovering2(index);
    const handleMouseLeave2 = () => setIsHovering2(-1);

    return (
        <div className='flex flex-col w-full h-auto sm:h-[85vh] p-8 sm:p-16' id="about">
            <div className='text-center'>
                <h1 className='text-3xl sm:text-4xl text-red-700 font-bold after:flex after:w-full after:h-1 after:bg-red-500 after:mt-4'>About Me</h1>
                <p className='text-lg sm:text-xl mt-4 text-left'>
                    Hello! My name is Guilherme Pavani, and I'm an 18-year-old with a deep passion for technology. I've been programming for four years, during which I earned a technical degree in electronics and informatics. Over the past three years, concentrei-me principalmente no desenvolvimento web, mas também explorei o desenvolvimento de aplicativos para smartphones e desktops.
                </p>
            </div>

            <div className='mt-8'>
                <h2 className='text-2xl sm:text-3xl text-red-700 font-bold uppercase'>Programming Languages</h2>
                <div className='flex flex-wrap justify-center gap-6 mt-6'>
                    {iconsList1.map((item, index) => (
                        <div
                            key={index}
                            onMouseEnter={() => handleMouseEnter1(index)}
                            onMouseLeave={handleMouseLeave1}
                            className='flex flex-col text-center'
                        >
                            <img
                                src={iconMap[item]}
                                alt={`${item} icon`}
                                className='h-16 w-16 md:h-20 md:w-20 cursor-help'
                            />
                            <p
                                style={{
                                    opacity: isHovering1 === index ? 1 : 0,
                                    transition: 'opacity 0.3s ease',
                                }}
                            >
                                {item}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className='mt-8'>
                <h2 className='text-2xl sm:text-3xl text-red-700 font-bold uppercase'>Frameworks</h2>
                <div className='flex flex-wrap justify-center gap-6 mt-6'>
                    {iconsList2.map((item, index) => (
                        <div
                            key={index}
                            onMouseEnter={() => handleMouseEnter2(index)}
                            onMouseLeave={handleMouseLeave2}
                            className='flex flex-col text-center'
                        >
                            <img
                                src={iconMap[item]}
                                alt={`${item} icon`}
                                className='h-16 w-16 md:h-20 md:w-20 cursor-help'
                            />
                            <p
                                style={{
                                    opacity: isHovering2 === index ? 1 : 0,
                                    transition: 'opacity 0.3s ease',
                                }}
                            >
                                {item}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
