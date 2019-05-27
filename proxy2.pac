function FindProxyForURL(url, host) {
	if (dnsDomainIs(host, "youtube.com")) {
		return "PROXY 62.33.207.196:80";
	}
	return "DIRECT";
}
