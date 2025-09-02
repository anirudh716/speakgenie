const features = [
    {
        title: "Ad-Free & Safe",
        description: "Child-first design with privacy controls and no external ads."
    },
    {
        title: "Rewards that Motivate",
        description: "Stars, badges, and gentle streaks encourage healthy habits—no pressure."
    },
    {
        title: "Offline Access",
        description: "Download favorite sessions for calm on the go."
    },
    {
        title: "Sleep Mode",
        description: "Fade-out music and dim visuals help kids drift off peacefully."
    },
    {
        title: "Classroom Friendly",
        description: "Teacher packs with 5-minute start-of-class resets and posters."
    },
    {
        title: "Multi-Child Profiles",
        description: "Personalized tracks for each child in the family."
    }
];

export function Built() {
    return (
        <section id="features" className="mb-12 w-full flex justify-center">
            <div className="w-full max-w-6xl px-4 flex flex-col gap-y-6">
                <h1 className="text-gray-900 font-extrabold text-3xl sm:text-4xl">Built for Kids, Loved by Parents</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {features.map((feature) => (
                        <div key={feature.title} className="border border-gray-200 rounded-lg px-4 py-6 bg-gray-50 flex flex-col gap-y-4">
                            <h4 className="text-gray-900 font-extrabold text-lg">{feature.title}</h4>
                            <p className="text-gray-700 font-bold text-sm">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}