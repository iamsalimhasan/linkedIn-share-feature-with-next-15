"use client";
import { LinkedinShareButton } from "next-share";
import { useState } from "react";

const LinkedInShareFeature = () => {
  const [isSharing, setIsSharing] = useState(false);

  const onSharePost = () => {
    console.log("LinkedIn share initiated");
    setIsSharing(true);
  };

  const data = {
    imageUrl:
      "https://api.xperthrivr.com/uploads/profile_image_41_1756836591.png",
    content:
      "Excited to be on XperThrivr!",
  };

  // Use absolute URL for LinkedIn sharing
  // Replace this with your actual public URL when deployed
  const sharePageUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}/share`
      : "/share";

  // Alternative: Use the direct LinkedIn share URL
  const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    sharePageUrl
  )}`;

  return (
    <div className="w-full h-full space-y-4">
      {/* Primary LinkedIn Share Button */}
      <LinkedinShareButton
        url={sharePageUrl}
        title="XperThrivr - Empowering Individuals"
        summary={data.content}
        source="XperThrivr"
        onShareWindowClose={() => setIsSharing(false)}
      >
        <p
          onClick={onSharePost}
          className="bg-blue-800 text-white font-normal font-sans text-sm rounded-lg border border-black py-2 px-4 m-4 hover:bg-blue-700 transition-colors cursor-pointer"
        >
          {isSharing ? "Opening LinkedIn..." : "Share Post"}
        </p>
      </LinkedinShareButton>

      {/* Alternative Direct Share Button */}
      <div className="text-center">
        <p className="text-sm text-gray-600 mb-2">
          If the above doesn&apos;t work, try this direct link:
        </p>
        <a
          href={linkedInShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
        >
          Share on LinkedIn (Direct)
        </a>
      </div>

      {/* Debug Information */}
      <div className="bg-gray-100 p-4 rounded-lg text-sm">
        <p className="font-semibold mb-2">Debug Info:</p>
        <p>
          <strong>Share URL:</strong> {sharePageUrl}
        </p>
        <p>
          <strong>LinkedIn Share URL:</strong> {linkedInShareUrl}
        </p>
        <p className="text-red-600 mt-2">
          ⚠️ Note: LinkedIn cannot access localhost URLs. Deploy to a public URL
          for testing.
        </p>
      </div>
    </div>
  );
};

export default LinkedInShareFeature;
