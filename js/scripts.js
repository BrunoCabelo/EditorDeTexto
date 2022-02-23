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
    
    $('#direita').click(()=>{
        $('.text-area').css('text-align', 'right');
        $('#direita').toggleClass('selected');
        $('#centro').removeClass('selected');
        $('#esquerda').removeClass('selected');
    })
    
    $('#centro').click(()=>{
        $('.text-area').css('text-align', 'center');
        $('#centro').toggleClass('selected');
        $('#direita').removeClass('selected');
        $('#esquerda').removeClass('selected');
    })
    
    $('#esquerda').click(()=>{
        $('.text-area').css('text-align', 'left');
        $('#esquerda').toggleClass('selected');
        $('#centro').removeClass('selected');
        $('#direita').removeClass('selected');
    })
    
    
    $('#font-size').change(()=>{
        var tamanho = $('#font-size').val() + 'px';
        $('.text-area').css('font-size', tamanho);
    })
    
});