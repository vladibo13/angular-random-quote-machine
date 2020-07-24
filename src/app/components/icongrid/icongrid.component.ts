import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icongrid',
  templateUrl: './icongrid.component.html',
  styleUrls: ['./icongrid.component.css'],
})
export class IcongridComponent implements OnInit {
  @Input() color: string;
  constructor() {}

  ngOnInit(): void {}
}
