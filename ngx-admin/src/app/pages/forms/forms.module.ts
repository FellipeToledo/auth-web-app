import { NgModule } from '@angular/core';
import { NbCardModule, NbInputModule } from '@nebular/theme';

import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { FormInputsComponent } from './form-inputs/form-inputs.component';

@NgModule({
  imports: [
    NbInputModule,
    NbCardModule,
    FormsRoutingModule,
  ],

  declarations: [
    FormsComponent,
    FormInputsComponent,
  ],
})
export class FormsModule { }
