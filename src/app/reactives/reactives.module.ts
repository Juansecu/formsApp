import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ReactivesRoutingModule } from './reactives-routing.module';

import { BasicFormsComponent } from './components/basic-forms/basic-forms.component';
import { DynamicFormsComponent } from './components/dynamic-forms/dynamic-forms.component';
import { SwitchFormsComponent } from './components/switch-forms/switch-forms.component';

@NgModule({
  declarations: [
    BasicFormsComponent,
    DynamicFormsComponent,
    SwitchFormsComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, ReactivesRoutingModule],
})
export class ReactivesModule {}
