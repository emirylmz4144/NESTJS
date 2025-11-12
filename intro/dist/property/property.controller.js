"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyController = void 0;
const common_1 = require("@nestjs/common");
const property_service_1 = require("./property.service");
let PropertyController = class PropertyController {
    propertyService;
    constructor(propertyService) {
        this.propertyService = propertyService;
    }
    findAll() {
        return this.propertyService.getAllProperties();
    }
    getUserId(id, sprecified) {
        return `id=${id} parametre=${sprecified}`;
    }
    getUserIdPost(allParameters) {
        return allParameters;
    }
    create() {
        return this.propertyService.postAProperty();
    }
    getBodyOfRequest(body) {
        return body;
    }
    getBodyOfRequestSpecified(user) {
        return user;
    }
};
exports.PropertyController = PropertyController;
__decorate([
    (0, common_1.Get)("all"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PropertyController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":id/:specified"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Param)("specified")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", String)
], PropertyController.prototype, "getUserId", null);
__decorate([
    (0, common_1.Post)(":id/:specified"),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PropertyController.prototype, "getUserIdPost", null);
__decorate([
    (0, common_1.Post)("all"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PropertyController.prototype, "create", null);
__decorate([
    (0, common_1.Post)("bodyParameter"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PropertyController.prototype, "getBodyOfRequest", null);
__decorate([
    (0, common_1.Post)("bodyParameterSpecified"),
    __param(0, (0, common_1.Body)("user")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PropertyController.prototype, "getBodyOfRequestSpecified", null);
exports.PropertyController = PropertyController = __decorate([
    (0, common_1.Controller)('property'),
    __metadata("design:paramtypes", [property_service_1.PropertyService])
], PropertyController);
//# sourceMappingURL=property.controller.js.map