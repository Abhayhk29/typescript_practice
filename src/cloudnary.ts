import { Request, Response } from "express";

export const cloudNary = {
    // upload: (req : Request, res: Response) => {
    //     res.json({message: " From s3 s3 bucket"})
    // }

    upload : async (filname : string) => {

        // 
        console.log(`Uploading file to the cloudnary bucket ${filname}`)
        return true;
    }
}