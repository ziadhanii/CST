var childWin = null;
var timeoutId = null;

function openWindow() {

    if (childWin && !childWin.closed) return;

    childWin = window.open("child.html", "", "width=400,height=300");

    scrollAd();
    closeWindow();
}

function scrollAd() {
    if (!childWin || childWin.closed) return;

    childWin.scrollBy(0, 2);

    childWin.focus();

    timeoutId = setTimeout(scrollAd, 50);
}

function closeWindow() {
    clearTimeout(timeoutId);

    if (childWin && !childWin.closed) {
        childWin.close();
    }

    childWin = null;
}
