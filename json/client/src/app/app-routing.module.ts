import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasketballComponent } from './basketball/basketball.component';
import { StreetwearComponent } from './streetwear/streetwear.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Basketball', component:BasketballComponent }, 
  { path: 'Streetwear', component:StreetwearComponent },
  { path: 'Home', component:HomeComponent }, 
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
