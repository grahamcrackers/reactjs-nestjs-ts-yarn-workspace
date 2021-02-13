import { Injectable } from '@nestjs/common';
import { createUser, User } from '@react-nestjs/shared';

@Injectable()
export class AppService {
    getUser(name: string, age: number): User {
        const user: User = createUser(name, age);

        return user;
    }
}
