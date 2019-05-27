function FindProxyForURL(url, host) {
	if (dnsDomainIs(host, "youtube.com")) {
		return "PROXY 185.148.82.160:3128, PROXY 185.97.252.54:3128, PROXY 185.22.174.68:10010, PROXY 62.33.207.202:80, PROXY 62.33.207.196:80, PROXY 85.175.217.182:8081";
	}
	return "DIRECT";
}
