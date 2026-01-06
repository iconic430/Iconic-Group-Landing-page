
import React, { useEffect } from 'react';

export const TriageForm: React.FC = () => {
  useEffect(() => {
    // Carga el script de GoHighLevel necesario para redimensionar el iframe
    const script = document.createElement('script');
    script.src = "https://link.msgsndr.com/js/form_embed.js"; 
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Limpieza del script al desmontar el componente
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="w-full mx-auto bg-transparent" style={{ minHeight: '600px' }}>
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/K0dkGAylDXzC23aVAjp0"
        style={{ 
          width: '100%', 
          height: '100%', 
          border: 'none', 
          borderRadius: '12px',
          backgroundColor: 'transparent'
        }}
        id="inline-K0dkGAylDXzC23aVAjp0"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Affiliate Marketing Agency Lead"
        data-height="495"
        data-layout-iframe-id="inline-K0dkGAylDXzC23aVAjp0"
        data-form-id="K0dkGAylDXzC23aVAjp0"
        title="Affiliate Marketing Agency Lead"
        allowTransparency={true}
      >
      </iframe>
    </div>
  );
};
