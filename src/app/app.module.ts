import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './components/quote/quote.component';
import { IconsModule } from './icons/icons.module';
import { BlockquoteComponent } from './components/blockquote/blockquote.component';
import { IcongridComponent } from './components/icongrid/icongrid.component';

@NgModule({
  declarations: [AppComponent, QuoteComponent, BlockquoteComponent, IcongridComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, IconsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
