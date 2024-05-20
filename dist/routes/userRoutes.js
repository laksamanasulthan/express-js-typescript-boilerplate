"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const express_validator_1 = require("express-validator");
const router = (0, express_1.Router)();
router.post('/register', [
    (0, express_validator_1.body)('name').isLength({ min: 1 }),
    (0, express_validator_1.body)('email').isEmail(),
    (0, express_validator_1.body)('password').isLength({ min: 6 })
], userController_1.register);
router.post('/login', [
    (0, express_validator_1.body)('email').isEmail(),
    (0, express_validator_1.body)('password').isLength({ min: 6 })
], userController_1.login);
router.get('/', function (req, res) {
    return res.json({ "Helloworld": "Hellowowrd" });
});
exports.default = router;
