class ServerStatus {

  static OK;

  constructor(server) {
    this.server = server;
    this.OK = Object.freeze("OK");
  }

  async requestStatus() {
    const result = await fetch(["https://", this.server].join(''))
        .then(result => result.json())
        .then(json => this.status = json);
    return Object.freeze(this);
  }

  isOnline() {
    return this.status === "OK";
  }
}
