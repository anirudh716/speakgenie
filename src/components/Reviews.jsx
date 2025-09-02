import { useState } from 'react';

const testimonials = [
    {
        quote: 'Bedtime is finally peaceful. My 6-year-old asks for the Star Boat story every night.',
        author: 'Priya, Mom of 6-year-old',
    },
    {
        quote: "The 5-minute 'reset' before homework has been a game changer for focus.",
        author: 'Ravi, Dad of 10-year-old',
    },
    {
        quote: 'Our class uses the breathing games after lunch. Kids come back calm and ready.',
        author: 'Anika, Grade 4 Teacher',
    },
];

const faqData = [
    {
        question: 'What ages is this for?',
        answer: 'Our programs are designed for children aged 4 to 12. We have different content tailored to various age groups within this range to ensure it is engaging and appropriate.',
    },
    {
        question: 'How long are the sessions?',
        answer: 'Most of our guided meditations and stories are between 3 to 10 minutes long, making them easy to fit into a busy schedule, like before bedtime or after school.',
    },
    {
        question: 'Is it safe and ad-free?',
        answer: 'Yes. We designed this for children. No external ads, clear privacy options, and parent controls.',
    },
    {
        question: 'Can schools use it?',
        answer: 'Absolutely! We have a special "Classroom Pack" and resources designed specifically for educators to use in a school setting to promote a calm and focused learning environment.',
    },
];

const AccordionItem = ({ faq, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-200 py-4">
            <button
                onClick={onClick}
                className="w-full flex justify-between items-center text-left text-lg font-medium text-gray-800 focus:outline-none"
            >
                <span>{faq.question}</span>
                <span className="transform transition-transform duration-300">
                    {isOpen ? '−' : '+'}
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}
            >
                <p className="text-gray-600">
                    {faq.answer}
                </p>
            </div>
        </div>
    );
};

export function Reviews() {
    const [openFaqIndex, setOpenFaqIndex] = useState(2);
    const handleFaqClick = (index) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    return (
        <div id="faq" className="min-h-screen bg-gray-50 text-gray-800 flex flex-col items-center justify-center p-4 sm:p-8">
            <div className="w-full max-w-5xl mx-auto space-y-20">

                {/* Reviews */}
                <section>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-12">
                        What Families Say
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col">
                                <div className="text-yellow-400 text-2xl mb-4">
                                    {'★★★★★'.split('').map((star, i) => <span key={i}>{star}</span>)}
                                </div>
                                <blockquote className="text-gray-700 italic flex-grow">
                                    "{testimonial.quote}"
                                </blockquote>
                                <cite className="mt-4 not-italic text-gray-500 font-medium">
                                    — {testimonial.author}
                                </cite>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQs */}
                <section>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-12">
                        Frequently Asked Questions
                    </h2>
                    <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                        {faqData.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                faq={faq}
                                isOpen={openFaqIndex === index}
                                onClick={() => handleFaqClick(index)}
                            />
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
}
