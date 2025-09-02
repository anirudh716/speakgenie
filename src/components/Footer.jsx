import Logo from "../assets/Logo.png"

export function Footer() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 flex flex-col items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-5xl mx-auto">

        {/* CTA */}
        <section className="w-full bg-gradient-to-r from-purple-50 via-white to-green-50 rounded-2xl shadow-lg p-8 sm:p-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Start Your Child's Mindfulness Journey
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Try it free. Build calm, focus, and kindness—one small practice a day.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="w-full sm:w-auto bg-purple-600 text-white font-semibold py-3 px-8 rounded-xl hover:bg-purple-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 shadow-md">
              Create Account
            </button>
            <button className="w-full sm:w-auto bg-green-500 text-white font-semibold py-3 px-8 rounded-xl hover:bg-green-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 shadow-md">
              Download App
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full mt-16 pt-8 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                
                {/* Logo and Copyright */}
                <div className="flex flex-col items-center md:items-start">
                    <div className="flex items-center gap-3">
                        <img src={Logo} alt="Company's Logo" />
                        <span className="text-xl font-bold">Topmind Care</span>
                    </div>
                    <p className="text-gray-500 mt-2 text-sm">
                        Mindfulness for growing minds. © 2025 Mindery Kids.
                    </p>
                </div>

                {/* Social Links */}
                <div>
                     <h3 className="font-semibold text-purple-700 mb-3">Contact</h3>
                     <ul className="space-y-2">
                        <li><a href="#" className="text-gray-500 hover:text-purple-600">Instagram</a></li>
                        <li><a href="#" className="text-gray-500 hover:text-purple-600">YouTube</a></li>
                        <li><a href="#" className="text-gray-500 hover:text-purple-600">X</a></li>
                     </ul>
                </div>
                <div>
                     <h3 className="font-semibold text-purple-700 mb-3">Legal</h3>
                     <ul className="space-y-2">
                        <li><a href="#" className="text-gray-500 hover:text-purple-600">Privacy</a></li>
                        <li><a href="#" className="text-gray-500 hover:text-purple-600">Terms</a></li>
                     </ul>
                </div>

            </div>
        </footer>

      </div>
    </div>
  );
}
