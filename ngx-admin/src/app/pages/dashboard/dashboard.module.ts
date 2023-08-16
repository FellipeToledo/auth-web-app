import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbTabsetModule,
  NbUserModule,
  NbRadioModule,
  NbSelectModule,
  NbListModule,
  NbIconModule,
} from "@nebular/theme";
import { NgxEchartsModule } from "ngx-echarts";

import { ThemeModule } from "../../@theme/theme.module";
import { DashboardComponent } from "./dashboard.component";

import { KittenComponent } from "./kitten/kitten.component";
import { SecurityCamerasComponent } from "./security-cameras/security-cameras.component";
import { WeatherComponent } from "./weather/weather.component";
import { SolarComponent } from "./solar/solar.component";

import { TrafficComponent } from "./traffic/traffic.component";
import { TrafficChartComponent } from "./traffic/traffic-chart.component";

@NgModule({
  imports: [
    FormsModule,
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbTabsetModule,
    NbActionsModule,
    NbRadioModule,
    NbSelectModule,
    NbListModule,
    NbIconModule,
    NbButtonModule,
    NgxEchartsModule,
  ],
  declarations: [
    DashboardComponent,
    KittenComponent,
    SecurityCamerasComponent,
    WeatherComponent,
    TrafficComponent,
    TrafficChartComponent,
    SolarComponent
  ],
})
export class DashboardModule {}
