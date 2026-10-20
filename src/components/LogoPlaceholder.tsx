import React from 'react';
import { WORKCRAFT_LOGO_LAPTOP, WORKCRAFT_LOGO_MOBILE } from '../data';

interface LogoPlaceholderProps {
  className?: string;
  size?: 'normal' | 'footer';
  hideSubtitle?: boolean;
  isScrolled?: boolean;
}

export const LogoPlaceholder: React.FC<LogoPlaceholderProps> = ({
  className = '',
  size = 'normal',
  hideSubtitle = false,
}) => {
  const isFooter = size === 'footer';

  return (
    <div className={`flex flex-col items-start justify-center select-none ${className}`}>
      {/* Clickable brand logo: Laptop view (>= 768px) and Mobile view (< 768px) */}
      <div className="flex items-center leading-none">
        {/* Laptop / Desktop view (screens >= 768px) */}
        {isFooter ? (
          <img
            src="/logo-laptop.png"
            alt="Workcraft Logo"
            className="hidden md:block h-12 w-auto object-contain"
          />
        ) : (
          <img
            src="/logo-laptop.png"
            alt="Workcraft Logo"
            className="hidden md:block h-11 w-auto object-contain"
          />
        )}

        {/* Mobile view (screens < 768px) */}
        {isFooter ? (
          <img
            src="/logo-mobile.png"
            alt="Workcraft Logo"
            className="block md:hidden h-10 w-auto object-contain"
          />
        ) : (
          <img
            src="/logo-mobile.png"
            alt="Workcraft Logo"
            className="block md:hidden h-9 w-auto object-contain"
          />
        )}
      </div>

      {/* Subtitle in website brand blue: hidden on small mobile screens to prevent header overflow, visible on sm+ */}
      {!hideSubtitle && (
        <span
          className="text-[#00E5FF] font-semibold tracking-normal mt-0.5 leading-none whitespace-nowrap drop-shadow-[0_1px_3px_rgba(0,0,0,0.95)] transition-all duration-200 hidden sm:inline-block text-[11px] sm:text-xs ml-1"
        >
          AI-Powered Work Systems for Modern Businesses
        </span>
      )}
    </div>
  );
};

