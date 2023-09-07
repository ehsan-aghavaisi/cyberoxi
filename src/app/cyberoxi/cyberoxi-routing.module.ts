import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CyberoxiComponent} from "./cyberoxi.component";
import {CyberoxiListComponent} from "./cyberoxi-list/cyberoxi-list.component";
import {CyberoxiDetcilComponent} from "./cyberoxi-detcil/cyberoxi-detcil.component";
import {CyberoxiAddComponent} from "./cyberoxi-add/cyberoxi-add.component";

const routes: Routes = [
  {
    path:"",
    component:CyberoxiComponent,
    children:[
      {
        path:"",
        redirectTo:"cyberoxi-list",
        pathMatch: "full",
      },
      {
        path: "cyberoxi-list",
        component: CyberoxiListComponent,
      },
      {
        path:"cyberoxi-detcil",
        component:CyberoxiDetcilComponent,
      },
      {
        path:"cyberoxi-add",
        component:CyberoxiAddComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CyberoxiRoutingModule { }
