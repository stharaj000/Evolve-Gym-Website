import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {

    const [panelOpen, setPanelOpen] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const location = useLocation()

    const openPanel = () => {
        setPanelOpen(true)
        document.body.style.overflow = 'hidden'
    }

    const closePanel = () => {
        setPanelOpen(false)
        document.body.style.overflow = ''
    }

    const closeMobileMenu = () => {
        setMobileMenuOpen(false)
        document.body.style.overflow = ''
    }

    const openMobileMenu = () => {
        setMobileMenuOpen(true)
        document.body.style.overflow = 'hidden'
    }

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') { closePanel(); closeMobileMenu() }
        }
        document.addEventListener('keydown', handleKeyDown)
        return () => document.removeEventListener('keydown', handleKeyDown)
    }, [])

    // Close mobile menu on route change
    useEffect(() => { closeMobileMenu() }, [location.pathname])

    const navLinks = [
        { to: '/',        label: 'HOME'           },
        { to: '/about',   label: 'ABOUT US'       },
        { to: '/contact', label: 'CONTACT US'     },
        { to: '/privacy', label: 'PRIVACY POLICY' },
    ]

    return (
        <>
            <nav className="w-full flex justify-between items-center sticky top-0 left-0 z-[100]">
                {/* Logo */}
                <div className="logo">
                    <img
                        src="/images/evolve.png"
                        alt="Evolve Logo"
                        className="h-[80px] md:h-[140px] ml-4 md:ml-[40px]"
                    />
                </div>

                {/* Desktop nav links */}
                <ul className="hidden lg:flex text-white list-none gap-[60px] xl:gap-[110px] bg-black px-6 xl:px-10 py-10 items-center text-sm">
                    {navLinks.map(({ to, label }) => (
                        <li key={to} className="nav-link cursor-pointer">
                            <Link to={to} className="text-white no-underline">{label}</Link>
                            <hr className={location.pathname === to ? '!w-full !border-white' : ''} />
                        </li>
                    ))}
                    <li
                        className="info-btn flex items-center gap-5 cursor-pointer text-white"
                        onClick={openPanel}
                    >
                        INFO
                        <div className="flex flex-col gap-[6px]">
                            <div className="info-top"></div>
                            <div className="info-bottom"></div>
                        </div>
                    </li>
                </ul>

                {/* Mobile: hamburger */}
                <div className="lg:hidden flex items-center gap-4 mr-4 bg-black px-4 py-3">
                    <button
                        className="text-white flex flex-col gap-[5px] cursor-pointer"
                        onClick={openMobileMenu}
                        aria-label="Open menu"
                    >
                        <span className="block w-6 h-[2px] bg-white transition-all"></span>
                        <span className="block w-6 h-[2px] bg-white transition-all"></span>
                        <span className="block w-6 h-[2px] bg-white transition-all"></span>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-black/70 z-[200] transition-opacity duration-300 lg:hidden ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={closeMobileMenu}
            />

            {/* Mobile Menu Panel */}
            <div
                className={`fixed top-0 right-0 h-full w-[75%] max-w-[320px] bg-black z-[201] flex flex-col pt-16 px-8 gap-8 transition-transform duration-500 lg:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <button
                    className="absolute top-5 right-5 text-white text-2xl cursor-pointer bg-transparent border-none"
                    onClick={closeMobileMenu}
                >✕</button>
                <img src="/images/evolve.png" alt="Evolve" className="w-24 mb-4" />
                <ul className="flex flex-col gap-6">
                    {navLinks.map(({ to, label }) => (
                        <li key={to} className="nav-link cursor-pointer">
                            <Link to={to} className="text-white no-underline text-lg font-semibold tracking-widest">{label}</Link>
                            <hr className={location.pathname === to ? '!w-full !border-white' : ''} />
                        </li>
                    ))}
                    <li
                        className="info-btn flex items-center gap-5 cursor-pointer text-white text-lg font-semibold tracking-widest"
                        onClick={() => { closeMobileMenu(); openPanel() }}
                    >
                        INFO
                        <div className="flex flex-col gap-[5px]">
                            <div className="info-top"></div>
                            <div className="info-bottom"></div>
                        </div>
                    </li>
                </ul>
            </div>

            {/* Overlay */}
            <div
                className={`ep-overlay ${panelOpen ? 'ep-open' : ''}`}
                onClick={closePanel}
            ></div>

            {/* Slide-in Panel — unchanged */}
            <div className={`ep-panel ${panelOpen ? 'ep-open' : ''}`} role="dialog" aria-modal="true" aria-label="About Evolve">
                <span className="ep-watermark" aria-hidden="true">ABOUT</span>

                <button
                    className="ep-close absolute cursor-pointer bg-transparent border-none text-[var(--panel-text)] flex items-center gap-[10px]"
                    style={{ top: 'clamp(20px,3vw,36px)', right: 'clamp(20px,3vw,36px)', fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '13px', letterSpacing: '0.18em', textTransform: 'uppercase', padding: '8px 0', zIndex: 2 }}
                    onClick={closePanel}
                >
                    CLOSE
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '24px', height: '14px', stroke: 'currentColor', strokeWidth: '1.5', transform: 'scale(2)', transition: '0.5s all' }}>
                        <line x1="4" y1="4" x2="20" y2="20" />
                        <line x1="20" y1="4" x2="4" y2="20" />
                    </svg>
                </button>

                <div className="ep-body">
                    <div className="ep-logo ep-anim" style={{ marginTop: 'clamp(40px,6vw,64px)', marginBottom: 'clamp(28px,4vw,44px)' }}>
                        <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 'clamp(26px,3vw,46px)', letterSpacing: '0.04em', color: 'var(--panel-text)', lineHeight: 1, display: 'block' }}>EVOLVE</span>
                        <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 400, fontSize: 'clamp(9px,1.2vw,11px)', letterSpacing: '0.28em', color: 'var(--panel-muted)', textTransform: 'uppercase', marginTop: '4px', display: 'block' }}>· Fitness and Wellness Club ·</span>
                    </div>

                    <p className="ep-tagline ep-anim" style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: 'clamp(14px,1.8vw,17px)', lineHeight: 1.7, color: 'rgba(240,237,232,0.75)', maxWidth: '400px', marginBottom: 'clamp(36px,5vw,56px)' }}>
                        Always striving to provide world class facilities with exceptional customer service and offerings. Raising the bar with best in class Equipment.
                    </p>

                    <div className="ep-anim" style={{ width: '40px', height: '1px', background: 'var(--panel-accent)', marginBottom: 'clamp(28px,4vw,40px)', opacity: 0.7 }}></div>

                    <h2 className="ep-anim" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 'clamp(20px,2.5vw,28px)', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--panel-text)', margin: '0 0 clamp(20px,3vw,28px) 0' }}>Working Hours</h2>

                    <div className="ep-anim" style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: 'clamp(36px,5vw,56px)' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                            <span style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 500, fontSize: 'clamp(12px,1.5vw,14px)', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--panel-muted)' }}>Monday – Saturday</span>
                            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 'clamp(18px,2.2vw,24px)', letterSpacing: '0.04em', color: 'var(--panel-text)' }}>06:00 AM – 10:00 PM</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                            <span style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 500, fontSize: 'clamp(12px,1.5vw,14px)', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--panel-muted)' }}>Every Sunday</span>
                            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 'clamp(18px,2.2vw,24px)', letterSpacing: '0.04em', color: 'var(--panel-text)' }}>11:00 AM – 04:00 PM</span>
                        </div>
                    </div>

                    <div className="ep-anim" style={{ width: '40px', height: '1px', background: 'var(--panel-accent)', marginBottom: 'clamp(28px,4vw,40px)', opacity: 0.7 }}></div>

                    <h2 className="ep-anim" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 'clamp(20px,2.5vw,28px)', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--panel-text)', margin: '0 0 clamp(20px,3vw,28px) 0' }}>Our Socials</h2>

                    <div className="ep-anim" style={{ display: 'flex', gap: '16px', paddingBottom: '40px' }}>
                        <a href="https://www.instagram.com/evolvefitnessandwellnessclub/" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '42px', height: '42px', border: '1px solid var(--panel-border)', borderRadius: '50%', color: 'var(--panel-text)', textDecoration: 'none', transition: 'all 0.2s' }}>
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ width: '17px', height: '17px', fill: 'currentColor' }}>
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                            </svg>
                        </a>
                        <a href="https://www.facebook.com/evolvefitnessandwellnessclub" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '42px', height: '42px', border: '1px solid var(--panel-border)', borderRadius: '50%', color: 'var(--panel-text)', textDecoration: 'none', transition: 'all 0.2s' }}>
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ width: '17px', height: '17px', fill: 'currentColor' }}>
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar