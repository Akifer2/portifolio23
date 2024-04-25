import { useState, ReactNode, MouseEvent } from 'react';

type ButtonProps = {
    filled?: boolean;
    className?: string;
    children?: ReactNode;
    backgroundColor?: string;
    textColor?: string;
    href?: string;
};

export default function Button({ filled, children, className, backgroundColor = '#b91c1c', textColor = '#fff', href }: ButtonProps) {
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

    const handleClick = (event: MouseEvent) => {
        if (href) {
            event.preventDefault();
            document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const Element = href ? 'a' : 'button';

    return (
        <Element
            href={href}
            className={className}
            style={hoverStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={href ? handleClick : undefined}
        >
            <span className="font-semibold">
                {children}
            </span>
        </Element>
    );
}
