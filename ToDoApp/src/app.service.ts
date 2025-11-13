import { Injectable } from '@nestjs/common';
import { Connection } from 'mysql2';



@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

}
