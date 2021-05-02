const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(); //adminを初期化
const db = admin.firestore(); //admin権限でfirestoreを操作
//定数dbに入れておくことで使い回しできる。

//レスポンスを返すための関数
const sendResponse = (response, statusCode, body) => {
  response.send({
    statusCode,
    body: JSON.stringify(body),
  });
};

//データをfirestoreに追加する関数
//https:onRequestメソッドで関数作成
exports.addDataset = functions.https.onRequest(
  // コールバック関数
  async (req, res) => {
    // req.methodが"POST"のじゃない時はエラーを返す
    if (req.method !== 'POST') {
      sendResponse(res, 405, { error: 'Invalid Request' });
    } else {
      // データを追加するので基本はこっち
      // req.methodが"POST"の時
      const dataset = req.body;
      // const key = Object.keys(dataset);
      // const movieNotes = dataset[key]; //配列
      dataset.movieNotes.map(async (data) => {
        //data=配列の中のオブジェクト
        await db.collection('movieNotes').add(data);
      });
      sendResponse(res, 200, {
        message: 'Successfully added dataset! WooHoo!',
      });
    }
  }
);