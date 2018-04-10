function FindProxyForURL(url, host) {

	if (dnsDomainIs(host, "youtube.com")) {
		return "PROXY 185.22.174.68:10010";
	}
	return "DIRECT";
}
