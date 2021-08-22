import {GenerateProductCode} from './GenerateProductCode';

export class Case{
  id: number;
  generateProductCode: GenerateProductCode;
  serialNumber: string;
  manufacturer: string;
  caseType: string;
  compatibleMotherboard: string;
  powerSourceIncluded: boolean;
  sourcePower: string;
  priceIn: number;
  productInformation: string;
  state: string;
  soldAt: Date;
  soldBy: string;
  sold: boolean;
  createdDate: Date;
  createdBy: string;
  lastUpdated: Date;
  updatedBy: string;

  static get generateProductURL(): string {
    return 'generate-product-code-case';
  }

  static get generateProductURLSearch(): string {
    return 'generate-product-code-case/search';
  }
}
