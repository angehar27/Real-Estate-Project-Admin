import React from 'react';
import './AgentDashboard.css';

const AgentDashboard: React.FC = () => {
  // 🔹 Datos simulados para las métricas
  const totalPropiedades = 24;
  const clientesActivos = 18;
  const citasPendientes = 5;
  const ventasCerradas = 7;

  const topClientes = [
    { nombre: 'Ana Rodríguez', propiedad: 'Casa en Escazú', progreso: 90 },
    { nombre: 'Carlos Jiménez', propiedad: 'Apartamento en San Pedro', progreso: 75 },
    { nombre: 'María López', propiedad: 'Condominio en Heredia', progreso: 60 },
  ];

  const visitasPorMes = [
    { mes: 'Jun', visitas: 10 },
    { mes: 'Jul', visitas: 15 },
    { mes: 'Ago', visitas: 12 },
    { mes: 'Set', visitas: 20 },
    { mes: 'Oct', visitas: 18 },
  ];

  return (
    <div className="dashboard-container">
      <h2>Panel del Agente</h2>
      <p style={{ color: '#bbb9b9ff' }}>Resumen de métricas y actividad inmobiliaria.</p>

      {/* 🔸 Tarjetas principales */}
      <div className="metrics-grid">
        <div className="metric-card total">
          <h3>{totalPropiedades}</h3>
          <p>Propiedades Registradas</p>
        </div>
        <div className="metric-card clientes">
          <h3>{clientesActivos}</h3>
          <p>Clientes Activos</p>
        </div>
        <div className="metric-card citas">
          <h3>{citasPendientes}</h3>
          <p>Citas Pendientes</p>
        </div>
        <div className="metric-card ventas">
          <h3>{ventasCerradas}</h3>
          <p>Ventas Cerradas</p>
        </div>
      </div>

      {/* 🔸 Gráfico simple de visitas mensuales */}
      <div className="chart-section">
        <h3>📅 Visitas a Propiedades por Mes</h3>
        <div className="bar-chart">
          {visitasPorMes.map((v) => (
            <div key={v.mes} className="bar-item">
              <div className="bar" style={{ height: `${v.visitas * 10}px` }}></div>
              <span>{v.mes}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 🔸 Lista de clientes destacados */}
      <div className="top-clientes">
        <h3>⭐ Clientes Destacados</h3>
        {topClientes.map((c) => (
          <div key={c.nombre} className="cliente-card">
            <div className="info">
              <strong>{c.nombre}</strong> — <span>{c.propiedad}</span>
            </div>
            <div className="progreso">
              <div
                className="barra"
                style={{ width: `${c.progreso}%` }}
              ></div>
              <span>{c.progreso}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgentDashboard;
