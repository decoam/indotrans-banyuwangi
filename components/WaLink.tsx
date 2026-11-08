"use client";

import type { AnchorHTMLAttributes, MouseEvent } from "react";
import { trackWaClick } from "@/lib/analytics";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  location: string;
  label?: string;
};

export default function WaLink({ location, label, onClick, children, ...props }: Props) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    trackWaClick(location, label);
    onClick?.(e);
  };

  return (
    <a {...props} onClick={handleClick}>
      {children}
    </a>
  );
}
