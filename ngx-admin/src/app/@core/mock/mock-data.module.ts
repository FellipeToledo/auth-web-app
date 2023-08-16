import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserService } from './users.service';
import { SmartTableService } from './smart-table.service';
import { SolarService } from './solar.service';
import { TrafficChartService } from './traffic-chart.service';
import { SecurityCamerasService } from './security-cameras.service';

const SERVICES = [
  UserService,
  SmartTableService,
  SolarService,
  TrafficChartService,
  SecurityCamerasService,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    ...SERVICES,
  ],
})
export class MockDataModule {
  static forRoot(): ModuleWithProviders<MockDataModule> {
    return {
      ngModule: MockDataModule,
      providers: [
        ...SERVICES,
      ],
    };
  }
}
