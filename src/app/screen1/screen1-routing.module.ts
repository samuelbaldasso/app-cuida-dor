import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Screen1Component } from '../screen1/screen1.component';

const routes: Routes = [

  {
    path: 'screen1', component: Screen1Component
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Screen1RoutingModule {}
