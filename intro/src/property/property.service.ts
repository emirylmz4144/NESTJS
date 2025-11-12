import { Injectable } from '@nestjs/common';

@Injectable()
export class PropertyService {
    getAllProperties():string{
        return "Tüm değerler döndürüldü"
    }
    postAProperty():string{
        return "Burada bir post yapılacak"
    }
    
}
