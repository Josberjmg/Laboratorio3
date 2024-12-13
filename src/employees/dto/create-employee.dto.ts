import { IsDate, IsNotEmpty, IsString } from "class-validator"

export class CreateEmployeeDto {
    @IsString()
    @IsNotEmpty()
    lastName: string
    
    @IsString()
    @IsNotEmpty()
    firstName: string
    
    @IsDate()
    @IsNotEmpty()
    birtDate: Date
    
    @IsString()
    @IsNotEmpty()
    city: string
    
    @IsString()
    @IsNotEmpty()
    phone: string
    
    @IsString()
    @IsNotEmpty()
    note: string
}
