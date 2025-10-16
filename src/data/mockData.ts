// src/data/mockData.ts

import type { Property, Client, FollowUp } from '../types/models';

const AGENT_ID = 'ag100'; 

export const mockProperties: Property[] = [
  { id: 'p001', address: '123 Oak St', city: 'San José', price: 150000, type: 'House', bedrooms: 3, status: 'Available', agentId: AGENT_ID },
  { id: 'p002', address: '45 A St, Apt 5', city: 'Heredia', price: 95000, type: 'Apartment', bedrooms: 2, status: 'Reserved', agentId: AGENT_ID },
  { id: 'p003', address: '789 Central Ave', city: 'Alajuela', price: 300000, type: 'Land', bedrooms: 0, status: 'Available', agentId: AGENT_ID },
  { id: 'p004', address: '56 Palm Ave', city: 'Cartago', price: 210000, type: 'House', bedrooms: 4, status: 'Sold', agentId: AGENT_ID },
  { id: 'p005', address: '9 Sunrise Blvd', city: 'San José', price: 125000, type: 'Apartment', bedrooms: 2, status: 'Available', agentId: AGENT_ID },
  { id: 'p006', address: '102 Green Valley', city: 'Alajuela', price: 175000, type: 'House', bedrooms: 3, status: 'Available', agentId: AGENT_ID },
  { id: 'p007', address: '88 Pacific Rd', city: 'Puntarenas', price: 450000, type: 'House', bedrooms: 5, status: 'Available', agentId: AGENT_ID },
  { id: 'p008', address: '15 North St', city: 'Heredia', price: 98000, type: 'Apartment', bedrooms: 1, status: 'Reserved', agentId: AGENT_ID },
  { id: 'p009', address: '300 South Park', city: 'San José', price: 160000, type: 'House', bedrooms: 3, status: 'Sold', agentId: AGENT_ID },
  { id: 'p010', address: '19 Central Plaza', city: 'Cartago', price: 220000, type: 'House', bedrooms: 3, status: 'Available', agentId: AGENT_ID },
  { id: 'p011', address: '41 Elm St', city: 'Heredia', price: 87000, type: 'Apartment', bedrooms: 2, status: 'Available', agentId: AGENT_ID },
  { id: 'p012', address: '5 Las Flores', city: 'Alajuela', price: 275000, type: 'House', bedrooms: 4, status: 'Reserved', agentId: AGENT_ID },
  { id: 'p013', address: '789 Ocean View', city: 'Guanacaste', price: 680000, type: 'Apartment', bedrooms: 6, status: 'Available', agentId: AGENT_ID },
  { id: 'p014', address: '22 Mountain Rd', city: 'Cartago', price: 185000, type: 'House', bedrooms: 3, status: 'Available', agentId: AGENT_ID },
  { id: 'p015', address: '61 Sunset Blvd', city: 'San José', price: 130000, type: 'Apartment', bedrooms: 2, status: 'Sold', agentId: AGENT_ID },
  { id: 'p016', address: '120 Lakeside Dr', city: 'Puntarenas', price: 340000, type: 'House', bedrooms: 4, status: 'Available', agentId: AGENT_ID },
  { id: 'p017', address: '80 River Rd', city: 'Heredia', price: 240000, type: 'House', bedrooms: 3, status: 'Reserved', agentId: AGENT_ID },
  { id: 'p018', address: '300 West End', city: 'San José', price: 95000, type: 'Apartment', bedrooms: 1, status: 'Available', agentId: AGENT_ID },
  { id: 'p019', address: '17 North Hill', city: 'Alajuela', price: 260000, type: 'House', bedrooms: 4, status: 'Available', agentId: AGENT_ID },
  { id: 'p020', address: '500 Country Rd', city: 'Cartago', price: 200000, type: 'Apartment', bedrooms: 3, status: 'Available', agentId: AGENT_ID },
  { id: 'p021', address: '12 Sea Breeze', city: 'Guanacaste', price: 520000, type: 'Apartment', bedrooms: 5, status: 'Available', agentId: AGENT_ID },
  { id: 'p022', address: '301 Maple Ave', city: 'Heredia', price: 110000, type: 'Apartment', bedrooms: 2, status: 'Sold', agentId: AGENT_ID },
  { id: 'p023', address: '47 Eastwood', city: 'San José', price: 150000, type: 'House', bedrooms: 2, status: 'Available', agentId: AGENT_ID },
  { id: 'p024', address: '9 River Park', city: 'Cartago', price: 235000, type: 'House', bedrooms: 3, status: 'Reserved', agentId: AGENT_ID },
];


export const mockClients: Client[] = [
  { id: 'c001', name: 'Laura Pérez', email: 'laura@mail.com', phone: '88123456', interest: 'Buyer', assignedAgentId: AGENT_ID },
  { id: 'c002', name: 'Carlos Soto', email: 'carlos@mail.com', phone: '88654321', interest: 'Seller', assignedAgentId: AGENT_ID },
];

export const mockFollowUps: FollowUp[] = [
    { id: 'f001', clientId: 'c001', propertyId: 'p001', date: '2025-10-10', type: 'Showing', notes: 'Client liked the location, but wants to negotiate price.' },
];