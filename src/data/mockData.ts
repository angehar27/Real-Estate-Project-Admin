// src/data/mockData.ts

import type { Property, Client, FollowUp } from '../types/models';

const AGENT_ID = 'ag100'; 

export const mockProperties: Property[] = [
  { id: 'p001', address: '123 Oak St', city: 'San José', price: 150000, type: 'House', bedrooms: 3, status: 'Available', agentId: AGENT_ID },
  { id: 'p002', address: '45 A St, Apt 5', city: 'Heredia', price: 95000, type: 'Apartment', bedrooms: 2, status: 'Reserved', agentId: AGENT_ID },
  { id: 'p003', address: '789 Central Ave', city: 'Alajuela', price: 300000, type: 'Land', bedrooms: 0, status: 'Available', agentId: AGENT_ID },
];

export const mockClients: Client[] = [
  { id: 'c001', name: 'Laura Pérez', email: 'laura@mail.com', phone: '88123456', interest: 'Buyer', assignedAgentId: AGENT_ID },
  { id: 'c002', name: 'Carlos Soto', email: 'carlos@mail.com', phone: '88654321', interest: 'Seller', assignedAgentId: AGENT_ID },
];

export const mockFollowUps: FollowUp[] = [
    { id: 'f001', clientId: 'c001', propertyId: 'p001', date: '2025-10-10', type: 'Showing', notes: 'Client liked the location, but wants to negotiate price.' },
];