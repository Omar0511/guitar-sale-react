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

// PICK: permite eleguar ciertos elementos de otro TYPE, ejemplo: <TYPE, 'elemento a heredar' | 'mas de 1 elemento'>
// export type CartItem = Pick<Guitar, 'id' 1 'name'> 
// Ponemos las llaves si queremos agregar más elementos
// export type CartItem = Pick<Guitar, 'id' 1 'name'> & {
//   quantity: number
// } 
// OMIT: es lo contrario, los elementos que ingreses los quitará y agregará los demás