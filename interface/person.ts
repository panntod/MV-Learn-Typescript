// Contoh Interface person
export interface Person {
    firstName: string;
    lastName: string;
    age: number;
    greet(message: string): void;
}