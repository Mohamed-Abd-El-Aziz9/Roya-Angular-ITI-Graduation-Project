import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { MainServeicesService } from '../main-serveices.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService, private _MainServeicesService: MainServeicesService) { }

  ngOnInit() {
    this.spinner.show();
    this.getProduct();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
  
  }
  term : string = "" ; 
  productList: any[] = [];
  Comments: any[] = [];
  images: any[] = [];
  getProduct() {
    return this._MainServeicesService.GetAllProduct().subscribe((data) => {
      this.productList = data.data;
      this.Comments = data.data.comments;
      this.images = data.data.images;
      console.log(this.productList);
      console.log(this.images); 
      
    })
  }
}
