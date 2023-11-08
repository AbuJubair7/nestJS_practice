import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getHello(): any {
    return 'Hello user';
  }
}
