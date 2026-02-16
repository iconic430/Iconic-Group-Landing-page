
import React, { useEffect } from 'react';

export const TriageForm: React.FC = () => {
  useEffect(() => {
    const scriptId = 'ghl-form-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = "https://link.markgrowth.pro/js/form_embed.js"; 
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="w-full mx-auto bg-transparent flex justify-center items-center" style={{ minHeight: '576px' }}>
      <iframe
        src="https://link.markgrowth.pro/widget/form/L8M9TIz1NLpT2JfEeB0d"
        style={{ 
          width: '100%', 
          height: '576px',
          border: 'none', 
          borderRadius: '3px',
          backgroundColor: 'transparent',
          display: 'block'
        }}
        id="inline-L8M9TIz1NLpT2JfEeB0d"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Form 1 Landing"
        data-height="576"
        data-layout-iframe-id="inline-L8M9TIz1NLpT2JfEeB0d"
        data-form-id="L8M9TIz1NLpT2JfEeB0d"
        title="Form 1 Landing"
        allowTransparency={true}
      >
      </iframe>
    </div>
  );
};
