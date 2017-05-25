import { Component, ViewEncapsulation } from '@angular/core';
import { OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  public isNavDetailsShow: boolean = false;
  public isNavDetailsHowered = false;
  public isBuyVisible = false;
  public isSellVisible = false;
  public isServicesVisible = false;
  public isAboutVisible = false;
  mouseEnter(div : string){
        console.log("mouse enter : " + div);
        this.isNavDetailsShow = true;
        switch (div)
        {
         case "Buy":
           this.isBuyVisible = true;
           break;
         case "Sell":
           this.isSellVisible = true;
           break;
         case "Services":
           this.isServicesVisible = true;
           break;
         case "About":
           this.isAboutVisible = true;
           break;
         }
     }

     mouseLeave(div : string){

     }

     mouseEnterDetailedNav(div : string){

       this.isNavDetailsHowered = true;
     }

     mouseLeaveDetailedNav(div : string){

       this.isNavDetailsShow = false;
       this.isNavDetailsHowered = false;
       this.isBuyVisible = false;
       this.isSellVisible = false;
       this.isServicesVisible = false;
       this.isAboutVisible = false;
     }

     constructor(public router: Router) {}

     ngOnInit(): void {
       this.router.navigateByUrl('/index');
     }
}
