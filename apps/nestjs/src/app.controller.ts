import { Controller, Get, Param } from '@nestjs/common';
import { User } from '@react-nestjs/shared';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get('/:name/:age')
    async getUser(@Param('name') name: string, @Param('age') age: number): Promise<User> {
        console.log(name, age);
        return await this.appService.getUser(name, age);
    }
}
