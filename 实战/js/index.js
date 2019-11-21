window.onload=  function(){
  // 生成125个li
  (function(){
    var length= 5*5*5,
      oUl=document.getElementById('list').children[0],
      aLi=oUl.children;
    for( var i=0; i<length; i++){
      var oLi=document.createElement('li');
      oLi.x= i%5;
      oLi.y= Math.floor(i%25/5);
      oLi.z=Math.floor(i/25);
      oLi.innerHTML=i;
      oUl.appendChild(oLi)
    }
    Grid()
      function Grid(){
        var disX=350;
        var disY=350;
        var disZ=800;
        for( var i=0;i<length;i++){
          var oLi=aLi[i], //需要把每个子元素进行遍历
              x = (oLi.x-2) * disX,
              y = (oLi.y-2) * disY;
              z = (oLi.z-2) * disZ;
          oLi.style.transform=`translate3D(${x}px,${y}px,${z}px)`;
        }
      }


  })()
}
  
  function Table(){}
  function Sphere(){}
  function Helix(){}