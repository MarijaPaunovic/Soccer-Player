$(function () {
    function movePlayer(event) {
        $('#player').css('left', event.clientX + 'px');
        $('#player').css('top', event.clientY + 'px');
    }

    $('.bodyDiv').on('click', movePlayer);

    $('.stop-button').on('click', function () {
        $('.bodyDiv').off('click', movePlayer);
    })

    $('.refresh-button').on('click', function () {
        $('.bodyDiv').on('click', movePlayer);
    })

})