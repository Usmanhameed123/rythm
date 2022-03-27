var btn = document.getElementById('m-btn');
btn.onclick = function () {
    document.getElementById('open-map').remove();
    this.remove();
};