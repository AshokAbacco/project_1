import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import ListValidation from './pages/ListValidation';
import { BrowserRouter } from 'react-router-dom';
import SignIn from './components/SignIn';
import Signup from './components/Signup';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Dashboard from './pages/Dashboard';
import ValidateDash from './components/ValidateDash';
import DashScore from './components/DashScore';
import DashEmail from './components/DashEmail';
import DashWarmup from './components/DashWarmup';
import DashTools from './components/DashTools';
import DashIntegrations from './components/DashIntegrations';
import DashUsage from './components/DashUsage';
import DashbordApi from './components/DashbordApi';
import DashPricing from './components/DashPricing';
import IntegraZapier from './components/IntegraZapier';
import EmailValidator from './components/EmailValidator';
import ValidEmailveri from './components/ValidEmailveri';
import ApiValidationCards from './components/ApiValidationCards';
import EmailPreview from './components/EmailPreview'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/list-validation" element={<ListValidation />} />
        <Route path="/features" element={<Features />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/validate" element={<ValidateDash />} />
        <Route path="/score" element={<DashScore />} />
        <Route path="/email-finder" element={<DashEmail />} />
        <Route path="/wermup" element={<DashWarmup />} />
        <Route path="/tools" element={<DashTools />} />
        <Route path="/integrations" element={<DashIntegrations />} />
        <Route path="/api" element={<DashbordApi/>} />
        <Route path="/usage" element={<DashUsage/>} />
        <Route path="/pricing-plan" element={<DashPricing/>} />
        <Route path="/zapire" element={<IntegraZapier/>} />
        <Route path="/email-validation" element={<EmailValidator/>} />
        <Route path="/validemail" element={<ValidEmailveri/>}/>
        <Route path="/ApiValidationCards" element={<ApiValidationCards/>}/>
        <Route path="/EmailPreview" element={<EmailPreview/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
