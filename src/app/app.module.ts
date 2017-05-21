import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { SpecialComponent } from './buy/Special/special.component';
import { SpecialCollectionComponent } from './buy/Special/special-collection.component';
import { OrderComponent } from './buy/Order/order.component';
import { StockComponent } from './buy/Stock/stock.component';

import { FastSellComponent } from './sell/FastSell/fast-sell.component';
import { ComissionSellComponent } from './sell/ComissionSell/comission-sell.component';

import { IndexComponent } from './index/index.component';
import { OnlineServiceComponent } from './index/OnlineServices/online-service.component';
import { StaticIndexItemComponent } from './index/StaticIndexItem/static-index-item.component';
import { RedLineTitleComponent } from './titles/red-line-title.component';
import { BestSellersCollectionComponent } from './index/BestSellers/best-sellers-collection.component';
import { CommentCollectionComponent } from './index/Comments/comments-collection.component';
import { TradeInComponent } from './AppServices/TradeIn/trade-in.component';
import { ValuationComponent } from './AppServices/Valuation/valuation.component';

import { AboutUsComponent } from './About/Info/about-us.component';
import { ContactsComponent } from './About/Contacts/contacts.component';
import { EmployesComponent } from './About/Employees/employes.component';

import { TicketFormComponent } from './Ticket/ticket-form.component';

import { routing } from './app.routes';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    SpecialComponent,
    SpecialCollectionComponent,
    IndexComponent,
    RedLineTitleComponent,
    OnlineServiceComponent,
    StaticIndexItemComponent,
    BestSellersCollectionComponent,
    CommentCollectionComponent,
    OrderComponent,
    StockComponent,
    FastSellComponent,
    ComissionSellComponent,
    TicketFormComponent,
    TradeInComponent,
    ValuationComponent,
    AboutUsComponent,
    ContactsComponent,
    EmployesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [RedLineTitleComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
