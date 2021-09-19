import {GenerateProductCode} from './GenerateProductCode';

export class Case {
    id: number;
    generateProductCode: GenerateProductCode;
    serialNumber: string;
    manufacturer: string;
    caseType: string;
    compatibleMotherboard: string;
    powerSourceIncluded: boolean;
    sourcePower: string;
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

    constructor(obj) {
        this.id = obj.id;
        this.generateProductCode = obj.generateProductCode;
        this.serialNumber = obj.serialNumber;
        this.manufacturer = obj.manufacturer;
        this.caseType = obj.caseType;
        this.compatibleMotherboard = obj.compatibleMotherboard;
        this.powerSourceIncluded = obj.powerSourceIncluded;
        this.sourcePower = obj.sourcePower;
        this.priceIn = obj.priceIn;
        this.productInformation = obj.productInformation;
        this.state = obj.state;
        this.soldAt = obj.soldAt;
        this.soldBy = obj.soldBy;
        this.sold = obj.sold;
        this.createdDate = obj.createdDate;
        this.createdBy = obj.createdBy;
        this.lastUpdated = obj.lastUpdated;
        this.updatedBy = obj.updatedBy;
        this.quantity = obj.quantity;
        this.unitOfMeasurement = obj.unitOfMeasurement;
    }
}
