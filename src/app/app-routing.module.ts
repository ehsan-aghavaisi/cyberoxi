import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    redirectTo: "cyberoxi",
    pathMatch : "full",
  },
  {
    path: "cyberoxi",
    loadChildren : () => import('./cyberoxi/cyberoxi.module').then((m)=> m.CyberoxiModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
