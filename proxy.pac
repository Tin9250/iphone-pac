function FindProxyForURL(url, host) {
    host = host.toLowerCase();

    if (
        host === "e621.net" ||
        host === "www.e621.net" ||
        host === "kemono.cr" ||
        host === "www.kemono.cr" ||
        host === "pawchive.pw" ||
        host === "www.pawchive.pw"
    ) {
        return "PROXY 103.27.185.213:18080";
    }

    return "DIRECT";
}
