import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { QuoteService } from 'src/app/services/quote/quote.service';

interface Quote {
  text: string;
  author: string;
}

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  @Input() color: string;
  @Output() changeColor = new EventEmitter<string>();
  quote: Quote;

  constructor(private quoteService: QuoteService) {}

  ngOnInit(): void {
    console.log('COLOR = ', this.color);

    this.newQuote();
  }

  newQuote(): void {
    this.changeColor.emit();
    this.quote = null;
    this.quoteService.fetchQuotes().subscribe((q: Quote) => {
      this.quote = q;
    });
  }
}
