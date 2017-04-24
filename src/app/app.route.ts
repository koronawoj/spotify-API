import { Routes, RouterModule } from '@angular/router';

const routesConfig:Routes = [
  {path:'', redirectTo:'music', pathMatch:'full'},
  {path:'**', redirectTo:'music', pathMatch:'full'},
]

export const routerModule = RouterModule.forRoot(routesConfig, {
  
})
