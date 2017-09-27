



window.onscroll=function(){
    var el=document.getElementById("sign-box");

    var signBox = document.getElementById('sign-box');
    var $signBox = $(signBox);
    var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;


    if(scrollTop>=0 && scrollTop < 350){
        $signBox.fadeIn(1000);
    }
    if(scrollTop >= 350 && scrollTop <= 650){
        $signBox.fadeOut(1000);
    }
    if(scrollTop>650&&scrollTop<=1350)
    {
        $signBox.fadeOut(1000);
    }

    if(scrollTop > 1350){
        $signBox.fadeIn(1000);
    }

}

