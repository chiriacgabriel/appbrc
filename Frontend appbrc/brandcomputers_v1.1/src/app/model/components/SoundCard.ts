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
  quantity: number;
  unitOfMeasurement: string;

  soldAt: Date;
  soldBy: string;
  sold: boolean;

  createdDate: Date;
  createdBy: string;

  lastUpdated: Date;
  updatedBy: string;
}
