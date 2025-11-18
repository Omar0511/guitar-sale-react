export type Guitar = {
    id: number
    name: string
    image: string
    description: string
    price: number
}

// export type CartItem = {
//     id: number
//     name: string
//     image: string
//     description: string
//     price: number
//     quantity: number
// }

// Al agregar Guitar &, estamos heredando las propiedades de Guitar
export type CartItem = Guitar & {
    quantity: number
}

// Herencia en un INTERFACE
// export interface CartItem extends Guitar & {
//     quantity: number
// }

// export type CartItem = Pick<Guitar, 'id' | 'name' | 'price' > & {
//     quantity: number
// }
// export type CartItem = Omit<Guitar, 'id' | 'name' | 'price' > & {
//     quantity: number
// }

