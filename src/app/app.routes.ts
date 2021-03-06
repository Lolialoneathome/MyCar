// ====== ./app/app.routes.ts ======

// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './Index/index.component';
import { SpecialComponent } from './Buy/Special/special.component';
import { OrderComponent } from './Buy/Order/order.component';
import { StockComponent } from './Buy/Stock/stock.component';
import { FastSellComponent } from './Sell/FastSell/fast-sell.component';
import { ComissionSellComponent } from './Sell/ComissionSell/comission-sell.component';
import { TradeInComponent } from './AppServices/TradeIn/trade-in.component';
import { ValuationComponent } from './AppServices/Valuation/valuation.component';
import { AboutUsComponent } from './About/Info/about-us.component';
import { ContactsComponent } from './About/Contacts/contacts.component';
import { EmployesComponent } from './About/Employees/employes.component';
import {NewsCollectionComponent} from './About/News/news-collection.component';
import { FeedbackCollectionComponent } from './About/Feedback/feedback-collection.component';

// Route Configuration
export const routes: Routes = [
  { path: 'buy_special', component: SpecialComponent },
  { path: 'buy_order', component: OrderComponent },
  { path: 'buy_stock', component: StockComponent },
  { path: 'sell_fast', component: FastSellComponent },
  { path: 'sell_com', component: ComissionSellComponent },
  { path: 'tradein', component: TradeInComponent },
  { path: 'valuation', component: ValuationComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'employes', component: EmployesComponent },
  { path: 'index', component: IndexComponent },
  { path: 'news', component: NewsCollectionComponent },
  { path: 'feedback', component: FeedbackCollectionComponent },
];

// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
