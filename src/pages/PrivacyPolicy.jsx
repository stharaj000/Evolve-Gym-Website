import { useState, useEffect } from 'react'
import Footer from '../components/Footer'

const PrivacyPolicy = () => {

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
                    <h1 className="text-[52px] font-bold tracking-[3px] uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>Privacy Policy</h1>
                </div>
            </section>

            {/* Policy Content */}
            <section className="max-w-4xl mx-auto px-10 py-20 flex flex-col gap-6 pt-[500px]">
                <h2 className="text-3xl font-bold">1. Introduction</h2>
                <p className="text-gray-700 leading-relaxed">Welcome to Evolve Fitness and Wellness Club ("we," "our," "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website, https://evolvefitnesspune.in/ (the "Site"), and when you engage with our services.</p>

                <h2 className="text-3xl font-bold">2. Information We Collect</h2>
                <p className="text-gray-700 leading-relaxed">We may collect the following types of information:</p>
                <ul className="list-disc pl-8 flex flex-col gap-3 text-gray-700">
                    <li><strong>Personal Identification Information:</strong> Name, email address, phone number, postal address, date of birth, and other identifiers you provide when registering for our services or contacting us.</li>
                    <li><strong>Payment Information:</strong> Credit card details and billing information when you purchase our services.</li>
                    <li><strong>Technical Data:</strong> IP address, browser type, operating system, referring URLs, and pages viewed during your visit to our Site.</li>
                    <li><strong>Usage Data:</strong> Information about your interactions with our Site, such as access times and pages visited.</li>
                </ul>

                <h2 className="text-3xl font-bold">3. How We Use Your Information</h2>
                <p className="text-gray-700 leading-relaxed">We use the collected information for various purposes:</p>
                <ul className="list-disc pl-8 flex flex-col gap-3 text-gray-700">
                    <li><strong>To Provide and Manage Our Services:</strong> Including processing transactions, managing memberships, and providing customer support.</li>
                    <li><strong>To Communicate with You:</strong> Sending updates, newsletters, promotional materials, and other information related to our services.</li>
                    <li><strong>To Improve Our Site and Services:</strong> Analyzing usage patterns to enhance user experience and optimize our offerings.</li>
                    <li><strong>To Ensure Security:</strong> Monitoring and protecting against fraudulent or unauthorized activities.</li>
                </ul>

                <h2 className="text-3xl font-bold">4. Sharing Your Information</h2>
                <p className="text-gray-700 leading-relaxed">We do not sell or rent your personal information to third parties. However, we may share your information in the following circumstances:</p>
                <ul className="list-disc pl-8 flex flex-col gap-3 text-gray-700">
                    <li><strong>With Service Providers:</strong> Third-party vendors who assist in operating our Site, conducting our business, or servicing you, provided they agree to keep your information confidential.</li>
                    <li><strong>For Legal Compliance:</strong> When required by law or to protect our rights, property, or safety, or that of others.</li>
                </ul>

                <h2 className="text-3xl font-bold">5. Cookies and Tracking Technologies</h2>
                <p className="text-gray-700 leading-relaxed">We use cookies and similar tracking technologies to enhance your experience on our Site. Cookies are small data files stored on your device that help us understand your preferences and improve site functionality. You can adjust your browser settings to refuse cookies, but this may limit your ability to use certain features of our Site.</p>

                <h2 className="text-3xl font-bold">6. Data Security</h2>
                <p className="text-gray-700 leading-relaxed">We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>

                <h2 className="text-3xl font-bold">7. Your Rights</h2>
                <p className="text-gray-700 leading-relaxed">Depending on your jurisdiction, you may have the following rights regarding your personal information:</p>
                <ul className="list-disc pl-8 flex flex-col gap-3 text-gray-700">
                    <li><strong>Access:</strong> Request a copy of the information we hold about you.</li>
                    <li><strong>Correction:</strong> Request correction of any inaccurate or incomplete data.</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal information, subject to legal obligations.</li>
                    <li><strong>Objection:</strong> Object to the processing of your data for certain purposes.</li>
                </ul>
                <p className="text-gray-700">To exercise these rights, please contact us using the information provided below.</p>

                <h2 className="text-3xl font-bold">8. Third-Party Links</h2>
                <p className="text-gray-700 leading-relaxed">Our Site may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies before providing any personal information.</p>

                <h2 className="text-3xl font-bold">9. Changes to This Privacy Policy</h2>
                <p className="text-gray-700 leading-relaxed">We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any significant changes by posting the new policy on this page with an updated effective date.</p>

                <h2 className="text-3xl font-bold">10. Contact Us</h2>
                <p className="text-gray-700">If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:</p>
                <ul className="list-none flex flex-col gap-3 text-gray-700">
                    <li><strong>Email:</strong> infoagilityfitness@gmail.com</li>
                    <li><strong>Phone:</strong> +91-8600511152, 8007083737, 8378899790</li>
                    <li><strong>E-Mail:</strong> evolvefitnessandwellness@gmail.com</li>
                    <li><strong>Gym Address:</strong> Level – 6, One Place – Wanowrie, Salunke Vihar Road, Pune-411040</li>
                    <li><strong>Registered Address:</strong> Opposite Meera Society, Gulab Bungalow, Mahatma Phule Colony, Shankar Seth Road, 322/15, Pune-411042</li>
                </ul>
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

export default PrivacyPolicy
