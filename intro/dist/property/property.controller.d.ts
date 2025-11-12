import { PropertyService } from './property.service';
export declare class PropertyController {
    private readonly propertyService;
    constructor(propertyService: PropertyService);
    findAll(): string;
    getUserId(id: string, sprecified: string): string;
    getUserIdPost(allParameters: any): any;
    create(): string;
    getBodyOfRequest(body: any): any;
    getBodyOfRequestSpecified(user: any): any;
}
