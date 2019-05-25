function FindProxyForURL(url, host) {
	if (dnsDomainIs(host, "youtube.com")) {
		return "PROXY 79.111.119.213:32646";
	}
	return "DIRECT";
}
