import * as mongoose from 'mongoose';

export const TaskSchemas = new mongoose.Schema({
    nome: String,
    email: String,
    senha: String

})