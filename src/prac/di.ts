interface Repository {
    save(): void;
}

class UserController {
    constructor(private userService: UserServices){

    }
    save(){
        console.log("User saved")
        this.userService.save();
    }
}


class UserServices{
    constructor(private repo : Repository){

    }
    save(){
        console.log('save uer services')
        this.repo.save();
    }
}

class UserRepository implements Repository {
    save(){
        console.log("User repository")
    }
} 

// class UserController {
//     constructor(private userService: UserServices){

//     }
//     save(){
//         console.log("User saved")
//         this.userService.save();
//     }
// }


// class UserServices{
//     constructor(private userRepository : UserRepository){

//     }
//     save(){
//         console.log('save uer services')
//         this.userRepository.save();
//     }
// }


// class UserRepository {
//     save(){
//         console.log("User repository")
//     }
// } 