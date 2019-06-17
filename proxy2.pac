function FindProxyForURL(url, host) {
	if (dnsDomainIs(host, "youtube.com")) {
		return "PROXY 91.208.39.70:8080; PROXY 84.201.254.47:3128";
	}
	return "DIRECT";
}
