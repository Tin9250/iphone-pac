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
        return "HTTPS node-jp-00616.mudfish.net:18082";
    }

    return "DIRECT";
}
