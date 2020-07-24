import { Component, OnInit } from '@angular/core';
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
  quote: Quote;
  constructor(private quoteService: QuoteService) {}

  ngOnInit(): void {
    this.newQuote();
  }

  newQuote(): void {
    this.quoteService.fetchQuotes().subscribe((q: Quote) => (this.quote = q));
  }
}
