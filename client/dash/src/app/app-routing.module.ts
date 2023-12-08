import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CriminelsComponent } from './components/criminels/criminels.component';
import { CriminelcrudComponent } from './components/criminelcrud/criminelcrud.component';
import { CriminelAddComponent } from './components/criminel-add/criminel-add.component';
import { CriminelListComponent } from './components/criminel-list/criminel-list.component';
import { CrimineleditComponent } from './components/crimineledit/crimineledit.component';

const routes: Routes = [
  {path : 'dashboard',component: DashboardComponent},
  {path :"criminels",component :CriminelsComponent},
  {path:'criminelcrud',component:CriminelcrudComponent},
  {path:"add",component:CriminelAddComponent},
  {path:"listCriminels",component:CriminelListComponent},
  {path:"editCriminel/:id",component:CrimineleditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
