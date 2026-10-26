export interface Student {
    id: Number,
    name: String,
    email: String,
    active?: Boolean
}
export const defaultStudent: Student ={
    id: 12,
    name: 'Mina',
    email: 'mina@mail.com',
}