import React from 'react';
import CookieConsent from 'react-cookie-consent';
import texts from 'Texts';

const CookieConsentPanel = () => {
    return (
        <CookieConsent
          location="bottom"
          buttonText={texts.iAgree}
          enableDeclineButton
          declineButtonText={texts.iDisagree}
        >
          {texts.cookiesUsageMessage}
        </CookieConsent>
    );
  }

export default CookieConsentPanel;