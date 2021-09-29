export class GenerateProductCode {
  id: number;
  productCode: string;
  productName: string;
  createdDate: Date;
  state: boolean;

  static get searchProductCodeURI(): string {
    return 'product-code/search';
  }

  static get productCodeURI(): string {
    return 'product-code/'
  }

}
