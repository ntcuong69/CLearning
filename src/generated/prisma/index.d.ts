
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model problems
 * 
 */
export type problems = $Result.DefaultSelection<Prisma.$problemsPayload>
/**
 * Model submissionresults
 * 
 */
export type submissionresults = $Result.DefaultSelection<Prisma.$submissionresultsPayload>
/**
 * Model submissions
 * 
 */
export type submissions = $Result.DefaultSelection<Prisma.$submissionsPayload>
/**
 * Model testcases
 * 
 */
export type testcases = $Result.DefaultSelection<Prisma.$testcasesPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const problems_Difficulty: {
  Easy: 'Easy',
  Medium: 'Medium',
  Hard: 'Hard'
};

export type problems_Difficulty = (typeof problems_Difficulty)[keyof typeof problems_Difficulty]


export const submissionresults_Result: {
  Pass: 'Pass',
  Fail: 'Fail'
};

export type submissionresults_Result = (typeof submissionresults_Result)[keyof typeof submissionresults_Result]


export const submissions_Status: {
  Pending: 'Pending',
  Correct: 'Correct',
  Wrong: 'Wrong',
  Error: 'Error'
};

export type submissions_Status = (typeof submissions_Status)[keyof typeof submissions_Status]


export const users_Role: {
  Member: 'Member',
  Admin: 'Admin'
};

export type users_Role = (typeof users_Role)[keyof typeof users_Role]

}

export type problems_Difficulty = $Enums.problems_Difficulty

export const problems_Difficulty: typeof $Enums.problems_Difficulty

export type submissionresults_Result = $Enums.submissionresults_Result

export const submissionresults_Result: typeof $Enums.submissionresults_Result

export type submissions_Status = $Enums.submissions_Status

export const submissions_Status: typeof $Enums.submissions_Status

export type users_Role = $Enums.users_Role

