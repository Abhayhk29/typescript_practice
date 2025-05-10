class Bird {
    fly(){
        console.log("Bird is fly")
    }

    makeSound(){
        console.log("its making sound")
    }
}

class Sparrow extends Bird {
    fly(){
        console.log("Sparow is fly")
    }

    makeSound(){
        console.log("TWI TWI")
    }
}

class Penguin extends Bird {
    fly(){
        throw new Error('Penguin cannot fly')
    }

    makeSound(){
        console.log("its making sound wo wow wo wo")
    }
}