import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'; 

export default class CreateUserDto {
    @ApiProperty({type: "string" ,description:"Enter User's Name.", maxLength: 500}) 
    readonly name: string;

    @ApiProperty({type: "string" ,description:"Enter User's username.", maxLength: 500}) 
    readonly username: string;

    @ApiProperty({type: "string" ,description:"Enter User's password.", maxLength: 500}) 
    readonly password: string;

}