import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PropertyList from './pages/PropertyList';
import TenantList from './pages/TenantList';
import PaymentList from './pages/PaymentList';
import PropertyForm from './components/PropertyForm';
import HomePage from './components/HomePage';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/properties" element={<PropertyList />} />
          <Route path="/tenants" element={<TenantList />} />
          <Route path="/payments" element={<PaymentList />} />
          <Route path="/add-property" element={<PropertyForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
