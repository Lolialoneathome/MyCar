// ====== ./app/app.routes.ts ======

// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { SpecialComponent } from './buy/Special/special.component';
import { OrderComponent } from './buy/Order/order.component';
import { StockComponent } from './buy/Stock/stock.component';
import { FastSellComponent } from './sell/FastSell/fast-sell.component';
import { ComissionSellComponent } from './sell/ComissionSell/comission-sell.component';
import { TradeInComponent } from './AppServices/TradeIn/trade-in.component';
import { ValuationComponent } from './AppServices/Valuation/valuation.component';
import { AboutUsComponent } from './About/Info/about-us.component';
import { ContactsComponent } from './About/Contacts/contacts.component';
import { EmployesComponent } from './About/Employees/employes.component';

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
];

// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
