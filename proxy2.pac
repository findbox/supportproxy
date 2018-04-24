function FindProxyForURL(url, host) {
	if (dnsDomainIs(host, "youtube.com")) {
		return "PROXY 80.73.161.241:8080";
	}
	return "DIRECT";
}
