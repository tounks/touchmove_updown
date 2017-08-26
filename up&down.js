(function(){

     var preHandler = function(e){
          e.preventDefault();
          console.log(1111)
      }
    document.addEventListener('touchmove', preHandler, false);
    document.removeEventListener('touchmove', preHandler, false);
      
    var startX, startY;
      document.addEventListener('touchstart',function (ev) {
        startX = ev.touches[0].pageX;
        startY = ev.touches[0].pageY;

      }, false);

      document.addEventListener('touchend',function (ev) {
        var endX, endY;
        endX = ev.changedTouches[0].pageX;
        endY = ev.changedTouches[0].pageY;
        var direction = GetSlideDirection(startX, startY, endX, endY);
        switch(direction) {
          case 0:
              alert("无操作");
            break;
          case 1:
            // 向上
            alert("up");
            break;
          case 2:
            // 向下
            alert("down");
            break;
    
          default:
        }
      }, false);


      function GetSlideDirection(startX, startY, endX, endY) {
        var dy = startY - endY;
        //var dx = endX - startX;
        var result = 0;
        if(dy>0) {//向上滑动
          result=1;
        }else if(dy<0){//向下滑动
          var preHandler = function(e){
              e.preventDefault();
          }
          document.addEventListener('touchmove', preHandler, false);
          document.removeEventListener('touchmove', preHandler, false);
          result=2;
        }
        else
        {
          result=0;
        }
        return result;
      }                   

})();
