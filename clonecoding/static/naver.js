function pre(){
    if($('input[id*=slide02]:checked').val()){
        $("#slide01").prop('checked',true);
    }
    if($('input[id*=slide03]:checked').val()){
        $("#slide02").prop('checked',true);
    }
    if($('input[id*=slide04]:checked').val()){
        $("#slide03").prop('checked',true);
    }
}

function next() {
    if($('input[id*=slide03]:checked').val()){
        $("#slide04").prop('checked',true);
    }
    if($('input[id*=slide02]:checked').val()){
        $("#slide03").prop('checked',true);
    }
    if($('input[id*=slide01]:checked').val()){
        $("#slide02").prop('checked',true);
    }
    
}

function pre_1(){
    if($('input[id*=slide2]:checked').val()){
        $("#slide1").prop('checked',true);
    }
    if($('input[id*=slide3]:checked').val()){
        $("#slide2").prop('checked',true);
    }
    if($('input[id*=slide4]:checked').val()){
        $("#slide3").prop('checked',true);
    }
    if($('input[id*=slide5]:checked').val()){
        $("#slide4").prop('checked',true);
    }
    if($('input[id*=slide6]:checked').val()){
        $("#slide5").prop('checked',true);
    }
}

function next_1() {
    if($('input[id*=slide5]:checked').val()){
        $("#slide6").prop('checked',true);
    }
    if($('input[id*=slide4]:checked').val()){
        $("#slide5").prop('checked',true);
    }
    if($('input[id*=slide3]:checked').val()){
        $("#slide4").prop('checked',true);
    }
    if($('input[id*=slide2]:checked').val()){
        $("#slide3").prop('checked',true);
    }
    if($('input[id*=slide1]:checked').val()){
        $("#slide2").prop('checked',true);
    }
    
}

var time = 5;

var x = setInterval(function(){
    time--;
    if (time < 0){
        if($('input[id*=slide003]:checked').val()){
            $("#slide001").prop('checked',true);
        }
        if($('input[id*=slide002]:checked').val()){
            $("#slide003").prop('checked',true);
        }
        if($('input[id*=slide001]:checked').val()){
            $("#slide002").prop('checked',true);
        }
        time = 5;
    }
    
},1000)

