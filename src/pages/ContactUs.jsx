import { useState, useEffect } from 'react'
import Footer from '../components/Footer'

const ContactUs = () => {

    const [showBackTop, setshowBackTop] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setshowBackTop(window.scrollY > 400)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div>
            {/* Hero */}
            <section className="absolute top-0 w-full overflow-hidden" style={{ height: '550px' }}>
                <img src="https://powerlift.qodeinteractive.com/elementor/wp-content/uploads/2019/07/team-title-img.jpg"
                    alt="" className="w-full h-full object-cover object-center block" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white">
                    <p className="text-[11px] tracking-[3px] uppercase mb-[10px] opacity-90" style={{ fontFamily: "'Open Sans', sans-serif" }}>This page is</p>
                    <h1 className="text-[52px] font-bold tracking-[3px] uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>Contact Us</h1>
                </div>
            </section>

            {/* Ask Anything Form */}
            <div className="w-[80%] mx-auto flex flex-col gap-8 my-16 pt-[500px]">
                <h1 className="text-5xl font-extrabold">FEEL FREE TO ASK ANYTHING</h1>
                <form className="flex flex-col w-full gap-5">
                    <div className="flex gap-5">
                        <input type="text" placeholder="Your Full Name" className="w-1/2 h-[40px] px-3 text-base border border-gray-300" />
                        <input type="text" placeholder="Contact Number" className="w-1/2 h-[40px] px-3 text-base border border-gray-300" />
                    </div>
                    <input type="text" placeholder="Subject" className="h-[40px] px-3 text-base border border-gray-300" />
                    <textarea placeholder="Message" className="px-3 max-w-full text-base border border-gray-300" style={{ height: '200px', padding: '12px' }}></textarea>
                    <div className="w-full flex justify-end">
                        <button className="w-[200px] h-[50px] bg-black text-white border-none cursor-pointer text-base my-8 hover:bg-gray-800 transition-colors">SEND US A MESSAGE</button>
                    </div>
                </form>
            </div>

            {/* Find Us Section */}
            <section className="md:flex gap-8 px-12 py-16 bg-white">
                <div className="flex-1">
                    <h2 className="text-4xl font-bold my-8">FIND US HERE &amp; DROP BY</h2>
                    <p className="mb-4"><span className="font-bold">PHONE:</span> 8600511152, 8007083737, 8378899790</p>
                    <p className="mb-4"><span className="font-bold">E-MAIL:</span> evolvefitnessandwellness@gmail.com</p>
                    <p className="mb-4"><span className="font-bold">GYM ADDRESS:</span> Level – 6, One Place – Wanowrie, Salunke Vihar Road, Pune-411040</p>
                    <p className="mb-4"><span className="font-bold">REGISTERED ADDRESS:</span> Opposite Meera Society, Gulab Bungalow, Mahatma Phule Colony, Shankar Seth Road, 322/15, Pune-411042</p>
                </div>
                <div className="flex-1">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7063.391282522321!2d85.325575043003!3d27.72668205163426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19168de06f8b%3A0xcfa1995cfd8b4e8d!2sBaluwatar%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1779202592784!5m2!1sen!2snp"
                         className='md:w-[800px] md:h-[600px] w-full h-72' style={{ border: 0 }} allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </section>

            {/* Instagram bar */}
            <div className="flex items-center justify-center gap-3 bg-[#111] py-[22px] text-white" style={{ fontFamily: "'Oswald', sans-serif", fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase' }}>
                <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none" />
                </svg>
                <span>FOLLOW US ON @EVOLVE FITNESS</span>
            </div>

            <Footer />

            <button
                className={`back-top ${showBackTop ? 'show' : ''}`}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                ⌃
            </button>
        </div>
    )
}

export default ContactUs
