import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const facilities = [
    'Certified Staff',
    "World's No. 1 Cardio & Strength Training Equipments",
    'Spacious Free Weights Area',
    'Unlimited Access to group activities',
    'Fitness Assessment & Testing ( Regular BMI tracking )',
    'Exercise Programming',
    'Free Physiotherapist',
    'Unlimited Free Diet plans',
    'Vanity area in Ladies Spa',
    'Freezing of Gym Membership ( T&C Apply )',
    'Transfer of Gym Membership (T&C Apply)',
    'Dedicated Indoor Training Area',
    'Indoor Jogging Track',
    'Custom designed Functional Training System',
    'Daily Temporary Lockers and Paid permanent lockers',
    'Steam Bath.',
    'Showers',
]

const AboutUs = () => {

    const [showBackTop, setshowBackTop] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setshowBackTop(window.scrollY > 400)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className='overflow-x-hidden'>
            {/* Hero Banner */}
            <section className="w-full absolute top-0  " style={{ height: '550px' }}>
                <img src="https://powerlift.qodeinteractive.com/elementor/wp-content/uploads/2019/07/team-title-img.jpg"
                    alt="" className="w-full h-full object-cover object-center block" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white">
                    <p className="text-[11px] tracking-[3px] uppercase mb-[10px] opacity-90" style={{ fontFamily: "'Open Sans', sans-serif" }}>This page is</p>
                    <h1 className="text-[52px] font-bold tracking-[3px] uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>About Us</h1>
                </div>
            </section>

            {/* About Content */}
            <section style={{ maxWidth: '1260px', margin: '290px 100px 100px', padding: '222px 40px 0px 40px' }}>
                <p className="text-[48px] font-extrabold tracking-[1px] uppercase" style={{ fontFamily: "'Oswald', sans-serif", lineHeight: 1.1, marginBottom: '4px', color: 'black' }}>Hello We Are,</p>

                <div className="my-4">
                    <img src="https://evolvefitnesspune.in/wp-content/uploads/2023/08/EVOLVE-Logo-Black-PNG-1536x724-1-1-768x362.png" alt="" style={{ width: '300px', margin: '20px 0' }} />
                </div>

                <p className="text-xl leading-[1.8] text-[#656565] mb-8">
                    At Evolve Fitness Gym, we are dedicated to helping our members achieve their fitness goals and improve their overall well-being. Our state-of-the-art facility offers a wide range of equipment, group fitness classes, and personalized training programs to suit every fitness level and interest. Our experienced and certified trainers are committed to providing the support, guidance, and motivation you need to reach your full potential. Whether you're a beginner or a seasoned athlete, we'll work with you to create a customized fitness plan that's tailored to your specific needs and goals. We believe that fitness should be accessible to everyone and we strive to create a welcoming and inclusive environment for all of our members. So come and join us at Evolve Fitness Gym, where we will support and guide you as you evolve into the best version of yourself.
                </p>

                <Link to="/contact" className="inline-flex items-center gap-2 border border-black border-[1.5px] px-[18px] py-[10px] text-[11px] font-semibold tracking-[2px] uppercase no-underline text-black transition-all hover:bg-black hover:text-white">
                    Contact Us
                    <svg viewBox="0 0 24 24" style={{ width: '14px', height: '14px', stroke: 'currentColor', fill: 'none', strokeWidth: 2 }}>
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                    </svg>
                </Link>
            </section>

            {/* Facilities */}
            <div className="flex justify-center flex-col items-center px-20 py-20 bg-white">
                <h2 className="font-extrabold mb-12" style={{ fontSize: '54px', marginLeft: '170px', width: '100%' }}>Facilities that we Provide</h2>
                <ul className="list-none flex gap-10 flex-col flex-wrap" style={{ height: '590px' }}>
                    {facilities.map((item, i) => (
                        <li key={i} className="text-lg text-[rgb(110,110,110)] font-bold flex items-center gap-5">
                            <img src="/images/dumbell.svg" alt="" width="30px" />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Partners Marquee */}
            <section className="relative bg-[#111] overflow-hidden">
                <div className="relative w-full overflow-hidden py-20" style={{
                    background: 'linear-gradient(rgba(0,0,0,0.62), rgba(0,0,0,0.62)), url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1400&q=60") center/cover no-repeat'
                }}>
                    <div className="marquee-track flex items-center gap-[80px]" style={{ width: 'max-content' }}>
                        {[...Array(2)].map((_, setIdx) => (
                            <div key={setIdx} className="flex items-center gap-[80px]">
                                <div className="flex items-center justify-center flex-shrink-0 opacity-90 h-[70px]">
                                    <svg viewBox="0 0 160 70" xmlns="http://www.w3.org/2000/svg" fill="white" style={{ height: '60px', width: 'auto' }}>
                                        <polygon points="10,5 30,5 45,28 60,5 80,5 55,38 80,70 60,70 45,48 30,70 10,70 35,38" opacity="0.9" />
                                        <text x="88" y="46" fontFamily="'Oswald',sans-serif" fontWeight="700" fontSize="28" letterSpacing="2">FITNESS</text>
                                    </svg>
                                </div>
                                <div className="flex items-center justify-center flex-shrink-0 opacity-90 h-[70px]">
                                    <svg viewBox="0 0 200 70" xmlns="http://www.w3.org/2000/svg" fill="white" style={{ height: '60px', width: 'auto' }}>
                                        <polyline points="10,55 45,10 65,35 85,10 120,55" fill="none" stroke="white" strokeWidth="5" strokeLinejoin="round" />
                                        <text x="10" y="68" fontFamily="Arial,sans-serif" fontSize="16" letterSpacing="1">
                                            <tspan fontWeight="700">mountain</tspan>
                                            <tspan fontWeight="400">sport</tspan>
                                        </text>
                                    </svg>
                                </div>
                                <div className="flex items-center justify-center flex-shrink-0 opacity-90 h-[70px]">
                                    <svg viewBox="0 0 260 70" xmlns="http://www.w3.org/2000/svg" fill="white" style={{ height: '60px', width: 'auto' }}>
                                        <text x="0" y="52" fontFamily="'Oswald',Impact,sans-serif" fontWeight="700" fontSize="58" letterSpacing="3">SPARTAN</text>
                                        <text x="2" y="68" fontFamily="Arial,sans-serif" fontSize="12" letterSpacing="6" opacity="0.8">ATHLETIC SPORTSWEAR</text>
                                    </svg>
                                </div>
                                <div className="flex items-center justify-center flex-shrink-0 opacity-90 h-[70px]">
                                    <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" style={{ height: '60px', width: 'auto' }}>
                                        <circle cx="40" cy="40" r="36" fill="none" stroke="white" strokeWidth="3" />
                                        <path d="M30,20 Q55,20 55,35 Q55,48 40,50 L55,62" fill="none" stroke="white" strokeWidth="5" strokeLinecap="round" />
                                        <path d="M30,20 L30,62" fill="none" stroke="white" strokeWidth="5" strokeLinecap="round" />
                                        <path d="M12,55 Q40,75 65,45" fill="none" stroke="white" strokeWidth="3" opacity="0.7" />
                                    </svg>
                                </div>
                                <div className="flex items-center justify-center flex-shrink-0 opacity-90 h-[70px]">
                                    <svg viewBox="0 0 230 70" xmlns="http://www.w3.org/2000/svg" fill="white" style={{ height: '60px', width: 'auto' }}>
                                        <text x="0" y="35" fontFamily="'Oswald',Impact,sans-serif" fontWeight="700" fontSize="34" letterSpacing="2">NUTRI</text>
                                        <text x="118" y="35" fontFamily="'Oswald',Impact,sans-serif" fontWeight="700" fontSize="34" letterSpacing="2">TION</text>
                                        <text x="0" y="65" fontFamily="'Oswald',Impact,sans-serif" fontWeight="700" fontSize="34" letterSpacing="2">SUPPLEMENTS</text>
                                    </svg>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Instagram bar */}
                <div className="flex items-center justify-center gap-3 bg-[#111] py-[22px] text-white" style={{ fontFamily: "'Oswald', sans-serif", fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase' }}>
                    <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <circle cx="12" cy="12" r="4" />
                        <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none" />
                    </svg>
                    <span>FOLLOW US ON @EVOLVE FITNESS</span>
                </div>
            </section>

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

export default AboutUs
