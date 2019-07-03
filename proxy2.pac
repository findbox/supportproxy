function FindProxyForURL(url, host) {
	if (dnsDomainIs(host, "youtube.com")) {
		return "PROXY 178,169.64.76:8081; PROXY 199.21.99.145:80";
	}
	return "DIRECT";
}
