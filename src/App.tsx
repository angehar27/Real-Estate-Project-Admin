// src/App.tsx (FINAL STRUCTURE)

import React, { useState } from 'react';

// Import all main components (NOW UNCOMMENTED)
import './App.css'; 
import AgentDashboard from './Components/AgentDashboard';
import ClientList from './Components/ClientList';
import FollowUpPipeline from './Components/FollowUpPipeline';
import PropertyList from './Components/PropertyList';

// Define the available views (matches your Sprint plan)
type View = 'dashboard' | 'properties' | 'clients' | 'pipeline';

function App() {
  // We start on the 'properties' view for Sprint 1
  const [currentView, setCurrentView] = useState<View>('properties');

  const renderView = () => {
    switch (currentView) {
      // Sprint 5
      case 'dashboard':
        return <AgentDashboard />; 
        
      // Sprint 1 & 4 
      case 'properties':
        return <PropertyList />;

      // Sprint 2
      case 'clients':
        return <ClientList />;

      // Sprint 3
      case 'pipeline':
        return <FollowUpPipeline />;

      default:
        return <div>Seleccione una opción del menú.</div>; 
    }
  };

  return (
    <div className="app-container" style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>🏡 Sistema de Gestión Inmobiliaria</h1>
      
      {/* --- Navigation Bar (NOW ALL ACTIVE) --- */}
      <nav style={{ borderBottom: '2px solid #ccc', paddingBottom: '10px', marginBottom: '20px' }}>
        <button 
          onClick={() => setCurrentView('dashboard')} 
          style={getButtonStyle('dashboard')}
        >
          Dashboard (S5)
        </button>
        <button 
          onClick={() => setCurrentView('properties')} 
          style={getButtonStyle('properties')}
        >
          Propiedades (S1/S4)
        </button>
        <button 
          onClick={() => setCurrentView('clients')} 
          style={getButtonStyle('clients')}
        >
          Clientes (S2)
        </button>
        <button 
          onClick={() => setCurrentView('pipeline')} 
          style={getButtonStyle('pipeline')}
        >
          Seguimiento (S3)
        </button>
      </nav>

      <div className="content-area">
        {renderView()}
      </div>
      
    </div>
  );

  // Simple function for button styling feedback
  function getButtonStyle(view: View) {
    return {
      margin: '0 10px',
      padding: '8px 15px',
      backgroundColor: currentView === view ? '#007BFF' : '#f0f0f0',
      color: currentView === view ? 'white' : 'black',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer'
    };
  }
}

export default App;