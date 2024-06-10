export type Property ={
    _id:string
    title: string,
    price:number,
    body:string
    // images:[],
    description:{
        location:string,
        bedrooms:number,
        bathrooms:number,
        size:number,
    },
    userId: string
}

export type CreateProperty = {
    error: any
    success : boolean
    property: Property
}

type Query = {
    type: string,
    location: string,
    minPrice: number,
    maxPrice: number
  }
 export type PropertyListProps = {
    properties: Property[];
   }