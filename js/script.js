window.addEventListener('DOMContentLoaded',function(){
  //外部ライブラリを一覧表示用に読み込んでいます
  new SmartPhoto(".js-smartPhoto");
  new Gallery('js-gallery',{
    SIZE:700,
    BORDER:30,
    BORDERCOLOR:'white'
  });
});
