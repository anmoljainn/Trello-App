"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useElementRef = void 0;
var react_1 = require("react");
var util_1 = require("./util");
var useElementRef = function (_a) {
    var containerClassName = _a.containerClassName, containerStyle = _a.containerStyle, id = _a.id;
    var ref = (0, react_1.useRef)();
    var element = (0, react_1.useMemo)(function () { return (0, util_1.createContainer)({ containerStyle: containerStyle, containerClassName: containerClassName, id: id }); }, [containerClassName, containerStyle, id]);
    ref.current = element;
    return ref;
};
exports.useElementRef = useElementRef;
//# sourceMappingURL=useElementRef.js.map