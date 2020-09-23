window.addEventListener('DOMContentLoaded',function(){
  //外部ライブラリを一覧表示用に読み込んでいます
  new SmartPhoto(".js-smartPhoto");

  const photoArea = document.getElementsByClassName('js-gallery')[0];
  //いらないhrが自動補完されるのでそれを消す
    var hr = photoArea.getElementsByTagName('hr');
    for (var i = 0; i < hr.length; i++) {
      hr[i].remove();
    };

  //写真の枚数を調べる
  const photoNum = photoArea.childElementCount;

  //galleryの大きさを決める
  let size = photoArea.clientWidth = 700; //ここで調整できます
  photoArea.style.width = photoArea.style.height = size+'px';
  const border = 5; //scssのboederも書き換えがいる
  const imgList = photoArea.getElementsByTagName('img');

  switch (true) {
    case photoNum === 1:
      break;
    case photoNum === 2:
      if(imgList[0].width===imgList[0].height && imgList[1].width===imgList[1].height){
        //二枚とも正方形の時
        photoArea.style.height = size/2;
        photoArea.setAttribute('id' , 'flex');
        imgList[0].width = imgList[0].height = imgList[1].width = imgList[1].height = (size-border*4)/2;
      }else if (imgList[0].width>=imgList[0].height && imgList[1].width>=imgList[1].height) {
        //横の調整
        imgList[0].width = imgList[1].width = size-border*2;
        //縦の調整
        imgList[0].height = imgList[1].height = (size-border*4)/2;
      }else{
        //一つでも縦長がある時
        photoArea.setAttribute('id' , 'flex');
        //横の調整
        imgList[0].width = imgList[1].width = (size-border*4)/2;
        //縦の調整
        imgList[0].height = imgList[1].height = size-border*2;
      };
      break;
    case photoNum === 3:
      if (imgList[0].height>=imgList[0].width) {
        //1枚目が縦長の時
        photoArea.setAttribute('id' , 'flex-wrap-column');
        //横の調整
        imgList[0].width = imgList[1].width = imgList[2].width = (size-border*4)/2;
        //縦の調整
        imgList[0].height = size-border*2;
        imgList[1].height = imgList[2].height = (size-border*4)/2;

      }else{
        //1枚目が横長の時
        photoArea.setAttribute('id' , 'flex-wrap');
        //横の調整
        imgList[0].width = size-border*2;
        imgList[1].width = imgList[2].width = (size-border*4)/2;
        //縦の調整
        imgList[0].height = imgList[1].height = imgList[2].height = (size-border*4)/2;
      }

      break;
    case photoNum === 4:
      if(imgList[0].width===imgList[0].height && imgList[1].width===imgList[1].height && imgList[2].width===imgList[2].height && imgList[3].width===imgList[3].height){
        //全部正方形
        photoArea.setAttribute('id' , 'flex-wrap');
        imgList[0].width = imgList[0].height = imgList[1].width = imgList[1].height = imgList[2].width = imgList[2].height = imgList[3].width = imgList[3].height = (size-border*4)/2;
      }else if (imgList[0].height>=imgList[0].width) {
        //1枚目が縦長の時
        photoArea.setAttribute('id' , 'flex-wrap-column');
        //横の調整
        imgList[0].width = size - ((size - border * 6)/3) - border * 4;
        imgList[1].width = imgList[2].width = imgList[3].width = (size - border * 6)/3;
        //縦の調整
        imgList[0].height = size-border*2;
        imgList[1].height = imgList[2].height = imgList[3].height = (size - border * 6)/3 ;
      }else{
        //1枚目が横長の時
        photoArea.setAttribute('id' , 'flex-wrap');
        //横の調整
        imgList[0].width = size-border*2;
        imgList[1].width = imgList[2].width = imgList[3].width = (size - border * 6)/3 ;
        //縦の調整
        imgList[0].height = size - ((size - border * 6)/3) - border * 4;
        imgList[1].height = imgList[2].height = imgList[3].height = (size - border * 6)/3;
      }
      break;
    case photoNum === 5:
      photoArea.setAttribute('id' , 'flex-wrap-column');
      //横の調整
      for (let i = 0; i < 5; i++) {
        imgList[i].width = (size - border * 4)/2;
      };
      //縦の調整
      imgList[0].height = imgList[1].height = (size - border * 4)/2;
      for (let i = 2; i < 5; i++) {
        imgList[i].height = (size - border * 6)/3;
      };
      break;
    case photoNum >= 6:
      photoArea.setAttribute('id' , 'flex-wrap-column');
      //横の調整
      for (let i = 0; i < 5; i++) {
        imgList[i].width = (size - border * 4)/2;
      };
      //縦の調整
      imgList[0].height = imgList[1].height = (size - border * 4)/2;
      for (let i = 2; i < 5; i++) {
        imgList[i].height = (size - border * 6)/3;
      };
      //余った写真
      for (var i = 5; i < photoNum; i++) {
        imgList[i].setAttribute('class' , 'none');
      };
      //数字を表示
      const overNumber = document.createElement('p');
      overNumber.textContent = '+' + (photoNum - 5);
      overNumber.setAttribute('id','overNumber');
      imgList[4].parentNode.parentNode.setAttribute('id','relativePhoto');
      imgList[4].insertAdjacentElement('afterend',overNumber);

      //フォントの調整
      let fontStyle = {
        'font-size' : size/5+'px',
        'line-height' : size/5+'px',
      };
      let overNumberStyle = document.getElementById('overNumber').style;
      for(let property in fontStyle){
        overNumberStyle[property] = fontStyle[property];
      };

      //位置の調整
      let locationStyle = {
        'top': imgList[4].height/2 + border - size/5/2 + 'px',
        'left': imgList[4].width/2 + border - overNumber.getBoundingClientRect().width/2 +'px',
      };
      for(let property in locationStyle){
        overNumberStyle[property] = locationStyle[property];
      };
      break;

    default:
        console.log('写真が登録されていません');
  };

});
