export interface Todo {
    id?: number;
    title?: string;
    description?: string;
    [key: number]: string;
}