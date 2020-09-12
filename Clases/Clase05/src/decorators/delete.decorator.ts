import { RouteDefinition } from '../interfaces';

const decorator = (path: string, middlewares: any[] = []): MethodDecorator => {
  return (target, propertyKey: string): any => {
    if (!Reflect.hasMetadata('routes', target.constructor)) {
      Reflect.defineMetadata('routes', [], target.constructor);
    }

    const routes: Array<RouteDefinition> = Reflect.getMetadata(
      'routes',
      target.constructor
    ) as Array<RouteDefinition>;

    routes.push({
      path,
      requestMethod: 'delete',
      methodName: propertyKey,
      middlewares: [],
    });

    Reflect.defineMetadata('routes', routes, target.constructor);
  };
};

export default decorator;
