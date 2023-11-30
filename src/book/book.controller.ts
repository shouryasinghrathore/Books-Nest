import { Body, Controller, Delete, Get, Param, Post,Put } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from 'src/schemas/book.schema';
import { CreateBookDto } from './dto/create-book';
import { UpdateBookDto } from './dto/update-book';

@Controller('book')
export class BookController {
    constructor(private bookService: BookService) { }

    @Get()
    async getAllBooks(): Promise<Book[]> {
        return this.bookService.findAll();

    }
    @Get(':id')
    async getBook(
        @Param('id')
        id: string
    ): Promise<Book> {
        return this.bookService.findById(id);
    }
    
    @Delete(':id')
    async deleteBook(
        @Param('id')
        id: string
    ): Promise<Book> {
        return this.bookService.findByIdDelete(id);
    }

    @Post()
    async createBook(
        @Body()
        book: CreateBookDto
    ): Promise<Book> {
        const books = this.bookService.createBook(book);
        return books;
    }

    @Put(":id")
    async updateBook(
        @Param('id')
        id:string,
        @Body()
        book: UpdateBookDto
    ): Promise<Book> {
        const books = this.bookService.updateById(id,book);
        return books;
    }

}
