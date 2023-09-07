import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CyberoxiRoutingModule } from './cyberoxi-routing.module';
import { CyberoxiComponent } from './cyberoxi.component';
import { CyberoxiListComponent } from './cyberoxi-list/cyberoxi-list.component';
import { CyberoxiDetcilComponent } from './cyberoxi-detcil/cyberoxi-detcil.component';
import { CyberoxiAddComponent } from './cyberoxi-add/cyberoxi-add.component';


@NgModule({
  declarations: [
    CyberoxiComponent,
    CyberoxiListComponent,
    CyberoxiDetcilComponent,
    CyberoxiAddComponent
  ],
  imports: [
    CommonModule,
    CyberoxiRoutingModule
  ]
})
export class CyberoxiModule { }
