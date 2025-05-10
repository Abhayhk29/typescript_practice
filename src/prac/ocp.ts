
interface IpaymentProcessor {
    processPayment(amount: number): void
}

export class PaymentProcessorOcp {
    processor : IpaymentProcessor;
    constructor(paymentProcessir : IpaymentProcessor){
        this.processor = paymentProcessir; 
    }

    processPayment(amount:number){
        this.processor.processPayment(amount)
        // if(paymentType === 'paypal'){
        //     console.log(`Processing payment of ${amount} from paypal`)
        // } else if(paymentType === 'creditcard'){
        //     console.log(`Processing payment of ${amount} from creditcard`)
        // } else{
        //     throw new Error('Unkon Payment type')
        // }
    }
}

// same we can increase further 
export class CreditCardProcessor implements IpaymentProcessor {
    processPayment(amount: number): void {
        console.log(`Processing payment of ${amount} from credit Card`)
    }
}