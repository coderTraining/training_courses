$(document).ready(function() {
    var pages = [
    ];
    
    var currentPage = location.pathname;
    var pageIndex = pages.indexOf(currentPage);
    if (pageIndex != -1) {
        if (pageIndex > 0) {
            addSide('left', pages[pageIndex-1]);
        }
        if (pageIndex < pages.length-1) {
            addSide('right', pages[pageIndex+1]);
        }
    }
    function addSide(type, url) {
        $html = "<div class='side side-" + type + "'>" +
            "<a href='" + url + "'><i class='fa fa-lg fa-chevron-" + type + "'></i></a>" +
            "</div>";
        $('body').append($html);
    }
});
