import express from 'express';
import { FileConstroller } from './file-controller';
import { s3Uploader } from './s3-uploader';
import { cloudNary } from './cloudnary';

const app = express();

app.get('/', (req, res) => {
    res.json({ message: 'Hello world!' });
});

app.get('/file-upload', (req,res) =>  {
    const uploader = req.query.uploader;
    console.log(uploader)

    if(uploader === 's3'){
        new FileConstroller(s3Uploader).upload(req, res);
    }else{
        new FileConstroller(cloudNary).upload(req, res);
    }
    // fileConstroller.upload(req, res, {uploader : uploader === 's3' ? s3Uploader : cloudNary})
});
export default app;