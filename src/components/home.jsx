import personCutout from '../assets/landingpage-cutout.png'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <section className="relative -mx-6 -my-6 grid grid-cols-1 overflow-hidden bg-slate-50/60 py-12 animate-bounce-in lg:min-h-[calc(100vh-4.3125rem)] lg:grid-cols-2 lg:py-20">
            <div className="flex items-center bg-slate-50 px-6 py-14 sm:px-12 lg:pr-32 lg:pl-14 xl:pl-20">
                <div className="hero-copy mx-auto flex w-full max-w-xl flex-col items-start lg:mx-0 lg:max-w-[19rem] xl:max-w-[16.5rem]">
                    <span className="mb-6 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700 transition-colors duration-300 hover:bg-blue-200">
                        Your smart healthcare
                    </span>
                    <h1 className="text-4xl font-extrabold leading-[1.15] tracking-tight text-slate-900 transition-colors duration-300 hover:text-blue-700 sm:text-5xl lg:text-6xl">
                        Your Health matters.
                    </h1>
                    <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 transition-colors duration-300 hover:text-slate-800">
                        Access licensed medical professionals, find nearby health facilities, book appointments, and manage your health journey all in one seamless platform.
                    </p>

                    <div className="mt-8 flex w-full flex-col gap-4 sm:w-auto sm:flex-row xl:w-full xl:flex-col">
                        <Link to="/login" className="rounded-full bg-blue-600 px-7 py-3.5 text-center font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl active:translate-y-0 xl:w-full">
                            Talk to a Doctor
                        </Link>
                        <Link to="/login" className="rounded-full border border-slate-300 px-7 py-3.5 text-center font-semibold text-slate-800 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:bg-white active:translate-y-0 xl:w-full">
                            Find nearby Clinic
                        </Link>
                    </div>

                    <div className="mt-10 flex w-full items-center gap-8 border-t border-slate-200/80 pt-8">
                        <div className="group">
                            <p className="text-2xl font-bold text-slate-900 transition-transform duration-300 group-hover:-translate-y-0.5">10K</p>
                            <p className="text-xs font-medium text-slate-500 transition-colors group-hover:text-blue-600">Verified Doctors</p>
                        </div>
                        <div className="h-8 w-px bg-slate-200"/>
                        <div className="group">
                            <p className="text-2xl font-bold text-slate-900 transition-transform duration-300 group-hover:-translate-y-0.5">24/7</p>
                            <p className="text-xs font-medium text-slate-500 transition-colors group-hover:text-blue-600">Virtual Consultations</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="group relative flex min-h-[420px] items-center justify-center rounded-[2rem] bg-blue-600 px-6 py-14 sm:px-12 lg:min-h-0 lg:rounded-[2.5rem] lg:px-14 xl:px-20">
                
                
                
                <div className="relative flex w-full max-w-xl justify-center xl:absolute xl:inset-y-0 xl:left-0 xl:z-10 xl:w-auto xl:max-w-none xl:-translate-x-1/2">
                    <img
                        src={personCutout}
                        alt="Doctor providing healthcare"
                        className="hero-visual block h-auto max-h-[70vh] w-auto max-w-full object-contain drop-shadow-2xl transition-transform duration-700 ease-out group-hover:scale-[1.02] xl:h-full xl:max-h-none xl:max-w-none"
                    />
                 {/*    <div className="absolute bottom-5 left-5 max-w-xs rounded-2xl border border-white/20 bg-white/95 p-4 shadow-xl backdrop-blur-md sm:bottom-7 sm:left-7 sm:p-5">
                        <p className="text-base font-bold text-slate-900 sm:text-lg">Rapid Health Assistance</p>
                        <p className="mt-1 text-xs text-slate-600 sm:text-sm">Connect with a specialist in under 5 minutes</p>
                    </div> */}
                </div> 
                
            </div>
        </section>
    );
}