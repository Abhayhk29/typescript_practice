import { Order } from "./order"


export class PaymentProcessor{
    processPayment(order: Order){
        console.log('Processing Payment..............')
        console.log('Processing Processed sucessfully..............')
        console.log('Added to Accounting system..............')
        console.log('Email Sent..............')
    }   
}