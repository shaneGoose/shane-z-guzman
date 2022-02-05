import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreakpointService {

  constructor(private breakpointObserver: BreakpointObserver) { }

  observeHandset(): Observable<BreakpointState> {
    return this.breakpointObserver.observe(Breakpoints.Handset);
  }

  isHandset(): Observable<boolean> {
    return this.observeHandset()
      .pipe(
        map(result => result.matches),
        shareReplay()
      );
  }

  observeTablet(): Observable<BreakpointState> {
    return this.breakpointObserver.observe(Breakpoints.Tablet);
  }

  isTablet(): Observable<boolean> {
    return this.observeTablet()
      .pipe(
        map(result => result.matches),
        shareReplay()
      );
  }
}
