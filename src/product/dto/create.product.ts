import { Transform } from "class-transformer";
import { IsBoolean, IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";

export class CreateProductDto {
    @IsString({message: "Campo name deve ser uma string"})
    @MaxLength(50)
    @IsNotEmpty()
    @Transform(({value}) => value.toUpperCase())
    readonly name: string;

    @IsNumber()
    @IsNotEmpty()
    readonly value: number;

    @IsBoolean()
    @IsNotEmpty()
    readonly status: boolean;
} 