class Recorder {
  constructor(userName, stream) {
    this.userName = userName;
    this.stream = stream;
    this.filename = `id:${userName}-when:${Date.now()}`;
  }

  startRecording() {}
  stopRecording() {}
}
