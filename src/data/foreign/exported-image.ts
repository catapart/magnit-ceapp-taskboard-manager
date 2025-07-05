import { extendableType, toBase64 } from "../data";
import { CustomImageRecord } from "../records/custom-image.record";

export type ExportedImage = Partial<CustomImageRecord> &
{
    image_base64?: string;
}

export class ImageExport extends extendableType<ExportedImage>()
{
    constructor(image?: CustomImageRecord)
    {
        super();

        Object.assign(this, image);
    }
    async loadImage()
    {
        if(this.image != null)
        {
            this.image_base64 = await toBase64(this.image);
            if(this.image instanceof File)
            {
                if(this.image.name.endsWith('jpg') || this.image.name.endsWith('jpeg'))
                {
                    this.image_base64 = this.image_base64.replace("application/octet-stream", "image/jpg");
                }
                else if(this.image.name.endsWith('png'))
                {
                    this.image_base64 = this.image_base64.replace("application/octet-stream", "image/png");
                }
                else if(this.image.name.endsWith('webp'))
                {
                    this.image_base64 = this.image_base64.replace("application/octet-stream", "image/webp");
                }
                else if(this.image.name.endsWith('gif'))
                {
                    this.image_base64 = this.image_base64.replace("application/octet-stream", "image/gif");
                }
            }
        }
    }
}