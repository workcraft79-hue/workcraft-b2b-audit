export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  deliverables: string[];
  operationalBenefit: string;
  idealFor: string;
}

export interface ProcessStage {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  keyOutputs: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  companySize: string;
  message: string;
}
