function FindProxyForURL(url, host) {
	if (dnsDomainIs(host, "youtube.com")) {
		return "PROXY 137.135.94.29:80; PROXY 137.135.94.29:80";
	}
	return "DIRECT";
}
