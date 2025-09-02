import lady from "../assets/lady.png";
import kid from "../assets/kid.png";
import kidsgroup from "../assets/kids group.png";


export function Programs() {
  return (
    <section id="programs" className="w-full flex justify-center mb-12 px-4">
      <div className="w-full max-w-6xl flex flex-col gap-y-6">
        {/* heading */}
        <header className="flex flex-col gap-y-2">
          <h1 className="font-extrabold text-3xl sm:text-4xl text-gray-900">Programs for Every Age</h1>
          <p className="font-semibold text-base text-gray-600">Pick a track of mix and match. Every program grows with your child.</p>
        </header>
        {/* image with desc */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-x-6">
          {/* image */}
          <img src={lady} alt="image" className="w-full md:w-1/2 h-auto rounded-lg object-cover" />
          {/* description */}
          <div className="flex flex-col gap-y-2 items-center justify-center md:w-1/2">
            <div className="w-full md:w-4/5 flex flex-col gap-y-4">
              <h4 className="font-extrabold text-xl text-gray-900">Little Explorers (4–6)</h4>
              <p className="font-semibold text-md text-gray-600">Three to five-minute stories with animal friends that teach belly-breathing, noticing sounds, and gentle stretching.</p>
              <ul className="flex flex-wrap gap-2 md:gap-x-4">
                <li className="border border-gray-400 rounded-full p-2 text-gray-900 font-extrabold text-sm bg-gray-100">🐻 Cozy Corner</li>
                <li className="border border-gray-400 rounded-full p-2 text-gray-900 font-extrabold text-sm bg-gray-100">🎵 Calm Music</li>
                <li className="border border-gray-400 rounded-full p-2 text-gray-900 font-extrabold text-sm bg-gray-100">🏅 Sticker Badges</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6 md:gap-x-6">
          {/* description */}
          <div className="flex flex-col gap-y-2 items-center justify-center md:w-1/2 order-2 md:order-1">
            <div className="w-full md:w-4/5 flex flex-col gap-y-4">
              <h4 className="font-extrabold text-xl text-gray-900">Brave Thinkers (7–10)</h4>
              <p className="font-semibold text-md text-gray-600">Mindset stories, focus timers, and kindness practices that build confidence and classrom readiness.</p>
              <ul className="flex flex-wrap gap-2 md:gap-x-4">
                <li className="border border-gray-400 rounded-full p-2 text-gray-900 font-extrabold text-sm bg-gray-100">⏱️ Focus Timer</li>
                <li className="border border-gray-400 rounded-full p-2 text-gray-900 font-extrabold text-sm bg-gray-100">📝 Gratitude Notes</li>
                <li className="border border-gray-400 rounded-full p-2 text-gray-900 font-extrabold text-sm bg-gray-100">🌟 Streak Rewards</li>
              </ul>
            </div>
          </div>

          {/* image */}
          <img src={kid} alt="image" className="w-full md:w-1/2 h-auto rounded-lg object-cover order-1 md:order-2" />
        </div>
        <div className="flex flex-col md:flex-row gap-6 md:gap-x-6">
          {/* image */}
          <img src={kidsgroup} alt="image" className="w-full md:w-1/2 h-auto rounded-lg object-cover" />
          {/* description */}
          <div className="flex flex-col gap-y-2 items-center justify-center md:w-1/2">
            <div className="w-full md:w-4/5 flex flex-col gap-y-4">
              <h4 className="font-extrabold text-xl text-gray-900">Calm & Curious (4–6)</h4>
              <p className="font-semibold text-md text-gray-600">Longer meditations, reframing thoughts, and sleep stories for deeper rest and emotional balance.</p>
              <ul className="flex flex-wrap gap-2 md:gap-x-4">
                <li className="border border-gray-400 rounded-full p-2 text-gray-900 font-extrabold text-sm bg-gray-100">⏱️ Mindset Minis</li>
                <li className="border border-gray-400 rounded-full p-2 text-gray-900 font-extrabold text-sm bg-gray-100">🌙 Sleep Stories</li>
                <li className="border border-gray-400 rounded-full p-2 text-gray-900 font-extrabold text-sm bg-gray-100">🎯 Goal cards</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
