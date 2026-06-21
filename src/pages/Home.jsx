import { useState, useEffect, useRef } from 'react'
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

const memberships = [
    '21 DAYS MEMBERSHIP',
    '1 MONTH MEMBERSHIP',
    '2 MONTH MEMBERSHIP',
    '3 MONTH MEMBERSHIP',
    'HALF YEAR MEMBERSHIP',
    'ANNUAL MEMBERSHIP',
]

const programCards = [
    {
        img: 'https://evolvefitnesspune.in/wp-content/uploads/2023/10/Women-cardio.jpg',
        title: 'CARDIO PROGRAM',
        desc: 'Elevate your heart rate and boost endurance in our dedicated cardio area, capturing top-of-the-line machine',
    },
    {
        img: 'https://evolvefitnesspune.in/wp-content/uploads/2019/06/h2-banner-img-2.jpg',
        title: 'CARDIO PROGRAM',
        desc: 'Elevate your heart rate and boost endurance in our dedicated cardio area, capturing top-of-the-line machine',
    },
]

const featureCards = [
    {
        img: 'https://evolvefitnesspune.in/wp-content/uploads/2019/08/h1-banner-img-1.1.jpg',
        icon: 'https://evolvefitnesspune.in/wp-content/uploads/2019/07/h1-svg-1.png',
        title: 'Progression',
        desc: 'Our gym focuses on continuous improvement and individual growth, tracking your fitness journey to set new goals and reach higher levels of performance.',
        dark: true,
    },
    {
        img: 'https://evolvefitnesspune.in/wp-content/uploads/2019/07/h1-banner-img-2.jpg',
        icon: 'https://evolvefitnesspune.in/wp-content/uploads/2023/11/boxing-gloves__3_-removebg-preview.png',
        title: 'Training',
        desc: 'Experience top-tier training programs led by experienced instructors, providing personalized attention and expertise to maximize your fitness potential.',
        dark: false,
    },
    {
        img: 'https://evolvefitnesspune.in/wp-content/uploads/2019/08/h1-banner-img-3.1.jpg',
        icon: 'https://evolvefitnesspune.in/wp-content/uploads/2019/07/h1-svg-3.png',
        title: 'Workout',
        desc: 'Elevate your heart rate and boost endurance in our dedicated cardio area, capturing top-of-the-line machine',
        dark: true,
    },
]

const groupWorkoutRows = [
    [
        { img: 'https://evolvefitnesspune.in/wp-content/uploads/2023/10/pilates-group-working-out-gym-e1697448499584.jpg', icon: 'https://evolvefitnesspune.in/wp-content/uploads/2019/07/h1-svg-1.png', title: 'AEROBICS', dark: true },
        { img: 'https://evolvefitnesspune.in/wp-content/uploads/2023/10/two-muscular-boxers-have-competition-ring-they-are-wearing-helmets-gloves-e1697448457963.jpg', icon: 'https://evolvefitnesspune.in/wp-content/uploads/2023/11/boxing-gloves__3_-removebg-preview.png', title: 'BOXING', dark: false },
        { img: 'https://evolvefitnesspune.in/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-21-at-1.33.23-PM-e1697875793477.jpeg', icon: 'https://evolvefitnesspune.in/wp-content/uploads/2023/10/strength-2-1.png', title: 'FUNCTIONAL', dark: true },
    ],
    [
        { img: 'https://evolvefitnesspune.in/wp-content/uploads/2023/10/tabata-e1697448853177.jpg', icon: 'https://evolvefitnesspune.in/wp-content/uploads/2019/07/h1-svg-1.png', title: 'TABATA', dark: true },
        { img: 'https://evolvefitnesspune.in/wp-content/uploads/2023/10/people-taking-part-dance-therapy-class-e1697449397916.jpg', icon: 'https://evolvefitnesspune.in/wp-content/uploads/2023/10/zumba-4.png', title: 'ZUMBA', dark: false },
        { img: 'https://evolvefitnesspune.in/wp-content/uploads/2023/10/young-beautiful-woman-doing-yoga-nature-e1697449473403.jpg', icon: 'https://evolvefitnesspune.in/wp-content/uploads/2023/10/yoga-1-e1697010297199.png', title: 'YOGA', dark: true },
    ],
]

