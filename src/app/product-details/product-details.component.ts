import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainServeicesService } from '../main-serveices.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  currentId: number = 0;
  ProductDetails: any = {};
  userId: any = localStorage.getItem("UserID");
  userName: any = localStorage.getItem("Name");

  constructor(private _MainServeicesService: MainServeicesService, private _ActivatedRoute: ActivatedRoute) {
    this.currentId = this._ActivatedRoute.snapshot.params.id;
  }
  GetProductByID() {

    this._MainServeicesService.GetProductById(this.currentId).subscribe((data) => {

      this.ProductDetails = data;
      console.log(data);

    })
  }
  addProductToFavouritList() {
    let Object = {
      userId: this.userId,
      productId: this.ProductDetails.id
    }
    console.log(this.userId);
    this._MainServeicesService.AddProductToFavoritList(Object).subscribe((data) => {
      console.log(data); 
 
     });
  }
  AddProductToBooking() {
    let formData = new FormData();
    formData.append("UserId" , this.userId );
    formData.append("UserEmail" ,  "string" );
    formData.append("userName" , this.userName);
    formData.append("ProductId" , this.ProductDetails.id );
    formData.append("ProductName" , this.ProductDetails.name );
    formData.append("Image" , this.ProductDetails?.images[0] );

    this._MainServeicesService.AddProductToBooking(formData).subscribe((data) => {
     console.log(data); 

    });
    console.log(formData); 
  }



ngOnInit(): void {
  this.GetProductByID();
}
}


