import { Link } from 'react-router-dom'

const services = [
    {
        icon: '🩺',
        title: 'Talk to a Doctor',
        description: 'Connect with licensed general practitioners and medical specialists for virtual care and trusted guidance.',
        to: '/login',
        action: 'Sign in to get started',
    },
    {
        icon: '📍',
        title: 'Find Facilities',
        description: 'Explore nearby clinics, hospitals, and health facilities to find care that fits your needs.',
        to: '/login',
        action: 'Find a facility',
    },
    {
        icon: '📅',
        title: 'Appointment Booking',
        description: 'Plan your care by requesting appointments with healthcare professionals in one place.',
        to: '/login',
        action: 'Book an appointment',
    },
    {
        icon: '✚',
        title: 'Health Guidance',
        description: 'Browse practical health information and learn how PHARVEX can support your care journey.',
        to: '/about',
        action: 'Learn about PHARVEX',
    },
    {
        icon: '💊',
        title: 'Medication Reminders',
        description: 'Keep your medication routine organized with reminders designed to help you stay on track.',
        to: '/login',
        action: 'Set up reminders',
    },
    {
        icon: '🚨',
        title: 'Emergency Care',
        description: 'For a life-threatening emergency, contact your local emergency services. For other care questions, reach out to PHARVEX.',
        to: '/contact',
        action: 'Contact PHARVEX',
    },
]

export default function Services() {
    return (
        <section className="relative -mx-6 -my-6 min-h-[calc(100vh-4.25rem)] overflow-hidden bg-slate-50/60 py-16 animate-bounce-in lg:py-24">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/3 h-[min(75vw,38rem)] w-[min(75vw,38rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[100px] animate-pulse-glow sm:blur-[150px]"
            />

            <div className="relative z-10 mx-auto max-w-7xl px-6">
                <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
                    <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700">
                        What We Offer
                    </span>
                    <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                        Comprehensive Healthcare Services
                    </h1>
                    <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                        PHARVEX connects you with medical resources, certified professionals, and support for your healthcare journey.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                    {services.map((service) => (
                        <article
                            key={service.title}
                            className="group flex h-full flex-col rounded-3xl border border-white/80 bg-white/90 p-7 shadow-xl shadow-blue-900/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-2xl hover:shadow-blue-900/10 sm:p-8"
                        >
                            <div
                                aria-hidden="true"
                                className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-700 to-blue-500 text-2xl text-white shadow-md shadow-blue-500/30 transition-all duration-300 group-hover:rotate-3 group-hover:scale-110"
                            >
                                {service.icon}
                            </div>
                            <h2 className="text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
                                {service.title}
                            </h2>
                            <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                                {service.description}
                            </p>
                            <Link
                                to={service.to}
                                className="mt-6 inline-flex min-h-11 items-center gap-2 self-start text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                            >
                                {service.action}
                                <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}