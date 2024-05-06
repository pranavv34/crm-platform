import React from 'react';
import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css'; // Import WhatsApp widget styles

const App = () => {
  return (
    <div style={{ position: 'relative', zIndex: 9999 }}>
      {/* Your app content */}
      <WhatsAppWidget 
        phoneNumber="+918801103053"
        message="Welcome to SS Tax Mentors! How can we help you?"
        position="right"
      />
    </div>
  );
}

export default App;
