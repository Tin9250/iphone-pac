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
        return "PROXY 203.76.245.185:18080";
    }

    return "DIRECT";
}
