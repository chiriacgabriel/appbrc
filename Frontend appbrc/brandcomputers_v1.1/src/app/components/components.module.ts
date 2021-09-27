import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {ButtonsComponent} from './buttons/buttons.component';
import {ComponentsRoutes} from './components.routing';
import {GridSystemComponent} from './grid/grid.component';
import {IconsComponent} from './icons/icons.component';
import {NotificationsComponent} from './notifications/notifications.component';
import {PanelsComponent} from './panels/panels.component';
import {SweetAlertComponent} from './sweetalert/sweetalert.component';
import {TypographyComponent} from './typography/typography.component';
import {CaseComponent} from './case/case.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {NgxPaginationModule} from 'ngx-pagination';
import {CpuCoolerComponent} from './cpu-cooler/cpu-cooler.component';
import {FanCaseComponent} from './fan-case/fan-case.component';
import {MemoryRamComponent} from './memory-ram/memory-ram.component';
import {MotherboardComponent} from './motherboard/motherboard.component';
import {OpticalUnitComponent} from './optical-unit/optical-unit.component';
import {PowerSourceComponent} from './power-source/power-source.component';
import {ProcessorComponent} from './processor/processor.component';
import {SoundCardComponent} from './sound-card/sound-card.component';
import {StorageComponent} from './storage/storage.component';
import {VideoCardComponent} from './video-card/video-card.component';
import {BrokenComponent} from './broken/broken.component';
import {JwBootstrapSwitchNg2Module} from 'jw-bootstrap-switch-ng2';
import {ProductCodeComponent} from './product-code/product-code.component';

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
        CpuCoolerComponent,
        FanCaseComponent,
        MemoryRamComponent,
        MotherboardComponent,
        OpticalUnitComponent,
        PowerSourceComponent,
        ProcessorComponent,
        SoundCardComponent,
        StorageComponent,
        VideoCardComponent,
        BrokenComponent,
        ProductCodeComponent
    ]
})

export class ComponentsModule {
}
