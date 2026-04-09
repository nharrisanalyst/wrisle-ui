/*
   function for typing keys to an object's actual keys


*/

export const typedKeys = <T extends object>(obj: T) =>
  Object.keys(obj) as (keyof T)[]