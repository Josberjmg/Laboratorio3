import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateOrderDetailDto {
    @IsNotEmpty()
    @IsNumber()
    quantity: Number
}
