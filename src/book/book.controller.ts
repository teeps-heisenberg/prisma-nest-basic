import { Body, Get, Param, Post, Delete, Put, Controller } from "@nestjs/common";
import { Book } from "./book.model";
import { BookService } from "./book.service";

@Controller('/book')
export class BookController{
    constructor(private readonly bookService:BookService){}

    @Get()
    async getAllBooks():Promise<Book[]>{
        return this.bookService.getAllBooks();
    }

    @Get(':id')
    async getBookById(@Param('id') id:number):Promise<Book | null>{
        return this.bookService.getBook(id);
    }

    @Post()
    async postBook(@Body() postData:Book):Promise<Book>{
        return this.bookService.createBook(postData);
    }

    @Delete(':id')
    async deleteBook(@Param('id') id:number):Promise<Book>{
        return this.bookService.deleteBook(id);
    }

    @Put(':id')
    async updateBook(@Param('id') id:number, @Body() postData:Book):Promise<Book>{
        return this.bookService.updateBook(id,postData);
    }

}