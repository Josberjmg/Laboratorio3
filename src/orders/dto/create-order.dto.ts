import { IsDate, IsNotEmpty } from "class-validator";

export class CreateOrderDto {
    @IsNotEmpty()
    @IsDate()
    orderDate: Date
}
