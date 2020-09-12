const decorator = (path: string): MethodDecorator => {
  return (target, propertyKey: string): any => {
    if (!Reflect.hasMetadata('routes', target.constructor)) {
      Reflect.defineMetadata('routes', [], target.constructor);
    }

    const routes = Reflect.getMetadata('routes', target.constructor) as Array<
      any
    >;

    Reflect.defineMetadata('routes', routes, target.constructor);
  };
};

export default decorator;
