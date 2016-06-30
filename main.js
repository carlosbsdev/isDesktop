function esDispositivoMovil() {
    if (/Android|android|webOS|webos|iPhone|iphone|iPad|ipad|iPod|ipod|BlackBerry|blackBerry|IEMobile|iemobile|opera mini|Opera Mini/i.test(navigator.userAgent)) {
        return true;
    } else {
        return false;
    }
}
