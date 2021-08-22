export class VideoCard {
  id: number;
  productCode: string;
  productName: string;
  serialNumber: string;
  manufacturer: string;
  model: string;
  memory: number;
  profile: string;
  vga: boolean;
  hdmi: boolean;
  dvi: boolean;
  displayPort: boolean;
  numberOfPortsVGA: number;
  numberOfPortsHDMI: number;
  numberOfPortsDVI: number;
  numberOfPortsDisplayPort: number;
  typeOfMemory: string;
  numberOfBits: number;
  series: string;
  priceIn: number;
  productInformation: string;
  state: string;
  soldAt: Date;
  soldBy: string;
  sold: boolean;
  createdDate: Date;
  createdBy: string;
  lastUpdated: Date;
  updatedBy: string
  quantity: number;
  unitOfMeasurement: string;

  static get generateProductURL(): string {
    return 'generate-product-code-video-card';
  }

  static get generateProductURLSearch(): string {
    return 'generate-product-code-video-card/search';
  }

  static get productCodeURI(): string {
    return 'product-code-video-card'
  }
}

