let cl = console.log;
import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-products",
    templateUrl: "./products.component.html",
    styleUrls: ["./products.component.scss"]
})
export class ProductsComponent implements OnInit{
    
    isDisable: boolean = true
    prodcutStatus : string = "No product is added yet."
    noOfProducts: number = 0;
    searchProductName:string = " No product is added is search yet";

    ngOnInit(): void {
        setTimeout(() =>{
            this.isDisable = false;
           },3000)
    }

    onProductSearch(eve:Event){
        let val = ((eve.target as HTMLInputElement).value)
        cl(val)
        this.searchProductName = val;
    }

    getProductStatus(){
        cl("btn clciked")
        this.noOfProducts ++;
        this.prodcutStatus = `${this.noOfProducts} product is added to the cart.`
        
    }

    onProductRemove(){
        if(this.noOfProducts > 0 ){
            this.noOfProducts--;
            this.prodcutStatus = `${this.noOfProducts} product is not added to the cart`
        }
    }
 }
       

