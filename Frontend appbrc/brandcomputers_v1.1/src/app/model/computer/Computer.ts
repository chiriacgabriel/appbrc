export class Computer {

    id: number;
    productCode: string;
    productName: string;
    serialNumber: string;
    manufacturer: string;
    model: string;
    form: string;
    cpuType: string;
    cpuModel: string;
    memoryType: string;
    memoryCapacity: number;
    numberOfDIMM: number;
    memoryFrequency: number;
    storageExist: boolean;
    storageType: string;
    storageCapacity: number;
    opticalUnitExist: boolean;
    opticalUnit: string;
    videoCardExist: boolean;
    videoCard: string;
    soundCardExist: boolean;
    soundCard: string;
    networkCardExist: boolean;
    networkCard: string;
    state: string;
    productInformation: string;
    priceIn: number;
    stock: number;
    dismantled: boolean;
    received: boolean;
    soldAt: Date;
    soldBy: string;
    sold: boolean;
    createdDate: Date;
    createdBy: string;
    lastUpdated: Date;
    updatedBy: string;

    static get generateProductURL(): string {
        return 'generate-product-code-computer';
    }

    static get generateProductURLSearch(): string {
        return 'generate-product-code-computer/search';
    }

    static get productCodeURI(): string {
        return 'product-code-computer'
    }
}
