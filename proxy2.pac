function FindProxyForURL(url, host) {

	if (dnsDomainIs(host, "youtube.com")) {
		return "PROXY 185.22.174.68:10010";
	}
	return "DIRECT";
	if (dnsDomainIs(host, "*.facebook.com")) {
		return "PROXY 185.22.174.68:10010";
	}
	return "DIRECT";
}
