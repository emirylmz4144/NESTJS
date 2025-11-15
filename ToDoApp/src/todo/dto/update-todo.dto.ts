import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, Length } from "class-validator";

export class UpdateTodoDto {
  @ApiProperty()
  @IsNotEmpty()
  @Length(1,50,{message:"Yapılacak işin başlığı 1-50 karakter aralığında olmalıdır"})
  title: string;

  @ApiProperty()
  @IsNotEmpty()
  @Length(1,500,{message:"Yapılacak işin açıklaması 1-500 karakter aralığında olmalıdır"})
  description: string;
}
