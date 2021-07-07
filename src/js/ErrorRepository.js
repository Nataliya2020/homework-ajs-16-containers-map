export default class ErrorRepository {
  constructor() {
    this.map = new Map();
  }

  translate(code) {
    if (!this.map.get(code)) {
      return 'Unknown error';
    }
    return this.map.get(code);
  }
}
