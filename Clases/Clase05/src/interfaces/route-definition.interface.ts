export default interface ByDefault {
  path: string;
  requestMethod: 'post' | 'get' | 'put' | 'delete' | 'options';
  methodName: string;
  middlewares: any[];
}
