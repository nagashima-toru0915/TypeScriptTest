//関数のテスト

//インターフェース
interface IUser {
    name: string;
    // １つの文字列の引数、戻り値が文字列の関数を定義している
    getName: (keisho: string) => string;
}

class User implements IUser {
    name: string;
    // ここで、引数の型や数が違ったり、戻り値の型が違うと エラーとなる
    getName (keisho: string) {
        return `${this.name} (${keisho})`;
    }
}

const user = new User();
user.name = "ebiahra";
console.log(user.getName("さん"));