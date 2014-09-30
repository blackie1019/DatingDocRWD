var wpoto_timeout,
    allowRedirect = false,
    preventExitPop = false;

window.onbeforeunload = function warning() {
    if (preventExitPop == false) {
        if (!allowRedirect) {
            wpoto_timeout = setTimeout(function() {
                showExitPop();
            }, 1);
            allowRedirect = true;
            return false;
        }
    }
};
window.unload = function noTimeout() {
    clearTimeout(wpoto_timeout);
    preventExitPop = true;
}

function showExitPop() {
    $('#closeWindowModal').modal('show');
}

function closeWindow() {
    
}

$(function() {

    $('#btnModalStayConfirm').on('click', function() {
        $('#content2').removeClass('hide');
        $('#content1').addClass('hide');;
    });
    $('#btnModalExitConfirm').on('click', function() {
        closeWindow();
    });

});
