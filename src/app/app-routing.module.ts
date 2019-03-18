import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OneComponent } from './pages/one/one.component';
import { TwoComponent } from './pages/two/two.component';
import { FirstGuard } from './guards/first.guard';
import { SecondGuard } from './guards/second.guard';

const guards = [FirstGuard];

const routes: Routes = [{
  path: 'one', component: OneComponent, canActivate: [FirstGuard].concat(SecondGuard)
}, {
  path: 'two', component: TwoComponent, canActivate: [...guards, SecondGuard]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
