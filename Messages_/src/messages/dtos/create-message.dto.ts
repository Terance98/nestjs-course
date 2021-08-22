import { IsString } from 'class-validator';

// DTO stands for Data Transfer Object
// DTOs is the Pipe layer of Nest which will actually perform validation over the input data
export class CreateMessageDto {
  @IsString()
  content: string;
}
