import React, { useEffect } from 'react';

export const TriageForm: React.FC = () => {
  useEffect(() => {
    // Carga el script de GoHighLevel necesario para el formulario embebido
    const script = document.createElement('script');
    script.src = "https://link.msgsndr.com/js/form_embed.js"; 
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="w-full mx-auto bg-transparent" style={{ minHeight: '600px' }}>
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/aQnvyaeF7jqxUUElgBoF"
        style={{ 
          width: '100%', 
          height: '100%', 
          border: 'none', 
          borderRadius: '12px',
          backgroundColor: 'transparent'
        }}
        id="inline-aQnvyaeF7jqxUUElgBoF"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Iconic Forms"
        data-height="490"
        data-layout-iframe-id="inline-aQnvyaeF7jqxUUElgBoF"
        data-form-id="aQnvyaeF7jqxUUElgBoF"
        title="Iconic Forms"
      >
      </iframe>
    </div>
  );
};