console.log('謎解きの次のヒントはここにあるよ')

function omikuji(push){
    let userbutton = ['文字が動くよ'];

    let message = '';

    console.log('「ABOUT ME」をクリックすると' + userbutton);

    let rand = Math.random() * 10;
    console.log(rand);

    let omikujiArray = Math.floor(rand);
    console.log(omikujiArray);

    // let result = 0;

    if (omikujiArray === 0){
        message = '大吉';
    } else if (omikujiArray === 1){
        message = '大吉';
    } else if (omikujiArray === 2){
        message = '中吉';
    } else if (omikujiArray === 3){
        message = '中吉';
    } else if (omikujiArray === 4){
        message = '吉';
    } else if (omikujiArray === 5){
        message = '吉';
    } else if (omikujiArray === 6){
        message = '凶';
    } else if (omikujiArray === 7){
        message = '凶';
    } else if (omikujiArray === 8){
        message = '大凶';
    } else if (omikujiArray === 9){
        message = '大凶';
    } 
    console.log(message);

    const p_omikuji = document.querySelector('#omikuji')
    p_omikuji.textContent = 'あなたの運勢は…' + message + '！';
}