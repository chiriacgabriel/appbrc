export class CpuCooler {
  id: number;
  productCode: string;
  productName: string;
  serialNumber: string;
  manufacturer: string;
  socket: string;
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
    return 'generate-product-code-cpu-cooler';
  }

  static get generateProductURLSearch(): string {
    return 'generate-product-code-cpu-cooler/search';
  }

  static get productCodeURI(): string {
    return 'product-code-cpu-cooler'
  }
}
