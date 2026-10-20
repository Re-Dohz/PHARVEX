import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
    const [showPassword, setShowPassword] = useState(false)
    const [formMessage, setFormMessage] = useState('')

    function handleSubmit(event) {
        event.preventDefault()
        setFormMessage('Authentication is not connected yet. Your details were not submitted.')
    }

    return (
        <section className="relative isolate -mx-6 -my-6 flex min-h-[calc(100vh-4.25rem)] items-center justify-center overflow-hidden bg-slate-50/60 px-4 py-12 animate-bounce-in sm:px-6 lg:py-20">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 h-[min(70vw,32rem)] w-[min(70vw,32rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[100px] animate-pulse-glow sm:blur-[140px]"
            />

            <div className="relative z-10 mx-4 w-full max-w-md rounded-3xl border border-white/80 bg-white/85 p-7 shadow-2xl shadow-blue-900/10 backdrop-blur-2xl sm:p-10">
                <div className="mb-8 text-center">
                    <Link
                        to="/"
                        aria-label="PHARVEX home"
                        className="group mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-700 to-blue-500 text-2xl font-bold text-white shadow-lg shadow-blue-500/30 transition-transform duration-300 hover:scale-110 hover:rotate-3"
                    >
                        P
                    </Link>
                    <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                        Welcome Back
                    </h1>
                    <p className="mt-2 text-sm text-slate-600">
                        Access your PHARVEX medical dashboard
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-1.5">
                        <label htmlFor="login-email" className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                            Email Address
                        </label>
                        <input
                            id="login-email"
                            name="email"
                            type="email"
                            autoComplete="username"
                            placeholder="redohz@example.com"
                            required
                            onChange={() => setFormMessage('')}
                            className="w-full rounded-2xl border border-slate-200/80 bg-slate-50/80 px-4 py-3.5 text-sm font-medium text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                        />
                    </div>

                    <div className="space-y-1.5">
                        <div className="flex items-center justify-between gap-3">
                            <label htmlFor="login-password" className="text-xs font-bold uppercase tracking-wider text-slate-600">
                                Password
                            </label>
                            <Link to="/contact" className="text-xs font-semibold text-blue-600 transition-colors hover:text-blue-700 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                                Forgot?
                            </Link>
                        </div>
                        <div className="relative">
                            <input
                                id="login-password"
                                name="password"
                                type={showPassword ? 'text' : 'password'}
                                autoComplete="current-password"
                                placeholder="Enter your password"
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
                    </div>

                    <label className="flex w-fit cursor-pointer items-center gap-2 text-sm text-slate-600">
                        <input
                            type="checkbox"
                            name="remember"
                            className="h-4 w-4 rounded border-slate-300 accent-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        />
                        Remember me
                    </label>

                    <button
                        type="submit"
                        className="group/btn relative w-full overflow-hidden rounded-2xl bg-blue-600 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/30 transition-all duration-300 hover:scale-[1.02] hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/40 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/30"
                    >
                        <span aria-hidden="true" className="absolute inset-0 h-full w-full translate-y-full bg-white/20 transition-transform duration-300 group-hover/btn:translate-y-0" />
                        <span className="relative z-10">Sign In to Dashboard</span>
                    </button>

                    {formMessage && (
                        <p role="status" className="rounded-xl bg-blue-50 px-4 py-3 text-center text-sm text-blue-800">
                            {formMessage}
                        </p>
                    )}
                </form>

                <p className="mt-8 text-center text-sm text-slate-600">
                    Don&apos;t have an account?{' '}
                    <Link to="/signup" className="font-bold text-blue-600 transition-colors hover:text-blue-700 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                        Create account
                    </Link>
                </p>
            </div>
        </section>
    );
}