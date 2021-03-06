import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'; 

export default class CreateItemDto {
    @ApiProperty({type: "string" ,description:"Enter Item's Name.", maxLength: 500}) 
    readonly name: string;

    @ApiProperty({type: "number" ,description:"Enter Item's Task Id."}) 
    readonly taskId: number;

    @ApiPropertyOptional({type: "date" ,description:"Enter Item's due date if such thing exists."}) 
    readonly dueDate: Date;


}