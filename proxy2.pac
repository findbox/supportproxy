function FindProxyForURL(url, host) {

	if (dnsDomainIs(host, "youtube.com")) {
		return "PROXY 185.158.112.209:3128";
	}
	return "DIRECT";
}
