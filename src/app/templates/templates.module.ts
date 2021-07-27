import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TemplatesRoutingModule } from './templates-routing.module';

import { MinimumDirective } from './directives/minimum.directive';

import { BasicFormsComponent } from './components/basic-forms/basic-forms.component';
import { DynamicFormsComponent } from './components/dynamic-forms/dynamic-forms.component';
import { SwitchFormsComponent } from './components/switch-forms/switch-forms.component';

@NgModule({
  declarations: [
    MinimumDirective,
    BasicFormsComponent,
    DynamicFormsComponent,
    SwitchFormsComponent,
  ],
  imports: [CommonModule, FormsModule, TemplatesRoutingModule],
})
export class TemplatesModule {}
