// src/Components/FollowUpPipeline.tsx
import React from 'react';
import './FollowUpPipeline.css';

interface FollowUp {
  id: number;
  cliente: string;
  propiedad: string;
  estado: 'Llamada' | 'Cita Programada' | 'Visita Realizada' | 'Negociación';
  fecha: string;
  notas: string;
}

const FollowUpPipeline: React.FC = () => {
  // Datos quemados simulando el flujo de seguimiento
  const seguimientos: FollowUp[] = [
    { id: 1, cliente: 'Ana Rodríguez', propiedad: 'Casa en Escazú', estado: 'Llamada', fecha: '2025-10-10', notas: 'Cliente interesada en visitar el fin de semana.' },
    { id: 2, cliente: 'Carlos Jiménez', propiedad: 'Apartamento en San Pedro', estado: 'Cita Programada', fecha: '2025-10-12', notas: 'Cita agendada para el lunes a las 10am.' },
    { id: 3, cliente: 'María López', propiedad: 'Condominio en Heredia', estado: 'Visita Realizada', fecha: '2025-10-09', notas: 'Cliente encantada con la zona, espera aprobación bancaria.' },
    { id: 4, cliente: 'Javier Mora', propiedad: 'Lote en Santa Ana', estado: 'Negociación', fecha: '2025-10-14', notas: 'En proceso de revisión de oferta.' }
  ];

  // Estados posibles del pipeline
  const estados = ['Llamada', 'Cita Programada', 'Visita Realizada', 'Negociación'];

  return (
    <div className="pipeline-container">
      <h2>Pipeline de Seguimientos</h2>
      <p style={{ color: '#bbb9b9ff' }}>Visualización de llamadas, citas y seguimientos activos con clientes.</p>

      <div className="pipeline-grid">
        {estados.map((estado) => (
          <div key={estado} className="pipeline-column">
            <h3>{estado}</h3>
            <div className="pipeline-cards">
              {seguimientos
                .filter((s) => s.estado === estado)
                .map((s) => (
                  <div key={s.id} className="followup-card">
                    <h4>{s.cliente}</h4>
                    <p><strong>Propiedad:</strong> {s.propiedad}</p>
                    <p><strong>Fecha:</strong> {s.fecha}</p>
                    <p className="notas">{s.notas}</p>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FollowUpPipeline;
