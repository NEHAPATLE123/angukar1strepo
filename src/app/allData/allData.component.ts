let cl = console.log;
import { Component, OnInit } from "@angular/core";



@Component({
    selector: "app-allData",
    // selector:"[app-allData]",
    // selector: ".app-allData",
    templateUrl: "./allData.component.html",
    styleUrls: ["./allData.component.scss"]
})

export class AllData implements OnInit{
    pName: string = "Airtel";
    PId: number = 234565;
    sName: string = "kite";
    rName: string = "biggest animal lion";
    array1 : Array<string> = ["html", "css", "js", "ts"];
    isdisable: boolean = true;
    JS: string = " lightweight "
    javascipt: string = "javascript"
    productStatus: string = "No product is added Yet."
    noOfproduct:number = 0;
    searchProductName : string = "No product is search avaialble";
    myName: string = "Neha";
    isDisable: boolean = true;
    isProducdAvailable! : boolean ;

    constructor(){
    }

    ngOnInit(): void {
        setTimeout(() => {
            this.isdisable = false;
        },2000)
    }
    public onImg(){
         return  this.rName
    }

    onJs(){
        return this.JS
    }

    javaScript(){
        return this.javascipt
    }

    onProductSearch(eve:Event) {
        let val = (eve.target as HTMLInputElement).value
        cl(val);
        this.productStatus = val;
        this.searchProductName = val ;
    }

    getProductStatus(){
        cl("btn clicked");
        this.noOfproduct++;
        this.productStatus = `${this.noOfproduct} products are added to the cart.`
       
    }

    removeProductStatus() {
        cl("btn clicked")
        if(this.noOfproduct > 0 ){
            this.noOfproduct --;
            this.productStatus =`${this.noOfproduct} Product is added to the cart`;  
            }
        }

    public getBgColor(){
        return "orange"
        }

        countryinfo : Array<any> = [
            {
                name: "USA",
                population: 331002651,
                area: 9833520,
                capital: "Washington, D.C.",
                language: "English"
            },
            {
                name: "Canada",
                population: 37411047,
                area: 9984670,
                capital: "Ottawa",
                language: "English and French"
            },
            {
                name: "Mexico",
                population: 127575529,
                area: 1964375,
                capital: "Mexico City",
                language: "Spanish"
            },
            {
                name: "France",
                population: 66710000,
                area: 640679,
                capital: "Paris",
                language: "French"
            },
        ]
    }



    
       
   

