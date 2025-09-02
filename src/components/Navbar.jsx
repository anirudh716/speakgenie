import Logo from '../assets/Logo.png'

export function Navbar() {
    const navtags = [
        { id: 1, tag: "Why", href: "#why" },
        { id: 2, tag: "Programs", href: "#programs" },
        { id: 3, tag: "Features", href: "#features" },
        { id: 4, tag: "For Parents", href: "#parents" },
        { id: 5, tag: "FAQ", href: "#faq" },
    ];

    return (
        <section className="w-full fixed top-0 z-[9999] flex items-center justify-center px-4">
            <nav className="w-full max-w-6xl bg-white rounded-lg shadow-md flex items-center justify-between px-4 sm:px-6 py-4">
                {/* Logo */}
                <div className="flex items-center gap-x-2">
                    <img src={Logo} alt="Company's Logo" className="w-6 h-6" />
                    <h2 className="text-base sm:text-md font-extrabold">Topmind Care</h2>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-x-4">
                    <ul className="hidden md:flex flex-row gap-x-6">
                        {navtags.map((tag) => (
                            <li key={tag.id} className="text-purple-700 font-extrabold text-sm hover:text-purple-500 transition-all">
                                <a href={tag.href}>{tag.tag}</a>
                            </li>
                        ))}
                    </ul>
                    <a href="#pricing" className="text-white text-sm font-extrabold px-4 py-2 rounded-xl bg-purple-700 shadow-lg hover:bg-purple-600 transition-all hover:scale-105">
                        Start Free
                    </a>
                </div>

                {/* Mobile CTA */}
                <div className="md:hidden">
                    <a href="#pricing" className="text-white text-sm font-extrabold px-3 py-2 rounded-lg bg-purple-700 shadow-lg hover:bg-purple-600 transition-all">
                        Start
                    </a>
                </div>
            </nav>
        </section>
    );
}
