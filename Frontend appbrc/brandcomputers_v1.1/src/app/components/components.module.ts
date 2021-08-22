import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { ButtonsComponent } from './buttons/buttons.component';
import { ComponentsRoutes } from './components.routing';
import { GridSystemComponent } from './grid/grid.component';
import { IconsComponent } from './icons/icons.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { PanelsComponent } from './panels/panels.component';
import { SweetAlertComponent } from './sweetalert/sweetalert.component';
import { TypographyComponent } from './typography/typography.component';
import { CaseComponent } from './case/case.component';
import {NgSelectModule} from '@ng-select/ng-select';
import { ProductCodeCaseComponent } from './case/product-code-case/product-code-case.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { CpuCoolerComponent } from './cpu-cooler/cpu-cooler.component';
import { ProductCodeCpuCoolerComponent } from './cpu-cooler/product-code-cpu-cooler/product-code-cpu-cooler.component';
import { FanCaseComponent } from './fan-case/fan-case.component';
import { ProductCodeFanCaseComponent } from './fan-case/product-code-fan-case/product-code-fan-case.component';
import { MemoryRamComponent } from './memory-ram/memory-ram.component';
import { ProductCodeMemoryRamComponent } from './memory-ram/product-code-memory-ram/product-code-memory-ram.component';
import { MotherboardComponent } from './motherboard/motherboard.component';
import { ProductCodeMotherboardComponent } from './motherboard/product-code-motherboard/product-code-motherboard.component';
import { OpticalUnitComponent } from './optical-unit/optical-unit.component';
import { ProductCodeOpticalUnitComponent } from './optical-unit/product-code-optical-unit/product-code-optical-unit.component';
import { PowerSourceComponent } from './power-source/power-source.component';
import { ProductCodePowerSourceComponent } from './power-source/product-code-power-source/product-code-power-source.component';
import { ProcessorComponent } from './processor/processor.component';
import { ProductCodeProcessorComponent } from './processor/product-code-processor/product-code-processor.component';
import { SoundCardComponent } from './sound-card/sound-card.component';
import { ProductCodeSoundCardComponent } from './sound-card/product-code-sound-card/product-code-sound-card.component';
import { StorageComponent } from './storage/storage.component';
import { ProductCodeStorageComponent } from './storage/product-code-storage/product-code-storage.component';
import { VideoCardComponent } from './video-card/video-card.component';
import { ProductCodeVideoCardComponent } from './video-card/product-code-video-card/product-code-video-card.component';
import { BrokenComponent } from './broken/broken.component';
import {JwBootstrapSwitchNg2Module} from 'jw-bootstrap-switch-ng2';
import {ProductCodeComputerComponent} from '../computer/product-code-computer/product-code-computer.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ComponentsRoutes),
        FormsModule,
        ReactiveFormsModule,
        NgSelectModule,
        NgxPaginationModule,
        JwBootstrapSwitchNg2Module

    ],
    declarations: [
        ButtonsComponent,
        GridSystemComponent,
        IconsComponent,
        NotificationsComponent,
        PanelsComponent,
        SweetAlertComponent,
        TypographyComponent,
        CaseComponent,
        ProductCodeCaseComponent,
        CpuCoolerComponent,
        ProductCodeCpuCoolerComponent,
        FanCaseComponent,
        ProductCodeFanCaseComponent,
        MemoryRamComponent,
        ProductCodeMemoryRamComponent,
        MotherboardComponent,
        ProductCodeMotherboardComponent,
        OpticalUnitComponent,
        ProductCodeOpticalUnitComponent,
        PowerSourceComponent,
        ProductCodePowerSourceComponent,
        ProcessorComponent,
        ProductCodeProcessorComponent,
        SoundCardComponent,
        ProductCodeSoundCardComponent,
        StorageComponent,
        ProductCodeStorageComponent,
        VideoCardComponent,
        ProductCodeVideoCardComponent,
        BrokenComponent,
        ProductCodeComputerComponent
    ]
})

export class ComponentsModule {}
