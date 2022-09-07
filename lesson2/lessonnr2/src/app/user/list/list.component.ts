import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Billionaire, BillionaireServiceService } from 'src/app/billionaire-service.service';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  billionaires$!: Observable<Billionaire[]>

  constructor(private service: BillionaireServiceService) {
    this.billionaires$ = this.service.getBillionaires();
   }

  ngOnInit(): void {
  }

}
