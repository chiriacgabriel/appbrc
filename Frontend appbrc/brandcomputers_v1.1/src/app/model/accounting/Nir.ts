import {Provider} from './Provider';
import {Case} from '../components/Case';
import {CpuCooler} from '../components/CpuCooler';
import {FanCase} from '../components/FanCase';
import {MemoryRam} from '../components/MemoryRam';
import {Motherboard} from '../components/Motherboard';
import {OpticalUnit} from '../components/OpticalUnit';
import {PowerSource} from '../components/PowerSource';
import {Processor} from '../components/Processor';
import {SoundCard} from '../components/SoundCard';
import {Storage} from '../components/Storage';
import {VideoCard} from '../components/VideoCard';
import {Computer} from '../computer/Computer';

export class Nir {
    id: number;
    nirNumber: string;
    date: Date;
    administration: string; // gestiune
    provider: Provider;
    invoiceNumber: string;
    caseList: Case[];
    cpuCoolerList: CpuCooler[];
    fanCaseList: FanCase[];
    memoryRamList: MemoryRam[];
    motherboardList: Motherboard[];
    opticalUnitList: OpticalUnit[];
    powerSourceList: PowerSource[];
    processorList: Processor[];
    soundCardList: SoundCard[];
    storageList: Storage[];
    videoCardList: VideoCard[];
    computerList: Computer[];
    debitAccount: string;
    totalValue: number;
    vat: number;

}
