export class FanCase {
  id: number;
  productCode: string;
  productName: string;
  serialNumber: string;
  manufacturer: string;
  dimension: string;
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
  quantity: number;
  unitOfMeasurement: string;

  static get generateProductURL(): string {
    return 'generate-product-code-fan-case';
  }

  static get generateProductURLSearch(): string {
    return 'generate-product-code-fan-case/search';
  }

  static get productCodeURI(): string {
    return 'product-code-fan-case'
  }
}
