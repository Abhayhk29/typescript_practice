import { Request, Response } from "express";

export const s3Uploader = {
    // upload: (req : Request, res: Response) => {
    //     res.json({message: " From s3 s3 bucket"})
    // }

    upload : async (filname : string) => {

        // 
        console.log(`Uploading file to the s3 bucket ${filname}`)
        return true;
    }
}