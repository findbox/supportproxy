function FindProxyForURL(url, host) {
	if (dnsDomainIs(host, "youtube.com")) {
		return "PROXY 87.241.206.119:8080; PROXY 89.169.115.145:8080; PROXY 31.132.145.19:8081; PROXY 185.242.117.160:8080; PROXY 87.225.105.33:8080; PROXY 90.189.112.29:3128";
	}
	return "DIRECT";
}
