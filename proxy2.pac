function FindProxyForURL(url, host) {
	if (dnsDomainIs(host, "youtube.com")) {
		return "PROXY 40.114.52.188:80; PROXY 176.31.69.180:1080";
	}
	return "DIRECT";
}
