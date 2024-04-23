import Background from '../assets/Background.png';
import Blob from '../assets/Blob.png';
import Button from './button';

export default function HeroSection() {
    return (
        <div
            className='w-full h-[85vh] relative shadow-md'
            style={BackgroundStyles}
        >
            <img
                src={Blob}
                alt="blob"
                className='absolute top-0 right-0'
                style={{ userSelect: 'none', pointerEvents: 'none' }}
            />
            <div className='flex flex-col justify-center items-start h-full p-16'>
                <h1 className='text-5xl font-bold uppercase'>Guilherme Pavani</h1>
                <h2 className='text-3xl text-red-600 font-semibold uppercase'>Fullstack Developer</h2>
                <h3 className='text-xl mt-4 mb-4 text-slate-700 font-semibold'>Hi, you can call me by my surname. welcome to my portfólio!</h3>
                <div className='flex gap-5 mt-5 z-10'>
                    <Button filled={true} className='flex text-center p-3 px-10 border-2 border-red-700 rounded-sm transition-all'>see more</Button>
                    <Button filled={false} className='flex text-center p-3 px-10 border-2 border-red-700 rounded-sm transition-all'>Contact</Button>
                </div>
            </div>
        </div >
    );
}

const BackgroundStyles = {
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'right',
    backgroundRepeat: 'no-repeat',
};
