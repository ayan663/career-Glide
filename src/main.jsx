      
import App from './App.jsx'
import './index.css'

import React from 'react';
import ReactDOM from 'react-dom/client';
import { ClerkProvider } from '@clerk/clerk-react';

const clerkFrontendApi = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY; // or use env var

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={clerkFrontendApi}>
      <App />
    </ClerkProvider>
  </React.StrictMode>
);
