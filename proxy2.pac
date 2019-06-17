function FindProxyForURL(url, host) {
	if (dnsDomainIs(host, "youtube.com")) {
		return "PROXY 87.226.213.120:8080; PROXY 217.113.122.142:3128";
	}
	return "DIRECT";
}
