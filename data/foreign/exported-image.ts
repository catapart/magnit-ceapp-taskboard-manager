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
        }
    }
}