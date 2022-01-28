/* eslint-disable @typescript-eslint/no-explicit-any */
type syncOrAsyncFunc =
  | ((...args: never[]) => Promise<unknown>)
  | ((...args: never[]) => unknown);
type MethodDescriptor<T> = Omit<TypedPropertyDescriptor<T>, 'set'>;

// type AsyncMethodDescriptor = Omit<
//   TypedPropertyDescriptor<(...args: never[]) => Promise<unknown>>,
//   'set'
// >;
// type SyncMethodDescriptor = Omit<
//   TypedPropertyDescriptor<(...args: never[]) => unknown>,
//   'set'
// >;

export function logFunc(logStr?: string) {
  return function (
    target: unknown,
    propertyName: string,
    descriptor: MethodDescriptor<syncOrAsyncFunc>,
  ): void {
    //
    const originalMethod = descriptor.value;

    if (originalMethod) {
      descriptor.value = function (...args: never[]) {
        const argsStr = `(${args.join(', ')})`;
        const commonLog = `${propertyName}${
          logStr ? ' ' + logStr : ''
        }${argsStr}`;
        console.log('');
        console.info(`开始执行 ${commonLog}...`);
        const resultOrPromise = originalMethod.apply(this, args);
        if (resultOrPromise instanceof Promise) {
          return resultOrPromise.then((result) => {
            console.log(`结束执行 ${commonLog}...`);
            console.log(`<= ${result}`);
            return result;
          });
        } else {
          console.info(`结束执行 ${commonLog}...`);
          console.info(`<= ${resultOrPromise}`);
          return resultOrPromise;
        }
      };
    }

    // return descriptor;
  };
}
