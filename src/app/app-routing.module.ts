import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OneComponent } from './pages/one/one.component';
import { TwoComponent } from './pages/two/two.component';
import { FirstGuard } from './guards/first.guard';
import { SecondGuard } from './guards/second.guard';

const guards = [SecondGuard];

const routes: Routes = [{
  path: 'one', component: OneComponent, canActivate: [FirstGuard]
}, {
  path: 'two', component: TwoComponent, canActivate: guards.concat(FirstGuard)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
