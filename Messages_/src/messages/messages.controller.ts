import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  /**
   * We are using public messagesService here so that we don't have to explicitly declare the variable above.
   * We also don't have to do the this.messagesService = messagesService inside the constructor since Nest does it via dependency injection by default.
   * Also the we don't have to explicitly pass an Instance of MessageService to the MessagesController class or for any dependant class for that matter. Nest will automatically create and instance and pass in.
   * Nest maintains a dependancy injection controller where it will keep the record of which classes are dependant on which other classes.
   */
  constructor(public messagesService: MessagesService) {}

  @Get()
  listMessages() {
    return this.messagesService.findAll();
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return this.messagesService.create(body.content);
  }

  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    const message = await this.messagesService.findOne(id);
    if (!message) throw new NotFoundException('message not found!');
    return message;
  }
}
