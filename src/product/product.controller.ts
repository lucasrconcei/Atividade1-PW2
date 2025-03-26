import { Body, Controller, Delete, Get, HttpException, HttpStatus, NotFoundException, Param, Patch, Post, Put, Query } from "@nestjs/common";
import { ProductService } from "./product.service";
import { CreateProductDto } from "./dto/create.product";

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService){};

    @Get()
    findAll(): string {
        return this.productService.getAllProduct();
    }

    @Get('erro')
    error(): string{
        throw new HttpException(
            "Página não encontrada",
            HttpStatus.NOT_FOUND
        )
    }

    @Get('erro-e')
    errorException(): string{
        throw new NotFoundException("Página não encontrada");
    }

    @Get("search")
    search(@Query('color') color:string): string {
        return `Produto da cor ${color}`;
    }

    @Get(':id')
    findOne(@Param('id') id:string): string {
        return `Valor recebido é ${id}`;
    }

    @Get(':id/:nome')
    findTwo(@Param('id') id:string, @Param('nome') nome:string): string {
        return `id: ${id} - nome: ${nome}`;
    }

    @Get('all/tudo/outro')
    getName(@Query('nome') nome:string): string {
        return nome;
    }

    @Get('teste/tudo/outro')
    getName2(@Query('idade') nome:string): string {
        return nome;
    }

    @Post()
    create(@Body() createProductDto: CreateProductDto): any{
        return this.productService.create(createProductDto);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() body: any): any {
        return body
    } 

    @Patch(':id')
    updatePart(@Param('id') id: string, @Body() body: any): any {
        return body
    }

    @Delete(':id')
    delete(@Param('id') id: string):  string {
        return `Produto ${id} excluído com sucesso`;
    }
}