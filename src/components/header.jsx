import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const navItems = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
    { label: 'Services', to: '/services' },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const desktopLinkClass = ({ isActive }) =>
        `relative py-1 font-medium transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 ${
            isActive
                ? 'text-blue-600 after:w-full'
                : 'text-slate-600 after:w-0 hover:text-blue-600 hover:after:w-full'
        }`;

    const mobileLinkClass = ({ isActive }) =>
        `block rounded-lg px-3 py-2 font-medium transition-colors ${
            isActive ? 'bg-blue-50 text-blue-700' : 'text-slate-700 hover:bg-slate-50 hover:text-blue-600'
        }`;

    const closeMenu = () => setMenuOpen(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/85 shadow-sm backdrop-blur-xl animate-entrance">
            <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <Link to="/" onClick={closeMenu} aria-label="PHARVEX home" className="group flex items-center gap-2.5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-700 to-blue-500 text-xl font-bold text-white shadow-md shadow-blue-500/20 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                        P
                    </span>
                    <span className="text-2xl font-extrabold text-slate-900 transition-colors group-hover:text-blue-600">
                        PHARVEX
                    </span>
                </Link>

                <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
                    {navItems.map((item) => (
                        <NavLink key={item.to} to={item.to} className={desktopLinkClass}>
                            {item.label}
                        </NavLink>
                    ))}
                    <div className="flex items-center gap-3">
                        <Link to="/signup" className="rounded-full px-4 py-2 font-medium text-slate-700 transition-all duration-200 hover:scale-105 hover:bg-blue-600 hover:text-white hover:shadow-lg active:scale-95">
                            Signup
                        </Link>
                        <Link to="/login" className="rounded-full bg-blue-600 px-5 py-2.5 font-medium text-white shadow-md shadow-blue-500/20 transition-all hover:scale-105 hover:bg-blue-700 hover:shadow-lg active:scale-95">
                            Login
                        </Link>
                    </div>
                </nav>

                <button
                    type="button"
                    className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-600 md:hidden"
                    onClick={() => setMenuOpen((open) => !open)}
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-navigation"
                >
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {menuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18 18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

                <div
                    id="mobile-navigation"
                    aria-hidden={!menuOpen}
                    inert={!menuOpen}
                    className={`mobile-nav-panel absolute inset-x-0 top-full border-b border-slate-100 bg-white px-6 shadow-lg transition-all duration-300 md:hidden ${
                        menuOpen ? 'visible translate-y-0 py-4 opacity-100' : 'invisible -translate-y-2 py-0 opacity-0'
                    }`}
                >
                    <nav aria-label="Mobile navigation" className="mx-auto flex max-w-7xl flex-col gap-1">
                        {navItems.map((item) => (
                            <NavLink key={item.to} to={item.to} onClick={closeMenu} className={mobileLinkClass}>
                                {item.label}
                            </NavLink>
                        ))}
                        <div className="mt-3 grid grid-cols-2 gap-3 border-t border-slate-100 pt-4">
                            <Link to="/signup" onClick={closeMenu} className="rounded-full border border-slate-200 px-4 py-2.5 text-center font-medium text-slate-700 transition-all duration-200 hover:scale-[1.02] hover:border-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-md active:scale-95">
                                Signup
                            </Link>
                            <Link to="/login" onClick={closeMenu} className="rounded-full bg-blue-600 px-4 py-2.5 text-center font-medium text-white transition-colors hover:bg-blue-700">
                                Login
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}