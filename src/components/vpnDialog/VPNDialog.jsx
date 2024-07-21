import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './vpnDialogStyles.css';

const VPNDialog = ({ isOpen, handleClose }) => {

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }


  const handleRefresh = () => {
    window.location.reload();
  }

  return ReactDOM.createPortal(
    <div className="vpn-dialog-overlay">
      <div className="vpn-dialog">
        <div className="headerCtnOverlay">
          <h2>503: Service Unavailable</h2>
        </div>
        <div className="bodyCtnOverlay">
          <p>We apologize for the inconvenience. It appears that The Movie Database
          (TMDB) is currently unavailable in your region.</p>
          <p>You may try changing your region using a VPN to access the service.</p>
          <p>If you are using a Chromium-based browser, consider using this extension:
            <a href="https://chromewebstore.google.com/detail/free-vpn-for-chrome-vpn-p/majdfhpaihoncoakbjgbdhglocklcgno" target='_blank'>FreeVPN</a>.
          </p>
        </div>
        <div className="btnCtnOverlay">
          <button onClick={handleClose}>Close</button>
          <button onClick={handleRefresh}>Refresh</button>
        </div>
      </div>
    </div>
    , document.querySelector('body'));
}

export default VPNDialog