import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PropertyService } from './property.service';
@Controller('property')
export class PropertyController {
    constructor(private readonly propertyService: PropertyService) { }

    @Get("all")
    findAll() {
        return this.propertyService.getAllProperties()
    }

    //Belirtilen türde parametreleri döndürür
    @Get(":id/:specified")
    getUserId(@Param("id") id: string, @Param("specified") sprecified: string): string {
        return `id=${id} parametre=${sprecified}`
    }

    //Parametreleri json formatında döndür
    @Post(":id/:specified")
    getUserIdPost(@Param() allParameters) {
        return allParameters
    }

    @Post("all")
    create() {
        return this.propertyService.postAProperty()
    }

    @Post("bodyParameter")
    getBodyOfRequest(@Body() body){
        return body
    }

    @Post("bodyParameterSpecified")
    getBodyOfRequestSpecified(@Body("user") user){
        return user
    }

}
