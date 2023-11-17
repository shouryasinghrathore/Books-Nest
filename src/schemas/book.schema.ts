import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
export enum Category {
    ADVENTURE = 'Adventure',
    CLASSICS = 'Classics',
    CRIME = 'Crime',
    FANTASY = 'Fantasy',
}

@Schema({
    timestamps: true,
})
export class Book {
    @Prop({ required: true } )
    title: string

    @Prop({ required: true })
    author: string

    @Prop({ required: true })
    description: string

    @Prop({ required: true })
    price: number

    @Prop()
    category: Category
}
export const BookSchema = SchemaFactory.createForClass(Book)