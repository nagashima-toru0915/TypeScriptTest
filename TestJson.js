//テスト用
//TypeScript は、JavaScriptの仕様を拡張したもの
//型定義が使える
//JSON形式テスト
var jsonText = "{\n    \"games\": [\n      {\n        \"title\": \"Title1\",\n        \"genres\": [\"ACT\"]\n      },\n      {\n        \"title\": \"Title2\",\n        \"genres\": [\"ACT\", \"RPG\"]\n      },\n      {\n        \"title\": \"Title3\",\n        \"genres\": [\"STG\"],\n        \"note\": \"Fantastic shooting game\"\n      }\n    ]\n  }";
var gameInfo = JSON.parse(jsonText);
gameInfo.games.forEach(function (game) {
    console.log(game.title);
    console.log(game.genres);
});
