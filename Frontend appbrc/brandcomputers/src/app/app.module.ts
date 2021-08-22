import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {authInterceptorProviders} from './helper/authorization.interceptor';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CaseComponent } from './components/dashboard/child-components/case/case.component';
import { MotherboardComponent } from './components/dashboard/child-components/motherboard/motherboard.component';
import { PowerSourceComponent } from './components/dashboard/child-components/power-source/power-source.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {LoadingBarHttpClientModule} from '@ngx-loading-bar/http-client';
import {PowerSourceService} from './services/components/power-source.service';
import {LoginService} from './services/login.service';
import {RegisterService} from './services/register.service';
import {ReloadPageService} from './services/reload-page.service';
import {TokenStorageService} from './services/token-storage.service';
import { GenerateProductCodePowerSourceComponent } from './components/dashboard/child-components/power-source/generate-product-code-power-source/generate-product-code-power-source.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgSelectModule} from '@ng-select/ng-select';
import { GenerateProductCodeMotherboardComponent } from './components/dashboard/child-components/motherboard/generate-product-code-motherboard/generate-product-code-motherboard.component';
import { GenerateProductCodeCaseComponent } from './components/dashboard/child-components/case/generate-product-code-case/generate-product-code-case.component';
import { CpuCoolerComponent } from './components/dashboard/child-components/cpu-cooler/cpu-cooler.component';
import { FanCaseComponent } from './components/dashboard/child-components/fan-case/fan-case.component';
import { GenerateProductCodeCpuCoolerComponent } from './components/dashboard/child-components/cpu-cooler/generate-product-code-cpu-cooler/generate-product-code-cpu-cooler.component';
import { GenerateProductCodeFanCaseComponent } from './components/dashboard/child-components/fan-case/generate-product-code-fan-case/generate-product-code-fan-case.component';
import { SoundCardComponent } from './components/dashboard/child-components/sound-card/sound-card.component';
import { GenerateProductCodeSoundCardComponent } from './components/dashboard/child-components/sound-card/generate-product-code-sound-card/generate-product-code-sound-card.component';
import { MemoryRamComponent } from './components/dashboard/child-components/memory-ram/memory-ram.component';
import { GenerateProductCodeMemoryRamComponent } from './components/dashboard/child-components/memory-ram/generate-product-code-memory-ram/generate-product-code-memory-ram.component';
import { OpticalUnitComponent } from './components/dashboard/child-components/optical-unit/optical-unit.component';
import { GenerateProductCodeOpticalUnitComponent } from './components/dashboard/child-components/optical-unit/generate-product-code-optical-unit/generate-product-code-optical-unit.component';
import { ProcessorComponent } from './components/dashboard/child-components/processor/processor.component';
import { GenerateProductCodeProcessorComponent } from './components/dashboard/child-components/processor/generate-product-code-processor/generate-product-code-processor.component';
import { StorageComponent } from './components/dashboard/child-components/storage/storage.component';
import { GenerateProductCodeStorageComponent } from './components/dashboard/child-components/storage/generate-product-code-storage/generate-product-code-storage.component';
import { VideoCardComponent } from './components/dashboard/child-components/video-card/video-card.component';
import { GenerateProductCodeVideoCardComponent } from './components/dashboard/child-components/video-card/generate-product-code-video-card/generate-product-code-video-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    CaseComponent,
    MotherboardComponent,
    PowerSourceComponent,
    CpuCoolerComponent,
    FanCaseComponent,
    SoundCardComponent,
    MemoryRamComponent,
    GenerateProductCodePowerSourceComponent,
    GenerateProductCodeMotherboardComponent,
    GenerateProductCodeCaseComponent,
    GenerateProductCodeCpuCoolerComponent,
    GenerateProductCodeFanCaseComponent,
    GenerateProductCodeSoundCardComponent,
    GenerateProductCodeMemoryRamComponent,
    OpticalUnitComponent,
    GenerateProductCodeOpticalUnitComponent,
    ProcessorComponent,
    GenerateProductCodeProcessorComponent,
    StorageComponent,
    GenerateProductCodeStorageComponent,
    VideoCardComponent,
    GenerateProductCodeVideoCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    LoadingBarHttpClientModule,
    NgSelectModule,

  ],
  providers: [authInterceptorProviders, PowerSourceService, LoginService, RegisterService, ReloadPageService, TokenStorageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
