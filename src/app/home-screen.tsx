"use client";

import React from "react";
import { ExciteLogo } from "@/components/foundations/logo/excite-logo";
import { SocialButton } from "@/components/base/buttons/social-button";

export const HomeScreen = () => {
  return (
    <div className="relative flex h-screen w-full flex-col md:flex-row bg-auto overflow-hidden">
      {/* Media Section */}
      <div className="relative flex h-1/2 w-full md:h-full md:w-1/2 items-center justify-center overflow-hidden">
        <video
          autoPlay
          playsInline
          preload="auto"
          muted
          loop
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source
            src="https://res.cloudinary.com/excit3/video/upload/v1725643817/Excite%20Company%20Website/Next-Gen_Fintech_and_Banking_Products_Showreel_2023_by_Financial_UX_Design_Agency_UXDA_hrm7d3.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#DA154D]/90"></div>
      </div>

      {/* Details Section */}
      <div className="relative z-10 flex h-1/2 w-full md:h-full md:w-1/2 items-center justify-center px-4 py-8 md:px-12">
        <div className="flex max-w-[560px] flex-col items-center justify-center gap-">
          {/* Logo */}
          <div className="relative m-6 flex w-48 items-center justify-center md:w-72 lg:w-80">
            <ExciteLogo />
          </div>

          {/* Text CTA */}
          <div className="flex flex-col items-center gap-8 w-full">
            <div className="flex w-full flex-col items-center gap-0">
              <div className="text-center text-base text-alpha-black">
                Premier digital product innovation company specializing in
              </div>
              <div className="text-center text-3xl font-bold tracking-tight text-brand-secondary sm:text-2xl md:text-4xl">
                UIUX Research, Design & Software Engineering
              </div>
            </div>

            {/* Social CTA */}
            <div className="flex flex-col items-center gap-0 w-full">
              <div className="text-gray-600">Follow us on our socials</div>
              <div className="flex flex-wrap items-center justify-center gap-1">
                <SocialButton
                  social="dribble"
                  theme="gray"
                  size="sm"
                  href="https://www.linkedin.com/company/excitecompany"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="!border-0 !shadow-none !ring-0 outline-none before:!border-0 before:border-transparent before:!shadow-none"
                />
                <SocialButton
                  social="apple"
                  theme="gray"
                  size="sm"
                  href="https://www.linkedin.com/company/excitecompany"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="!border-0 !shadow-none !ring-0 outline-none before:!border-0 before:border-transparent before:!shadow-none"
                />
                <SocialButton
                  social="facebook"
                  theme="gray"
                  size="sm"
                  href="https://www.linkedin.com/company/excitecompany"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="!border-0 !shadow-none !ring-0 outline-none before:!border-0 before:border-transparent before:!shadow-none"
                />
                <SocialButton
                  social="twitter"
                  theme="gray"
                  size="sm"
                  href="https://www.linkedin.com/company/excitecompany"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="!border-0 !shadow-none !ring-0 outline-none before:!border-0 before:border-transparent before:!shadow-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
