export interface CompanyCreateRequest {
  name: string;
  contactNumber?: string;
  email?: string;
  website?: string;
  description?: string;

  unit?: string;
  street?: string;
  suburb?: string;
  state?: string;
  postcode?: string;

  latitude?: number | null;
  longitude?: number | null;

  category?: string;
  season?: string;
  cropType?: string;

  isVisaExtensionEligible?: boolean;
  status?: string;
}