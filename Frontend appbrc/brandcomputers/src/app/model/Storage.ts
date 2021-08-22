export class Storage {
id: number;
productCode: string;
productName: string;
serialNumber: string;
manufacturer: string;
model: string;
type: string;
form: string;
capacity: number;
rpm: number;
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
    return 'generate-product-code-storage';
  }

  static get generateProductURLSearch(): string {
    return 'generate-product-code-storage/search';
  }
}
