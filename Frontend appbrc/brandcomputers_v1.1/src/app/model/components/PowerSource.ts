import {EnumState} from '../enum/EnumState';

export class PowerSource {
  id: number;
  productCode: string;
  productName: string;
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
  quantity: number;
  unitOfMeasurement: string;

  static get generateProductURL(): string {
    return 'generate-product-code-power-source';
  }

  static get generateProductURLSearch(): string {
    return 'generate-product-code-power-source/search';
  }

  static get productCodeURI(): string {
    return 'product-code-power-source'
  }
}


