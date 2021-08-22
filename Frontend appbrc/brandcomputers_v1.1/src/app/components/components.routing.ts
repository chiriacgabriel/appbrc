import {Routes} from '@angular/router';

import {ButtonsComponent} from './buttons/buttons.component';
import {GridSystemComponent} from './grid/grid.component';
import {IconsComponent} from './icons/icons.component';
import {NotificationsComponent} from './notifications/notifications.component';
import {PanelsComponent} from './panels/panels.component';
import {SweetAlertComponent} from './sweetalert/sweetalert.component';
import {TypographyComponent} from './typography/typography.component';
import {CaseComponent} from './case/case.component';
import {ProductCodeCaseComponent} from './case/product-code-case/product-code-case.component';
import {CpuCoolerComponent} from './cpu-cooler/cpu-cooler.component';
import {ProductCodeCpuCoolerComponent} from './cpu-cooler/product-code-cpu-cooler/product-code-cpu-cooler.component';
import {FanCaseComponent} from './fan-case/fan-case.component';
import {ProductCodeFanCaseComponent} from './fan-case/product-code-fan-case/product-code-fan-case.component';
import {MemoryRamComponent} from './memory-ram/memory-ram.component';
import {ProductCodeMemoryRamComponent} from './memory-ram/product-code-memory-ram/product-code-memory-ram.component';
import {MotherboardComponent} from './motherboard/motherboard.component';
import {ProductCodeMotherboardComponent} from './motherboard/product-code-motherboard/product-code-motherboard.component';
import {OpticalUnitComponent} from './optical-unit/optical-unit.component';
import {ProductCodeOpticalUnitComponent} from './optical-unit/product-code-optical-unit/product-code-optical-unit.component';
import {PowerSourceComponent} from './power-source/power-source.component';
import {ProductCodePowerSourceComponent} from './power-source/product-code-power-source/product-code-power-source.component';
import {ProcessorComponent} from './processor/processor.component';
import {ProductCodeProcessorComponent} from './processor/product-code-processor/product-code-processor.component';
import {SoundCardComponent} from './sound-card/sound-card.component';
import {ProductCodeSoundCardComponent} from './sound-card/product-code-sound-card/product-code-sound-card.component';
import {StorageComponent} from './storage/storage.component';
import {ProductCodeStorageComponent} from './storage/product-code-storage/product-code-storage.component';
import {VideoCardComponent} from './video-card/video-card.component';
import {ProductCodeVideoCardComponent} from './video-card/product-code-video-card/product-code-video-card.component';
import {BrokenComponent} from './broken/broken.component';
import {ProductCodeComputerComponent} from '../computer/product-code-computer/product-code-computer.component';


export const ComponentsRoutes: Routes = [{
    path: '',
    children: [{
        path: 'buttons',
        component: ButtonsComponent
    }]
}, {
    path: '',
    children: [{
        path: 'grid',
        component: GridSystemComponent
    }]
}, {
    path: '',
    children: [{
        path: 'icons',
        component: IconsComponent
    }]
}, {
    path: '',
    children: [{
        path: 'notifications',
        component: NotificationsComponent
    }]
}, {
    path: '',
    children: [{
        path: 'panels',
        component: PanelsComponent
    }]
}, {
    path: '',
    children: [{
        path: 'sweet-alert',
        component: SweetAlertComponent
    }]
}, {
    path: '',
    children: [{
        path: 'typography',
        component: TypographyComponent
    }]
}, {
    path: '',
    children: [{
        path: 'case',
        component: CaseComponent,
    }]
}, {
    path: '',
    children: [{
        path: 'product-code-case',
        component: ProductCodeCaseComponent,
    }]
}, {
    path: '',
    children: [{
        path: 'cpu-cooler',
        component: CpuCoolerComponent,
    }]
}, {
    path: '',
    children: [{
        path: 'product-code-cpu-cooler',
        component: ProductCodeCpuCoolerComponent,
    }]
}, {
    path: '',
    children: [{
        path: 'fan-case',
        component: FanCaseComponent,
    }]
}, {
    path: '',
    children: [{
        path: 'product-code-fan-case',
        component: ProductCodeFanCaseComponent,
    }]
}, {
    path: '',
    children: [{
        path: 'memory-ram',
        component: MemoryRamComponent,
    }]
}, {
    path: '',
    children: [{
        path: 'product-code-memory-ram',
        component: ProductCodeMemoryRamComponent,
    }]
}, {
    path: '',
    children: [{
        path: 'motherboard',
        component: MotherboardComponent,
    }]
}, {
    path: '',
    children: [{
        path: 'product-code-motherboard',
        component: ProductCodeMotherboardComponent,
    }]
}, {
    path: '',
    children: [{
        path: 'optical-unit',
        component: OpticalUnitComponent,
    }]
}, {
    path: '',
    children: [{
        path: 'product-code-optical-unit',
        component: ProductCodeOpticalUnitComponent,
    }]
}, {
    path: '',
    children: [{
        path: 'power-source',
        component: PowerSourceComponent,
    }]
}, {
    path: '',
    children: [{
        path: 'product-code-power-source',
        component: ProductCodePowerSourceComponent,
    }]
}, {
    path: '',
    children: [{
        path: 'processor',
        component: ProcessorComponent,
    }]
}, {
    path: '',
    children: [{
        path: 'product-code-processor',
        component: ProductCodeProcessorComponent,
    }]
}, {
    path: '',
    children: [{
        path: 'sound-card',
        component: SoundCardComponent,
    }]
}, {
    path: '',
    children: [{
        path: 'product-code-sound-card',
        component: ProductCodeSoundCardComponent,
    }]
}, {
    path: '',
    children: [{
        path: 'storage',
        component: StorageComponent,
    }]
}, {
    path: '',
    children: [{
        path: 'product-code-storage',
        component: ProductCodeStorageComponent,
    }]
}, {
    path: '',
    children: [{
        path: 'video-card',
        component: VideoCardComponent,
    }]
}, {
    path: '',
    children: [{
        path: 'product-code-video-card',
        component: ProductCodeVideoCardComponent,
    }]
}, {
    path: '',
    children: [{
        path: 'product-code-computer',
        component: ProductCodeComputerComponent
    }]
}, {
    path: '',
    children: [{
        path: 'broken',
        component: BrokenComponent,
    }]
}
];
