window.onunload = window.onbeforeunload = (function() {
    closeWindow()
});
$('#closeWindowModal').modal('show');
$(function() {
    function closeWindow() {
        $('#closeWindowModal').modal('show');
    }
});
