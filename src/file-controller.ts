import { Request, Response } from "express";
import { s3Uploader } from "./s3-uploader";

interface Uploader {
    upload : (filename : string) => Promise<boolean>
}


export class FileConstroller {

    constructor(private uploader: Uploader){
    }
    
    upload(req: Request, res: Response){

        this.uploader.upload('vaishnav.iskcon')
        res.json({message : "chant and be happy"})
    } 
}
// export const fileConstroller = {
//     upload: async (req: Request, res: Response, { uploader }: {uploader: Uploader}) => {

//         await uploader.upload('vaishnav.iskcon')
//         res.json({message : "chant and be happy"})
//     }
// }