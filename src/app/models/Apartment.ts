interface ApartmentType {
    rooms: number,
    bathrooms: number  
}

export interface Apartment {
    suiteNumber: number,
    floorNumber: number,
    details: ApartmentType,
    availability: boolean
}