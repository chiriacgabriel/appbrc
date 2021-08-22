export class SoundCard{
  id: number;

  productCode: string;
  productName: string;
  serialNumber: string;
  manufacturer: string;
  model: string;
  priceIn: string;
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
    return 'generate-product-code-sound-card';
  }

  static get generateProductURLSearch(): string {
    return 'generate-product-code-sound-card/search';
  }
}
