import {GenerateProductCode} from './GenerateProductCode';

export class OpticalUnit {

  id: number;
  generateProductCode: GenerateProductCode;
  serialNumber: string;
  manufacturer: string;
  type: string;
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
    return 'generate-product-code-optical-unit';
  }

  static get generateProductURLSearch(): string {
    return 'generate-product-code-optical-unit/search';
  }
}
