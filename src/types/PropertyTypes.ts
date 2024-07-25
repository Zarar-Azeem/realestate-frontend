export type Property ={
    _id:string
    title: string,
    price:number,
    body:string
    images:string[],
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

export type PropertyListProps = {
    properties: Property[];
}