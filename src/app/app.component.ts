import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'primeng-table';
  rows = '2'
  products = 
  [
    {code: "abcXXX", name: "Test 1", category: "A", quantity: 12},
    {code: "defYYY", name: "Test 2", category: "D", quantity: 40},
    {code: "ghi", name: "Test 3", category: "G", quantity: 6},
  ]

  cols = [
    { field: 'code', header: 'Code' },
    { field: 'name', header: 'Name' },
    { field: 'category', header: 'Category' },
    { field: 'quantity', header: 'Quantity' }
];
}
