import React from 'react';
import './ClientList.css';

interface Cliente {
  id: number;
  nombre: string;
  correo: string;
  telefono: string;
  interes: string;
  estado: 'Nuevo' | 'En seguimiento' | 'Cerrado';
}

const ClientList: React.FC = () => {
  // 🔹 Datos quemados de ejemplo
  const clientes: Cliente[] = [
    { id: 1, nombre: 'Ana Rodríguez', correo: 'ana.rod@gmail.com', telefono: '8888-1234', interes: 'Casa en Escazú', estado: 'En seguimiento' },
    { id: 2, nombre: 'Carlos Jiménez', correo: 'cjimenez@hotmail.com', telefono: '8645-9987', interes: 'Apartamento en San Pedro', estado: 'Nuevo' },
    { id: 3, nombre: 'María López', correo: 'maria.lopez@gmail.com', telefono: '7123-4567', interes: 'Condominio en Heredia', estado: 'Cerrado' },
    { id: 4, nombre: 'Javier Mora', correo: 'jmora@yahoo.com', telefono: '6012-3344', interes: 'Lote en Santa Ana', estado: 'En seguimiento' },
  ];

  return (
    <div className="client-container">
      <h2>Gestión de Clientes</h2>
      <p style={{ color: '#bbb9b9ff' }}>Listado de clientes interesados en propiedades.</p>

      <table className="client-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Teléfono</th>
            <th>Interés</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((c) => (
            <tr key={c.id}>
              <td>{c.nombre}</td>
              <td>{c.correo}</td>
              <td>{c.telefono}</td>
              <td>{c.interes}</td>
              <td>
                <span className={`estado ${c.estado.toLowerCase().replace(' ', '-')}`}>
                  {c.estado}
                </span>
              </td>
              <td>
                <button className="btn-ver">👁 Ver</button>
                <button className="btn-editar">✏ Editar</button>
                <button className="btn-eliminar">🗑 Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClientList;
