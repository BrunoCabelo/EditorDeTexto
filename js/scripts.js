$(()=>{
    $('#negrito').click(()=>{
        $('.text-area').toggleClass('bolder');
        $('#negrito').toggleClass('selected');
    })

    $('#italico').click(()=>{
        $('.text-area').toggleClass('italico');
        $('#italico').toggleClass('selected');
    })

    $('#sublinhado').click(()=>{
        $('.text-area').toggleClass('underline');
        $('#sublinhado').toggleClass('selected');
    })

    
});