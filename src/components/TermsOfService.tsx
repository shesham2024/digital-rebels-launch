import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsOfService: React.FC = () => {
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
                        Terms and Conditions – InvokeIt
                    </h1>
                    {/* <p className="text-lg text-black">
                        <strong>Effective Date:</strong> [Add Date]
                    </p> */}
                </header>

                {/* Content */}
                <div className="space-y-8 text-black">
                    {/* Introduction */}
                    <div className="mb-8">
                        <p className="mb-4 leading-relaxed">
                            These Terms and Conditions ("Terms") govern your access to and use of the services provided by InvokeIt ("Company", "we", "our", "us", or "Platform"). By registering for a course, attending any class (online or offline), accessing our website, or making payment to InvokeIt, you ("Student", "Learner", "You") agree to be legally bound by these Terms and our Privacy Policy.
                        </p>
                        <p className="font-semibold">
                            If you do not agree with any part of these Terms, you must not enroll or continue to use our services.
                        </p>
                    </div>

                    {/* Section 1: Services Offered */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-black mb-4">1. Services Offered</h2>
                        <p className="mb-4">InvokeIt provides training and educational services including:</p>
                        <ul className="list-disc list-inside space-y-1 ml-4 mb-4">
                            <li>Instructor-led online live classes</li>
                            <li>Offline classroom training sessions</li>
                            <li>Doubt-clearing sessions and mentorship</li>
                            <li>Assignments and real-world projects</li>
                            <li>Career guidance and interview preparation</li>
                            <li>Future recorded course access (if introduced)</li>
                        </ul>
                        <p>
                            We reserve the right to modify course syllabus, trainer, schedule, duration, or delivery mode (online/offline) when required for operational or academic reasons.
                        </p>
                    </section>

                    {/* Section 2: Student Registration & Account Responsibility */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-black mb-4">2. Student Registration & Account Responsibility</h2>
                        <p className="mb-2">You agree that:</p>
                        <ul className="list-disc list-inside space-y-1 ml-4 mb-4">
                            <li>All information provided during registration is accurate</li>
                            <li>One enrollment is valid for one student only</li>
                            <li>Login credentials must not be shared</li>
                            <li>Impersonation or proxy attendance is prohibited</li>
                        </ul>
                        <p>
                            Sharing access, screen-sharing classes to outsiders, or allowing non-enrolled persons to attend classes may lead to immediate suspension without refund.
                        </p>
                    </section>

                    {/* Section 3: Payments & Fees */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-black mb-4">3. Payments & Fees</h2>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                            <li>Course fees must be paid in advance unless a written installment plan is approved.</li>
                            <li>Seat confirmation happens only after successful payment.</li>
                            <li>Taxes (GST if applicable) may be added.</li>
                            <li>Fees once paid are considered acceptance of these Terms.</li>
                            <li>InvokeIt reserves the right to change course fees for future batches.</li>
                        </ul>
                    </section>

                    {/* Section 4: Refund Policy */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-black mb-4">4. Refund Policy</h2>
                        <p className="font-semibold mb-4">Refunds are strictly limited.</p>

                        <div className="mb-4">
                            <p className="mb-2">A refund request is valid only if:</p>
                            <ul className="list-disc list-inside space-y-1 ml-4">
                                <li>Requested within 3 calendar days of the first class, AND</li>
                                <li>Student has attended not more than 2 sessions</li>
                            </ul>
                        </div>

                        <div className="mb-4">
                            <p className="mb-2 font-semibold">No refunds will be provided for:</p>
                            <ul className="list-disc list-inside space-y-1 ml-4">
                                <li>Change of mind</li>
                                <li>Schedule conflicts</li>
                                <li>Lack of time</li>
                                <li>Failure to complete assignments</li>
                                <li>Dissatisfaction after attending multiple classes</li>
                                <li>Absence from classes</li>
                                <li>Missed recordings</li>
                                <li>Course completion</li>
                            </ul>
                        </div>

                        <p className="mb-2">
                            After the refund window expires, the enrollment becomes non-refundable and non-transferable.
                        </p>
                        <p>
                            Approved refunds (if any) will be processed within 7–10 working days.
                        </p>
                    </section>

                    {/* Section 5: Attendance & Recordings */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-black mb-4">5. Attendance & Recordings</h2>
                        <ul className="list-disc list-inside space-y-1 ml-4 mb-4">
                            <li>Students are responsible for attending scheduled classes.</li>
                            <li>Recordings may or may not be provided.</li>
                            <li>Access to recordings (if provided) is temporary and may expire.</li>
                        </ul>

                        <div className="mb-4">
                            <p className="mb-2">InvokeIt is not responsible for missed classes due to:</p>
                            <ul className="list-disc list-inside space-y-1 ml-4">
                                <li>Internet failure</li>
                                <li>Power outage</li>
                                <li>Personal emergencies</li>
                                <li>Device issues</li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 6: Intellectual Property & Class Recording */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-black mb-4">6. Intellectual Property & Class Recording</h2>

                        <div className="mb-4">
                            <p className="mb-2">All training material is the exclusive property of InvokeIt, including:</p>
                            <ul className="list-disc list-inside space-y-1 ml-4">
                                <li>Lecture videos</li>
                                <li>PDFs</li>
                                <li>Code</li>
                                <li>Assignments</li>
                                <li>Projects</li>
                                <li>Notes</li>
                                <li>Presentations</li>
                            </ul>
                        </div>

                        <div className="mb-4">
                            <p className="mb-2 font-semibold">Students are strictly prohibited from:</p>
                            <ul className="list-disc list-inside space-y-1 ml-4">
                                <li>Recording classes</li>
                                <li>Uploading to YouTube/Telegram/Drive</li>
                                <li>Sharing materials</li>
                                <li>Selling course content</li>
                                <li>Screen recording</li>
                            </ul>
                        </div>

                        <div className="mb-4">
                            <p className="mb-2 font-semibold">Violation will result in:</p>
                            <ul className="list-disc list-inside space-y-1 ml-4">
                                <li>Permanent termination</li>
                                <li>Legal action under the Indian Copyright Act, 1957</li>
                                <li>Financial damages claim</li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 7: Code of Conduct */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-black mb-4">7. Code of Conduct</h2>
                        <p className="mb-4">Students must behave respectfully toward instructors and other learners.</p>

                        <div className="mb-4">
                            <p className="mb-2">The following actions may lead to removal without refund:</p>
                            <ul className="list-disc list-inside space-y-1 ml-4">
                                <li>Abusive language</li>
                                <li>Harassment</li>
                                <li>Disrupting sessions</li>
                                <li>Posting inappropriate content</li>
                                <li>Defamation of the institute or instructors</li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 8: Placement Assistance & Salary Disclaimer */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-black mb-4">8. Placement Assistance & Salary Disclaimer</h2>

                        <div className="mb-4">
                            <p className="mb-2">InvokeIt may provide:</p>
                            <ul className="list-disc list-inside space-y-1 ml-4">
                                <li>Resume building support</li>
                                <li>Mock interviews</li>
                                <li>Career mentorship</li>
                                <li>Job referrals</li>
                                <li>Interview opportunities</li>
                            </ul>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold mb-2">However:</p>
                            <p className="mb-4">
                                InvokeIt does NOT guarantee a job, placement, interview call, or specific salary package.
                            </p>
                            <p className="mb-4">
                                Any discussions regarding expected salary, job roles, or hiring companies are indicative guidance only and must not be treated as a promise or commitment.
                            </p>
                            <p className="mb-4">
                                Final hiring decisions are solely made by third-party companies based on their own selection process and candidate performance.
                            </p>
                        </div>

                        <div className="mb-4">
                            <p className="mb-2 font-semibold">InvokeIt shall not be held responsible for:</p>
                            <ul className="list-disc list-inside space-y-1 ml-4">
                                <li>Job rejection</li>
                                <li>Offer withdrawal</li>
                                <li>Salary offered by employer</li>
                                <li>Employment termination</li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 9: Certificates */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-black mb-4">9. Certificates</h2>

                        <div className="mb-4">
                            <p className="mb-2">Certificates are issued only if:</p>
                            <ul className="list-disc list-inside space-y-1 ml-4">
                                <li>Minimum attendance criteria is met</li>
                                <li>Assignments/projects are submitted</li>
                                <li>Course requirements are completed</li>
                            </ul>
                        </div>

                        <p>
                            Certificates indicate course completion only and are not a professional license or employment guarantee.
                        </p>
                    </section>

                    {/* Section 10: Future Recorded Courses */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-black mb-4">10. Future Recorded Courses</h2>
                        <p className="mb-2">InvokeIt may introduce recorded courses in the future.</p>
                        <p>
                            Access duration, availability, and pricing for such courses will be defined separately and may differ from live training programs.
                        </p>
                    </section>

                    {/* Section 11: Limitation of Liability */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-black mb-4">11. Limitation of Liability</h2>

                        <div className="mb-4">
                            <p className="mb-2">InvokeIt shall not be liable for:</p>
                            <ul className="list-disc list-inside space-y-1 ml-4">
                                <li>Technical issues</li>
                                <li>Internet disruptions</li>
                                <li>Personal equipment problems</li>
                                <li>Learning outcomes</li>
                                <li>Job or salary expectations</li>
                            </ul>
                        </div>

                        <p>
                            Our maximum liability, under any circumstances, shall not exceed the amount of course fees paid by the student.
                        </p>
                    </section>

                    {/* Section 12: Termination */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-black mb-4">12. Termination</h2>

                        <div className="mb-4">
                            <p className="mb-2">We may suspend or terminate a student's access without refund if:</p>
                            <ul className="list-disc list-inside space-y-1 ml-4">
                                <li>Terms are violated</li>
                                <li>Payment fraud occurs</li>
                                <li>Content piracy is detected</li>
                                <li>Misconduct happens</li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 13: Governing Law & Jurisdiction */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-black mb-4">13. Governing Law & Jurisdiction</h2>
                        <p className="mb-2">These Terms shall be governed by the laws of India.</p>
                        <p>Any dispute shall be subject to the jurisdiction of courts in Hyderabad, Telangana, India.</p>
                    </section>

                    {/* Section 14: Contact Information */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-black mb-4">14. Contact Information</h2>

                        <div className="mb-4">
                            <p className="font-semibold text-lg mb-2">InvokeIt</p>
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

export default TermsOfService;
