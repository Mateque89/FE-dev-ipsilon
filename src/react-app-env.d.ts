/// <reference types="react-scripts" />

export interface CountrySummary {
  Country: string;
  CountryCode: string;
  Slug: string;
  NewConfirmed: number;
  TotalConfirmed: number;
  NewDeaths: number;
  TotalDeaths: number;
  NewRecovered: number;
  TotalRecovered: number;
  Date: string;
}
export interface CountryByDate {
  Country: string;
  Province: string;
  CountryCode: string;
  Slug: string;
  Date: string;
  Confirmed: number;
  Deaths: number;
  Recovered: number;
  Active: number;
}
export interface CountryName {
  Country: string;
  Slug: string;
  ISO2: string;
}
