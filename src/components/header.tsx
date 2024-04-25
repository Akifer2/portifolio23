import { useState, useEffect } from "react";

type MenuTypes = {
    isOpen: boolean
}

function MobileMenuIcon({ isOpen }: MenuTypes) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={`w-6 h-6 text-white transition-transform duration-300`}
        >
            {isOpen ? (
                <>
                    {/* Formar um "X" */}
                    <line x1="6" y1="6" x2="18" y2="18" stroke="white" strokeWidth="2" />
                    <line x1="18" y1="6" x2="6" y2="18" stroke="white" strokeWidth="2" />
                </>
            ) : (
                <>
                    {/* Ícone de menu "hamburger" */}
                    <line x1="4" y1="6" x2="20" y2="6" stroke="white" strokeWidth="2" />
                    <line x1="4" y1="12" x2="20" y2="12" stroke="white" strokeWidth="2" />
                    <line x1="4" y1="18" x2="20" y2="18" stroke="white" strokeWidth="2" />
                </>
            )}
        </svg>
    );
}

export default function Header() {
    const navItems = ["home", "about", "projects", "contact"];
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        const isScrollingDown = currentScrollY > lastScrollY;

        setIsVisible(!isScrollingDown);
        setLastScrollY(currentScrollY);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleResize = () => {
        if (window.innerWidth >= 768) {
            setIsMobileMenuOpen(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    });

    return (
        <>
            <header
                className={`bg-gradient-to-b from-[#2b2b2b96] to-transparent w-full flex justify-between p-6 fixed z-10 transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
            >
                {/* Navegação para Desktop */}
                <nav className="hidden md:flex items-center justify-center gap-8 w-full">
                    {navItems.map((item, index) => (
                        <a
                            key={index}
                            href={`#${item}`}
                            className="text-md font-semibold capitalize relative cursor-pointer after:block after:w-full after:h-[2px] after:bg-red-700 after:translate-y-[4px] after:opacity-0 hover:after:opacity-100 hover:after:translate-y-[-2px] after:transition-all"
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                {/* Ícone para Mobile */}
                <div
                    className={`md:hidden z-10 cursor-pointer`}
                    onClick={toggleMobileMenu}
                >
                    <MobileMenuIcon isOpen={isMobileMenuOpen} />
                </div>

                {/* Navegação para Mobile */}
                <div
                    className={`absolute top-0 left-0 w-full bg-stone-900 transition-transform duration-300 ${isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"}`}
                >
                    <nav className="flex flex-col gap-5 text-white items-center p-8">
                        {navItems.map((item, index) => (
                            <a
                                key={index}
                                href={`#${item}`}
                                className="text-md font-semibold capitalize cursor-pointer hover:text-red-700 transition-colors"
                            >
                                {item}
                            </a>
                        ))}
                    </nav>
                </div>
            </header>
        </>
    );
}
