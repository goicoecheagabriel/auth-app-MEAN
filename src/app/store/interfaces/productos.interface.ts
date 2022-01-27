export interface Producto {
  items?: [];
  id: number;
  sku?: string;
  thumbnailUrl: string;
  name: string;
  price: number;
  defaultDisplayedPrice?: number;
  url: string;
  createTimestamp?: number;
  updateTimestamp?: number;
  enabled: boolean;
  imageUrl: string;
  smallThumbnailUrl?: string;
  hdThumbnailUrl?: string;
  originalImageUrl: string;
  originalImage?: {
    url: string;
    width: number;
    height: number;
  };
  description: string;
  media: {
    images: [
      {
        id: string;
        isMain: boolean;
        orderBy?: number;
        image160pxUrl?: string;
        image400pxUrl?: string;
        image800pxUrl?: string;
        image1500pxUrl?: string;
        imageOriginalUrl: string;
      }
    ];
  };
}
