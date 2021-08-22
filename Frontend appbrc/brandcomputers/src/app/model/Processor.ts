export class Processor {
  id: number;
  productCode: string;
  productName: string;
  manufacturer: string;
  socket: string;
  model: string;
  baseClock: number;
  maxBoostClock: number;
  typeOfMemoryRAM: string;
  maxMemoryFrequency: number;
  numberOfCpuCores: number;
  numberOfThreads: number;
  cache: number;
  coolerIncluded: boolean;
  lithography: number;
  thermalDesignPower: number;
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
    return 'generate-product-code-processor';
  }

  static get generateProductURLSearch(): string {
    return 'generate-product-code-processor/search';
  }
}
