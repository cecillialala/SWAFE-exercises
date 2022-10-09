import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HostsService, Host } from '../hosts.service';
import { select, Store } from '@ngrx/store';
import { AppState } from '../state/app-state';
import { loadHosts } from '../state/hosts.actions';

@Component({
  selector: 'app-hosts',
  templateUrl: './hosts.component.html',
  styleUrls: ['./hosts.component.scss']
})
export class HostsComponent {

  //hosts$: Observable<ReadonlyArray<Host>>;

  /*constructor(private hosts: HostsService) { 
    this.hosts$ = this.hosts.getHosts()}
  */
    hosts$: Observable<ReadonlyArray<Host>> = this.store.select('hosts');

    constructor(private store: Store<AppState>) {  }
  
    ngOnInit(): void {
      this.store.dispatch(loadHosts())
    }
}

