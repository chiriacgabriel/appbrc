export class OpticalUnit {

  id: number;
  productCode: string;
  productName: string;
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
  quantity: number;
  unitOfMeasurement: string;

  static get generateProductURL(): string {
    return 'generate-product-code-optical-unit';
  }

  static get generateProductURLSearch(): string {
    return 'generate-product-code-optical-unit/search';
  }

  static get productCodeURI(): string {
    return 'product-code-optical-unit'
  }
}
