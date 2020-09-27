import { Application, NextFunction, Request, Response } from 'express';
import { Errors, Message } from '.';
import { RouteDefinition } from '../interfaces';

const getInstancesDependencies = (dependencies: any[]): any[] => {
  const instancesDependencies: any[] = [];

  dependencies.forEach((dependency) => {
    instancesDependencies.push(new dependency());
  });

  return instancesDependencies;
};

// app.post("/auth/login", ...middlewaresController, ...middlewaresMethods, instance)
const attachs = (app: Application, controllers: any[]) => {
  controllers.forEach((controller) => {
    const listInstancesDependencies: any[] = getInstancesDependencies(
      controller.dependencies
    );

    // const arreglo = ["a", "b", "c"]
    // ...arreglo = "a", "b", "c"
    const instance = new controller.class(...listInstancesDependencies);
    const prefix = Reflect.getMetadata('prefix', controller.class);
    const middlewares = Reflect.getMetadata('middlewares', controller.class);

    const routes: RouteDefinition[] = Reflect.getMetadata(
      'routes',
      controller.class
    );

    routes.forEach((route: RouteDefinition) => {
      Message.log([route.requestMethod.toUpperCase(), prefix + route.path]);
      app[route.requestMethod](
        prefix + route.path,
        ...middlewares,
        ...route.middlewares,
        Errors.catchAsync(
          (req: Request, res: Response, next: NextFunction): Promise<any> => {
            return instance[route.methodName](req, res);
          }
        )
      );
    });
  });
};

export default attachs;
