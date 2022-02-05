import { Component, OnInit } from '@angular/core';
import { Observable, timeout } from 'rxjs';
import { BreakpointService } from 'src/app/services/breakpoint.service';
import { boolTimeout } from 'src/app/shared/observables/timeOut';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  isDelaying$!: Observable<boolean>;
  isHandset$: Observable<boolean> = this.breakpointService.isHandset();

  constructor(private breakpointService: BreakpointService) {}
  
  ngOnInit(): void {
    this.isDelaying$ = boolTimeout(3_000, true);
  }

}
