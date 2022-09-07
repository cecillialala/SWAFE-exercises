import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillionaireServiceService {

  getBillionaires(): Observable<Billionaire[]> {
    return of(this.billionaires)
  }

  getBillionaire(uid: number): Observable<Billionaire> {
    return of(this.billionaires[uid])
  }
  
  billionaires: Billionaire[] = [{ 
    name: 'Bill Gates',
    net_worth: 111000000000,
    nationality: 'US',
  }, {
    name: 'Jeff Bezos',
    net_worth: 155300000000,
    nationality: 'US',
  }, {
    name: 'Elon Musk',
    net_worth: 257300000000,
    nationality: 'US',
  }, {
    name: 'Mark Zuckerberg',
    net_worth: 58200000000,
    nationality: 'US',
  }, {
    name: 'Russ Hanneman',
    net_worth: 986000000
  }, {
    name: 'Jack Ma',
    net_worth: 24000000000
  }]
}

export interface Billionaire {
  name: string;
  net_worth: number;
  nationality?: string;
}