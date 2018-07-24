import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayingDataComponent } from './displaying-data/displaying-data.component';

const routes: Routes = [
  { path: 'displaying', component: DisplayingDataComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule{};