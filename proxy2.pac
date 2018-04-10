function FindProxyForURL(url, host) {

	if (dnsDomainIs(host, "youtube.com")) {
		return "PROXY 193.41.76.125:8081";
	}
	return "DIRECT";
}
