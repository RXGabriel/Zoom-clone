class Business {
  constructor({ room, media, view }) {
    this.room = room;
    this.media = media;
    this.view = view;
    this.currentStream = {};
  }
  static inicialize(deps) {
    const instance = new Business(deps);
    return instance._init();
  }

  async _init() {
    this.currentStream = await this.media.getCamera();
    console.log("init!!", this.currentStream);
  }
}
