import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent implements OnInit {
    displayedColumns: string[] = ['number', 'name', 'secondName', 'thirdName'];
    dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}

export interface PeriodicElement {
  name: string;
  number: number;
  secondName: string;
  thirdName: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {number: 1, name: 'Ivan', secondName:'Ivanov', thirdName: 'Ivanovi4'},
  {number: 2, name: 'Petr', secondName: 'Petrov', thirdName: 'Petrovi4'},
  {number: 3, name: 'Semen', secondName: 'Semenov', thirdName: 'Semenovi4'},

];

/**
 * @title Basic use of `<table mat-table>`
 */
