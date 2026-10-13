export interface PortfolioItem {
  id: string;
  type: 'video' | 'image';
  src: string;
  title?: string;
}

export interface TattooStyle {
  id: string;
  title: string;
  tagline: string;
  description: string;
  imageUrl: string;
  features: string[];
}

export interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  style: string;
  placement: string;
  size: string;
  description: string;
  referenceUrl: string;
  preferredDate: string;
}
