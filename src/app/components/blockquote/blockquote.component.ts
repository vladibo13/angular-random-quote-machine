import { Component, OnInit, Input } from '@angular/core';
import Quote from 'src/app/models/quote';

@Component({
  selector: 'app-blockquote',
  templateUrl: './blockquote.component.html',
  styleUrls: ['./blockquote.component.css'],
})
export class BlockquoteComponent implements OnInit {
  @Input() quote: Quote;
  constructor() {}

  ngOnInit(): void {}
}