export const users_Role: typeof $Enums.users_Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Problems
 * const problems = await prisma.problems.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Problems
   * const problems = await prisma.problems.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.problems`: Exposes CRUD operations for the **problems** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Problems
    * const problems = await prisma.problems.findMany()
    * ```
    */
  get problems(): Prisma.problemsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.submissionresults`: Exposes CRUD operations for the **submissionresults** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Submissionresults
    * const submissionresults = await prisma.submissionresults.findMany()
    * ```
    */
  get submissionresults(): Prisma.submissionresultsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.submissions`: Exposes CRUD operations for the **submissions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Submissions
    * const submissions = await prisma.submissions.findMany()
    * ```
    */
  get submissions(): Prisma.submissionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.testcases`: Exposes CRUD operations for the **testcases** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Testcases
    * const testcases = await prisma.testcases.findMany()
    * ```
    */
  get testcases(): Prisma.testcasesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    problems: 'problems',
    submissionresults: 'submissionresults',
    submissions: 'submissions',
    testcases: 'testcases',
    users: 'users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "problems" | "submissionresults" | "submissions" | "testcases" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      problems: {
        payload: Prisma.$problemsPayload<ExtArgs>
        fields: Prisma.problemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.problemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.problemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemsPayload>
          }
          findFirst: {
            args: Prisma.problemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.problemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemsPayload>
          }
          findMany: {
            args: Prisma.problemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemsPayload>[]
          }
          create: {
            args: Prisma.problemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemsPayload>
          }
          createMany: {
            args: Prisma.problemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.problemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemsPayload>
          }
          update: {
            args: Prisma.problemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemsPayload>
          }
          deleteMany: {
            args: Prisma.problemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.problemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.problemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemsPayload>
          }
          aggregate: {
            args: Prisma.ProblemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProblems>
          }
          groupBy: {
            args: Prisma.problemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProblemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.problemsCountArgs<ExtArgs>
            result: $Utils.Optional<ProblemsCountAggregateOutputType> | number
          }
        }
      }
      submissionresults: {
        payload: Prisma.$submissionresultsPayload<ExtArgs>
        fields: Prisma.submissionresultsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.submissionresultsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionresultsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.submissionresultsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionresultsPayload>
          }
          findFirst: {
            args: Prisma.submissionresultsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionresultsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.submissionresultsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionresultsPayload>
          }
          findMany: {
            args: Prisma.submissionresultsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionresultsPayload>[]
          }
          create: {
            args: Prisma.submissionresultsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionresultsPayload>
          }
          createMany: {
            args: Prisma.submissionresultsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.submissionresultsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionresultsPayload>
          }
          update: {
            args: Prisma.submissionresultsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionresultsPayload>
          }
          deleteMany: {
            args: Prisma.submissionresultsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.submissionresultsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.submissionresultsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionresultsPayload>
          }
          aggregate: {
            args: Prisma.SubmissionresultsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubmissionresults>
          }
          groupBy: {
            args: Prisma.submissionresultsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubmissionresultsGroupByOutputType>[]
          }
          count: {
            args: Prisma.submissionresultsCountArgs<ExtArgs>
            result: $Utils.Optional<SubmissionresultsCountAggregateOutputType> | number
          }
        }
      }
      submissions: {
        payload: Prisma.$submissionsPayload<ExtArgs>
        fields: Prisma.submissionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.submissionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.submissionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionsPayload>
          }
          findFirst: {
            args: Prisma.submissionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.submissionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionsPayload>
          }
          findMany: {
            args: Prisma.submissionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionsPayload>[]
          }
          create: {
            args: Prisma.submissionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionsPayload>
          }
          createMany: {
            args: Prisma.submissionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.submissionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionsPayload>
          }
          update: {
            args: Prisma.submissionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionsPayload>
          }
          deleteMany: {
            args: Prisma.submissionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.submissionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.submissionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionsPayload>
          }
          aggregate: {
            args: Prisma.SubmissionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubmissions>
          }
          groupBy: {
            args: Prisma.submissionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubmissionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.submissionsCountArgs<ExtArgs>
            result: $Utils.Optional<SubmissionsCountAggregateOutputType> | number
          }
        }
      }
      testcases: {
        payload: Prisma.$testcasesPayload<ExtArgs>
        fields: Prisma.testcasesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.testcasesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testcasesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.testcasesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testcasesPayload>
          }
          findFirst: {
            args: Prisma.testcasesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testcasesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.testcasesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testcasesPayload>
          }
          findMany: {
            args: Prisma.testcasesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testcasesPayload>[]
          }
          create: {
            args: Prisma.testcasesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testcasesPayload>
          }
          createMany: {
            args: Prisma.testcasesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.testcasesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testcasesPayload>
          }
          update: {
            args: Prisma.testcasesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testcasesPayload>
          }
          deleteMany: {
            args: Prisma.testcasesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.testcasesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.testcasesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testcasesPayload>
          }
          aggregate: {
            args: Prisma.TestcasesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTestcases>
          }
          groupBy: {
            args: Prisma.testcasesGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestcasesGroupByOutputType>[]
          }
          count: {
            args: Prisma.testcasesCountArgs<ExtArgs>
            result: $Utils.Optional<TestcasesCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    problems?: problemsOmit
    submissionresults?: submissionresultsOmit
    submissions?: submissionsOmit
    testcases?: testcasesOmit
    users?: usersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProblemsCountOutputType
   */

  export type ProblemsCountOutputType = {
    submissions: number
    testcases: number
  }

  export type ProblemsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submissions?: boolean | ProblemsCountOutputTypeCountSubmissionsArgs
    testcases?: boolean | ProblemsCountOutputTypeCountTestcasesArgs
  }

  // Custom InputTypes
  /**
   * ProblemsCountOutputType without action
   */
  export type ProblemsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemsCountOutputType
     */
    select?: ProblemsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProblemsCountOutputType without action
   */
  export type ProblemsCountOutputTypeCountSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: submissionsWhereInput
  }

  /**
   * ProblemsCountOutputType without action
   */
  export type ProblemsCountOutputTypeCountTestcasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: testcasesWhereInput
  }


  /**
   * Count Type SubmissionsCountOutputType
   */

  export type SubmissionsCountOutputType = {
    submissionresults: number
  }

  export type SubmissionsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submissionresults?: boolean | SubmissionsCountOutputTypeCountSubmissionresultsArgs
  }

  // Custom InputTypes
  /**
   * SubmissionsCountOutputType without action
   */
  export type SubmissionsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubmissionsCountOutputType
     */
    select?: SubmissionsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubmissionsCountOutputType without action
   */
  export type SubmissionsCountOutputTypeCountSubmissionresultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: submissionresultsWhereInput
  }


  /**
   * Count Type TestcasesCountOutputType
   */

  export type TestcasesCountOutputType = {
    submissionresults: number
  }

  export type TestcasesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submissionresults?: boolean | TestcasesCountOutputTypeCountSubmissionresultsArgs
  }

  // Custom InputTypes
  /**
   * TestcasesCountOutputType without action
   */
  export type TestcasesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestcasesCountOutputType
     */
    select?: TestcasesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TestcasesCountOutputType without action
   */
  export type TestcasesCountOutputTypeCountSubmissionresultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: submissionresultsWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    submissions: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submissions?: boolean | UsersCountOutputTypeCountSubmissionsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: submissionsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model problems
   */

  export type AggregateProblems = {
    _count: ProblemsCountAggregateOutputType | null
    _min: ProblemsMinAggregateOutputType | null
    _max: ProblemsMaxAggregateOutputType | null
  }

  export type ProblemsMinAggregateOutputType = {
    PID: string | null
    Title: string | null
    Description: string | null
    Difficulty: $Enums.problems_Difficulty | null
    Topic: string | null
    CreatedAt: Date | null
  }

  export type ProblemsMaxAggregateOutputType = {
    PID: string | null
    Title: string | null
    Description: string | null
    Difficulty: $Enums.problems_Difficulty | null
    Topic: string | null
    CreatedAt: Date | null
  }

  export type ProblemsCountAggregateOutputType = {
    PID: number
    Title: number
    Description: number
    Difficulty: number
    Topic: number
    CreatedAt: number
    _all: number
  }


  export type ProblemsMinAggregateInputType = {
    PID?: true
    Title?: true
    Description?: true
    Difficulty?: true
    Topic?: true
    CreatedAt?: true
  }

  export type ProblemsMaxAggregateInputType = {
    PID?: true
    Title?: true
    Description?: true
    Difficulty?: true
    Topic?: true
    CreatedAt?: true
  }

  export type ProblemsCountAggregateInputType = {
    PID?: true
    Title?: true
    Description?: true
    Difficulty?: true
    Topic?: true
    CreatedAt?: true
    _all?: true
  }

  export type ProblemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which problems to aggregate.
     */
    where?: problemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of problems to fetch.
     */
    orderBy?: problemsOrderByWithRelationInput | problemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: problemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` problems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` problems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned problems
    **/
    _count?: true | ProblemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProblemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProblemsMaxAggregateInputType
  }

  export type GetProblemsAggregateType<T extends ProblemsAggregateArgs> = {
        [P in keyof T & keyof AggregateProblems]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProblems[P]>
      : GetScalarType<T[P], AggregateProblems[P]>
  }




  export type problemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: problemsWhereInput
    orderBy?: problemsOrderByWithAggregationInput | problemsOrderByWithAggregationInput[]
    by: ProblemsScalarFieldEnum[] | ProblemsScalarFieldEnum
    having?: problemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProblemsCountAggregateInputType | true
    _min?: ProblemsMinAggregateInputType
    _max?: ProblemsMaxAggregateInputType
  }

  export type ProblemsGroupByOutputType = {
    PID: string
    Title: string | null
    Description: string | null
    Difficulty: $Enums.problems_Difficulty
    Topic: string | null
    CreatedAt: Date | null
    _count: ProblemsCountAggregateOutputType | null
    _min: ProblemsMinAggregateOutputType | null
    _max: ProblemsMaxAggregateOutputType | null
  }

  type GetProblemsGroupByPayload<T extends problemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProblemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProblemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProblemsGroupByOutputType[P]>
            : GetScalarType<T[P], ProblemsGroupByOutputType[P]>
        }
      >
    >


  export type problemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    PID?: boolean
    Title?: boolean
    Description?: boolean
    Difficulty?: boolean
    Topic?: boolean
    CreatedAt?: boolean
    submissions?: boolean | problems$submissionsArgs<ExtArgs>
    testcases?: boolean | problems$testcasesArgs<ExtArgs>
    _count?: boolean | ProblemsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problems"]>



  export type problemsSelectScalar = {
    PID?: boolean
    Title?: boolean
    Description?: boolean
    Difficulty?: boolean
    Topic?: boolean
    CreatedAt?: boolean
  }

  export type problemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"PID" | "Title" | "Description" | "Difficulty" | "Topic" | "CreatedAt", ExtArgs["result"]["problems"]>
  export type problemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submissions?: boolean | problems$submissionsArgs<ExtArgs>
    testcases?: boolean | problems$testcasesArgs<ExtArgs>
    _count?: boolean | ProblemsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $problemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "problems"
    objects: {
      submissions: Prisma.$submissionsPayload<ExtArgs>[]
      testcases: Prisma.$testcasesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      PID: string
      Title: string | null
      Description: string | null
      Difficulty: $Enums.problems_Difficulty
      Topic: string | null
      CreatedAt: Date | null
    }, ExtArgs["result"]["problems"]>
    composites: {}
  }

  type problemsGetPayload<S extends boolean | null | undefined | problemsDefaultArgs> = $Result.GetResult<Prisma.$problemsPayload, S>

  type problemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<problemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProblemsCountAggregateInputType | true
    }

  export interface problemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['problems'], meta: { name: 'problems' } }
    /**
     * Find zero or one Problems that matches the filter.
     * @param {problemsFindUniqueArgs} args - Arguments to find a Problems
     * @example
     * // Get one Problems
     * const problems = await prisma.problems.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends problemsFindUniqueArgs>(args: SelectSubset<T, problemsFindUniqueArgs<ExtArgs>>): Prisma__problemsClient<$Result.GetResult<Prisma.$problemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Problems that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {problemsFindUniqueOrThrowArgs} args - Arguments to find a Problems
     * @example
     * // Get one Problems
     * const problems = await prisma.problems.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends problemsFindUniqueOrThrowArgs>(args: SelectSubset<T, problemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__problemsClient<$Result.GetResult<Prisma.$problemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Problems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {problemsFindFirstArgs} args - Arguments to find a Problems
     * @example
     * // Get one Problems
     * const problems = await prisma.problems.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends problemsFindFirstArgs>(args?: SelectSubset<T, problemsFindFirstArgs<ExtArgs>>): Prisma__problemsClient<$Result.GetResult<Prisma.$problemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Problems that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {problemsFindFirstOrThrowArgs} args - Arguments to find a Problems
     * @example
     * // Get one Problems
     * const problems = await prisma.problems.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends problemsFindFirstOrThrowArgs>(args?: SelectSubset<T, problemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__problemsClient<$Result.GetResult<Prisma.$problemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Problems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {problemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Problems
     * const problems = await prisma.problems.findMany()
     * 
     * // Get first 10 Problems
     * const problems = await prisma.problems.findMany({ take: 10 })
     * 
     * // Only select the `PID`
     * const problemsWithPIDOnly = await prisma.problems.findMany({ select: { PID: true } })
     * 
     */
    findMany<T extends problemsFindManyArgs>(args?: SelectSubset<T, problemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$problemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Problems.
     * @param {problemsCreateArgs} args - Arguments to create a Problems.
     * @example
     * // Create one Problems
     * const Problems = await prisma.problems.create({
     *   data: {
     *     // ... data to create a Problems
     *   }
     * })
     * 
     */
    create<T extends problemsCreateArgs>(args: SelectSubset<T, problemsCreateArgs<ExtArgs>>): Prisma__problemsClient<$Result.GetResult<Prisma.$problemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Problems.
     * @param {problemsCreateManyArgs} args - Arguments to create many Problems.
     * @example
     * // Create many Problems
     * const problems = await prisma.problems.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends problemsCreateManyArgs>(args?: SelectSubset<T, problemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Problems.
     * @param {problemsDeleteArgs} args - Arguments to delete one Problems.
     * @example
     * // Delete one Problems
     * const Problems = await prisma.problems.delete({
     *   where: {
     *     // ... filter to delete one Problems
     *   }
     * })
     * 
     */
    delete<T extends problemsDeleteArgs>(args: SelectSubset<T, problemsDeleteArgs<ExtArgs>>): Prisma__problemsClient<$Result.GetResult<Prisma.$problemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Problems.
     * @param {problemsUpdateArgs} args - Arguments to update one Problems.
     * @example
     * // Update one Problems
     * const problems = await prisma.problems.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends problemsUpdateArgs>(args: SelectSubset<T, problemsUpdateArgs<ExtArgs>>): Prisma__problemsClient<$Result.GetResult<Prisma.$problemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Problems.
     * @param {problemsDeleteManyArgs} args - Arguments to filter Problems to delete.
     * @example
     * // Delete a few Problems
     * const { count } = await prisma.problems.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends problemsDeleteManyArgs>(args?: SelectSubset<T, problemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Problems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {problemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Problems
     * const problems = await prisma.problems.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends problemsUpdateManyArgs>(args: SelectSubset<T, problemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Problems.
     * @param {problemsUpsertArgs} args - Arguments to update or create a Problems.
     * @example
     * // Update or create a Problems
     * const problems = await prisma.problems.upsert({
     *   create: {
     *     // ... data to create a Problems
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Problems we want to update
     *   }
     * })
     */
    upsert<T extends problemsUpsertArgs>(args: SelectSubset<T, problemsUpsertArgs<ExtArgs>>): Prisma__problemsClient<$Result.GetResult<Prisma.$problemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Problems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {problemsCountArgs} args - Arguments to filter Problems to count.
     * @example
     * // Count the number of Problems
     * const count = await prisma.problems.count({
     *   where: {
     *     // ... the filter for the Problems we want to count
     *   }
     * })
    **/
    count<T extends problemsCountArgs>(
      args?: Subset<T, problemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProblemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Problems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProblemsAggregateArgs>(args: Subset<T, ProblemsAggregateArgs>): Prisma.PrismaPromise<GetProblemsAggregateType<T>>

    /**
     * Group by Problems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {problemsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends problemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: problemsGroupByArgs['orderBy'] }
        : { orderBy?: problemsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, problemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProblemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the problems model
   */
  readonly fields: problemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for problems.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__problemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    submissions<T extends problems$submissionsArgs<ExtArgs> = {}>(args?: Subset<T, problems$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$submissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    testcases<T extends problems$testcasesArgs<ExtArgs> = {}>(args?: Subset<T, problems$testcasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$testcasesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the problems model
   */
  interface problemsFieldRefs {
    readonly PID: FieldRef<"problems", 'String'>
    readonly Title: FieldRef<"problems", 'String'>
    readonly Description: FieldRef<"problems", 'String'>
    readonly Difficulty: FieldRef<"problems", 'problems_Difficulty'>
    readonly Topic: FieldRef<"problems", 'String'>
    readonly CreatedAt: FieldRef<"problems", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * problems findUnique
   */
  export type problemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problems
     */
    select?: problemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problems
     */
    omit?: problemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemsInclude<ExtArgs> | null
    /**
     * Filter, which problems to fetch.
     */
    where: problemsWhereUniqueInput
  }

  /**
   * problems findUniqueOrThrow
   */
  export type problemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problems
     */
    select?: problemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problems
     */
    omit?: problemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemsInclude<ExtArgs> | null
    /**
     * Filter, which problems to fetch.
     */
    where: problemsWhereUniqueInput
  }

  /**
   * problems findFirst
   */
  export type problemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problems
     */
    select?: problemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problems
     */
    omit?: problemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemsInclude<ExtArgs> | null
    /**
     * Filter, which problems to fetch.
     */
    where?: problemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of problems to fetch.
     */
    orderBy?: problemsOrderByWithRelationInput | problemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for problems.
     */
    cursor?: problemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` problems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` problems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of problems.
     */
    distinct?: ProblemsScalarFieldEnum | ProblemsScalarFieldEnum[]
  }

  /**
   * problems findFirstOrThrow
   */
  export type problemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problems
     */
    select?: problemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problems
     */
    omit?: problemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemsInclude<ExtArgs> | null
    /**
     * Filter, which problems to fetch.
     */
    where?: problemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of problems to fetch.
     */
    orderBy?: problemsOrderByWithRelationInput | problemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for problems.
     */
    cursor?: problemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` problems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` problems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of problems.
     */
    distinct?: ProblemsScalarFieldEnum | ProblemsScalarFieldEnum[]
  }

  /**
   * problems findMany
   */
  export type problemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problems
     */
    select?: problemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problems
     */
    omit?: problemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemsInclude<ExtArgs> | null
    /**
     * Filter, which problems to fetch.
     */
    where?: problemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of problems to fetch.
     */
    orderBy?: problemsOrderByWithRelationInput | problemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing problems.
     */
    cursor?: problemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` problems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` problems.
     */
    skip?: number
    distinct?: ProblemsScalarFieldEnum | ProblemsScalarFieldEnum[]
  }

  /**
   * problems create
   */
  export type problemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problems
     */
    select?: problemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problems
     */
    omit?: problemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemsInclude<ExtArgs> | null
    /**
     * The data needed to create a problems.
     */
    data?: XOR<problemsCreateInput, problemsUncheckedCreateInput>
  }

  /**
   * problems createMany
   */
  export type problemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many problems.
     */
    data: problemsCreateManyInput | problemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * problems update
   */
  export type problemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problems
     */
    select?: problemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problems
     */
    omit?: problemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemsInclude<ExtArgs> | null
    /**
     * The data needed to update a problems.
     */
    data: XOR<problemsUpdateInput, problemsUncheckedUpdateInput>
    /**
     * Choose, which problems to update.
     */
    where: problemsWhereUniqueInput
  }

  /**
   * problems updateMany
   */
  export type problemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update problems.
     */
    data: XOR<problemsUpdateManyMutationInput, problemsUncheckedUpdateManyInput>
    /**
     * Filter which problems to update
     */
    where?: problemsWhereInput
    /**
     * Limit how many problems to update.
     */
    limit?: number
  }

  /**
   * problems upsert
   */
  export type problemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problems
     */
    select?: problemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problems
     */
    omit?: problemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemsInclude<ExtArgs> | null
    /**
     * The filter to search for the problems to update in case it exists.
     */
    where: problemsWhereUniqueInput
    /**
     * In case the problems found by the `where` argument doesn't exist, create a new problems with this data.
     */
    create: XOR<problemsCreateInput, problemsUncheckedCreateInput>
    /**
     * In case the problems was found with the provided `where` argument, update it with this data.
     */
    update: XOR<problemsUpdateInput, problemsUncheckedUpdateInput>
  }

  /**
   * problems delete
   */
  export type problemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problems
     */
    select?: problemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problems
     */
    omit?: problemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemsInclude<ExtArgs> | null
    /**
     * Filter which problems to delete.
     */
    where: problemsWhereUniqueInput
  }

  /**
   * problems deleteMany
   */
  export type problemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which problems to delete
     */
    where?: problemsWhereInput
    /**
     * Limit how many problems to delete.
     */
    limit?: number
  }

  /**
   * problems.submissions
   */
  export type problems$submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submissions
     */
    select?: submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submissions
     */
    omit?: submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionsInclude<ExtArgs> | null
    where?: submissionsWhereInput
    orderBy?: submissionsOrderByWithRelationInput | submissionsOrderByWithRelationInput[]
    cursor?: submissionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionsScalarFieldEnum | SubmissionsScalarFieldEnum[]
  }

  /**
   * problems.testcases
   */
  export type problems$testcasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testcases
     */
    select?: testcasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the testcases
     */
    omit?: testcasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testcasesInclude<ExtArgs> | null
    where?: testcasesWhereInput
    orderBy?: testcasesOrderByWithRelationInput | testcasesOrderByWithRelationInput[]
    cursor?: testcasesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestcasesScalarFieldEnum | TestcasesScalarFieldEnum[]
  }

  /**
   * problems without action
   */
  export type problemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problems
     */
    select?: problemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problems
     */
    omit?: problemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemsInclude<ExtArgs> | null
  }


  /**
   * Model submissionresults
   */

  export type AggregateSubmissionresults = {
    _count: SubmissionresultsCountAggregateOutputType | null
    _avg: SubmissionresultsAvgAggregateOutputType | null
    _sum: SubmissionresultsSumAggregateOutputType | null
    _min: SubmissionresultsMinAggregateOutputType | null
    _max: SubmissionresultsMaxAggregateOutputType | null
  }

  export type SubmissionresultsAvgAggregateOutputType = {
    ExecutionTime: number | null
  }

  export type SubmissionresultsSumAggregateOutputType = {
    ExecutionTime: number | null
  }

  export type SubmissionresultsMinAggregateOutputType = {
    SRID: string | null
    SID: string | null
    TID: string | null
    Result: $Enums.submissionresults_Result | null
    ExecutionTime: number | null
  }

  export type SubmissionresultsMaxAggregateOutputType = {
    SRID: string | null
    SID: string | null
    TID: string | null
    Result: $Enums.submissionresults_Result | null
    ExecutionTime: number | null
  }

  export type SubmissionresultsCountAggregateOutputType = {
    SRID: number
    SID: number
    TID: number
    Result: number
    ExecutionTime: number
    _all: number
  }


  export type SubmissionresultsAvgAggregateInputType = {
    ExecutionTime?: true
  }

  export type SubmissionresultsSumAggregateInputType = {
    ExecutionTime?: true
  }

  export type SubmissionresultsMinAggregateInputType = {
    SRID?: true
    SID?: true
    TID?: true
    Result?: true
    ExecutionTime?: true
  }

  export type SubmissionresultsMaxAggregateInputType = {
    SRID?: true
    SID?: true
    TID?: true
    Result?: true
    ExecutionTime?: true
  }

  export type SubmissionresultsCountAggregateInputType = {
    SRID?: true
    SID?: true
    TID?: true
    Result?: true
    ExecutionTime?: true
    _all?: true
  }

  export type SubmissionresultsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which submissionresults to aggregate.
     */
    where?: submissionresultsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of submissionresults to fetch.
     */
    orderBy?: submissionresultsOrderByWithRelationInput | submissionresultsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: submissionresultsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` submissionresults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` submissionresults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned submissionresults
    **/
    _count?: true | SubmissionresultsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubmissionresultsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubmissionresultsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubmissionresultsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubmissionresultsMaxAggregateInputType
  }

  export type GetSubmissionresultsAggregateType<T extends SubmissionresultsAggregateArgs> = {
        [P in keyof T & keyof AggregateSubmissionresults]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubmissionresults[P]>
      : GetScalarType<T[P], AggregateSubmissionresults[P]>
  }




  export type submissionresultsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: submissionresultsWhereInput
    orderBy?: submissionresultsOrderByWithAggregationInput | submissionresultsOrderByWithAggregationInput[]
    by: SubmissionresultsScalarFieldEnum[] | SubmissionresultsScalarFieldEnum
    having?: submissionresultsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubmissionresultsCountAggregateInputType | true
    _avg?: SubmissionresultsAvgAggregateInputType
    _sum?: SubmissionresultsSumAggregateInputType
    _min?: SubmissionresultsMinAggregateInputType
    _max?: SubmissionresultsMaxAggregateInputType
  }

  export type SubmissionresultsGroupByOutputType = {
    SRID: string
    SID: string
    TID: string
    Result: $Enums.submissionresults_Result
    ExecutionTime: number | null
    _count: SubmissionresultsCountAggregateOutputType | null
    _avg: SubmissionresultsAvgAggregateOutputType | null
    _sum: SubmissionresultsSumAggregateOutputType | null
    _min: SubmissionresultsMinAggregateOutputType | null
    _max: SubmissionresultsMaxAggregateOutputType | null
  }

  type GetSubmissionresultsGroupByPayload<T extends submissionresultsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubmissionresultsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubmissionresultsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubmissionresultsGroupByOutputType[P]>
            : GetScalarType<T[P], SubmissionresultsGroupByOutputType[P]>
        }
      >
    >


  export type submissionresultsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    SRID?: boolean
    SID?: boolean
    TID?: boolean
    Result?: boolean
    ExecutionTime?: boolean
    submissions?: boolean | submissionsDefaultArgs<ExtArgs>
    testcases?: boolean | testcasesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submissionresults"]>



  export type submissionresultsSelectScalar = {
    SRID?: boolean
    SID?: boolean
    TID?: boolean
    Result?: boolean
    ExecutionTime?: boolean
  }

  export type submissionresultsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"SRID" | "SID" | "TID" | "Result" | "ExecutionTime", ExtArgs["result"]["submissionresults"]>
  export type submissionresultsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submissions?: boolean | submissionsDefaultArgs<ExtArgs>
    testcases?: boolean | testcasesDefaultArgs<ExtArgs>
  }

  export type $submissionresultsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "submissionresults"
    objects: {
      submissions: Prisma.$submissionsPayload<ExtArgs>
      testcases: Prisma.$testcasesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      SRID: string
      SID: string
      TID: string
      Result: $Enums.submissionresults_Result
      ExecutionTime: number | null
    }, ExtArgs["result"]["submissionresults"]>
    composites: {}
  }

  type submissionresultsGetPayload<S extends boolean | null | undefined | submissionresultsDefaultArgs> = $Result.GetResult<Prisma.$submissionresultsPayload, S>

  type submissionresultsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<submissionresultsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubmissionresultsCountAggregateInputType | true
    }

  export interface submissionresultsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['submissionresults'], meta: { name: 'submissionresults' } }
    /**
     * Find zero or one Submissionresults that matches the filter.
     * @param {submissionresultsFindUniqueArgs} args - Arguments to find a Submissionresults
     * @example
     * // Get one Submissionresults
     * const submissionresults = await prisma.submissionresults.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends submissionresultsFindUniqueArgs>(args: SelectSubset<T, submissionresultsFindUniqueArgs<ExtArgs>>): Prisma__submissionresultsClient<$Result.GetResult<Prisma.$submissionresultsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Submissionresults that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {submissionresultsFindUniqueOrThrowArgs} args - Arguments to find a Submissionresults
     * @example
     * // Get one Submissionresults
     * const submissionresults = await prisma.submissionresults.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends submissionresultsFindUniqueOrThrowArgs>(args: SelectSubset<T, submissionresultsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__submissionresultsClient<$Result.GetResult<Prisma.$submissionresultsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Submissionresults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {submissionresultsFindFirstArgs} args - Arguments to find a Submissionresults
     * @example
     * // Get one Submissionresults
     * const submissionresults = await prisma.submissionresults.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends submissionresultsFindFirstArgs>(args?: SelectSubset<T, submissionresultsFindFirstArgs<ExtArgs>>): Prisma__submissionresultsClient<$Result.GetResult<Prisma.$submissionresultsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Submissionresults that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {submissionresultsFindFirstOrThrowArgs} args - Arguments to find a Submissionresults
     * @example
     * // Get one Submissionresults
     * const submissionresults = await prisma.submissionresults.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends submissionresultsFindFirstOrThrowArgs>(args?: SelectSubset<T, submissionresultsFindFirstOrThrowArgs<ExtArgs>>): Prisma__submissionresultsClient<$Result.GetResult<Prisma.$submissionresultsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Submissionresults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {submissionresultsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Submissionresults
     * const submissionresults = await prisma.submissionresults.findMany()
     * 
     * // Get first 10 Submissionresults
     * const submissionresults = await prisma.submissionresults.findMany({ take: 10 })
     * 
     * // Only select the `SRID`
     * const submissionresultsWithSRIDOnly = await prisma.submissionresults.findMany({ select: { SRID: true } })
     * 
     */
    findMany<T extends submissionresultsFindManyArgs>(args?: SelectSubset<T, submissionresultsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$submissionresultsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Submissionresults.
     * @param {submissionresultsCreateArgs} args - Arguments to create a Submissionresults.
     * @example
     * // Create one Submissionresults
     * const Submissionresults = await prisma.submissionresults.create({
     *   data: {
     *     // ... data to create a Submissionresults
     *   }
     * })
     * 
     */
    create<T extends submissionresultsCreateArgs>(args: SelectSubset<T, submissionresultsCreateArgs<ExtArgs>>): Prisma__submissionresultsClient<$Result.GetResult<Prisma.$submissionresultsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Submissionresults.
     * @param {submissionresultsCreateManyArgs} args - Arguments to create many Submissionresults.
     * @example
     * // Create many Submissionresults
     * const submissionresults = await prisma.submissionresults.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends submissionresultsCreateManyArgs>(args?: SelectSubset<T, submissionresultsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Submissionresults.
     * @param {submissionresultsDeleteArgs} args - Arguments to delete one Submissionresults.
     * @example
     * // Delete one Submissionresults
     * const Submissionresults = await prisma.submissionresults.delete({
     *   where: {
     *     // ... filter to delete one Submissionresults
     *   }
     * })
     * 
     */
    delete<T extends submissionresultsDeleteArgs>(args: SelectSubset<T, submissionresultsDeleteArgs<ExtArgs>>): Prisma__submissionresultsClient<$Result.GetResult<Prisma.$submissionresultsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Submissionresults.
     * @param {submissionresultsUpdateArgs} args - Arguments to update one Submissionresults.
     * @example
     * // Update one Submissionresults
     * const submissionresults = await prisma.submissionresults.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends submissionresultsUpdateArgs>(args: SelectSubset<T, submissionresultsUpdateArgs<ExtArgs>>): Prisma__submissionresultsClient<$Result.GetResult<Prisma.$submissionresultsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Submissionresults.
     * @param {submissionresultsDeleteManyArgs} args - Arguments to filter Submissionresults to delete.
     * @example
     * // Delete a few Submissionresults
     * const { count } = await prisma.submissionresults.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends submissionresultsDeleteManyArgs>(args?: SelectSubset<T, submissionresultsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Submissionresults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {submissionresultsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Submissionresults
     * const submissionresults = await prisma.submissionresults.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends submissionresultsUpdateManyArgs>(args: SelectSubset<T, submissionresultsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Submissionresults.
     * @param {submissionresultsUpsertArgs} args - Arguments to update or create a Submissionresults.
     * @example
     * // Update or create a Submissionresults
     * const submissionresults = await prisma.submissionresults.upsert({
     *   create: {
     *     // ... data to create a Submissionresults
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Submissionresults we want to update
     *   }
     * })
     */
    upsert<T extends submissionresultsUpsertArgs>(args: SelectSubset<T, submissionresultsUpsertArgs<ExtArgs>>): Prisma__submissionresultsClient<$Result.GetResult<Prisma.$submissionresultsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Submissionresults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {submissionresultsCountArgs} args - Arguments to filter Submissionresults to count.
     * @example
     * // Count the number of Submissionresults
     * const count = await prisma.submissionresults.count({
     *   where: {
     *     // ... the filter for the Submissionresults we want to count
     *   }
     * })
    **/
    count<T extends submissionresultsCountArgs>(
      args?: Subset<T, submissionresultsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubmissionresultsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Submissionresults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionresultsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubmissionresultsAggregateArgs>(args: Subset<T, SubmissionresultsAggregateArgs>): Prisma.PrismaPromise<GetSubmissionresultsAggregateType<T>>

    /**
     * Group by Submissionresults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {submissionresultsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends submissionresultsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: submissionresultsGroupByArgs['orderBy'] }
        : { orderBy?: submissionresultsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, submissionresultsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubmissionresultsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the submissionresults model
   */
  readonly fields: submissionresultsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for submissionresults.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__submissionresultsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    submissions<T extends submissionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, submissionsDefaultArgs<ExtArgs>>): Prisma__submissionsClient<$Result.GetResult<Prisma.$submissionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    testcases<T extends testcasesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, testcasesDefaultArgs<ExtArgs>>): Prisma__testcasesClient<$Result.GetResult<Prisma.$testcasesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the submissionresults model
   */
  interface submissionresultsFieldRefs {
    readonly SRID: FieldRef<"submissionresults", 'String'>
    readonly SID: FieldRef<"submissionresults", 'String'>
    readonly TID: FieldRef<"submissionresults", 'String'>
    readonly Result: FieldRef<"submissionresults", 'submissionresults_Result'>
    readonly ExecutionTime: FieldRef<"submissionresults", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * submissionresults findUnique
   */
  export type submissionresultsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submissionresults
     */
    select?: submissionresultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submissionresults
     */
    omit?: submissionresultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionresultsInclude<ExtArgs> | null
    /**
     * Filter, which submissionresults to fetch.
     */
    where: submissionresultsWhereUniqueInput
  }

  /**
   * submissionresults findUniqueOrThrow
   */
  export type submissionresultsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submissionresults
     */
    select?: submissionresultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submissionresults
     */
    omit?: submissionresultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionresultsInclude<ExtArgs> | null
    /**
     * Filter, which submissionresults to fetch.
     */
    where: submissionresultsWhereUniqueInput
  }

  /**
   * submissionresults findFirst
   */
  export type submissionresultsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submissionresults
     */
    select?: submissionresultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submissionresults
     */
    omit?: submissionresultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionresultsInclude<ExtArgs> | null
    /**
     * Filter, which submissionresults to fetch.
     */
    where?: submissionresultsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of submissionresults to fetch.
     */
    orderBy?: submissionresultsOrderByWithRelationInput | submissionresultsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for submissionresults.
     */
    cursor?: submissionresultsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` submissionresults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` submissionresults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of submissionresults.
     */
    distinct?: SubmissionresultsScalarFieldEnum | SubmissionresultsScalarFieldEnum[]
  }

  /**
   * submissionresults findFirstOrThrow
   */
  export type submissionresultsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submissionresults
     */
    select?: submissionresultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submissionresults
     */
    omit?: submissionresultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionresultsInclude<ExtArgs> | null
    /**
     * Filter, which submissionresults to fetch.
     */
    where?: submissionresultsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of submissionresults to fetch.
     */
    orderBy?: submissionresultsOrderByWithRelationInput | submissionresultsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for submissionresults.
     */
    cursor?: submissionresultsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` submissionresults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` submissionresults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of submissionresults.
     */
    distinct?: SubmissionresultsScalarFieldEnum | SubmissionresultsScalarFieldEnum[]
  }

  /**
   * submissionresults findMany
   */
  export type submissionresultsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submissionresults
     */
    select?: submissionresultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submissionresults
     */
    omit?: submissionresultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionresultsInclude<ExtArgs> | null
    /**
     * Filter, which submissionresults to fetch.
     */
    where?: submissionresultsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of submissionresults to fetch.
     */
    orderBy?: submissionresultsOrderByWithRelationInput | submissionresultsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing submissionresults.
     */
    cursor?: submissionresultsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` submissionresults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` submissionresults.
     */
    skip?: number
    distinct?: SubmissionresultsScalarFieldEnum | SubmissionresultsScalarFieldEnum[]
  }

  /**
   * submissionresults create
   */
  export type submissionresultsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submissionresults
     */
    select?: submissionresultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submissionresults
     */
    omit?: submissionresultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionresultsInclude<ExtArgs> | null
    /**
     * The data needed to create a submissionresults.
     */
    data: XOR<submissionresultsCreateInput, submissionresultsUncheckedCreateInput>
  }

  /**
   * submissionresults createMany
   */
  export type submissionresultsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many submissionresults.
     */
    data: submissionresultsCreateManyInput | submissionresultsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * submissionresults update
   */
  export type submissionresultsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submissionresults
     */
    select?: submissionresultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submissionresults
     */
    omit?: submissionresultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionresultsInclude<ExtArgs> | null
    /**
     * The data needed to update a submissionresults.
     */
    data: XOR<submissionresultsUpdateInput, submissionresultsUncheckedUpdateInput>
    /**
     * Choose, which submissionresults to update.
     */
    where: submissionresultsWhereUniqueInput
  }

  /**
   * submissionresults updateMany
   */
  export type submissionresultsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update submissionresults.
     */
    data: XOR<submissionresultsUpdateManyMutationInput, submissionresultsUncheckedUpdateManyInput>
    /**
     * Filter which submissionresults to update
     */
    where?: submissionresultsWhereInput
    /**
     * Limit how many submissionresults to update.
     */
    limit?: number
  }

  /**
   * submissionresults upsert
   */
  export type submissionresultsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submissionresults
     */
    select?: submissionresultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submissionresults
     */
    omit?: submissionresultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionresultsInclude<ExtArgs> | null
    /**
     * The filter to search for the submissionresults to update in case it exists.
     */
    where: submissionresultsWhereUniqueInput
    /**
     * In case the submissionresults found by the `where` argument doesn't exist, create a new submissionresults with this data.
     */
    create: XOR<submissionresultsCreateInput, submissionresultsUncheckedCreateInput>
    /**
     * In case the submissionresults was found with the provided `where` argument, update it with this data.
     */
    update: XOR<submissionresultsUpdateInput, submissionresultsUncheckedUpdateInput>
  }

  /**
   * submissionresults delete
   */
  export type submissionresultsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submissionresults
     */
    select?: submissionresultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submissionresults
     */
    omit?: submissionresultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionresultsInclude<ExtArgs> | null
    /**
     * Filter which submissionresults to delete.
     */
    where: submissionresultsWhereUniqueInput
  }

  /**
   * submissionresults deleteMany
   */
  export type submissionresultsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which submissionresults to delete
     */
    where?: submissionresultsWhereInput
    /**
     * Limit how many submissionresults to delete.
     */
    limit?: number
  }

  /**
   * submissionresults without action
   */
  export type submissionresultsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submissionresults
     */
    select?: submissionresultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submissionresults
     */
    omit?: submissionresultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionresultsInclude<ExtArgs> | null
  }


  /**
   * Model submissions
   */

  export type AggregateSubmissions = {
    _count: SubmissionsCountAggregateOutputType | null
    _min: SubmissionsMinAggregateOutputType | null
    _max: SubmissionsMaxAggregateOutputType | null
  }

  export type SubmissionsMinAggregateOutputType = {
    SID: string | null
    UID: string | null
    PID: string | null
    Code: string | null
    Status: $Enums.submissions_Status | null
    TimeOfSubmission: Date | null
  }

  export type SubmissionsMaxAggregateOutputType = {
    SID: string | null
    UID: string | null
    PID: string | null
    Code: string | null
    Status: $Enums.submissions_Status | null
    TimeOfSubmission: Date | null
  }

  export type SubmissionsCountAggregateOutputType = {
    SID: number
    UID: number
    PID: number
    Code: number
    Status: number
    TimeOfSubmission: number
    _all: number
  }


  export type SubmissionsMinAggregateInputType = {
    SID?: true
    UID?: true
    PID?: true
    Code?: true
    Status?: true
    TimeOfSubmission?: true
  }

  export type SubmissionsMaxAggregateInputType = {
    SID?: true
    UID?: true
    PID?: true
    Code?: true
    Status?: true
    TimeOfSubmission?: true
  }

  export type SubmissionsCountAggregateInputType = {
    SID?: true
    UID?: true
    PID?: true
    Code?: true
    Status?: true
    TimeOfSubmission?: true
    _all?: true
  }

  export type SubmissionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which submissions to aggregate.
     */
    where?: submissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of submissions to fetch.
     */
    orderBy?: submissionsOrderByWithRelationInput | submissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: submissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned submissions
    **/
    _count?: true | SubmissionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubmissionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubmissionsMaxAggregateInputType
  }

  export type GetSubmissionsAggregateType<T extends SubmissionsAggregateArgs> = {
        [P in keyof T & keyof AggregateSubmissions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubmissions[P]>
      : GetScalarType<T[P], AggregateSubmissions[P]>
  }




  export type submissionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: submissionsWhereInput
    orderBy?: submissionsOrderByWithAggregationInput | submissionsOrderByWithAggregationInput[]
    by: SubmissionsScalarFieldEnum[] | SubmissionsScalarFieldEnum
    having?: submissionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubmissionsCountAggregateInputType | true
    _min?: SubmissionsMinAggregateInputType
    _max?: SubmissionsMaxAggregateInputType
  }

  export type SubmissionsGroupByOutputType = {
    SID: string
    UID: string
    PID: string
    Code: string
    Status: $Enums.submissions_Status
    TimeOfSubmission: Date | null
    _count: SubmissionsCountAggregateOutputType | null
    _min: SubmissionsMinAggregateOutputType | null
    _max: SubmissionsMaxAggregateOutputType | null
  }

  type GetSubmissionsGroupByPayload<T extends submissionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubmissionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubmissionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubmissionsGroupByOutputType[P]>
            : GetScalarType<T[P], SubmissionsGroupByOutputType[P]>
        }
      >
    >


  export type submissionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    SID?: boolean
    UID?: boolean
    PID?: boolean
    Code?: boolean
    Status?: boolean
    TimeOfSubmission?: boolean
    submissionresults?: boolean | submissions$submissionresultsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    problems?: boolean | problemsDefaultArgs<ExtArgs>
    _count?: boolean | SubmissionsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submissions"]>



  export type submissionsSelectScalar = {
    SID?: boolean
    UID?: boolean
    PID?: boolean
    Code?: boolean
    Status?: boolean
    TimeOfSubmission?: boolean
  }

  export type submissionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"SID" | "UID" | "PID" | "Code" | "Status" | "TimeOfSubmission", ExtArgs["result"]["submissions"]>
  export type submissionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submissionresults?: boolean | submissions$submissionresultsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    problems?: boolean | problemsDefaultArgs<ExtArgs>
    _count?: boolean | SubmissionsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $submissionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "submissions"
    objects: {
      submissionresults: Prisma.$submissionresultsPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs>
      problems: Prisma.$problemsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      SID: string
      UID: string
      PID: string
      Code: string
      Status: $Enums.submissions_Status
      TimeOfSubmission: Date | null
    }, ExtArgs["result"]["submissions"]>
    composites: {}
  }

  type submissionsGetPayload<S extends boolean | null | undefined | submissionsDefaultArgs> = $Result.GetResult<Prisma.$submissionsPayload, S>

  type submissionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<submissionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubmissionsCountAggregateInputType | true
    }

  export interface submissionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['submissions'], meta: { name: 'submissions' } }
    /**
     * Find zero or one Submissions that matches the filter.
     * @param {submissionsFindUniqueArgs} args - Arguments to find a Submissions
     * @example
     * // Get one Submissions
     * const submissions = await prisma.submissions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends submissionsFindUniqueArgs>(args: SelectSubset<T, submissionsFindUniqueArgs<ExtArgs>>): Prisma__submissionsClient<$Result.GetResult<Prisma.$submissionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Submissions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {submissionsFindUniqueOrThrowArgs} args - Arguments to find a Submissions
     * @example
     * // Get one Submissions
     * const submissions = await prisma.submissions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends submissionsFindUniqueOrThrowArgs>(args: SelectSubset<T, submissionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__submissionsClient<$Result.GetResult<Prisma.$submissionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Submissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {submissionsFindFirstArgs} args - Arguments to find a Submissions
     * @example
     * // Get one Submissions
     * const submissions = await prisma.submissions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends submissionsFindFirstArgs>(args?: SelectSubset<T, submissionsFindFirstArgs<ExtArgs>>): Prisma__submissionsClient<$Result.GetResult<Prisma.$submissionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Submissions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {submissionsFindFirstOrThrowArgs} args - Arguments to find a Submissions
     * @example
     * // Get one Submissions
     * const submissions = await prisma.submissions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends submissionsFindFirstOrThrowArgs>(args?: SelectSubset<T, submissionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__submissionsClient<$Result.GetResult<Prisma.$submissionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Submissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {submissionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Submissions
     * const submissions = await prisma.submissions.findMany()
     * 
     * // Get first 10 Submissions
     * const submissions = await prisma.submissions.findMany({ take: 10 })
     * 
     * // Only select the `SID`
     * const submissionsWithSIDOnly = await prisma.submissions.findMany({ select: { SID: true } })
     * 
     */
    findMany<T extends submissionsFindManyArgs>(args?: SelectSubset<T, submissionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$submissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Submissions.
     * @param {submissionsCreateArgs} args - Arguments to create a Submissions.
     * @example
     * // Create one Submissions
     * const Submissions = await prisma.submissions.create({
     *   data: {
     *     // ... data to create a Submissions
     *   }
     * })
     * 
     */
    create<T extends submissionsCreateArgs>(args: SelectSubset<T, submissionsCreateArgs<ExtArgs>>): Prisma__submissionsClient<$Result.GetResult<Prisma.$submissionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Submissions.
     * @param {submissionsCreateManyArgs} args - Arguments to create many Submissions.
     * @example
     * // Create many Submissions
     * const submissions = await prisma.submissions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends submissionsCreateManyArgs>(args?: SelectSubset<T, submissionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Submissions.
     * @param {submissionsDeleteArgs} args - Arguments to delete one Submissions.
     * @example
     * // Delete one Submissions
     * const Submissions = await prisma.submissions.delete({
     *   where: {
     *     // ... filter to delete one Submissions
     *   }
     * })
     * 
     */
    delete<T extends submissionsDeleteArgs>(args: SelectSubset<T, submissionsDeleteArgs<ExtArgs>>): Prisma__submissionsClient<$Result.GetResult<Prisma.$submissionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Submissions.
     * @param {submissionsUpdateArgs} args - Arguments to update one Submissions.
     * @example
     * // Update one Submissions
     * const submissions = await prisma.submissions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends submissionsUpdateArgs>(args: SelectSubset<T, submissionsUpdateArgs<ExtArgs>>): Prisma__submissionsClient<$Result.GetResult<Prisma.$submissionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Submissions.
     * @param {submissionsDeleteManyArgs} args - Arguments to filter Submissions to delete.
     * @example
     * // Delete a few Submissions
     * const { count } = await prisma.submissions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends submissionsDeleteManyArgs>(args?: SelectSubset<T, submissionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {submissionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Submissions
     * const submissions = await prisma.submissions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends submissionsUpdateManyArgs>(args: SelectSubset<T, submissionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Submissions.
     * @param {submissionsUpsertArgs} args - Arguments to update or create a Submissions.
     * @example
     * // Update or create a Submissions
     * const submissions = await prisma.submissions.upsert({
     *   create: {
     *     // ... data to create a Submissions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Submissions we want to update
     *   }
     * })
     */
    upsert<T extends submissionsUpsertArgs>(args: SelectSubset<T, submissionsUpsertArgs<ExtArgs>>): Prisma__submissionsClient<$Result.GetResult<Prisma.$submissionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {submissionsCountArgs} args - Arguments to filter Submissions to count.
     * @example
     * // Count the number of Submissions
     * const count = await prisma.submissions.count({
     *   where: {
     *     // ... the filter for the Submissions we want to count
     *   }
     * })
    **/
    count<T extends submissionsCountArgs>(
      args?: Subset<T, submissionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubmissionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubmissionsAggregateArgs>(args: Subset<T, SubmissionsAggregateArgs>): Prisma.PrismaPromise<GetSubmissionsAggregateType<T>>

    /**
     * Group by Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {submissionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends submissionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: submissionsGroupByArgs['orderBy'] }
        : { orderBy?: submissionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, submissionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubmissionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the submissions model
   */
  readonly fields: submissionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for submissions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__submissionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    submissionresults<T extends submissions$submissionresultsArgs<ExtArgs> = {}>(args?: Subset<T, submissions$submissionresultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$submissionresultsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    problems<T extends problemsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, problemsDefaultArgs<ExtArgs>>): Prisma__problemsClient<$Result.GetResult<Prisma.$problemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the submissions model
   */
  interface submissionsFieldRefs {
    readonly SID: FieldRef<"submissions", 'String'>
    readonly UID: FieldRef<"submissions", 'String'>
    readonly PID: FieldRef<"submissions", 'String'>
    readonly Code: FieldRef<"submissions", 'String'>
    readonly Status: FieldRef<"submissions", 'submissions_Status'>
    readonly TimeOfSubmission: FieldRef<"submissions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * submissions findUnique
   */
  export type submissionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submissions
     */
    select?: submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submissions
     */
    omit?: submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionsInclude<ExtArgs> | null
    /**
     * Filter, which submissions to fetch.
     */
    where: submissionsWhereUniqueInput
  }

  /**
   * submissions findUniqueOrThrow
   */
  export type submissionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submissions
     */
    select?: submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submissions
     */
    omit?: submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionsInclude<ExtArgs> | null
    /**
     * Filter, which submissions to fetch.
     */
    where: submissionsWhereUniqueInput
  }

  /**
   * submissions findFirst
   */
  export type submissionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submissions
     */
    select?: submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submissions
     */
    omit?: submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionsInclude<ExtArgs> | null
    /**
     * Filter, which submissions to fetch.
     */
    where?: submissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of submissions to fetch.
     */
    orderBy?: submissionsOrderByWithRelationInput | submissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for submissions.
     */
    cursor?: submissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of submissions.
     */
    distinct?: SubmissionsScalarFieldEnum | SubmissionsScalarFieldEnum[]
  }

  /**
   * submissions findFirstOrThrow
   */
  export type submissionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submissions
     */
    select?: submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submissions
     */
    omit?: submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionsInclude<ExtArgs> | null
    /**
     * Filter, which submissions to fetch.
     */
    where?: submissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of submissions to fetch.
     */
    orderBy?: submissionsOrderByWithRelationInput | submissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for submissions.
     */
    cursor?: submissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of submissions.
     */
    distinct?: SubmissionsScalarFieldEnum | SubmissionsScalarFieldEnum[]
  }

  /**
   * submissions findMany
   */
  export type submissionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submissions
     */
    select?: submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submissions
     */
    omit?: submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionsInclude<ExtArgs> | null
    /**
     * Filter, which submissions to fetch.
     */
    where?: submissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of submissions to fetch.
     */
    orderBy?: submissionsOrderByWithRelationInput | submissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing submissions.
     */
    cursor?: submissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` submissions.
     */
    skip?: number
    distinct?: SubmissionsScalarFieldEnum | SubmissionsScalarFieldEnum[]
  }

  /**
   * submissions create
   */
  export type submissionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submissions
     */
    select?: submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submissions
     */
    omit?: submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionsInclude<ExtArgs> | null
    /**
     * The data needed to create a submissions.
     */
    data: XOR<submissionsCreateInput, submissionsUncheckedCreateInput>
  }

  /**
   * submissions createMany
   */
  export type submissionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many submissions.
     */
    data: submissionsCreateManyInput | submissionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * submissions update
   */
  export type submissionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submissions
     */
    select?: submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submissions
     */
    omit?: submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionsInclude<ExtArgs> | null
    /**
     * The data needed to update a submissions.
     */
    data: XOR<submissionsUpdateInput, submissionsUncheckedUpdateInput>
    /**
     * Choose, which submissions to update.
     */
    where: submissionsWhereUniqueInput
  }

  /**
   * submissions updateMany
   */
  export type submissionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update submissions.
     */
    data: XOR<submissionsUpdateManyMutationInput, submissionsUncheckedUpdateManyInput>
    /**
     * Filter which submissions to update
     */
    where?: submissionsWhereInput
    /**
     * Limit how many submissions to update.
     */
    limit?: number
  }

  /**
   * submissions upsert
   */
  export type submissionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submissions
     */
    select?: submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submissions
     */
    omit?: submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionsInclude<ExtArgs> | null
    /**
     * The filter to search for the submissions to update in case it exists.
     */
    where: submissionsWhereUniqueInput
    /**
     * In case the submissions found by the `where` argument doesn't exist, create a new submissions with this data.
     */
    create: XOR<submissionsCreateInput, submissionsUncheckedCreateInput>
    /**
     * In case the submissions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<submissionsUpdateInput, submissionsUncheckedUpdateInput>
  }

  /**
   * submissions delete
   */
  export type submissionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submissions
     */
    select?: submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submissions
     */
    omit?: submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionsInclude<ExtArgs> | null
    /**
     * Filter which submissions to delete.
     */
    where: submissionsWhereUniqueInput
  }

  /**
   * submissions deleteMany
   */
  export type submissionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which submissions to delete
     */
    where?: submissionsWhereInput
    /**
     * Limit how many submissions to delete.
     */
    limit?: number
  }

  /**
   * submissions.submissionresults
   */
  export type submissions$submissionresultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submissionresults
     */
    select?: submissionresultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submissionresults
     */
    omit?: submissionresultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionresultsInclude<ExtArgs> | null
    where?: submissionresultsWhereInput
    orderBy?: submissionresultsOrderByWithRelationInput | submissionresultsOrderByWithRelationInput[]
    cursor?: submissionresultsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionresultsScalarFieldEnum | SubmissionresultsScalarFieldEnum[]
  }

  /**
   * submissions without action
   */
  export type submissionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submissions
     */
    select?: submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submissions
     */
    omit?: submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionsInclude<ExtArgs> | null
  }


  /**
   * Model testcases
   */

  export type AggregateTestcases = {
    _count: TestcasesCountAggregateOutputType | null
    _min: TestcasesMinAggregateOutputType | null
    _max: TestcasesMaxAggregateOutputType | null
  }

  export type TestcasesMinAggregateOutputType = {
    TID: string | null
    PID: string | null
    InputData: string | null
    ExpectedOutput: string | null
  }

  export type TestcasesMaxAggregateOutputType = {
    TID: string | null
    PID: string | null
    InputData: string | null
    ExpectedOutput: string | null
  }

  export type TestcasesCountAggregateOutputType = {
    TID: number
    PID: number
    InputData: number
    ExpectedOutput: number
    _all: number
  }


  export type TestcasesMinAggregateInputType = {
    TID?: true
    PID?: true
    InputData?: true
    ExpectedOutput?: true
  }

  export type TestcasesMaxAggregateInputType = {
    TID?: true
    PID?: true
    InputData?: true
    ExpectedOutput?: true
  }

  export type TestcasesCountAggregateInputType = {
    TID?: true
    PID?: true
    InputData?: true
    ExpectedOutput?: true
    _all?: true
  }

  export type TestcasesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which testcases to aggregate.
     */
    where?: testcasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of testcases to fetch.
     */
    orderBy?: testcasesOrderByWithRelationInput | testcasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: testcasesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` testcases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` testcases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned testcases
    **/
    _count?: true | TestcasesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestcasesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestcasesMaxAggregateInputType
  }

  export type GetTestcasesAggregateType<T extends TestcasesAggregateArgs> = {
        [P in keyof T & keyof AggregateTestcases]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestcases[P]>
      : GetScalarType<T[P], AggregateTestcases[P]>
  }




  export type testcasesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: testcasesWhereInput
    orderBy?: testcasesOrderByWithAggregationInput | testcasesOrderByWithAggregationInput[]
    by: TestcasesScalarFieldEnum[] | TestcasesScalarFieldEnum
    having?: testcasesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestcasesCountAggregateInputType | true
    _min?: TestcasesMinAggregateInputType
    _max?: TestcasesMaxAggregateInputType
  }

  export type TestcasesGroupByOutputType = {
    TID: string
    PID: string
    InputData: string
    ExpectedOutput: string
    _count: TestcasesCountAggregateOutputType | null
    _min: TestcasesMinAggregateOutputType | null
    _max: TestcasesMaxAggregateOutputType | null
  }

  type GetTestcasesGroupByPayload<T extends testcasesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestcasesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestcasesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestcasesGroupByOutputType[P]>
            : GetScalarType<T[P], TestcasesGroupByOutputType[P]>
        }
      >
    >


  export type testcasesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    TID?: boolean
    PID?: boolean
    InputData?: boolean
    ExpectedOutput?: boolean
    submissionresults?: boolean | testcases$submissionresultsArgs<ExtArgs>
    problems?: boolean | problemsDefaultArgs<ExtArgs>
    _count?: boolean | TestcasesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testcases"]>



  export type testcasesSelectScalar = {
    TID?: boolean
    PID?: boolean
    InputData?: boolean
    ExpectedOutput?: boolean
  }

  export type testcasesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"TID" | "PID" | "InputData" | "ExpectedOutput", ExtArgs["result"]["testcases"]>
  export type testcasesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submissionresults?: boolean | testcases$submissionresultsArgs<ExtArgs>
    problems?: boolean | problemsDefaultArgs<ExtArgs>
    _count?: boolean | TestcasesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $testcasesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "testcases"
    objects: {
      submissionresults: Prisma.$submissionresultsPayload<ExtArgs>[]
      problems: Prisma.$problemsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      TID: string
      PID: string
      InputData: string
      ExpectedOutput: string
    }, ExtArgs["result"]["testcases"]>
    composites: {}
  }

  type testcasesGetPayload<S extends boolean | null | undefined | testcasesDefaultArgs> = $Result.GetResult<Prisma.$testcasesPayload, S>

  type testcasesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<testcasesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TestcasesCountAggregateInputType | true
    }

  export interface testcasesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['testcases'], meta: { name: 'testcases' } }
    /**
     * Find zero or one Testcases that matches the filter.
     * @param {testcasesFindUniqueArgs} args - Arguments to find a Testcases
     * @example
     * // Get one Testcases
     * const testcases = await prisma.testcases.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends testcasesFindUniqueArgs>(args: SelectSubset<T, testcasesFindUniqueArgs<ExtArgs>>): Prisma__testcasesClient<$Result.GetResult<Prisma.$testcasesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Testcases that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {testcasesFindUniqueOrThrowArgs} args - Arguments to find a Testcases
     * @example
     * // Get one Testcases
     * const testcases = await prisma.testcases.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends testcasesFindUniqueOrThrowArgs>(args: SelectSubset<T, testcasesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__testcasesClient<$Result.GetResult<Prisma.$testcasesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Testcases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testcasesFindFirstArgs} args - Arguments to find a Testcases
     * @example
     * // Get one Testcases
     * const testcases = await prisma.testcases.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends testcasesFindFirstArgs>(args?: SelectSubset<T, testcasesFindFirstArgs<ExtArgs>>): Prisma__testcasesClient<$Result.GetResult<Prisma.$testcasesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Testcases that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testcasesFindFirstOrThrowArgs} args - Arguments to find a Testcases
     * @example
     * // Get one Testcases
     * const testcases = await prisma.testcases.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends testcasesFindFirstOrThrowArgs>(args?: SelectSubset<T, testcasesFindFirstOrThrowArgs<ExtArgs>>): Prisma__testcasesClient<$Result.GetResult<Prisma.$testcasesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Testcases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testcasesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Testcases
     * const testcases = await prisma.testcases.findMany()
     * 
     * // Get first 10 Testcases
     * const testcases = await prisma.testcases.findMany({ take: 10 })
     * 
     * // Only select the `TID`
     * const testcasesWithTIDOnly = await prisma.testcases.findMany({ select: { TID: true } })
     * 
     */
    findMany<T extends testcasesFindManyArgs>(args?: SelectSubset<T, testcasesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$testcasesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Testcases.
     * @param {testcasesCreateArgs} args - Arguments to create a Testcases.
     * @example
     * // Create one Testcases
     * const Testcases = await prisma.testcases.create({
     *   data: {
     *     // ... data to create a Testcases
     *   }
     * })
     * 
     */
    create<T extends testcasesCreateArgs>(args: SelectSubset<T, testcasesCreateArgs<ExtArgs>>): Prisma__testcasesClient<$Result.GetResult<Prisma.$testcasesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Testcases.
     * @param {testcasesCreateManyArgs} args - Arguments to create many Testcases.
     * @example
     * // Create many Testcases
     * const testcases = await prisma.testcases.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends testcasesCreateManyArgs>(args?: SelectSubset<T, testcasesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Testcases.
     * @param {testcasesDeleteArgs} args - Arguments to delete one Testcases.
     * @example
     * // Delete one Testcases
     * const Testcases = await prisma.testcases.delete({
     *   where: {
     *     // ... filter to delete one Testcases
     *   }
     * })
     * 
     */
    delete<T extends testcasesDeleteArgs>(args: SelectSubset<T, testcasesDeleteArgs<ExtArgs>>): Prisma__testcasesClient<$Result.GetResult<Prisma.$testcasesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Testcases.
     * @param {testcasesUpdateArgs} args - Arguments to update one Testcases.
     * @example
     * // Update one Testcases
     * const testcases = await prisma.testcases.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends testcasesUpdateArgs>(args: SelectSubset<T, testcasesUpdateArgs<ExtArgs>>): Prisma__testcasesClient<$Result.GetResult<Prisma.$testcasesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Testcases.
     * @param {testcasesDeleteManyArgs} args - Arguments to filter Testcases to delete.
     * @example
     * // Delete a few Testcases
     * const { count } = await prisma.testcases.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends testcasesDeleteManyArgs>(args?: SelectSubset<T, testcasesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Testcases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testcasesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Testcases
     * const testcases = await prisma.testcases.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends testcasesUpdateManyArgs>(args: SelectSubset<T, testcasesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Testcases.
     * @param {testcasesUpsertArgs} args - Arguments to update or create a Testcases.
     * @example
     * // Update or create a Testcases
     * const testcases = await prisma.testcases.upsert({
     *   create: {
     *     // ... data to create a Testcases
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Testcases we want to update
     *   }
     * })
     */
    upsert<T extends testcasesUpsertArgs>(args: SelectSubset<T, testcasesUpsertArgs<ExtArgs>>): Prisma__testcasesClient<$Result.GetResult<Prisma.$testcasesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Testcases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testcasesCountArgs} args - Arguments to filter Testcases to count.
     * @example
     * // Count the number of Testcases
     * const count = await prisma.testcases.count({
     *   where: {
     *     // ... the filter for the Testcases we want to count
     *   }
     * })
    **/
    count<T extends testcasesCountArgs>(
      args?: Subset<T, testcasesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestcasesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Testcases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestcasesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TestcasesAggregateArgs>(args: Subset<T, TestcasesAggregateArgs>): Prisma.PrismaPromise<GetTestcasesAggregateType<T>>

    /**
     * Group by Testcases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testcasesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends testcasesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: testcasesGroupByArgs['orderBy'] }
        : { orderBy?: testcasesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, testcasesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestcasesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the testcases model
   */
  readonly fields: testcasesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for testcases.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__testcasesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    submissionresults<T extends testcases$submissionresultsArgs<ExtArgs> = {}>(args?: Subset<T, testcases$submissionresultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$submissionresultsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    problems<T extends problemsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, problemsDefaultArgs<ExtArgs>>): Prisma__problemsClient<$Result.GetResult<Prisma.$problemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the testcases model
   */
  interface testcasesFieldRefs {
    readonly TID: FieldRef<"testcases", 'String'>
    readonly PID: FieldRef<"testcases", 'String'>
    readonly InputData: FieldRef<"testcases", 'String'>
    readonly ExpectedOutput: FieldRef<"testcases", 'String'>
  }
    

  // Custom InputTypes
  /**
   * testcases findUnique
   */
  export type testcasesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testcases
     */
    select?: testcasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the testcases
     */
    omit?: testcasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testcasesInclude<ExtArgs> | null
    /**
     * Filter, which testcases to fetch.
     */
    where: testcasesWhereUniqueInput
  }

  /**
   * testcases findUniqueOrThrow
   */
  export type testcasesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testcases
     */
    select?: testcasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the testcases
     */
    omit?: testcasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testcasesInclude<ExtArgs> | null
    /**
     * Filter, which testcases to fetch.
     */
    where: testcasesWhereUniqueInput
  }

  /**
   * testcases findFirst
   */
  export type testcasesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testcases
     */
    select?: testcasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the testcases
     */
    omit?: testcasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testcasesInclude<ExtArgs> | null
    /**
     * Filter, which testcases to fetch.
     */
    where?: testcasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of testcases to fetch.
     */
    orderBy?: testcasesOrderByWithRelationInput | testcasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for testcases.
     */
    cursor?: testcasesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` testcases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` testcases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of testcases.
     */
    distinct?: TestcasesScalarFieldEnum | TestcasesScalarFieldEnum[]
  }

  /**
   * testcases findFirstOrThrow
   */
  export type testcasesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testcases
     */
    select?: testcasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the testcases
     */
    omit?: testcasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testcasesInclude<ExtArgs> | null
    /**
     * Filter, which testcases to fetch.
     */
    where?: testcasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of testcases to fetch.
     */
    orderBy?: testcasesOrderByWithRelationInput | testcasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for testcases.
     */
    cursor?: testcasesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` testcases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` testcases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of testcases.
     */
    distinct?: TestcasesScalarFieldEnum | TestcasesScalarFieldEnum[]
  }

  /**
   * testcases findMany
   */
  export type testcasesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testcases
     */
    select?: testcasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the testcases
     */
    omit?: testcasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testcasesInclude<ExtArgs> | null
    /**
     * Filter, which testcases to fetch.
     */
    where?: testcasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of testcases to fetch.
     */
    orderBy?: testcasesOrderByWithRelationInput | testcasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing testcases.
     */
    cursor?: testcasesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` testcases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` testcases.
     */
    skip?: number
    distinct?: TestcasesScalarFieldEnum | TestcasesScalarFieldEnum[]
  }

  /**
   * testcases create
   */
  export type testcasesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testcases
     */
    select?: testcasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the testcases
     */
    omit?: testcasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testcasesInclude<ExtArgs> | null
    /**
     * The data needed to create a testcases.
     */
    data: XOR<testcasesCreateInput, testcasesUncheckedCreateInput>
  }

  /**
   * testcases createMany
   */
  export type testcasesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many testcases.
     */
    data: testcasesCreateManyInput | testcasesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * testcases update
   */
  export type testcasesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testcases
     */
    select?: testcasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the testcases
     */
    omit?: testcasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testcasesInclude<ExtArgs> | null
    /**
     * The data needed to update a testcases.
     */
    data: XOR<testcasesUpdateInput, testcasesUncheckedUpdateInput>
    /**
     * Choose, which testcases to update.
     */
    where: testcasesWhereUniqueInput
  }

  /**
   * testcases updateMany
   */
  export type testcasesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update testcases.
     */
    data: XOR<testcasesUpdateManyMutationInput, testcasesUncheckedUpdateManyInput>
    /**
     * Filter which testcases to update
     */
    where?: testcasesWhereInput
    /**
     * Limit how many testcases to update.
     */
    limit?: number
  }

  /**
   * testcases upsert
   */
  export type testcasesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testcases
     */
    select?: testcasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the testcases
     */
    omit?: testcasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testcasesInclude<ExtArgs> | null
    /**
     * The filter to search for the testcases to update in case it exists.
     */
    where: testcasesWhereUniqueInput
    /**
     * In case the testcases found by the `where` argument doesn't exist, create a new testcases with this data.
     */
    create: XOR<testcasesCreateInput, testcasesUncheckedCreateInput>
    /**
     * In case the testcases was found with the provided `where` argument, update it with this data.
     */
    update: XOR<testcasesUpdateInput, testcasesUncheckedUpdateInput>
  }

  /**
   * testcases delete
   */
  export type testcasesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testcases
     */
    select?: testcasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the testcases
     */
    omit?: testcasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testcasesInclude<ExtArgs> | null
    /**
     * Filter which testcases to delete.
     */
    where: testcasesWhereUniqueInput
  }

  /**
   * testcases deleteMany
   */
  export type testcasesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which testcases to delete
     */
    where?: testcasesWhereInput
    /**
     * Limit how many testcases to delete.
     */
    limit?: number
  }

  /**
   * testcases.submissionresults
   */
  export type testcases$submissionresultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submissionresults
     */
    select?: submissionresultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submissionresults
     */
    omit?: submissionresultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionresultsInclude<ExtArgs> | null
    where?: submissionresultsWhereInput
    orderBy?: submissionresultsOrderByWithRelationInput | submissionresultsOrderByWithRelationInput[]
    cursor?: submissionresultsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionresultsScalarFieldEnum | SubmissionresultsScalarFieldEnum[]
  }

  /**
   * testcases without action
   */
  export type testcasesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testcases
     */
    select?: testcasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the testcases
     */
    omit?: testcasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testcasesInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    UID: string | null
    FirstName: string | null
    LastName: string | null
    Email: string | null
    Password: string | null
    Role: $Enums.users_Role | null
    CreatedAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    UID: string | null
    FirstName: string | null
    LastName: string | null
    Email: string | null
    Password: string | null
    Role: $Enums.users_Role | null
    CreatedAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    UID: number
    FirstName: number
    LastName: number
    Email: number
    Password: number
    Role: number
    CreatedAt: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    UID?: true
    FirstName?: true
    LastName?: true
    Email?: true
    Password?: true
    Role?: true
    CreatedAt?: true
  }

  export type UsersMaxAggregateInputType = {
    UID?: true
    FirstName?: true
    LastName?: true
    Email?: true
    Password?: true
    Role?: true
    CreatedAt?: true
  }

  export type UsersCountAggregateInputType = {
    UID?: true
    FirstName?: true
    LastName?: true
    Email?: true
    Password?: true
    Role?: true
    CreatedAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    UID: string
    FirstName: string
    LastName: string
    Email: string
    Password: string
    Role: $Enums.users_Role
    CreatedAt: Date | null
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    UID?: boolean
    FirstName?: boolean
    LastName?: boolean
    Email?: boolean
    Password?: boolean
    Role?: boolean
    CreatedAt?: boolean
    submissions?: boolean | users$submissionsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type usersSelectScalar = {
    UID?: boolean
    FirstName?: boolean
    LastName?: boolean
    Email?: boolean
    Password?: boolean
    Role?: boolean
    CreatedAt?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"UID" | "FirstName" | "LastName" | "Email" | "Password" | "Role" | "CreatedAt", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submissions?: boolean | users$submissionsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      submissions: Prisma.$submissionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      UID: string
      FirstName: string
      LastName: string
      Email: string
      Password: string
      Role: $Enums.users_Role
      CreatedAt: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `UID`
     * const usersWithUIDOnly = await prisma.users.findMany({ select: { UID: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    submissions<T extends users$submissionsArgs<ExtArgs> = {}>(args?: Subset<T, users$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$submissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly UID: FieldRef<"users", 'String'>
    readonly FirstName: FieldRef<"users", 'String'>
    readonly LastName: FieldRef<"users", 'String'>
    readonly Email: FieldRef<"users", 'String'>
    readonly Password: FieldRef<"users", 'String'>
    readonly Role: FieldRef<"users", 'users_Role'>
    readonly CreatedAt: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.submissions
   */
  export type users$submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submissions
     */
    select?: submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submissions
     */
    omit?: submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionsInclude<ExtArgs> | null
    where?: submissionsWhereInput
    orderBy?: submissionsOrderByWithRelationInput | submissionsOrderByWithRelationInput[]
    cursor?: submissionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionsScalarFieldEnum | SubmissionsScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ProblemsScalarFieldEnum: {
    PID: 'PID',
    Title: 'Title',
    Description: 'Description',
    Difficulty: 'Difficulty',
    Topic: 'Topic',
    CreatedAt: 'CreatedAt'
  };

  export type ProblemsScalarFieldEnum = (typeof ProblemsScalarFieldEnum)[keyof typeof ProblemsScalarFieldEnum]


  export const SubmissionresultsScalarFieldEnum: {
    SRID: 'SRID',
    SID: 'SID',
    TID: 'TID',
    Result: 'Result',
    ExecutionTime: 'ExecutionTime'
  };

  export type SubmissionresultsScalarFieldEnum = (typeof SubmissionresultsScalarFieldEnum)[keyof typeof SubmissionresultsScalarFieldEnum]


  export const SubmissionsScalarFieldEnum: {
    SID: 'SID',
    UID: 'UID',
    PID: 'PID',
    Code: 'Code',
    Status: 'Status',
    TimeOfSubmission: 'TimeOfSubmission'
  };

  export type SubmissionsScalarFieldEnum = (typeof SubmissionsScalarFieldEnum)[keyof typeof SubmissionsScalarFieldEnum]


  export const TestcasesScalarFieldEnum: {
    TID: 'TID',
    PID: 'PID',
    InputData: 'InputData',
    ExpectedOutput: 'ExpectedOutput'
  };

  export type TestcasesScalarFieldEnum = (typeof TestcasesScalarFieldEnum)[keyof typeof TestcasesScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    UID: 'UID',
    FirstName: 'FirstName',
    LastName: 'LastName',
    Email: 'Email',
    Password: 'Password',
    Role: 'Role',
    CreatedAt: 'CreatedAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const problemsOrderByRelevanceFieldEnum: {
    PID: 'PID',
    Title: 'Title',
    Description: 'Description',
    Topic: 'Topic'
  };

  export type problemsOrderByRelevanceFieldEnum = (typeof problemsOrderByRelevanceFieldEnum)[keyof typeof problemsOrderByRelevanceFieldEnum]


  export const submissionresultsOrderByRelevanceFieldEnum: {
    SRID: 'SRID',
    SID: 'SID',
    TID: 'TID'
  };

  export type submissionresultsOrderByRelevanceFieldEnum = (typeof submissionresultsOrderByRelevanceFieldEnum)[keyof typeof submissionresultsOrderByRelevanceFieldEnum]


  export const submissionsOrderByRelevanceFieldEnum: {
    SID: 'SID',
    UID: 'UID',
    PID: 'PID',
    Code: 'Code'
  };

  export type submissionsOrderByRelevanceFieldEnum = (typeof submissionsOrderByRelevanceFieldEnum)[keyof typeof submissionsOrderByRelevanceFieldEnum]


  export const testcasesOrderByRelevanceFieldEnum: {
    TID: 'TID',
    PID: 'PID',
    InputData: 'InputData',
    ExpectedOutput: 'ExpectedOutput'
  };

  export type testcasesOrderByRelevanceFieldEnum = (typeof testcasesOrderByRelevanceFieldEnum)[keyof typeof testcasesOrderByRelevanceFieldEnum]


  export const usersOrderByRelevanceFieldEnum: {
    UID: 'UID',
    FirstName: 'FirstName',
    LastName: 'LastName',
    Email: 'Email',
    Password: 'Password'
  };

  export type usersOrderByRelevanceFieldEnum = (typeof usersOrderByRelevanceFieldEnum)[keyof typeof usersOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'problems_Difficulty'
   */
  export type Enumproblems_DifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'problems_Difficulty'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'submissionresults_Result'
   */
  export type Enumsubmissionresults_ResultFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'submissionresults_Result'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'submissions_Status'
   */
  export type Enumsubmissions_StatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'submissions_Status'>
    


  /**
   * Reference to a field of type 'users_Role'
   */
  export type Enumusers_RoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'users_Role'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type problemsWhereInput = {
    AND?: problemsWhereInput | problemsWhereInput[]
    OR?: problemsWhereInput[]
    NOT?: problemsWhereInput | problemsWhereInput[]
    PID?: StringFilter<"problems"> | string
    Title?: StringNullableFilter<"problems"> | string | null
    Description?: StringNullableFilter<"problems"> | string | null
    Difficulty?: Enumproblems_DifficultyFilter<"problems"> | $Enums.problems_Difficulty
    Topic?: StringNullableFilter<"problems"> | string | null
    CreatedAt?: DateTimeNullableFilter<"problems"> | Date | string | null
    submissions?: SubmissionsListRelationFilter
    testcases?: TestcasesListRelationFilter
  }

  export type problemsOrderByWithRelationInput = {
    PID?: SortOrder
    Title?: SortOrderInput | SortOrder
    Description?: SortOrderInput | SortOrder
    Difficulty?: SortOrder
    Topic?: SortOrderInput | SortOrder
    CreatedAt?: SortOrderInput | SortOrder
    submissions?: submissionsOrderByRelationAggregateInput
    testcases?: testcasesOrderByRelationAggregateInput
    _relevance?: problemsOrderByRelevanceInput
  }

  export type problemsWhereUniqueInput = Prisma.AtLeast<{
    PID?: string
    AND?: problemsWhereInput | problemsWhereInput[]
    OR?: problemsWhereInput[]
    NOT?: problemsWhereInput | problemsWhereInput[]
    Title?: StringNullableFilter<"problems"> | string | null
    Description?: StringNullableFilter<"problems"> | string | null
    Difficulty?: Enumproblems_DifficultyFilter<"problems"> | $Enums.problems_Difficulty
    Topic?: StringNullableFilter<"problems"> | string | null
    CreatedAt?: DateTimeNullableFilter<"problems"> | Date | string | null
    submissions?: SubmissionsListRelationFilter
    testcases?: TestcasesListRelationFilter
  }, "PID">

  export type problemsOrderByWithAggregationInput = {
    PID?: SortOrder
    Title?: SortOrderInput | SortOrder
    Description?: SortOrderInput | SortOrder
    Difficulty?: SortOrder
    Topic?: SortOrderInput | SortOrder
    CreatedAt?: SortOrderInput | SortOrder
    _count?: problemsCountOrderByAggregateInput
    _max?: problemsMaxOrderByAggregateInput
    _min?: problemsMinOrderByAggregateInput
  }

  export type problemsScalarWhereWithAggregatesInput = {
    AND?: problemsScalarWhereWithAggregatesInput | problemsScalarWhereWithAggregatesInput[]
    OR?: problemsScalarWhereWithAggregatesInput[]
    NOT?: problemsScalarWhereWithAggregatesInput | problemsScalarWhereWithAggregatesInput[]
    PID?: StringWithAggregatesFilter<"problems"> | string
    Title?: StringNullableWithAggregatesFilter<"problems"> | string | null
    Description?: StringNullableWithAggregatesFilter<"problems"> | string | null
    Difficulty?: Enumproblems_DifficultyWithAggregatesFilter<"problems"> | $Enums.problems_Difficulty
    Topic?: StringNullableWithAggregatesFilter<"problems"> | string | null
    CreatedAt?: DateTimeNullableWithAggregatesFilter<"problems"> | Date | string | null
  }

  export type submissionresultsWhereInput = {
    AND?: submissionresultsWhereInput | submissionresultsWhereInput[]
    OR?: submissionresultsWhereInput[]
    NOT?: submissionresultsWhereInput | submissionresultsWhereInput[]
    SRID?: StringFilter<"submissionresults"> | string
    SID?: StringFilter<"submissionresults"> | string
    TID?: StringFilter<"submissionresults"> | string
    Result?: Enumsubmissionresults_ResultFilter<"submissionresults"> | $Enums.submissionresults_Result
    ExecutionTime?: FloatNullableFilter<"submissionresults"> | number | null
    submissions?: XOR<SubmissionsScalarRelationFilter, submissionsWhereInput>
    testcases?: XOR<TestcasesScalarRelationFilter, testcasesWhereInput>
  }

  export type submissionresultsOrderByWithRelationInput = {
    SRID?: SortOrder
    SID?: SortOrder
    TID?: SortOrder
    Result?: SortOrder
    ExecutionTime?: SortOrderInput | SortOrder
    submissions?: submissionsOrderByWithRelationInput
    testcases?: testcasesOrderByWithRelationInput
    _relevance?: submissionresultsOrderByRelevanceInput
  }

  export type submissionresultsWhereUniqueInput = Prisma.AtLeast<{
    SRID?: string
    AND?: submissionresultsWhereInput | submissionresultsWhereInput[]
    OR?: submissionresultsWhereInput[]
    NOT?: submissionresultsWhereInput | submissionresultsWhereInput[]
    SID?: StringFilter<"submissionresults"> | string
    TID?: StringFilter<"submissionresults"> | string
    Result?: Enumsubmissionresults_ResultFilter<"submissionresults"> | $Enums.submissionresults_Result
    ExecutionTime?: FloatNullableFilter<"submissionresults"> | number | null
    submissions?: XOR<SubmissionsScalarRelationFilter, submissionsWhereInput>
    testcases?: XOR<TestcasesScalarRelationFilter, testcasesWhereInput>
  }, "SRID">

  export type submissionresultsOrderByWithAggregationInput = {
    SRID?: SortOrder
    SID?: SortOrder
    TID?: SortOrder
    Result?: SortOrder
    ExecutionTime?: SortOrderInput | SortOrder
    _count?: submissionresultsCountOrderByAggregateInput
    _avg?: submissionresultsAvgOrderByAggregateInput
    _max?: submissionresultsMaxOrderByAggregateInput
    _min?: submissionresultsMinOrderByAggregateInput
    _sum?: submissionresultsSumOrderByAggregateInput
  }

  export type submissionresultsScalarWhereWithAggregatesInput = {
    AND?: submissionresultsScalarWhereWithAggregatesInput | submissionresultsScalarWhereWithAggregatesInput[]
    OR?: submissionresultsScalarWhereWithAggregatesInput[]
    NOT?: submissionresultsScalarWhereWithAggregatesInput | submissionresultsScalarWhereWithAggregatesInput[]
    SRID?: StringWithAggregatesFilter<"submissionresults"> | string
    SID?: StringWithAggregatesFilter<"submissionresults"> | string
    TID?: StringWithAggregatesFilter<"submissionresults"> | string
    Result?: Enumsubmissionresults_ResultWithAggregatesFilter<"submissionresults"> | $Enums.submissionresults_Result
    ExecutionTime?: FloatNullableWithAggregatesFilter<"submissionresults"> | number | null
  }

  export type submissionsWhereInput = {
    AND?: submissionsWhereInput | submissionsWhereInput[]
    OR?: submissionsWhereInput[]
    NOT?: submissionsWhereInput | submissionsWhereInput[]
    SID?: StringFilter<"submissions"> | string
    UID?: StringFilter<"submissions"> | string
    PID?: StringFilter<"submissions"> | string
    Code?: StringFilter<"submissions"> | string
    Status?: Enumsubmissions_StatusFilter<"submissions"> | $Enums.submissions_Status
    TimeOfSubmission?: DateTimeNullableFilter<"submissions"> | Date | string | null
    submissionresults?: SubmissionresultsListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    problems?: XOR<ProblemsScalarRelationFilter, problemsWhereInput>
  }

  export type submissionsOrderByWithRelationInput = {
    SID?: SortOrder
    UID?: SortOrder
    PID?: SortOrder
    Code?: SortOrder
    Status?: SortOrder
    TimeOfSubmission?: SortOrderInput | SortOrder
    submissionresults?: submissionresultsOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
    problems?: problemsOrderByWithRelationInput
    _relevance?: submissionsOrderByRelevanceInput
  }

  export type submissionsWhereUniqueInput = Prisma.AtLeast<{
    SID?: string
    AND?: submissionsWhereInput | submissionsWhereInput[]
    OR?: submissionsWhereInput[]
    NOT?: submissionsWhereInput | submissionsWhereInput[]
    UID?: StringFilter<"submissions"> | string
    PID?: StringFilter<"submissions"> | string
    Code?: StringFilter<"submissions"> | string
    Status?: Enumsubmissions_StatusFilter<"submissions"> | $Enums.submissions_Status
    TimeOfSubmission?: DateTimeNullableFilter<"submissions"> | Date | string | null
    submissionresults?: SubmissionresultsListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    problems?: XOR<ProblemsScalarRelationFilter, problemsWhereInput>
  }, "SID">

  export type submissionsOrderByWithAggregationInput = {
    SID?: SortOrder
    UID?: SortOrder
    PID?: SortOrder
    Code?: SortOrder
    Status?: SortOrder
    TimeOfSubmission?: SortOrderInput | SortOrder
    _count?: submissionsCountOrderByAggregateInput
    _max?: submissionsMaxOrderByAggregateInput
    _min?: submissionsMinOrderByAggregateInput
  }

  export type submissionsScalarWhereWithAggregatesInput = {
    AND?: submissionsScalarWhereWithAggregatesInput | submissionsScalarWhereWithAggregatesInput[]
    OR?: submissionsScalarWhereWithAggregatesInput[]
    NOT?: submissionsScalarWhereWithAggregatesInput | submissionsScalarWhereWithAggregatesInput[]
    SID?: StringWithAggregatesFilter<"submissions"> | string
    UID?: StringWithAggregatesFilter<"submissions"> | string
    PID?: StringWithAggregatesFilter<"submissions"> | string
    Code?: StringWithAggregatesFilter<"submissions"> | string
    Status?: Enumsubmissions_StatusWithAggregatesFilter<"submissions"> | $Enums.submissions_Status
    TimeOfSubmission?: DateTimeNullableWithAggregatesFilter<"submissions"> | Date | string | null
  }

  export type testcasesWhereInput = {
    AND?: testcasesWhereInput | testcasesWhereInput[]
    OR?: testcasesWhereInput[]
    NOT?: testcasesWhereInput | testcasesWhereInput[]
    TID?: StringFilter<"testcases"> | string
    PID?: StringFilter<"testcases"> | string
    InputData?: StringFilter<"testcases"> | string
    ExpectedOutput?: StringFilter<"testcases"> | string
    submissionresults?: SubmissionresultsListRelationFilter
    problems?: XOR<ProblemsScalarRelationFilter, problemsWhereInput>
  }

  export type testcasesOrderByWithRelationInput = {
    TID?: SortOrder
    PID?: SortOrder
    InputData?: SortOrder
    ExpectedOutput?: SortOrder
    submissionresults?: submissionresultsOrderByRelationAggregateInput
    problems?: problemsOrderByWithRelationInput
    _relevance?: testcasesOrderByRelevanceInput
  }

  export type testcasesWhereUniqueInput = Prisma.AtLeast<{
    TID?: string
    AND?: testcasesWhereInput | testcasesWhereInput[]
    OR?: testcasesWhereInput[]
    NOT?: testcasesWhereInput | testcasesWhereInput[]
    PID?: StringFilter<"testcases"> | string
    InputData?: StringFilter<"testcases"> | string
    ExpectedOutput?: StringFilter<"testcases"> | string
    submissionresults?: SubmissionresultsListRelationFilter
    problems?: XOR<ProblemsScalarRelationFilter, problemsWhereInput>
  }, "TID">

  export type testcasesOrderByWithAggregationInput = {
    TID?: SortOrder
    PID?: SortOrder
    InputData?: SortOrder
    ExpectedOutput?: SortOrder
    _count?: testcasesCountOrderByAggregateInput
    _max?: testcasesMaxOrderByAggregateInput
    _min?: testcasesMinOrderByAggregateInput
  }

  export type testcasesScalarWhereWithAggregatesInput = {
    AND?: testcasesScalarWhereWithAggregatesInput | testcasesScalarWhereWithAggregatesInput[]
    OR?: testcasesScalarWhereWithAggregatesInput[]
    NOT?: testcasesScalarWhereWithAggregatesInput | testcasesScalarWhereWithAggregatesInput[]
    TID?: StringWithAggregatesFilter<"testcases"> | string
    PID?: StringWithAggregatesFilter<"testcases"> | string
    InputData?: StringWithAggregatesFilter<"testcases"> | string
    ExpectedOutput?: StringWithAggregatesFilter<"testcases"> | string
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    UID?: StringFilter<"users"> | string
    FirstName?: StringFilter<"users"> | string
    LastName?: StringFilter<"users"> | string
    Email?: StringFilter<"users"> | string
    Password?: StringFilter<"users"> | string
    Role?: Enumusers_RoleFilter<"users"> | $Enums.users_Role
    CreatedAt?: DateTimeNullableFilter<"users"> | Date | string | null
    submissions?: SubmissionsListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    UID?: SortOrder
    FirstName?: SortOrder
    LastName?: SortOrder
    Email?: SortOrder
    Password?: SortOrder
    Role?: SortOrder
    CreatedAt?: SortOrderInput | SortOrder
    submissions?: submissionsOrderByRelationAggregateInput
    _relevance?: usersOrderByRelevanceInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    UID?: string
    Email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    FirstName?: StringFilter<"users"> | string
    LastName?: StringFilter<"users"> | string
    Password?: StringFilter<"users"> | string
    Role?: Enumusers_RoleFilter<"users"> | $Enums.users_Role
    CreatedAt?: DateTimeNullableFilter<"users"> | Date | string | null
    submissions?: SubmissionsListRelationFilter
  }, "UID" | "Email">

  export type usersOrderByWithAggregationInput = {
    UID?: SortOrder
    FirstName?: SortOrder
    LastName?: SortOrder
    Email?: SortOrder
    Password?: SortOrder
    Role?: SortOrder
    CreatedAt?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    UID?: StringWithAggregatesFilter<"users"> | string
    FirstName?: StringWithAggregatesFilter<"users"> | string
    LastName?: StringWithAggregatesFilter<"users"> | string
    Email?: StringWithAggregatesFilter<"users"> | string
    Password?: StringWithAggregatesFilter<"users"> | string
    Role?: Enumusers_RoleWithAggregatesFilter<"users"> | $Enums.users_Role
    CreatedAt?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
  }

  export type problemsCreateInput = {
    PID?: string
    Title?: string | null
    Description?: string | null
    Difficulty?: $Enums.problems_Difficulty
    Topic?: string | null
    CreatedAt?: Date | string | null
    submissions?: submissionsCreateNestedManyWithoutProblemsInput
    testcases?: testcasesCreateNestedManyWithoutProblemsInput
  }

  export type problemsUncheckedCreateInput = {
    PID?: string
    Title?: string | null
    Description?: string | null
    Difficulty?: $Enums.problems_Difficulty
    Topic?: string | null
    CreatedAt?: Date | string | null
    submissions?: submissionsUncheckedCreateNestedManyWithoutProblemsInput
    testcases?: testcasesUncheckedCreateNestedManyWithoutProblemsInput
  }

  export type problemsUpdateInput = {
    PID?: StringFieldUpdateOperationsInput | string
    Title?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Difficulty?: Enumproblems_DifficultyFieldUpdateOperationsInput | $Enums.problems_Difficulty
    Topic?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submissions?: submissionsUpdateManyWithoutProblemsNestedInput
    testcases?: testcasesUpdateManyWithoutProblemsNestedInput
  }

  export type problemsUncheckedUpdateInput = {
    PID?: StringFieldUpdateOperationsInput | string
    Title?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Difficulty?: Enumproblems_DifficultyFieldUpdateOperationsInput | $Enums.problems_Difficulty
    Topic?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submissions?: submissionsUncheckedUpdateManyWithoutProblemsNestedInput
    testcases?: testcasesUncheckedUpdateManyWithoutProblemsNestedInput
  }

  export type problemsCreateManyInput = {
    PID?: string
    Title?: string | null
    Description?: string | null
    Difficulty?: $Enums.problems_Difficulty
    Topic?: string | null
    CreatedAt?: Date | string | null
  }

  export type problemsUpdateManyMutationInput = {
    PID?: StringFieldUpdateOperationsInput | string
    Title?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Difficulty?: Enumproblems_DifficultyFieldUpdateOperationsInput | $Enums.problems_Difficulty
    Topic?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type problemsUncheckedUpdateManyInput = {
    PID?: StringFieldUpdateOperationsInput | string
    Title?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Difficulty?: Enumproblems_DifficultyFieldUpdateOperationsInput | $Enums.problems_Difficulty
    Topic?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type submissionresultsCreateInput = {
    SRID?: string
    Result: $Enums.submissionresults_Result
    ExecutionTime?: number | null
    submissions: submissionsCreateNestedOneWithoutSubmissionresultsInput
    testcases: testcasesCreateNestedOneWithoutSubmissionresultsInput
  }

  export type submissionresultsUncheckedCreateInput = {
    SRID?: string
    SID: string
    TID: string
    Result: $Enums.submissionresults_Result
    ExecutionTime?: number | null
  }

  export type submissionresultsUpdateInput = {
    SRID?: StringFieldUpdateOperationsInput | string
    Result?: Enumsubmissionresults_ResultFieldUpdateOperationsInput | $Enums.submissionresults_Result
    ExecutionTime?: NullableFloatFieldUpdateOperationsInput | number | null
    submissions?: submissionsUpdateOneRequiredWithoutSubmissionresultsNestedInput
    testcases?: testcasesUpdateOneRequiredWithoutSubmissionresultsNestedInput
  }

  export type submissionresultsUncheckedUpdateInput = {
    SRID?: StringFieldUpdateOperationsInput | string
    SID?: StringFieldUpdateOperationsInput | string
    TID?: StringFieldUpdateOperationsInput | string
    Result?: Enumsubmissionresults_ResultFieldUpdateOperationsInput | $Enums.submissionresults_Result
    ExecutionTime?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type submissionresultsCreateManyInput = {
    SRID?: string
    SID: string
    TID: string
    Result: $Enums.submissionresults_Result
    ExecutionTime?: number | null
  }

  export type submissionresultsUpdateManyMutationInput = {
    SRID?: StringFieldUpdateOperationsInput | string
    Result?: Enumsubmissionresults_ResultFieldUpdateOperationsInput | $Enums.submissionresults_Result
    ExecutionTime?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type submissionresultsUncheckedUpdateManyInput = {
    SRID?: StringFieldUpdateOperationsInput | string
    SID?: StringFieldUpdateOperationsInput | string
    TID?: StringFieldUpdateOperationsInput | string
    Result?: Enumsubmissionresults_ResultFieldUpdateOperationsInput | $Enums.submissionresults_Result
    ExecutionTime?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type submissionsCreateInput = {
    SID?: string
    Code: string
    Status?: $Enums.submissions_Status
    TimeOfSubmission?: Date | string | null
    submissionresults?: submissionresultsCreateNestedManyWithoutSubmissionsInput
    users: usersCreateNestedOneWithoutSubmissionsInput
    problems: problemsCreateNestedOneWithoutSubmissionsInput
  }

  export type submissionsUncheckedCreateInput = {
    SID?: string
    UID: string
    PID: string
    Code: string
    Status?: $Enums.submissions_Status
    TimeOfSubmission?: Date | string | null
    submissionresults?: submissionresultsUncheckedCreateNestedManyWithoutSubmissionsInput
  }

  export type submissionsUpdateInput = {
    SID?: StringFieldUpdateOperationsInput | string
    Code?: StringFieldUpdateOperationsInput | string
    Status?: Enumsubmissions_StatusFieldUpdateOperationsInput | $Enums.submissions_Status
    TimeOfSubmission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submissionresults?: submissionresultsUpdateManyWithoutSubmissionsNestedInput
    users?: usersUpdateOneRequiredWithoutSubmissionsNestedInput
    problems?: problemsUpdateOneRequiredWithoutSubmissionsNestedInput
  }

  export type submissionsUncheckedUpdateInput = {
    SID?: StringFieldUpdateOperationsInput | string
    UID?: StringFieldUpdateOperationsInput | string
    PID?: StringFieldUpdateOperationsInput | string
    Code?: StringFieldUpdateOperationsInput | string
    Status?: Enumsubmissions_StatusFieldUpdateOperationsInput | $Enums.submissions_Status
    TimeOfSubmission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submissionresults?: submissionresultsUncheckedUpdateManyWithoutSubmissionsNestedInput
  }

  export type submissionsCreateManyInput = {
    SID?: string
    UID: string
    PID: string
    Code: string
    Status?: $Enums.submissions_Status
    TimeOfSubmission?: Date | string | null
  }

  export type submissionsUpdateManyMutationInput = {
    SID?: StringFieldUpdateOperationsInput | string
    Code?: StringFieldUpdateOperationsInput | string
    Status?: Enumsubmissions_StatusFieldUpdateOperationsInput | $Enums.submissions_Status
    TimeOfSubmission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type submissionsUncheckedUpdateManyInput = {
    SID?: StringFieldUpdateOperationsInput | string
    UID?: StringFieldUpdateOperationsInput | string
    PID?: StringFieldUpdateOperationsInput | string
    Code?: StringFieldUpdateOperationsInput | string
    Status?: Enumsubmissions_StatusFieldUpdateOperationsInput | $Enums.submissions_Status
    TimeOfSubmission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type testcasesCreateInput = {
    TID?: string
    InputData: string
    ExpectedOutput: string
    submissionresults?: submissionresultsCreateNestedManyWithoutTestcasesInput
    problems: problemsCreateNestedOneWithoutTestcasesInput
  }

  export type testcasesUncheckedCreateInput = {
    TID?: string
    PID: string
    InputData: string
    ExpectedOutput: string
    submissionresults?: submissionresultsUncheckedCreateNestedManyWithoutTestcasesInput
  }

  export type testcasesUpdateInput = {
    TID?: StringFieldUpdateOperationsInput | string
    InputData?: StringFieldUpdateOperationsInput | string
    ExpectedOutput?: StringFieldUpdateOperationsInput | string
    submissionresults?: submissionresultsUpdateManyWithoutTestcasesNestedInput
    problems?: problemsUpdateOneRequiredWithoutTestcasesNestedInput
  }

  export type testcasesUncheckedUpdateInput = {
    TID?: StringFieldUpdateOperationsInput | string
    PID?: StringFieldUpdateOperationsInput | string
    InputData?: StringFieldUpdateOperationsInput | string
    ExpectedOutput?: StringFieldUpdateOperationsInput | string
    submissionresults?: submissionresultsUncheckedUpdateManyWithoutTestcasesNestedInput
  }

  export type testcasesCreateManyInput = {
    TID?: string
    PID: string
    InputData: string
    ExpectedOutput: string
  }

  export type testcasesUpdateManyMutationInput = {
    TID?: StringFieldUpdateOperationsInput | string
    InputData?: StringFieldUpdateOperationsInput | string
    ExpectedOutput?: StringFieldUpdateOperationsInput | string
  }

  export type testcasesUncheckedUpdateManyInput = {
    TID?: StringFieldUpdateOperationsInput | string
    PID?: StringFieldUpdateOperationsInput | string
    InputData?: StringFieldUpdateOperationsInput | string
    ExpectedOutput?: StringFieldUpdateOperationsInput | string
  }

  export type usersCreateInput = {
    UID?: string
    FirstName: string
    LastName: string
    Email: string
    Password: string
    Role?: $Enums.users_Role
    CreatedAt?: Date | string | null
    submissions?: submissionsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    UID?: string
    FirstName: string
    LastName: string
    Email: string
    Password: string
    Role?: $Enums.users_Role
    CreatedAt?: Date | string | null
    submissions?: submissionsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    UID?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Role?: Enumusers_RoleFieldUpdateOperationsInput | $Enums.users_Role
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submissions?: submissionsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    UID?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Role?: Enumusers_RoleFieldUpdateOperationsInput | $Enums.users_Role
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submissions?: submissionsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    UID?: string
    FirstName: string
    LastName: string
    Email: string
    Password: string
    Role?: $Enums.users_Role
    CreatedAt?: Date | string | null
  }

  export type usersUpdateManyMutationInput = {
    UID?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Role?: Enumusers_RoleFieldUpdateOperationsInput | $Enums.users_Role
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    UID?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Role?: Enumusers_RoleFieldUpdateOperationsInput | $Enums.users_Role
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type Enumproblems_DifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.problems_Difficulty | Enumproblems_DifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.problems_Difficulty[]
    notIn?: $Enums.problems_Difficulty[]
    not?: NestedEnumproblems_DifficultyFilter<$PrismaModel> | $Enums.problems_Difficulty
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SubmissionsListRelationFilter = {
    every?: submissionsWhereInput
    some?: submissionsWhereInput
    none?: submissionsWhereInput
  }

  export type TestcasesListRelationFilter = {
    every?: testcasesWhereInput
    some?: testcasesWhereInput
    none?: testcasesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type submissionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type testcasesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type problemsOrderByRelevanceInput = {
    fields: problemsOrderByRelevanceFieldEnum | problemsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type problemsCountOrderByAggregateInput = {
    PID?: SortOrder
    Title?: SortOrder
    Description?: SortOrder
    Difficulty?: SortOrder
    Topic?: SortOrder
    CreatedAt?: SortOrder
  }

  export type problemsMaxOrderByAggregateInput = {
    PID?: SortOrder
    Title?: SortOrder
    Description?: SortOrder
    Difficulty?: SortOrder
    Topic?: SortOrder
    CreatedAt?: SortOrder
  }

  export type problemsMinOrderByAggregateInput = {
    PID?: SortOrder
    Title?: SortOrder
    Description?: SortOrder
    Difficulty?: SortOrder
    Topic?: SortOrder
    CreatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type Enumproblems_DifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.problems_Difficulty | Enumproblems_DifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.problems_Difficulty[]
    notIn?: $Enums.problems_Difficulty[]
    not?: NestedEnumproblems_DifficultyWithAggregatesFilter<$PrismaModel> | $Enums.problems_Difficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumproblems_DifficultyFilter<$PrismaModel>
    _max?: NestedEnumproblems_DifficultyFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type Enumsubmissionresults_ResultFilter<$PrismaModel = never> = {
    equals?: $Enums.submissionresults_Result | Enumsubmissionresults_ResultFieldRefInput<$PrismaModel>
    in?: $Enums.submissionresults_Result[]
    notIn?: $Enums.submissionresults_Result[]
    not?: NestedEnumsubmissionresults_ResultFilter<$PrismaModel> | $Enums.submissionresults_Result
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type SubmissionsScalarRelationFilter = {
    is?: submissionsWhereInput
    isNot?: submissionsWhereInput
  }

  export type TestcasesScalarRelationFilter = {
    is?: testcasesWhereInput
    isNot?: testcasesWhereInput
  }

  export type submissionresultsOrderByRelevanceInput = {
    fields: submissionresultsOrderByRelevanceFieldEnum | submissionresultsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type submissionresultsCountOrderByAggregateInput = {
    SRID?: SortOrder
    SID?: SortOrder
    TID?: SortOrder
    Result?: SortOrder
    ExecutionTime?: SortOrder
  }

  export type submissionresultsAvgOrderByAggregateInput = {
    ExecutionTime?: SortOrder
  }

  export type submissionresultsMaxOrderByAggregateInput = {
    SRID?: SortOrder
    SID?: SortOrder
    TID?: SortOrder
    Result?: SortOrder
    ExecutionTime?: SortOrder
  }

  export type submissionresultsMinOrderByAggregateInput = {
    SRID?: SortOrder
    SID?: SortOrder
    TID?: SortOrder
    Result?: SortOrder
    ExecutionTime?: SortOrder
  }

  export type submissionresultsSumOrderByAggregateInput = {
    ExecutionTime?: SortOrder
  }

  export type Enumsubmissionresults_ResultWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.submissionresults_Result | Enumsubmissionresults_ResultFieldRefInput<$PrismaModel>
    in?: $Enums.submissionresults_Result[]
    notIn?: $Enums.submissionresults_Result[]
    not?: NestedEnumsubmissionresults_ResultWithAggregatesFilter<$PrismaModel> | $Enums.submissionresults_Result
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumsubmissionresults_ResultFilter<$PrismaModel>
    _max?: NestedEnumsubmissionresults_ResultFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type Enumsubmissions_StatusFilter<$PrismaModel = never> = {
    equals?: $Enums.submissions_Status | Enumsubmissions_StatusFieldRefInput<$PrismaModel>
    in?: $Enums.submissions_Status[]
    notIn?: $Enums.submissions_Status[]
    not?: NestedEnumsubmissions_StatusFilter<$PrismaModel> | $Enums.submissions_Status
  }

  export type SubmissionresultsListRelationFilter = {
    every?: submissionresultsWhereInput
    some?: submissionresultsWhereInput
    none?: submissionresultsWhereInput
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type ProblemsScalarRelationFilter = {
    is?: problemsWhereInput
    isNot?: problemsWhereInput
  }

  export type submissionresultsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type submissionsOrderByRelevanceInput = {
    fields: submissionsOrderByRelevanceFieldEnum | submissionsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type submissionsCountOrderByAggregateInput = {
    SID?: SortOrder
    UID?: SortOrder
    PID?: SortOrder
    Code?: SortOrder
    Status?: SortOrder
    TimeOfSubmission?: SortOrder
  }

  export type submissionsMaxOrderByAggregateInput = {
    SID?: SortOrder
    UID?: SortOrder
    PID?: SortOrder
    Code?: SortOrder
    Status?: SortOrder
    TimeOfSubmission?: SortOrder
  }

  export type submissionsMinOrderByAggregateInput = {
    SID?: SortOrder
    UID?: SortOrder
    PID?: SortOrder
    Code?: SortOrder
    Status?: SortOrder
    TimeOfSubmission?: SortOrder
  }

  export type Enumsubmissions_StatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.submissions_Status | Enumsubmissions_StatusFieldRefInput<$PrismaModel>
    in?: $Enums.submissions_Status[]
    notIn?: $Enums.submissions_Status[]
    not?: NestedEnumsubmissions_StatusWithAggregatesFilter<$PrismaModel> | $Enums.submissions_Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumsubmissions_StatusFilter<$PrismaModel>
    _max?: NestedEnumsubmissions_StatusFilter<$PrismaModel>
  }

  export type testcasesOrderByRelevanceInput = {
    fields: testcasesOrderByRelevanceFieldEnum | testcasesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type testcasesCountOrderByAggregateInput = {
    TID?: SortOrder
    PID?: SortOrder
    InputData?: SortOrder
    ExpectedOutput?: SortOrder
  }

  export type testcasesMaxOrderByAggregateInput = {
    TID?: SortOrder
    PID?: SortOrder
    InputData?: SortOrder
    ExpectedOutput?: SortOrder
  }

  export type testcasesMinOrderByAggregateInput = {
    TID?: SortOrder
    PID?: SortOrder
    InputData?: SortOrder
    ExpectedOutput?: SortOrder
  }

  export type Enumusers_RoleFilter<$PrismaModel = never> = {
    equals?: $Enums.users_Role | Enumusers_RoleFieldRefInput<$PrismaModel>
    in?: $Enums.users_Role[]
    notIn?: $Enums.users_Role[]
    not?: NestedEnumusers_RoleFilter<$PrismaModel> | $Enums.users_Role
  }

  export type usersOrderByRelevanceInput = {
    fields: usersOrderByRelevanceFieldEnum | usersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usersCountOrderByAggregateInput = {
    UID?: SortOrder
    FirstName?: SortOrder
    LastName?: SortOrder
    Email?: SortOrder
    Password?: SortOrder
    Role?: SortOrder
    CreatedAt?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    UID?: SortOrder
    FirstName?: SortOrder
    LastName?: SortOrder
    Email?: SortOrder
    Password?: SortOrder
    Role?: SortOrder
    CreatedAt?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    UID?: SortOrder
    FirstName?: SortOrder
    LastName?: SortOrder
    Email?: SortOrder
    Password?: SortOrder
    Role?: SortOrder
    CreatedAt?: SortOrder
  }

  export type Enumusers_RoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.users_Role | Enumusers_RoleFieldRefInput<$PrismaModel>
    in?: $Enums.users_Role[]
    notIn?: $Enums.users_Role[]
    not?: NestedEnumusers_RoleWithAggregatesFilter<$PrismaModel> | $Enums.users_Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumusers_RoleFilter<$PrismaModel>
    _max?: NestedEnumusers_RoleFilter<$PrismaModel>
  }

  export type submissionsCreateNestedManyWithoutProblemsInput = {
    create?: XOR<submissionsCreateWithoutProblemsInput, submissionsUncheckedCreateWithoutProblemsInput> | submissionsCreateWithoutProblemsInput[] | submissionsUncheckedCreateWithoutProblemsInput[]
    connectOrCreate?: submissionsCreateOrConnectWithoutProblemsInput | submissionsCreateOrConnectWithoutProblemsInput[]
    createMany?: submissionsCreateManyProblemsInputEnvelope
    connect?: submissionsWhereUniqueInput | submissionsWhereUniqueInput[]
  }

  export type testcasesCreateNestedManyWithoutProblemsInput = {
    create?: XOR<testcasesCreateWithoutProblemsInput, testcasesUncheckedCreateWithoutProblemsInput> | testcasesCreateWithoutProblemsInput[] | testcasesUncheckedCreateWithoutProblemsInput[]
    connectOrCreate?: testcasesCreateOrConnectWithoutProblemsInput | testcasesCreateOrConnectWithoutProblemsInput[]
    createMany?: testcasesCreateManyProblemsInputEnvelope
    connect?: testcasesWhereUniqueInput | testcasesWhereUniqueInput[]
  }

  export type submissionsUncheckedCreateNestedManyWithoutProblemsInput = {
    create?: XOR<submissionsCreateWithoutProblemsInput, submissionsUncheckedCreateWithoutProblemsInput> | submissionsCreateWithoutProblemsInput[] | submissionsUncheckedCreateWithoutProblemsInput[]
    connectOrCreate?: submissionsCreateOrConnectWithoutProblemsInput | submissionsCreateOrConnectWithoutProblemsInput[]
    createMany?: submissionsCreateManyProblemsInputEnvelope
    connect?: submissionsWhereUniqueInput | submissionsWhereUniqueInput[]
  }

  export type testcasesUncheckedCreateNestedManyWithoutProblemsInput = {
    create?: XOR<testcasesCreateWithoutProblemsInput, testcasesUncheckedCreateWithoutProblemsInput> | testcasesCreateWithoutProblemsInput[] | testcasesUncheckedCreateWithoutProblemsInput[]
    connectOrCreate?: testcasesCreateOrConnectWithoutProblemsInput | testcasesCreateOrConnectWithoutProblemsInput[]
    createMany?: testcasesCreateManyProblemsInputEnvelope
    connect?: testcasesWhereUniqueInput | testcasesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type Enumproblems_DifficultyFieldUpdateOperationsInput = {
    set?: $Enums.problems_Difficulty
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type submissionsUpdateManyWithoutProblemsNestedInput = {
    create?: XOR<submissionsCreateWithoutProblemsInput, submissionsUncheckedCreateWithoutProblemsInput> | submissionsCreateWithoutProblemsInput[] | submissionsUncheckedCreateWithoutProblemsInput[]
    connectOrCreate?: submissionsCreateOrConnectWithoutProblemsInput | submissionsCreateOrConnectWithoutProblemsInput[]
    upsert?: submissionsUpsertWithWhereUniqueWithoutProblemsInput | submissionsUpsertWithWhereUniqueWithoutProblemsInput[]
    createMany?: submissionsCreateManyProblemsInputEnvelope
    set?: submissionsWhereUniqueInput | submissionsWhereUniqueInput[]
    disconnect?: submissionsWhereUniqueInput | submissionsWhereUniqueInput[]
    delete?: submissionsWhereUniqueInput | submissionsWhereUniqueInput[]
    connect?: submissionsWhereUniqueInput | submissionsWhereUniqueInput[]
    update?: submissionsUpdateWithWhereUniqueWithoutProblemsInput | submissionsUpdateWithWhereUniqueWithoutProblemsInput[]
    updateMany?: submissionsUpdateManyWithWhereWithoutProblemsInput | submissionsUpdateManyWithWhereWithoutProblemsInput[]
    deleteMany?: submissionsScalarWhereInput | submissionsScalarWhereInput[]
  }

  export type testcasesUpdateManyWithoutProblemsNestedInput = {
    create?: XOR<testcasesCreateWithoutProblemsInput, testcasesUncheckedCreateWithoutProblemsInput> | testcasesCreateWithoutProblemsInput[] | testcasesUncheckedCreateWithoutProblemsInput[]
    connectOrCreate?: testcasesCreateOrConnectWithoutProblemsInput | testcasesCreateOrConnectWithoutProblemsInput[]
    upsert?: testcasesUpsertWithWhereUniqueWithoutProblemsInput | testcasesUpsertWithWhereUniqueWithoutProblemsInput[]
    createMany?: testcasesCreateManyProblemsInputEnvelope
    set?: testcasesWhereUniqueInput | testcasesWhereUniqueInput[]
    disconnect?: testcasesWhereUniqueInput | testcasesWhereUniqueInput[]
    delete?: testcasesWhereUniqueInput | testcasesWhereUniqueInput[]
    connect?: testcasesWhereUniqueInput | testcasesWhereUniqueInput[]
    update?: testcasesUpdateWithWhereUniqueWithoutProblemsInput | testcasesUpdateWithWhereUniqueWithoutProblemsInput[]
    updateMany?: testcasesUpdateManyWithWhereWithoutProblemsInput | testcasesUpdateManyWithWhereWithoutProblemsInput[]
    deleteMany?: testcasesScalarWhereInput | testcasesScalarWhereInput[]
  }

  export type submissionsUncheckedUpdateManyWithoutProblemsNestedInput = {
    create?: XOR<submissionsCreateWithoutProblemsInput, submissionsUncheckedCreateWithoutProblemsInput> | submissionsCreateWithoutProblemsInput[] | submissionsUncheckedCreateWithoutProblemsInput[]
    connectOrCreate?: submissionsCreateOrConnectWithoutProblemsInput | submissionsCreateOrConnectWithoutProblemsInput[]
    upsert?: submissionsUpsertWithWhereUniqueWithoutProblemsInput | submissionsUpsertWithWhereUniqueWithoutProblemsInput[]
    createMany?: submissionsCreateManyProblemsInputEnvelope
    set?: submissionsWhereUniqueInput | submissionsWhereUniqueInput[]
    disconnect?: submissionsWhereUniqueInput | submissionsWhereUniqueInput[]
    delete?: submissionsWhereUniqueInput | submissionsWhereUniqueInput[]
    connect?: submissionsWhereUniqueInput | submissionsWhereUniqueInput[]
    update?: submissionsUpdateWithWhereUniqueWithoutProblemsInput | submissionsUpdateWithWhereUniqueWithoutProblemsInput[]
    updateMany?: submissionsUpdateManyWithWhereWithoutProblemsInput | submissionsUpdateManyWithWhereWithoutProblemsInput[]
    deleteMany?: submissionsScalarWhereInput | submissionsScalarWhereInput[]
  }

  export type testcasesUncheckedUpdateManyWithoutProblemsNestedInput = {
    create?: XOR<testcasesCreateWithoutProblemsInput, testcasesUncheckedCreateWithoutProblemsInput> | testcasesCreateWithoutProblemsInput[] | testcasesUncheckedCreateWithoutProblemsInput[]
    connectOrCreate?: testcasesCreateOrConnectWithoutProblemsInput | testcasesCreateOrConnectWithoutProblemsInput[]
    upsert?: testcasesUpsertWithWhereUniqueWithoutProblemsInput | testcasesUpsertWithWhereUniqueWithoutProblemsInput[]
    createMany?: testcasesCreateManyProblemsInputEnvelope
    set?: testcasesWhereUniqueInput | testcasesWhereUniqueInput[]
    disconnect?: testcasesWhereUniqueInput | testcasesWhereUniqueInput[]
    delete?: testcasesWhereUniqueInput | testcasesWhereUniqueInput[]
    connect?: testcasesWhereUniqueInput | testcasesWhereUniqueInput[]
    update?: testcasesUpdateWithWhereUniqueWithoutProblemsInput | testcasesUpdateWithWhereUniqueWithoutProblemsInput[]
    updateMany?: testcasesUpdateManyWithWhereWithoutProblemsInput | testcasesUpdateManyWithWhereWithoutProblemsInput[]
    deleteMany?: testcasesScalarWhereInput | testcasesScalarWhereInput[]
  }

  export type submissionsCreateNestedOneWithoutSubmissionresultsInput = {
    create?: XOR<submissionsCreateWithoutSubmissionresultsInput, submissionsUncheckedCreateWithoutSubmissionresultsInput>
    connectOrCreate?: submissionsCreateOrConnectWithoutSubmissionresultsInput
    connect?: submissionsWhereUniqueInput
  }

  export type testcasesCreateNestedOneWithoutSubmissionresultsInput = {
    create?: XOR<testcasesCreateWithoutSubmissionresultsInput, testcasesUncheckedCreateWithoutSubmissionresultsInput>
    connectOrCreate?: testcasesCreateOrConnectWithoutSubmissionresultsInput
    connect?: testcasesWhereUniqueInput
  }

  export type Enumsubmissionresults_ResultFieldUpdateOperationsInput = {
    set?: $Enums.submissionresults_Result
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type submissionsUpdateOneRequiredWithoutSubmissionresultsNestedInput = {
    create?: XOR<submissionsCreateWithoutSubmissionresultsInput, submissionsUncheckedCreateWithoutSubmissionresultsInput>
    connectOrCreate?: submissionsCreateOrConnectWithoutSubmissionresultsInput
    upsert?: submissionsUpsertWithoutSubmissionresultsInput
    connect?: submissionsWhereUniqueInput
    update?: XOR<XOR<submissionsUpdateToOneWithWhereWithoutSubmissionresultsInput, submissionsUpdateWithoutSubmissionresultsInput>, submissionsUncheckedUpdateWithoutSubmissionresultsInput>
  }

  export type testcasesUpdateOneRequiredWithoutSubmissionresultsNestedInput = {
    create?: XOR<testcasesCreateWithoutSubmissionresultsInput, testcasesUncheckedCreateWithoutSubmissionresultsInput>
    connectOrCreate?: testcasesCreateOrConnectWithoutSubmissionresultsInput
    upsert?: testcasesUpsertWithoutSubmissionresultsInput
    connect?: testcasesWhereUniqueInput
    update?: XOR<XOR<testcasesUpdateToOneWithWhereWithoutSubmissionresultsInput, testcasesUpdateWithoutSubmissionresultsInput>, testcasesUncheckedUpdateWithoutSubmissionresultsInput>
  }

  export type submissionresultsCreateNestedManyWithoutSubmissionsInput = {
    create?: XOR<submissionresultsCreateWithoutSubmissionsInput, submissionresultsUncheckedCreateWithoutSubmissionsInput> | submissionresultsCreateWithoutSubmissionsInput[] | submissionresultsUncheckedCreateWithoutSubmissionsInput[]
    connectOrCreate?: submissionresultsCreateOrConnectWithoutSubmissionsInput | submissionresultsCreateOrConnectWithoutSubmissionsInput[]
    createMany?: submissionresultsCreateManySubmissionsInputEnvelope
    connect?: submissionresultsWhereUniqueInput | submissionresultsWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutSubmissionsInput = {
    create?: XOR<usersCreateWithoutSubmissionsInput, usersUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: usersCreateOrConnectWithoutSubmissionsInput
    connect?: usersWhereUniqueInput
  }

  export type problemsCreateNestedOneWithoutSubmissionsInput = {
    create?: XOR<problemsCreateWithoutSubmissionsInput, problemsUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: problemsCreateOrConnectWithoutSubmissionsInput
    connect?: problemsWhereUniqueInput
  }

  export type submissionresultsUncheckedCreateNestedManyWithoutSubmissionsInput = {
    create?: XOR<submissionresultsCreateWithoutSubmissionsInput, submissionresultsUncheckedCreateWithoutSubmissionsInput> | submissionresultsCreateWithoutSubmissionsInput[] | submissionresultsUncheckedCreateWithoutSubmissionsInput[]
    connectOrCreate?: submissionresultsCreateOrConnectWithoutSubmissionsInput | submissionresultsCreateOrConnectWithoutSubmissionsInput[]
    createMany?: submissionresultsCreateManySubmissionsInputEnvelope
    connect?: submissionresultsWhereUniqueInput | submissionresultsWhereUniqueInput[]
  }

  export type Enumsubmissions_StatusFieldUpdateOperationsInput = {
    set?: $Enums.submissions_Status
  }

  export type submissionresultsUpdateManyWithoutSubmissionsNestedInput = {
    create?: XOR<submissionresultsCreateWithoutSubmissionsInput, submissionresultsUncheckedCreateWithoutSubmissionsInput> | submissionresultsCreateWithoutSubmissionsInput[] | submissionresultsUncheckedCreateWithoutSubmissionsInput[]
    connectOrCreate?: submissionresultsCreateOrConnectWithoutSubmissionsInput | submissionresultsCreateOrConnectWithoutSubmissionsInput[]
    upsert?: submissionresultsUpsertWithWhereUniqueWithoutSubmissionsInput | submissionresultsUpsertWithWhereUniqueWithoutSubmissionsInput[]
    createMany?: submissionresultsCreateManySubmissionsInputEnvelope
    set?: submissionresultsWhereUniqueInput | submissionresultsWhereUniqueInput[]
    disconnect?: submissionresultsWhereUniqueInput | submissionresultsWhereUniqueInput[]
    delete?: submissionresultsWhereUniqueInput | submissionresultsWhereUniqueInput[]
    connect?: submissionresultsWhereUniqueInput | submissionresultsWhereUniqueInput[]
    update?: submissionresultsUpdateWithWhereUniqueWithoutSubmissionsInput | submissionresultsUpdateWithWhereUniqueWithoutSubmissionsInput[]
    updateMany?: submissionresultsUpdateManyWithWhereWithoutSubmissionsInput | submissionresultsUpdateManyWithWhereWithoutSubmissionsInput[]
    deleteMany?: submissionresultsScalarWhereInput | submissionresultsScalarWhereInput[]
  }

  export type usersUpdateOneRequiredWithoutSubmissionsNestedInput = {
    create?: XOR<usersCreateWithoutSubmissionsInput, usersUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: usersCreateOrConnectWithoutSubmissionsInput
    upsert?: usersUpsertWithoutSubmissionsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutSubmissionsInput, usersUpdateWithoutSubmissionsInput>, usersUncheckedUpdateWithoutSubmissionsInput>
  }

  export type problemsUpdateOneRequiredWithoutSubmissionsNestedInput = {
    create?: XOR<problemsCreateWithoutSubmissionsInput, problemsUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: problemsCreateOrConnectWithoutSubmissionsInput
    upsert?: problemsUpsertWithoutSubmissionsInput
    connect?: problemsWhereUniqueInput
    update?: XOR<XOR<problemsUpdateToOneWithWhereWithoutSubmissionsInput, problemsUpdateWithoutSubmissionsInput>, problemsUncheckedUpdateWithoutSubmissionsInput>
  }

  export type submissionresultsUncheckedUpdateManyWithoutSubmissionsNestedInput = {
    create?: XOR<submissionresultsCreateWithoutSubmissionsInput, submissionresultsUncheckedCreateWithoutSubmissionsInput> | submissionresultsCreateWithoutSubmissionsInput[] | submissionresultsUncheckedCreateWithoutSubmissionsInput[]
    connectOrCreate?: submissionresultsCreateOrConnectWithoutSubmissionsInput | submissionresultsCreateOrConnectWithoutSubmissionsInput[]
    upsert?: submissionresultsUpsertWithWhereUniqueWithoutSubmissionsInput | submissionresultsUpsertWithWhereUniqueWithoutSubmissionsInput[]
    createMany?: submissionresultsCreateManySubmissionsInputEnvelope
    set?: submissionresultsWhereUniqueInput | submissionresultsWhereUniqueInput[]
    disconnect?: submissionresultsWhereUniqueInput | submissionresultsWhereUniqueInput[]
    delete?: submissionresultsWhereUniqueInput | submissionresultsWhereUniqueInput[]
    connect?: submissionresultsWhereUniqueInput | submissionresultsWhereUniqueInput[]
    update?: submissionresultsUpdateWithWhereUniqueWithoutSubmissionsInput | submissionresultsUpdateWithWhereUniqueWithoutSubmissionsInput[]
    updateMany?: submissionresultsUpdateManyWithWhereWithoutSubmissionsInput | submissionresultsUpdateManyWithWhereWithoutSubmissionsInput[]
    deleteMany?: submissionresultsScalarWhereInput | submissionresultsScalarWhereInput[]
  }

  export type submissionresultsCreateNestedManyWithoutTestcasesInput = {
    create?: XOR<submissionresultsCreateWithoutTestcasesInput, submissionresultsUncheckedCreateWithoutTestcasesInput> | submissionresultsCreateWithoutTestcasesInput[] | submissionresultsUncheckedCreateWithoutTestcasesInput[]
    connectOrCreate?: submissionresultsCreateOrConnectWithoutTestcasesInput | submissionresultsCreateOrConnectWithoutTestcasesInput[]
    createMany?: submissionresultsCreateManyTestcasesInputEnvelope
    connect?: submissionresultsWhereUniqueInput | submissionresultsWhereUniqueInput[]
  }

  export type problemsCreateNestedOneWithoutTestcasesInput = {
    create?: XOR<problemsCreateWithoutTestcasesInput, problemsUncheckedCreateWithoutTestcasesInput>
    connectOrCreate?: problemsCreateOrConnectWithoutTestcasesInput
    connect?: problemsWhereUniqueInput
  }

  export type submissionresultsUncheckedCreateNestedManyWithoutTestcasesInput = {
    create?: XOR<submissionresultsCreateWithoutTestcasesInput, submissionresultsUncheckedCreateWithoutTestcasesInput> | submissionresultsCreateWithoutTestcasesInput[] | submissionresultsUncheckedCreateWithoutTestcasesInput[]
    connectOrCreate?: submissionresultsCreateOrConnectWithoutTestcasesInput | submissionresultsCreateOrConnectWithoutTestcasesInput[]
    createMany?: submissionresultsCreateManyTestcasesInputEnvelope
    connect?: submissionresultsWhereUniqueInput | submissionresultsWhereUniqueInput[]
  }

  export type submissionresultsUpdateManyWithoutTestcasesNestedInput = {
    create?: XOR<submissionresultsCreateWithoutTestcasesInput, submissionresultsUncheckedCreateWithoutTestcasesInput> | submissionresultsCreateWithoutTestcasesInput[] | submissionresultsUncheckedCreateWithoutTestcasesInput[]
    connectOrCreate?: submissionresultsCreateOrConnectWithoutTestcasesInput | submissionresultsCreateOrConnectWithoutTestcasesInput[]
    upsert?: submissionresultsUpsertWithWhereUniqueWithoutTestcasesInput | submissionresultsUpsertWithWhereUniqueWithoutTestcasesInput[]
    createMany?: submissionresultsCreateManyTestcasesInputEnvelope
    set?: submissionresultsWhereUniqueInput | submissionresultsWhereUniqueInput[]
    disconnect?: submissionresultsWhereUniqueInput | submissionresultsWhereUniqueInput[]
    delete?: submissionresultsWhereUniqueInput | submissionresultsWhereUniqueInput[]
    connect?: submissionresultsWhereUniqueInput | submissionresultsWhereUniqueInput[]
    update?: submissionresultsUpdateWithWhereUniqueWithoutTestcasesInput | submissionresultsUpdateWithWhereUniqueWithoutTestcasesInput[]
    updateMany?: submissionresultsUpdateManyWithWhereWithoutTestcasesInput | submissionresultsUpdateManyWithWhereWithoutTestcasesInput[]
    deleteMany?: submissionresultsScalarWhereInput | submissionresultsScalarWhereInput[]
  }

  export type problemsUpdateOneRequiredWithoutTestcasesNestedInput = {
    create?: XOR<problemsCreateWithoutTestcasesInput, problemsUncheckedCreateWithoutTestcasesInput>
    connectOrCreate?: problemsCreateOrConnectWithoutTestcasesInput
    upsert?: problemsUpsertWithoutTestcasesInput
    connect?: problemsWhereUniqueInput
    update?: XOR<XOR<problemsUpdateToOneWithWhereWithoutTestcasesInput, problemsUpdateWithoutTestcasesInput>, problemsUncheckedUpdateWithoutTestcasesInput>
  }

  export type submissionresultsUncheckedUpdateManyWithoutTestcasesNestedInput = {
    create?: XOR<submissionresultsCreateWithoutTestcasesInput, submissionresultsUncheckedCreateWithoutTestcasesInput> | submissionresultsCreateWithoutTestcasesInput[] | submissionresultsUncheckedCreateWithoutTestcasesInput[]
    connectOrCreate?: submissionresultsCreateOrConnectWithoutTestcasesInput | submissionresultsCreateOrConnectWithoutTestcasesInput[]
    upsert?: submissionresultsUpsertWithWhereUniqueWithoutTestcasesInput | submissionresultsUpsertWithWhereUniqueWithoutTestcasesInput[]
    createMany?: submissionresultsCreateManyTestcasesInputEnvelope
    set?: submissionresultsWhereUniqueInput | submissionresultsWhereUniqueInput[]
    disconnect?: submissionresultsWhereUniqueInput | submissionresultsWhereUniqueInput[]
    delete?: submissionresultsWhereUniqueInput | submissionresultsWhereUniqueInput[]
    connect?: submissionresultsWhereUniqueInput | submissionresultsWhereUniqueInput[]
    update?: submissionresultsUpdateWithWhereUniqueWithoutTestcasesInput | submissionresultsUpdateWithWhereUniqueWithoutTestcasesInput[]
    updateMany?: submissionresultsUpdateManyWithWhereWithoutTestcasesInput | submissionresultsUpdateManyWithWhereWithoutTestcasesInput[]
    deleteMany?: submissionresultsScalarWhereInput | submissionresultsScalarWhereInput[]
  }

  export type submissionsCreateNestedManyWithoutUsersInput = {
    create?: XOR<submissionsCreateWithoutUsersInput, submissionsUncheckedCreateWithoutUsersInput> | submissionsCreateWithoutUsersInput[] | submissionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: submissionsCreateOrConnectWithoutUsersInput | submissionsCreateOrConnectWithoutUsersInput[]
    createMany?: submissionsCreateManyUsersInputEnvelope
    connect?: submissionsWhereUniqueInput | submissionsWhereUniqueInput[]
  }

  export type submissionsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<submissionsCreateWithoutUsersInput, submissionsUncheckedCreateWithoutUsersInput> | submissionsCreateWithoutUsersInput[] | submissionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: submissionsCreateOrConnectWithoutUsersInput | submissionsCreateOrConnectWithoutUsersInput[]
    createMany?: submissionsCreateManyUsersInputEnvelope
    connect?: submissionsWhereUniqueInput | submissionsWhereUniqueInput[]
  }

  export type Enumusers_RoleFieldUpdateOperationsInput = {
    set?: $Enums.users_Role
  }

  export type submissionsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<submissionsCreateWithoutUsersInput, submissionsUncheckedCreateWithoutUsersInput> | submissionsCreateWithoutUsersInput[] | submissionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: submissionsCreateOrConnectWithoutUsersInput | submissionsCreateOrConnectWithoutUsersInput[]
    upsert?: submissionsUpsertWithWhereUniqueWithoutUsersInput | submissionsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: submissionsCreateManyUsersInputEnvelope
    set?: submissionsWhereUniqueInput | submissionsWhereUniqueInput[]
    disconnect?: submissionsWhereUniqueInput | submissionsWhereUniqueInput[]
    delete?: submissionsWhereUniqueInput | submissionsWhereUniqueInput[]
    connect?: submissionsWhereUniqueInput | submissionsWhereUniqueInput[]
    update?: submissionsUpdateWithWhereUniqueWithoutUsersInput | submissionsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: submissionsUpdateManyWithWhereWithoutUsersInput | submissionsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: submissionsScalarWhereInput | submissionsScalarWhereInput[]
  }

  export type submissionsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<submissionsCreateWithoutUsersInput, submissionsUncheckedCreateWithoutUsersInput> | submissionsCreateWithoutUsersInput[] | submissionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: submissionsCreateOrConnectWithoutUsersInput | submissionsCreateOrConnectWithoutUsersInput[]
    upsert?: submissionsUpsertWithWhereUniqueWithoutUsersInput | submissionsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: submissionsCreateManyUsersInputEnvelope
    set?: submissionsWhereUniqueInput | submissionsWhereUniqueInput[]
    disconnect?: submissionsWhereUniqueInput | submissionsWhereUniqueInput[]
    delete?: submissionsWhereUniqueInput | submissionsWhereUniqueInput[]
    connect?: submissionsWhereUniqueInput | submissionsWhereUniqueInput[]
    update?: submissionsUpdateWithWhereUniqueWithoutUsersInput | submissionsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: submissionsUpdateManyWithWhereWithoutUsersInput | submissionsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: submissionsScalarWhereInput | submissionsScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumproblems_DifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.problems_Difficulty | Enumproblems_DifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.problems_Difficulty[]
    notIn?: $Enums.problems_Difficulty[]
    not?: NestedEnumproblems_DifficultyFilter<$PrismaModel> | $Enums.problems_Difficulty
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumproblems_DifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.problems_Difficulty | Enumproblems_DifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.problems_Difficulty[]
    notIn?: $Enums.problems_Difficulty[]
    not?: NestedEnumproblems_DifficultyWithAggregatesFilter<$PrismaModel> | $Enums.problems_Difficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumproblems_DifficultyFilter<$PrismaModel>
    _max?: NestedEnumproblems_DifficultyFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumsubmissionresults_ResultFilter<$PrismaModel = never> = {
    equals?: $Enums.submissionresults_Result | Enumsubmissionresults_ResultFieldRefInput<$PrismaModel>
    in?: $Enums.submissionresults_Result[]
    notIn?: $Enums.submissionresults_Result[]
    not?: NestedEnumsubmissionresults_ResultFilter<$PrismaModel> | $Enums.submissionresults_Result
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumsubmissionresults_ResultWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.submissionresults_Result | Enumsubmissionresults_ResultFieldRefInput<$PrismaModel>
    in?: $Enums.submissionresults_Result[]
    notIn?: $Enums.submissionresults_Result[]
    not?: NestedEnumsubmissionresults_ResultWithAggregatesFilter<$PrismaModel> | $Enums.submissionresults_Result
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumsubmissionresults_ResultFilter<$PrismaModel>
    _max?: NestedEnumsubmissionresults_ResultFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumsubmissions_StatusFilter<$PrismaModel = never> = {
    equals?: $Enums.submissions_Status | Enumsubmissions_StatusFieldRefInput<$PrismaModel>
    in?: $Enums.submissions_Status[]
    notIn?: $Enums.submissions_Status[]
    not?: NestedEnumsubmissions_StatusFilter<$PrismaModel> | $Enums.submissions_Status
  }

  export type NestedEnumsubmissions_StatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.submissions_Status | Enumsubmissions_StatusFieldRefInput<$PrismaModel>
    in?: $Enums.submissions_Status[]
    notIn?: $Enums.submissions_Status[]
    not?: NestedEnumsubmissions_StatusWithAggregatesFilter<$PrismaModel> | $Enums.submissions_Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumsubmissions_StatusFilter<$PrismaModel>
    _max?: NestedEnumsubmissions_StatusFilter<$PrismaModel>
  }

  export type NestedEnumusers_RoleFilter<$PrismaModel = never> = {
    equals?: $Enums.users_Role | Enumusers_RoleFieldRefInput<$PrismaModel>
    in?: $Enums.users_Role[]
    notIn?: $Enums.users_Role[]
    not?: NestedEnumusers_RoleFilter<$PrismaModel> | $Enums.users_Role
  }

  export type NestedEnumusers_RoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.users_Role | Enumusers_RoleFieldRefInput<$PrismaModel>
    in?: $Enums.users_Role[]
    notIn?: $Enums.users_Role[]
    not?: NestedEnumusers_RoleWithAggregatesFilter<$PrismaModel> | $Enums.users_Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumusers_RoleFilter<$PrismaModel>
    _max?: NestedEnumusers_RoleFilter<$PrismaModel>
  }

  export type submissionsCreateWithoutProblemsInput = {
    SID?: string
    Code: string
    Status?: $Enums.submissions_Status
    TimeOfSubmission?: Date | string | null
    submissionresults?: submissionresultsCreateNestedManyWithoutSubmissionsInput
    users: usersCreateNestedOneWithoutSubmissionsInput
  }

  export type submissionsUncheckedCreateWithoutProblemsInput = {
    SID?: string
    UID: string
    Code: string
    Status?: $Enums.submissions_Status
    TimeOfSubmission?: Date | string | null
    submissionresults?: submissionresultsUncheckedCreateNestedManyWithoutSubmissionsInput
  }

  export type submissionsCreateOrConnectWithoutProblemsInput = {
    where: submissionsWhereUniqueInput
    create: XOR<submissionsCreateWithoutProblemsInput, submissionsUncheckedCreateWithoutProblemsInput>
  }

  export type submissionsCreateManyProblemsInputEnvelope = {
    data: submissionsCreateManyProblemsInput | submissionsCreateManyProblemsInput[]
    skipDuplicates?: boolean
  }

  export type testcasesCreateWithoutProblemsInput = {
    TID?: string
    InputData: string
    ExpectedOutput: string
    submissionresults?: submissionresultsCreateNestedManyWithoutTestcasesInput
  }

  export type testcasesUncheckedCreateWithoutProblemsInput = {
    TID?: string
    InputData: string
    ExpectedOutput: string
    submissionresults?: submissionresultsUncheckedCreateNestedManyWithoutTestcasesInput
  }

  export type testcasesCreateOrConnectWithoutProblemsInput = {
    where: testcasesWhereUniqueInput
    create: XOR<testcasesCreateWithoutProblemsInput, testcasesUncheckedCreateWithoutProblemsInput>
  }

  export type testcasesCreateManyProblemsInputEnvelope = {
    data: testcasesCreateManyProblemsInput | testcasesCreateManyProblemsInput[]
    skipDuplicates?: boolean
  }

  export type submissionsUpsertWithWhereUniqueWithoutProblemsInput = {
    where: submissionsWhereUniqueInput
    update: XOR<submissionsUpdateWithoutProblemsInput, submissionsUncheckedUpdateWithoutProblemsInput>
    create: XOR<submissionsCreateWithoutProblemsInput, submissionsUncheckedCreateWithoutProblemsInput>
  }

  export type submissionsUpdateWithWhereUniqueWithoutProblemsInput = {
    where: submissionsWhereUniqueInput
    data: XOR<submissionsUpdateWithoutProblemsInput, submissionsUncheckedUpdateWithoutProblemsInput>
  }

  export type submissionsUpdateManyWithWhereWithoutProblemsInput = {
    where: submissionsScalarWhereInput
    data: XOR<submissionsUpdateManyMutationInput, submissionsUncheckedUpdateManyWithoutProblemsInput>
  }

  export type submissionsScalarWhereInput = {
    AND?: submissionsScalarWhereInput | submissionsScalarWhereInput[]
    OR?: submissionsScalarWhereInput[]
    NOT?: submissionsScalarWhereInput | submissionsScalarWhereInput[]
    SID?: StringFilter<"submissions"> | string
    UID?: StringFilter<"submissions"> | string
    PID?: StringFilter<"submissions"> | string
    Code?: StringFilter<"submissions"> | string
    Status?: Enumsubmissions_StatusFilter<"submissions"> | $Enums.submissions_Status
    TimeOfSubmission?: DateTimeNullableFilter<"submissions"> | Date | string | null
  }

  export type testcasesUpsertWithWhereUniqueWithoutProblemsInput = {
    where: testcasesWhereUniqueInput
    update: XOR<testcasesUpdateWithoutProblemsInput, testcasesUncheckedUpdateWithoutProblemsInput>
    create: XOR<testcasesCreateWithoutProblemsInput, testcasesUncheckedCreateWithoutProblemsInput>
  }

  export type testcasesUpdateWithWhereUniqueWithoutProblemsInput = {
    where: testcasesWhereUniqueInput
    data: XOR<testcasesUpdateWithoutProblemsInput, testcasesUncheckedUpdateWithoutProblemsInput>
  }

  export type testcasesUpdateManyWithWhereWithoutProblemsInput = {
    where: testcasesScalarWhereInput
    data: XOR<testcasesUpdateManyMutationInput, testcasesUncheckedUpdateManyWithoutProblemsInput>
  }

  export type testcasesScalarWhereInput = {
    AND?: testcasesScalarWhereInput | testcasesScalarWhereInput[]
    OR?: testcasesScalarWhereInput[]
    NOT?: testcasesScalarWhereInput | testcasesScalarWhereInput[]
    TID?: StringFilter<"testcases"> | string
    PID?: StringFilter<"testcases"> | string
    InputData?: StringFilter<"testcases"> | string
    ExpectedOutput?: StringFilter<"testcases"> | string
  }

  export type submissionsCreateWithoutSubmissionresultsInput = {
    SID?: string
    Code: string
    Status?: $Enums.submissions_Status
    TimeOfSubmission?: Date | string | null
    users: usersCreateNestedOneWithoutSubmissionsInput
    problems: problemsCreateNestedOneWithoutSubmissionsInput
  }

  export type submissionsUncheckedCreateWithoutSubmissionresultsInput = {
    SID?: string
    UID: string
    PID: string
    Code: string
    Status?: $Enums.submissions_Status
    TimeOfSubmission?: Date | string | null
  }

  export type submissionsCreateOrConnectWithoutSubmissionresultsInput = {
    where: submissionsWhereUniqueInput
    create: XOR<submissionsCreateWithoutSubmissionresultsInput, submissionsUncheckedCreateWithoutSubmissionresultsInput>
  }

  export type testcasesCreateWithoutSubmissionresultsInput = {
    TID?: string
    InputData: string
    ExpectedOutput: string
    problems: problemsCreateNestedOneWithoutTestcasesInput
  }

  export type testcasesUncheckedCreateWithoutSubmissionresultsInput = {
    TID?: string
    PID: string
    InputData: string
    ExpectedOutput: string
  }

  export type testcasesCreateOrConnectWithoutSubmissionresultsInput = {
    where: testcasesWhereUniqueInput
    create: XOR<testcasesCreateWithoutSubmissionresultsInput, testcasesUncheckedCreateWithoutSubmissionresultsInput>
  }

  export type submissionsUpsertWithoutSubmissionresultsInput = {
    update: XOR<submissionsUpdateWithoutSubmissionresultsInput, submissionsUncheckedUpdateWithoutSubmissionresultsInput>
    create: XOR<submissionsCreateWithoutSubmissionresultsInput, submissionsUncheckedCreateWithoutSubmissionresultsInput>
    where?: submissionsWhereInput
  }

  export type submissionsUpdateToOneWithWhereWithoutSubmissionresultsInput = {
    where?: submissionsWhereInput
    data: XOR<submissionsUpdateWithoutSubmissionresultsInput, submissionsUncheckedUpdateWithoutSubmissionresultsInput>
  }

  export type submissionsUpdateWithoutSubmissionresultsInput = {
    SID?: StringFieldUpdateOperationsInput | string
    Code?: StringFieldUpdateOperationsInput | string
    Status?: Enumsubmissions_StatusFieldUpdateOperationsInput | $Enums.submissions_Status
    TimeOfSubmission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutSubmissionsNestedInput
    problems?: problemsUpdateOneRequiredWithoutSubmissionsNestedInput
  }

  export type submissionsUncheckedUpdateWithoutSubmissionresultsInput = {
    SID?: StringFieldUpdateOperationsInput | string
    UID?: StringFieldUpdateOperationsInput | string
    PID?: StringFieldUpdateOperationsInput | string
    Code?: StringFieldUpdateOperationsInput | string
    Status?: Enumsubmissions_StatusFieldUpdateOperationsInput | $Enums.submissions_Status
    TimeOfSubmission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type testcasesUpsertWithoutSubmissionresultsInput = {
    update: XOR<testcasesUpdateWithoutSubmissionresultsInput, testcasesUncheckedUpdateWithoutSubmissionresultsInput>
    create: XOR<testcasesCreateWithoutSubmissionresultsInput, testcasesUncheckedCreateWithoutSubmissionresultsInput>
    where?: testcasesWhereInput
  }

  export type testcasesUpdateToOneWithWhereWithoutSubmissionresultsInput = {
    where?: testcasesWhereInput
    data: XOR<testcasesUpdateWithoutSubmissionresultsInput, testcasesUncheckedUpdateWithoutSubmissionresultsInput>
  }

  export type testcasesUpdateWithoutSubmissionresultsInput = {
    TID?: StringFieldUpdateOperationsInput | string
    InputData?: StringFieldUpdateOperationsInput | string
    ExpectedOutput?: StringFieldUpdateOperationsInput | string
    problems?: problemsUpdateOneRequiredWithoutTestcasesNestedInput
  }

  export type testcasesUncheckedUpdateWithoutSubmissionresultsInput = {
    TID?: StringFieldUpdateOperationsInput | string
    PID?: StringFieldUpdateOperationsInput | string
    InputData?: StringFieldUpdateOperationsInput | string
    ExpectedOutput?: StringFieldUpdateOperationsInput | string
  }

  export type submissionresultsCreateWithoutSubmissionsInput = {
    SRID?: string
    Result: $Enums.submissionresults_Result
    ExecutionTime?: number | null
    testcases: testcasesCreateNestedOneWithoutSubmissionresultsInput
  }

  export type submissionresultsUncheckedCreateWithoutSubmissionsInput = {
    SRID?: string
    TID: string
    Result: $Enums.submissionresults_Result
    ExecutionTime?: number | null
  }

  export type submissionresultsCreateOrConnectWithoutSubmissionsInput = {
    where: submissionresultsWhereUniqueInput
    create: XOR<submissionresultsCreateWithoutSubmissionsInput, submissionresultsUncheckedCreateWithoutSubmissionsInput>
  }

  export type submissionresultsCreateManySubmissionsInputEnvelope = {
    data: submissionresultsCreateManySubmissionsInput | submissionresultsCreateManySubmissionsInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutSubmissionsInput = {
    UID?: string
    FirstName: string
    LastName: string
    Email: string
    Password: string
    Role?: $Enums.users_Role
    CreatedAt?: Date | string | null
  }

  export type usersUncheckedCreateWithoutSubmissionsInput = {
    UID?: string
    FirstName: string
    LastName: string
    Email: string
    Password: string
    Role?: $Enums.users_Role
    CreatedAt?: Date | string | null
  }

  export type usersCreateOrConnectWithoutSubmissionsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutSubmissionsInput, usersUncheckedCreateWithoutSubmissionsInput>
  }

  export type problemsCreateWithoutSubmissionsInput = {
    PID?: string
    Title?: string | null
    Description?: string | null
    Difficulty?: $Enums.problems_Difficulty
    Topic?: string | null
    CreatedAt?: Date | string | null
    testcases?: testcasesCreateNestedManyWithoutProblemsInput
  }

  export type problemsUncheckedCreateWithoutSubmissionsInput = {
    PID?: string
    Title?: string | null
    Description?: string | null
    Difficulty?: $Enums.problems_Difficulty
    Topic?: string | null
    CreatedAt?: Date | string | null
    testcases?: testcasesUncheckedCreateNestedManyWithoutProblemsInput
  }

  export type problemsCreateOrConnectWithoutSubmissionsInput = {
    where: problemsWhereUniqueInput
    create: XOR<problemsCreateWithoutSubmissionsInput, problemsUncheckedCreateWithoutSubmissionsInput>
  }

  export type submissionresultsUpsertWithWhereUniqueWithoutSubmissionsInput = {
    where: submissionresultsWhereUniqueInput
    update: XOR<submissionresultsUpdateWithoutSubmissionsInput, submissionresultsUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<submissionresultsCreateWithoutSubmissionsInput, submissionresultsUncheckedCreateWithoutSubmissionsInput>
  }

  export type submissionresultsUpdateWithWhereUniqueWithoutSubmissionsInput = {
    where: submissionresultsWhereUniqueInput
    data: XOR<submissionresultsUpdateWithoutSubmissionsInput, submissionresultsUncheckedUpdateWithoutSubmissionsInput>
  }

  export type submissionresultsUpdateManyWithWhereWithoutSubmissionsInput = {
    where: submissionresultsScalarWhereInput
    data: XOR<submissionresultsUpdateManyMutationInput, submissionresultsUncheckedUpdateManyWithoutSubmissionsInput>
  }

  export type submissionresultsScalarWhereInput = {
    AND?: submissionresultsScalarWhereInput | submissionresultsScalarWhereInput[]
    OR?: submissionresultsScalarWhereInput[]
    NOT?: submissionresultsScalarWhereInput | submissionresultsScalarWhereInput[]
    SRID?: StringFilter<"submissionresults"> | string
    SID?: StringFilter<"submissionresults"> | string
    TID?: StringFilter<"submissionresults"> | string
    Result?: Enumsubmissionresults_ResultFilter<"submissionresults"> | $Enums.submissionresults_Result
    ExecutionTime?: FloatNullableFilter<"submissionresults"> | number | null
  }

  export type usersUpsertWithoutSubmissionsInput = {
    update: XOR<usersUpdateWithoutSubmissionsInput, usersUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<usersCreateWithoutSubmissionsInput, usersUncheckedCreateWithoutSubmissionsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutSubmissionsInput, usersUncheckedUpdateWithoutSubmissionsInput>
  }

  export type usersUpdateWithoutSubmissionsInput = {
    UID?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Role?: Enumusers_RoleFieldUpdateOperationsInput | $Enums.users_Role
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateWithoutSubmissionsInput = {
    UID?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Role?: Enumusers_RoleFieldUpdateOperationsInput | $Enums.users_Role
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type problemsUpsertWithoutSubmissionsInput = {
    update: XOR<problemsUpdateWithoutSubmissionsInput, problemsUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<problemsCreateWithoutSubmissionsInput, problemsUncheckedCreateWithoutSubmissionsInput>
    where?: problemsWhereInput
  }

  export type problemsUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: problemsWhereInput
    data: XOR<problemsUpdateWithoutSubmissionsInput, problemsUncheckedUpdateWithoutSubmissionsInput>
  }

  export type problemsUpdateWithoutSubmissionsInput = {
    PID?: StringFieldUpdateOperationsInput | string
    Title?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Difficulty?: Enumproblems_DifficultyFieldUpdateOperationsInput | $Enums.problems_Difficulty
    Topic?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    testcases?: testcasesUpdateManyWithoutProblemsNestedInput
  }

  export type problemsUncheckedUpdateWithoutSubmissionsInput = {
    PID?: StringFieldUpdateOperationsInput | string
    Title?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Difficulty?: Enumproblems_DifficultyFieldUpdateOperationsInput | $Enums.problems_Difficulty
    Topic?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    testcases?: testcasesUncheckedUpdateManyWithoutProblemsNestedInput
  }

  export type submissionresultsCreateWithoutTestcasesInput = {
    SRID?: string
    Result: $Enums.submissionresults_Result
    ExecutionTime?: number | null
    submissions: submissionsCreateNestedOneWithoutSubmissionresultsInput
  }

  export type submissionresultsUncheckedCreateWithoutTestcasesInput = {
    SRID?: string
    SID: string
    Result: $Enums.submissionresults_Result
    ExecutionTime?: number | null
  }

  export type submissionresultsCreateOrConnectWithoutTestcasesInput = {
    where: submissionresultsWhereUniqueInput
    create: XOR<submissionresultsCreateWithoutTestcasesInput, submissionresultsUncheckedCreateWithoutTestcasesInput>
  }

  export type submissionresultsCreateManyTestcasesInputEnvelope = {
    data: submissionresultsCreateManyTestcasesInput | submissionresultsCreateManyTestcasesInput[]
    skipDuplicates?: boolean
  }

  export type problemsCreateWithoutTestcasesInput = {
    PID?: string
    Title?: string | null
    Description?: string | null
    Difficulty?: $Enums.problems_Difficulty
    Topic?: string | null
    CreatedAt?: Date | string | null
    submissions?: submissionsCreateNestedManyWithoutProblemsInput
  }

  export type problemsUncheckedCreateWithoutTestcasesInput = {
    PID?: string
    Title?: string | null
    Description?: string | null
    Difficulty?: $Enums.problems_Difficulty
    Topic?: string | null
    CreatedAt?: Date | string | null
    submissions?: submissionsUncheckedCreateNestedManyWithoutProblemsInput
  }

  export type problemsCreateOrConnectWithoutTestcasesInput = {
    where: problemsWhereUniqueInput
    create: XOR<problemsCreateWithoutTestcasesInput, problemsUncheckedCreateWithoutTestcasesInput>
  }

  export type submissionresultsUpsertWithWhereUniqueWithoutTestcasesInput = {
    where: submissionresultsWhereUniqueInput
    update: XOR<submissionresultsUpdateWithoutTestcasesInput, submissionresultsUncheckedUpdateWithoutTestcasesInput>
    create: XOR<submissionresultsCreateWithoutTestcasesInput, submissionresultsUncheckedCreateWithoutTestcasesInput>
  }

  export type submissionresultsUpdateWithWhereUniqueWithoutTestcasesInput = {
    where: submissionresultsWhereUniqueInput
    data: XOR<submissionresultsUpdateWithoutTestcasesInput, submissionresultsUncheckedUpdateWithoutTestcasesInput>
  }

  export type submissionresultsUpdateManyWithWhereWithoutTestcasesInput = {
    where: submissionresultsScalarWhereInput
    data: XOR<submissionresultsUpdateManyMutationInput, submissionresultsUncheckedUpdateManyWithoutTestcasesInput>
  }

  export type problemsUpsertWithoutTestcasesInput = {
    update: XOR<problemsUpdateWithoutTestcasesInput, problemsUncheckedUpdateWithoutTestcasesInput>
    create: XOR<problemsCreateWithoutTestcasesInput, problemsUncheckedCreateWithoutTestcasesInput>
    where?: problemsWhereInput
  }

  export type problemsUpdateToOneWithWhereWithoutTestcasesInput = {
    where?: problemsWhereInput
    data: XOR<problemsUpdateWithoutTestcasesInput, problemsUncheckedUpdateWithoutTestcasesInput>
  }

  export type problemsUpdateWithoutTestcasesInput = {
    PID?: StringFieldUpdateOperationsInput | string
    Title?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Difficulty?: Enumproblems_DifficultyFieldUpdateOperationsInput | $Enums.problems_Difficulty
    Topic?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submissions?: submissionsUpdateManyWithoutProblemsNestedInput
  }

  export type problemsUncheckedUpdateWithoutTestcasesInput = {
    PID?: StringFieldUpdateOperationsInput | string
    Title?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Difficulty?: Enumproblems_DifficultyFieldUpdateOperationsInput | $Enums.problems_Difficulty
    Topic?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submissions?: submissionsUncheckedUpdateManyWithoutProblemsNestedInput
  }

  export type submissionsCreateWithoutUsersInput = {
    SID?: string
    Code: string
    Status?: $Enums.submissions_Status
    TimeOfSubmission?: Date | string | null
    submissionresults?: submissionresultsCreateNestedManyWithoutSubmissionsInput
    problems: problemsCreateNestedOneWithoutSubmissionsInput
  }

  export type submissionsUncheckedCreateWithoutUsersInput = {
    SID?: string
    PID: string
    Code: string
    Status?: $Enums.submissions_Status
    TimeOfSubmission?: Date | string | null
    submissionresults?: submissionresultsUncheckedCreateNestedManyWithoutSubmissionsInput
  }

  export type submissionsCreateOrConnectWithoutUsersInput = {
    where: submissionsWhereUniqueInput
    create: XOR<submissionsCreateWithoutUsersInput, submissionsUncheckedCreateWithoutUsersInput>
  }

  export type submissionsCreateManyUsersInputEnvelope = {
    data: submissionsCreateManyUsersInput | submissionsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type submissionsUpsertWithWhereUniqueWithoutUsersInput = {
    where: submissionsWhereUniqueInput
    update: XOR<submissionsUpdateWithoutUsersInput, submissionsUncheckedUpdateWithoutUsersInput>
    create: XOR<submissionsCreateWithoutUsersInput, submissionsUncheckedCreateWithoutUsersInput>
  }

  export type submissionsUpdateWithWhereUniqueWithoutUsersInput = {
    where: submissionsWhereUniqueInput
    data: XOR<submissionsUpdateWithoutUsersInput, submissionsUncheckedUpdateWithoutUsersInput>
  }

  export type submissionsUpdateManyWithWhereWithoutUsersInput = {
    where: submissionsScalarWhereInput
    data: XOR<submissionsUpdateManyMutationInput, submissionsUncheckedUpdateManyWithoutUsersInput>
  }

  export type submissionsCreateManyProblemsInput = {
    SID?: string
    UID: string
    Code: string
    Status?: $Enums.submissions_Status
    TimeOfSubmission?: Date | string | null
  }

  export type testcasesCreateManyProblemsInput = {
    TID?: string
    InputData: string
    ExpectedOutput: string
  }

  export type submissionsUpdateWithoutProblemsInput = {
    SID?: StringFieldUpdateOperationsInput | string
    Code?: StringFieldUpdateOperationsInput | string
    Status?: Enumsubmissions_StatusFieldUpdateOperationsInput | $Enums.submissions_Status
    TimeOfSubmission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submissionresults?: submissionresultsUpdateManyWithoutSubmissionsNestedInput
    users?: usersUpdateOneRequiredWithoutSubmissionsNestedInput
  }

  export type submissionsUncheckedUpdateWithoutProblemsInput = {
    SID?: StringFieldUpdateOperationsInput | string
    UID?: StringFieldUpdateOperationsInput | string
    Code?: StringFieldUpdateOperationsInput | string
    Status?: Enumsubmissions_StatusFieldUpdateOperationsInput | $Enums.submissions_Status
    TimeOfSubmission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submissionresults?: submissionresultsUncheckedUpdateManyWithoutSubmissionsNestedInput
  }

  export type submissionsUncheckedUpdateManyWithoutProblemsInput = {
    SID?: StringFieldUpdateOperationsInput | string
    UID?: StringFieldUpdateOperationsInput | string
    Code?: StringFieldUpdateOperationsInput | string
    Status?: Enumsubmissions_StatusFieldUpdateOperationsInput | $Enums.submissions_Status
    TimeOfSubmission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type testcasesUpdateWithoutProblemsInput = {
    TID?: StringFieldUpdateOperationsInput | string
    InputData?: StringFieldUpdateOperationsInput | string
    ExpectedOutput?: StringFieldUpdateOperationsInput | string
    submissionresults?: submissionresultsUpdateManyWithoutTestcasesNestedInput
  }

  export type testcasesUncheckedUpdateWithoutProblemsInput = {
    TID?: StringFieldUpdateOperationsInput | string
    InputData?: StringFieldUpdateOperationsInput | string
    ExpectedOutput?: StringFieldUpdateOperationsInput | string
    submissionresults?: submissionresultsUncheckedUpdateManyWithoutTestcasesNestedInput
  }

  export type testcasesUncheckedUpdateManyWithoutProblemsInput = {
    TID?: StringFieldUpdateOperationsInput | string
    InputData?: StringFieldUpdateOperationsInput | string
    ExpectedOutput?: StringFieldUpdateOperationsInput | string
  }

  export type submissionresultsCreateManySubmissionsInput = {
    SRID?: string
    TID: string
    Result: $Enums.submissionresults_Result
    ExecutionTime?: number | null
  }

  export type submissionresultsUpdateWithoutSubmissionsInput = {
    SRID?: StringFieldUpdateOperationsInput | string
    Result?: Enumsubmissionresults_ResultFieldUpdateOperationsInput | $Enums.submissionresults_Result
    ExecutionTime?: NullableFloatFieldUpdateOperationsInput | number | null
    testcases?: testcasesUpdateOneRequiredWithoutSubmissionresultsNestedInput
  }

  export type submissionresultsUncheckedUpdateWithoutSubmissionsInput = {
    SRID?: StringFieldUpdateOperationsInput | string
    TID?: StringFieldUpdateOperationsInput | string
    Result?: Enumsubmissionresults_ResultFieldUpdateOperationsInput | $Enums.submissionresults_Result
    ExecutionTime?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type submissionresultsUncheckedUpdateManyWithoutSubmissionsInput = {
    SRID?: StringFieldUpdateOperationsInput | string
    TID?: StringFieldUpdateOperationsInput | string
    Result?: Enumsubmissionresults_ResultFieldUpdateOperationsInput | $Enums.submissionresults_Result
    ExecutionTime?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type submissionresultsCreateManyTestcasesInput = {
    SRID?: string
    SID: string
    Result: $Enums.submissionresults_Result
    ExecutionTime?: number | null
  }

  export type submissionresultsUpdateWithoutTestcasesInput = {
    SRID?: StringFieldUpdateOperationsInput | string
    Result?: Enumsubmissionresults_ResultFieldUpdateOperationsInput | $Enums.submissionresults_Result
    ExecutionTime?: NullableFloatFieldUpdateOperationsInput | number | null
    submissions?: submissionsUpdateOneRequiredWithoutSubmissionresultsNestedInput
  }

  export type submissionresultsUncheckedUpdateWithoutTestcasesInput = {
    SRID?: StringFieldUpdateOperationsInput | string
    SID?: StringFieldUpdateOperationsInput | string
    Result?: Enumsubmissionresults_ResultFieldUpdateOperationsInput | $Enums.submissionresults_Result
    ExecutionTime?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type submissionresultsUncheckedUpdateManyWithoutTestcasesInput = {
    SRID?: StringFieldUpdateOperationsInput | string
    SID?: StringFieldUpdateOperationsInput | string
    Result?: Enumsubmissionresults_ResultFieldUpdateOperationsInput | $Enums.submissionresults_Result
    ExecutionTime?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type submissionsCreateManyUsersInput = {
    SID?: string
    PID: string
    Code: string
    Status?: $Enums.submissions_Status
    TimeOfSubmission?: Date | string | null
  }

  export type submissionsUpdateWithoutUsersInput = {
    SID?: StringFieldUpdateOperationsInput | string
    Code?: StringFieldUpdateOperationsInput | string
    Status?: Enumsubmissions_StatusFieldUpdateOperationsInput | $Enums.submissions_Status
    TimeOfSubmission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submissionresults?: submissionresultsUpdateManyWithoutSubmissionsNestedInput
    problems?: problemsUpdateOneRequiredWithoutSubmissionsNestedInput
  }

  export type submissionsUncheckedUpdateWithoutUsersInput = {
    SID?: StringFieldUpdateOperationsInput | string
    PID?: StringFieldUpdateOperationsInput | string
    Code?: StringFieldUpdateOperationsInput | string
    Status?: Enumsubmissions_StatusFieldUpdateOperationsInput | $Enums.submissions_Status
    TimeOfSubmission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submissionresults?: submissionresultsUncheckedUpdateManyWithoutSubmissionsNestedInput
  }

  export type submissionsUncheckedUpdateManyWithoutUsersInput = {
    SID?: StringFieldUpdateOperationsInput | string
    PID?: StringFieldUpdateOperationsInput | string
    Code?: StringFieldUpdateOperationsInput | string
    Status?: Enumsubmissions_StatusFieldUpdateOperationsInput | $Enums.submissions_Status
    TimeOfSubmission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}