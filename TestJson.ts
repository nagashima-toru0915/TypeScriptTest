//テスト用

//TypeScript は、JavaScriptの仕様を拡張したもの
//型定義が使える

//JSON形式テスト
const jsonText = `{
    "games": [
      {
        "title": "Title1",
        "genres": ["ACT"]
      },
      {
        "title": "Title2",
        "genres": ["ACT", "RPG"]
      },
      {
        "title": "Title3",
        "genres": ["STG"],
        "note": "Fantastic shooting game"
      }
    ]
  }`
  
type GameType = {
    title: string
    genres : string[]
    note?: string
};

type GameInfoType = {
    games : GameType[]
}

const gameInfo = JSON.parse(jsonText) as GameInfoType;
gameInfo.games.forEach((game) => {
    console.log(game.title)
    console.log(game.genres)
  })

