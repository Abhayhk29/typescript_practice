import  {Product, Order} from './prac/order';
import { PricingCalculator } from './prac/PricingCalculator'
import {Invoice} from './prac/Invoice'
import { PaymentProcessor } from './prac/PaymentProcessor'
import { PaymentProcessorOcp, CreditCardProcessor} from './prac/ocp'

const product1 = new Product('1', 'Laptop', 32323);
const product2 = new Product('2', 'macbook', 33422323);

const order = new Order();

order.addProduct(product1)
order.addProduct(product2)


const pricCal = new PricingCalculator();

const total = pricCal.calculatePricing(order.getProducts())

const invoice = new Invoice();

invoice.generateInvoice(order.getProducts(), total);

const pP = new PaymentProcessor();
// order.generateInvoice();
pP.processPayment(order)
const crp = new CreditCardProcessor();
const pay = new PaymentProcessorOcp(crp);

pay.processPayment(2000)