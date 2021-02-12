import { Injectable } from '@nestjs/common';
import { createUser, User } from '@react-nestjs/shared';
import { sum } from '@react-nestjs/tsdx';

@Injectable()
export class AppService {
    getUser(name: string, age: number): User {
        const user: User = createUser(name, age);

        return user;
    }

    getSum(a: number, b: number): number {
        return sum(a, b);
    }
}
