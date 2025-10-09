// src/types/models.ts

export type PropertyStatus = 'Available' | 'Reserved' | 'Sold';

export interface Property {
  id: string;
  address: string;
  city: string;
  price: number;
  type: 'House' | 'Apartment' | 'Land';
  bedrooms: number;
  status: PropertyStatus;
  agentId: string;
}

export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  interest: 'Buyer' | 'Seller';
  assignedAgentId: string;
}

export interface FollowUp {
  id: string;
  clientId: string;
  propertyId: string;
  date: string; // Use ISO Date string (e.g., '2025-10-10')
  type: 'Showing' | 'Call' | 'Meeting';
  notes: string;
}