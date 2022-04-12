//関数のテスト
var User = /** @class */ (function () {
    function User() {
    }
    // ここで、引数の型や数が違ったり、戻り値の型が違うと エラーとなる
    User.prototype.getName = function (keisho) {
        return "".concat(this.name, " (").concat(keisho, ")");
    };
    return User;
}());
var user = new User();
user.name = "ebiahra";
console.log(user.getName("さん"));
