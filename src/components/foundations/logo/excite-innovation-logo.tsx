"use client";

import type { HTMLAttributes } from "react";
import { cx } from "@/utils/cx";
import { UntitledLogoMinimal } from "./untitledui-logo-minimal";

const ExciteLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="120"
    height="40"
    viewBox="0 0 120 40"
    fill="none"
    {...props}
  >
    <defs>
      <linearGradient id="exciteGradient" x1="0" y1="0" x2="120" y2="40" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FF5A5F" />
        <stop offset="100%" stopColor="#FCB045" />
      </linearGradient>
    </defs>

    <rect width="120" height="40" rx="8" fill="url(#exciteGradient)" />

    <text
      x="50%"
      y="50%"
      dominantBaseline="middle"
      textAnchor="middle"
      fontSize="16"
      fontWeight="bold"
      fill="white"
    >
      Excite
    </text>
  </svg>
);

export default ExciteLogo;
