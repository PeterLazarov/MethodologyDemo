import React from 'react';
import CookieConsent from 'react-cookie-consent';
import texts from 'src/texts.json';

const CookieConsentPanel: React.FC = () => {
    return (
        <CookieConsent
          location="bottom"
          buttonText={texts.iUnderstand}
        >
          {texts.cookiesUsageMessage}
        </CookieConsent>
    );
  }

export default CookieConsentPanel;