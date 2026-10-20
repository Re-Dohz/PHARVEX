import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="w-full border-t border-slate-100 bg-white px-6 py-6 text-sm">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">
                <div className="flex items-center gap-2.5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold text-white shadow-md shadow-blue-500/20">
                        P
                    </span>
                    <span className="text-lg font-extrabold text-slate-900">PHARVEX</span>
                </div>

                <nav aria-label="Footer navigation" className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-slate-700">
                    <Link to="/" className="transition-colors hover:text-blue-600">Home</Link>
                    <Link to="/about" className="transition-colors hover:text-blue-600">About</Link>
                    <Link to="/contact" className="transition-colors hover:text-blue-600">Contact</Link>
                    <Link to="/services" className="transition-colors hover:text-blue-600">Services</Link>
                </nav>

                <p className="text-center text-slate-500">&copy; 2026 PHARVEX. All rights reserved.</p>
            </div>
        </footer>
    );
}