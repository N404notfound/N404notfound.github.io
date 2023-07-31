function janken(myHand) {

    // じゃんけんの手を格納する変数（配列）の用意
    let handArray = ['グー', 'チョキ', 'パー'];

    // じゃんけんの勝敗の文字列を格納する変数（配列）の用意
    let resultArray = ['あいこです', 'あなたの負けです', 'あなたの勝ちです'];

    // プレイヤーの手の決定
    // 　HTML側から引数として渡される
    console.log('プレイヤーの手は：' + handArray[myHand]);

    // コンピュータの手の決定
    // 　ランダムに手を決める
    // 　Math.random()は、0 以上 1 未満の疑似乱数分布から1つ値を取得する
    let rand = Math.random() * 100;
    console.log(rand);

    // Math.floor()は、与えられた引数以下の最大の整数を返す（小数点以下を切り捨てる）
    let randint = Math.floor(rand);
    console.log(randint);

    // 生成したランダムな値を3で割った余りをコンピュータの手とする
    let computerhand = randint % 3;
    console.log('コンピュータの手は:' + handArray[computerhand]);

    // 勝敗判定
    // 　if文？
    // 　勝敗を入れる変数を用意
    let result = 0;

    // 勝敗判定
    if (myHand === 0) {
        if (computerhand === 0){
            result = 0;
        } else if (computerhand === 1){
            result = 2;
        } else if (computerhand === 2){
            result = 1;
        }        
    } else if (myHand === 1){
        if (computerhand === 0){
            result = 1;
        } else if (computerhand === 1){
            result = 0;
        } else if (computerhand === 2){
            result = 2;
        }     

    } else if (myHand === 2){
        if (computerhand === 0){
            result = 2;
        } else if (computerhand === 1){
            result = 1;
        } else if (computerhand === 2){
            result = 0;
        } 

    }

    // 論理演算子を使うパターン
    // if ((myHand === 0) && (computerhand === 0)) {
    //     result = 0;
    // } else if ()
    //  …

    // if文を書かなくてもじゃんけんの勝敗判定はできる
    // result = (myHand - computerHand + 3) % 3;     

    // HTML側に勝敗を表示する
    console.log(resultArray[result]);

    // // 表示したい場所のHTML要素を取得
    // const janken_result = document.querySelector('#janken-result');
    // console.log(janken_result);

    // // 取得したHTML要素のコンテンツ部分を置き換え
    // janken_result.textContent = resultArray[result];

    // $('何を').どう処理するか();
    $('#janken-result').text('あなたの手は' + handArray[myHand] + 'コンピュータの手は' + handArray[computerhand] + 'なので' + resultArray[result]);
}