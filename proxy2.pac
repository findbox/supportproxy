function FindProxyForURL(url, host) {
	if (dnsDomainIs(host, "youtube.com")) {
		return "PROXY 176.111.10.136:55063; PROXY 176.31.69.180:1080";
	}
	return "DIRECT";
}
