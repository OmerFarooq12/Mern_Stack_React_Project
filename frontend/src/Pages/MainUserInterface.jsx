import React from 'react'
import Navigation from '../Components/Nav/Navigation.jsx'
import Deatails from '../Components/DetailsSection/Deatails.jsx'
import Works from '../Components/WorkSection/Works.jsx'
import Testimonials from '../Components/TestimonialSection/Testimonials.jsx'
import Divider from '../Components/Divider.jsx'
import FAQ from '../Components/FAQ Section/FAQ.jsx'
import Footer from '../Components/FooterSection/Footer.jsx'
import CopyRight from '../Components/CopyRightSection/CopyRight.jsx'
import Headers from '../Components/Header/Headers.jsx'
import About from '../Components/About/About.jsx'
import Contact from '../Components/ContactSection/Contact.jsx'
import Services from '../Components/Service Section/Services.jsx'
import Projects from '../Components/ProjectSection/Projects.jsx'
const Main = () => {
    return (
        <>
            <Navigation />
            <Headers />
            <About />
            <Services />
            <Deatails />
            <Projects /> 
            <Works />
            <Testimonials />
            <Divider />
            <FAQ />
            <Contact />
            <Footer />
            <CopyRight />
        </>
    )
}

export default Main