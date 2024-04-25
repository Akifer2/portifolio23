import Background from '../assets/Background.png';
import Blob from '../assets/Blob.png';
import Button from './button';

export default function HeroSection() {
    return (
        <div
            className='relative w-full h-[85vh] max-h-screen overflow-hidden shadow-md'
            style={BackgroundStyles} id='home'
        >
            <img
                src={Blob}
                alt="blob"
                className='hidden lg:block absolute top-0 right-0 w-1/4'
                style={{ userSelect: 'none', pointerEvents: 'none' }}
            />

            <div
                className='flex flex-col h-full p-8 sm:p-12 lg:p-20 xl:p-24 justify-center lg:items-start md:items-center'
            >
                <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-stone-800 md:text-center'>
                    Guilherme Pavani
                </h1>
                <h2 className='text-xl sm:text-2xl md:text-3xl text-red-600 font-semibold uppercase md:text-center'>
                    Fullstack Developer
                </h2>
                <h3 className='text-lg sm:text-xl mt-4 mb-4 text-slate-700 font-semibold md:text-center'>
                    Hi, you can call me by my surname. Welcome to my portfolio!
                </h3>
                <div className="flex gap-3 sm:gap-5 mt-5 z-10 flex-wrap md:justify-center">
                    <Button
                        filled={true}
                        className="flex text-center p-3 px-6 sm:px-8 md:px-10 border-2 border-red-700 rounded-sm transition-all"
                        href="#about"
                    >
                        See More
                    </Button>
                    <Button
                        filled={false}
                        className="flex text-center p-3 px-6 sm:px-8 md:px-10 border-2 border-red-700 rounded-sm transition-all"
                        href="#contact"
                    >
                        Contact
                    </Button>
                </div>
            </div>
        </div>
    );
}

const BackgroundStyles = {
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
};
