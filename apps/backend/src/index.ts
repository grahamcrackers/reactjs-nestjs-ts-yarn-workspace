import { createUser, showUser, User } from '@react-nestjs/shared';

const user: User = createUser('Graham', 33);

showUser(user);
