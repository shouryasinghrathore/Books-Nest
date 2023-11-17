import { Body, Controller, Get, Post } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from 'src/schemas/book.schema';
import { CreateBookDto } from './dto/create-book';

@Controller('book')
export class BookController {
    constructor(private bookService: BookService) { }

    @Get()
    async getAllBooks(): Promise<Book[]> {
        const books = await this.bookService.findAll();
        return books;
    }

    @Post()
    async createBook(
        @Body()
        book:CreateBookDto
    ): Promise<Book> {
        const books = await this.bookService.createBook(book);
        return books;
    }

}
