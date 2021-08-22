import {GenerateProductCode} from './GenerateProductCode';

export class MemoryRam {
  id: number;
  generateProductCode: GenerateProductCode;
  serialNumber: string;
  manufacturer: string;
  module: string;
  ramType: string;
  frequency: string;
  capacity: string;
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
    return 'generate-product-code-memory-ram';
  }

  static get generateProductURLSearch(): string {
    return 'generate-product-code-memory-ram/search';
  }
}