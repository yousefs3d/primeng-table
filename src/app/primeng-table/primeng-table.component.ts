import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-primeng-table',
  templateUrl: './primeng-table.component.html',
  styleUrls: ['./primeng-table.component.scss']
})
export class PrimengTableComponent implements OnInit {
  @Input() cols: any[];
  @Input() data = [];
  @Input() rows: string = '0';
  constructor() { }

  ngOnInit(): void {

  }

}
