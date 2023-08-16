import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbCardModule, NbListModule, NbUserModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ThemeModule,
    NbCardModule,
    NbListModule,
    NbUserModule,
    LayoutRoutingModule,
  ],
  declarations: [
    LayoutComponent,
    ListComponent

  ],
  providers: [
  ],
})
export class LayoutModule { }
