class BaseRole {
    getRole(){
        console.log("User Role")
    }
}


class User{
    getAccessLevel(){
      console.log("user level ")
    }

    getRole(){
        console.log("User Role")
    }
}
class Admin extends User {
    getAccessLevel(): void {
        console.log("Admin access level")
    }

    getRole(): void {
        console.log("Admin Role")
    }
}

class Manager extends User {
    getAccessLevel(): void {
        console.log("manager access level")
    }

    getRole(): void {
        console.log("Manager role")
    }
}

class Customer extends User {
    getAccessLevel(): void {
        throw new Error('Not available')
    }

    getRole(): void {
        console.log("Customer role")
    }
}
