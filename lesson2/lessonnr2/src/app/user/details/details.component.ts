import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
import { Billionaire, BillionaireServiceService } from 'src/app/billionaire-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

paramMap$: Observable<Billionaire>
  
  constructor(private service: BillionaireServiceService, private route: ActivatedRoute) { 
    this.paramMap$ = this.route.paramMap.pipe(switchMap(p => this.service.getBillionaire(Number(p.get("id")))));
  }

  ngOnInit(): void {
  }

}
