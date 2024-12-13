import { IsNotEmpty, IsString } from "class-validator"

export class CreateShipperDto {
    @IsString()
    @IsNotEmpty()
    shipperName:string
    @IsString()
    @IsNotEmpty()
    phone: string
}
