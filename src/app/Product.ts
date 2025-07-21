export interface Product {
    title: string;
    description: string;
    price: number;
    images: {
        image1: string;
        image2:string;
        image3:string;
        image4:string;
    };
    category: string;
    quantity: number;
    id: string;
}