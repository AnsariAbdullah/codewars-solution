class Sleigh {
	authenticate(name: string, password: string): boolean {
		return name === "Santa Claus" && password === "Ho Ho Ho!" ? true : false;
	}
}