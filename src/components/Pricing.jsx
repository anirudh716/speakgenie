export function Pricing() {
    const pricingPlans = [
        {
            plan: 'Starter',
            description: 'Perfect for new explorers',
            price: 'Free',
            features: ['5 guided meditations', '2 sleep stories', 'Parent starter kit'],
            buttonText: 'Get Started',
            isFeatured: false,
        },
        {
            plan: 'Premium',
            description: 'Unlock full potential',
            price: '₹299/mo',
            features: ['Unlimited meditations', 'Sleep stories & calming music', 'Printable guides for parents'],
            buttonText: 'Upgrade Now',
            isFeatured: true,
        },
        {
            plan: 'Family',
            description: 'For multiple kids',
            price: '₹499/mo',
            features: ['4 child profiles', 'Rewards & streaks', 'Classroom meditation pack'],
            buttonText: 'Get Family Plan',
            isFeatured: false,
        },
    ];

    const hubLinks = [
        {
            icon: '⬇️',
            text: 'Download Starter Kit (PDF)',
            color: 'blue'
        },
        {
            icon: '🗓️',
            text: '7-Day Calm Plan',
            color: 'purple'
        },
        {
            icon: '🏫',
            text: 'Classroom Pack',
            color: 'orange'
        }
    ]
    return (
        <div id="pricing" className="mb-12 w-full flex flex-col items-center justify-center px-4 sm:px-8">
            <div className="w-full max-w-6xl flex flex-col">

                {/* Choose Your Plan Section */}
                <section className="mb-16 sm:mb-24 bg-purple-50 rounded-2xl p-6">
                    <div className="text-center mb-10">
                        <h1 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight">
                            Choose Your Plan
                        </h1>
                        <p className="mt-2 text-lg text-gray-500">
                            Start free, cancel anytime. No hidden charges.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {pricingPlans.map((plan, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-8 flex flex-col shadow-lg"
                            >
                                <h2 className="text-xl font-bold text-gray-900">{plan.plan}</h2>
                                <p className="text-gray-500 mt-1 flex-grow">{plan.description}</p>

                                <div className="my-8">
                                    <span className="text-4xl font-extrabold text-purple-600">{plan.price}</span>
                                </div>

                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <span role="img" aria-label="Checkmark">✅</span>
                                            <span className="text-gray-600">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button className="mt-auto w-full bg-purple-600 text-white font-semibold py-3 px-6 rounded-xl hover:bg-purple-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                                    {plan.buttonText}
                                </button>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Parent & Teacher Hub Section */}
                <section className="bg-purple-50 rounded-2xl shadow-lg p-6 sm:p-10">
                    <div className="text-center">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                            Parent & Teacher Hub
                        </h2>
                        <p className="mt-2 text-lg text-gray-500 max-w-2xl mx-auto">
                            Practical guides, printable routines, and progress insights so you can support mindfulness at home and school.
                        </p>

                        <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4">
                            {hubLinks.map((link, index) => (
                                <button key={index} className="border border-gray-200 flex items-center gap-3 bg-gray-100 hover:bg-gray-200 text-purple-700 font-bold py-3 px-5 rounded-xl transition-colors duration-200">
                                    <span role="img" aria-label="icon">{link.icon}</span>
                                    <span>{link.text}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}
