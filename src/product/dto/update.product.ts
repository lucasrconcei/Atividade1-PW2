import { PartialType } from "@nestjs/mapped-types";
import { CreateProductDto } from "./create.product";
import { IsNotEmpty } from "class-validator";

export class UpdateProductDto extends PartialType(CreateProductDto) {
    @IsNotEmpty()
    readonly value: number;
}