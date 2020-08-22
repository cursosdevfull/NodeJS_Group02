/*interface Car {
  accelerate: () => void,
  break: () => void,
  start: () => void,
  autoPilot: () => void
}

class ModelS implements Car {
  accelerate() { }

  break() { }

  start() { }

  autoPilot() { }
}


class Toyota implements Car {
  accelerate() { }

  break() { }

  start() { }

  autoPilot() { }
}*/

interface Car {
  accelerate: () => void;
  break: () => void;
  start: () => void;
}

interface Tesla {
  autoPilot: () => void;
}

class Toyota implements Car {
  accelerate() {}

  break() {}

  start() {}
}

class ModelS implements Car, Tesla {
  accelerate() {}

  break() {}

  start() {}

  autoPilot() {}
}
