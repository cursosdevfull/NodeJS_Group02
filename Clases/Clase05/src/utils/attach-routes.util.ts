import { Application, Request, Response } from 'express';
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
      console.log(route.requestMethod.toUpperCase(), prefix + route.path);
      app[route.requestMethod](
        prefix + route.path,
        ...middlewares,
        ...route.middlewares,
        (req: Request, res: Response): Promise<any> => {
          return instance[route.methodName](req, res);
        }
      );
    });
  });
};

export default attachs;
