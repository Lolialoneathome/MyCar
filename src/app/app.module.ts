import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { SpecialComponent } from './Buy/Special/special.component';
import { SpecialCollectionComponent } from './Buy/Special/special-collection.component';
import { OrderComponent } from './Buy/Order/order.component';
import { StockComponent } from './Buy/Stock/stock.component';

import { FastSellComponent } from './Sell/FastSell/fast-sell.component';
import { ComissionSellComponent } from './Sell/ComissionSell/comission-sell.component';

import { IndexComponent } from './Index/index.component';
import { OnlineServiceComponent } from './Index/OnlineServices/online-service.component';
import { StaticIndexItemCollection } from './Index/StaticIndexItem/static-index-items-collection';
import { StaticIndexItemComponent } from './Index/StaticIndexItem/static-index-item.component';
import { RedLineTitleComponent } from './Titles/red-line-title.component';
import { GrayLineComponent } from './GrayLine/grayline.component';

import { BestSellersCollectionComponent } from './Index/BestSellers/best-sellers-collection.component';
import { CommentCollectionComponent } from './Index/Comments/comments-collection.component';
import { TradeInComponent } from './AppServices/TradeIn/trade-in.component';
import { ValuationComponent } from './AppServices/Valuation/valuation.component';

import { AboutUsComponent } from './About/Info/about-us.component';
import { ContactsComponent } from './About/Contacts/contacts.component';
import { EmployesComponent } from './About/Employees/employes.component';
import {NewsCollectionComponent} from './About/News/news-collection.component';
import { FeedbackCollectionComponent } from './About/Feedback/feedback-collection.component';

import { TicketFormComponent } from './Ticket/ticket-form.component';
import { TicketFormTradeinComponent } from './Ticket/ticket-form-tradein.component';

import { SocialsComponent } from './Socials/socials.component';
import { APP_BASE_HREF } from '@angular/common';
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
    StaticIndexItemCollection,
    StaticIndexItemComponent,
    BestSellersCollectionComponent,
    CommentCollectionComponent,
    OrderComponent,
    StockComponent,
    FastSellComponent,
    ComissionSellComponent,
    TicketFormComponent,
    TicketFormTradeinComponent,
    TradeInComponent,
    ValuationComponent,
    AboutUsComponent,
    ContactsComponent,
    EmployesComponent,
    NewsCollectionComponent,
    SocialsComponent,
    FeedbackCollectionComponent,
    GrayLineComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
