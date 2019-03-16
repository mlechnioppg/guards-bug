import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecondGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('SecondGuard')
    return new Observable((observer: Observer<boolean>) => {
      const handler = setTimeout(() => {
        console.log('setTimeout')
        observer.next(true);
      }, 1000);

      return () => {
        clearTimeout(handler);
      }
    });
  }
}
