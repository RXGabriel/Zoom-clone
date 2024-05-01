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
    this.addVideoStream("test01");
  }

  addVideoStream(userId, stream = this.currentStream) {
    const isCurrentId = false;
    this.view.renderVideo({ userId, stream, isCurrentId });
  }

  OnUserConnected = function () {
    return (userId) => {
      console.log("user connected!", userId);
    };
  };

  OnUserDisconnected = function () {
    return (userId) => {
      console.log("user disconnected!", userId);
    };
  };
}
