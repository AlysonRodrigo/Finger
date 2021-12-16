import { Document } from "mongoose";

export class Task extends Document {

    nome: String;
    email: String;
    senha: String;
}
