import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const RefundPolicy: React.FC = () => {
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
                        Refund Policy – InvokeIt
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
                            This Refund Policy describes the terms under which InvokeIt ("we", "our", "us") processes refunds for courses and training programs offered through online and offline modes.
                        </p>
                        <p className="font-semibold">
                            By enrolling in any course and making payment to InvokeIt, you agree to this Refund Policy and our Terms & Conditions.
                        </p>
                    </div>

                    {/* Section 1: General Policy */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-black mb-4">1. General Policy</h2>
                        <p>
                            InvokeIt provides educational and training services. Due to the nature of digital learning, mentorship access, and limited batch seats, course fees are generally non-refundable except as specifically mentioned below.
                        </p>
                    </section>

                    {/* Section 2: Eligibility for Refund */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-black mb-4">2. Eligibility for Refund</h2>
                        <p className="mb-4">A refund request will be considered only if all the following conditions are satisfied:</p>
                        <ul className="list-disc list-inside space-y-1 ml-4 mb-4">
                            <li>The request is made within 3 calendar days from the date of the first class, AND</li>
                            <li>The student has attended no more than two (2) sessions, AND</li>
                            <li>The request is sent from the registered email ID to our official support email.</li>
                        </ul>
                        <p className="font-semibold">
                            Refund requests made after this period will not be eligible.
                        </p>
                    </section>

                    {/* Section 3: Non-Refundable Situations */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-black mb-4">3. Non-Refundable Situations</h2>
                        <p className="mb-4">Refunds will not be granted under the following circumstances:</p>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                            <li>Change of mind after enrollment</li>
                            <li>Not understanding the course</li>
                            <li>Schedule conflicts or personal commitments</li>
                            <li>Lack of time to attend classes</li>
                            <li>Absence from classes</li>
                            <li>Dissatisfaction after attending multiple sessions</li>
                            <li>Failure to complete assignments or projects</li>
                            <li>Missing recordings (if provided)</li>
                            <li>Job or placement expectations not met</li>
                            <li>Internet, device, or technical issues on student's side</li>
                            <li>Disciplinary removal due to misconduct</li>
                            <li>Violation of Terms & Conditions</li>
                        </ul>
                    </section>

                    {/* Section 4: Recorded Materials & Study Resources */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-black mb-4">4. Recorded Materials & Study Resources</h2>
                        <p>
                            If course materials, assignments, recordings, or any learning resources have been shared or accessed, InvokeIt reserves the right to deny a refund request.
                        </p>
                    </section>

                    {/* Section 5: Placement Assistance */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-black mb-4">5. Placement Assistance</h2>
                        <p className="mb-4">
                            InvokeIt may provide interview preparation, guidance, and referrals.
                        </p>
                        <p className="font-semibold">
                            However, placement, interview calls, company selection, or salary outcomes are not guaranteed and will not be considered valid reasons for a refund.
                        </p>
                    </section>

                    {/* Section 6: Batch Transfers */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-black mb-4">6. Batch Transfers</h2>
                        <p className="mb-2">
                            Batch change requests may be allowed once (subject to seat availability and management approval).
                        </p>
                        <p className="font-semibold">
                            Batch transfer is not a refund and fees remain non-refundable.
                        </p>
                    </section>

                    {/* Section 7: Refund Processing */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-black mb-4">7. Refund Processing</h2>
                        <p className="mb-2">If a refund is approved:</p>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                            <li>Refund will be processed within 7–10 working days</li>
                            <li>Refund will be credited to the original payment method</li>
                            <li>Payment gateway charges, bank charges, or taxes (if applicable) may be deducted</li>
                        </ul>
                    </section>

                    {/* Section 8: Cancellation by InvokeIt */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-black mb-4">8. Cancellation by InvokeIt</h2>
                        <p className="mb-2">If InvokeIt cancels a course or batch before it starts, students will be offered either:</p>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                            <li>A full refund, OR</li>
                            <li>Transfer to a future batch</li>
                        </ul>
                    </section>

                    {/* Section 9: How to Request a Refund */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-black mb-4">9. How to Request a Refund</h2>
                        <p className="mb-4">To request a refund, email us with:</p>
                        <ul className="list-disc list-inside space-y-1 ml-4 mb-4">
                            <li>Full Name</li>
                            <li>Registered Email ID</li>
                            <li>Phone Number</li>
                            <li>Course Name</li>
                            <li>Reason for request</li>
                            <li>Payment receipt / transaction ID</li>
                        </ul>
                        <p>
                            Send to: <a href="mailto:support@invokeit.in" className="text-blue-600 underline">support@invokeit.in</a>
                        </p>
                    </section>

                    {/* Section 10: Contact */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-black mb-4">10. Contact</h2>
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

export default RefundPolicy;
