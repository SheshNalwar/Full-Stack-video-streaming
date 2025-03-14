import { v2 as cloudinary } from 'cloudinary';
import { log } from 'console';
import fs from "fs"

// Configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET_KEY
});


const uploadFileOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null

        //upload file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        }) //file has been uploaded successfully
        //console.log("File is uploaded on cloudinary", response.url);
        // console.log(response);
        fs.unlinkSync(localFilePath)
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath) //remove the locally saved temperory file as the upload operation failed

        return null
    }
}


export { uploadFileOnCloudinary }