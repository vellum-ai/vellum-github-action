"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@actions/core");
try {
    var testSuiteId = (0, core_1.getInput)("test-suite-id");
    var path = (0, core_1.getInput)("path");
    console.log("Send output from ".concat(path, " to test suite ").concat(testSuiteId));
}
catch (error) {
    (0, core_1.setFailed)(error.message);
}
