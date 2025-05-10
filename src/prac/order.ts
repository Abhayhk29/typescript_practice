// export interface Product {
//     id: string;
//     name: string;
//     price: number;
// }

// A class should have one reason to change
//  basically reason will be same for example if its only change related to the payment or order

export class Product {
    id: string;
    name: string;
    price: number;

    constructor(id:string, name:string, price: number){
        this.id = id;
        this.name = name;
        this.price = price
    }
}

export class Order {
    products : Product[] = [];

    addProduct(product:Product){
        this.products.push(product)
    }

    getProducts(){
        return this.products;
    }

    removeProduct(productId : string){
        this.products = this.products.filter(prd => prd.id !== productId)
    }

    // generateInvoice(){
    //     console.log("Generate Invice from the Data");
    //     // console.log(this.calculatePricing())
    // }

}



