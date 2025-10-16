// src/components/PropertyList.tsx

import React from 'react';
// Import the mock data you just created
import { mockProperties } from '../data/mockData'; 
// Import the type definition for type-checking
import type { Property } from '../types/models'; 

const PropertyList: React.FC = () => {
  return (
    <div>
      <h2>Catálogo de Propiedades</h2>
      <p>Mostrando {mockProperties.length} propiedades.</p>
      
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '15px' }}>
        <thead>
          <tr style={{ backgroundColor: '#007bff' }}>
            <th style={{ padding: '8px', border: '1px solid #007bff', textAlign: 'left' }}>Dirección</th>
            <th style={{ padding: '8px', border: '1px solid #007bff', textAlign: 'left' }}>Ciudad</th>
            <th style={{ padding: '8px', border: '1px solid #007bff', textAlign: 'right' }}>Precio</th>
            <th style={{ padding: '8px', border: '1px solid #007bff', textAlign: 'center' }}>Dormitorios</th>
            <th style={{ padding: '8px', border: '1px solid #007bff', textAlign: 'center' }}>Estado</th>
          </tr>
        </thead>
        <tbody>
          {/* Loop through your mock data to display each property */}
          {mockProperties.map((p: Property) => (
            <tr key={p.id}>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>{p.address}</td>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>{p.city}</td>
              <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'right' }}>${p.price.toLocaleString()}</td>
              <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>{p.bedrooms}</td>
              <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>
                <span style={{ color: p.status === 'Available' ? 'green' : 'orange', fontWeight: 'bold' }}>
                  {p.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PropertyList;