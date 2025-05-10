import { Product } from './order'

export class Invoice {
    
    generateInvoice(products: Product[], amount: number){
        console.log("Generate Invice from the Data");
        products.forEach((pr) => {
            console.log(pr)
        })
        // console.log(this.calculatePricing())
        console.log("Amouint : ", amount)
    }
}