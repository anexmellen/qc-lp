(function($){
    var endDate = new Date("Apr 21, 2021 00:00:00").getTime();
    setInterval(function() {
        let now = new Date().getTime();
        let t = endDate - now;
        
        if (t >= 0) {
        
            let days = Math.floor(t / (1000 * 60 * 60 * 24));
            let hours = Math.floor((days*24) + ((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
            let secs = Math.floor((t % (1000 * 60)) / 1000);
        
            hours = ("0"+hours).slice(-2)
            mins = ("0"+mins).slice(-2)
            secs = ("0"+secs).slice(-2)
            
            $("#ID23__14__40_").html(`<span>${hours} </span><span style="font-size:13px;">時間 </span><span>${mins} </span><span style="font-size:13px;">分 </span><span>${secs} </span><span style="font-size:13px;">秒</span>`);
        } 
        else {
    
            $("#ID23__14__40_").html('<span>0 </span><span style="font-size:13px;">時間 </span><span>0 </span><span style="font-size:13px;">分 </span><span>0 </span><span style="font-size:13px;">秒</span>');
        
        }
        
    }, 1000);

})(jQuery)