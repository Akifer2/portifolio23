import { useState, ReactNode } from 'react';

type ButtonProps = {
    filled?: boolean;
    className?: string;
    children?: ReactNode;
    backgroundColor?: string;
    textColor?: string;
};

export default function Button({ filled, children, className, backgroundColor = '#b91c1c', textColor = '#fff' }: ButtonProps) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const hoverStyle = filled
        ? {
            background: isHovered ? 'none' : backgroundColor,
            color: isHovered ? backgroundColor : textColor,
        }
        : {
            background: isHovered ? backgroundColor : 'none',
            color: isHovered ? '#fff' : backgroundColor,
        };

    return (
        <button
            className={className}
            style={hoverStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <span className='font-semibold'>
                {children}
            </span>
        </button>
    );
}
