import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="bg-black z-[100] w-full" style={{ height: '660px' }}>
            <div className="flex gap-3 w-full mx-auto justify-center">
                <div className="col1 w-full px-12 pt-28 flex flex-col gap-8 text-white" style={{ lineHeight: 1 }}>
                    <img width="100" src="https://evolvefitnesspune.in/wp-content/uploads/2023/08/EVOLVE-Logo-White-PNG-95x45-1.png" alt="Evolve Logo" />
                    <h2 className="text-white" style={{ fontSize: '26px', fontWeight: 'bold' }}>EMPOWERING YOU TO EVOLVE TO THE BEST VERSION OF YOURSELF.</h2>
                    <div className="flex flex-col gap-3">
                        <h3 style={{ fontSize: '18px' }}>OUR SOCIALS</h3>
                        <div className="flex gap-5">
                            <svg width="22" viewBox="0 0 448 512" fill="white">
                                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                            </svg>
                            <svg width="12" viewBox="-337 273 123.5 256" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" strokeWidth="12">
                                <path d="M-260.9,327.8c0-10.3,9.2-14,19.5-14c10.3,0,21.3,3.2,21.3,3.2l6.6-39.2c0,0-14-4.8-47.4-4.8c-20.5,0-32.4,7.8-41.1,19.3 c-8.2,10.9-8.5,28.4-8.5,39.7v25.7H-337V396h26.5v133h49.6V396h39.3l2.9-38.3h-42.2V327.8z" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="col2 w-full px-12 pt-28 flex flex-col gap-8 text-white" style={{ lineHeight: 1.5 }}>
                    <h3>CONTACT INFO</h3>
                    <p>Level – 6, One Place – Wanowrie, Salunke Vihar Road, Pune-411040 evolvefitnessandwellness@gmail.com 86005 11152 , 8007083737, 8378899790</p>
                </div>

                <div className="col3 w-full px-12 pt-28 flex flex-col gap-8 text-white">
                    <h3>Quick Links</h3>
                    <ul className="list-none flex flex-col gap-3">
                        <Link to="/" className="text-white no-underline"><li>Home</li></Link>
                        <Link to="/" className="text-white no-underline"><li>Services</li></Link>
                        <Link to="/about" className="text-white no-underline"><li>About Us</li></Link>
                        <Link to="/" className="text-white no-underline"><li>Gallery</li></Link>
                        <Link to="/contact" className="text-white no-underline"><li>Contact</li></Link>
                    </ul>
                </div>

                <div className="col4 w-full px-12 pt-28 flex flex-col gap-8 text-white">
                    <h3>WORKING HOURS</h3>
                    <div className="flex flex-col gap-2">
                        <p>Monday – Saturday:</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p>Every Sundays:</p>
                        <p>11:00 AM – 04:00 PM</p>
                    </div>
                    <div className="ani-btn relative" style={{ height: '44px' }}>
                        <hr id="tophr" style={{ border: '1.5px solid black', backgroundColor: 'black' }} />
                        <hr id="righthr" style={{ border: '1.5px solid black', backgroundColor: 'black' }} />
                        <Link to="/contact">
                            <button className="w-[200px] h-[60px] bg-white text-black font-bold text-base cursor-pointer transition-all duration-200 hover:bg-black hover:text-white hover:translate-x-[3px] hover:translate-y-[3px] border-none">CONTACT US</button>
                        </Link>
                        <hr id="lefthr" style={{ border: '1.5px solid black', backgroundColor: 'black' }} />
                        <hr id="bottomhr" style={{ border: '1.5px solid black', backgroundColor: 'black' }} />
                    </div>
                </div>
            </div>

            <div className="w-full h-[140px] bg-[rgb(11,11,11)] text-white flex justify-center items-center flex-col gap-1">
                <p>© 2023 Evolve Fitness</p>
                <p>All Rights Reserved with Vibrant Fitness</p>
            </div>
        </div>
    )
}

export default Footer
