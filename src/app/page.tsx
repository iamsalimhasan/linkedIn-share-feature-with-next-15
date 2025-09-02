import LinkedInShareFeature from "@/components/linkedInShare/LinkedInShareFeature";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          LinkedIn Share Feature Test
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            LinkedIn Share Component
          </h2>
          <LinkedInShareFeature />
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            Test the Share Page
          </h2>
          <p className="text-gray-600 mb-4">
            Click the button below to view the dedicated share page that LinkedIn will scrape:
          </p>
          <Link 
            href="/share" 
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
          >
            View Share Page
          </Link>
        </div>
      </div>
    </div>
  );
}
