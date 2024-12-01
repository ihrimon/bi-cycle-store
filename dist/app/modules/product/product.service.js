"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productService = void 0;
const product_model_1 = __importDefault(require("./product.model"));
// Create a new Bicycle product
const createBicycle = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.create(payload);
    return result;
});
// Get all Bicycle products
const getAllBicycles = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.find();
    return result;
});
// Get a specific Bicycle product by ID
const getSpecificBicyle = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.findById(id);
    return result;
});
// Update a Bicycle product by ID with new data
const updatedBicycle = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.findByIdAndUpdate(id, data, { new: true });
    return result;
});
// Delete a Bicycle product by ID
const deletedBicycle = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.findByIdAndDelete(id);
    return result;
});
exports.productService = {
    createBicycle,
    getAllBicycles,
    getSpecificBicyle,
    updatedBicycle,
    deletedBicycle,
};
