type Property ={
    name: string,
    price:number,
    location:string,
    images:[],
    description:{
        bedrooms:number,
        bathrooms:number,
        size:number,
    }
}

type Query = {
    type: string,
    location: string,
    minPrice: number,
    maxPrice: number
  }