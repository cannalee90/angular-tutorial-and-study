import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayingDataComponent } from './displaying-data/displaying-data.component';
import { TemplateSyntaxComponent } from './template-syntax/template-syntax.component';

const routes: Routes = [
  { path: 'displaying', component: DisplayingDataComponent },
  { path: 'template', component: TemplateSyntaxComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule{};