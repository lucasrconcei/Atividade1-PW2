import { Injectable } from "@nestjs/common";
import { ProductEntity } from "./entities/product.entity";
import { CreateProductDto } from "./dto/create.product";

@Injectable()
export class ProductService {

    private lastid = 1;

    private products: ProductEntity[] = [
        {
            id: 1, 
            name: 'Vassoura', 
            value: 10.45, 
            status: true
        }
    ]

    getAllProduct(): any {
        return this.products;
    }

    create(createProductDto: CreateProductDto) {
        this.lastid ++;
        const id = this.lastid;
        const newProduct = {
            id,
            ...createProductDto
        };
        this.products.push(newProduct);

        return {message: `Produto ${id} cadastrado`}
    }
}