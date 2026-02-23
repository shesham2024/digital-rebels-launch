import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="min-h-screen bg-white">
            <div className="container mx-auto px-4 py-8 max-w-4xl">
                {/* Back Navigation */}
                <div className="mb-8">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-black hover:text-gray-700 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                </div>

                {/* Header */}
                <header className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-black mb-4">
                        Privacy Policy – InvokeIt
                    </h1>
                    {/* <p className="text-lg text-black">
                        <strong>Effective Date:</strong> [Add Launch Date]
                    </p> */}
                </header>

                {/* Content */}
                <div className="space-y-8 text-black">
                    {/* Introduction */}
                    <div className="mb-8">
                        <p className="mb-4 leading-relaxed">
                            This Privacy Policy ("Policy") explains how InvokeIt ("we", "our", "us", "Platform") collects, uses, stores, and protects information of users who access our website, enroll in courses, attend live classes, or use any services offered by us (collectively referred to as "Learners", "You", "Your").
                        </p>
                        <p className="mb-4 leading-relaxed">
                            By accessing our Platform, registering for a course, submitting your information, or clicking "I Agree", you consent to the collection and use of information as described in this Policy and our Terms & Conditions.
                        </p>
                        <p className="font-semibold">
                            If you do not agree with this Policy, you must not use our Platform.
                        </p>
                    </div>

                    {/* Section 1: Personal Information */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-black mb-4">1. Personal Information</h2>
                        <p className="mb-4">Personal Information means any information that identifies you, including:</p>
                        <ul className="list-disc list-inside space-y-1 ml-4 mb-6">
                            <li>Full Name</li>
                            <li>Email Address</li>
                            <li>Mobile Number</li>
                            <li>City/Country</li>
                            <li>Profile Photo (optional)</li>
                            <li>Educational or professional details (if submitted)</li>
                        </ul>

                        <p className="font-semibold mb-2">Sensitive Personal Information includes:</p>
                        <ul className="list-disc list-inside space-y-1 ml-4 mb-4">
                            <li>Account passwords</li>
                            <li>Payment transaction details</li>
                            <li>Any data classified as sensitive under the Information Technology Act, 2000 and applicable Indian data protection rules</li>
                        </ul>

                        <p className="font-semibold">
                            InvokeIt does NOT store your debit/credit card details. All payments are processed via secure third-party payment gateways (Razorpay/Stripe/UPI providers).
                        </p>
                    </section>

                    {/* Section 2: Information We Collect */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-black mb-4">2. Information We Collect</h2>
                        <p className="mb-4">We collect information in the following ways:</p>

                        <div className="mb-6">
                            <h3 className="text-lg font-semibold mb-2">a) Information You Provide</h3>
                            <p className="mb-2">When you:</p>
                            <ul className="list-disc list-inside space-y-1 ml-4">
                                <li>Register on our website</li>
                                <li>Enroll in a course</li>
                                <li>Contact support</li>
                                <li>Attend live classes</li>
                                <li>Submit assignments/projects</li>
                            </ul>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-lg font-semibold mb-2">b) Automatically Collected Information</h3>
                            <p className="mb-2">When you use our Platform, we may automatically collect:</p>
                            <ul className="list-disc list-inside space-y-1 ml-4">
                                <li>IP address</li>
                                <li>Device type</li>
                                <li>Browser information</li>
                                <li>Login activity</li>
                                <li>Course progress</li>
                                <li>Usage analytics</li>
                            </ul>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-lg font-semibold mb-2">c) Cookies</h3>
                            <p className="mb-2">We use cookies to:</p>
                            <ul className="list-disc list-inside space-y-1 ml-4 mb-2">
                                <li>Keep you logged in</li>
                                <li>Improve course experience</li>
                                <li>Understand user behavior</li>
                            </ul>
                            <p>You can disable cookies in your browser, but some features may not work properly.</p>
                        </div>
                    </section>

                    {/* Section 3: How We Use Your Information */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-black mb-4">3. How We Use Your Information</h2>
                        <p className="mb-2">We use your information to:</p>
                        <ul className="list-disc list-inside space-y-1 ml-4 mb-4">
                            <li>Create and manage your student account</li>
                            <li>Provide course access and live classes</li>
                            <li>Send class reminders and updates</li>
                            <li>Evaluate assignments and projects</li>
                            <li>Issue course certificates</li>
                            <li>Provide mentorship and support</li>
                            <li>Improve course quality and platform performance</li>
                            <li>Prevent fraud and misuse</li>
                            <li>Comply with legal obligations</li>
                        </ul>
                        <p>We may send course-related announcements and educational updates. You can unsubscribe from marketing emails anytime.</p>
                    </section>

                    {/* Section 4: Sharing of Information */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-black mb-4">4. Sharing of Information</h2>
                        <p className="font-semibold mb-4">We do not sell or rent your personal data.</p>
                        <p className="mb-2">We may share your data only with trusted third parties required to operate our services:</p>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                            <li>Payment gateway providers</li>
                            <li>Video meeting platforms (Zoom/Google Meet)</li>
                            <li>Cloud hosting providers (AWS/Firebase)</li>
                            <li>Email and notification providers</li>
                            <li>Legal authorities when required by law</li>
                        </ul>
                    </section>

                    {/* Section 5: Student Content */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-black mb-4">5. Student Content</h2>
                        <p className="mb-4">
                            Assignments, code submissions, projects, interview recordings, and feedback shared by learners may be stored for academic purposes.
                        </p>
                        <p className="font-semibold">
                            We will never publicly showcase your project or profile without your permission.
                        </p>
                    </section>

                    {/* Section 6: Your Rights */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-black mb-4">6. Your Rights</h2>
                        <p className="mb-2">You may:</p>
                        <ul className="list-disc list-inside space-y-1 ml-4 mb-4">
                            <li>Access your data</li>
                            <li>Correct inaccurate data</li>
                            <li>Request deletion of your account</li>
                            <li>Opt out of promotional emails</li>
                        </ul>
                        <p className="mb-4">
                            <strong>Note:</strong> Deleting your account may permanently remove your course access and certificates.
                        </p>
                        <p>
                            To request any action, contact: <a href="mailto:support@invokeit.in" className="text-blue-600 underline">support@invokeit.in</a>
                        </p>
                    </section>

                    {/* Section 7: Protection of Your Information */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-black mb-4">7. Protection of Your Information</h2>
                        <p className="mb-2">We implement reasonable security practices including:</p>
                        <ul className="list-disc list-inside space-y-1 ml-4 mb-4">
                            <li>Secure cloud servers</li>
                            <li>Access restrictions</li>
                            <li>Encrypted communication</li>
                        </ul>
                        <p>However, no internet system is 100% secure, and we cannot guarantee absolute security.</p>
                    </section>

                    {/* Section 8: Third-Party Links */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-black mb-4">8. Third-Party Links</h2>
                        <p className="mb-2">Our website may contain links to third-party websites.</p>
                        <p>We are not responsible for their privacy practices or content.</p>
                    </section>

                    {/* Section 9: Data Storage & Retention */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-black mb-4">9. Data Storage & Retention</h2>
                        <p className="mb-2">We retain your information:</p>
                        <ul className="list-disc list-inside space-y-1 ml-4 mb-4">
                            <li>While your account remains active</li>
                            <li>For certificate verification</li>
                            <li>For legal and accounting compliance</li>
                        </ul>
                        <p>Even after account deletion, certain minimal records (like invoices) may be retained as required by law.</p>
                    </section>

                    {/* Section 10: Cross-Border Data Transfer */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-black mb-4">10. Cross-Border Data Transfer</h2>
                        <p className="mb-4">
                            Your data may be stored on servers located in India or other countries through our cloud service providers.
                        </p>
                        <p>By using our Platform, you consent to such storage and processing.</p>
                    </section>

                    {/* Section 11: Changes to this Policy */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-black mb-4">11. Changes to this Policy</h2>
                        <p className="mb-2">We may update this Policy from time to time.</p>
                        <p>Updated versions will be posted on this page with a revised effective date.</p>
                    </section>

                    {/* Section 12: Contact / Grievance Officer */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-black mb-4">12. Contact / Grievance Officer</h2>
                        <p className="mb-4">If you have questions, concerns, or requests regarding your data:</p>

                        <div className="mb-4">
                            <p className="font-semibold text-lg mb-2">InvokeIt Support Team</p>
                            <p className="mb-2">
                                Email: <a href="mailto:support@invokeit.in" className="text-blue-600 underline">support@invokeit.in</a>
                            </p>
                            <p>
                                Website: <a href="https://www.invokeit.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">www.invokeit.in</a>
                            </p>
                        </div>
                    </section>

                    {/* Back to Home */}
                    <div className="text-center pt-8">
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-medium hover:bg-gray-800 transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
