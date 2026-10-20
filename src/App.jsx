import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";

import Signup from "./components/signup";
import Login from "./components/login";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Services from "./components/services";

export default function App() {
    return (
        <BrowserRouter>
            <div className="flex flex-col min-h-screen">
                <Header />
             

                <main className="flex-1 p-6 flex-grow">
                    <Routes>
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/services" element={<Services />} />
                    </Routes>
                </main>

                <Footer />
            </div>
        </BrowserRouter>
    );
}