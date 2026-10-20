import { Link } from 'react-router-dom'
import personCutout from '../assets/landingpage-cutout.png'

const values = [
    {
        icon: '🛡️',
        title: 'Trust & Safety',
        description: 'Your health information and conversations deserve careful handling and respect for your privacy.',
    },
    {
        icon: '⚡',
        title: 'Rapid Accessibility',
        description: 'Find care options and information through one clear, accessible digital experience.',
    },
    {
        icon: '💙',
        title: 'Patient-Centric Care',
        description: 'Tools and guidance are designed around your needs and your healthcare journey.',
    },
]

export default function About() {
    return (
        <section className="relative -mx-6 -my-6 min-h-[calc(100vh-4.25rem)] overflow-hidden bg-slate-50/60 py-16 animate-bounce-in lg:py-24">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/4 h-[min(75vw,38rem)] w-[min(75vw,38rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[100px] animate-pulse-glow sm:blur-[150px]"
            />

            <div className="relative z-10 mx-auto max-w-7xl px-6">
                <div className="mx-auto mb-14 max-w-3xl text-center lg:mb-16">
                    <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700">
                        About PHARVEX
                    </span>
                    <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                        Reimagining Digital Healthcare &amp; Clinical Access
                    </h1>
                    <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                        We are on a mission to bridge the gap between patients and quality care through technology, transparency, and trusted medical professionals.
                    </p>
                </div>

                <div className="mb-16 grid grid-cols-1 items-center gap-10 lg:mb-24 lg:grid-cols-2 lg:gap-16">
                    <div className="space-y-6">
                        <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 transition-colors duration-300 hover:text-blue-700 sm:text-3xl">
                            Our Mission &amp; Commitment
                        </h2>
                        <p className="text-base leading-relaxed text-slate-600">
                            PHARVEX was built to address fragmentation in modern healthcare. By bringing care discovery, professional access, and appointment planning together, we aim to put your health journey back in your hands.
                        </p>
                        <p className="text-base leading-relaxed text-slate-600">
                            We believe clear information and thoughtful tools can help people make more informed decisions about their care.
                        </p>
                        <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                            <Link to="/services" className="inline-flex min-h-12 items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-center font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl active:translate-y-0">
                                Explore services
                            </Link>
                            <Link to="/contact" className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-300 bg-white/60 px-6 py-3 text-center font-semibold text-slate-800 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-700 active:translate-y-0">
                                Contact our team
                            </Link>
                        </div>
                    </div>

                    <div className="group overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-blue-800 p-6 text-white shadow-2xl shadow-blue-600/20 sm:p-8">
                        <div className="flex justify-center overflow-hidden">
                            <img
                                src={personCutout}
                                alt="Healthcare professional"
                                className="h-64 w-auto max-w-full object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-[1.03] sm:h-72"
                            />
                        </div>
                        <dl className="mt-6 grid grid-cols-1 divide-y divide-white/15 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                            <div className="py-4 sm:px-4 sm:py-2 sm:first:pl-0">
                                <dt className="text-sm leading-relaxed text-blue-100">Verified medical professionals &amp; clinics</dt>
                                <dd className="mt-2 text-3xl font-extrabold tracking-tight">100%</dd>
                            </div>
                            <div className="py-4 sm:px-4 sm:py-2">
                                <dt className="text-sm leading-relaxed text-blue-100">Virtual care access</dt>
                                <dd className="mt-2 text-3xl font-extrabold tracking-tight">24/7</dd>
                            </div>
                            <div className="py-4 sm:py-2 sm:pl-4">
                                <dt className="text-sm leading-relaxed text-blue-100">Average specialist connection</dt>
                                <dd className="mt-2 text-3xl font-extrabold tracking-tight">5 min</dd>
                            </div>
                        </dl>
                    </div>
                </div>

                <div>
                    <div className="mb-8 text-center sm:mb-12">
                        <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                            Built on Core Values
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
                        {values.map((value) => (
                            <article
                                key={value.title}
                                className="group rounded-3xl border border-white/80 bg-white/90 p-7 shadow-xl shadow-blue-900/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-2xl hover:shadow-blue-900/10 sm:p-8"
                            >
                                <div aria-hidden="true" className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-xl transition-all duration-300 group-hover:rotate-3 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                                    {value.icon}
                                </div>
                                <h3 className="mb-2 text-lg font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                                    {value.title}
                                </h3>
                                <p className="text-sm leading-relaxed text-slate-600">
                                    {value.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}