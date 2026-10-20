import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
    const [showPassword, setShowPassword] = useState(false)
    const [formMessage, setFormMessage] = useState('')

    function handleSubmit(event) {
        event.preventDefault()
        setFormMessage('Account creation is not connected yet. Your details were not submitted.')
    }

    return (
        <section className="relative isolate -mx-6 -my-6 flex min-h-[calc(100vh-4.25rem)] items-center justify-center overflow-hidden bg-slate-50/60 px-4 py-10 animate-bounce-in sm:px-6 sm:py-12 lg:py-16">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 h-[min(70vw,32rem)] w-[min(70vw,32rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[100px] animate-pulse-glow sm:blur-[140px]"
            />

            <div className="relative z-10 mx-4 w-full max-w-md rounded-3xl border border-white/80 bg-white/85 p-7 shadow-2xl shadow-blue-900/10 backdrop-blur-2xl sm:p-10">
                <div className="mb-7 text-center sm:mb-8">
                    <Link
                        to="/"
                        aria-label="PHARVEX home"
                        className="group mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-700 to-blue-500 text-2xl font-bold text-white shadow-lg shadow-blue-500/30 transition-transform duration-300 hover:scale-110 hover:rotate-3"
                    >
                        P
                    </Link>
                    <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                        Create Account
                    </h1>
                    <p className="mt-2 text-sm text-slate-600">
                        Join PHARVEX for seamless healthcare access
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-1.5">
                        <label htmlFor="signup-name" className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                            Full Name
                        </label>
                        <input
                            id="signup-name"
                            name="name"
                            type="text"
                            autoComplete="name"
                            placeholder="redohz"
                            required
                            onChange={() => setFormMessage('')}
                            className="w-full rounded-2xl border border-slate-200/80 bg-slate-50/80 px-4 py-3.5 text-sm font-medium text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                        />
                    </div>

                    <div className="space-y-1.5">
                        <label htmlFor="signup-email" className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                            Email Address
                        </label>
                        <input
                            id="signup-email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            placeholder="redohz@example.com"
                            required
                            onChange={() => setFormMessage('')}
                            className="w-full rounded-2xl border border-slate-200/80 bg-slate-50/80 px-4 py-3.5 text-sm font-medium text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                        />
                    </div>

                    <div className="space-y-1.5">
                        <label htmlFor="signup-password" className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                id="signup-password"
                                name="password"
                                type={showPassword ? 'text' : 'password'}
                                autoComplete="new-password"
                                placeholder="At least 8 characters"
                                minLength={8}
                                pattern="(?=.*[A-Z])(?=.*[0-9]).{8,}"
                                title="Use at least 8 characters, including one uppercase letter and one number."
                                aria-describedby="signup-password-hint"
                                required
                                onChange={() => setFormMessage('')}
                                className="w-full rounded-2xl border border-slate-200/80 bg-slate-50/80 px-4 py-3.5 pr-16 text-sm font-medium text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword((visible) => !visible)}
                                aria-label={showPassword ? 'Hide password' : 'Show password'}
                                aria-pressed={showPassword}
                                className="absolute inset-y-0 right-3 my-auto h-9 rounded-lg px-2 text-xs font-semibold text-slate-500 transition-colors hover:bg-blue-50 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                            >
                                {showPassword ? 'Hide' : 'Show'}
                            </button>
                        </div>
                        <p id="signup-password-hint" className="text-xs leading-relaxed text-slate-500">
                            Use at least 8 characters, including one uppercase letter and one number.
                        </p>
                    </div>

                    <button
                        type="submit"
                        className="group/btn relative mt-2 w-full overflow-hidden rounded-2xl bg-blue-600 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/30 transition-all duration-300 hover:scale-[1.02] hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/40 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/30"
                    >
                        <span aria-hidden="true" className="absolute inset-0 h-full w-full translate-y-full bg-white/20 transition-transform duration-300 group-hover/btn:translate-y-0" />
                        <span className="relative z-10">Get Started</span>
                    </button>

                    {formMessage && (
                        <p role="status" className="rounded-xl bg-blue-50 px-4 py-3 text-center text-sm text-blue-800">
                            {formMessage}
                        </p>
                    )}
                </form>

                <p className="mt-7 text-center text-sm text-slate-600 sm:mt-8">
                    Already have an account?{' '}
                    <Link to="/login" className="font-bold text-blue-600 transition-colors hover:text-blue-700 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                        Sign in
                    </Link>
                </p>
            </div>
        </section>
    );
}