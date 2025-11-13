import { IsNotEmpty, Length } from "class-validator";

export class CreateTodoDto {
  @IsNotEmpty()
  @Length(1,50,{message:"Yapılacak işin başlığı 1-50 karakter aralığında olmalıdır"})
  title: string;

  @IsNotEmpty()
  @Length(1,500,{message:"Yapılacak işin açıklaması 1-500 karakter aralığında olmalıdır"})
  description: string;
}
