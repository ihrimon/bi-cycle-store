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
exports.orderService = void 0;
const order_model_1 = __importDefault(require("./order.model"));
// Create a new Order for Bicycle
const orderBicycle = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.default.create(payload);
    return result;
});
// Get all Orders
const getAllOrders = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.default.find();
    return result;
});
// Get a specific order by ID
const getSpecificOrder = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.default.findById(id);
    return result;
});
// Update a order by ID with new data
const updatedOrder = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.default.findByIdAndUpdate(id, data, { new: true });
    return result;
});
// Delete a order by ID
const deletedOrder = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.default.findByIdAndDelete(id);
    return result;
});
exports.orderService = {
    orderBicycle,
    getAllOrders,
    getSpecificOrder,
    updatedOrder,
    deletedOrder,
};
