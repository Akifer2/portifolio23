import { useState, useEffect } from "react";

export default function Header() {
    const navItems = ["home", "about", "projects", "contact"];

    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        const isScrollingDown = currentScrollY > lastScrollY;

        setIsVisible(!isScrollingDown);
        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    return (
        <>
            <header
                className={`bg-gradient-to-b from-[#2b2b2b96] to-transparent w-full flex justify-center align-center p-6 fixed z-10 transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
            >
                <nav>
                    <ul className="flex align-center gap-12">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a
                                    href={`#${item}`}
                                    className="text-md font-semibold capitalize relative cursor-pointer after:block after:w-full after:bg-red-500 after:h-0.5 after:opacity-0 after:translate-y-2 hover:after:opacity-100 hover:after:translate-y-0 after:transition-all"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
        </>
    );
}
