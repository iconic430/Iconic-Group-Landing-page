
import React, { useEffect } from 'react';

export const BookingCalendar: React.FC = () => {
  useEffect(() => {
    const scriptId = 'ghl-booking-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = "https://link.markgrowth.pro/js/embed.js"; 
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="w-full mx-auto bg-transparent flex justify-center items-center" style={{ minHeight: '600px' }}>
      <iframe
        src="https://link.markgrowth.pro/widget/booking/4yLc6nWJE0ytLrijalNv"
        style={{ 
          width: '100%', 
          height: '600px',
          border: 'none', 
          borderRadius: '3px',
          backgroundColor: 'transparent',
          display: 'block'
        }}
        id="booking-4yLc6nWJE0ytLrijalNv"
        title="Booking Calendar"
      >
      </iframe>
    </div>
  );
};
