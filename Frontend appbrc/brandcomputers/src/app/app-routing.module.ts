import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {PowerSourceComponent} from './components/dashboard/child-components/power-source/power-source.component';
import {GenerateProductCodePowerSourceComponent} from './components/dashboard/child-components/power-source/generate-product-code-power-source/generate-product-code-power-source.component';
import {MotherboardComponent} from './components/dashboard/child-components/motherboard/motherboard.component';
import {GenerateProductCodeMotherboardComponent} from './components/dashboard/child-components/motherboard/generate-product-code-motherboard/generate-product-code-motherboard.component';
import {CaseComponent} from './components/dashboard/child-components/case/case.component';
import {GenerateProductCodeCaseComponent} from './components/dashboard/child-components/case/generate-product-code-case/generate-product-code-case.component';
import {CpuCoolerComponent} from './components/dashboard/child-components/cpu-cooler/cpu-cooler.component';
import {FanCaseComponent} from './components/dashboard/child-components/fan-case/fan-case.component';
import {GenerateProductCodeCpuCoolerComponent} from './components/dashboard/child-components/cpu-cooler/generate-product-code-cpu-cooler/generate-product-code-cpu-cooler.component';
import {GenerateProductCodeFanCaseComponent} from './components/dashboard/child-components/fan-case/generate-product-code-fan-case/generate-product-code-fan-case.component';
import {SoundCardComponent} from './components/dashboard/child-components/sound-card/sound-card.component';
import {GenerateProductCodeSoundCardComponent} from './components/dashboard/child-components/sound-card/generate-product-code-sound-card/generate-product-code-sound-card.component';
import {MemoryRamComponent} from './components/dashboard/child-components/memory-ram/memory-ram.component';
import {GenerateProductCodeMemoryRamComponent} from './components/dashboard/child-components/memory-ram/generate-product-code-memory-ram/generate-product-code-memory-ram.component';
import {OpticalUnitComponent} from './components/dashboard/child-components/optical-unit/optical-unit.component';
import {GenerateProductCodeOpticalUnitComponent} from './components/dashboard/child-components/optical-unit/generate-product-code-optical-unit/generate-product-code-optical-unit.component';
import {ProcessorComponent} from './components/dashboard/child-components/processor/processor.component';
import {GenerateProductCodeProcessorComponent} from './components/dashboard/child-components/processor/generate-product-code-processor/generate-product-code-processor.component';
import {StorageComponent} from './components/dashboard/child-components/storage/storage.component';
import {GenerateProductCodeStorageComponent} from './components/dashboard/child-components/storage/generate-product-code-storage/generate-product-code-storage.component';
import {VideoCardComponent} from './components/dashboard/child-components/video-card/video-card.component';
import {GenerateProductCodeVideoCardComponent} from './components/dashboard/child-components/video-card/generate-product-code-video-card/generate-product-code-video-card.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'dashboard', component: DashboardComponent,
    children: [
      {
        path: 'power-source', component: PowerSourceComponent
      },
      {
        path: 'motherboard', component: MotherboardComponent
      },
      {
        path: 'case', component: CaseComponent
      },
      {
        path: 'cpu-cooler', component: CpuCoolerComponent
      },
      {
        path: 'fan-case', component: FanCaseComponent
      },
      {
        path: 'sound-card', component: SoundCardComponent
      },
      {
        path: 'memory-ram', component: MemoryRamComponent
      },
      {
        path: 'optical-unit', component: OpticalUnitComponent
      },
      {
        path: 'processor', component: ProcessorComponent
      },
      {
        path: 'storage', component: StorageComponent
      },
      {
        path: 'video-card', component: VideoCardComponent
      },
      {
        path: 'generate-product-code-power-source', component: GenerateProductCodePowerSourceComponent
      },
      {
        path: 'generate-product-code-motherboard', component: GenerateProductCodeMotherboardComponent
      },
      {
        path: 'generate-product-code-case', component: GenerateProductCodeCaseComponent
      },
      {
        path: 'generate-product-code-cpu-cooler', component: GenerateProductCodeCpuCoolerComponent
      },
      {
        path: 'generate-product-code-fan-case', component: GenerateProductCodeFanCaseComponent
      },
      {
        path: 'generate-product-code-sound-card', component: GenerateProductCodeSoundCardComponent
      },
      {
        path: 'generate-product-code-memory-ram', component: GenerateProductCodeMemoryRamComponent
      },
      {
        path: 'generate-product-code-optical-unit', component: GenerateProductCodeOpticalUnitComponent
      },
      {
        path: 'generate-product-code-processor', component: GenerateProductCodeProcessorComponent
      },
      {
        path: 'generate-product-code-storage', component: GenerateProductCodeStorageComponent
      },
      {
        path: 'generate-product-code-video-card', component: GenerateProductCodeVideoCardComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
