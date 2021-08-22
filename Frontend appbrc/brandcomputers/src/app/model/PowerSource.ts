import {EnumState} from './enum/EnumState';
import {GenerateProductCode} from './GenerateProductCode';

export class PowerSource{
  id: number;
  generateProductCode: GenerateProductCode;
  serialNumber: string;
  manufacturer: string;
  model: string;
  power: number;
  sourceType: string;
  priceIn: number;
  averagePrice: number;
  productInformation: string;
  state: string;
  createdDate: Date;
  createdBy: string;
  lastUpdated: Date;
  updatedBy: string;

  static get generateProductURL(): string {
    return 'generate-product-code-power-source';
  }

  static get generateProductURLSearch(): string {
    return 'generate-product-code-power-source/search';
  }
}


