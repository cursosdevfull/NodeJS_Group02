export default class {
  static log(message: string | string[] | object) {
    if (process.env.NODE_ENV !== 'test') {
      if (Array.isArray(message)) {
        console.log('APP School', ...message);
        // message = ["a", "b", "c"]
        // ...message   "a", "b", "c"
      } else if (typeof message === 'string') {
        console.log('APP School', message);
      } else {
        console.log('APP School', JSON.stringify(message));
      }
    }
  }
}
