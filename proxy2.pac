function FindProxyForURL(url, host) {
	if (dnsDomainIs(host, "youtube.com")) {
		return "PROXY 185.148.82.160:3128";
	}
	return "DIRECT";
}
