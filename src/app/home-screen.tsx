"use client";

import React from "react";
import { useClipboard } from "@/hooks/use-clipboard";
import { ExciteLogo } from "@/components/foundations/logo/excite-logo";
import { SocialButton } from "@/components/base/buttons/social-button";
import styles from "./home-screen.module.css";

export const HomeScreen = () => {
  const clipboard = useClipboard()
  return (
    <div className={styles.homePageWrap}>
      {/* Media Section */}
      <div className={styles.mediaSection}>
        <video
          autoPlay
          playsInline
          preload="auto"
          muted
          loop
          height="100%"
          className={styles.media}
        >
          <source
            src="https://res.cloudinary.com/excit3/video/upload/v1725643817/Excite%20Company%20Website/Next-Gen_Fintech_and_Banking_Products_Showreel_2023_by_Financial_UX_Design_Agency_UXDA_hrm7d3.mp4"
            type="video/mp4"
          />
        </video>
        <div className={styles.mediaSectionScrim}></div>
      </div>

      {/* Details Section */}
      <div className={styles.detailsSection}>
        <div className={styles.pageDetails}>
          <div className="relative flex w-128 items-center justify-center m-10">
            <ExciteLogo />
          </div>

          <div className={styles.textCTA}>
            <div className={styles.subTextHeroText}>
              <div className={styles.subText}>
                Premier Digital Product Innovation Company Specializing in
              </div>
              <div className={styles.heroText}>
                UIUX Research, Design & Software Engineering
              </div>
            </div>

            <div className={styles.cTAs}>
              <div className={styles.socialMediaCTA}>
                Follow us on our socials
              </div>

              <div className={styles.socialMediaIcons}>
                <SocialButton
                    social="dribble"
                    theme="gray"
                    href="https://www.linkedin.com/company/excitecompany"
                    target="_blank"
                    rel="noopener noreferrer"
                />                
                <SocialButton
                    social="apple"
                    theme="gray"
                    href="https://www.linkedin.com/company/excitecompany"
                    target="_blank"
                    rel="noopener noreferrer"
                />                
                <SocialButton
                    social="facebook"
                    theme="gray"
                    href="https://www.linkedin.com/company/excitecompany"
                    target="_blank"
                    rel="noopener noreferrer"
                />                
                <SocialButton
                    social="twitter"
                    theme="gray"
                    href="https://www.linkedin.com/company/excitecompany"
                    target="_blank"
                    rel="noopener noreferrer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
