class Recorder {
  constructor(userName, stream) {
    this.userName = userName;
    this.stream = stream;
    this.filename = `id:${userName}-when:${Date.now()}`;
  }

  _setup() {
    const commonCodecs = ["codecs=vp9,opus", "codecs=vp8,opus", ""];
    const options = commonCodecs
      .map((codec) => ({ mimeType: `${this.videoType};${codec}` }))
      .find((options) => MediaRecorder.isTypeSupported(options.mimeType));

    if (!options) {
      throw new Error(
        `none of the codecs: ${commonCodecs.join(",")} are supported`
      );
    }

    return options;
  }

  startRecording() {}
  stopRecording() {}
}
