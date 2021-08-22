import {GenerateProductCode} from './GenerateProductCode';

export class Motherboard{

  id: number;
  generateProductCode: GenerateProductCode;
  serialNumber: string;
  manufacturer: string;
  model: string;
  formFactor: string;
  socket: string;
  numberOfSockets: number;
  chipset: string;
  numberOfSlotMemoryRAM: number;
  maxMemoryRAM: number;
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
    return 'generate-product-code-motherboard';
  }

  static get generateProductURLSearch(): string {
    return 'generate-product-code-motherboard/search';
  }
}
