function FindProxyForURL(url, host) {
	if (dnsDomainIs(host, "youtube.com")) {
		return "PROXY 212.237.36.234:3128";
	}
	return "DIRECT";
}
