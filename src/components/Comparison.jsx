export function Comparison() {
    const comparisonData = [
        {
            feature: 'Child-Friendly Guided Meditations',
            minderyKids: 'Story-based, fun & short',
            otherApps: 'Generic adult content',
        },
        {
            feature: 'Safe & Ad-Free Environment',
            minderyKids: '100% secure for kids',
            otherApps: 'Ads & distractions',
        },
        {
            feature: 'Age-Specific Programs',
            minderyKids: 'Tailored for 4-14',
            otherApps: 'One-size-fits-all',
        },
        {
            feature: 'Parent & Teacher Support',
            minderyKids: 'Guides, printables, progress insights',
            otherApps: 'Limited or none',
        },
    ];
    return (
        <section className="mb-12 w-full flex justify-center px-4">
            <div className="w-full max-w-6xl flex flex-col gap-y-6">
                <div className="mb-10">
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                        Why Choose Mindery Kids Over Others?
                    </h1>
                </div>

                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm sm:text-base">
                            <thead>
                                <tr className="bg-gray-50">
                                    <th className="p-4 sm:p-6 text-left font-extrabold text-purple-700 tracking-wider">Feature</th>
                                    <th className="p-4 sm:p-6 text-left font-extrabold text-purple-700 tracking-wider">Mindery Kids</th>
                                    <th className="p-4 sm:p-6 text-left font-extrabold text-purple-700 tracking-wider">Other Apps</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {comparisonData.map((item, index) => (
                                    <tr key={index} className="hover:bg-gray-50 transition-colors duration-200">
                                        <td className="p-4 sm:p-6 text-md font-medium text-gray-800">{item.feature}</td>
                                        <td className="p-4 sm:p-6 text-gray-600">
                                            <div className="flex items-center gap-2">
                                                <span className="text-lg" role="img" aria-label="Checkmark">✅</span>
                                                <span className="text-md font-medium">{item.minderyKids}</span>
                                            </div>
                                        </td>
                                        <td className="p-4 sm:p-6 text-gray-600">
                                            <div className="flex items-center gap-2">
                                                <span className="text-lg" role="img" aria-label="Cross Mark">❌</span>
                                                <span className="text-md font-medium">{item.otherApps}</span>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
}

