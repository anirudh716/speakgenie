export function WhyMindery() {
    const features = [
        {
            id: 1,
            tag: "Story Meditations",
            title: "Guided Adventures",
            description:
                "Short, age-wise journeys that help kids calm their bodies and name their feelings.",
            tagColor: "bg-green-100 text-green-700",
        },
        {
            id: 2,
            tag: "Anytime Calm",
            title: "Tools for Big Feelings",
            description:
                "Quick “reset” audios for anger, worry, pre-exam jitters, and bedtime battles.",
            tagColor: "bg-blue-100 text-blue-700",
        },
        {
            id: 3,
            tag: "Parent Hub",
            title: "Guides & Routines",
            description:
                "Weekly tips, printable charts, and simple routines you can use at home or school.",
            tagColor: "bg-emerald-100 text-emerald-700",
        },
    ];

    return (
        <section id="why" className="w-full px-4 sm:px-8 py-12 sm:py-16 bg-white">
            {/* Section Header */}
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 sm:mb-4">
                    Why Mindery Kids?
                </h2>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    Children learn best through play and stories. Our sessions blend gentle
                    breathing, guided imagery, and music to make mindfulness enjoyable and
                    effective.
                </p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto px-0">
                {features.map((item) => (
                    <div
                        key={item.id}
                        className="flex flex-col items-start p-4 sm:p-6 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition bg-white"
                    >
                        <span
                            className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-2 sm:mb-3 ${item.tagColor}`}
                        >
                            {item.tag}
                        </span>
                        <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">
                            {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
