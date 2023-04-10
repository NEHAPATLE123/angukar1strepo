let cl = console.log;
import { Component, OnInit } from "@angular/core";


@Component({
    selector: "app-product",
    // selector: "[app-product]",
    // selector: ".app-product",
    templateUrl: "./product.component.html",

    // template:`
    //     <p class="info">
    //         This is Products {{pName}} with ID {{pId}} and status is {{pStatus}} 
    //     </p>`,
    //using only 1 or 2 line html then use inline templating

    styleUrls: ["./product.component.scss"]

//     styles : [`
//             .info{
//                 border: 10px;
//                 padding: 1px sold #ededed;
//                 border-radius: 5px;
//                 background-color: #ededed;
//             }  
//     `]

})

export class ProductComponent implements OnInit {
   
    pName: string = "Samsung 31";
    pId : number = 123;
    pStatus: string = "In-Transition"
    isProductAvilable!  : boolean

    constructor(){
    }

    ngOnInit(): void {
       cl('Product comp is init')
      this.isProductAvilable = Math.random() > 0.5 ? true : false;
      
    }

    public getProductId(){
       return this.pId
    }
    
    public getBgColor(){
        // return this.isProductAvilable ? 'orange' : '#ccc'
        // if(this.isProductAvilable){
        //     return "orange"
        // }else{
        //     return "#ccc"
        // }
    }
}

//web-development >> repeat and repeat use



