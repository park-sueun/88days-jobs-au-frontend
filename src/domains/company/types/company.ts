export type CompanyCategory = "FARM" | "FACTORY" | "WORKING_HOSTEL" | "AGENCY";
export type CompanyState = "NSW" | "QLD" | "VIC" | "SA" | "NT" | "TAS" | "WA";

export interface Company {
  id: number;

  name: string;
  contact_number: string;
  email: string;
  website: string;
  description: string;

  unit: string;
  street: string;
  suburb: string;
  state: CompanyState;
  postcode: string;

  lat: number;
  lng: number;

  category: CompanyCategory;
  season?: string;
  crop_type: string;

  isVisaExtensionEligible: boolean;
  active: boolean;
}