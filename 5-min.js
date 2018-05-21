var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function greeter(name) {
    return "Hello " + name;
}
var user = "jane";
var a = [1, 2, 3];
console.log(greeter(a));
;
var greet = function (name) {
    console.log("hello" + name.firstName + name.middleName);
};
// method 1: using "as Name" to avoid error around "sname"
// greet({firstName: 'chen', sname: 'lin'} as Name);
greet({ firstName: 'chen', sname: 'lin' });
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Dog;
}(Animal));
