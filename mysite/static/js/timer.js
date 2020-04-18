$(document).ready(function(){
    let time = 70; //this should always be in seconds
    let timer = $('#timer');
    let setTime;
    $('#inputText').on('keydown', function(){
        setTime = setInterval(decTime,1000);
        $(this).off('keydown');
    });
    function decTime(){
        if(--time < 0){
            timer.text(`  Time over !!!`);
            $('#end').click();
        }
        else timer.text(`${Math.floor(time/60)}m : ${Math.floor(time%60)}s`);
    }

    //End button
    $('#end').click(function(){
        clearInterval(setTime);
    });
});