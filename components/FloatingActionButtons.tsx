'use client';

import { useEffect, useState } from 'react';

export default function FloatingActionButtons() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show FAB after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-8 right-8 flex flex-col gap-3 z-40 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/61468302786"
            target="_blank"
            rel="noreferrer"
            className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 hover:from-green-600 hover:to-green-700"
            title="Chat on WhatsApp"
            aria-label="Chat on WhatsApp"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.955 1.313c-1.527.808-2.846 1.904-3.916 3.174-1.077 1.276-1.89 2.738-2.369 4.322-.48 1.584-.516 3.205-.106 4.332.41 1.127 1.147 2.537 2.222 3.957.526.695.905 1.18 1.122 1.435.216.255.42.512.614.768.793-.992 1.567-2.028 2.322-3.104 1.01-1.404 1.899-2.742 2.633-4.08 1.562-2.876 2.273-5.665 2.088-8.304-.185-2.639-1.122-5.021-2.619-6.86-.75-.889-1.56-1.64-2.413-2.195zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z" />
            </svg>
            {/* Tooltip */}
            <div className="absolute bottom-full mb-3 right-0 bg-secondary text-on-secondary px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              WhatsApp
            </div>
          </a>

          {/* Call Button */}
          <a
            href="tel:+61468302786"
            className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 hover:from-blue-600 hover:to-blue-700"
            title="Call us"
            aria-label="Call us"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            {/* Tooltip */}
            <div className="absolute bottom-full mb-3 right-0 bg-secondary text-on-secondary px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              Call Now
            </div>
          </a>
        </div>
      )}
    </>
  );
}
