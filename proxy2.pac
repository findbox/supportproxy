function FindProxyForURL(url, host) {
	if (dnsDomainIs(host, "youtube.com")) {
		return "PROXY 37.144.148.124:1080; PROXY 1.0.0.1:80";
	}
	return "DIRECT";
}
