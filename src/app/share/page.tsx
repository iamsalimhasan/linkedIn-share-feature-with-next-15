import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "XperThrivr - Empowering Individuals",
  description: "Get valuable insights and career advice from experienced professionals. Book a session and grow together!",
  openGraph: {
    title: "XperThrivr - Empowering Individuals",
    description: "Get valuable insights and career advice from experienced professionals. Book a session and grow together!",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "XperThrivr Profile",
        type: "image/png",
      },
    ],
    type: "website",
    siteName: "XperThrivr",
    url: "/share",
  },
  twitter: {
    card: "summary_large_image",
    title: "XperThrivr - Empowering Individuals",
    description: "Get valuable insights and career advice from experienced professionals. Book a session and grow together!",
    images: ["/api/og"],
  },
  other: {
    "linkedin:image": "/api/og",
    "linkedin:image:width": "1200",
    "linkedin:image:height": "630",
  },
};

export default function SharePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 text-center">
          <h1 className="text-4xl font-bold mb-2">XperThrivr</h1>
          <p className="text-xl opacity-90">Empowering Individuals</p>
        </div>
        
        {/* Content */}
        <div className="p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Image Section */}
            <div className="space-y-4">
              <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/api/og"
                  alt="XperThrivr Profile"
                  fill
                  className="object-cover"
                  priority
                  unoptimized
                />
              </div>
              <p className="text-sm text-gray-600 text-center">
                Professional Profile Image
              </p>
            </div>
            
            {/* Text Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Excited to be on XperThrivr! 🚀
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  My page is now LIVE! 🎉 Whether you want to obtain valuable insights, 
                  or career advice, I'm here to help. Let's grow together! 💡✨
                </p>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-800">
                  What I Offer:
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Career guidance and mentorship
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Professional development insights
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Industry expertise and knowledge sharing
                  </li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800 font-medium">
                  #XperThrivr #EmpoweringIndividuals #CareerGrowth #ProfessionalDevelopment
                </p>
              </div>
              
              <div className="text-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                  Book a Session with Me! ➡️
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="bg-gray-50 p-6 text-center">
          <p className="text-gray-600">
            Join thousands of professionals on XperThrivr and unlock your potential today!
          </p>
        </div>
      </div>
    </div>
  );
}