const galleryImages = [
    'https://evolvefitnesspune.in/wp-content/uploads/2023/08/PHOTO-2023-04-03-21-41-08_1.webp',
    'https://evolvefitnesspune.in/wp-content/uploads/2023/08/PHOTO-2023-04-03-21-40-50.webp',
    'https://evolvefitnesspune.in/wp-content/uploads/2023/08/PHOTO-2023-04-03-21-40-50_2.webp',
    'https://evolvefitnesspune.in/wp-content/uploads/2023/08/PHOTO-2023-04-03-21-40-31.webp',
    'https://evolvefitnesspune.in/wp-content/uploads/2023/08/PHOTO-2023-04-03-21-40-31_2.webp',
    'https://evolvefitnesspune.in/wp-content/uploads/2023/08/PHOTO-2023-04-03-21-39-14.webp',
    'https://evolvefitnesspune.in/wp-content/uploads/2023/08/PHOTO-2023-04-03-21-40-16.webp',
    'https://evolvefitnesspune.in/wp-content/uploads/2023/08/PHOTO-2023-04-03-21-40-16_1.webp',
    'https://evolvefitnesspune.in/wp-content/uploads/2023/08/PHOTO-2023-04-03-21-40-50_1.webp',
]

const reviews = [
    { text: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur corrupti at consequuntur laborum minima molestiae, ex nostrum voluptatem ab quam illo tempora maxime perferendis, excepturi, unde aperiam libero est sunt iusto rem possimus qui?"', name: 'Raj Shrestha' },
    { text: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur corrupti at consequuntur laborum minima molestiae, ex nostrum voluptatem ab quam illo tempora maxime perferendis, excepturi, unde aperiam libero est sunt iusto rem possimus qui?"', name: 'Raj Shrestha' },
]

const videoThumb = 'https://evolvefitnesspune.in/wp-content/uploads/sb-instagram-feed-images/603079025_18545024587041060_5274200943010137804_nlow.jpg'

const Home = () => {

    const [membershipOpen, setmembershipOpen] = useState(true)
    const [showBackTop, setshowBackTop] = useState(false)

    const [height, setheight] = useState('')
    const [weight, setweight] = useState('')
    const [age, setage] = useState('')
    const [gender, setgender] = useState('')
    const [activityLevel, setactivityLevel] = useState('')
    const [bmiResult, setbmiResult] = useState(null)
    const [showBmiResult, setshowBmiResult] = useState(false)

    const heroRef = useRef(null)

    useEffect(() => {
        const handleScroll = () => {
            if (heroRef.current) {
                const heroBottom = heroRef.current.offsetHeight
                setshowBackTop(window.scrollY > heroBottom)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleBmiSubmit = (e) => {
        e.preventDefault()
        const h = parseFloat(height)
        const w = parseFloat(weight)
        const a = parseFloat(age)
        const calcBMI = (w / Math.pow(h / 100, 2)).toFixed(1)
        const calcBMRMen = (10 * w) + (6.25 * h) - (5 * a) + 5
        const calcBMRWomen = (10 * w) + (6.25 * h) - (5 * a) - 161
        let bmiLabel = ''
        if (calcBMI < 18.5) bmiLabel = 'Under Weight!'
        else if (calcBMI >= 18.5 && calcBMI <= 24.9) bmiLabel = 'Healthy Weight!'
        else if (calcBMI >= 25.0 && calcBMI <= 29.9) bmiLabel = 'Over Weight!'
        else bmiLabel = 'Obesity!'
        const bmr = gender === 'Male' ? calcBMRMen : calcBMRWomen
        const activityMap = { 'Little or No Exercise': 1.2, 'Light Exercise': 1.375, 'Moderate Exercise': 1.55, 'Heavy Exercise': 1.725 }
        const maintCal = bmr * (activityMap[activityLevel] || 1.2)
        setbmiResult({ bmiLabel, calcBMI, bmr: bmr.toFixed(0), maintCal: maintCal.toFixed(0), activityLevel })
        setshowBmiResult(true)
    }

    return (
        <div className="w-full min-h-screen bg-gray-900 absolute top-0 bg-cover h-screen" style={{ backgroundImage: 'url(/images/hero.jpg)' }}>

            {/* Hero Section */}
            <div ref={heroRef} className="heroSection flex flex-col justify-between" style={{ height: '100vh' }}>
                <div className="heroBoxContainer h-[90%] flex justify-center items-center">
                    <div className="leftBox h-full w-1/2" style={{ cursor: 'url(/images/leftChevron64.png), auto' }}></div>
                    <div className="rightBox h-full w-1/2" style={{ cursor: 'url(/images/rightChevron.png), auto' }}></div>
                </div>
                <div className="progress-line bg-white h-3 w-0"></div>
            </div>

            {/* CTA Section */}
            <div className="flex min-h-[300px] md:h-[400px] justify-center items-center flex-col gap-5 bg-white px-6 py-12 text-center">
                <h2 className="w-full md:w-1/2 text-2xl md:text-4xl font-bold">
                    Empowering You to Evolve into the Best Version of Yourself.
                </h2>
                <div className="ani-btn relative" style={{ height: '44px' }}>
                    <hr className="tophr" style={{ border: '1.5px solid black', backgroundColor: 'black' }} />
                    <hr id="righthr" style={{ border: '1.5px solid black', backgroundColor: 'black' }} />
                    <Link to="/contact">
                        <button className="w-[300px] h-[60px] bg-[#E4B36E] border-none font-bold cursor-pointer transition-all duration-200 hover:bg-black hover:text-white hover:translate-x-[3px] hover:translate-y-[3px]">
                            LET'S BUILD TOGETHER
                        </button>
                    </Link>
                    <hr id="lefthr" style={{ border: '1.5px solid black', backgroundColor: 'black' }} />
                    <hr id="bottomhr" style={{ border: '1.5px solid black', backgroundColor: 'black' }} />
                </div>
            </div>

            {/* Gallery Grid */}
            <div className="flex bg-white justify-center px-6 md:px-16 lg:px-36 flex-wrap gap-5 md:gap-10 py-10">
                {galleryImages.map((img, i) => (
                    <div key={i} className="w-[calc(50%-10px)] sm:w-[280px] md:w-[300px] lg:w-[340px] h-[200px] sm:h-[280px] md:h-[320px] lg:h-[340px] bg-gray-300 overflow-hidden rounded-xl">
                        <img src={img} alt="" className="w-full h-full object-cover transition-all duration-500 hover:scale-[1.08]" />
                    </div>
                ))}
            </div>

            {/* Facilities */}
            <div className="flex justify-center flex-col items-center px-6 md:px-16 lg:px-20 py-12 md:py-20 bg-white">
                <h1 className="text-3xl md:text-5xl font-extrabold mb-10 text-center">Facilities that we Provide</h1>
                <ul className="list-none w-full flex flex-col md:flex-wrap md:flex-row gap-5 md:gap-8 lg:gap-10 md:max-h-[590px]">
                    {facilities.map((item, i) => (
                        <li key={i} className="text-base md:text-lg text-[rgb(110,110,110)] font-bold flex items-center gap-4 md:gap-5">
                            <img src="/images/dumbell.svg" alt="" width="26px" />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            {/* BMI + Membership */}
            <div className="bg-white flex flex-col lg:flex-row gap-12 px-6 md:px-16 lg:px-[120px] py-16 lg:py-[100px] justify-between">

                {/* BMI Calculator */}
                <div className="flex flex-col justify-center w-full lg:w-[50%]">
                    <h1 className="text-3xl md:text-5xl font-extrabold mb-8 md:mb-10">FREE BMI</h1>
                    <p className="text-base md:text-xl text-[rgb(101,101,101)] mb-8 md:mb-10">
                        Our BMI Calculator: Quickly assess your body composition by entering your height and weight. Find out if your weight falls within a healthy range for your height.
                    </p>

                    <form onSubmit={handleBmiSubmit} className="w-full max-w-[500px]">
                        <input value={height} onChange={(e) => setheight(e.target.value)} type="number" placeholder="Height / cm" className="w-[48%] h-[60px] mb-5 text-lg text-black border border-gray-300 mr-[4%]" style={{ padding: '10px' }} />
                        <input value={weight} onChange={(e) => setweight(e.target.value)} type="number" placeholder="Weight / kg" className="w-[48%] h-[60px] mb-5 text-lg text-black border border-gray-300" style={{ padding: '10px' }} />
                        <input value={age} onChange={(e) => setage(e.target.value)} type="text" placeholder="Age" className="w-[48%] h-[60px] mb-5 px-[10px] text-lg text-black border border-gray-300 mr-[4%]" style={{ padding: '10px' }} />
                        <select value={gender} onChange={(e) => setgender(e.target.value)} className="w-[48%] h-[55px] text-lg text-black border border-gray-300" required>
                            <option value="" disabled hidden>Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        <select value={activityLevel} onChange={(e) => setactivityLevel(e.target.value)} className="w-full h-[55px] text-lg text-black border border-gray-300 mt-5" required>
                            <option value="" disabled hidden>Activity Level</option>
                            <option value="Little or No Exercise">Little or No Exercise</option>
                            <option value="Light Exercise">Light Exercise</option>
                            <option value="Moderate Exercise">Moderate Exercise</option>
                            <option value="Heavy Exercise">Heavy Exercise</option>
                        </select>
                        <br /><br /><br />
                        <div className="ani-btn relative" style={{ height: '44px' }}>
                            <hr className="tophr" style={{ border: '1.5px solid black', backgroundColor: 'black' }} />
                            <hr id="righthr" style={{ border: '1.5px solid black', backgroundColor: 'black' }} />
                            <button type="submit" className="w-[300px] h-[60px] bg-black text-white font-bold text-base cursor-pointer transition-all duration-200 hover:translate-x-[3px] hover:translate-y-[3px] border-none">
                                Calculate
                            </button>
                            <hr id="lefthr" style={{ border: '1.5px solid black', backgroundColor: 'black' }} />
                            <hr id="bottomhr" style={{ border: '1.5px solid black', backgroundColor: 'black' }} />
                        </div>
                    </form>

                    {showBmiResult && bmiResult && (
                        <div className="w-full max-w-[800px] bg-[rgb(18,18,18)] mt-12 md:mt-20 text-white flex flex-col sm:flex-row justify-around items-start sm:items-center px-5 py-6 gap-4">
                            <div className="flex items-center gap-3">
                                <img width="50" src="/images/bmilx2.png" alt="" />
                                <h3 className="text-xl md:text-2xl">{bmiResult.bmiLabel}</h3>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-sm md:text-base">Your BMI is: {bmiResult.calcBMI} kg/m²</p>
                                <p className="text-sm md:text-base">Your BMR is: {bmiResult.bmr} Kcal/day.</p>
                                <p className="text-sm md:text-base">Maintainance Cal ({bmiResult.activityLevel}): {bmiResult.maintCal}</p>
                            </div>
                            <h3 className="text-2xl cursor-pointer self-start sm:self-auto" onClick={() => setshowBmiResult(false)}>x</h3>
                        </div>
                    )}
                </div>

                {/* Membership */}
                <div className="w-full lg:w-[30%]">
                    <h2
                        className="text-2xl md:text-3xl font-extrabold mb-8 md:mb-10 bg-[rgb(236,236,236)] flex justify-between gap-4 transition-all cursor-pointer px-5 py-5 w-full max-w-[400px]"
                        onClick={() => setmembershipOpen(!membershipOpen)}
                    >
                        MEMBERSHIP
                        {membershipOpen ? (
                            <svg width="40" height="40" viewBox="0 0 52 11" fill="black" stroke="black" strokeWidth="1">
                                <rect x="1" y="1" width="30" height="8"></rect>
                            </svg>
                        ) : (
                            <img src="/images/add-symbol-svgrepo-com.svg" alt="" width="28" />
                        )}
                    </h2>
                    <ul
                        className="membership-ul list-none flex flex-col gap-6 md:gap-8 px-5"
                        style={{ maxHeight: membershipOpen ? `${memberships.length * 50}px` : '1px' }}
                    >
                        {memberships.map((item, i) => (
                            <li key={i} className="text-base md:text-lg font-extrabold">{item}</li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Program Cards */}
            <div className="flex flex-col md:flex-row bg-red-600 min-h-[400px] md:h-[400px] justify-center">
                {programCards.map((card, i) => (
                    <div key={i} className="hoverCard flex flex-col items-center justify-center w-full h-[400px] md:h-full text-white gap-6 md:gap-10 overflow-hidden relative">
                        <img src={card.img} alt="" className="absolute w-full h-full object-cover transition-all duration-500 hover:scale-[1.05]" style={{ filter: 'brightness(0.5)' }} />
                        <div className="h2Container">
                            <hr />
                            <h2 className="text-2xl md:text-[34px] font-extrabold relative z-10 w-[280px] md:w-[350px]">{card.title}</h2>
                        </div>
                        <p className="w-[85%] md:w-[450px] text-base md:text-lg z-10 text-center relative">{card.desc}</p>
                        <div className="ani-btn relative z-10" style={{ height: '44px' }}>
                            <hr className="tophr" style={{ border: '1.5px solid white', backgroundColor: 'white' }} />
                            <hr id="righthr" style={{ border: '1.5px solid white', backgroundColor: 'white' }} />
                            <Link to="/contact">
                                <button className="w-[300px] h-[60px] bg-white text-black font-normal text-base cursor-pointer transition-all duration-200 hover:bg-black hover:text-white hover:translate-x-[3px] hover:translate-y-[3px] border-none">CONTACT US</button>
                            </Link>
                            <hr id="lefthr" style={{ border: '1.5px solid white', backgroundColor: 'white' }} />
                            <hr id="bottomhr" style={{ border: '1.5px solid white', backgroundColor: 'white' }} />
                        </div>
                    </div>
                ))}
            </div>

            {/* Feature Cards Row */}
            <div className="flex flex-col md:flex-row w-full mt-[60px] md:mt-[100px]">
                {featureCards.map((card, i) => (
                    <div key={i} className={`flex flex-col items-center justify-center w-full h-[420px] md:h-[500px] text-white gap-6 md:gap-10 overflow-hidden relative text-center ${i === 1 ? 'hoverCardWhite' : 'hoverCard'}`}>
                        <img src={card.img} alt="" className="firstIMG absolute w-full h-full object-cover transition-all duration-500 hover:scale-[1.1]"
                            style={{ filter: card.dark ? 'brightness(0.5)' : 'contrast(0.4) opacity(1)' }} />
                        {i === 1 && <div className="absolute inset-0 bg-[rgba(194,188,188,0.26)] z-[1]"></div>}
                        <div className="svgBox w-full h-[60px] relative flex justify-center z-20">
                            <img src={card.icon} alt="" style={{ width: '80px', height: '80px', position: 'relative', opacity: 1, filter: 'none' }} />
                        </div>
                        <div className="h2Container z-10">
                            <hr />
                            <h2 className={`text-2xl md:text-[34px] font-extrabold relative z-10 w-[280px] md:w-[350px] ${i === 1 ? 'text-black' : ''}`}>{card.title}</h2>
                        </div>
                        <p className={`w-[85%] md:w-[420px] text-base md:text-lg relative z-10 ${i === 1 ? 'text-black' : ''}`}>{card.desc}</p>
                        <div className="ani-btn relative z-10" style={{ height: '44px' }}>
                            <hr className="tophr" style={{ border: `1.5px solid ${i === 1 ? 'black' : 'white'}`, backgroundColor: i === 1 ? 'black' : 'white' }} />
                            <hr id="righthr" style={{ border: `1.5px solid ${i === 1 ? 'black' : 'white'}`, backgroundColor: i === 1 ? 'black' : 'white' }} />
                            <Link to="/contact">
                                <button className={`w-[300px] h-[60px] border-none font-bold text-base cursor-pointer transition-all duration-200 hover:translate-x-[3px] hover:translate-y-[3px] ${i === 1 ? 'bg-black text-white hover:bg-white hover:text-black' : 'bg-white text-black hover:bg-black hover:text-white'}`}>CONTACT US</button>
                            </Link>
                            <hr id="lefthr" style={{ border: `1.5px solid ${i === 1 ? 'black' : 'white'}`, backgroundColor: i === 1 ? 'black' : 'white' }} />
                            <hr id="bottomhr" style={{ border: `1.5px solid ${i === 1 ? 'black' : 'white'}`, backgroundColor: i === 1 ? 'black' : 'white' }} />
                        </div>
                    </div>
                ))}
            </div>

            {/* Group Workouts */}
            <div className="flex justify-center flex-col items-center gap-5">
                <h1 className="text-3xl md:text-5xl font-extrabold mt-12 md:mt-20 mb-8 md:mb-20">Group workouts</h1>
                {groupWorkoutRows.map((row, ri) => (
                    <div key={ri} className="flex flex-col sm:flex-row w-full min-h-[250px] sm:h-[350px]">
                        {row.map((card, ci) => (
                            <div key={ci} className={`flex flex-col items-center justify-center w-full sm:w-1/3 h-[250px] sm:h-full text-white gap-6 md:gap-10 overflow-hidden relative text-center ${ci === 1 ? 'hoverCardWhite' : 'hoverCard'}`}>
                                <img src={card.img} alt="" className="absolute w-full h-full object-cover transition-all duration-500 hover:scale-[1.1]"
                                    style={{ filter: card.dark ? 'brightness(0.5)' : 'contrast(0.4) opacity(1)' }} />
                                {!card.dark && <div className="absolute inset-0 bg-[rgba(194,188,188,0.26)] z-[1]"></div>}
                                <div className="svgBox w-full h-[60px] relative flex justify-center z-20">
                                    <img src={card.icon} alt="" style={{ width: '60px', height: '60px', position: 'relative', opacity: 1, filter: 'none' }} />
                                </div>
                                <div className="h2Container z-10">
                                    <hr />
                                    <h2 className={`text-2xl md:text-[34px] relative z-10 w-[280px] md:w-[350px] font-extrabold ${!card.dark ? 'text-black' : 'text-white'}`}>{card.title}</h2>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            {/* Reviews */}
            <div className="w-full px-6 md:px-[100px] lg:px-[150px] my-16 md:my-[100px] flex flex-col gap-8">
                <h1 className="text-3xl md:text-5xl font-extrabold">REVIEWS FROM YOU</h1>
                <div className="flex w-full overflow-x-scroll gap-[60px] md:gap-[300px]" style={{ scrollbarWidth: 'none' }}>
                    {reviews.map((review, i) => (
                        <div key={i} className="flex flex-col gap-[10px] m-2 shrink-0">
                            <p className="italic text-gray-500 text-base md:text-lg" style={{ width: 'min(800px, 80vw)' }}>{review.text}</p>
                            <h3 className="text-xl md:text-2xl">{review.name}</h3>
                        </div>
                    ))}
                </div>
                <div className="w-full flex justify-center md:justify-start mt-12 md:mt-[100px] md:ml-[120px]">
                    <div className="ani-btn relative" style={{ height: '44px' }}>
                        <hr className="tophr" style={{ border: '1.5px solid black', backgroundColor: 'black' }} />
                        <hr id="righthr" style={{ border: '1.5px solid black', backgroundColor: 'black' }} />
                        <Link to="/contact">
                            <button className="w-[300px] h-[60px] bg-black text-white font-bold cursor-pointer transition-all duration-200 hover:translate-x-[3px] hover:translate-y-[3px] border-none">CONTACT US</button>
                        </Link>
                        <hr id="lefthr" style={{ border: '1.5px solid black', backgroundColor: 'black' }} />
                        <hr id="bottomhr" style={{ border: '1.5px solid black', backgroundColor: 'black' }} />
                    </div>
                </div>
            </div>

            {/* Ask Anything Form */}
            <div className="w-[90%] md:w-[80%] mx-auto flex flex-col gap-8 pb-16">
                <h1 className="text-3xl md:text-5xl font-extrabold">FEEL FREE TO ASK ANYTHING</h1>
                <form className="flex flex-col w-full gap-5">
                    <div className="flex flex-col sm:flex-row gap-5">
                        <input type="text" placeholder="Your Full Name" className="w-full sm:w-1/2 h-[40px] px-3 text-base border border-gray-300" />
                        <input type="text" placeholder="Contact Number" className="w-full sm:w-1/2 h-[40px] px-3 text-base border border-gray-300" />
                    </div>
                    <input type="text" placeholder="Subject" className="h-[40px] px-3 text-base border border-gray-300" />
                    <textarea placeholder="Message" className="px-3 max-w-full text-base border border-gray-300" style={{ height: '200px', padding: '12px' }}></textarea>
                    <div className="w-full flex justify-end">
                        <Link to="/contact">
                            <button className="w-[200px] h-[50px] bg-black text-white border-none cursor-pointer text-base my-8 hover:bg-gray-800 transition-colors">SEND US A MESSAGE</button>
                        </Link>
                    </div>
                </form>
            </div>

            {/* Instagram Videos Section */}
            <div className="px-[5%] text-white bg-black h-fit flex flex-col items-center pt-12 pb-12">
                <p className="text-white font-bold tracking-widest">FOLLOW US ON INSTAGRAM</p>

                <div className="w-full h-[60px] my-10 relative">
                    <a href="https://www.instagram.com/evolvefitnessandwellnessclub/" className="text-white z-20 h-full flex items-center gap-3 group">
                        <img src="/images/evolve.png" alt="" width="100px" className="absolute transition-all duration-300 group-hover:opacity-30" />
                        <svg width="20" className="relative z-10 hidden group-hover:block" style={{ top: '25px', left: '40px', transition: 'all 1s' }} viewBox="0 0 448 512" fill="currentColor">
                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                        </svg>
                    </a>
                </div>

                {/* Instagram grid — responsive */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 w-full mt-8">
                    {[...Array(8)].map((_, i) => (
                        <div key={i} className="aspect-square bg-red-600 text-white relative overflow-hidden">
                            <a href="#">
                                <img src={videoThumb} alt="" className="w-full h-full object-cover absolute" style={{ filter: 'brightness(0.7)' }} />
                                <svg className="absolute z-10 w-8 md:w-12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ color: 'rgba(255,255,255,1)' }} viewBox="0 0 448 512">
                                    <path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" />
                                </svg>
                            </a>
                        </div>
                    ))}
                </div>

                <div className="w-full flex justify-center gap-4 mt-6">
                    <button className="h-10 px-4 text-sm bg-gray-500 text-white border-none rounded cursor-pointer transition-all hover:bg-gray-700">Load More</button>
                    <button className="h-10 px-4 text-sm bg-[#359dff] text-white border-none rounded cursor-pointer flex items-center gap-1 hover:bg-[#0272db] transition-all">
                        <svg width="14" viewBox="0 0 448 512" fill="currentColor">
                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                        </svg>
                        Follow On Instagram
                    </button>
                </div>
            </div>

            {/* Gym Walkthrough */}
            <div className="mt-[50px] relative h-[300px] md:h-[600px]">
                <a href="https://www.youtube.com/watch?v=Lz4lfyDeyww&feature=youtu.be">
                    <img src="https://evolvefitnesspune.in/wp-content/uploads/2023/08/PHOTO-2023-04-03-21-40-31_1.webp" alt=""
                        className="w-full h-full object-cover absolute" style={{ filter: 'brightness(0.5)' }} />
                    <svg className="absolute z-10 w-12 md:w-[60px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ color: 'rgba(255,255,255,1)' }} viewBox="0 0 448 512">
                        <path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" />
                    </svg>
                </a>
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

export default Home