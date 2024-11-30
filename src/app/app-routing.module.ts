import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtractorsPageComponent } from './pages/extractors-page/extractors/extractors-page.component';
import { CreateExtractorsPageComponent } from './pages/extractors-page/create-extractors/create-extractors.page.component';
import { LayoutPageComponent } from './pages/extractors-page/layout-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'extractors', pathMatch: 'full' },
  {
    path: 'extractors',
    component: LayoutPageComponent,
    children: [
      {
        path: '',
        component: ExtractorsPageComponent,
      },
      {
        path: 'create',
        component: CreateExtractorsPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
