
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
 * Model exercise
 * 
 */
export type exercise = $Result.DefaultSelection<Prisma.$exercisePayload>
/**
 * Model language
 * 
 */
export type language = $Result.DefaultSelection<Prisma.$languagePayload>
/**
 * Model submission
 * 
 */
export type submission = $Result.DefaultSelection<Prisma.$submissionPayload>
/**
 * Model testcase
 * 
 */
export type testcase = $Result.DefaultSelection<Prisma.$testcasePayload>
/**
 * Model testcaseresult
 * 
 */
export type testcaseresult = $Result.DefaultSelection<Prisma.$testcaseresultPayload>
/**
 * Model topic
 * 
 */
export type topic = $Result.DefaultSelection<Prisma.$topicPayload>
/**
 * Model topiclanguagedetail
 * 
 */
export type topiclanguagedetail = $Result.DefaultSelection<Prisma.$topiclanguagedetailPayload>
/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model lesson
 * 
 */
export type lesson = $Result.DefaultSelection<Prisma.$lessonPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const exercise_Difficulty: {
  Easy: 'Easy',
  Medium: 'Medium',
  Hard: 'Hard'
};

export type exercise_Difficulty = (typeof exercise_Difficulty)[keyof typeof exercise_Difficulty]


export const testcaseresult_Result: {
  Correct: 'Correct',
  Incorrect: 'Incorrect'
};

export type testcaseresult_Result = (typeof testcaseresult_Result)[keyof typeof testcaseresult_Result]


export const user_Role: {
  User: 'User',
  Admin: 'Admin'
};

export type user_Role = (typeof user_Role)[keyof typeof user_Role]


export const submission_Result: {
  Pass: 'Pass',
  Fail: 'Fail',
  Pending: 'Pending'
};

export type submission_Result = (typeof submission_Result)[keyof typeof submission_Result]

}

export type exercise_Difficulty = $Enums.exercise_Difficulty

export const exercise_Difficulty: typeof $Enums.exercise_Difficulty

export type testcaseresult_Result = $Enums.testcaseresult_Result

export const testcaseresult_Result: typeof $Enums.testcaseresult_Result

export type user_Role = $Enums.user_Role

export const user_Role: typeof $Enums.user_Role

export type submission_Result = $Enums.submission_Result

export const submission_Result: typeof $Enums.submission_Result

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Exercises
 * const exercises = await prisma.exercise.findMany()
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
   * // Fetch zero or more Exercises
   * const exercises = await prisma.exercise.findMany()
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
   * `prisma.exercise`: Exposes CRUD operations for the **exercise** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exercises
    * const exercises = await prisma.exercise.findMany()
    * ```
    */
  get exercise(): Prisma.exerciseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.language`: Exposes CRUD operations for the **language** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Languages
    * const languages = await prisma.language.findMany()
    * ```
    */
  get language(): Prisma.languageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.submission`: Exposes CRUD operations for the **submission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Submissions
    * const submissions = await prisma.submission.findMany()
    * ```
    */
  get submission(): Prisma.submissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.testcase`: Exposes CRUD operations for the **testcase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Testcases
    * const testcases = await prisma.testcase.findMany()
    * ```
    */
  get testcase(): Prisma.testcaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.testcaseresult`: Exposes CRUD operations for the **testcaseresult** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Testcaseresults
    * const testcaseresults = await prisma.testcaseresult.findMany()
    * ```
    */
  get testcaseresult(): Prisma.testcaseresultDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.topic`: Exposes CRUD operations for the **topic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Topics
    * const topics = await prisma.topic.findMany()
    * ```
    */
  get topic(): Prisma.topicDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.topiclanguagedetail`: Exposes CRUD operations for the **topiclanguagedetail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Topiclanguagedetails
    * const topiclanguagedetails = await prisma.topiclanguagedetail.findMany()
    * ```
    */
  get topiclanguagedetail(): Prisma.topiclanguagedetailDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lesson`: Exposes CRUD operations for the **lesson** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lessons
    * const lessons = await prisma.lesson.findMany()
    * ```
    */
  get lesson(): Prisma.lessonDelegate<ExtArgs, ClientOptions>;
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
    exercise: 'exercise',
    language: 'language',
    submission: 'submission',
    testcase: 'testcase',
    testcaseresult: 'testcaseresult',
    topic: 'topic',
    topiclanguagedetail: 'topiclanguagedetail',
    user: 'user',
    lesson: 'lesson'
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
      modelProps: "exercise" | "language" | "submission" | "testcase" | "testcaseresult" | "topic" | "topiclanguagedetail" | "user" | "lesson"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      exercise: {
        payload: Prisma.$exercisePayload<ExtArgs>
        fields: Prisma.exerciseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.exerciseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exercisePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.exerciseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exercisePayload>
          }
          findFirst: {
            args: Prisma.exerciseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exercisePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.exerciseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exercisePayload>
          }
          findMany: {
            args: Prisma.exerciseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exercisePayload>[]
          }
          create: {
            args: Prisma.exerciseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exercisePayload>
          }
          createMany: {
            args: Prisma.exerciseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.exerciseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exercisePayload>
          }
          update: {
            args: Prisma.exerciseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exercisePayload>
          }
          deleteMany: {
            args: Prisma.exerciseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.exerciseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.exerciseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exercisePayload>
          }
          aggregate: {
            args: Prisma.ExerciseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExercise>
          }
          groupBy: {
            args: Prisma.exerciseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExerciseGroupByOutputType>[]
          }
          count: {
            args: Prisma.exerciseCountArgs<ExtArgs>
            result: $Utils.Optional<ExerciseCountAggregateOutputType> | number
          }
        }
      }
      language: {
        payload: Prisma.$languagePayload<ExtArgs>
        fields: Prisma.languageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.languageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$languagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.languageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$languagePayload>
          }
          findFirst: {
            args: Prisma.languageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$languagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.languageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$languagePayload>
          }
          findMany: {
            args: Prisma.languageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$languagePayload>[]
          }
          create: {
            args: Prisma.languageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$languagePayload>
          }
          createMany: {
            args: Prisma.languageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.languageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$languagePayload>
          }
          update: {
            args: Prisma.languageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$languagePayload>
          }
          deleteMany: {
            args: Prisma.languageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.languageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.languageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$languagePayload>
          }
          aggregate: {
            args: Prisma.LanguageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLanguage>
          }
          groupBy: {
            args: Prisma.languageGroupByArgs<ExtArgs>
            result: $Utils.Optional<LanguageGroupByOutputType>[]
          }
          count: {
            args: Prisma.languageCountArgs<ExtArgs>
            result: $Utils.Optional<LanguageCountAggregateOutputType> | number
          }
        }
      }
      submission: {
        payload: Prisma.$submissionPayload<ExtArgs>
        fields: Prisma.submissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.submissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.submissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionPayload>
          }
          findFirst: {
            args: Prisma.submissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.submissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionPayload>
          }
          findMany: {
            args: Prisma.submissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionPayload>[]
          }
          create: {
            args: Prisma.submissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionPayload>
          }
          createMany: {
            args: Prisma.submissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.submissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionPayload>
          }
          update: {
            args: Prisma.submissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionPayload>
          }
          deleteMany: {
            args: Prisma.submissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.submissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.submissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionPayload>
          }
          aggregate: {
            args: Prisma.SubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubmission>
          }
          groupBy: {
            args: Prisma.submissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.submissionCountArgs<ExtArgs>
            result: $Utils.Optional<SubmissionCountAggregateOutputType> | number
          }
        }
      }
      testcase: {
        payload: Prisma.$testcasePayload<ExtArgs>
        fields: Prisma.testcaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.testcaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testcasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.testcaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testcasePayload>
          }
          findFirst: {
            args: Prisma.testcaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testcasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.testcaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testcasePayload>
          }
          findMany: {
            args: Prisma.testcaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testcasePayload>[]
          }
          create: {
            args: Prisma.testcaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testcasePayload>
          }
          createMany: {
            args: Prisma.testcaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.testcaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testcasePayload>
          }
          update: {
            args: Prisma.testcaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testcasePayload>
          }
          deleteMany: {
            args: Prisma.testcaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.testcaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.testcaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testcasePayload>
          }
          aggregate: {
            args: Prisma.TestcaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTestcase>
          }
          groupBy: {
            args: Prisma.testcaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestcaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.testcaseCountArgs<ExtArgs>
            result: $Utils.Optional<TestcaseCountAggregateOutputType> | number
          }
        }
      }
      testcaseresult: {
        payload: Prisma.$testcaseresultPayload<ExtArgs>
        fields: Prisma.testcaseresultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.testcaseresultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testcaseresultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.testcaseresultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testcaseresultPayload>
          }
          findFirst: {
            args: Prisma.testcaseresultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testcaseresultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.testcaseresultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testcaseresultPayload>
          }
          findMany: {
            args: Prisma.testcaseresultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testcaseresultPayload>[]
          }
          create: {
            args: Prisma.testcaseresultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testcaseresultPayload>
          }
          createMany: {
            args: Prisma.testcaseresultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.testcaseresultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testcaseresultPayload>
          }
          update: {
            args: Prisma.testcaseresultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testcaseresultPayload>
          }
          deleteMany: {
            args: Prisma.testcaseresultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.testcaseresultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.testcaseresultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testcaseresultPayload>
          }
          aggregate: {
            args: Prisma.TestcaseresultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTestcaseresult>
          }
          groupBy: {
            args: Prisma.testcaseresultGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestcaseresultGroupByOutputType>[]
          }
          count: {
            args: Prisma.testcaseresultCountArgs<ExtArgs>
            result: $Utils.Optional<TestcaseresultCountAggregateOutputType> | number
          }
        }
      }
      topic: {
        payload: Prisma.$topicPayload<ExtArgs>
        fields: Prisma.topicFieldRefs
        operations: {
          findUnique: {
            args: Prisma.topicFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$topicPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.topicFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$topicPayload>
          }
          findFirst: {
            args: Prisma.topicFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$topicPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.topicFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$topicPayload>
          }
          findMany: {
            args: Prisma.topicFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$topicPayload>[]
          }
          create: {
            args: Prisma.topicCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$topicPayload>
          }
          createMany: {
            args: Prisma.topicCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.topicDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$topicPayload>
          }
          update: {
            args: Prisma.topicUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$topicPayload>
          }
          deleteMany: {
            args: Prisma.topicDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.topicUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.topicUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$topicPayload>
          }
          aggregate: {
            args: Prisma.TopicAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTopic>
          }
          groupBy: {
            args: Prisma.topicGroupByArgs<ExtArgs>
            result: $Utils.Optional<TopicGroupByOutputType>[]
          }
          count: {
            args: Prisma.topicCountArgs<ExtArgs>
            result: $Utils.Optional<TopicCountAggregateOutputType> | number
          }
        }
      }
      topiclanguagedetail: {
        payload: Prisma.$topiclanguagedetailPayload<ExtArgs>
        fields: Prisma.topiclanguagedetailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.topiclanguagedetailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$topiclanguagedetailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.topiclanguagedetailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$topiclanguagedetailPayload>
          }
          findFirst: {
            args: Prisma.topiclanguagedetailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$topiclanguagedetailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.topiclanguagedetailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$topiclanguagedetailPayload>
          }
          findMany: {
            args: Prisma.topiclanguagedetailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$topiclanguagedetailPayload>[]
          }
          create: {
            args: Prisma.topiclanguagedetailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$topiclanguagedetailPayload>
          }
          createMany: {
            args: Prisma.topiclanguagedetailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.topiclanguagedetailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$topiclanguagedetailPayload>
          }
          update: {
            args: Prisma.topiclanguagedetailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$topiclanguagedetailPayload>
          }
          deleteMany: {
            args: Prisma.topiclanguagedetailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.topiclanguagedetailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.topiclanguagedetailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$topiclanguagedetailPayload>
          }
          aggregate: {
            args: Prisma.TopiclanguagedetailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTopiclanguagedetail>
          }
          groupBy: {
            args: Prisma.topiclanguagedetailGroupByArgs<ExtArgs>
            result: $Utils.Optional<TopiclanguagedetailGroupByOutputType>[]
          }
          count: {
            args: Prisma.topiclanguagedetailCountArgs<ExtArgs>
            result: $Utils.Optional<TopiclanguagedetailCountAggregateOutputType> | number
          }
        }
      }
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      lesson: {
        payload: Prisma.$lessonPayload<ExtArgs>
        fields: Prisma.lessonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.lessonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lessonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.lessonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lessonPayload>
          }
          findFirst: {
            args: Prisma.lessonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lessonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.lessonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lessonPayload>
          }
          findMany: {
            args: Prisma.lessonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lessonPayload>[]
          }
          create: {
            args: Prisma.lessonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lessonPayload>
          }
          createMany: {
            args: Prisma.lessonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.lessonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lessonPayload>
          }
          update: {
            args: Prisma.lessonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lessonPayload>
          }
          deleteMany: {
            args: Prisma.lessonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.lessonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.lessonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lessonPayload>
          }
          aggregate: {
            args: Prisma.LessonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLesson>
          }
          groupBy: {
            args: Prisma.lessonGroupByArgs<ExtArgs>
            result: $Utils.Optional<LessonGroupByOutputType>[]
          }
          count: {
            args: Prisma.lessonCountArgs<ExtArgs>
            result: $Utils.Optional<LessonCountAggregateOutputType> | number
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
    exercise?: exerciseOmit
    language?: languageOmit
    submission?: submissionOmit
    testcase?: testcaseOmit
    testcaseresult?: testcaseresultOmit
    topic?: topicOmit
    topiclanguagedetail?: topiclanguagedetailOmit
    user?: userOmit
    lesson?: lessonOmit
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
   * Count Type ExerciseCountOutputType
   */

  export type ExerciseCountOutputType = {
    submission: number
    testcase: number
  }

  export type ExerciseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | ExerciseCountOutputTypeCountSubmissionArgs
    testcase?: boolean | ExerciseCountOutputTypeCountTestcaseArgs
  }

  // Custom InputTypes
  /**
   * ExerciseCountOutputType without action
   */
  export type ExerciseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseCountOutputType
     */
    select?: ExerciseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExerciseCountOutputType without action
   */
  export type ExerciseCountOutputTypeCountSubmissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: submissionWhereInput
  }

  /**
   * ExerciseCountOutputType without action
   */
  export type ExerciseCountOutputTypeCountTestcaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: testcaseWhereInput
  }


  /**
   * Count Type LanguageCountOutputType
   */

  export type LanguageCountOutputType = {
    topiclanguagedetail: number
  }

  export type LanguageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    topiclanguagedetail?: boolean | LanguageCountOutputTypeCountTopiclanguagedetailArgs
  }

  // Custom InputTypes
  /**
   * LanguageCountOutputType without action
   */
  export type LanguageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageCountOutputType
     */
    select?: LanguageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LanguageCountOutputType without action
   */
  export type LanguageCountOutputTypeCountTopiclanguagedetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: topiclanguagedetailWhereInput
  }


  /**
   * Count Type SubmissionCountOutputType
   */

  export type SubmissionCountOutputType = {
    testcaseresult: number
  }

  export type SubmissionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    testcaseresult?: boolean | SubmissionCountOutputTypeCountTestcaseresultArgs
  }

  // Custom InputTypes
  /**
   * SubmissionCountOutputType without action
   */
  export type SubmissionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubmissionCountOutputType
     */
    select?: SubmissionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubmissionCountOutputType without action
   */
  export type SubmissionCountOutputTypeCountTestcaseresultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: testcaseresultWhereInput
  }


  /**
   * Count Type TestcaseCountOutputType
   */

  export type TestcaseCountOutputType = {
    testcaseresult: number
  }

  export type TestcaseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    testcaseresult?: boolean | TestcaseCountOutputTypeCountTestcaseresultArgs
  }

  // Custom InputTypes
  /**
   * TestcaseCountOutputType without action
   */
  export type TestcaseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestcaseCountOutputType
     */
    select?: TestcaseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TestcaseCountOutputType without action
   */
  export type TestcaseCountOutputTypeCountTestcaseresultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: testcaseresultWhereInput
  }


  /**
   * Count Type TopicCountOutputType
   */

  export type TopicCountOutputType = {
    topiclanguagedetail: number
  }

  export type TopicCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    topiclanguagedetail?: boolean | TopicCountOutputTypeCountTopiclanguagedetailArgs
  }

  // Custom InputTypes
  /**
   * TopicCountOutputType without action
   */
  export type TopicCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicCountOutputType
     */
    select?: TopicCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TopicCountOutputType without action
   */
  export type TopicCountOutputTypeCountTopiclanguagedetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: topiclanguagedetailWhereInput
  }


  /**
   * Count Type TopiclanguagedetailCountOutputType
   */

  export type TopiclanguagedetailCountOutputType = {
    lesson: number
  }

  export type TopiclanguagedetailCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lesson?: boolean | TopiclanguagedetailCountOutputTypeCountLessonArgs
  }

  // Custom InputTypes
  /**
   * TopiclanguagedetailCountOutputType without action
   */
  export type TopiclanguagedetailCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopiclanguagedetailCountOutputType
     */
    select?: TopiclanguagedetailCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TopiclanguagedetailCountOutputType without action
   */
  export type TopiclanguagedetailCountOutputTypeCountLessonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: lessonWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    submission: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | UserCountOutputTypeCountSubmissionArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSubmissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: submissionWhereInput
  }


  /**
   * Count Type LessonCountOutputType
   */

  export type LessonCountOutputType = {
    exercise: number
  }

  export type LessonCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercise?: boolean | LessonCountOutputTypeCountExerciseArgs
  }

  // Custom InputTypes
  /**
   * LessonCountOutputType without action
   */
  export type LessonCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonCountOutputType
     */
    select?: LessonCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LessonCountOutputType without action
   */
  export type LessonCountOutputTypeCountExerciseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: exerciseWhereInput
  }


  /**
   * Models
   */

  /**
   * Model exercise
   */

  export type AggregateExercise = {
    _count: ExerciseCountAggregateOutputType | null
    _avg: ExerciseAvgAggregateOutputType | null
    _sum: ExerciseSumAggregateOutputType | null
    _min: ExerciseMinAggregateOutputType | null
    _max: ExerciseMaxAggregateOutputType | null
  }

  export type ExerciseAvgAggregateOutputType = {
    EID: number | null
    LsID: number | null
    OrderIndex: number | null
  }

  export type ExerciseSumAggregateOutputType = {
    EID: number | null
    LsID: number | null
    OrderIndex: number | null
  }

  export type ExerciseMinAggregateOutputType = {
    EID: number | null
    LsID: number | null
    OrderIndex: number | null
    Content: string | null
    Difficulty: $Enums.exercise_Difficulty | null
  }

  export type ExerciseMaxAggregateOutputType = {
    EID: number | null
    LsID: number | null
    OrderIndex: number | null
    Content: string | null
    Difficulty: $Enums.exercise_Difficulty | null
  }

  export type ExerciseCountAggregateOutputType = {
    EID: number
    LsID: number
    OrderIndex: number
    Content: number
    Difficulty: number
    _all: number
  }


  export type ExerciseAvgAggregateInputType = {
    EID?: true
    LsID?: true
    OrderIndex?: true
  }

  export type ExerciseSumAggregateInputType = {
    EID?: true
    LsID?: true
    OrderIndex?: true
  }

  export type ExerciseMinAggregateInputType = {
    EID?: true
    LsID?: true
    OrderIndex?: true
    Content?: true
    Difficulty?: true
  }

  export type ExerciseMaxAggregateInputType = {
    EID?: true
    LsID?: true
    OrderIndex?: true
    Content?: true
    Difficulty?: true
  }

  export type ExerciseCountAggregateInputType = {
    EID?: true
    LsID?: true
    OrderIndex?: true
    Content?: true
    Difficulty?: true
    _all?: true
  }

  export type ExerciseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which exercise to aggregate.
     */
    where?: exerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exercises to fetch.
     */
    orderBy?: exerciseOrderByWithRelationInput | exerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: exerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned exercises
    **/
    _count?: true | ExerciseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExerciseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExerciseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExerciseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExerciseMaxAggregateInputType
  }

  export type GetExerciseAggregateType<T extends ExerciseAggregateArgs> = {
        [P in keyof T & keyof AggregateExercise]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExercise[P]>
      : GetScalarType<T[P], AggregateExercise[P]>
  }




  export type exerciseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: exerciseWhereInput
    orderBy?: exerciseOrderByWithAggregationInput | exerciseOrderByWithAggregationInput[]
    by: ExerciseScalarFieldEnum[] | ExerciseScalarFieldEnum
    having?: exerciseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExerciseCountAggregateInputType | true
    _avg?: ExerciseAvgAggregateInputType
    _sum?: ExerciseSumAggregateInputType
    _min?: ExerciseMinAggregateInputType
    _max?: ExerciseMaxAggregateInputType
  }

  export type ExerciseGroupByOutputType = {
    EID: number
    LsID: number
    OrderIndex: number
    Content: string
    Difficulty: $Enums.exercise_Difficulty
    _count: ExerciseCountAggregateOutputType | null
    _avg: ExerciseAvgAggregateOutputType | null
    _sum: ExerciseSumAggregateOutputType | null
    _min: ExerciseMinAggregateOutputType | null
    _max: ExerciseMaxAggregateOutputType | null
  }

  type GetExerciseGroupByPayload<T extends exerciseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExerciseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExerciseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExerciseGroupByOutputType[P]>
            : GetScalarType<T[P], ExerciseGroupByOutputType[P]>
        }
      >
    >


  export type exerciseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    EID?: boolean
    LsID?: boolean
    OrderIndex?: boolean
    Content?: boolean
    Difficulty?: boolean
    lession?: boolean | lessonDefaultArgs<ExtArgs>
    submission?: boolean | exercise$submissionArgs<ExtArgs>
    testcase?: boolean | exercise$testcaseArgs<ExtArgs>
    _count?: boolean | ExerciseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exercise"]>



  export type exerciseSelectScalar = {
    EID?: boolean
    LsID?: boolean
    OrderIndex?: boolean
    Content?: boolean
    Difficulty?: boolean
  }

  export type exerciseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"EID" | "LsID" | "OrderIndex" | "Content" | "Difficulty", ExtArgs["result"]["exercise"]>
  export type exerciseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lession?: boolean | lessonDefaultArgs<ExtArgs>
    submission?: boolean | exercise$submissionArgs<ExtArgs>
    testcase?: boolean | exercise$testcaseArgs<ExtArgs>
    _count?: boolean | ExerciseCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $exercisePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "exercise"
    objects: {
      lession: Prisma.$lessonPayload<ExtArgs>
      submission: Prisma.$submissionPayload<ExtArgs>[]
      testcase: Prisma.$testcasePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      EID: number
      LsID: number
      OrderIndex: number
      Content: string
      Difficulty: $Enums.exercise_Difficulty
    }, ExtArgs["result"]["exercise"]>
    composites: {}
  }

  type exerciseGetPayload<S extends boolean | null | undefined | exerciseDefaultArgs> = $Result.GetResult<Prisma.$exercisePayload, S>

  type exerciseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<exerciseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExerciseCountAggregateInputType | true
    }

  export interface exerciseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['exercise'], meta: { name: 'exercise' } }
    /**
     * Find zero or one Exercise that matches the filter.
     * @param {exerciseFindUniqueArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends exerciseFindUniqueArgs>(args: SelectSubset<T, exerciseFindUniqueArgs<ExtArgs>>): Prisma__exerciseClient<$Result.GetResult<Prisma.$exercisePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Exercise that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {exerciseFindUniqueOrThrowArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends exerciseFindUniqueOrThrowArgs>(args: SelectSubset<T, exerciseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__exerciseClient<$Result.GetResult<Prisma.$exercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exercise that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exerciseFindFirstArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends exerciseFindFirstArgs>(args?: SelectSubset<T, exerciseFindFirstArgs<ExtArgs>>): Prisma__exerciseClient<$Result.GetResult<Prisma.$exercisePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exercise that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exerciseFindFirstOrThrowArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends exerciseFindFirstOrThrowArgs>(args?: SelectSubset<T, exerciseFindFirstOrThrowArgs<ExtArgs>>): Prisma__exerciseClient<$Result.GetResult<Prisma.$exercisePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Exercises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exerciseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exercises
     * const exercises = await prisma.exercise.findMany()
     * 
     * // Get first 10 Exercises
     * const exercises = await prisma.exercise.findMany({ take: 10 })
     * 
     * // Only select the `EID`
     * const exerciseWithEIDOnly = await prisma.exercise.findMany({ select: { EID: true } })
     * 
     */
    findMany<T extends exerciseFindManyArgs>(args?: SelectSubset<T, exerciseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$exercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Exercise.
     * @param {exerciseCreateArgs} args - Arguments to create a Exercise.
     * @example
     * // Create one Exercise
     * const Exercise = await prisma.exercise.create({
     *   data: {
     *     // ... data to create a Exercise
     *   }
     * })
     * 
     */
    create<T extends exerciseCreateArgs>(args: SelectSubset<T, exerciseCreateArgs<ExtArgs>>): Prisma__exerciseClient<$Result.GetResult<Prisma.$exercisePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Exercises.
     * @param {exerciseCreateManyArgs} args - Arguments to create many Exercises.
     * @example
     * // Create many Exercises
     * const exercise = await prisma.exercise.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends exerciseCreateManyArgs>(args?: SelectSubset<T, exerciseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Exercise.
     * @param {exerciseDeleteArgs} args - Arguments to delete one Exercise.
     * @example
     * // Delete one Exercise
     * const Exercise = await prisma.exercise.delete({
     *   where: {
     *     // ... filter to delete one Exercise
     *   }
     * })
     * 
     */
    delete<T extends exerciseDeleteArgs>(args: SelectSubset<T, exerciseDeleteArgs<ExtArgs>>): Prisma__exerciseClient<$Result.GetResult<Prisma.$exercisePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Exercise.
     * @param {exerciseUpdateArgs} args - Arguments to update one Exercise.
     * @example
     * // Update one Exercise
     * const exercise = await prisma.exercise.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends exerciseUpdateArgs>(args: SelectSubset<T, exerciseUpdateArgs<ExtArgs>>): Prisma__exerciseClient<$Result.GetResult<Prisma.$exercisePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Exercises.
     * @param {exerciseDeleteManyArgs} args - Arguments to filter Exercises to delete.
     * @example
     * // Delete a few Exercises
     * const { count } = await prisma.exercise.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends exerciseDeleteManyArgs>(args?: SelectSubset<T, exerciseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exerciseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exercises
     * const exercise = await prisma.exercise.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends exerciseUpdateManyArgs>(args: SelectSubset<T, exerciseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Exercise.
     * @param {exerciseUpsertArgs} args - Arguments to update or create a Exercise.
     * @example
     * // Update or create a Exercise
     * const exercise = await prisma.exercise.upsert({
     *   create: {
     *     // ... data to create a Exercise
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exercise we want to update
     *   }
     * })
     */
    upsert<T extends exerciseUpsertArgs>(args: SelectSubset<T, exerciseUpsertArgs<ExtArgs>>): Prisma__exerciseClient<$Result.GetResult<Prisma.$exercisePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exerciseCountArgs} args - Arguments to filter Exercises to count.
     * @example
     * // Count the number of Exercises
     * const count = await prisma.exercise.count({
     *   where: {
     *     // ... the filter for the Exercises we want to count
     *   }
     * })
    **/
    count<T extends exerciseCountArgs>(
      args?: Subset<T, exerciseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExerciseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExerciseAggregateArgs>(args: Subset<T, ExerciseAggregateArgs>): Prisma.PrismaPromise<GetExerciseAggregateType<T>>

    /**
     * Group by Exercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exerciseGroupByArgs} args - Group by arguments.
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
      T extends exerciseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: exerciseGroupByArgs['orderBy'] }
        : { orderBy?: exerciseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, exerciseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExerciseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the exercise model
   */
  readonly fields: exerciseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for exercise.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__exerciseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lession<T extends lessonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, lessonDefaultArgs<ExtArgs>>): Prisma__lessonClient<$Result.GetResult<Prisma.$lessonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    submission<T extends exercise$submissionArgs<ExtArgs> = {}>(args?: Subset<T, exercise$submissionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$submissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    testcase<T extends exercise$testcaseArgs<ExtArgs> = {}>(args?: Subset<T, exercise$testcaseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$testcasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the exercise model
   */
  interface exerciseFieldRefs {
    readonly EID: FieldRef<"exercise", 'Int'>
    readonly LsID: FieldRef<"exercise", 'Int'>
    readonly OrderIndex: FieldRef<"exercise", 'Int'>
    readonly Content: FieldRef<"exercise", 'String'>
    readonly Difficulty: FieldRef<"exercise", 'exercise_Difficulty'>
  }
    

  // Custom InputTypes
  /**
   * exercise findUnique
   */
  export type exerciseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercise
     */
    select?: exerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercise
     */
    omit?: exerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exerciseInclude<ExtArgs> | null
    /**
     * Filter, which exercise to fetch.
     */
    where: exerciseWhereUniqueInput
  }

  /**
   * exercise findUniqueOrThrow
   */
  export type exerciseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercise
     */
    select?: exerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercise
     */
    omit?: exerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exerciseInclude<ExtArgs> | null
    /**
     * Filter, which exercise to fetch.
     */
    where: exerciseWhereUniqueInput
  }

  /**
   * exercise findFirst
   */
  export type exerciseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercise
     */
    select?: exerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercise
     */
    omit?: exerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exerciseInclude<ExtArgs> | null
    /**
     * Filter, which exercise to fetch.
     */
    where?: exerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exercises to fetch.
     */
    orderBy?: exerciseOrderByWithRelationInput | exerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for exercises.
     */
    cursor?: exerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of exercises.
     */
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * exercise findFirstOrThrow
   */
  export type exerciseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercise
     */
    select?: exerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercise
     */
    omit?: exerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exerciseInclude<ExtArgs> | null
    /**
     * Filter, which exercise to fetch.
     */
    where?: exerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exercises to fetch.
     */
    orderBy?: exerciseOrderByWithRelationInput | exerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for exercises.
     */
    cursor?: exerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of exercises.
     */
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * exercise findMany
   */
  export type exerciseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercise
     */
    select?: exerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercise
     */
    omit?: exerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exerciseInclude<ExtArgs> | null
    /**
     * Filter, which exercises to fetch.
     */
    where?: exerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exercises to fetch.
     */
    orderBy?: exerciseOrderByWithRelationInput | exerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing exercises.
     */
    cursor?: exerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exercises.
     */
    skip?: number
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * exercise create
   */
  export type exerciseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercise
     */
    select?: exerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercise
     */
    omit?: exerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exerciseInclude<ExtArgs> | null
    /**
     * The data needed to create a exercise.
     */
    data: XOR<exerciseCreateInput, exerciseUncheckedCreateInput>
  }

  /**
   * exercise createMany
   */
  export type exerciseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many exercises.
     */
    data: exerciseCreateManyInput | exerciseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * exercise update
   */
  export type exerciseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercise
     */
    select?: exerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercise
     */
    omit?: exerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exerciseInclude<ExtArgs> | null
    /**
     * The data needed to update a exercise.
     */
    data: XOR<exerciseUpdateInput, exerciseUncheckedUpdateInput>
    /**
     * Choose, which exercise to update.
     */
    where: exerciseWhereUniqueInput
  }

  /**
   * exercise updateMany
   */
  export type exerciseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update exercises.
     */
    data: XOR<exerciseUpdateManyMutationInput, exerciseUncheckedUpdateManyInput>
    /**
     * Filter which exercises to update
     */
    where?: exerciseWhereInput
    /**
     * Limit how many exercises to update.
     */
    limit?: number
  }

  /**
   * exercise upsert
   */
  export type exerciseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercise
     */
    select?: exerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercise
     */
    omit?: exerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exerciseInclude<ExtArgs> | null
    /**
     * The filter to search for the exercise to update in case it exists.
     */
    where: exerciseWhereUniqueInput
    /**
     * In case the exercise found by the `where` argument doesn't exist, create a new exercise with this data.
     */
    create: XOR<exerciseCreateInput, exerciseUncheckedCreateInput>
    /**
     * In case the exercise was found with the provided `where` argument, update it with this data.
     */
    update: XOR<exerciseUpdateInput, exerciseUncheckedUpdateInput>
  }

  /**
   * exercise delete
   */
  export type exerciseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercise
     */
    select?: exerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercise
     */
    omit?: exerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exerciseInclude<ExtArgs> | null
    /**
     * Filter which exercise to delete.
     */
    where: exerciseWhereUniqueInput
  }

  /**
   * exercise deleteMany
   */
  export type exerciseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which exercises to delete
     */
    where?: exerciseWhereInput
    /**
     * Limit how many exercises to delete.
     */
    limit?: number
  }

  /**
   * exercise.submission
   */
  export type exercise$submissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submission
     */
    select?: submissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submission
     */
    omit?: submissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionInclude<ExtArgs> | null
    where?: submissionWhereInput
    orderBy?: submissionOrderByWithRelationInput | submissionOrderByWithRelationInput[]
    cursor?: submissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * exercise.testcase
   */
  export type exercise$testcaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testcase
     */
    select?: testcaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the testcase
     */
    omit?: testcaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testcaseInclude<ExtArgs> | null
    where?: testcaseWhereInput
    orderBy?: testcaseOrderByWithRelationInput | testcaseOrderByWithRelationInput[]
    cursor?: testcaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestcaseScalarFieldEnum | TestcaseScalarFieldEnum[]
  }

  /**
   * exercise without action
   */
  export type exerciseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercise
     */
    select?: exerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercise
     */
    omit?: exerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exerciseInclude<ExtArgs> | null
  }


  /**
   * Model language
   */

  export type AggregateLanguage = {
    _count: LanguageCountAggregateOutputType | null
    _avg: LanguageAvgAggregateOutputType | null
    _sum: LanguageSumAggregateOutputType | null
    _min: LanguageMinAggregateOutputType | null
    _max: LanguageMaxAggregateOutputType | null
  }

  export type LanguageAvgAggregateOutputType = {
    LgID: number | null
  }

  export type LanguageSumAggregateOutputType = {
    LgID: number | null
  }

  export type LanguageMinAggregateOutputType = {
    LgID: number | null
    Name: string | null
    Logo: string | null
  }

  export type LanguageMaxAggregateOutputType = {
    LgID: number | null
    Name: string | null
    Logo: string | null
  }

  export type LanguageCountAggregateOutputType = {
    LgID: number
    Name: number
    Logo: number
    _all: number
  }


  export type LanguageAvgAggregateInputType = {
    LgID?: true
  }

  export type LanguageSumAggregateInputType = {
    LgID?: true
  }

  export type LanguageMinAggregateInputType = {
    LgID?: true
    Name?: true
    Logo?: true
  }

  export type LanguageMaxAggregateInputType = {
    LgID?: true
    Name?: true
    Logo?: true
  }

  export type LanguageCountAggregateInputType = {
    LgID?: true
    Name?: true
    Logo?: true
    _all?: true
  }

  export type LanguageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which language to aggregate.
     */
    where?: languageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of languages to fetch.
     */
    orderBy?: languageOrderByWithRelationInput | languageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: languageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned languages
    **/
    _count?: true | LanguageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LanguageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LanguageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LanguageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LanguageMaxAggregateInputType
  }

  export type GetLanguageAggregateType<T extends LanguageAggregateArgs> = {
        [P in keyof T & keyof AggregateLanguage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLanguage[P]>
      : GetScalarType<T[P], AggregateLanguage[P]>
  }




  export type languageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: languageWhereInput
    orderBy?: languageOrderByWithAggregationInput | languageOrderByWithAggregationInput[]
    by: LanguageScalarFieldEnum[] | LanguageScalarFieldEnum
    having?: languageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LanguageCountAggregateInputType | true
    _avg?: LanguageAvgAggregateInputType
    _sum?: LanguageSumAggregateInputType
    _min?: LanguageMinAggregateInputType
    _max?: LanguageMaxAggregateInputType
  }

  export type LanguageGroupByOutputType = {
    LgID: number
    Name: string
    Logo: string | null
    _count: LanguageCountAggregateOutputType | null
    _avg: LanguageAvgAggregateOutputType | null
    _sum: LanguageSumAggregateOutputType | null
    _min: LanguageMinAggregateOutputType | null
    _max: LanguageMaxAggregateOutputType | null
  }

  type GetLanguageGroupByPayload<T extends languageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LanguageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LanguageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LanguageGroupByOutputType[P]>
            : GetScalarType<T[P], LanguageGroupByOutputType[P]>
        }
      >
    >


  export type languageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    LgID?: boolean
    Name?: boolean
    Logo?: boolean
    topiclanguagedetail?: boolean | language$topiclanguagedetailArgs<ExtArgs>
    _count?: boolean | LanguageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["language"]>



  export type languageSelectScalar = {
    LgID?: boolean
    Name?: boolean
    Logo?: boolean
  }

  export type languageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"LgID" | "Name" | "Logo", ExtArgs["result"]["language"]>
  export type languageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    topiclanguagedetail?: boolean | language$topiclanguagedetailArgs<ExtArgs>
    _count?: boolean | LanguageCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $languagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "language"
    objects: {
      topiclanguagedetail: Prisma.$topiclanguagedetailPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      LgID: number
      Name: string
      Logo: string | null
    }, ExtArgs["result"]["language"]>
    composites: {}
  }

  type languageGetPayload<S extends boolean | null | undefined | languageDefaultArgs> = $Result.GetResult<Prisma.$languagePayload, S>

  type languageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<languageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LanguageCountAggregateInputType | true
    }

  export interface languageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['language'], meta: { name: 'language' } }
    /**
     * Find zero or one Language that matches the filter.
     * @param {languageFindUniqueArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends languageFindUniqueArgs>(args: SelectSubset<T, languageFindUniqueArgs<ExtArgs>>): Prisma__languageClient<$Result.GetResult<Prisma.$languagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Language that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {languageFindUniqueOrThrowArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends languageFindUniqueOrThrowArgs>(args: SelectSubset<T, languageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__languageClient<$Result.GetResult<Prisma.$languagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Language that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {languageFindFirstArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends languageFindFirstArgs>(args?: SelectSubset<T, languageFindFirstArgs<ExtArgs>>): Prisma__languageClient<$Result.GetResult<Prisma.$languagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Language that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {languageFindFirstOrThrowArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends languageFindFirstOrThrowArgs>(args?: SelectSubset<T, languageFindFirstOrThrowArgs<ExtArgs>>): Prisma__languageClient<$Result.GetResult<Prisma.$languagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Languages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {languageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Languages
     * const languages = await prisma.language.findMany()
     * 
     * // Get first 10 Languages
     * const languages = await prisma.language.findMany({ take: 10 })
     * 
     * // Only select the `LgID`
     * const languageWithLgIDOnly = await prisma.language.findMany({ select: { LgID: true } })
     * 
     */
    findMany<T extends languageFindManyArgs>(args?: SelectSubset<T, languageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$languagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Language.
     * @param {languageCreateArgs} args - Arguments to create a Language.
     * @example
     * // Create one Language
     * const Language = await prisma.language.create({
     *   data: {
     *     // ... data to create a Language
     *   }
     * })
     * 
     */
    create<T extends languageCreateArgs>(args: SelectSubset<T, languageCreateArgs<ExtArgs>>): Prisma__languageClient<$Result.GetResult<Prisma.$languagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Languages.
     * @param {languageCreateManyArgs} args - Arguments to create many Languages.
     * @example
     * // Create many Languages
     * const language = await prisma.language.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends languageCreateManyArgs>(args?: SelectSubset<T, languageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Language.
     * @param {languageDeleteArgs} args - Arguments to delete one Language.
     * @example
     * // Delete one Language
     * const Language = await prisma.language.delete({
     *   where: {
     *     // ... filter to delete one Language
     *   }
     * })
     * 
     */
    delete<T extends languageDeleteArgs>(args: SelectSubset<T, languageDeleteArgs<ExtArgs>>): Prisma__languageClient<$Result.GetResult<Prisma.$languagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Language.
     * @param {languageUpdateArgs} args - Arguments to update one Language.
     * @example
     * // Update one Language
     * const language = await prisma.language.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends languageUpdateArgs>(args: SelectSubset<T, languageUpdateArgs<ExtArgs>>): Prisma__languageClient<$Result.GetResult<Prisma.$languagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Languages.
     * @param {languageDeleteManyArgs} args - Arguments to filter Languages to delete.
     * @example
     * // Delete a few Languages
     * const { count } = await prisma.language.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends languageDeleteManyArgs>(args?: SelectSubset<T, languageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Languages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {languageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Languages
     * const language = await prisma.language.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends languageUpdateManyArgs>(args: SelectSubset<T, languageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Language.
     * @param {languageUpsertArgs} args - Arguments to update or create a Language.
     * @example
     * // Update or create a Language
     * const language = await prisma.language.upsert({
     *   create: {
     *     // ... data to create a Language
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Language we want to update
     *   }
     * })
     */
    upsert<T extends languageUpsertArgs>(args: SelectSubset<T, languageUpsertArgs<ExtArgs>>): Prisma__languageClient<$Result.GetResult<Prisma.$languagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Languages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {languageCountArgs} args - Arguments to filter Languages to count.
     * @example
     * // Count the number of Languages
     * const count = await prisma.language.count({
     *   where: {
     *     // ... the filter for the Languages we want to count
     *   }
     * })
    **/
    count<T extends languageCountArgs>(
      args?: Subset<T, languageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LanguageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Language.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LanguageAggregateArgs>(args: Subset<T, LanguageAggregateArgs>): Prisma.PrismaPromise<GetLanguageAggregateType<T>>

    /**
     * Group by Language.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {languageGroupByArgs} args - Group by arguments.
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
      T extends languageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: languageGroupByArgs['orderBy'] }
        : { orderBy?: languageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, languageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLanguageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the language model
   */
  readonly fields: languageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for language.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__languageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    topiclanguagedetail<T extends language$topiclanguagedetailArgs<ExtArgs> = {}>(args?: Subset<T, language$topiclanguagedetailArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$topiclanguagedetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the language model
   */
  interface languageFieldRefs {
    readonly LgID: FieldRef<"language", 'Int'>
    readonly Name: FieldRef<"language", 'String'>
    readonly Logo: FieldRef<"language", 'String'>
  }
    

  // Custom InputTypes
  /**
   * language findUnique
   */
  export type languageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the language
     */
    select?: languageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the language
     */
    omit?: languageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: languageInclude<ExtArgs> | null
    /**
     * Filter, which language to fetch.
     */
    where: languageWhereUniqueInput
  }

  /**
   * language findUniqueOrThrow
   */
  export type languageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the language
     */
    select?: languageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the language
     */
    omit?: languageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: languageInclude<ExtArgs> | null
    /**
     * Filter, which language to fetch.
     */
    where: languageWhereUniqueInput
  }

  /**
   * language findFirst
   */
  export type languageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the language
     */
    select?: languageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the language
     */
    omit?: languageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: languageInclude<ExtArgs> | null
    /**
     * Filter, which language to fetch.
     */
    where?: languageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of languages to fetch.
     */
    orderBy?: languageOrderByWithRelationInput | languageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for languages.
     */
    cursor?: languageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of languages.
     */
    distinct?: LanguageScalarFieldEnum | LanguageScalarFieldEnum[]
  }

  /**
   * language findFirstOrThrow
   */
  export type languageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the language
     */
    select?: languageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the language
     */
    omit?: languageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: languageInclude<ExtArgs> | null
    /**
     * Filter, which language to fetch.
     */
    where?: languageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of languages to fetch.
     */
    orderBy?: languageOrderByWithRelationInput | languageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for languages.
     */
    cursor?: languageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of languages.
     */
    distinct?: LanguageScalarFieldEnum | LanguageScalarFieldEnum[]
  }

  /**
   * language findMany
   */
  export type languageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the language
     */
    select?: languageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the language
     */
    omit?: languageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: languageInclude<ExtArgs> | null
    /**
     * Filter, which languages to fetch.
     */
    where?: languageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of languages to fetch.
     */
    orderBy?: languageOrderByWithRelationInput | languageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing languages.
     */
    cursor?: languageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` languages.
     */
    skip?: number
    distinct?: LanguageScalarFieldEnum | LanguageScalarFieldEnum[]
  }

  /**
   * language create
   */
  export type languageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the language
     */
    select?: languageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the language
     */
    omit?: languageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: languageInclude<ExtArgs> | null
    /**
     * The data needed to create a language.
     */
    data: XOR<languageCreateInput, languageUncheckedCreateInput>
  }

  /**
   * language createMany
   */
  export type languageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many languages.
     */
    data: languageCreateManyInput | languageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * language update
   */
  export type languageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the language
     */
    select?: languageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the language
     */
    omit?: languageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: languageInclude<ExtArgs> | null
    /**
     * The data needed to update a language.
     */
    data: XOR<languageUpdateInput, languageUncheckedUpdateInput>
    /**
     * Choose, which language to update.
     */
    where: languageWhereUniqueInput
  }

  /**
   * language updateMany
   */
  export type languageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update languages.
     */
    data: XOR<languageUpdateManyMutationInput, languageUncheckedUpdateManyInput>
    /**
     * Filter which languages to update
     */
    where?: languageWhereInput
    /**
     * Limit how many languages to update.
     */
    limit?: number
  }

  /**
   * language upsert
   */
  export type languageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the language
     */
    select?: languageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the language
     */
    omit?: languageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: languageInclude<ExtArgs> | null
    /**
     * The filter to search for the language to update in case it exists.
     */
    where: languageWhereUniqueInput
    /**
     * In case the language found by the `where` argument doesn't exist, create a new language with this data.
     */
    create: XOR<languageCreateInput, languageUncheckedCreateInput>
    /**
     * In case the language was found with the provided `where` argument, update it with this data.
     */
    update: XOR<languageUpdateInput, languageUncheckedUpdateInput>
  }

  /**
   * language delete
   */
  export type languageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the language
     */
    select?: languageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the language
     */
    omit?: languageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: languageInclude<ExtArgs> | null
    /**
     * Filter which language to delete.
     */
    where: languageWhereUniqueInput
  }

  /**
   * language deleteMany
   */
  export type languageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which languages to delete
     */
    where?: languageWhereInput
    /**
     * Limit how many languages to delete.
     */
    limit?: number
  }

  /**
   * language.topiclanguagedetail
   */
  export type language$topiclanguagedetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the topiclanguagedetail
     */
    select?: topiclanguagedetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the topiclanguagedetail
     */
    omit?: topiclanguagedetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: topiclanguagedetailInclude<ExtArgs> | null
    where?: topiclanguagedetailWhereInput
    orderBy?: topiclanguagedetailOrderByWithRelationInput | topiclanguagedetailOrderByWithRelationInput[]
    cursor?: topiclanguagedetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TopiclanguagedetailScalarFieldEnum | TopiclanguagedetailScalarFieldEnum[]
  }

  /**
   * language without action
   */
  export type languageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the language
     */
    select?: languageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the language
     */
    omit?: languageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: languageInclude<ExtArgs> | null
  }


  /**
   * Model submission
   */

  export type AggregateSubmission = {
    _count: SubmissionCountAggregateOutputType | null
    _avg: SubmissionAvgAggregateOutputType | null
    _sum: SubmissionSumAggregateOutputType | null
    _min: SubmissionMinAggregateOutputType | null
    _max: SubmissionMaxAggregateOutputType | null
  }

  export type SubmissionAvgAggregateOutputType = {
    SID: number | null
    EID: number | null
  }

  export type SubmissionSumAggregateOutputType = {
    SID: number | null
    EID: number | null
  }

  export type SubmissionMinAggregateOutputType = {
    SID: number | null
    UID: string | null
    EID: number | null
    Code: string | null
    CreatedAt: Date | null
    Result: $Enums.submission_Result | null
  }

  export type SubmissionMaxAggregateOutputType = {
    SID: number | null
    UID: string | null
    EID: number | null
    Code: string | null
    CreatedAt: Date | null
    Result: $Enums.submission_Result | null
  }

  export type SubmissionCountAggregateOutputType = {
    SID: number
    UID: number
    EID: number
    Code: number
    CreatedAt: number
    Result: number
    _all: number
  }


  export type SubmissionAvgAggregateInputType = {
    SID?: true
    EID?: true
  }

  export type SubmissionSumAggregateInputType = {
    SID?: true
    EID?: true
  }

  export type SubmissionMinAggregateInputType = {
    SID?: true
    UID?: true
    EID?: true
    Code?: true
    CreatedAt?: true
    Result?: true
  }

  export type SubmissionMaxAggregateInputType = {
    SID?: true
    UID?: true
    EID?: true
    Code?: true
    CreatedAt?: true
    Result?: true
  }

  export type SubmissionCountAggregateInputType = {
    SID?: true
    UID?: true
    EID?: true
    Code?: true
    CreatedAt?: true
    Result?: true
    _all?: true
  }

  export type SubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which submission to aggregate.
     */
    where?: submissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of submissions to fetch.
     */
    orderBy?: submissionOrderByWithRelationInput | submissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: submissionWhereUniqueInput
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
    _count?: true | SubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubmissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubmissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubmissionMaxAggregateInputType
  }

  export type GetSubmissionAggregateType<T extends SubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubmission[P]>
      : GetScalarType<T[P], AggregateSubmission[P]>
  }




  export type submissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: submissionWhereInput
    orderBy?: submissionOrderByWithAggregationInput | submissionOrderByWithAggregationInput[]
    by: SubmissionScalarFieldEnum[] | SubmissionScalarFieldEnum
    having?: submissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubmissionCountAggregateInputType | true
    _avg?: SubmissionAvgAggregateInputType
    _sum?: SubmissionSumAggregateInputType
    _min?: SubmissionMinAggregateInputType
    _max?: SubmissionMaxAggregateInputType
  }

  export type SubmissionGroupByOutputType = {
    SID: number
    UID: string
    EID: number
    Code: string | null
    CreatedAt: Date | null
    Result: $Enums.submission_Result | null
    _count: SubmissionCountAggregateOutputType | null
    _avg: SubmissionAvgAggregateOutputType | null
    _sum: SubmissionSumAggregateOutputType | null
    _min: SubmissionMinAggregateOutputType | null
    _max: SubmissionMaxAggregateOutputType | null
  }

  type GetSubmissionGroupByPayload<T extends submissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], SubmissionGroupByOutputType[P]>
        }
      >
    >


  export type submissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    SID?: boolean
    UID?: boolean
    EID?: boolean
    Code?: boolean
    CreatedAt?: boolean
    Result?: boolean
    exercise?: boolean | exerciseDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
    testcaseresult?: boolean | submission$testcaseresultArgs<ExtArgs>
    _count?: boolean | SubmissionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>



  export type submissionSelectScalar = {
    SID?: boolean
    UID?: boolean
    EID?: boolean
    Code?: boolean
    CreatedAt?: boolean
    Result?: boolean
  }

  export type submissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"SID" | "UID" | "EID" | "Code" | "CreatedAt" | "Result", ExtArgs["result"]["submission"]>
  export type submissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercise?: boolean | exerciseDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
    testcaseresult?: boolean | submission$testcaseresultArgs<ExtArgs>
    _count?: boolean | SubmissionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $submissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "submission"
    objects: {
      exercise: Prisma.$exercisePayload<ExtArgs>
      user: Prisma.$userPayload<ExtArgs>
      testcaseresult: Prisma.$testcaseresultPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      SID: number
      UID: string
      EID: number
      Code: string | null
      CreatedAt: Date | null
      Result: $Enums.submission_Result | null
    }, ExtArgs["result"]["submission"]>
    composites: {}
  }

  type submissionGetPayload<S extends boolean | null | undefined | submissionDefaultArgs> = $Result.GetResult<Prisma.$submissionPayload, S>

  type submissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<submissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubmissionCountAggregateInputType | true
    }

  export interface submissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['submission'], meta: { name: 'submission' } }
    /**
     * Find zero or one Submission that matches the filter.
     * @param {submissionFindUniqueArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends submissionFindUniqueArgs>(args: SelectSubset<T, submissionFindUniqueArgs<ExtArgs>>): Prisma__submissionClient<$Result.GetResult<Prisma.$submissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Submission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {submissionFindUniqueOrThrowArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends submissionFindUniqueOrThrowArgs>(args: SelectSubset<T, submissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__submissionClient<$Result.GetResult<Prisma.$submissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Submission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {submissionFindFirstArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends submissionFindFirstArgs>(args?: SelectSubset<T, submissionFindFirstArgs<ExtArgs>>): Prisma__submissionClient<$Result.GetResult<Prisma.$submissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Submission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {submissionFindFirstOrThrowArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends submissionFindFirstOrThrowArgs>(args?: SelectSubset<T, submissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__submissionClient<$Result.GetResult<Prisma.$submissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Submissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {submissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Submissions
     * const submissions = await prisma.submission.findMany()
     * 
     * // Get first 10 Submissions
     * const submissions = await prisma.submission.findMany({ take: 10 })
     * 
     * // Only select the `SID`
     * const submissionWithSIDOnly = await prisma.submission.findMany({ select: { SID: true } })
     * 
     */
    findMany<T extends submissionFindManyArgs>(args?: SelectSubset<T, submissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$submissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Submission.
     * @param {submissionCreateArgs} args - Arguments to create a Submission.
     * @example
     * // Create one Submission
     * const Submission = await prisma.submission.create({
     *   data: {
     *     // ... data to create a Submission
     *   }
     * })
     * 
     */
    create<T extends submissionCreateArgs>(args: SelectSubset<T, submissionCreateArgs<ExtArgs>>): Prisma__submissionClient<$Result.GetResult<Prisma.$submissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Submissions.
     * @param {submissionCreateManyArgs} args - Arguments to create many Submissions.
     * @example
     * // Create many Submissions
     * const submission = await prisma.submission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends submissionCreateManyArgs>(args?: SelectSubset<T, submissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Submission.
     * @param {submissionDeleteArgs} args - Arguments to delete one Submission.
     * @example
     * // Delete one Submission
     * const Submission = await prisma.submission.delete({
     *   where: {
     *     // ... filter to delete one Submission
     *   }
     * })
     * 
     */
    delete<T extends submissionDeleteArgs>(args: SelectSubset<T, submissionDeleteArgs<ExtArgs>>): Prisma__submissionClient<$Result.GetResult<Prisma.$submissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Submission.
     * @param {submissionUpdateArgs} args - Arguments to update one Submission.
     * @example
     * // Update one Submission
     * const submission = await prisma.submission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends submissionUpdateArgs>(args: SelectSubset<T, submissionUpdateArgs<ExtArgs>>): Prisma__submissionClient<$Result.GetResult<Prisma.$submissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Submissions.
     * @param {submissionDeleteManyArgs} args - Arguments to filter Submissions to delete.
     * @example
     * // Delete a few Submissions
     * const { count } = await prisma.submission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends submissionDeleteManyArgs>(args?: SelectSubset<T, submissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {submissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Submissions
     * const submission = await prisma.submission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends submissionUpdateManyArgs>(args: SelectSubset<T, submissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Submission.
     * @param {submissionUpsertArgs} args - Arguments to update or create a Submission.
     * @example
     * // Update or create a Submission
     * const submission = await prisma.submission.upsert({
     *   create: {
     *     // ... data to create a Submission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Submission we want to update
     *   }
     * })
     */
    upsert<T extends submissionUpsertArgs>(args: SelectSubset<T, submissionUpsertArgs<ExtArgs>>): Prisma__submissionClient<$Result.GetResult<Prisma.$submissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {submissionCountArgs} args - Arguments to filter Submissions to count.
     * @example
     * // Count the number of Submissions
     * const count = await prisma.submission.count({
     *   where: {
     *     // ... the filter for the Submissions we want to count
     *   }
     * })
    **/
    count<T extends submissionCountArgs>(
      args?: Subset<T, submissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubmissionAggregateArgs>(args: Subset<T, SubmissionAggregateArgs>): Prisma.PrismaPromise<GetSubmissionAggregateType<T>>

    /**
     * Group by Submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {submissionGroupByArgs} args - Group by arguments.
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
      T extends submissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: submissionGroupByArgs['orderBy'] }
        : { orderBy?: submissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, submissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the submission model
   */
  readonly fields: submissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for submission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__submissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    exercise<T extends exerciseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, exerciseDefaultArgs<ExtArgs>>): Prisma__exerciseClient<$Result.GetResult<Prisma.$exercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    testcaseresult<T extends submission$testcaseresultArgs<ExtArgs> = {}>(args?: Subset<T, submission$testcaseresultArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$testcaseresultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the submission model
   */
  interface submissionFieldRefs {
    readonly SID: FieldRef<"submission", 'Int'>
    readonly UID: FieldRef<"submission", 'String'>
    readonly EID: FieldRef<"submission", 'Int'>
    readonly Code: FieldRef<"submission", 'String'>
    readonly CreatedAt: FieldRef<"submission", 'DateTime'>
    readonly Result: FieldRef<"submission", 'submission_Result'>
  }
    

  // Custom InputTypes
  /**
   * submission findUnique
   */
  export type submissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submission
     */
    select?: submissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submission
     */
    omit?: submissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionInclude<ExtArgs> | null
    /**
     * Filter, which submission to fetch.
     */
    where: submissionWhereUniqueInput
  }

  /**
   * submission findUniqueOrThrow
   */
  export type submissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submission
     */
    select?: submissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submission
     */
    omit?: submissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionInclude<ExtArgs> | null
    /**
     * Filter, which submission to fetch.
     */
    where: submissionWhereUniqueInput
  }

  /**
   * submission findFirst
   */
  export type submissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submission
     */
    select?: submissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submission
     */
    omit?: submissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionInclude<ExtArgs> | null
    /**
     * Filter, which submission to fetch.
     */
    where?: submissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of submissions to fetch.
     */
    orderBy?: submissionOrderByWithRelationInput | submissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for submissions.
     */
    cursor?: submissionWhereUniqueInput
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
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * submission findFirstOrThrow
   */
  export type submissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submission
     */
    select?: submissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submission
     */
    omit?: submissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionInclude<ExtArgs> | null
    /**
     * Filter, which submission to fetch.
     */
    where?: submissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of submissions to fetch.
     */
    orderBy?: submissionOrderByWithRelationInput | submissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for submissions.
     */
    cursor?: submissionWhereUniqueInput
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
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * submission findMany
   */
  export type submissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submission
     */
    select?: submissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submission
     */
    omit?: submissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionInclude<ExtArgs> | null
    /**
     * Filter, which submissions to fetch.
     */
    where?: submissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of submissions to fetch.
     */
    orderBy?: submissionOrderByWithRelationInput | submissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing submissions.
     */
    cursor?: submissionWhereUniqueInput
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
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * submission create
   */
  export type submissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submission
     */
    select?: submissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submission
     */
    omit?: submissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionInclude<ExtArgs> | null
    /**
     * The data needed to create a submission.
     */
    data: XOR<submissionCreateInput, submissionUncheckedCreateInput>
  }

  /**
   * submission createMany
   */
  export type submissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many submissions.
     */
    data: submissionCreateManyInput | submissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * submission update
   */
  export type submissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submission
     */
    select?: submissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submission
     */
    omit?: submissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionInclude<ExtArgs> | null
    /**
     * The data needed to update a submission.
     */
    data: XOR<submissionUpdateInput, submissionUncheckedUpdateInput>
    /**
     * Choose, which submission to update.
     */
    where: submissionWhereUniqueInput
  }

  /**
   * submission updateMany
   */
  export type submissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update submissions.
     */
    data: XOR<submissionUpdateManyMutationInput, submissionUncheckedUpdateManyInput>
    /**
     * Filter which submissions to update
     */
    where?: submissionWhereInput
    /**
     * Limit how many submissions to update.
     */
    limit?: number
  }

  /**
   * submission upsert
   */
  export type submissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submission
     */
    select?: submissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submission
     */
    omit?: submissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionInclude<ExtArgs> | null
    /**
     * The filter to search for the submission to update in case it exists.
     */
    where: submissionWhereUniqueInput
    /**
     * In case the submission found by the `where` argument doesn't exist, create a new submission with this data.
     */
    create: XOR<submissionCreateInput, submissionUncheckedCreateInput>
    /**
     * In case the submission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<submissionUpdateInput, submissionUncheckedUpdateInput>
  }

  /**
   * submission delete
   */
  export type submissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submission
     */
    select?: submissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submission
     */
    omit?: submissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionInclude<ExtArgs> | null
    /**
     * Filter which submission to delete.
     */
    where: submissionWhereUniqueInput
  }

  /**
   * submission deleteMany
   */
  export type submissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which submissions to delete
     */
    where?: submissionWhereInput
    /**
     * Limit how many submissions to delete.
     */
    limit?: number
  }

  /**
   * submission.testcaseresult
   */
  export type submission$testcaseresultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testcaseresult
     */
    select?: testcaseresultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the testcaseresult
     */
    omit?: testcaseresultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testcaseresultInclude<ExtArgs> | null
    where?: testcaseresultWhereInput
    orderBy?: testcaseresultOrderByWithRelationInput | testcaseresultOrderByWithRelationInput[]
    cursor?: testcaseresultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestcaseresultScalarFieldEnum | TestcaseresultScalarFieldEnum[]
  }

  /**
   * submission without action
   */
  export type submissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submission
     */
    select?: submissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submission
     */
    omit?: submissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionInclude<ExtArgs> | null
  }


  /**
   * Model testcase
   */

  export type AggregateTestcase = {
    _count: TestcaseCountAggregateOutputType | null
    _avg: TestcaseAvgAggregateOutputType | null
    _sum: TestcaseSumAggregateOutputType | null
    _min: TestcaseMinAggregateOutputType | null
    _max: TestcaseMaxAggregateOutputType | null
  }

  export type TestcaseAvgAggregateOutputType = {
    TCID: number | null
    EID: number | null
  }

  export type TestcaseSumAggregateOutputType = {
    TCID: number | null
    EID: number | null
  }

  export type TestcaseMinAggregateOutputType = {
    TCID: number | null
    EID: number | null
    Input: string | null
    ExpectedOutput: string | null
    isHidden: boolean | null
  }

  export type TestcaseMaxAggregateOutputType = {
    TCID: number | null
    EID: number | null
    Input: string | null
    ExpectedOutput: string | null
    isHidden: boolean | null
  }

  export type TestcaseCountAggregateOutputType = {
    TCID: number
    EID: number
    Input: number
    ExpectedOutput: number
    isHidden: number
    _all: number
  }


  export type TestcaseAvgAggregateInputType = {
    TCID?: true
    EID?: true
  }

  export type TestcaseSumAggregateInputType = {
    TCID?: true
    EID?: true
  }

  export type TestcaseMinAggregateInputType = {
    TCID?: true
    EID?: true
    Input?: true
    ExpectedOutput?: true
    isHidden?: true
  }

  export type TestcaseMaxAggregateInputType = {
    TCID?: true
    EID?: true
    Input?: true
    ExpectedOutput?: true
    isHidden?: true
  }

  export type TestcaseCountAggregateInputType = {
    TCID?: true
    EID?: true
    Input?: true
    ExpectedOutput?: true
    isHidden?: true
    _all?: true
  }

  export type TestcaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which testcase to aggregate.
     */
    where?: testcaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of testcases to fetch.
     */
    orderBy?: testcaseOrderByWithRelationInput | testcaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: testcaseWhereUniqueInput
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
    _count?: true | TestcaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestcaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestcaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestcaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestcaseMaxAggregateInputType
  }

  export type GetTestcaseAggregateType<T extends TestcaseAggregateArgs> = {
        [P in keyof T & keyof AggregateTestcase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestcase[P]>
      : GetScalarType<T[P], AggregateTestcase[P]>
  }




  export type testcaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: testcaseWhereInput
    orderBy?: testcaseOrderByWithAggregationInput | testcaseOrderByWithAggregationInput[]
    by: TestcaseScalarFieldEnum[] | TestcaseScalarFieldEnum
    having?: testcaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestcaseCountAggregateInputType | true
    _avg?: TestcaseAvgAggregateInputType
    _sum?: TestcaseSumAggregateInputType
    _min?: TestcaseMinAggregateInputType
    _max?: TestcaseMaxAggregateInputType
  }

  export type TestcaseGroupByOutputType = {
    TCID: number
    EID: number
    Input: string
    ExpectedOutput: string
    isHidden: boolean | null
    _count: TestcaseCountAggregateOutputType | null
    _avg: TestcaseAvgAggregateOutputType | null
    _sum: TestcaseSumAggregateOutputType | null
    _min: TestcaseMinAggregateOutputType | null
    _max: TestcaseMaxAggregateOutputType | null
  }

  type GetTestcaseGroupByPayload<T extends testcaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestcaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestcaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestcaseGroupByOutputType[P]>
            : GetScalarType<T[P], TestcaseGroupByOutputType[P]>
        }
      >
    >


  export type testcaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    TCID?: boolean
    EID?: boolean
    Input?: boolean
    ExpectedOutput?: boolean
    isHidden?: boolean
    exercise?: boolean | exerciseDefaultArgs<ExtArgs>
    testcaseresult?: boolean | testcase$testcaseresultArgs<ExtArgs>
    _count?: boolean | TestcaseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testcase"]>



  export type testcaseSelectScalar = {
    TCID?: boolean
    EID?: boolean
    Input?: boolean
    ExpectedOutput?: boolean
    isHidden?: boolean
  }

  export type testcaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"TCID" | "EID" | "Input" | "ExpectedOutput" | "isHidden", ExtArgs["result"]["testcase"]>
  export type testcaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercise?: boolean | exerciseDefaultArgs<ExtArgs>
    testcaseresult?: boolean | testcase$testcaseresultArgs<ExtArgs>
    _count?: boolean | TestcaseCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $testcasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "testcase"
    objects: {
      exercise: Prisma.$exercisePayload<ExtArgs>
      testcaseresult: Prisma.$testcaseresultPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      TCID: number
      EID: number
      Input: string
      ExpectedOutput: string
      isHidden: boolean | null
    }, ExtArgs["result"]["testcase"]>
    composites: {}
  }

  type testcaseGetPayload<S extends boolean | null | undefined | testcaseDefaultArgs> = $Result.GetResult<Prisma.$testcasePayload, S>

  type testcaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<testcaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TestcaseCountAggregateInputType | true
    }

  export interface testcaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['testcase'], meta: { name: 'testcase' } }
    /**
     * Find zero or one Testcase that matches the filter.
     * @param {testcaseFindUniqueArgs} args - Arguments to find a Testcase
     * @example
     * // Get one Testcase
     * const testcase = await prisma.testcase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends testcaseFindUniqueArgs>(args: SelectSubset<T, testcaseFindUniqueArgs<ExtArgs>>): Prisma__testcaseClient<$Result.GetResult<Prisma.$testcasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Testcase that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {testcaseFindUniqueOrThrowArgs} args - Arguments to find a Testcase
     * @example
     * // Get one Testcase
     * const testcase = await prisma.testcase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends testcaseFindUniqueOrThrowArgs>(args: SelectSubset<T, testcaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__testcaseClient<$Result.GetResult<Prisma.$testcasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Testcase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testcaseFindFirstArgs} args - Arguments to find a Testcase
     * @example
     * // Get one Testcase
     * const testcase = await prisma.testcase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends testcaseFindFirstArgs>(args?: SelectSubset<T, testcaseFindFirstArgs<ExtArgs>>): Prisma__testcaseClient<$Result.GetResult<Prisma.$testcasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Testcase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testcaseFindFirstOrThrowArgs} args - Arguments to find a Testcase
     * @example
     * // Get one Testcase
     * const testcase = await prisma.testcase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends testcaseFindFirstOrThrowArgs>(args?: SelectSubset<T, testcaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__testcaseClient<$Result.GetResult<Prisma.$testcasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Testcases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testcaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Testcases
     * const testcases = await prisma.testcase.findMany()
     * 
     * // Get first 10 Testcases
     * const testcases = await prisma.testcase.findMany({ take: 10 })
     * 
     * // Only select the `TCID`
     * const testcaseWithTCIDOnly = await prisma.testcase.findMany({ select: { TCID: true } })
     * 
     */
    findMany<T extends testcaseFindManyArgs>(args?: SelectSubset<T, testcaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$testcasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Testcase.
     * @param {testcaseCreateArgs} args - Arguments to create a Testcase.
     * @example
     * // Create one Testcase
     * const Testcase = await prisma.testcase.create({
     *   data: {
     *     // ... data to create a Testcase
     *   }
     * })
     * 
     */
    create<T extends testcaseCreateArgs>(args: SelectSubset<T, testcaseCreateArgs<ExtArgs>>): Prisma__testcaseClient<$Result.GetResult<Prisma.$testcasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Testcases.
     * @param {testcaseCreateManyArgs} args - Arguments to create many Testcases.
     * @example
     * // Create many Testcases
     * const testcase = await prisma.testcase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends testcaseCreateManyArgs>(args?: SelectSubset<T, testcaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Testcase.
     * @param {testcaseDeleteArgs} args - Arguments to delete one Testcase.
     * @example
     * // Delete one Testcase
     * const Testcase = await prisma.testcase.delete({
     *   where: {
     *     // ... filter to delete one Testcase
     *   }
     * })
     * 
     */
    delete<T extends testcaseDeleteArgs>(args: SelectSubset<T, testcaseDeleteArgs<ExtArgs>>): Prisma__testcaseClient<$Result.GetResult<Prisma.$testcasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Testcase.
     * @param {testcaseUpdateArgs} args - Arguments to update one Testcase.
     * @example
     * // Update one Testcase
     * const testcase = await prisma.testcase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends testcaseUpdateArgs>(args: SelectSubset<T, testcaseUpdateArgs<ExtArgs>>): Prisma__testcaseClient<$Result.GetResult<Prisma.$testcasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Testcases.
     * @param {testcaseDeleteManyArgs} args - Arguments to filter Testcases to delete.
     * @example
     * // Delete a few Testcases
     * const { count } = await prisma.testcase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends testcaseDeleteManyArgs>(args?: SelectSubset<T, testcaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Testcases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testcaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Testcases
     * const testcase = await prisma.testcase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends testcaseUpdateManyArgs>(args: SelectSubset<T, testcaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Testcase.
     * @param {testcaseUpsertArgs} args - Arguments to update or create a Testcase.
     * @example
     * // Update or create a Testcase
     * const testcase = await prisma.testcase.upsert({
     *   create: {
     *     // ... data to create a Testcase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Testcase we want to update
     *   }
     * })
     */
    upsert<T extends testcaseUpsertArgs>(args: SelectSubset<T, testcaseUpsertArgs<ExtArgs>>): Prisma__testcaseClient<$Result.GetResult<Prisma.$testcasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Testcases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testcaseCountArgs} args - Arguments to filter Testcases to count.
     * @example
     * // Count the number of Testcases
     * const count = await prisma.testcase.count({
     *   where: {
     *     // ... the filter for the Testcases we want to count
     *   }
     * })
    **/
    count<T extends testcaseCountArgs>(
      args?: Subset<T, testcaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestcaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Testcase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestcaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TestcaseAggregateArgs>(args: Subset<T, TestcaseAggregateArgs>): Prisma.PrismaPromise<GetTestcaseAggregateType<T>>

    /**
     * Group by Testcase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testcaseGroupByArgs} args - Group by arguments.
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
      T extends testcaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: testcaseGroupByArgs['orderBy'] }
        : { orderBy?: testcaseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, testcaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestcaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the testcase model
   */
  readonly fields: testcaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for testcase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__testcaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    exercise<T extends exerciseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, exerciseDefaultArgs<ExtArgs>>): Prisma__exerciseClient<$Result.GetResult<Prisma.$exercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    testcaseresult<T extends testcase$testcaseresultArgs<ExtArgs> = {}>(args?: Subset<T, testcase$testcaseresultArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$testcaseresultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the testcase model
   */
  interface testcaseFieldRefs {
    readonly TCID: FieldRef<"testcase", 'Int'>
    readonly EID: FieldRef<"testcase", 'Int'>
    readonly Input: FieldRef<"testcase", 'String'>
    readonly ExpectedOutput: FieldRef<"testcase", 'String'>
    readonly isHidden: FieldRef<"testcase", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * testcase findUnique
   */
  export type testcaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testcase
     */
    select?: testcaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the testcase
     */
    omit?: testcaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testcaseInclude<ExtArgs> | null
    /**
     * Filter, which testcase to fetch.
     */
    where: testcaseWhereUniqueInput
  }

  /**
   * testcase findUniqueOrThrow
   */
  export type testcaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testcase
     */
    select?: testcaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the testcase
     */
    omit?: testcaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testcaseInclude<ExtArgs> | null
    /**
     * Filter, which testcase to fetch.
     */
    where: testcaseWhereUniqueInput
  }

  /**
   * testcase findFirst
   */
  export type testcaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testcase
     */
    select?: testcaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the testcase
     */
    omit?: testcaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testcaseInclude<ExtArgs> | null
    /**
     * Filter, which testcase to fetch.
     */
    where?: testcaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of testcases to fetch.
     */
    orderBy?: testcaseOrderByWithRelationInput | testcaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for testcases.
     */
    cursor?: testcaseWhereUniqueInput
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
    distinct?: TestcaseScalarFieldEnum | TestcaseScalarFieldEnum[]
  }

  /**
   * testcase findFirstOrThrow
   */
  export type testcaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testcase
     */
    select?: testcaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the testcase
     */
    omit?: testcaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testcaseInclude<ExtArgs> | null
    /**
     * Filter, which testcase to fetch.
     */
    where?: testcaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of testcases to fetch.
     */
    orderBy?: testcaseOrderByWithRelationInput | testcaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for testcases.
     */
    cursor?: testcaseWhereUniqueInput
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
    distinct?: TestcaseScalarFieldEnum | TestcaseScalarFieldEnum[]
  }

  /**
   * testcase findMany
   */
  export type testcaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testcase
     */
    select?: testcaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the testcase
     */
    omit?: testcaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testcaseInclude<ExtArgs> | null
    /**
     * Filter, which testcases to fetch.
     */
    where?: testcaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of testcases to fetch.
     */
    orderBy?: testcaseOrderByWithRelationInput | testcaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing testcases.
     */
    cursor?: testcaseWhereUniqueInput
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
    distinct?: TestcaseScalarFieldEnum | TestcaseScalarFieldEnum[]
  }

  /**
   * testcase create
   */
  export type testcaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testcase
     */
    select?: testcaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the testcase
     */
    omit?: testcaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testcaseInclude<ExtArgs> | null
    /**
     * The data needed to create a testcase.
     */
    data: XOR<testcaseCreateInput, testcaseUncheckedCreateInput>
  }

  /**
   * testcase createMany
   */
  export type testcaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many testcases.
     */
    data: testcaseCreateManyInput | testcaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * testcase update
   */
  export type testcaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testcase
     */
    select?: testcaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the testcase
     */
    omit?: testcaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testcaseInclude<ExtArgs> | null
    /**
     * The data needed to update a testcase.
     */
    data: XOR<testcaseUpdateInput, testcaseUncheckedUpdateInput>
    /**
     * Choose, which testcase to update.
     */
    where: testcaseWhereUniqueInput
  }

  /**
   * testcase updateMany
   */
  export type testcaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update testcases.
     */
    data: XOR<testcaseUpdateManyMutationInput, testcaseUncheckedUpdateManyInput>
    /**
     * Filter which testcases to update
     */
    where?: testcaseWhereInput
    /**
     * Limit how many testcases to update.
     */
    limit?: number
  }

  /**
   * testcase upsert
   */
  export type testcaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testcase
     */
    select?: testcaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the testcase
     */
    omit?: testcaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testcaseInclude<ExtArgs> | null
    /**
     * The filter to search for the testcase to update in case it exists.
     */
    where: testcaseWhereUniqueInput
    /**
     * In case the testcase found by the `where` argument doesn't exist, create a new testcase with this data.
     */
    create: XOR<testcaseCreateInput, testcaseUncheckedCreateInput>
    /**
     * In case the testcase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<testcaseUpdateInput, testcaseUncheckedUpdateInput>
  }

  /**
   * testcase delete
   */
  export type testcaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testcase
     */
    select?: testcaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the testcase
     */
    omit?: testcaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testcaseInclude<ExtArgs> | null
    /**
     * Filter which testcase to delete.
     */
    where: testcaseWhereUniqueInput
  }

  /**
   * testcase deleteMany
   */
  export type testcaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which testcases to delete
     */
    where?: testcaseWhereInput
    /**
     * Limit how many testcases to delete.
     */
    limit?: number
  }

  /**
   * testcase.testcaseresult
   */
  export type testcase$testcaseresultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testcaseresult
     */
    select?: testcaseresultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the testcaseresult
     */
    omit?: testcaseresultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testcaseresultInclude<ExtArgs> | null
    where?: testcaseresultWhereInput
    orderBy?: testcaseresultOrderByWithRelationInput | testcaseresultOrderByWithRelationInput[]
    cursor?: testcaseresultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestcaseresultScalarFieldEnum | TestcaseresultScalarFieldEnum[]
  }

  /**
   * testcase without action
   */
  export type testcaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testcase
     */
    select?: testcaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the testcase
     */
    omit?: testcaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testcaseInclude<ExtArgs> | null
  }


  /**
   * Model testcaseresult
   */

  export type AggregateTestcaseresult = {
    _count: TestcaseresultCountAggregateOutputType | null
    _avg: TestcaseresultAvgAggregateOutputType | null
    _sum: TestcaseresultSumAggregateOutputType | null
    _min: TestcaseresultMinAggregateOutputType | null
    _max: TestcaseresultMaxAggregateOutputType | null
  }

  export type TestcaseresultAvgAggregateOutputType = {
    TCRID: number | null
    SID: number | null
    TCID: number | null
    ExecutionTime: number | null
  }

  export type TestcaseresultSumAggregateOutputType = {
    TCRID: number | null
    SID: number | null
    TCID: number | null
    ExecutionTime: number | null
  }

  export type TestcaseresultMinAggregateOutputType = {
    TCRID: number | null
    SID: number | null
    TCID: number | null
    ActualOutput: string | null
    Result: $Enums.testcaseresult_Result | null
    ExecutionTime: number | null
  }

  export type TestcaseresultMaxAggregateOutputType = {
    TCRID: number | null
    SID: number | null
    TCID: number | null
    ActualOutput: string | null
    Result: $Enums.testcaseresult_Result | null
    ExecutionTime: number | null
  }

  export type TestcaseresultCountAggregateOutputType = {
    TCRID: number
    SID: number
    TCID: number
    ActualOutput: number
    Result: number
    ExecutionTime: number
    _all: number
  }


  export type TestcaseresultAvgAggregateInputType = {
    TCRID?: true
    SID?: true
    TCID?: true
    ExecutionTime?: true
  }

  export type TestcaseresultSumAggregateInputType = {
    TCRID?: true
    SID?: true
    TCID?: true
    ExecutionTime?: true
  }

  export type TestcaseresultMinAggregateInputType = {
    TCRID?: true
    SID?: true
    TCID?: true
    ActualOutput?: true
    Result?: true
    ExecutionTime?: true
  }

  export type TestcaseresultMaxAggregateInputType = {
    TCRID?: true
    SID?: true
    TCID?: true
    ActualOutput?: true
    Result?: true
    ExecutionTime?: true
  }

  export type TestcaseresultCountAggregateInputType = {
    TCRID?: true
    SID?: true
    TCID?: true
    ActualOutput?: true
    Result?: true
    ExecutionTime?: true
    _all?: true
  }

  export type TestcaseresultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which testcaseresult to aggregate.
     */
    where?: testcaseresultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of testcaseresults to fetch.
     */
    orderBy?: testcaseresultOrderByWithRelationInput | testcaseresultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: testcaseresultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` testcaseresults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` testcaseresults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned testcaseresults
    **/
    _count?: true | TestcaseresultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestcaseresultAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestcaseresultSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestcaseresultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestcaseresultMaxAggregateInputType
  }

  export type GetTestcaseresultAggregateType<T extends TestcaseresultAggregateArgs> = {
        [P in keyof T & keyof AggregateTestcaseresult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestcaseresult[P]>
      : GetScalarType<T[P], AggregateTestcaseresult[P]>
  }




  export type testcaseresultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: testcaseresultWhereInput
    orderBy?: testcaseresultOrderByWithAggregationInput | testcaseresultOrderByWithAggregationInput[]
    by: TestcaseresultScalarFieldEnum[] | TestcaseresultScalarFieldEnum
    having?: testcaseresultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestcaseresultCountAggregateInputType | true
    _avg?: TestcaseresultAvgAggregateInputType
    _sum?: TestcaseresultSumAggregateInputType
    _min?: TestcaseresultMinAggregateInputType
    _max?: TestcaseresultMaxAggregateInputType
  }

  export type TestcaseresultGroupByOutputType = {
    TCRID: number
    SID: number
    TCID: number
    ActualOutput: string
    Result: $Enums.testcaseresult_Result | null
    ExecutionTime: number | null
    _count: TestcaseresultCountAggregateOutputType | null
    _avg: TestcaseresultAvgAggregateOutputType | null
    _sum: TestcaseresultSumAggregateOutputType | null
    _min: TestcaseresultMinAggregateOutputType | null
    _max: TestcaseresultMaxAggregateOutputType | null
  }

  type GetTestcaseresultGroupByPayload<T extends testcaseresultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestcaseresultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestcaseresultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestcaseresultGroupByOutputType[P]>
            : GetScalarType<T[P], TestcaseresultGroupByOutputType[P]>
        }
      >
    >


  export type testcaseresultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    TCRID?: boolean
    SID?: boolean
    TCID?: boolean
    ActualOutput?: boolean
    Result?: boolean
    ExecutionTime?: boolean
    submission?: boolean | submissionDefaultArgs<ExtArgs>
    testcase?: boolean | testcaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testcaseresult"]>



  export type testcaseresultSelectScalar = {
    TCRID?: boolean
    SID?: boolean
    TCID?: boolean
    ActualOutput?: boolean
    Result?: boolean
    ExecutionTime?: boolean
  }

  export type testcaseresultOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"TCRID" | "SID" | "TCID" | "ActualOutput" | "Result" | "ExecutionTime", ExtArgs["result"]["testcaseresult"]>
  export type testcaseresultInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | submissionDefaultArgs<ExtArgs>
    testcase?: boolean | testcaseDefaultArgs<ExtArgs>
  }

  export type $testcaseresultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "testcaseresult"
    objects: {
      submission: Prisma.$submissionPayload<ExtArgs>
      testcase: Prisma.$testcasePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      TCRID: number
      SID: number
      TCID: number
      ActualOutput: string
      Result: $Enums.testcaseresult_Result | null
      ExecutionTime: number | null
    }, ExtArgs["result"]["testcaseresult"]>
    composites: {}
  }

  type testcaseresultGetPayload<S extends boolean | null | undefined | testcaseresultDefaultArgs> = $Result.GetResult<Prisma.$testcaseresultPayload, S>

  type testcaseresultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<testcaseresultFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TestcaseresultCountAggregateInputType | true
    }

  export interface testcaseresultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['testcaseresult'], meta: { name: 'testcaseresult' } }
    /**
     * Find zero or one Testcaseresult that matches the filter.
     * @param {testcaseresultFindUniqueArgs} args - Arguments to find a Testcaseresult
     * @example
     * // Get one Testcaseresult
     * const testcaseresult = await prisma.testcaseresult.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends testcaseresultFindUniqueArgs>(args: SelectSubset<T, testcaseresultFindUniqueArgs<ExtArgs>>): Prisma__testcaseresultClient<$Result.GetResult<Prisma.$testcaseresultPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Testcaseresult that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {testcaseresultFindUniqueOrThrowArgs} args - Arguments to find a Testcaseresult
     * @example
     * // Get one Testcaseresult
     * const testcaseresult = await prisma.testcaseresult.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends testcaseresultFindUniqueOrThrowArgs>(args: SelectSubset<T, testcaseresultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__testcaseresultClient<$Result.GetResult<Prisma.$testcaseresultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Testcaseresult that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testcaseresultFindFirstArgs} args - Arguments to find a Testcaseresult
     * @example
     * // Get one Testcaseresult
     * const testcaseresult = await prisma.testcaseresult.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends testcaseresultFindFirstArgs>(args?: SelectSubset<T, testcaseresultFindFirstArgs<ExtArgs>>): Prisma__testcaseresultClient<$Result.GetResult<Prisma.$testcaseresultPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Testcaseresult that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testcaseresultFindFirstOrThrowArgs} args - Arguments to find a Testcaseresult
     * @example
     * // Get one Testcaseresult
     * const testcaseresult = await prisma.testcaseresult.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends testcaseresultFindFirstOrThrowArgs>(args?: SelectSubset<T, testcaseresultFindFirstOrThrowArgs<ExtArgs>>): Prisma__testcaseresultClient<$Result.GetResult<Prisma.$testcaseresultPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Testcaseresults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testcaseresultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Testcaseresults
     * const testcaseresults = await prisma.testcaseresult.findMany()
     * 
     * // Get first 10 Testcaseresults
     * const testcaseresults = await prisma.testcaseresult.findMany({ take: 10 })
     * 
     * // Only select the `TCRID`
     * const testcaseresultWithTCRIDOnly = await prisma.testcaseresult.findMany({ select: { TCRID: true } })
     * 
     */
    findMany<T extends testcaseresultFindManyArgs>(args?: SelectSubset<T, testcaseresultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$testcaseresultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Testcaseresult.
     * @param {testcaseresultCreateArgs} args - Arguments to create a Testcaseresult.
     * @example
     * // Create one Testcaseresult
     * const Testcaseresult = await prisma.testcaseresult.create({
     *   data: {
     *     // ... data to create a Testcaseresult
     *   }
     * })
     * 
     */
    create<T extends testcaseresultCreateArgs>(args: SelectSubset<T, testcaseresultCreateArgs<ExtArgs>>): Prisma__testcaseresultClient<$Result.GetResult<Prisma.$testcaseresultPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Testcaseresults.
     * @param {testcaseresultCreateManyArgs} args - Arguments to create many Testcaseresults.
     * @example
     * // Create many Testcaseresults
     * const testcaseresult = await prisma.testcaseresult.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends testcaseresultCreateManyArgs>(args?: SelectSubset<T, testcaseresultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Testcaseresult.
     * @param {testcaseresultDeleteArgs} args - Arguments to delete one Testcaseresult.
     * @example
     * // Delete one Testcaseresult
     * const Testcaseresult = await prisma.testcaseresult.delete({
     *   where: {
     *     // ... filter to delete one Testcaseresult
     *   }
     * })
     * 
     */
    delete<T extends testcaseresultDeleteArgs>(args: SelectSubset<T, testcaseresultDeleteArgs<ExtArgs>>): Prisma__testcaseresultClient<$Result.GetResult<Prisma.$testcaseresultPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Testcaseresult.
     * @param {testcaseresultUpdateArgs} args - Arguments to update one Testcaseresult.
     * @example
     * // Update one Testcaseresult
     * const testcaseresult = await prisma.testcaseresult.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends testcaseresultUpdateArgs>(args: SelectSubset<T, testcaseresultUpdateArgs<ExtArgs>>): Prisma__testcaseresultClient<$Result.GetResult<Prisma.$testcaseresultPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Testcaseresults.
     * @param {testcaseresultDeleteManyArgs} args - Arguments to filter Testcaseresults to delete.
     * @example
     * // Delete a few Testcaseresults
     * const { count } = await prisma.testcaseresult.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends testcaseresultDeleteManyArgs>(args?: SelectSubset<T, testcaseresultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Testcaseresults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testcaseresultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Testcaseresults
     * const testcaseresult = await prisma.testcaseresult.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends testcaseresultUpdateManyArgs>(args: SelectSubset<T, testcaseresultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Testcaseresult.
     * @param {testcaseresultUpsertArgs} args - Arguments to update or create a Testcaseresult.
     * @example
     * // Update or create a Testcaseresult
     * const testcaseresult = await prisma.testcaseresult.upsert({
     *   create: {
     *     // ... data to create a Testcaseresult
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Testcaseresult we want to update
     *   }
     * })
     */
    upsert<T extends testcaseresultUpsertArgs>(args: SelectSubset<T, testcaseresultUpsertArgs<ExtArgs>>): Prisma__testcaseresultClient<$Result.GetResult<Prisma.$testcaseresultPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Testcaseresults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testcaseresultCountArgs} args - Arguments to filter Testcaseresults to count.
     * @example
     * // Count the number of Testcaseresults
     * const count = await prisma.testcaseresult.count({
     *   where: {
     *     // ... the filter for the Testcaseresults we want to count
     *   }
     * })
    **/
    count<T extends testcaseresultCountArgs>(
      args?: Subset<T, testcaseresultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestcaseresultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Testcaseresult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestcaseresultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TestcaseresultAggregateArgs>(args: Subset<T, TestcaseresultAggregateArgs>): Prisma.PrismaPromise<GetTestcaseresultAggregateType<T>>

    /**
     * Group by Testcaseresult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testcaseresultGroupByArgs} args - Group by arguments.
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
      T extends testcaseresultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: testcaseresultGroupByArgs['orderBy'] }
        : { orderBy?: testcaseresultGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, testcaseresultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestcaseresultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the testcaseresult model
   */
  readonly fields: testcaseresultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for testcaseresult.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__testcaseresultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    submission<T extends submissionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, submissionDefaultArgs<ExtArgs>>): Prisma__submissionClient<$Result.GetResult<Prisma.$submissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    testcase<T extends testcaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, testcaseDefaultArgs<ExtArgs>>): Prisma__testcaseClient<$Result.GetResult<Prisma.$testcasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the testcaseresult model
   */
  interface testcaseresultFieldRefs {
    readonly TCRID: FieldRef<"testcaseresult", 'Int'>
    readonly SID: FieldRef<"testcaseresult", 'Int'>
    readonly TCID: FieldRef<"testcaseresult", 'Int'>
    readonly ActualOutput: FieldRef<"testcaseresult", 'String'>
    readonly Result: FieldRef<"testcaseresult", 'testcaseresult_Result'>
    readonly ExecutionTime: FieldRef<"testcaseresult", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * testcaseresult findUnique
   */
  export type testcaseresultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testcaseresult
     */
    select?: testcaseresultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the testcaseresult
     */
    omit?: testcaseresultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testcaseresultInclude<ExtArgs> | null
    /**
     * Filter, which testcaseresult to fetch.
     */
    where: testcaseresultWhereUniqueInput
  }

  /**
   * testcaseresult findUniqueOrThrow
   */
  export type testcaseresultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testcaseresult
     */
    select?: testcaseresultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the testcaseresult
     */
    omit?: testcaseresultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testcaseresultInclude<ExtArgs> | null
    /**
     * Filter, which testcaseresult to fetch.
     */
    where: testcaseresultWhereUniqueInput
  }

  /**
   * testcaseresult findFirst
   */
  export type testcaseresultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testcaseresult
     */
    select?: testcaseresultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the testcaseresult
     */
    omit?: testcaseresultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testcaseresultInclude<ExtArgs> | null
    /**
     * Filter, which testcaseresult to fetch.
     */
    where?: testcaseresultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of testcaseresults to fetch.
     */
    orderBy?: testcaseresultOrderByWithRelationInput | testcaseresultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for testcaseresults.
     */
    cursor?: testcaseresultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` testcaseresults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` testcaseresults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of testcaseresults.
     */
    distinct?: TestcaseresultScalarFieldEnum | TestcaseresultScalarFieldEnum[]
  }

  /**
   * testcaseresult findFirstOrThrow
   */
  export type testcaseresultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testcaseresult
     */
    select?: testcaseresultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the testcaseresult
     */
    omit?: testcaseresultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testcaseresultInclude<ExtArgs> | null
    /**
     * Filter, which testcaseresult to fetch.
     */
    where?: testcaseresultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of testcaseresults to fetch.
     */
    orderBy?: testcaseresultOrderByWithRelationInput | testcaseresultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for testcaseresults.
     */
    cursor?: testcaseresultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` testcaseresults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` testcaseresults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of testcaseresults.
     */
    distinct?: TestcaseresultScalarFieldEnum | TestcaseresultScalarFieldEnum[]
  }

  /**
   * testcaseresult findMany
   */
  export type testcaseresultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testcaseresult
     */
    select?: testcaseresultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the testcaseresult
     */
    omit?: testcaseresultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testcaseresultInclude<ExtArgs> | null
    /**
     * Filter, which testcaseresults to fetch.
     */
    where?: testcaseresultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of testcaseresults to fetch.
     */
    orderBy?: testcaseresultOrderByWithRelationInput | testcaseresultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing testcaseresults.
     */
    cursor?: testcaseresultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` testcaseresults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` testcaseresults.
     */
    skip?: number
    distinct?: TestcaseresultScalarFieldEnum | TestcaseresultScalarFieldEnum[]
  }

  /**
   * testcaseresult create
   */
  export type testcaseresultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testcaseresult
     */
    select?: testcaseresultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the testcaseresult
     */
    omit?: testcaseresultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testcaseresultInclude<ExtArgs> | null
    /**
     * The data needed to create a testcaseresult.
     */
    data: XOR<testcaseresultCreateInput, testcaseresultUncheckedCreateInput>
  }

  /**
   * testcaseresult createMany
   */
  export type testcaseresultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many testcaseresults.
     */
    data: testcaseresultCreateManyInput | testcaseresultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * testcaseresult update
   */
  export type testcaseresultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testcaseresult
     */
    select?: testcaseresultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the testcaseresult
     */
    omit?: testcaseresultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testcaseresultInclude<ExtArgs> | null
    /**
     * The data needed to update a testcaseresult.
     */
    data: XOR<testcaseresultUpdateInput, testcaseresultUncheckedUpdateInput>
    /**
     * Choose, which testcaseresult to update.
     */
    where: testcaseresultWhereUniqueInput
  }

  /**
   * testcaseresult updateMany
   */
  export type testcaseresultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update testcaseresults.
     */
    data: XOR<testcaseresultUpdateManyMutationInput, testcaseresultUncheckedUpdateManyInput>
    /**
     * Filter which testcaseresults to update
     */
    where?: testcaseresultWhereInput
    /**
     * Limit how many testcaseresults to update.
     */
    limit?: number
  }

  /**
   * testcaseresult upsert
   */
  export type testcaseresultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testcaseresult
     */
    select?: testcaseresultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the testcaseresult
     */
    omit?: testcaseresultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testcaseresultInclude<ExtArgs> | null
    /**
     * The filter to search for the testcaseresult to update in case it exists.
     */
    where: testcaseresultWhereUniqueInput
    /**
     * In case the testcaseresult found by the `where` argument doesn't exist, create a new testcaseresult with this data.
     */
    create: XOR<testcaseresultCreateInput, testcaseresultUncheckedCreateInput>
    /**
     * In case the testcaseresult was found with the provided `where` argument, update it with this data.
     */
    update: XOR<testcaseresultUpdateInput, testcaseresultUncheckedUpdateInput>
  }

  /**
   * testcaseresult delete
   */
  export type testcaseresultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testcaseresult
     */
    select?: testcaseresultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the testcaseresult
     */
    omit?: testcaseresultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testcaseresultInclude<ExtArgs> | null
    /**
     * Filter which testcaseresult to delete.
     */
    where: testcaseresultWhereUniqueInput
  }

  /**
   * testcaseresult deleteMany
   */
  export type testcaseresultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which testcaseresults to delete
     */
    where?: testcaseresultWhereInput
    /**
     * Limit how many testcaseresults to delete.
     */
    limit?: number
  }

  /**
   * testcaseresult without action
   */
  export type testcaseresultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testcaseresult
     */
    select?: testcaseresultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the testcaseresult
     */
    omit?: testcaseresultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testcaseresultInclude<ExtArgs> | null
  }


  /**
   * Model topic
   */

  export type AggregateTopic = {
    _count: TopicCountAggregateOutputType | null
    _avg: TopicAvgAggregateOutputType | null
    _sum: TopicSumAggregateOutputType | null
    _min: TopicMinAggregateOutputType | null
    _max: TopicMaxAggregateOutputType | null
  }

  export type TopicAvgAggregateOutputType = {
    TpID: number | null
  }

  export type TopicSumAggregateOutputType = {
    TpID: number | null
  }

  export type TopicMinAggregateOutputType = {
    TpID: number | null
    Name: string | null
    Description: string | null
  }

  export type TopicMaxAggregateOutputType = {
    TpID: number | null
    Name: string | null
    Description: string | null
  }

  export type TopicCountAggregateOutputType = {
    TpID: number
    Name: number
    Description: number
    _all: number
  }


  export type TopicAvgAggregateInputType = {
    TpID?: true
  }

  export type TopicSumAggregateInputType = {
    TpID?: true
  }

  export type TopicMinAggregateInputType = {
    TpID?: true
    Name?: true
    Description?: true
  }

  export type TopicMaxAggregateInputType = {
    TpID?: true
    Name?: true
    Description?: true
  }

  export type TopicCountAggregateInputType = {
    TpID?: true
    Name?: true
    Description?: true
    _all?: true
  }

  export type TopicAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which topic to aggregate.
     */
    where?: topicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of topics to fetch.
     */
    orderBy?: topicOrderByWithRelationInput | topicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: topicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` topics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned topics
    **/
    _count?: true | TopicCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TopicAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TopicSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TopicMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TopicMaxAggregateInputType
  }

  export type GetTopicAggregateType<T extends TopicAggregateArgs> = {
        [P in keyof T & keyof AggregateTopic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTopic[P]>
      : GetScalarType<T[P], AggregateTopic[P]>
  }




  export type topicGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: topicWhereInput
    orderBy?: topicOrderByWithAggregationInput | topicOrderByWithAggregationInput[]
    by: TopicScalarFieldEnum[] | TopicScalarFieldEnum
    having?: topicScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TopicCountAggregateInputType | true
    _avg?: TopicAvgAggregateInputType
    _sum?: TopicSumAggregateInputType
    _min?: TopicMinAggregateInputType
    _max?: TopicMaxAggregateInputType
  }

  export type TopicGroupByOutputType = {
    TpID: number
    Name: string
    Description: string | null
    _count: TopicCountAggregateOutputType | null
    _avg: TopicAvgAggregateOutputType | null
    _sum: TopicSumAggregateOutputType | null
    _min: TopicMinAggregateOutputType | null
    _max: TopicMaxAggregateOutputType | null
  }

  type GetTopicGroupByPayload<T extends topicGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TopicGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TopicGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TopicGroupByOutputType[P]>
            : GetScalarType<T[P], TopicGroupByOutputType[P]>
        }
      >
    >


  export type topicSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    TpID?: boolean
    Name?: boolean
    Description?: boolean
    topiclanguagedetail?: boolean | topic$topiclanguagedetailArgs<ExtArgs>
    _count?: boolean | TopicCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["topic"]>



  export type topicSelectScalar = {
    TpID?: boolean
    Name?: boolean
    Description?: boolean
  }

  export type topicOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"TpID" | "Name" | "Description", ExtArgs["result"]["topic"]>
  export type topicInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    topiclanguagedetail?: boolean | topic$topiclanguagedetailArgs<ExtArgs>
    _count?: boolean | TopicCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $topicPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "topic"
    objects: {
      topiclanguagedetail: Prisma.$topiclanguagedetailPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      TpID: number
      Name: string
      Description: string | null
    }, ExtArgs["result"]["topic"]>
    composites: {}
  }

  type topicGetPayload<S extends boolean | null | undefined | topicDefaultArgs> = $Result.GetResult<Prisma.$topicPayload, S>

  type topicCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<topicFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TopicCountAggregateInputType | true
    }

  export interface topicDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['topic'], meta: { name: 'topic' } }
    /**
     * Find zero or one Topic that matches the filter.
     * @param {topicFindUniqueArgs} args - Arguments to find a Topic
     * @example
     * // Get one Topic
     * const topic = await prisma.topic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends topicFindUniqueArgs>(args: SelectSubset<T, topicFindUniqueArgs<ExtArgs>>): Prisma__topicClient<$Result.GetResult<Prisma.$topicPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Topic that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {topicFindUniqueOrThrowArgs} args - Arguments to find a Topic
     * @example
     * // Get one Topic
     * const topic = await prisma.topic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends topicFindUniqueOrThrowArgs>(args: SelectSubset<T, topicFindUniqueOrThrowArgs<ExtArgs>>): Prisma__topicClient<$Result.GetResult<Prisma.$topicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Topic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {topicFindFirstArgs} args - Arguments to find a Topic
     * @example
     * // Get one Topic
     * const topic = await prisma.topic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends topicFindFirstArgs>(args?: SelectSubset<T, topicFindFirstArgs<ExtArgs>>): Prisma__topicClient<$Result.GetResult<Prisma.$topicPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Topic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {topicFindFirstOrThrowArgs} args - Arguments to find a Topic
     * @example
     * // Get one Topic
     * const topic = await prisma.topic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends topicFindFirstOrThrowArgs>(args?: SelectSubset<T, topicFindFirstOrThrowArgs<ExtArgs>>): Prisma__topicClient<$Result.GetResult<Prisma.$topicPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Topics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {topicFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Topics
     * const topics = await prisma.topic.findMany()
     * 
     * // Get first 10 Topics
     * const topics = await prisma.topic.findMany({ take: 10 })
     * 
     * // Only select the `TpID`
     * const topicWithTpIDOnly = await prisma.topic.findMany({ select: { TpID: true } })
     * 
     */
    findMany<T extends topicFindManyArgs>(args?: SelectSubset<T, topicFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$topicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Topic.
     * @param {topicCreateArgs} args - Arguments to create a Topic.
     * @example
     * // Create one Topic
     * const Topic = await prisma.topic.create({
     *   data: {
     *     // ... data to create a Topic
     *   }
     * })
     * 
     */
    create<T extends topicCreateArgs>(args: SelectSubset<T, topicCreateArgs<ExtArgs>>): Prisma__topicClient<$Result.GetResult<Prisma.$topicPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Topics.
     * @param {topicCreateManyArgs} args - Arguments to create many Topics.
     * @example
     * // Create many Topics
     * const topic = await prisma.topic.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends topicCreateManyArgs>(args?: SelectSubset<T, topicCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Topic.
     * @param {topicDeleteArgs} args - Arguments to delete one Topic.
     * @example
     * // Delete one Topic
     * const Topic = await prisma.topic.delete({
     *   where: {
     *     // ... filter to delete one Topic
     *   }
     * })
     * 
     */
    delete<T extends topicDeleteArgs>(args: SelectSubset<T, topicDeleteArgs<ExtArgs>>): Prisma__topicClient<$Result.GetResult<Prisma.$topicPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Topic.
     * @param {topicUpdateArgs} args - Arguments to update one Topic.
     * @example
     * // Update one Topic
     * const topic = await prisma.topic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends topicUpdateArgs>(args: SelectSubset<T, topicUpdateArgs<ExtArgs>>): Prisma__topicClient<$Result.GetResult<Prisma.$topicPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Topics.
     * @param {topicDeleteManyArgs} args - Arguments to filter Topics to delete.
     * @example
     * // Delete a few Topics
     * const { count } = await prisma.topic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends topicDeleteManyArgs>(args?: SelectSubset<T, topicDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Topics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {topicUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Topics
     * const topic = await prisma.topic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends topicUpdateManyArgs>(args: SelectSubset<T, topicUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Topic.
     * @param {topicUpsertArgs} args - Arguments to update or create a Topic.
     * @example
     * // Update or create a Topic
     * const topic = await prisma.topic.upsert({
     *   create: {
     *     // ... data to create a Topic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Topic we want to update
     *   }
     * })
     */
    upsert<T extends topicUpsertArgs>(args: SelectSubset<T, topicUpsertArgs<ExtArgs>>): Prisma__topicClient<$Result.GetResult<Prisma.$topicPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Topics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {topicCountArgs} args - Arguments to filter Topics to count.
     * @example
     * // Count the number of Topics
     * const count = await prisma.topic.count({
     *   where: {
     *     // ... the filter for the Topics we want to count
     *   }
     * })
    **/
    count<T extends topicCountArgs>(
      args?: Subset<T, topicCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TopicCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Topic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TopicAggregateArgs>(args: Subset<T, TopicAggregateArgs>): Prisma.PrismaPromise<GetTopicAggregateType<T>>

    /**
     * Group by Topic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {topicGroupByArgs} args - Group by arguments.
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
      T extends topicGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: topicGroupByArgs['orderBy'] }
        : { orderBy?: topicGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, topicGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTopicGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the topic model
   */
  readonly fields: topicFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for topic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__topicClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    topiclanguagedetail<T extends topic$topiclanguagedetailArgs<ExtArgs> = {}>(args?: Subset<T, topic$topiclanguagedetailArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$topiclanguagedetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the topic model
   */
  interface topicFieldRefs {
    readonly TpID: FieldRef<"topic", 'Int'>
    readonly Name: FieldRef<"topic", 'String'>
    readonly Description: FieldRef<"topic", 'String'>
  }
    

  // Custom InputTypes
  /**
   * topic findUnique
   */
  export type topicFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the topic
     */
    select?: topicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the topic
     */
    omit?: topicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: topicInclude<ExtArgs> | null
    /**
     * Filter, which topic to fetch.
     */
    where: topicWhereUniqueInput
  }

  /**
   * topic findUniqueOrThrow
   */
  export type topicFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the topic
     */
    select?: topicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the topic
     */
    omit?: topicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: topicInclude<ExtArgs> | null
    /**
     * Filter, which topic to fetch.
     */
    where: topicWhereUniqueInput
  }

  /**
   * topic findFirst
   */
  export type topicFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the topic
     */
    select?: topicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the topic
     */
    omit?: topicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: topicInclude<ExtArgs> | null
    /**
     * Filter, which topic to fetch.
     */
    where?: topicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of topics to fetch.
     */
    orderBy?: topicOrderByWithRelationInput | topicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for topics.
     */
    cursor?: topicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` topics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of topics.
     */
    distinct?: TopicScalarFieldEnum | TopicScalarFieldEnum[]
  }

  /**
   * topic findFirstOrThrow
   */
  export type topicFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the topic
     */
    select?: topicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the topic
     */
    omit?: topicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: topicInclude<ExtArgs> | null
    /**
     * Filter, which topic to fetch.
     */
    where?: topicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of topics to fetch.
     */
    orderBy?: topicOrderByWithRelationInput | topicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for topics.
     */
    cursor?: topicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` topics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of topics.
     */
    distinct?: TopicScalarFieldEnum | TopicScalarFieldEnum[]
  }

  /**
   * topic findMany
   */
  export type topicFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the topic
     */
    select?: topicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the topic
     */
    omit?: topicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: topicInclude<ExtArgs> | null
    /**
     * Filter, which topics to fetch.
     */
    where?: topicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of topics to fetch.
     */
    orderBy?: topicOrderByWithRelationInput | topicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing topics.
     */
    cursor?: topicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` topics.
     */
    skip?: number
    distinct?: TopicScalarFieldEnum | TopicScalarFieldEnum[]
  }

  /**
   * topic create
   */
  export type topicCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the topic
     */
    select?: topicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the topic
     */
    omit?: topicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: topicInclude<ExtArgs> | null
    /**
     * The data needed to create a topic.
     */
    data: XOR<topicCreateInput, topicUncheckedCreateInput>
  }

  /**
   * topic createMany
   */
  export type topicCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many topics.
     */
    data: topicCreateManyInput | topicCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * topic update
   */
  export type topicUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the topic
     */
    select?: topicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the topic
     */
    omit?: topicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: topicInclude<ExtArgs> | null
    /**
     * The data needed to update a topic.
     */
    data: XOR<topicUpdateInput, topicUncheckedUpdateInput>
    /**
     * Choose, which topic to update.
     */
    where: topicWhereUniqueInput
  }

  /**
   * topic updateMany
   */
  export type topicUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update topics.
     */
    data: XOR<topicUpdateManyMutationInput, topicUncheckedUpdateManyInput>
    /**
     * Filter which topics to update
     */
    where?: topicWhereInput
    /**
     * Limit how many topics to update.
     */
    limit?: number
  }

  /**
   * topic upsert
   */
  export type topicUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the topic
     */
    select?: topicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the topic
     */
    omit?: topicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: topicInclude<ExtArgs> | null
    /**
     * The filter to search for the topic to update in case it exists.
     */
    where: topicWhereUniqueInput
    /**
     * In case the topic found by the `where` argument doesn't exist, create a new topic with this data.
     */
    create: XOR<topicCreateInput, topicUncheckedCreateInput>
    /**
     * In case the topic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<topicUpdateInput, topicUncheckedUpdateInput>
  }

  /**
   * topic delete
   */
  export type topicDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the topic
     */
    select?: topicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the topic
     */
    omit?: topicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: topicInclude<ExtArgs> | null
    /**
     * Filter which topic to delete.
     */
    where: topicWhereUniqueInput
  }

  /**
   * topic deleteMany
   */
  export type topicDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which topics to delete
     */
    where?: topicWhereInput
    /**
     * Limit how many topics to delete.
     */
    limit?: number
  }

  /**
   * topic.topiclanguagedetail
   */
  export type topic$topiclanguagedetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the topiclanguagedetail
     */
    select?: topiclanguagedetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the topiclanguagedetail
     */
    omit?: topiclanguagedetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: topiclanguagedetailInclude<ExtArgs> | null
    where?: topiclanguagedetailWhereInput
    orderBy?: topiclanguagedetailOrderByWithRelationInput | topiclanguagedetailOrderByWithRelationInput[]
    cursor?: topiclanguagedetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TopiclanguagedetailScalarFieldEnum | TopiclanguagedetailScalarFieldEnum[]
  }

  /**
   * topic without action
   */
  export type topicDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the topic
     */
    select?: topicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the topic
     */
    omit?: topicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: topicInclude<ExtArgs> | null
  }


  /**
   * Model topiclanguagedetail
   */

  export type AggregateTopiclanguagedetail = {
    _count: TopiclanguagedetailCountAggregateOutputType | null
    _avg: TopiclanguagedetailAvgAggregateOutputType | null
    _sum: TopiclanguagedetailSumAggregateOutputType | null
    _min: TopiclanguagedetailMinAggregateOutputType | null
    _max: TopiclanguagedetailMaxAggregateOutputType | null
  }

  export type TopiclanguagedetailAvgAggregateOutputType = {
    TLDID: number | null
    TpID: number | null
    LgID: number | null
  }

  export type TopiclanguagedetailSumAggregateOutputType = {
    TLDID: number | null
    TpID: number | null
    LgID: number | null
  }

  export type TopiclanguagedetailMinAggregateOutputType = {
    TLDID: number | null
    TpID: number | null
    LgID: number | null
  }

  export type TopiclanguagedetailMaxAggregateOutputType = {
    TLDID: number | null
    TpID: number | null
    LgID: number | null
  }

  export type TopiclanguagedetailCountAggregateOutputType = {
    TLDID: number
    TpID: number
    LgID: number
    _all: number
  }


  export type TopiclanguagedetailAvgAggregateInputType = {
    TLDID?: true
    TpID?: true
    LgID?: true
  }

  export type TopiclanguagedetailSumAggregateInputType = {
    TLDID?: true
    TpID?: true
    LgID?: true
  }

  export type TopiclanguagedetailMinAggregateInputType = {
    TLDID?: true
    TpID?: true
    LgID?: true
  }

  export type TopiclanguagedetailMaxAggregateInputType = {
    TLDID?: true
    TpID?: true
    LgID?: true
  }

  export type TopiclanguagedetailCountAggregateInputType = {
    TLDID?: true
    TpID?: true
    LgID?: true
    _all?: true
  }

  export type TopiclanguagedetailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which topiclanguagedetail to aggregate.
     */
    where?: topiclanguagedetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of topiclanguagedetails to fetch.
     */
    orderBy?: topiclanguagedetailOrderByWithRelationInput | topiclanguagedetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: topiclanguagedetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` topiclanguagedetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` topiclanguagedetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned topiclanguagedetails
    **/
    _count?: true | TopiclanguagedetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TopiclanguagedetailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TopiclanguagedetailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TopiclanguagedetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TopiclanguagedetailMaxAggregateInputType
  }

  export type GetTopiclanguagedetailAggregateType<T extends TopiclanguagedetailAggregateArgs> = {
        [P in keyof T & keyof AggregateTopiclanguagedetail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTopiclanguagedetail[P]>
      : GetScalarType<T[P], AggregateTopiclanguagedetail[P]>
  }




  export type topiclanguagedetailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: topiclanguagedetailWhereInput
    orderBy?: topiclanguagedetailOrderByWithAggregationInput | topiclanguagedetailOrderByWithAggregationInput[]
    by: TopiclanguagedetailScalarFieldEnum[] | TopiclanguagedetailScalarFieldEnum
    having?: topiclanguagedetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TopiclanguagedetailCountAggregateInputType | true
    _avg?: TopiclanguagedetailAvgAggregateInputType
    _sum?: TopiclanguagedetailSumAggregateInputType
    _min?: TopiclanguagedetailMinAggregateInputType
    _max?: TopiclanguagedetailMaxAggregateInputType
  }

  export type TopiclanguagedetailGroupByOutputType = {
    TLDID: number
    TpID: number
    LgID: number
    _count: TopiclanguagedetailCountAggregateOutputType | null
    _avg: TopiclanguagedetailAvgAggregateOutputType | null
    _sum: TopiclanguagedetailSumAggregateOutputType | null
    _min: TopiclanguagedetailMinAggregateOutputType | null
    _max: TopiclanguagedetailMaxAggregateOutputType | null
  }

  type GetTopiclanguagedetailGroupByPayload<T extends topiclanguagedetailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TopiclanguagedetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TopiclanguagedetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TopiclanguagedetailGroupByOutputType[P]>
            : GetScalarType<T[P], TopiclanguagedetailGroupByOutputType[P]>
        }
      >
    >


  export type topiclanguagedetailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    TLDID?: boolean
    TpID?: boolean
    LgID?: boolean
    lesson?: boolean | topiclanguagedetail$lessonArgs<ExtArgs>
    topic?: boolean | topicDefaultArgs<ExtArgs>
    language?: boolean | languageDefaultArgs<ExtArgs>
    _count?: boolean | TopiclanguagedetailCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["topiclanguagedetail"]>



  export type topiclanguagedetailSelectScalar = {
    TLDID?: boolean
    TpID?: boolean
    LgID?: boolean
  }

  export type topiclanguagedetailOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"TLDID" | "TpID" | "LgID", ExtArgs["result"]["topiclanguagedetail"]>
  export type topiclanguagedetailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lesson?: boolean | topiclanguagedetail$lessonArgs<ExtArgs>
    topic?: boolean | topicDefaultArgs<ExtArgs>
    language?: boolean | languageDefaultArgs<ExtArgs>
    _count?: boolean | TopiclanguagedetailCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $topiclanguagedetailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "topiclanguagedetail"
    objects: {
      lesson: Prisma.$lessonPayload<ExtArgs>[]
      topic: Prisma.$topicPayload<ExtArgs>
      language: Prisma.$languagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      TLDID: number
      TpID: number
      LgID: number
    }, ExtArgs["result"]["topiclanguagedetail"]>
    composites: {}
  }

  type topiclanguagedetailGetPayload<S extends boolean | null | undefined | topiclanguagedetailDefaultArgs> = $Result.GetResult<Prisma.$topiclanguagedetailPayload, S>

  type topiclanguagedetailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<topiclanguagedetailFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TopiclanguagedetailCountAggregateInputType | true
    }

  export interface topiclanguagedetailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['topiclanguagedetail'], meta: { name: 'topiclanguagedetail' } }
    /**
     * Find zero or one Topiclanguagedetail that matches the filter.
     * @param {topiclanguagedetailFindUniqueArgs} args - Arguments to find a Topiclanguagedetail
     * @example
     * // Get one Topiclanguagedetail
     * const topiclanguagedetail = await prisma.topiclanguagedetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends topiclanguagedetailFindUniqueArgs>(args: SelectSubset<T, topiclanguagedetailFindUniqueArgs<ExtArgs>>): Prisma__topiclanguagedetailClient<$Result.GetResult<Prisma.$topiclanguagedetailPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Topiclanguagedetail that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {topiclanguagedetailFindUniqueOrThrowArgs} args - Arguments to find a Topiclanguagedetail
     * @example
     * // Get one Topiclanguagedetail
     * const topiclanguagedetail = await prisma.topiclanguagedetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends topiclanguagedetailFindUniqueOrThrowArgs>(args: SelectSubset<T, topiclanguagedetailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__topiclanguagedetailClient<$Result.GetResult<Prisma.$topiclanguagedetailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Topiclanguagedetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {topiclanguagedetailFindFirstArgs} args - Arguments to find a Topiclanguagedetail
     * @example
     * // Get one Topiclanguagedetail
     * const topiclanguagedetail = await prisma.topiclanguagedetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends topiclanguagedetailFindFirstArgs>(args?: SelectSubset<T, topiclanguagedetailFindFirstArgs<ExtArgs>>): Prisma__topiclanguagedetailClient<$Result.GetResult<Prisma.$topiclanguagedetailPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Topiclanguagedetail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {topiclanguagedetailFindFirstOrThrowArgs} args - Arguments to find a Topiclanguagedetail
     * @example
     * // Get one Topiclanguagedetail
     * const topiclanguagedetail = await prisma.topiclanguagedetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends topiclanguagedetailFindFirstOrThrowArgs>(args?: SelectSubset<T, topiclanguagedetailFindFirstOrThrowArgs<ExtArgs>>): Prisma__topiclanguagedetailClient<$Result.GetResult<Prisma.$topiclanguagedetailPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Topiclanguagedetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {topiclanguagedetailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Topiclanguagedetails
     * const topiclanguagedetails = await prisma.topiclanguagedetail.findMany()
     * 
     * // Get first 10 Topiclanguagedetails
     * const topiclanguagedetails = await prisma.topiclanguagedetail.findMany({ take: 10 })
     * 
     * // Only select the `TLDID`
     * const topiclanguagedetailWithTLDIDOnly = await prisma.topiclanguagedetail.findMany({ select: { TLDID: true } })
     * 
     */
    findMany<T extends topiclanguagedetailFindManyArgs>(args?: SelectSubset<T, topiclanguagedetailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$topiclanguagedetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Topiclanguagedetail.
     * @param {topiclanguagedetailCreateArgs} args - Arguments to create a Topiclanguagedetail.
     * @example
     * // Create one Topiclanguagedetail
     * const Topiclanguagedetail = await prisma.topiclanguagedetail.create({
     *   data: {
     *     // ... data to create a Topiclanguagedetail
     *   }
     * })
     * 
     */
    create<T extends topiclanguagedetailCreateArgs>(args: SelectSubset<T, topiclanguagedetailCreateArgs<ExtArgs>>): Prisma__topiclanguagedetailClient<$Result.GetResult<Prisma.$topiclanguagedetailPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Topiclanguagedetails.
     * @param {topiclanguagedetailCreateManyArgs} args - Arguments to create many Topiclanguagedetails.
     * @example
     * // Create many Topiclanguagedetails
     * const topiclanguagedetail = await prisma.topiclanguagedetail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends topiclanguagedetailCreateManyArgs>(args?: SelectSubset<T, topiclanguagedetailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Topiclanguagedetail.
     * @param {topiclanguagedetailDeleteArgs} args - Arguments to delete one Topiclanguagedetail.
     * @example
     * // Delete one Topiclanguagedetail
     * const Topiclanguagedetail = await prisma.topiclanguagedetail.delete({
     *   where: {
     *     // ... filter to delete one Topiclanguagedetail
     *   }
     * })
     * 
     */
    delete<T extends topiclanguagedetailDeleteArgs>(args: SelectSubset<T, topiclanguagedetailDeleteArgs<ExtArgs>>): Prisma__topiclanguagedetailClient<$Result.GetResult<Prisma.$topiclanguagedetailPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Topiclanguagedetail.
     * @param {topiclanguagedetailUpdateArgs} args - Arguments to update one Topiclanguagedetail.
     * @example
     * // Update one Topiclanguagedetail
     * const topiclanguagedetail = await prisma.topiclanguagedetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends topiclanguagedetailUpdateArgs>(args: SelectSubset<T, topiclanguagedetailUpdateArgs<ExtArgs>>): Prisma__topiclanguagedetailClient<$Result.GetResult<Prisma.$topiclanguagedetailPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Topiclanguagedetails.
     * @param {topiclanguagedetailDeleteManyArgs} args - Arguments to filter Topiclanguagedetails to delete.
     * @example
     * // Delete a few Topiclanguagedetails
     * const { count } = await prisma.topiclanguagedetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends topiclanguagedetailDeleteManyArgs>(args?: SelectSubset<T, topiclanguagedetailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Topiclanguagedetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {topiclanguagedetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Topiclanguagedetails
     * const topiclanguagedetail = await prisma.topiclanguagedetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends topiclanguagedetailUpdateManyArgs>(args: SelectSubset<T, topiclanguagedetailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Topiclanguagedetail.
     * @param {topiclanguagedetailUpsertArgs} args - Arguments to update or create a Topiclanguagedetail.
     * @example
     * // Update or create a Topiclanguagedetail
     * const topiclanguagedetail = await prisma.topiclanguagedetail.upsert({
     *   create: {
     *     // ... data to create a Topiclanguagedetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Topiclanguagedetail we want to update
     *   }
     * })
     */
    upsert<T extends topiclanguagedetailUpsertArgs>(args: SelectSubset<T, topiclanguagedetailUpsertArgs<ExtArgs>>): Prisma__topiclanguagedetailClient<$Result.GetResult<Prisma.$topiclanguagedetailPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Topiclanguagedetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {topiclanguagedetailCountArgs} args - Arguments to filter Topiclanguagedetails to count.
     * @example
     * // Count the number of Topiclanguagedetails
     * const count = await prisma.topiclanguagedetail.count({
     *   where: {
     *     // ... the filter for the Topiclanguagedetails we want to count
     *   }
     * })
    **/
    count<T extends topiclanguagedetailCountArgs>(
      args?: Subset<T, topiclanguagedetailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TopiclanguagedetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Topiclanguagedetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopiclanguagedetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TopiclanguagedetailAggregateArgs>(args: Subset<T, TopiclanguagedetailAggregateArgs>): Prisma.PrismaPromise<GetTopiclanguagedetailAggregateType<T>>

    /**
     * Group by Topiclanguagedetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {topiclanguagedetailGroupByArgs} args - Group by arguments.
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
      T extends topiclanguagedetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: topiclanguagedetailGroupByArgs['orderBy'] }
        : { orderBy?: topiclanguagedetailGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, topiclanguagedetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTopiclanguagedetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the topiclanguagedetail model
   */
  readonly fields: topiclanguagedetailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for topiclanguagedetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__topiclanguagedetailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lesson<T extends topiclanguagedetail$lessonArgs<ExtArgs> = {}>(args?: Subset<T, topiclanguagedetail$lessonArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lessonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    topic<T extends topicDefaultArgs<ExtArgs> = {}>(args?: Subset<T, topicDefaultArgs<ExtArgs>>): Prisma__topicClient<$Result.GetResult<Prisma.$topicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    language<T extends languageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, languageDefaultArgs<ExtArgs>>): Prisma__languageClient<$Result.GetResult<Prisma.$languagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the topiclanguagedetail model
   */
  interface topiclanguagedetailFieldRefs {
    readonly TLDID: FieldRef<"topiclanguagedetail", 'Int'>
    readonly TpID: FieldRef<"topiclanguagedetail", 'Int'>
    readonly LgID: FieldRef<"topiclanguagedetail", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * topiclanguagedetail findUnique
   */
  export type topiclanguagedetailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the topiclanguagedetail
     */
    select?: topiclanguagedetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the topiclanguagedetail
     */
    omit?: topiclanguagedetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: topiclanguagedetailInclude<ExtArgs> | null
    /**
     * Filter, which topiclanguagedetail to fetch.
     */
    where: topiclanguagedetailWhereUniqueInput
  }

  /**
   * topiclanguagedetail findUniqueOrThrow
   */
  export type topiclanguagedetailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the topiclanguagedetail
     */
    select?: topiclanguagedetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the topiclanguagedetail
     */
    omit?: topiclanguagedetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: topiclanguagedetailInclude<ExtArgs> | null
    /**
     * Filter, which topiclanguagedetail to fetch.
     */
    where: topiclanguagedetailWhereUniqueInput
  }

  /**
   * topiclanguagedetail findFirst
   */
  export type topiclanguagedetailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the topiclanguagedetail
     */
    select?: topiclanguagedetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the topiclanguagedetail
     */
    omit?: topiclanguagedetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: topiclanguagedetailInclude<ExtArgs> | null
    /**
     * Filter, which topiclanguagedetail to fetch.
     */
    where?: topiclanguagedetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of topiclanguagedetails to fetch.
     */
    orderBy?: topiclanguagedetailOrderByWithRelationInput | topiclanguagedetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for topiclanguagedetails.
     */
    cursor?: topiclanguagedetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` topiclanguagedetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` topiclanguagedetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of topiclanguagedetails.
     */
    distinct?: TopiclanguagedetailScalarFieldEnum | TopiclanguagedetailScalarFieldEnum[]
  }

  /**
   * topiclanguagedetail findFirstOrThrow
   */
  export type topiclanguagedetailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the topiclanguagedetail
     */
    select?: topiclanguagedetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the topiclanguagedetail
     */
    omit?: topiclanguagedetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: topiclanguagedetailInclude<ExtArgs> | null
    /**
     * Filter, which topiclanguagedetail to fetch.
     */
    where?: topiclanguagedetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of topiclanguagedetails to fetch.
     */
    orderBy?: topiclanguagedetailOrderByWithRelationInput | topiclanguagedetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for topiclanguagedetails.
     */
    cursor?: topiclanguagedetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` topiclanguagedetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` topiclanguagedetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of topiclanguagedetails.
     */
    distinct?: TopiclanguagedetailScalarFieldEnum | TopiclanguagedetailScalarFieldEnum[]
  }

  /**
   * topiclanguagedetail findMany
   */
  export type topiclanguagedetailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the topiclanguagedetail
     */
    select?: topiclanguagedetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the topiclanguagedetail
     */
    omit?: topiclanguagedetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: topiclanguagedetailInclude<ExtArgs> | null
    /**
     * Filter, which topiclanguagedetails to fetch.
     */
    where?: topiclanguagedetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of topiclanguagedetails to fetch.
     */
    orderBy?: topiclanguagedetailOrderByWithRelationInput | topiclanguagedetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing topiclanguagedetails.
     */
    cursor?: topiclanguagedetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` topiclanguagedetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` topiclanguagedetails.
     */
    skip?: number
    distinct?: TopiclanguagedetailScalarFieldEnum | TopiclanguagedetailScalarFieldEnum[]
  }

  /**
   * topiclanguagedetail create
   */
  export type topiclanguagedetailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the topiclanguagedetail
     */
    select?: topiclanguagedetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the topiclanguagedetail
     */
    omit?: topiclanguagedetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: topiclanguagedetailInclude<ExtArgs> | null
    /**
     * The data needed to create a topiclanguagedetail.
     */
    data: XOR<topiclanguagedetailCreateInput, topiclanguagedetailUncheckedCreateInput>
  }

  /**
   * topiclanguagedetail createMany
   */
  export type topiclanguagedetailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many topiclanguagedetails.
     */
    data: topiclanguagedetailCreateManyInput | topiclanguagedetailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * topiclanguagedetail update
   */
  export type topiclanguagedetailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the topiclanguagedetail
     */
    select?: topiclanguagedetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the topiclanguagedetail
     */
    omit?: topiclanguagedetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: topiclanguagedetailInclude<ExtArgs> | null
    /**
     * The data needed to update a topiclanguagedetail.
     */
    data: XOR<topiclanguagedetailUpdateInput, topiclanguagedetailUncheckedUpdateInput>
    /**
     * Choose, which topiclanguagedetail to update.
     */
    where: topiclanguagedetailWhereUniqueInput
  }

  /**
   * topiclanguagedetail updateMany
   */
  export type topiclanguagedetailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update topiclanguagedetails.
     */
    data: XOR<topiclanguagedetailUpdateManyMutationInput, topiclanguagedetailUncheckedUpdateManyInput>
    /**
     * Filter which topiclanguagedetails to update
     */
    where?: topiclanguagedetailWhereInput
    /**
     * Limit how many topiclanguagedetails to update.
     */
    limit?: number
  }

  /**
   * topiclanguagedetail upsert
   */
  export type topiclanguagedetailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the topiclanguagedetail
     */
    select?: topiclanguagedetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the topiclanguagedetail
     */
    omit?: topiclanguagedetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: topiclanguagedetailInclude<ExtArgs> | null
    /**
     * The filter to search for the topiclanguagedetail to update in case it exists.
     */
    where: topiclanguagedetailWhereUniqueInput
    /**
     * In case the topiclanguagedetail found by the `where` argument doesn't exist, create a new topiclanguagedetail with this data.
     */
    create: XOR<topiclanguagedetailCreateInput, topiclanguagedetailUncheckedCreateInput>
    /**
     * In case the topiclanguagedetail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<topiclanguagedetailUpdateInput, topiclanguagedetailUncheckedUpdateInput>
  }

  /**
   * topiclanguagedetail delete
   */
  export type topiclanguagedetailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the topiclanguagedetail
     */
    select?: topiclanguagedetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the topiclanguagedetail
     */
    omit?: topiclanguagedetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: topiclanguagedetailInclude<ExtArgs> | null
    /**
     * Filter which topiclanguagedetail to delete.
     */
    where: topiclanguagedetailWhereUniqueInput
  }

  /**
   * topiclanguagedetail deleteMany
   */
  export type topiclanguagedetailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which topiclanguagedetails to delete
     */
    where?: topiclanguagedetailWhereInput
    /**
     * Limit how many topiclanguagedetails to delete.
     */
    limit?: number
  }

  /**
   * topiclanguagedetail.lesson
   */
  export type topiclanguagedetail$lessonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lesson
     */
    select?: lessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lesson
     */
    omit?: lessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lessonInclude<ExtArgs> | null
    where?: lessonWhereInput
    orderBy?: lessonOrderByWithRelationInput | lessonOrderByWithRelationInput[]
    cursor?: lessonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * topiclanguagedetail without action
   */
  export type topiclanguagedetailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the topiclanguagedetail
     */
    select?: topiclanguagedetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the topiclanguagedetail
     */
    omit?: topiclanguagedetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: topiclanguagedetailInclude<ExtArgs> | null
  }


  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    UID: string | null
    Username: string | null
    Email: string | null
    Password: string | null
    Role: $Enums.user_Role | null
    CreatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    UID: string | null
    Username: string | null
    Email: string | null
    Password: string | null
    Role: $Enums.user_Role | null
    CreatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    UID: number
    Username: number
    Email: number
    Password: number
    Role: number
    CreatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    UID?: true
    Username?: true
    Email?: true
    Password?: true
    Role?: true
    CreatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    UID?: true
    Username?: true
    Email?: true
    Password?: true
    Role?: true
    CreatedAt?: true
  }

  export type UserCountAggregateInputType = {
    UID?: true
    Username?: true
    Email?: true
    Password?: true
    Role?: true
    CreatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
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
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    UID: string
    Username: string | null
    Email: string
    Password: string
    Role: $Enums.user_Role
    CreatedAt: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    UID?: boolean
    Username?: boolean
    Email?: boolean
    Password?: boolean
    Role?: boolean
    CreatedAt?: boolean
    submission?: boolean | user$submissionArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type userSelectScalar = {
    UID?: boolean
    Username?: boolean
    Email?: boolean
    Password?: boolean
    Role?: boolean
    CreatedAt?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"UID" | "Username" | "Email" | "Password" | "Role" | "CreatedAt", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | user$submissionArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      submission: Prisma.$submissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      UID: string
      Username: string | null
      Email: string
      Password: string
      Role: $Enums.user_Role
      CreatedAt: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `UID`
     * const userWithUIDOnly = await prisma.user.findMany({ select: { UID: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    submission<T extends user$submissionArgs<ExtArgs> = {}>(args?: Subset<T, user$submissionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$submissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly UID: FieldRef<"user", 'String'>
    readonly Username: FieldRef<"user", 'String'>
    readonly Email: FieldRef<"user", 'String'>
    readonly Password: FieldRef<"user", 'String'>
    readonly Role: FieldRef<"user", 'user_Role'>
    readonly CreatedAt: FieldRef<"user", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.submission
   */
  export type user$submissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submission
     */
    select?: submissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submission
     */
    omit?: submissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionInclude<ExtArgs> | null
    where?: submissionWhereInput
    orderBy?: submissionOrderByWithRelationInput | submissionOrderByWithRelationInput[]
    cursor?: submissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model lesson
   */

  export type AggregateLesson = {
    _count: LessonCountAggregateOutputType | null
    _avg: LessonAvgAggregateOutputType | null
    _sum: LessonSumAggregateOutputType | null
    _min: LessonMinAggregateOutputType | null
    _max: LessonMaxAggregateOutputType | null
  }

  export type LessonAvgAggregateOutputType = {
    LsID: number | null
    TLDID: number | null
    OrderIndex: number | null
  }

  export type LessonSumAggregateOutputType = {
    LsID: number | null
    TLDID: number | null
    OrderIndex: number | null
  }

  export type LessonMinAggregateOutputType = {
    LsID: number | null
    TLDID: number | null
    OrderIndex: number | null
    Tittle: string | null
    Content: string | null
  }

  export type LessonMaxAggregateOutputType = {
    LsID: number | null
    TLDID: number | null
    OrderIndex: number | null
    Tittle: string | null
    Content: string | null
  }

  export type LessonCountAggregateOutputType = {
    LsID: number
    TLDID: number
    OrderIndex: number
    Tittle: number
    Content: number
    _all: number
  }


  export type LessonAvgAggregateInputType = {
    LsID?: true
    TLDID?: true
    OrderIndex?: true
  }

  export type LessonSumAggregateInputType = {
    LsID?: true
    TLDID?: true
    OrderIndex?: true
  }

  export type LessonMinAggregateInputType = {
    LsID?: true
    TLDID?: true
    OrderIndex?: true
    Tittle?: true
    Content?: true
  }

  export type LessonMaxAggregateInputType = {
    LsID?: true
    TLDID?: true
    OrderIndex?: true
    Tittle?: true
    Content?: true
  }

  export type LessonCountAggregateInputType = {
    LsID?: true
    TLDID?: true
    OrderIndex?: true
    Tittle?: true
    Content?: true
    _all?: true
  }

  export type LessonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which lesson to aggregate.
     */
    where?: lessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lessons to fetch.
     */
    orderBy?: lessonOrderByWithRelationInput | lessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: lessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned lessons
    **/
    _count?: true | LessonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LessonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LessonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LessonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LessonMaxAggregateInputType
  }

  export type GetLessonAggregateType<T extends LessonAggregateArgs> = {
        [P in keyof T & keyof AggregateLesson]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLesson[P]>
      : GetScalarType<T[P], AggregateLesson[P]>
  }




  export type lessonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: lessonWhereInput
    orderBy?: lessonOrderByWithAggregationInput | lessonOrderByWithAggregationInput[]
    by: LessonScalarFieldEnum[] | LessonScalarFieldEnum
    having?: lessonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LessonCountAggregateInputType | true
    _avg?: LessonAvgAggregateInputType
    _sum?: LessonSumAggregateInputType
    _min?: LessonMinAggregateInputType
    _max?: LessonMaxAggregateInputType
  }

  export type LessonGroupByOutputType = {
    LsID: number
    TLDID: number
    OrderIndex: number
    Tittle: string
    Content: string
    _count: LessonCountAggregateOutputType | null
    _avg: LessonAvgAggregateOutputType | null
    _sum: LessonSumAggregateOutputType | null
    _min: LessonMinAggregateOutputType | null
    _max: LessonMaxAggregateOutputType | null
  }

  type GetLessonGroupByPayload<T extends lessonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LessonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LessonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LessonGroupByOutputType[P]>
            : GetScalarType<T[P], LessonGroupByOutputType[P]>
        }
      >
    >


  export type lessonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    LsID?: boolean
    TLDID?: boolean
    OrderIndex?: boolean
    Tittle?: boolean
    Content?: boolean
    exercise?: boolean | lesson$exerciseArgs<ExtArgs>
    topiclanguagedetail?: boolean | topiclanguagedetailDefaultArgs<ExtArgs>
    _count?: boolean | LessonCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lesson"]>



  export type lessonSelectScalar = {
    LsID?: boolean
    TLDID?: boolean
    OrderIndex?: boolean
    Tittle?: boolean
    Content?: boolean
  }

  export type lessonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"LsID" | "TLDID" | "OrderIndex" | "Tittle" | "Content", ExtArgs["result"]["lesson"]>
  export type lessonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercise?: boolean | lesson$exerciseArgs<ExtArgs>
    topiclanguagedetail?: boolean | topiclanguagedetailDefaultArgs<ExtArgs>
    _count?: boolean | LessonCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $lessonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "lesson"
    objects: {
      exercise: Prisma.$exercisePayload<ExtArgs>[]
      topiclanguagedetail: Prisma.$topiclanguagedetailPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      LsID: number
      TLDID: number
      OrderIndex: number
      Tittle: string
      Content: string
    }, ExtArgs["result"]["lesson"]>
    composites: {}
  }

  type lessonGetPayload<S extends boolean | null | undefined | lessonDefaultArgs> = $Result.GetResult<Prisma.$lessonPayload, S>

  type lessonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<lessonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LessonCountAggregateInputType | true
    }

  export interface lessonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['lesson'], meta: { name: 'lesson' } }
    /**
     * Find zero or one Lesson that matches the filter.
     * @param {lessonFindUniqueArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends lessonFindUniqueArgs>(args: SelectSubset<T, lessonFindUniqueArgs<ExtArgs>>): Prisma__lessonClient<$Result.GetResult<Prisma.$lessonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lesson that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {lessonFindUniqueOrThrowArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends lessonFindUniqueOrThrowArgs>(args: SelectSubset<T, lessonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__lessonClient<$Result.GetResult<Prisma.$lessonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lesson that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lessonFindFirstArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends lessonFindFirstArgs>(args?: SelectSubset<T, lessonFindFirstArgs<ExtArgs>>): Prisma__lessonClient<$Result.GetResult<Prisma.$lessonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lesson that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lessonFindFirstOrThrowArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends lessonFindFirstOrThrowArgs>(args?: SelectSubset<T, lessonFindFirstOrThrowArgs<ExtArgs>>): Prisma__lessonClient<$Result.GetResult<Prisma.$lessonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lessons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lessonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lessons
     * const lessons = await prisma.lesson.findMany()
     * 
     * // Get first 10 Lessons
     * const lessons = await prisma.lesson.findMany({ take: 10 })
     * 
     * // Only select the `LsID`
     * const lessonWithLsIDOnly = await prisma.lesson.findMany({ select: { LsID: true } })
     * 
     */
    findMany<T extends lessonFindManyArgs>(args?: SelectSubset<T, lessonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lessonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lesson.
     * @param {lessonCreateArgs} args - Arguments to create a Lesson.
     * @example
     * // Create one Lesson
     * const Lesson = await prisma.lesson.create({
     *   data: {
     *     // ... data to create a Lesson
     *   }
     * })
     * 
     */
    create<T extends lessonCreateArgs>(args: SelectSubset<T, lessonCreateArgs<ExtArgs>>): Prisma__lessonClient<$Result.GetResult<Prisma.$lessonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lessons.
     * @param {lessonCreateManyArgs} args - Arguments to create many Lessons.
     * @example
     * // Create many Lessons
     * const lesson = await prisma.lesson.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends lessonCreateManyArgs>(args?: SelectSubset<T, lessonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Lesson.
     * @param {lessonDeleteArgs} args - Arguments to delete one Lesson.
     * @example
     * // Delete one Lesson
     * const Lesson = await prisma.lesson.delete({
     *   where: {
     *     // ... filter to delete one Lesson
     *   }
     * })
     * 
     */
    delete<T extends lessonDeleteArgs>(args: SelectSubset<T, lessonDeleteArgs<ExtArgs>>): Prisma__lessonClient<$Result.GetResult<Prisma.$lessonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lesson.
     * @param {lessonUpdateArgs} args - Arguments to update one Lesson.
     * @example
     * // Update one Lesson
     * const lesson = await prisma.lesson.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends lessonUpdateArgs>(args: SelectSubset<T, lessonUpdateArgs<ExtArgs>>): Prisma__lessonClient<$Result.GetResult<Prisma.$lessonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lessons.
     * @param {lessonDeleteManyArgs} args - Arguments to filter Lessons to delete.
     * @example
     * // Delete a few Lessons
     * const { count } = await prisma.lesson.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends lessonDeleteManyArgs>(args?: SelectSubset<T, lessonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lessons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lessonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lessons
     * const lesson = await prisma.lesson.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends lessonUpdateManyArgs>(args: SelectSubset<T, lessonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Lesson.
     * @param {lessonUpsertArgs} args - Arguments to update or create a Lesson.
     * @example
     * // Update or create a Lesson
     * const lesson = await prisma.lesson.upsert({
     *   create: {
     *     // ... data to create a Lesson
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lesson we want to update
     *   }
     * })
     */
    upsert<T extends lessonUpsertArgs>(args: SelectSubset<T, lessonUpsertArgs<ExtArgs>>): Prisma__lessonClient<$Result.GetResult<Prisma.$lessonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lessons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lessonCountArgs} args - Arguments to filter Lessons to count.
     * @example
     * // Count the number of Lessons
     * const count = await prisma.lesson.count({
     *   where: {
     *     // ... the filter for the Lessons we want to count
     *   }
     * })
    **/
    count<T extends lessonCountArgs>(
      args?: Subset<T, lessonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LessonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lesson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LessonAggregateArgs>(args: Subset<T, LessonAggregateArgs>): Prisma.PrismaPromise<GetLessonAggregateType<T>>

    /**
     * Group by Lesson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lessonGroupByArgs} args - Group by arguments.
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
      T extends lessonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: lessonGroupByArgs['orderBy'] }
        : { orderBy?: lessonGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, lessonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLessonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the lesson model
   */
  readonly fields: lessonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for lesson.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__lessonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    exercise<T extends lesson$exerciseArgs<ExtArgs> = {}>(args?: Subset<T, lesson$exerciseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$exercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    topiclanguagedetail<T extends topiclanguagedetailDefaultArgs<ExtArgs> = {}>(args?: Subset<T, topiclanguagedetailDefaultArgs<ExtArgs>>): Prisma__topiclanguagedetailClient<$Result.GetResult<Prisma.$topiclanguagedetailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the lesson model
   */
  interface lessonFieldRefs {
    readonly LsID: FieldRef<"lesson", 'Int'>
    readonly TLDID: FieldRef<"lesson", 'Int'>
    readonly OrderIndex: FieldRef<"lesson", 'Int'>
    readonly Tittle: FieldRef<"lesson", 'String'>
    readonly Content: FieldRef<"lesson", 'String'>
  }
    

  // Custom InputTypes
  /**
   * lesson findUnique
   */
  export type lessonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lesson
     */
    select?: lessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lesson
     */
    omit?: lessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lessonInclude<ExtArgs> | null
    /**
     * Filter, which lesson to fetch.
     */
    where: lessonWhereUniqueInput
  }

  /**
   * lesson findUniqueOrThrow
   */
  export type lessonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lesson
     */
    select?: lessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lesson
     */
    omit?: lessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lessonInclude<ExtArgs> | null
    /**
     * Filter, which lesson to fetch.
     */
    where: lessonWhereUniqueInput
  }

  /**
   * lesson findFirst
   */
  export type lessonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lesson
     */
    select?: lessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lesson
     */
    omit?: lessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lessonInclude<ExtArgs> | null
    /**
     * Filter, which lesson to fetch.
     */
    where?: lessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lessons to fetch.
     */
    orderBy?: lessonOrderByWithRelationInput | lessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for lessons.
     */
    cursor?: lessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of lessons.
     */
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * lesson findFirstOrThrow
   */
  export type lessonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lesson
     */
    select?: lessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lesson
     */
    omit?: lessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lessonInclude<ExtArgs> | null
    /**
     * Filter, which lesson to fetch.
     */
    where?: lessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lessons to fetch.
     */
    orderBy?: lessonOrderByWithRelationInput | lessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for lessons.
     */
    cursor?: lessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of lessons.
     */
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * lesson findMany
   */
  export type lessonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lesson
     */
    select?: lessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lesson
     */
    omit?: lessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lessonInclude<ExtArgs> | null
    /**
     * Filter, which lessons to fetch.
     */
    where?: lessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lessons to fetch.
     */
    orderBy?: lessonOrderByWithRelationInput | lessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing lessons.
     */
    cursor?: lessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lessons.
     */
    skip?: number
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * lesson create
   */
  export type lessonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lesson
     */
    select?: lessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lesson
     */
    omit?: lessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lessonInclude<ExtArgs> | null
    /**
     * The data needed to create a lesson.
     */
    data: XOR<lessonCreateInput, lessonUncheckedCreateInput>
  }

  /**
   * lesson createMany
   */
  export type lessonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many lessons.
     */
    data: lessonCreateManyInput | lessonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * lesson update
   */
  export type lessonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lesson
     */
    select?: lessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lesson
     */
    omit?: lessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lessonInclude<ExtArgs> | null
    /**
     * The data needed to update a lesson.
     */
    data: XOR<lessonUpdateInput, lessonUncheckedUpdateInput>
    /**
     * Choose, which lesson to update.
     */
    where: lessonWhereUniqueInput
  }

  /**
   * lesson updateMany
   */
  export type lessonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update lessons.
     */
    data: XOR<lessonUpdateManyMutationInput, lessonUncheckedUpdateManyInput>
    /**
     * Filter which lessons to update
     */
    where?: lessonWhereInput
    /**
     * Limit how many lessons to update.
     */
    limit?: number
  }

  /**
   * lesson upsert
   */
  export type lessonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lesson
     */
    select?: lessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lesson
     */
    omit?: lessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lessonInclude<ExtArgs> | null
    /**
     * The filter to search for the lesson to update in case it exists.
     */
    where: lessonWhereUniqueInput
    /**
     * In case the lesson found by the `where` argument doesn't exist, create a new lesson with this data.
     */
    create: XOR<lessonCreateInput, lessonUncheckedCreateInput>
    /**
     * In case the lesson was found with the provided `where` argument, update it with this data.
     */
    update: XOR<lessonUpdateInput, lessonUncheckedUpdateInput>
  }

  /**
   * lesson delete
   */
  export type lessonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lesson
     */
    select?: lessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lesson
     */
    omit?: lessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lessonInclude<ExtArgs> | null
    /**
     * Filter which lesson to delete.
     */
    where: lessonWhereUniqueInput
  }

  /**
   * lesson deleteMany
   */
  export type lessonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which lessons to delete
     */
    where?: lessonWhereInput
    /**
     * Limit how many lessons to delete.
     */
    limit?: number
  }

  /**
   * lesson.exercise
   */
  export type lesson$exerciseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercise
     */
    select?: exerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercise
     */
    omit?: exerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exerciseInclude<ExtArgs> | null
    where?: exerciseWhereInput
    orderBy?: exerciseOrderByWithRelationInput | exerciseOrderByWithRelationInput[]
    cursor?: exerciseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * lesson without action
   */
  export type lessonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lesson
     */
    select?: lessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lesson
     */
    omit?: lessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lessonInclude<ExtArgs> | null
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


  export const ExerciseScalarFieldEnum: {
    EID: 'EID',
    LsID: 'LsID',
    OrderIndex: 'OrderIndex',
    Content: 'Content',
    Difficulty: 'Difficulty'
  };

  export type ExerciseScalarFieldEnum = (typeof ExerciseScalarFieldEnum)[keyof typeof ExerciseScalarFieldEnum]


  export const LanguageScalarFieldEnum: {
    LgID: 'LgID',
    Name: 'Name',
    Logo: 'Logo'
  };

  export type LanguageScalarFieldEnum = (typeof LanguageScalarFieldEnum)[keyof typeof LanguageScalarFieldEnum]


  export const SubmissionScalarFieldEnum: {
    SID: 'SID',
    UID: 'UID',
    EID: 'EID',
    Code: 'Code',
    CreatedAt: 'CreatedAt',
    Result: 'Result'
  };

  export type SubmissionScalarFieldEnum = (typeof SubmissionScalarFieldEnum)[keyof typeof SubmissionScalarFieldEnum]


  export const TestcaseScalarFieldEnum: {
    TCID: 'TCID',
    EID: 'EID',
    Input: 'Input',
    ExpectedOutput: 'ExpectedOutput',
    isHidden: 'isHidden'
  };

  export type TestcaseScalarFieldEnum = (typeof TestcaseScalarFieldEnum)[keyof typeof TestcaseScalarFieldEnum]


  export const TestcaseresultScalarFieldEnum: {
    TCRID: 'TCRID',
    SID: 'SID',
    TCID: 'TCID',
    ActualOutput: 'ActualOutput',
    Result: 'Result',
    ExecutionTime: 'ExecutionTime'
  };

  export type TestcaseresultScalarFieldEnum = (typeof TestcaseresultScalarFieldEnum)[keyof typeof TestcaseresultScalarFieldEnum]


  export const TopicScalarFieldEnum: {
    TpID: 'TpID',
    Name: 'Name',
    Description: 'Description'
  };

  export type TopicScalarFieldEnum = (typeof TopicScalarFieldEnum)[keyof typeof TopicScalarFieldEnum]


  export const TopiclanguagedetailScalarFieldEnum: {
    TLDID: 'TLDID',
    TpID: 'TpID',
    LgID: 'LgID'
  };

  export type TopiclanguagedetailScalarFieldEnum = (typeof TopiclanguagedetailScalarFieldEnum)[keyof typeof TopiclanguagedetailScalarFieldEnum]


  export const UserScalarFieldEnum: {
    UID: 'UID',
    Username: 'Username',
    Email: 'Email',
    Password: 'Password',
    Role: 'Role',
    CreatedAt: 'CreatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const LessonScalarFieldEnum: {
    LsID: 'LsID',
    TLDID: 'TLDID',
    OrderIndex: 'OrderIndex',
    Tittle: 'Tittle',
    Content: 'Content'
  };

  export type LessonScalarFieldEnum = (typeof LessonScalarFieldEnum)[keyof typeof LessonScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const exerciseOrderByRelevanceFieldEnum: {
    Content: 'Content'
  };

  export type exerciseOrderByRelevanceFieldEnum = (typeof exerciseOrderByRelevanceFieldEnum)[keyof typeof exerciseOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const languageOrderByRelevanceFieldEnum: {
    Name: 'Name',
    Logo: 'Logo'
  };

  export type languageOrderByRelevanceFieldEnum = (typeof languageOrderByRelevanceFieldEnum)[keyof typeof languageOrderByRelevanceFieldEnum]


  export const submissionOrderByRelevanceFieldEnum: {
    UID: 'UID',
    Code: 'Code'
  };

  export type submissionOrderByRelevanceFieldEnum = (typeof submissionOrderByRelevanceFieldEnum)[keyof typeof submissionOrderByRelevanceFieldEnum]


  export const testcaseOrderByRelevanceFieldEnum: {
    Input: 'Input',
    ExpectedOutput: 'ExpectedOutput'
  };

  export type testcaseOrderByRelevanceFieldEnum = (typeof testcaseOrderByRelevanceFieldEnum)[keyof typeof testcaseOrderByRelevanceFieldEnum]


  export const testcaseresultOrderByRelevanceFieldEnum: {
    ActualOutput: 'ActualOutput'
  };

  export type testcaseresultOrderByRelevanceFieldEnum = (typeof testcaseresultOrderByRelevanceFieldEnum)[keyof typeof testcaseresultOrderByRelevanceFieldEnum]


  export const topicOrderByRelevanceFieldEnum: {
    Name: 'Name',
    Description: 'Description'
  };

  export type topicOrderByRelevanceFieldEnum = (typeof topicOrderByRelevanceFieldEnum)[keyof typeof topicOrderByRelevanceFieldEnum]


  export const userOrderByRelevanceFieldEnum: {
    UID: 'UID',
    Username: 'Username',
    Email: 'Email',
    Password: 'Password'
  };

  export type userOrderByRelevanceFieldEnum = (typeof userOrderByRelevanceFieldEnum)[keyof typeof userOrderByRelevanceFieldEnum]


  export const lessonOrderByRelevanceFieldEnum: {
    Tittle: 'Tittle',
    Content: 'Content'
  };

  export type lessonOrderByRelevanceFieldEnum = (typeof lessonOrderByRelevanceFieldEnum)[keyof typeof lessonOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'exercise_Difficulty'
   */
  export type Enumexercise_DifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'exercise_Difficulty'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'submission_Result'
   */
  export type Enumsubmission_ResultFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'submission_Result'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'testcaseresult_Result'
   */
  export type Enumtestcaseresult_ResultFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'testcaseresult_Result'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'user_Role'
   */
  export type Enumuser_RoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_Role'>
    
  /**
   * Deep Input Types
   */


  export type exerciseWhereInput = {
    AND?: exerciseWhereInput | exerciseWhereInput[]
    OR?: exerciseWhereInput[]
    NOT?: exerciseWhereInput | exerciseWhereInput[]
    EID?: IntFilter<"exercise"> | number
    LsID?: IntFilter<"exercise"> | number
    OrderIndex?: IntFilter<"exercise"> | number
    Content?: StringFilter<"exercise"> | string
    Difficulty?: Enumexercise_DifficultyFilter<"exercise"> | $Enums.exercise_Difficulty
    lession?: XOR<LessonScalarRelationFilter, lessonWhereInput>
    submission?: SubmissionListRelationFilter
    testcase?: TestcaseListRelationFilter
  }

  export type exerciseOrderByWithRelationInput = {
    EID?: SortOrder
    LsID?: SortOrder
    OrderIndex?: SortOrder
    Content?: SortOrder
    Difficulty?: SortOrder
    lession?: lessonOrderByWithRelationInput
    submission?: submissionOrderByRelationAggregateInput
    testcase?: testcaseOrderByRelationAggregateInput
    _relevance?: exerciseOrderByRelevanceInput
  }

  export type exerciseWhereUniqueInput = Prisma.AtLeast<{
    EID?: number
    AND?: exerciseWhereInput | exerciseWhereInput[]
    OR?: exerciseWhereInput[]
    NOT?: exerciseWhereInput | exerciseWhereInput[]
    LsID?: IntFilter<"exercise"> | number
    OrderIndex?: IntFilter<"exercise"> | number
    Content?: StringFilter<"exercise"> | string
    Difficulty?: Enumexercise_DifficultyFilter<"exercise"> | $Enums.exercise_Difficulty
    lession?: XOR<LessonScalarRelationFilter, lessonWhereInput>
    submission?: SubmissionListRelationFilter
    testcase?: TestcaseListRelationFilter
  }, "EID">

  export type exerciseOrderByWithAggregationInput = {
    EID?: SortOrder
    LsID?: SortOrder
    OrderIndex?: SortOrder
    Content?: SortOrder
    Difficulty?: SortOrder
    _count?: exerciseCountOrderByAggregateInput
    _avg?: exerciseAvgOrderByAggregateInput
    _max?: exerciseMaxOrderByAggregateInput
    _min?: exerciseMinOrderByAggregateInput
    _sum?: exerciseSumOrderByAggregateInput
  }

  export type exerciseScalarWhereWithAggregatesInput = {
    AND?: exerciseScalarWhereWithAggregatesInput | exerciseScalarWhereWithAggregatesInput[]
    OR?: exerciseScalarWhereWithAggregatesInput[]
    NOT?: exerciseScalarWhereWithAggregatesInput | exerciseScalarWhereWithAggregatesInput[]
    EID?: IntWithAggregatesFilter<"exercise"> | number
    LsID?: IntWithAggregatesFilter<"exercise"> | number
    OrderIndex?: IntWithAggregatesFilter<"exercise"> | number
    Content?: StringWithAggregatesFilter<"exercise"> | string
    Difficulty?: Enumexercise_DifficultyWithAggregatesFilter<"exercise"> | $Enums.exercise_Difficulty
  }

  export type languageWhereInput = {
    AND?: languageWhereInput | languageWhereInput[]
    OR?: languageWhereInput[]
    NOT?: languageWhereInput | languageWhereInput[]
    LgID?: IntFilter<"language"> | number
    Name?: StringFilter<"language"> | string
    Logo?: StringNullableFilter<"language"> | string | null
    topiclanguagedetail?: TopiclanguagedetailListRelationFilter
  }

  export type languageOrderByWithRelationInput = {
    LgID?: SortOrder
    Name?: SortOrder
    Logo?: SortOrderInput | SortOrder
    topiclanguagedetail?: topiclanguagedetailOrderByRelationAggregateInput
    _relevance?: languageOrderByRelevanceInput
  }

  export type languageWhereUniqueInput = Prisma.AtLeast<{
    LgID?: number
    AND?: languageWhereInput | languageWhereInput[]
    OR?: languageWhereInput[]
    NOT?: languageWhereInput | languageWhereInput[]
    Name?: StringFilter<"language"> | string
    Logo?: StringNullableFilter<"language"> | string | null
    topiclanguagedetail?: TopiclanguagedetailListRelationFilter
  }, "LgID">

  export type languageOrderByWithAggregationInput = {
    LgID?: SortOrder
    Name?: SortOrder
    Logo?: SortOrderInput | SortOrder
    _count?: languageCountOrderByAggregateInput
    _avg?: languageAvgOrderByAggregateInput
    _max?: languageMaxOrderByAggregateInput
    _min?: languageMinOrderByAggregateInput
    _sum?: languageSumOrderByAggregateInput
  }

  export type languageScalarWhereWithAggregatesInput = {
    AND?: languageScalarWhereWithAggregatesInput | languageScalarWhereWithAggregatesInput[]
    OR?: languageScalarWhereWithAggregatesInput[]
    NOT?: languageScalarWhereWithAggregatesInput | languageScalarWhereWithAggregatesInput[]
    LgID?: IntWithAggregatesFilter<"language"> | number
    Name?: StringWithAggregatesFilter<"language"> | string
    Logo?: StringNullableWithAggregatesFilter<"language"> | string | null
  }

  export type submissionWhereInput = {
    AND?: submissionWhereInput | submissionWhereInput[]
    OR?: submissionWhereInput[]
    NOT?: submissionWhereInput | submissionWhereInput[]
    SID?: IntFilter<"submission"> | number
    UID?: StringFilter<"submission"> | string
    EID?: IntFilter<"submission"> | number
    Code?: StringNullableFilter<"submission"> | string | null
    CreatedAt?: DateTimeNullableFilter<"submission"> | Date | string | null
    Result?: Enumsubmission_ResultNullableFilter<"submission"> | $Enums.submission_Result | null
    exercise?: XOR<ExerciseScalarRelationFilter, exerciseWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    testcaseresult?: TestcaseresultListRelationFilter
  }

  export type submissionOrderByWithRelationInput = {
    SID?: SortOrder
    UID?: SortOrder
    EID?: SortOrder
    Code?: SortOrderInput | SortOrder
    CreatedAt?: SortOrderInput | SortOrder
    Result?: SortOrderInput | SortOrder
    exercise?: exerciseOrderByWithRelationInput
    user?: userOrderByWithRelationInput
    testcaseresult?: testcaseresultOrderByRelationAggregateInput
    _relevance?: submissionOrderByRelevanceInput
  }

  export type submissionWhereUniqueInput = Prisma.AtLeast<{
    SID?: number
    AND?: submissionWhereInput | submissionWhereInput[]
    OR?: submissionWhereInput[]
    NOT?: submissionWhereInput | submissionWhereInput[]
    UID?: StringFilter<"submission"> | string
    EID?: IntFilter<"submission"> | number
    Code?: StringNullableFilter<"submission"> | string | null
    CreatedAt?: DateTimeNullableFilter<"submission"> | Date | string | null
    Result?: Enumsubmission_ResultNullableFilter<"submission"> | $Enums.submission_Result | null
    exercise?: XOR<ExerciseScalarRelationFilter, exerciseWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    testcaseresult?: TestcaseresultListRelationFilter
  }, "SID">

  export type submissionOrderByWithAggregationInput = {
    SID?: SortOrder
    UID?: SortOrder
    EID?: SortOrder
    Code?: SortOrderInput | SortOrder
    CreatedAt?: SortOrderInput | SortOrder
    Result?: SortOrderInput | SortOrder
    _count?: submissionCountOrderByAggregateInput
    _avg?: submissionAvgOrderByAggregateInput
    _max?: submissionMaxOrderByAggregateInput
    _min?: submissionMinOrderByAggregateInput
    _sum?: submissionSumOrderByAggregateInput
  }

  export type submissionScalarWhereWithAggregatesInput = {
    AND?: submissionScalarWhereWithAggregatesInput | submissionScalarWhereWithAggregatesInput[]
    OR?: submissionScalarWhereWithAggregatesInput[]
    NOT?: submissionScalarWhereWithAggregatesInput | submissionScalarWhereWithAggregatesInput[]
    SID?: IntWithAggregatesFilter<"submission"> | number
    UID?: StringWithAggregatesFilter<"submission"> | string
    EID?: IntWithAggregatesFilter<"submission"> | number
    Code?: StringNullableWithAggregatesFilter<"submission"> | string | null
    CreatedAt?: DateTimeNullableWithAggregatesFilter<"submission"> | Date | string | null
    Result?: Enumsubmission_ResultNullableWithAggregatesFilter<"submission"> | $Enums.submission_Result | null
  }

  export type testcaseWhereInput = {
    AND?: testcaseWhereInput | testcaseWhereInput[]
    OR?: testcaseWhereInput[]
    NOT?: testcaseWhereInput | testcaseWhereInput[]
    TCID?: IntFilter<"testcase"> | number
    EID?: IntFilter<"testcase"> | number
    Input?: StringFilter<"testcase"> | string
    ExpectedOutput?: StringFilter<"testcase"> | string
    isHidden?: BoolNullableFilter<"testcase"> | boolean | null
    exercise?: XOR<ExerciseScalarRelationFilter, exerciseWhereInput>
    testcaseresult?: TestcaseresultListRelationFilter
  }

  export type testcaseOrderByWithRelationInput = {
    TCID?: SortOrder
    EID?: SortOrder
    Input?: SortOrder
    ExpectedOutput?: SortOrder
    isHidden?: SortOrderInput | SortOrder
    exercise?: exerciseOrderByWithRelationInput
    testcaseresult?: testcaseresultOrderByRelationAggregateInput
    _relevance?: testcaseOrderByRelevanceInput
  }

  export type testcaseWhereUniqueInput = Prisma.AtLeast<{
    TCID?: number
    AND?: testcaseWhereInput | testcaseWhereInput[]
    OR?: testcaseWhereInput[]
    NOT?: testcaseWhereInput | testcaseWhereInput[]
    EID?: IntFilter<"testcase"> | number
    Input?: StringFilter<"testcase"> | string
    ExpectedOutput?: StringFilter<"testcase"> | string
    isHidden?: BoolNullableFilter<"testcase"> | boolean | null
    exercise?: XOR<ExerciseScalarRelationFilter, exerciseWhereInput>
    testcaseresult?: TestcaseresultListRelationFilter
  }, "TCID">

  export type testcaseOrderByWithAggregationInput = {
    TCID?: SortOrder
    EID?: SortOrder
    Input?: SortOrder
    ExpectedOutput?: SortOrder
    isHidden?: SortOrderInput | SortOrder
    _count?: testcaseCountOrderByAggregateInput
    _avg?: testcaseAvgOrderByAggregateInput
    _max?: testcaseMaxOrderByAggregateInput
    _min?: testcaseMinOrderByAggregateInput
    _sum?: testcaseSumOrderByAggregateInput
  }

  export type testcaseScalarWhereWithAggregatesInput = {
    AND?: testcaseScalarWhereWithAggregatesInput | testcaseScalarWhereWithAggregatesInput[]
    OR?: testcaseScalarWhereWithAggregatesInput[]
    NOT?: testcaseScalarWhereWithAggregatesInput | testcaseScalarWhereWithAggregatesInput[]
    TCID?: IntWithAggregatesFilter<"testcase"> | number
    EID?: IntWithAggregatesFilter<"testcase"> | number
    Input?: StringWithAggregatesFilter<"testcase"> | string
    ExpectedOutput?: StringWithAggregatesFilter<"testcase"> | string
    isHidden?: BoolNullableWithAggregatesFilter<"testcase"> | boolean | null
  }

  export type testcaseresultWhereInput = {
    AND?: testcaseresultWhereInput | testcaseresultWhereInput[]
    OR?: testcaseresultWhereInput[]
    NOT?: testcaseresultWhereInput | testcaseresultWhereInput[]
    TCRID?: IntFilter<"testcaseresult"> | number
    SID?: IntFilter<"testcaseresult"> | number
    TCID?: IntFilter<"testcaseresult"> | number
    ActualOutput?: StringFilter<"testcaseresult"> | string
    Result?: Enumtestcaseresult_ResultNullableFilter<"testcaseresult"> | $Enums.testcaseresult_Result | null
    ExecutionTime?: FloatNullableFilter<"testcaseresult"> | number | null
    submission?: XOR<SubmissionScalarRelationFilter, submissionWhereInput>
    testcase?: XOR<TestcaseScalarRelationFilter, testcaseWhereInput>
  }

  export type testcaseresultOrderByWithRelationInput = {
    TCRID?: SortOrder
    SID?: SortOrder
    TCID?: SortOrder
    ActualOutput?: SortOrder
    Result?: SortOrderInput | SortOrder
    ExecutionTime?: SortOrderInput | SortOrder
    submission?: submissionOrderByWithRelationInput
    testcase?: testcaseOrderByWithRelationInput
    _relevance?: testcaseresultOrderByRelevanceInput
  }

  export type testcaseresultWhereUniqueInput = Prisma.AtLeast<{
    TCRID?: number
    AND?: testcaseresultWhereInput | testcaseresultWhereInput[]
    OR?: testcaseresultWhereInput[]
    NOT?: testcaseresultWhereInput | testcaseresultWhereInput[]
    SID?: IntFilter<"testcaseresult"> | number
    TCID?: IntFilter<"testcaseresult"> | number
    ActualOutput?: StringFilter<"testcaseresult"> | string
    Result?: Enumtestcaseresult_ResultNullableFilter<"testcaseresult"> | $Enums.testcaseresult_Result | null
    ExecutionTime?: FloatNullableFilter<"testcaseresult"> | number | null
    submission?: XOR<SubmissionScalarRelationFilter, submissionWhereInput>
    testcase?: XOR<TestcaseScalarRelationFilter, testcaseWhereInput>
  }, "TCRID">

  export type testcaseresultOrderByWithAggregationInput = {
    TCRID?: SortOrder
    SID?: SortOrder
    TCID?: SortOrder
    ActualOutput?: SortOrder
    Result?: SortOrderInput | SortOrder
    ExecutionTime?: SortOrderInput | SortOrder
    _count?: testcaseresultCountOrderByAggregateInput
    _avg?: testcaseresultAvgOrderByAggregateInput
    _max?: testcaseresultMaxOrderByAggregateInput
    _min?: testcaseresultMinOrderByAggregateInput
    _sum?: testcaseresultSumOrderByAggregateInput
  }

  export type testcaseresultScalarWhereWithAggregatesInput = {
    AND?: testcaseresultScalarWhereWithAggregatesInput | testcaseresultScalarWhereWithAggregatesInput[]
    OR?: testcaseresultScalarWhereWithAggregatesInput[]
    NOT?: testcaseresultScalarWhereWithAggregatesInput | testcaseresultScalarWhereWithAggregatesInput[]
    TCRID?: IntWithAggregatesFilter<"testcaseresult"> | number
    SID?: IntWithAggregatesFilter<"testcaseresult"> | number
    TCID?: IntWithAggregatesFilter<"testcaseresult"> | number
    ActualOutput?: StringWithAggregatesFilter<"testcaseresult"> | string
    Result?: Enumtestcaseresult_ResultNullableWithAggregatesFilter<"testcaseresult"> | $Enums.testcaseresult_Result | null
    ExecutionTime?: FloatNullableWithAggregatesFilter<"testcaseresult"> | number | null
  }

  export type topicWhereInput = {
    AND?: topicWhereInput | topicWhereInput[]
    OR?: topicWhereInput[]
    NOT?: topicWhereInput | topicWhereInput[]
    TpID?: IntFilter<"topic"> | number
    Name?: StringFilter<"topic"> | string
    Description?: StringNullableFilter<"topic"> | string | null
    topiclanguagedetail?: TopiclanguagedetailListRelationFilter
  }

  export type topicOrderByWithRelationInput = {
    TpID?: SortOrder
    Name?: SortOrder
    Description?: SortOrderInput | SortOrder
    topiclanguagedetail?: topiclanguagedetailOrderByRelationAggregateInput
    _relevance?: topicOrderByRelevanceInput
  }

  export type topicWhereUniqueInput = Prisma.AtLeast<{
    TpID?: number
    AND?: topicWhereInput | topicWhereInput[]
    OR?: topicWhereInput[]
    NOT?: topicWhereInput | topicWhereInput[]
    Name?: StringFilter<"topic"> | string
    Description?: StringNullableFilter<"topic"> | string | null
    topiclanguagedetail?: TopiclanguagedetailListRelationFilter
  }, "TpID">

  export type topicOrderByWithAggregationInput = {
    TpID?: SortOrder
    Name?: SortOrder
    Description?: SortOrderInput | SortOrder
    _count?: topicCountOrderByAggregateInput
    _avg?: topicAvgOrderByAggregateInput
    _max?: topicMaxOrderByAggregateInput
    _min?: topicMinOrderByAggregateInput
    _sum?: topicSumOrderByAggregateInput
  }

  export type topicScalarWhereWithAggregatesInput = {
    AND?: topicScalarWhereWithAggregatesInput | topicScalarWhereWithAggregatesInput[]
    OR?: topicScalarWhereWithAggregatesInput[]
    NOT?: topicScalarWhereWithAggregatesInput | topicScalarWhereWithAggregatesInput[]
    TpID?: IntWithAggregatesFilter<"topic"> | number
    Name?: StringWithAggregatesFilter<"topic"> | string
    Description?: StringNullableWithAggregatesFilter<"topic"> | string | null
  }

  export type topiclanguagedetailWhereInput = {
    AND?: topiclanguagedetailWhereInput | topiclanguagedetailWhereInput[]
    OR?: topiclanguagedetailWhereInput[]
    NOT?: topiclanguagedetailWhereInput | topiclanguagedetailWhereInput[]
    TLDID?: IntFilter<"topiclanguagedetail"> | number
    TpID?: IntFilter<"topiclanguagedetail"> | number
    LgID?: IntFilter<"topiclanguagedetail"> | number
    lesson?: LessonListRelationFilter
    topic?: XOR<TopicScalarRelationFilter, topicWhereInput>
    language?: XOR<LanguageScalarRelationFilter, languageWhereInput>
  }

  export type topiclanguagedetailOrderByWithRelationInput = {
    TLDID?: SortOrder
    TpID?: SortOrder
    LgID?: SortOrder
    lesson?: lessonOrderByRelationAggregateInput
    topic?: topicOrderByWithRelationInput
    language?: languageOrderByWithRelationInput
  }

  export type topiclanguagedetailWhereUniqueInput = Prisma.AtLeast<{
    TLDID?: number
    AND?: topiclanguagedetailWhereInput | topiclanguagedetailWhereInput[]
    OR?: topiclanguagedetailWhereInput[]
    NOT?: topiclanguagedetailWhereInput | topiclanguagedetailWhereInput[]
    TpID?: IntFilter<"topiclanguagedetail"> | number
    LgID?: IntFilter<"topiclanguagedetail"> | number
    lesson?: LessonListRelationFilter
    topic?: XOR<TopicScalarRelationFilter, topicWhereInput>
    language?: XOR<LanguageScalarRelationFilter, languageWhereInput>
  }, "TLDID">

  export type topiclanguagedetailOrderByWithAggregationInput = {
    TLDID?: SortOrder
    TpID?: SortOrder
    LgID?: SortOrder
    _count?: topiclanguagedetailCountOrderByAggregateInput
    _avg?: topiclanguagedetailAvgOrderByAggregateInput
    _max?: topiclanguagedetailMaxOrderByAggregateInput
    _min?: topiclanguagedetailMinOrderByAggregateInput
    _sum?: topiclanguagedetailSumOrderByAggregateInput
  }

  export type topiclanguagedetailScalarWhereWithAggregatesInput = {
    AND?: topiclanguagedetailScalarWhereWithAggregatesInput | topiclanguagedetailScalarWhereWithAggregatesInput[]
    OR?: topiclanguagedetailScalarWhereWithAggregatesInput[]
    NOT?: topiclanguagedetailScalarWhereWithAggregatesInput | topiclanguagedetailScalarWhereWithAggregatesInput[]
    TLDID?: IntWithAggregatesFilter<"topiclanguagedetail"> | number
    TpID?: IntWithAggregatesFilter<"topiclanguagedetail"> | number
    LgID?: IntWithAggregatesFilter<"topiclanguagedetail"> | number
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    UID?: StringFilter<"user"> | string
    Username?: StringNullableFilter<"user"> | string | null
    Email?: StringFilter<"user"> | string
    Password?: StringFilter<"user"> | string
    Role?: Enumuser_RoleFilter<"user"> | $Enums.user_Role
    CreatedAt?: DateTimeNullableFilter<"user"> | Date | string | null
    submission?: SubmissionListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    UID?: SortOrder
    Username?: SortOrderInput | SortOrder
    Email?: SortOrder
    Password?: SortOrder
    Role?: SortOrder
    CreatedAt?: SortOrderInput | SortOrder
    submission?: submissionOrderByRelationAggregateInput
    _relevance?: userOrderByRelevanceInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    UID?: string
    Email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    Username?: StringNullableFilter<"user"> | string | null
    Password?: StringFilter<"user"> | string
    Role?: Enumuser_RoleFilter<"user"> | $Enums.user_Role
    CreatedAt?: DateTimeNullableFilter<"user"> | Date | string | null
    submission?: SubmissionListRelationFilter
  }, "UID" | "Email">

  export type userOrderByWithAggregationInput = {
    UID?: SortOrder
    Username?: SortOrderInput | SortOrder
    Email?: SortOrder
    Password?: SortOrder
    Role?: SortOrder
    CreatedAt?: SortOrderInput | SortOrder
    _count?: userCountOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    UID?: StringWithAggregatesFilter<"user"> | string
    Username?: StringNullableWithAggregatesFilter<"user"> | string | null
    Email?: StringWithAggregatesFilter<"user"> | string
    Password?: StringWithAggregatesFilter<"user"> | string
    Role?: Enumuser_RoleWithAggregatesFilter<"user"> | $Enums.user_Role
    CreatedAt?: DateTimeNullableWithAggregatesFilter<"user"> | Date | string | null
  }

  export type lessonWhereInput = {
    AND?: lessonWhereInput | lessonWhereInput[]
    OR?: lessonWhereInput[]
    NOT?: lessonWhereInput | lessonWhereInput[]
    LsID?: IntFilter<"lesson"> | number
    TLDID?: IntFilter<"lesson"> | number
    OrderIndex?: IntFilter<"lesson"> | number
    Tittle?: StringFilter<"lesson"> | string
    Content?: StringFilter<"lesson"> | string
    exercise?: ExerciseListRelationFilter
    topiclanguagedetail?: XOR<TopiclanguagedetailScalarRelationFilter, topiclanguagedetailWhereInput>
  }

  export type lessonOrderByWithRelationInput = {
    LsID?: SortOrder
    TLDID?: SortOrder
    OrderIndex?: SortOrder
    Tittle?: SortOrder
    Content?: SortOrder
    exercise?: exerciseOrderByRelationAggregateInput
    topiclanguagedetail?: topiclanguagedetailOrderByWithRelationInput
    _relevance?: lessonOrderByRelevanceInput
  }

  export type lessonWhereUniqueInput = Prisma.AtLeast<{
    LsID?: number
    AND?: lessonWhereInput | lessonWhereInput[]
    OR?: lessonWhereInput[]
    NOT?: lessonWhereInput | lessonWhereInput[]
    TLDID?: IntFilter<"lesson"> | number
    OrderIndex?: IntFilter<"lesson"> | number
    Tittle?: StringFilter<"lesson"> | string
    Content?: StringFilter<"lesson"> | string
    exercise?: ExerciseListRelationFilter
    topiclanguagedetail?: XOR<TopiclanguagedetailScalarRelationFilter, topiclanguagedetailWhereInput>
  }, "LsID">

  export type lessonOrderByWithAggregationInput = {
    LsID?: SortOrder
    TLDID?: SortOrder
    OrderIndex?: SortOrder
    Tittle?: SortOrder
    Content?: SortOrder
    _count?: lessonCountOrderByAggregateInput
    _avg?: lessonAvgOrderByAggregateInput
    _max?: lessonMaxOrderByAggregateInput
    _min?: lessonMinOrderByAggregateInput
    _sum?: lessonSumOrderByAggregateInput
  }

  export type lessonScalarWhereWithAggregatesInput = {
    AND?: lessonScalarWhereWithAggregatesInput | lessonScalarWhereWithAggregatesInput[]
    OR?: lessonScalarWhereWithAggregatesInput[]
    NOT?: lessonScalarWhereWithAggregatesInput | lessonScalarWhereWithAggregatesInput[]
    LsID?: IntWithAggregatesFilter<"lesson"> | number
    TLDID?: IntWithAggregatesFilter<"lesson"> | number
    OrderIndex?: IntWithAggregatesFilter<"lesson"> | number
    Tittle?: StringWithAggregatesFilter<"lesson"> | string
    Content?: StringWithAggregatesFilter<"lesson"> | string
  }

  export type exerciseCreateInput = {
    OrderIndex: number
    Content: string
    Difficulty?: $Enums.exercise_Difficulty
    lession: lessonCreateNestedOneWithoutExerciseInput
    submission?: submissionCreateNestedManyWithoutExerciseInput
    testcase?: testcaseCreateNestedManyWithoutExerciseInput
  }

  export type exerciseUncheckedCreateInput = {
    EID?: number
    LsID: number
    OrderIndex: number
    Content: string
    Difficulty?: $Enums.exercise_Difficulty
    submission?: submissionUncheckedCreateNestedManyWithoutExerciseInput
    testcase?: testcaseUncheckedCreateNestedManyWithoutExerciseInput
  }

  export type exerciseUpdateInput = {
    OrderIndex?: IntFieldUpdateOperationsInput | number
    Content?: StringFieldUpdateOperationsInput | string
    Difficulty?: Enumexercise_DifficultyFieldUpdateOperationsInput | $Enums.exercise_Difficulty
    lession?: lessonUpdateOneRequiredWithoutExerciseNestedInput
    submission?: submissionUpdateManyWithoutExerciseNestedInput
    testcase?: testcaseUpdateManyWithoutExerciseNestedInput
  }

  export type exerciseUncheckedUpdateInput = {
    EID?: IntFieldUpdateOperationsInput | number
    LsID?: IntFieldUpdateOperationsInput | number
    OrderIndex?: IntFieldUpdateOperationsInput | number
    Content?: StringFieldUpdateOperationsInput | string
    Difficulty?: Enumexercise_DifficultyFieldUpdateOperationsInput | $Enums.exercise_Difficulty
    submission?: submissionUncheckedUpdateManyWithoutExerciseNestedInput
    testcase?: testcaseUncheckedUpdateManyWithoutExerciseNestedInput
  }

  export type exerciseCreateManyInput = {
    EID?: number
    LsID: number
    OrderIndex: number
    Content: string
    Difficulty?: $Enums.exercise_Difficulty
  }

  export type exerciseUpdateManyMutationInput = {
    OrderIndex?: IntFieldUpdateOperationsInput | number
    Content?: StringFieldUpdateOperationsInput | string
    Difficulty?: Enumexercise_DifficultyFieldUpdateOperationsInput | $Enums.exercise_Difficulty
  }

  export type exerciseUncheckedUpdateManyInput = {
    EID?: IntFieldUpdateOperationsInput | number
    LsID?: IntFieldUpdateOperationsInput | number
    OrderIndex?: IntFieldUpdateOperationsInput | number
    Content?: StringFieldUpdateOperationsInput | string
    Difficulty?: Enumexercise_DifficultyFieldUpdateOperationsInput | $Enums.exercise_Difficulty
  }

  export type languageCreateInput = {
    Name: string
    Logo?: string | null
    topiclanguagedetail?: topiclanguagedetailCreateNestedManyWithoutLanguageInput
  }

  export type languageUncheckedCreateInput = {
    LgID?: number
    Name: string
    Logo?: string | null
    topiclanguagedetail?: topiclanguagedetailUncheckedCreateNestedManyWithoutLanguageInput
  }

  export type languageUpdateInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Logo?: NullableStringFieldUpdateOperationsInput | string | null
    topiclanguagedetail?: topiclanguagedetailUpdateManyWithoutLanguageNestedInput
  }

  export type languageUncheckedUpdateInput = {
    LgID?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Logo?: NullableStringFieldUpdateOperationsInput | string | null
    topiclanguagedetail?: topiclanguagedetailUncheckedUpdateManyWithoutLanguageNestedInput
  }

  export type languageCreateManyInput = {
    LgID?: number
    Name: string
    Logo?: string | null
  }

  export type languageUpdateManyMutationInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Logo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type languageUncheckedUpdateManyInput = {
    LgID?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Logo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type submissionCreateInput = {
    Code?: string | null
    CreatedAt?: Date | string | null
    Result?: $Enums.submission_Result | null
    exercise: exerciseCreateNestedOneWithoutSubmissionInput
    user: userCreateNestedOneWithoutSubmissionInput
    testcaseresult?: testcaseresultCreateNestedManyWithoutSubmissionInput
  }

  export type submissionUncheckedCreateInput = {
    SID?: number
    UID: string
    EID: number
    Code?: string | null
    CreatedAt?: Date | string | null
    Result?: $Enums.submission_Result | null
    testcaseresult?: testcaseresultUncheckedCreateNestedManyWithoutSubmissionInput
  }

  export type submissionUpdateInput = {
    Code?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Result?: NullableEnumsubmission_ResultFieldUpdateOperationsInput | $Enums.submission_Result | null
    exercise?: exerciseUpdateOneRequiredWithoutSubmissionNestedInput
    user?: userUpdateOneRequiredWithoutSubmissionNestedInput
    testcaseresult?: testcaseresultUpdateManyWithoutSubmissionNestedInput
  }

  export type submissionUncheckedUpdateInput = {
    SID?: IntFieldUpdateOperationsInput | number
    UID?: StringFieldUpdateOperationsInput | string
    EID?: IntFieldUpdateOperationsInput | number
    Code?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Result?: NullableEnumsubmission_ResultFieldUpdateOperationsInput | $Enums.submission_Result | null
    testcaseresult?: testcaseresultUncheckedUpdateManyWithoutSubmissionNestedInput
  }

  export type submissionCreateManyInput = {
    SID?: number
    UID: string
    EID: number
    Code?: string | null
    CreatedAt?: Date | string | null
    Result?: $Enums.submission_Result | null
  }

  export type submissionUpdateManyMutationInput = {
    Code?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Result?: NullableEnumsubmission_ResultFieldUpdateOperationsInput | $Enums.submission_Result | null
  }

  export type submissionUncheckedUpdateManyInput = {
    SID?: IntFieldUpdateOperationsInput | number
    UID?: StringFieldUpdateOperationsInput | string
    EID?: IntFieldUpdateOperationsInput | number
    Code?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Result?: NullableEnumsubmission_ResultFieldUpdateOperationsInput | $Enums.submission_Result | null
  }

  export type testcaseCreateInput = {
    Input: string
    ExpectedOutput: string
    isHidden?: boolean | null
    exercise: exerciseCreateNestedOneWithoutTestcaseInput
    testcaseresult?: testcaseresultCreateNestedManyWithoutTestcaseInput
  }

  export type testcaseUncheckedCreateInput = {
    TCID?: number
    EID: number
    Input: string
    ExpectedOutput: string
    isHidden?: boolean | null
    testcaseresult?: testcaseresultUncheckedCreateNestedManyWithoutTestcaseInput
  }

  export type testcaseUpdateInput = {
    Input?: StringFieldUpdateOperationsInput | string
    ExpectedOutput?: StringFieldUpdateOperationsInput | string
    isHidden?: NullableBoolFieldUpdateOperationsInput | boolean | null
    exercise?: exerciseUpdateOneRequiredWithoutTestcaseNestedInput
    testcaseresult?: testcaseresultUpdateManyWithoutTestcaseNestedInput
  }

  export type testcaseUncheckedUpdateInput = {
    TCID?: IntFieldUpdateOperationsInput | number
    EID?: IntFieldUpdateOperationsInput | number
    Input?: StringFieldUpdateOperationsInput | string
    ExpectedOutput?: StringFieldUpdateOperationsInput | string
    isHidden?: NullableBoolFieldUpdateOperationsInput | boolean | null
    testcaseresult?: testcaseresultUncheckedUpdateManyWithoutTestcaseNestedInput
  }

  export type testcaseCreateManyInput = {
    TCID?: number
    EID: number
    Input: string
    ExpectedOutput: string
    isHidden?: boolean | null
  }

  export type testcaseUpdateManyMutationInput = {
    Input?: StringFieldUpdateOperationsInput | string
    ExpectedOutput?: StringFieldUpdateOperationsInput | string
    isHidden?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type testcaseUncheckedUpdateManyInput = {
    TCID?: IntFieldUpdateOperationsInput | number
    EID?: IntFieldUpdateOperationsInput | number
    Input?: StringFieldUpdateOperationsInput | string
    ExpectedOutput?: StringFieldUpdateOperationsInput | string
    isHidden?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type testcaseresultCreateInput = {
    ActualOutput: string
    Result?: $Enums.testcaseresult_Result | null
    ExecutionTime?: number | null
    submission: submissionCreateNestedOneWithoutTestcaseresultInput
    testcase: testcaseCreateNestedOneWithoutTestcaseresultInput
  }

  export type testcaseresultUncheckedCreateInput = {
    TCRID?: number
    SID: number
    TCID: number
    ActualOutput: string
    Result?: $Enums.testcaseresult_Result | null
    ExecutionTime?: number | null
  }

  export type testcaseresultUpdateInput = {
    ActualOutput?: StringFieldUpdateOperationsInput | string
    Result?: NullableEnumtestcaseresult_ResultFieldUpdateOperationsInput | $Enums.testcaseresult_Result | null
    ExecutionTime?: NullableFloatFieldUpdateOperationsInput | number | null
    submission?: submissionUpdateOneRequiredWithoutTestcaseresultNestedInput
    testcase?: testcaseUpdateOneRequiredWithoutTestcaseresultNestedInput
  }

  export type testcaseresultUncheckedUpdateInput = {
    TCRID?: IntFieldUpdateOperationsInput | number
    SID?: IntFieldUpdateOperationsInput | number
    TCID?: IntFieldUpdateOperationsInput | number
    ActualOutput?: StringFieldUpdateOperationsInput | string
    Result?: NullableEnumtestcaseresult_ResultFieldUpdateOperationsInput | $Enums.testcaseresult_Result | null
    ExecutionTime?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type testcaseresultCreateManyInput = {
    TCRID?: number
    SID: number
    TCID: number
    ActualOutput: string
    Result?: $Enums.testcaseresult_Result | null
    ExecutionTime?: number | null
  }

  export type testcaseresultUpdateManyMutationInput = {
    ActualOutput?: StringFieldUpdateOperationsInput | string
    Result?: NullableEnumtestcaseresult_ResultFieldUpdateOperationsInput | $Enums.testcaseresult_Result | null
    ExecutionTime?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type testcaseresultUncheckedUpdateManyInput = {
    TCRID?: IntFieldUpdateOperationsInput | number
    SID?: IntFieldUpdateOperationsInput | number
    TCID?: IntFieldUpdateOperationsInput | number
    ActualOutput?: StringFieldUpdateOperationsInput | string
    Result?: NullableEnumtestcaseresult_ResultFieldUpdateOperationsInput | $Enums.testcaseresult_Result | null
    ExecutionTime?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type topicCreateInput = {
    Name: string
    Description?: string | null
    topiclanguagedetail?: topiclanguagedetailCreateNestedManyWithoutTopicInput
  }

  export type topicUncheckedCreateInput = {
    TpID?: number
    Name: string
    Description?: string | null
    topiclanguagedetail?: topiclanguagedetailUncheckedCreateNestedManyWithoutTopicInput
  }

  export type topicUpdateInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    topiclanguagedetail?: topiclanguagedetailUpdateManyWithoutTopicNestedInput
  }

  export type topicUncheckedUpdateInput = {
    TpID?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    topiclanguagedetail?: topiclanguagedetailUncheckedUpdateManyWithoutTopicNestedInput
  }

  export type topicCreateManyInput = {
    TpID?: number
    Name: string
    Description?: string | null
  }

  export type topicUpdateManyMutationInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type topicUncheckedUpdateManyInput = {
    TpID?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type topiclanguagedetailCreateInput = {
    lesson?: lessonCreateNestedManyWithoutTopiclanguagedetailInput
    topic: topicCreateNestedOneWithoutTopiclanguagedetailInput
    language: languageCreateNestedOneWithoutTopiclanguagedetailInput
  }

  export type topiclanguagedetailUncheckedCreateInput = {
    TLDID?: number
    TpID: number
    LgID: number
    lesson?: lessonUncheckedCreateNestedManyWithoutTopiclanguagedetailInput
  }

  export type topiclanguagedetailUpdateInput = {
    lesson?: lessonUpdateManyWithoutTopiclanguagedetailNestedInput
    topic?: topicUpdateOneRequiredWithoutTopiclanguagedetailNestedInput
    language?: languageUpdateOneRequiredWithoutTopiclanguagedetailNestedInput
  }

  export type topiclanguagedetailUncheckedUpdateInput = {
    TLDID?: IntFieldUpdateOperationsInput | number
    TpID?: IntFieldUpdateOperationsInput | number
    LgID?: IntFieldUpdateOperationsInput | number
    lesson?: lessonUncheckedUpdateManyWithoutTopiclanguagedetailNestedInput
  }

  export type topiclanguagedetailCreateManyInput = {
    TLDID?: number
    TpID: number
    LgID: number
  }

  export type topiclanguagedetailUpdateManyMutationInput = {

  }

  export type topiclanguagedetailUncheckedUpdateManyInput = {
    TLDID?: IntFieldUpdateOperationsInput | number
    TpID?: IntFieldUpdateOperationsInput | number
    LgID?: IntFieldUpdateOperationsInput | number
  }

  export type userCreateInput = {
    UID?: string
    Username?: string | null
    Email: string
    Password: string
    Role?: $Enums.user_Role
    CreatedAt?: Date | string | null
    submission?: submissionCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    UID?: string
    Username?: string | null
    Email: string
    Password: string
    Role?: $Enums.user_Role
    CreatedAt?: Date | string | null
    submission?: submissionUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    UID?: StringFieldUpdateOperationsInput | string
    Username?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Role?: Enumuser_RoleFieldUpdateOperationsInput | $Enums.user_Role
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submission?: submissionUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    UID?: StringFieldUpdateOperationsInput | string
    Username?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Role?: Enumuser_RoleFieldUpdateOperationsInput | $Enums.user_Role
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submission?: submissionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    UID?: string
    Username?: string | null
    Email: string
    Password: string
    Role?: $Enums.user_Role
    CreatedAt?: Date | string | null
  }

  export type userUpdateManyMutationInput = {
    UID?: StringFieldUpdateOperationsInput | string
    Username?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Role?: Enumuser_RoleFieldUpdateOperationsInput | $Enums.user_Role
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type userUncheckedUpdateManyInput = {
    UID?: StringFieldUpdateOperationsInput | string
    Username?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Role?: Enumuser_RoleFieldUpdateOperationsInput | $Enums.user_Role
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type lessonCreateInput = {
    OrderIndex: number
    Tittle: string
    Content: string
    exercise?: exerciseCreateNestedManyWithoutLessionInput
    topiclanguagedetail: topiclanguagedetailCreateNestedOneWithoutLessonInput
  }

  export type lessonUncheckedCreateInput = {
    LsID?: number
    TLDID: number
    OrderIndex: number
    Tittle: string
    Content: string
    exercise?: exerciseUncheckedCreateNestedManyWithoutLessionInput
  }

  export type lessonUpdateInput = {
    OrderIndex?: IntFieldUpdateOperationsInput | number
    Tittle?: StringFieldUpdateOperationsInput | string
    Content?: StringFieldUpdateOperationsInput | string
    exercise?: exerciseUpdateManyWithoutLessionNestedInput
    topiclanguagedetail?: topiclanguagedetailUpdateOneRequiredWithoutLessonNestedInput
  }

  export type lessonUncheckedUpdateInput = {
    LsID?: IntFieldUpdateOperationsInput | number
    TLDID?: IntFieldUpdateOperationsInput | number
    OrderIndex?: IntFieldUpdateOperationsInput | number
    Tittle?: StringFieldUpdateOperationsInput | string
    Content?: StringFieldUpdateOperationsInput | string
    exercise?: exerciseUncheckedUpdateManyWithoutLessionNestedInput
  }

  export type lessonCreateManyInput = {
    LsID?: number
    TLDID: number
    OrderIndex: number
    Tittle: string
    Content: string
  }

  export type lessonUpdateManyMutationInput = {
    OrderIndex?: IntFieldUpdateOperationsInput | number
    Tittle?: StringFieldUpdateOperationsInput | string
    Content?: StringFieldUpdateOperationsInput | string
  }

  export type lessonUncheckedUpdateManyInput = {
    LsID?: IntFieldUpdateOperationsInput | number
    TLDID?: IntFieldUpdateOperationsInput | number
    OrderIndex?: IntFieldUpdateOperationsInput | number
    Tittle?: StringFieldUpdateOperationsInput | string
    Content?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type Enumexercise_DifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.exercise_Difficulty | Enumexercise_DifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.exercise_Difficulty[]
    notIn?: $Enums.exercise_Difficulty[]
    not?: NestedEnumexercise_DifficultyFilter<$PrismaModel> | $Enums.exercise_Difficulty
  }

  export type LessonScalarRelationFilter = {
    is?: lessonWhereInput
    isNot?: lessonWhereInput
  }

  export type SubmissionListRelationFilter = {
    every?: submissionWhereInput
    some?: submissionWhereInput
    none?: submissionWhereInput
  }

  export type TestcaseListRelationFilter = {
    every?: testcaseWhereInput
    some?: testcaseWhereInput
    none?: testcaseWhereInput
  }

  export type submissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type testcaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type exerciseOrderByRelevanceInput = {
    fields: exerciseOrderByRelevanceFieldEnum | exerciseOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type exerciseCountOrderByAggregateInput = {
    EID?: SortOrder
    LsID?: SortOrder
    OrderIndex?: SortOrder
    Content?: SortOrder
    Difficulty?: SortOrder
  }

  export type exerciseAvgOrderByAggregateInput = {
    EID?: SortOrder
    LsID?: SortOrder
    OrderIndex?: SortOrder
  }

  export type exerciseMaxOrderByAggregateInput = {
    EID?: SortOrder
    LsID?: SortOrder
    OrderIndex?: SortOrder
    Content?: SortOrder
    Difficulty?: SortOrder
  }

  export type exerciseMinOrderByAggregateInput = {
    EID?: SortOrder
    LsID?: SortOrder
    OrderIndex?: SortOrder
    Content?: SortOrder
    Difficulty?: SortOrder
  }

  export type exerciseSumOrderByAggregateInput = {
    EID?: SortOrder
    LsID?: SortOrder
    OrderIndex?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type Enumexercise_DifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.exercise_Difficulty | Enumexercise_DifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.exercise_Difficulty[]
    notIn?: $Enums.exercise_Difficulty[]
    not?: NestedEnumexercise_DifficultyWithAggregatesFilter<$PrismaModel> | $Enums.exercise_Difficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumexercise_DifficultyFilter<$PrismaModel>
    _max?: NestedEnumexercise_DifficultyFilter<$PrismaModel>
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

  export type TopiclanguagedetailListRelationFilter = {
    every?: topiclanguagedetailWhereInput
    some?: topiclanguagedetailWhereInput
    none?: topiclanguagedetailWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type topiclanguagedetailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type languageOrderByRelevanceInput = {
    fields: languageOrderByRelevanceFieldEnum | languageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type languageCountOrderByAggregateInput = {
    LgID?: SortOrder
    Name?: SortOrder
    Logo?: SortOrder
  }

  export type languageAvgOrderByAggregateInput = {
    LgID?: SortOrder
  }

  export type languageMaxOrderByAggregateInput = {
    LgID?: SortOrder
    Name?: SortOrder
    Logo?: SortOrder
  }

  export type languageMinOrderByAggregateInput = {
    LgID?: SortOrder
    Name?: SortOrder
    Logo?: SortOrder
  }

  export type languageSumOrderByAggregateInput = {
    LgID?: SortOrder
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

  export type Enumsubmission_ResultNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.submission_Result | Enumsubmission_ResultFieldRefInput<$PrismaModel> | null
    in?: $Enums.submission_Result[] | null
    notIn?: $Enums.submission_Result[] | null
    not?: NestedEnumsubmission_ResultNullableFilter<$PrismaModel> | $Enums.submission_Result | null
  }

  export type ExerciseScalarRelationFilter = {
    is?: exerciseWhereInput
    isNot?: exerciseWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type TestcaseresultListRelationFilter = {
    every?: testcaseresultWhereInput
    some?: testcaseresultWhereInput
    none?: testcaseresultWhereInput
  }

  export type testcaseresultOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type submissionOrderByRelevanceInput = {
    fields: submissionOrderByRelevanceFieldEnum | submissionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type submissionCountOrderByAggregateInput = {
    SID?: SortOrder
    UID?: SortOrder
    EID?: SortOrder
    Code?: SortOrder
    CreatedAt?: SortOrder
    Result?: SortOrder
  }

  export type submissionAvgOrderByAggregateInput = {
    SID?: SortOrder
    EID?: SortOrder
  }

  export type submissionMaxOrderByAggregateInput = {
    SID?: SortOrder
    UID?: SortOrder
    EID?: SortOrder
    Code?: SortOrder
    CreatedAt?: SortOrder
    Result?: SortOrder
  }

  export type submissionMinOrderByAggregateInput = {
    SID?: SortOrder
    UID?: SortOrder
    EID?: SortOrder
    Code?: SortOrder
    CreatedAt?: SortOrder
    Result?: SortOrder
  }

  export type submissionSumOrderByAggregateInput = {
    SID?: SortOrder
    EID?: SortOrder
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

  export type Enumsubmission_ResultNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.submission_Result | Enumsubmission_ResultFieldRefInput<$PrismaModel> | null
    in?: $Enums.submission_Result[] | null
    notIn?: $Enums.submission_Result[] | null
    not?: NestedEnumsubmission_ResultNullableWithAggregatesFilter<$PrismaModel> | $Enums.submission_Result | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumsubmission_ResultNullableFilter<$PrismaModel>
    _max?: NestedEnumsubmission_ResultNullableFilter<$PrismaModel>
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type testcaseOrderByRelevanceInput = {
    fields: testcaseOrderByRelevanceFieldEnum | testcaseOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type testcaseCountOrderByAggregateInput = {
    TCID?: SortOrder
    EID?: SortOrder
    Input?: SortOrder
    ExpectedOutput?: SortOrder
    isHidden?: SortOrder
  }

  export type testcaseAvgOrderByAggregateInput = {
    TCID?: SortOrder
    EID?: SortOrder
  }

  export type testcaseMaxOrderByAggregateInput = {
    TCID?: SortOrder
    EID?: SortOrder
    Input?: SortOrder
    ExpectedOutput?: SortOrder
    isHidden?: SortOrder
  }

  export type testcaseMinOrderByAggregateInput = {
    TCID?: SortOrder
    EID?: SortOrder
    Input?: SortOrder
    ExpectedOutput?: SortOrder
    isHidden?: SortOrder
  }

  export type testcaseSumOrderByAggregateInput = {
    TCID?: SortOrder
    EID?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type Enumtestcaseresult_ResultNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.testcaseresult_Result | Enumtestcaseresult_ResultFieldRefInput<$PrismaModel> | null
    in?: $Enums.testcaseresult_Result[] | null
    notIn?: $Enums.testcaseresult_Result[] | null
    not?: NestedEnumtestcaseresult_ResultNullableFilter<$PrismaModel> | $Enums.testcaseresult_Result | null
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

  export type SubmissionScalarRelationFilter = {
    is?: submissionWhereInput
    isNot?: submissionWhereInput
  }

  export type TestcaseScalarRelationFilter = {
    is?: testcaseWhereInput
    isNot?: testcaseWhereInput
  }

  export type testcaseresultOrderByRelevanceInput = {
    fields: testcaseresultOrderByRelevanceFieldEnum | testcaseresultOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type testcaseresultCountOrderByAggregateInput = {
    TCRID?: SortOrder
    SID?: SortOrder
    TCID?: SortOrder
    ActualOutput?: SortOrder
    Result?: SortOrder
    ExecutionTime?: SortOrder
  }

  export type testcaseresultAvgOrderByAggregateInput = {
    TCRID?: SortOrder
    SID?: SortOrder
    TCID?: SortOrder
    ExecutionTime?: SortOrder
  }

  export type testcaseresultMaxOrderByAggregateInput = {
    TCRID?: SortOrder
    SID?: SortOrder
    TCID?: SortOrder
    ActualOutput?: SortOrder
    Result?: SortOrder
    ExecutionTime?: SortOrder
  }

  export type testcaseresultMinOrderByAggregateInput = {
    TCRID?: SortOrder
    SID?: SortOrder
    TCID?: SortOrder
    ActualOutput?: SortOrder
    Result?: SortOrder
    ExecutionTime?: SortOrder
  }

  export type testcaseresultSumOrderByAggregateInput = {
    TCRID?: SortOrder
    SID?: SortOrder
    TCID?: SortOrder
    ExecutionTime?: SortOrder
  }

  export type Enumtestcaseresult_ResultNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.testcaseresult_Result | Enumtestcaseresult_ResultFieldRefInput<$PrismaModel> | null
    in?: $Enums.testcaseresult_Result[] | null
    notIn?: $Enums.testcaseresult_Result[] | null
    not?: NestedEnumtestcaseresult_ResultNullableWithAggregatesFilter<$PrismaModel> | $Enums.testcaseresult_Result | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumtestcaseresult_ResultNullableFilter<$PrismaModel>
    _max?: NestedEnumtestcaseresult_ResultNullableFilter<$PrismaModel>
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

  export type topicOrderByRelevanceInput = {
    fields: topicOrderByRelevanceFieldEnum | topicOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type topicCountOrderByAggregateInput = {
    TpID?: SortOrder
    Name?: SortOrder
    Description?: SortOrder
  }

  export type topicAvgOrderByAggregateInput = {
    TpID?: SortOrder
  }

  export type topicMaxOrderByAggregateInput = {
    TpID?: SortOrder
    Name?: SortOrder
    Description?: SortOrder
  }

  export type topicMinOrderByAggregateInput = {
    TpID?: SortOrder
    Name?: SortOrder
    Description?: SortOrder
  }

  export type topicSumOrderByAggregateInput = {
    TpID?: SortOrder
  }

  export type LessonListRelationFilter = {
    every?: lessonWhereInput
    some?: lessonWhereInput
    none?: lessonWhereInput
  }

  export type TopicScalarRelationFilter = {
    is?: topicWhereInput
    isNot?: topicWhereInput
  }

  export type LanguageScalarRelationFilter = {
    is?: languageWhereInput
    isNot?: languageWhereInput
  }

  export type lessonOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type topiclanguagedetailCountOrderByAggregateInput = {
    TLDID?: SortOrder
    TpID?: SortOrder
    LgID?: SortOrder
  }

  export type topiclanguagedetailAvgOrderByAggregateInput = {
    TLDID?: SortOrder
    TpID?: SortOrder
    LgID?: SortOrder
  }

  export type topiclanguagedetailMaxOrderByAggregateInput = {
    TLDID?: SortOrder
    TpID?: SortOrder
    LgID?: SortOrder
  }

  export type topiclanguagedetailMinOrderByAggregateInput = {
    TLDID?: SortOrder
    TpID?: SortOrder
    LgID?: SortOrder
  }

  export type topiclanguagedetailSumOrderByAggregateInput = {
    TLDID?: SortOrder
    TpID?: SortOrder
    LgID?: SortOrder
  }

  export type Enumuser_RoleFilter<$PrismaModel = never> = {
    equals?: $Enums.user_Role | Enumuser_RoleFieldRefInput<$PrismaModel>
    in?: $Enums.user_Role[]
    notIn?: $Enums.user_Role[]
    not?: NestedEnumuser_RoleFilter<$PrismaModel> | $Enums.user_Role
  }

  export type userOrderByRelevanceInput = {
    fields: userOrderByRelevanceFieldEnum | userOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type userCountOrderByAggregateInput = {
    UID?: SortOrder
    Username?: SortOrder
    Email?: SortOrder
    Password?: SortOrder
    Role?: SortOrder
    CreatedAt?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    UID?: SortOrder
    Username?: SortOrder
    Email?: SortOrder
    Password?: SortOrder
    Role?: SortOrder
    CreatedAt?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    UID?: SortOrder
    Username?: SortOrder
    Email?: SortOrder
    Password?: SortOrder
    Role?: SortOrder
    CreatedAt?: SortOrder
  }

  export type Enumuser_RoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_Role | Enumuser_RoleFieldRefInput<$PrismaModel>
    in?: $Enums.user_Role[]
    notIn?: $Enums.user_Role[]
    not?: NestedEnumuser_RoleWithAggregatesFilter<$PrismaModel> | $Enums.user_Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuser_RoleFilter<$PrismaModel>
    _max?: NestedEnumuser_RoleFilter<$PrismaModel>
  }

  export type ExerciseListRelationFilter = {
    every?: exerciseWhereInput
    some?: exerciseWhereInput
    none?: exerciseWhereInput
  }

  export type TopiclanguagedetailScalarRelationFilter = {
    is?: topiclanguagedetailWhereInput
    isNot?: topiclanguagedetailWhereInput
  }

  export type exerciseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type lessonOrderByRelevanceInput = {
    fields: lessonOrderByRelevanceFieldEnum | lessonOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type lessonCountOrderByAggregateInput = {
    LsID?: SortOrder
    TLDID?: SortOrder
    OrderIndex?: SortOrder
    Tittle?: SortOrder
    Content?: SortOrder
  }

  export type lessonAvgOrderByAggregateInput = {
    LsID?: SortOrder
    TLDID?: SortOrder
    OrderIndex?: SortOrder
  }

  export type lessonMaxOrderByAggregateInput = {
    LsID?: SortOrder
    TLDID?: SortOrder
    OrderIndex?: SortOrder
    Tittle?: SortOrder
    Content?: SortOrder
  }

  export type lessonMinOrderByAggregateInput = {
    LsID?: SortOrder
    TLDID?: SortOrder
    OrderIndex?: SortOrder
    Tittle?: SortOrder
    Content?: SortOrder
  }

  export type lessonSumOrderByAggregateInput = {
    LsID?: SortOrder
    TLDID?: SortOrder
    OrderIndex?: SortOrder
  }

  export type lessonCreateNestedOneWithoutExerciseInput = {
    create?: XOR<lessonCreateWithoutExerciseInput, lessonUncheckedCreateWithoutExerciseInput>
    connectOrCreate?: lessonCreateOrConnectWithoutExerciseInput
    connect?: lessonWhereUniqueInput
  }

  export type submissionCreateNestedManyWithoutExerciseInput = {
    create?: XOR<submissionCreateWithoutExerciseInput, submissionUncheckedCreateWithoutExerciseInput> | submissionCreateWithoutExerciseInput[] | submissionUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: submissionCreateOrConnectWithoutExerciseInput | submissionCreateOrConnectWithoutExerciseInput[]
    createMany?: submissionCreateManyExerciseInputEnvelope
    connect?: submissionWhereUniqueInput | submissionWhereUniqueInput[]
  }

  export type testcaseCreateNestedManyWithoutExerciseInput = {
    create?: XOR<testcaseCreateWithoutExerciseInput, testcaseUncheckedCreateWithoutExerciseInput> | testcaseCreateWithoutExerciseInput[] | testcaseUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: testcaseCreateOrConnectWithoutExerciseInput | testcaseCreateOrConnectWithoutExerciseInput[]
    createMany?: testcaseCreateManyExerciseInputEnvelope
    connect?: testcaseWhereUniqueInput | testcaseWhereUniqueInput[]
  }

  export type submissionUncheckedCreateNestedManyWithoutExerciseInput = {
    create?: XOR<submissionCreateWithoutExerciseInput, submissionUncheckedCreateWithoutExerciseInput> | submissionCreateWithoutExerciseInput[] | submissionUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: submissionCreateOrConnectWithoutExerciseInput | submissionCreateOrConnectWithoutExerciseInput[]
    createMany?: submissionCreateManyExerciseInputEnvelope
    connect?: submissionWhereUniqueInput | submissionWhereUniqueInput[]
  }

  export type testcaseUncheckedCreateNestedManyWithoutExerciseInput = {
    create?: XOR<testcaseCreateWithoutExerciseInput, testcaseUncheckedCreateWithoutExerciseInput> | testcaseCreateWithoutExerciseInput[] | testcaseUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: testcaseCreateOrConnectWithoutExerciseInput | testcaseCreateOrConnectWithoutExerciseInput[]
    createMany?: testcaseCreateManyExerciseInputEnvelope
    connect?: testcaseWhereUniqueInput | testcaseWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type Enumexercise_DifficultyFieldUpdateOperationsInput = {
    set?: $Enums.exercise_Difficulty
  }

  export type lessonUpdateOneRequiredWithoutExerciseNestedInput = {
    create?: XOR<lessonCreateWithoutExerciseInput, lessonUncheckedCreateWithoutExerciseInput>
    connectOrCreate?: lessonCreateOrConnectWithoutExerciseInput
    upsert?: lessonUpsertWithoutExerciseInput
    connect?: lessonWhereUniqueInput
    update?: XOR<XOR<lessonUpdateToOneWithWhereWithoutExerciseInput, lessonUpdateWithoutExerciseInput>, lessonUncheckedUpdateWithoutExerciseInput>
  }

  export type submissionUpdateManyWithoutExerciseNestedInput = {
    create?: XOR<submissionCreateWithoutExerciseInput, submissionUncheckedCreateWithoutExerciseInput> | submissionCreateWithoutExerciseInput[] | submissionUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: submissionCreateOrConnectWithoutExerciseInput | submissionCreateOrConnectWithoutExerciseInput[]
    upsert?: submissionUpsertWithWhereUniqueWithoutExerciseInput | submissionUpsertWithWhereUniqueWithoutExerciseInput[]
    createMany?: submissionCreateManyExerciseInputEnvelope
    set?: submissionWhereUniqueInput | submissionWhereUniqueInput[]
    disconnect?: submissionWhereUniqueInput | submissionWhereUniqueInput[]
    delete?: submissionWhereUniqueInput | submissionWhereUniqueInput[]
    connect?: submissionWhereUniqueInput | submissionWhereUniqueInput[]
    update?: submissionUpdateWithWhereUniqueWithoutExerciseInput | submissionUpdateWithWhereUniqueWithoutExerciseInput[]
    updateMany?: submissionUpdateManyWithWhereWithoutExerciseInput | submissionUpdateManyWithWhereWithoutExerciseInput[]
    deleteMany?: submissionScalarWhereInput | submissionScalarWhereInput[]
  }

  export type testcaseUpdateManyWithoutExerciseNestedInput = {
    create?: XOR<testcaseCreateWithoutExerciseInput, testcaseUncheckedCreateWithoutExerciseInput> | testcaseCreateWithoutExerciseInput[] | testcaseUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: testcaseCreateOrConnectWithoutExerciseInput | testcaseCreateOrConnectWithoutExerciseInput[]
    upsert?: testcaseUpsertWithWhereUniqueWithoutExerciseInput | testcaseUpsertWithWhereUniqueWithoutExerciseInput[]
    createMany?: testcaseCreateManyExerciseInputEnvelope
    set?: testcaseWhereUniqueInput | testcaseWhereUniqueInput[]
    disconnect?: testcaseWhereUniqueInput | testcaseWhereUniqueInput[]
    delete?: testcaseWhereUniqueInput | testcaseWhereUniqueInput[]
    connect?: testcaseWhereUniqueInput | testcaseWhereUniqueInput[]
    update?: testcaseUpdateWithWhereUniqueWithoutExerciseInput | testcaseUpdateWithWhereUniqueWithoutExerciseInput[]
    updateMany?: testcaseUpdateManyWithWhereWithoutExerciseInput | testcaseUpdateManyWithWhereWithoutExerciseInput[]
    deleteMany?: testcaseScalarWhereInput | testcaseScalarWhereInput[]
  }

  export type submissionUncheckedUpdateManyWithoutExerciseNestedInput = {
    create?: XOR<submissionCreateWithoutExerciseInput, submissionUncheckedCreateWithoutExerciseInput> | submissionCreateWithoutExerciseInput[] | submissionUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: submissionCreateOrConnectWithoutExerciseInput | submissionCreateOrConnectWithoutExerciseInput[]
    upsert?: submissionUpsertWithWhereUniqueWithoutExerciseInput | submissionUpsertWithWhereUniqueWithoutExerciseInput[]
    createMany?: submissionCreateManyExerciseInputEnvelope
    set?: submissionWhereUniqueInput | submissionWhereUniqueInput[]
    disconnect?: submissionWhereUniqueInput | submissionWhereUniqueInput[]
    delete?: submissionWhereUniqueInput | submissionWhereUniqueInput[]
    connect?: submissionWhereUniqueInput | submissionWhereUniqueInput[]
    update?: submissionUpdateWithWhereUniqueWithoutExerciseInput | submissionUpdateWithWhereUniqueWithoutExerciseInput[]
    updateMany?: submissionUpdateManyWithWhereWithoutExerciseInput | submissionUpdateManyWithWhereWithoutExerciseInput[]
    deleteMany?: submissionScalarWhereInput | submissionScalarWhereInput[]
  }

  export type testcaseUncheckedUpdateManyWithoutExerciseNestedInput = {
    create?: XOR<testcaseCreateWithoutExerciseInput, testcaseUncheckedCreateWithoutExerciseInput> | testcaseCreateWithoutExerciseInput[] | testcaseUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: testcaseCreateOrConnectWithoutExerciseInput | testcaseCreateOrConnectWithoutExerciseInput[]
    upsert?: testcaseUpsertWithWhereUniqueWithoutExerciseInput | testcaseUpsertWithWhereUniqueWithoutExerciseInput[]
    createMany?: testcaseCreateManyExerciseInputEnvelope
    set?: testcaseWhereUniqueInput | testcaseWhereUniqueInput[]
    disconnect?: testcaseWhereUniqueInput | testcaseWhereUniqueInput[]
    delete?: testcaseWhereUniqueInput | testcaseWhereUniqueInput[]
    connect?: testcaseWhereUniqueInput | testcaseWhereUniqueInput[]
    update?: testcaseUpdateWithWhereUniqueWithoutExerciseInput | testcaseUpdateWithWhereUniqueWithoutExerciseInput[]
    updateMany?: testcaseUpdateManyWithWhereWithoutExerciseInput | testcaseUpdateManyWithWhereWithoutExerciseInput[]
    deleteMany?: testcaseScalarWhereInput | testcaseScalarWhereInput[]
  }

  export type topiclanguagedetailCreateNestedManyWithoutLanguageInput = {
    create?: XOR<topiclanguagedetailCreateWithoutLanguageInput, topiclanguagedetailUncheckedCreateWithoutLanguageInput> | topiclanguagedetailCreateWithoutLanguageInput[] | topiclanguagedetailUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?: topiclanguagedetailCreateOrConnectWithoutLanguageInput | topiclanguagedetailCreateOrConnectWithoutLanguageInput[]
    createMany?: topiclanguagedetailCreateManyLanguageInputEnvelope
    connect?: topiclanguagedetailWhereUniqueInput | topiclanguagedetailWhereUniqueInput[]
  }

  export type topiclanguagedetailUncheckedCreateNestedManyWithoutLanguageInput = {
    create?: XOR<topiclanguagedetailCreateWithoutLanguageInput, topiclanguagedetailUncheckedCreateWithoutLanguageInput> | topiclanguagedetailCreateWithoutLanguageInput[] | topiclanguagedetailUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?: topiclanguagedetailCreateOrConnectWithoutLanguageInput | topiclanguagedetailCreateOrConnectWithoutLanguageInput[]
    createMany?: topiclanguagedetailCreateManyLanguageInputEnvelope
    connect?: topiclanguagedetailWhereUniqueInput | topiclanguagedetailWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type topiclanguagedetailUpdateManyWithoutLanguageNestedInput = {
    create?: XOR<topiclanguagedetailCreateWithoutLanguageInput, topiclanguagedetailUncheckedCreateWithoutLanguageInput> | topiclanguagedetailCreateWithoutLanguageInput[] | topiclanguagedetailUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?: topiclanguagedetailCreateOrConnectWithoutLanguageInput | topiclanguagedetailCreateOrConnectWithoutLanguageInput[]
    upsert?: topiclanguagedetailUpsertWithWhereUniqueWithoutLanguageInput | topiclanguagedetailUpsertWithWhereUniqueWithoutLanguageInput[]
    createMany?: topiclanguagedetailCreateManyLanguageInputEnvelope
    set?: topiclanguagedetailWhereUniqueInput | topiclanguagedetailWhereUniqueInput[]
    disconnect?: topiclanguagedetailWhereUniqueInput | topiclanguagedetailWhereUniqueInput[]
    delete?: topiclanguagedetailWhereUniqueInput | topiclanguagedetailWhereUniqueInput[]
    connect?: topiclanguagedetailWhereUniqueInput | topiclanguagedetailWhereUniqueInput[]
    update?: topiclanguagedetailUpdateWithWhereUniqueWithoutLanguageInput | topiclanguagedetailUpdateWithWhereUniqueWithoutLanguageInput[]
    updateMany?: topiclanguagedetailUpdateManyWithWhereWithoutLanguageInput | topiclanguagedetailUpdateManyWithWhereWithoutLanguageInput[]
    deleteMany?: topiclanguagedetailScalarWhereInput | topiclanguagedetailScalarWhereInput[]
  }

  export type topiclanguagedetailUncheckedUpdateManyWithoutLanguageNestedInput = {
    create?: XOR<topiclanguagedetailCreateWithoutLanguageInput, topiclanguagedetailUncheckedCreateWithoutLanguageInput> | topiclanguagedetailCreateWithoutLanguageInput[] | topiclanguagedetailUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?: topiclanguagedetailCreateOrConnectWithoutLanguageInput | topiclanguagedetailCreateOrConnectWithoutLanguageInput[]
    upsert?: topiclanguagedetailUpsertWithWhereUniqueWithoutLanguageInput | topiclanguagedetailUpsertWithWhereUniqueWithoutLanguageInput[]
    createMany?: topiclanguagedetailCreateManyLanguageInputEnvelope
    set?: topiclanguagedetailWhereUniqueInput | topiclanguagedetailWhereUniqueInput[]
    disconnect?: topiclanguagedetailWhereUniqueInput | topiclanguagedetailWhereUniqueInput[]
    delete?: topiclanguagedetailWhereUniqueInput | topiclanguagedetailWhereUniqueInput[]
    connect?: topiclanguagedetailWhereUniqueInput | topiclanguagedetailWhereUniqueInput[]
    update?: topiclanguagedetailUpdateWithWhereUniqueWithoutLanguageInput | topiclanguagedetailUpdateWithWhereUniqueWithoutLanguageInput[]
    updateMany?: topiclanguagedetailUpdateManyWithWhereWithoutLanguageInput | topiclanguagedetailUpdateManyWithWhereWithoutLanguageInput[]
    deleteMany?: topiclanguagedetailScalarWhereInput | topiclanguagedetailScalarWhereInput[]
  }

  export type exerciseCreateNestedOneWithoutSubmissionInput = {
    create?: XOR<exerciseCreateWithoutSubmissionInput, exerciseUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: exerciseCreateOrConnectWithoutSubmissionInput
    connect?: exerciseWhereUniqueInput
  }

  export type userCreateNestedOneWithoutSubmissionInput = {
    create?: XOR<userCreateWithoutSubmissionInput, userUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: userCreateOrConnectWithoutSubmissionInput
    connect?: userWhereUniqueInput
  }

  export type testcaseresultCreateNestedManyWithoutSubmissionInput = {
    create?: XOR<testcaseresultCreateWithoutSubmissionInput, testcaseresultUncheckedCreateWithoutSubmissionInput> | testcaseresultCreateWithoutSubmissionInput[] | testcaseresultUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: testcaseresultCreateOrConnectWithoutSubmissionInput | testcaseresultCreateOrConnectWithoutSubmissionInput[]
    createMany?: testcaseresultCreateManySubmissionInputEnvelope
    connect?: testcaseresultWhereUniqueInput | testcaseresultWhereUniqueInput[]
  }

  export type testcaseresultUncheckedCreateNestedManyWithoutSubmissionInput = {
    create?: XOR<testcaseresultCreateWithoutSubmissionInput, testcaseresultUncheckedCreateWithoutSubmissionInput> | testcaseresultCreateWithoutSubmissionInput[] | testcaseresultUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: testcaseresultCreateOrConnectWithoutSubmissionInput | testcaseresultCreateOrConnectWithoutSubmissionInput[]
    createMany?: testcaseresultCreateManySubmissionInputEnvelope
    connect?: testcaseresultWhereUniqueInput | testcaseresultWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableEnumsubmission_ResultFieldUpdateOperationsInput = {
    set?: $Enums.submission_Result | null
  }

  export type exerciseUpdateOneRequiredWithoutSubmissionNestedInput = {
    create?: XOR<exerciseCreateWithoutSubmissionInput, exerciseUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: exerciseCreateOrConnectWithoutSubmissionInput
    upsert?: exerciseUpsertWithoutSubmissionInput
    connect?: exerciseWhereUniqueInput
    update?: XOR<XOR<exerciseUpdateToOneWithWhereWithoutSubmissionInput, exerciseUpdateWithoutSubmissionInput>, exerciseUncheckedUpdateWithoutSubmissionInput>
  }

  export type userUpdateOneRequiredWithoutSubmissionNestedInput = {
    create?: XOR<userCreateWithoutSubmissionInput, userUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: userCreateOrConnectWithoutSubmissionInput
    upsert?: userUpsertWithoutSubmissionInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutSubmissionInput, userUpdateWithoutSubmissionInput>, userUncheckedUpdateWithoutSubmissionInput>
  }

  export type testcaseresultUpdateManyWithoutSubmissionNestedInput = {
    create?: XOR<testcaseresultCreateWithoutSubmissionInput, testcaseresultUncheckedCreateWithoutSubmissionInput> | testcaseresultCreateWithoutSubmissionInput[] | testcaseresultUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: testcaseresultCreateOrConnectWithoutSubmissionInput | testcaseresultCreateOrConnectWithoutSubmissionInput[]
    upsert?: testcaseresultUpsertWithWhereUniqueWithoutSubmissionInput | testcaseresultUpsertWithWhereUniqueWithoutSubmissionInput[]
    createMany?: testcaseresultCreateManySubmissionInputEnvelope
    set?: testcaseresultWhereUniqueInput | testcaseresultWhereUniqueInput[]
    disconnect?: testcaseresultWhereUniqueInput | testcaseresultWhereUniqueInput[]
    delete?: testcaseresultWhereUniqueInput | testcaseresultWhereUniqueInput[]
    connect?: testcaseresultWhereUniqueInput | testcaseresultWhereUniqueInput[]
    update?: testcaseresultUpdateWithWhereUniqueWithoutSubmissionInput | testcaseresultUpdateWithWhereUniqueWithoutSubmissionInput[]
    updateMany?: testcaseresultUpdateManyWithWhereWithoutSubmissionInput | testcaseresultUpdateManyWithWhereWithoutSubmissionInput[]
    deleteMany?: testcaseresultScalarWhereInput | testcaseresultScalarWhereInput[]
  }

  export type testcaseresultUncheckedUpdateManyWithoutSubmissionNestedInput = {
    create?: XOR<testcaseresultCreateWithoutSubmissionInput, testcaseresultUncheckedCreateWithoutSubmissionInput> | testcaseresultCreateWithoutSubmissionInput[] | testcaseresultUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: testcaseresultCreateOrConnectWithoutSubmissionInput | testcaseresultCreateOrConnectWithoutSubmissionInput[]
    upsert?: testcaseresultUpsertWithWhereUniqueWithoutSubmissionInput | testcaseresultUpsertWithWhereUniqueWithoutSubmissionInput[]
    createMany?: testcaseresultCreateManySubmissionInputEnvelope
    set?: testcaseresultWhereUniqueInput | testcaseresultWhereUniqueInput[]
    disconnect?: testcaseresultWhereUniqueInput | testcaseresultWhereUniqueInput[]
    delete?: testcaseresultWhereUniqueInput | testcaseresultWhereUniqueInput[]
    connect?: testcaseresultWhereUniqueInput | testcaseresultWhereUniqueInput[]
    update?: testcaseresultUpdateWithWhereUniqueWithoutSubmissionInput | testcaseresultUpdateWithWhereUniqueWithoutSubmissionInput[]
    updateMany?: testcaseresultUpdateManyWithWhereWithoutSubmissionInput | testcaseresultUpdateManyWithWhereWithoutSubmissionInput[]
    deleteMany?: testcaseresultScalarWhereInput | testcaseresultScalarWhereInput[]
  }

  export type exerciseCreateNestedOneWithoutTestcaseInput = {
    create?: XOR<exerciseCreateWithoutTestcaseInput, exerciseUncheckedCreateWithoutTestcaseInput>
    connectOrCreate?: exerciseCreateOrConnectWithoutTestcaseInput
    connect?: exerciseWhereUniqueInput
  }

  export type testcaseresultCreateNestedManyWithoutTestcaseInput = {
    create?: XOR<testcaseresultCreateWithoutTestcaseInput, testcaseresultUncheckedCreateWithoutTestcaseInput> | testcaseresultCreateWithoutTestcaseInput[] | testcaseresultUncheckedCreateWithoutTestcaseInput[]
    connectOrCreate?: testcaseresultCreateOrConnectWithoutTestcaseInput | testcaseresultCreateOrConnectWithoutTestcaseInput[]
    createMany?: testcaseresultCreateManyTestcaseInputEnvelope
    connect?: testcaseresultWhereUniqueInput | testcaseresultWhereUniqueInput[]
  }

  export type testcaseresultUncheckedCreateNestedManyWithoutTestcaseInput = {
    create?: XOR<testcaseresultCreateWithoutTestcaseInput, testcaseresultUncheckedCreateWithoutTestcaseInput> | testcaseresultCreateWithoutTestcaseInput[] | testcaseresultUncheckedCreateWithoutTestcaseInput[]
    connectOrCreate?: testcaseresultCreateOrConnectWithoutTestcaseInput | testcaseresultCreateOrConnectWithoutTestcaseInput[]
    createMany?: testcaseresultCreateManyTestcaseInputEnvelope
    connect?: testcaseresultWhereUniqueInput | testcaseresultWhereUniqueInput[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type exerciseUpdateOneRequiredWithoutTestcaseNestedInput = {
    create?: XOR<exerciseCreateWithoutTestcaseInput, exerciseUncheckedCreateWithoutTestcaseInput>
    connectOrCreate?: exerciseCreateOrConnectWithoutTestcaseInput
    upsert?: exerciseUpsertWithoutTestcaseInput
    connect?: exerciseWhereUniqueInput
    update?: XOR<XOR<exerciseUpdateToOneWithWhereWithoutTestcaseInput, exerciseUpdateWithoutTestcaseInput>, exerciseUncheckedUpdateWithoutTestcaseInput>
  }

  export type testcaseresultUpdateManyWithoutTestcaseNestedInput = {
    create?: XOR<testcaseresultCreateWithoutTestcaseInput, testcaseresultUncheckedCreateWithoutTestcaseInput> | testcaseresultCreateWithoutTestcaseInput[] | testcaseresultUncheckedCreateWithoutTestcaseInput[]
    connectOrCreate?: testcaseresultCreateOrConnectWithoutTestcaseInput | testcaseresultCreateOrConnectWithoutTestcaseInput[]
    upsert?: testcaseresultUpsertWithWhereUniqueWithoutTestcaseInput | testcaseresultUpsertWithWhereUniqueWithoutTestcaseInput[]
    createMany?: testcaseresultCreateManyTestcaseInputEnvelope
    set?: testcaseresultWhereUniqueInput | testcaseresultWhereUniqueInput[]
    disconnect?: testcaseresultWhereUniqueInput | testcaseresultWhereUniqueInput[]
    delete?: testcaseresultWhereUniqueInput | testcaseresultWhereUniqueInput[]
    connect?: testcaseresultWhereUniqueInput | testcaseresultWhereUniqueInput[]
    update?: testcaseresultUpdateWithWhereUniqueWithoutTestcaseInput | testcaseresultUpdateWithWhereUniqueWithoutTestcaseInput[]
    updateMany?: testcaseresultUpdateManyWithWhereWithoutTestcaseInput | testcaseresultUpdateManyWithWhereWithoutTestcaseInput[]
    deleteMany?: testcaseresultScalarWhereInput | testcaseresultScalarWhereInput[]
  }

  export type testcaseresultUncheckedUpdateManyWithoutTestcaseNestedInput = {
    create?: XOR<testcaseresultCreateWithoutTestcaseInput, testcaseresultUncheckedCreateWithoutTestcaseInput> | testcaseresultCreateWithoutTestcaseInput[] | testcaseresultUncheckedCreateWithoutTestcaseInput[]
    connectOrCreate?: testcaseresultCreateOrConnectWithoutTestcaseInput | testcaseresultCreateOrConnectWithoutTestcaseInput[]
    upsert?: testcaseresultUpsertWithWhereUniqueWithoutTestcaseInput | testcaseresultUpsertWithWhereUniqueWithoutTestcaseInput[]
    createMany?: testcaseresultCreateManyTestcaseInputEnvelope
    set?: testcaseresultWhereUniqueInput | testcaseresultWhereUniqueInput[]
    disconnect?: testcaseresultWhereUniqueInput | testcaseresultWhereUniqueInput[]
    delete?: testcaseresultWhereUniqueInput | testcaseresultWhereUniqueInput[]
    connect?: testcaseresultWhereUniqueInput | testcaseresultWhereUniqueInput[]
    update?: testcaseresultUpdateWithWhereUniqueWithoutTestcaseInput | testcaseresultUpdateWithWhereUniqueWithoutTestcaseInput[]
    updateMany?: testcaseresultUpdateManyWithWhereWithoutTestcaseInput | testcaseresultUpdateManyWithWhereWithoutTestcaseInput[]
    deleteMany?: testcaseresultScalarWhereInput | testcaseresultScalarWhereInput[]
  }

  export type submissionCreateNestedOneWithoutTestcaseresultInput = {
    create?: XOR<submissionCreateWithoutTestcaseresultInput, submissionUncheckedCreateWithoutTestcaseresultInput>
    connectOrCreate?: submissionCreateOrConnectWithoutTestcaseresultInput
    connect?: submissionWhereUniqueInput
  }

  export type testcaseCreateNestedOneWithoutTestcaseresultInput = {
    create?: XOR<testcaseCreateWithoutTestcaseresultInput, testcaseUncheckedCreateWithoutTestcaseresultInput>
    connectOrCreate?: testcaseCreateOrConnectWithoutTestcaseresultInput
    connect?: testcaseWhereUniqueInput
  }

  export type NullableEnumtestcaseresult_ResultFieldUpdateOperationsInput = {
    set?: $Enums.testcaseresult_Result | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type submissionUpdateOneRequiredWithoutTestcaseresultNestedInput = {
    create?: XOR<submissionCreateWithoutTestcaseresultInput, submissionUncheckedCreateWithoutTestcaseresultInput>
    connectOrCreate?: submissionCreateOrConnectWithoutTestcaseresultInput
    upsert?: submissionUpsertWithoutTestcaseresultInput
    connect?: submissionWhereUniqueInput
    update?: XOR<XOR<submissionUpdateToOneWithWhereWithoutTestcaseresultInput, submissionUpdateWithoutTestcaseresultInput>, submissionUncheckedUpdateWithoutTestcaseresultInput>
  }

  export type testcaseUpdateOneRequiredWithoutTestcaseresultNestedInput = {
    create?: XOR<testcaseCreateWithoutTestcaseresultInput, testcaseUncheckedCreateWithoutTestcaseresultInput>
    connectOrCreate?: testcaseCreateOrConnectWithoutTestcaseresultInput
    upsert?: testcaseUpsertWithoutTestcaseresultInput
    connect?: testcaseWhereUniqueInput
    update?: XOR<XOR<testcaseUpdateToOneWithWhereWithoutTestcaseresultInput, testcaseUpdateWithoutTestcaseresultInput>, testcaseUncheckedUpdateWithoutTestcaseresultInput>
  }

  export type topiclanguagedetailCreateNestedManyWithoutTopicInput = {
    create?: XOR<topiclanguagedetailCreateWithoutTopicInput, topiclanguagedetailUncheckedCreateWithoutTopicInput> | topiclanguagedetailCreateWithoutTopicInput[] | topiclanguagedetailUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: topiclanguagedetailCreateOrConnectWithoutTopicInput | topiclanguagedetailCreateOrConnectWithoutTopicInput[]
    createMany?: topiclanguagedetailCreateManyTopicInputEnvelope
    connect?: topiclanguagedetailWhereUniqueInput | topiclanguagedetailWhereUniqueInput[]
  }

  export type topiclanguagedetailUncheckedCreateNestedManyWithoutTopicInput = {
    create?: XOR<topiclanguagedetailCreateWithoutTopicInput, topiclanguagedetailUncheckedCreateWithoutTopicInput> | topiclanguagedetailCreateWithoutTopicInput[] | topiclanguagedetailUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: topiclanguagedetailCreateOrConnectWithoutTopicInput | topiclanguagedetailCreateOrConnectWithoutTopicInput[]
    createMany?: topiclanguagedetailCreateManyTopicInputEnvelope
    connect?: topiclanguagedetailWhereUniqueInput | topiclanguagedetailWhereUniqueInput[]
  }

  export type topiclanguagedetailUpdateManyWithoutTopicNestedInput = {
    create?: XOR<topiclanguagedetailCreateWithoutTopicInput, topiclanguagedetailUncheckedCreateWithoutTopicInput> | topiclanguagedetailCreateWithoutTopicInput[] | topiclanguagedetailUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: topiclanguagedetailCreateOrConnectWithoutTopicInput | topiclanguagedetailCreateOrConnectWithoutTopicInput[]
    upsert?: topiclanguagedetailUpsertWithWhereUniqueWithoutTopicInput | topiclanguagedetailUpsertWithWhereUniqueWithoutTopicInput[]
    createMany?: topiclanguagedetailCreateManyTopicInputEnvelope
    set?: topiclanguagedetailWhereUniqueInput | topiclanguagedetailWhereUniqueInput[]
    disconnect?: topiclanguagedetailWhereUniqueInput | topiclanguagedetailWhereUniqueInput[]
    delete?: topiclanguagedetailWhereUniqueInput | topiclanguagedetailWhereUniqueInput[]
    connect?: topiclanguagedetailWhereUniqueInput | topiclanguagedetailWhereUniqueInput[]
    update?: topiclanguagedetailUpdateWithWhereUniqueWithoutTopicInput | topiclanguagedetailUpdateWithWhereUniqueWithoutTopicInput[]
    updateMany?: topiclanguagedetailUpdateManyWithWhereWithoutTopicInput | topiclanguagedetailUpdateManyWithWhereWithoutTopicInput[]
    deleteMany?: topiclanguagedetailScalarWhereInput | topiclanguagedetailScalarWhereInput[]
  }

  export type topiclanguagedetailUncheckedUpdateManyWithoutTopicNestedInput = {
    create?: XOR<topiclanguagedetailCreateWithoutTopicInput, topiclanguagedetailUncheckedCreateWithoutTopicInput> | topiclanguagedetailCreateWithoutTopicInput[] | topiclanguagedetailUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: topiclanguagedetailCreateOrConnectWithoutTopicInput | topiclanguagedetailCreateOrConnectWithoutTopicInput[]
    upsert?: topiclanguagedetailUpsertWithWhereUniqueWithoutTopicInput | topiclanguagedetailUpsertWithWhereUniqueWithoutTopicInput[]
    createMany?: topiclanguagedetailCreateManyTopicInputEnvelope
    set?: topiclanguagedetailWhereUniqueInput | topiclanguagedetailWhereUniqueInput[]
    disconnect?: topiclanguagedetailWhereUniqueInput | topiclanguagedetailWhereUniqueInput[]
    delete?: topiclanguagedetailWhereUniqueInput | topiclanguagedetailWhereUniqueInput[]
    connect?: topiclanguagedetailWhereUniqueInput | topiclanguagedetailWhereUniqueInput[]
    update?: topiclanguagedetailUpdateWithWhereUniqueWithoutTopicInput | topiclanguagedetailUpdateWithWhereUniqueWithoutTopicInput[]
    updateMany?: topiclanguagedetailUpdateManyWithWhereWithoutTopicInput | topiclanguagedetailUpdateManyWithWhereWithoutTopicInput[]
    deleteMany?: topiclanguagedetailScalarWhereInput | topiclanguagedetailScalarWhereInput[]
  }

  export type lessonCreateNestedManyWithoutTopiclanguagedetailInput = {
    create?: XOR<lessonCreateWithoutTopiclanguagedetailInput, lessonUncheckedCreateWithoutTopiclanguagedetailInput> | lessonCreateWithoutTopiclanguagedetailInput[] | lessonUncheckedCreateWithoutTopiclanguagedetailInput[]
    connectOrCreate?: lessonCreateOrConnectWithoutTopiclanguagedetailInput | lessonCreateOrConnectWithoutTopiclanguagedetailInput[]
    createMany?: lessonCreateManyTopiclanguagedetailInputEnvelope
    connect?: lessonWhereUniqueInput | lessonWhereUniqueInput[]
  }

  export type topicCreateNestedOneWithoutTopiclanguagedetailInput = {
    create?: XOR<topicCreateWithoutTopiclanguagedetailInput, topicUncheckedCreateWithoutTopiclanguagedetailInput>
    connectOrCreate?: topicCreateOrConnectWithoutTopiclanguagedetailInput
    connect?: topicWhereUniqueInput
  }

  export type languageCreateNestedOneWithoutTopiclanguagedetailInput = {
    create?: XOR<languageCreateWithoutTopiclanguagedetailInput, languageUncheckedCreateWithoutTopiclanguagedetailInput>
    connectOrCreate?: languageCreateOrConnectWithoutTopiclanguagedetailInput
    connect?: languageWhereUniqueInput
  }

  export type lessonUncheckedCreateNestedManyWithoutTopiclanguagedetailInput = {
    create?: XOR<lessonCreateWithoutTopiclanguagedetailInput, lessonUncheckedCreateWithoutTopiclanguagedetailInput> | lessonCreateWithoutTopiclanguagedetailInput[] | lessonUncheckedCreateWithoutTopiclanguagedetailInput[]
    connectOrCreate?: lessonCreateOrConnectWithoutTopiclanguagedetailInput | lessonCreateOrConnectWithoutTopiclanguagedetailInput[]
    createMany?: lessonCreateManyTopiclanguagedetailInputEnvelope
    connect?: lessonWhereUniqueInput | lessonWhereUniqueInput[]
  }

  export type lessonUpdateManyWithoutTopiclanguagedetailNestedInput = {
    create?: XOR<lessonCreateWithoutTopiclanguagedetailInput, lessonUncheckedCreateWithoutTopiclanguagedetailInput> | lessonCreateWithoutTopiclanguagedetailInput[] | lessonUncheckedCreateWithoutTopiclanguagedetailInput[]
    connectOrCreate?: lessonCreateOrConnectWithoutTopiclanguagedetailInput | lessonCreateOrConnectWithoutTopiclanguagedetailInput[]
    upsert?: lessonUpsertWithWhereUniqueWithoutTopiclanguagedetailInput | lessonUpsertWithWhereUniqueWithoutTopiclanguagedetailInput[]
    createMany?: lessonCreateManyTopiclanguagedetailInputEnvelope
    set?: lessonWhereUniqueInput | lessonWhereUniqueInput[]
    disconnect?: lessonWhereUniqueInput | lessonWhereUniqueInput[]
    delete?: lessonWhereUniqueInput | lessonWhereUniqueInput[]
    connect?: lessonWhereUniqueInput | lessonWhereUniqueInput[]
    update?: lessonUpdateWithWhereUniqueWithoutTopiclanguagedetailInput | lessonUpdateWithWhereUniqueWithoutTopiclanguagedetailInput[]
    updateMany?: lessonUpdateManyWithWhereWithoutTopiclanguagedetailInput | lessonUpdateManyWithWhereWithoutTopiclanguagedetailInput[]
    deleteMany?: lessonScalarWhereInput | lessonScalarWhereInput[]
  }

  export type topicUpdateOneRequiredWithoutTopiclanguagedetailNestedInput = {
    create?: XOR<topicCreateWithoutTopiclanguagedetailInput, topicUncheckedCreateWithoutTopiclanguagedetailInput>
    connectOrCreate?: topicCreateOrConnectWithoutTopiclanguagedetailInput
    upsert?: topicUpsertWithoutTopiclanguagedetailInput
    connect?: topicWhereUniqueInput
    update?: XOR<XOR<topicUpdateToOneWithWhereWithoutTopiclanguagedetailInput, topicUpdateWithoutTopiclanguagedetailInput>, topicUncheckedUpdateWithoutTopiclanguagedetailInput>
  }

  export type languageUpdateOneRequiredWithoutTopiclanguagedetailNestedInput = {
    create?: XOR<languageCreateWithoutTopiclanguagedetailInput, languageUncheckedCreateWithoutTopiclanguagedetailInput>
    connectOrCreate?: languageCreateOrConnectWithoutTopiclanguagedetailInput
    upsert?: languageUpsertWithoutTopiclanguagedetailInput
    connect?: languageWhereUniqueInput
    update?: XOR<XOR<languageUpdateToOneWithWhereWithoutTopiclanguagedetailInput, languageUpdateWithoutTopiclanguagedetailInput>, languageUncheckedUpdateWithoutTopiclanguagedetailInput>
  }

  export type lessonUncheckedUpdateManyWithoutTopiclanguagedetailNestedInput = {
    create?: XOR<lessonCreateWithoutTopiclanguagedetailInput, lessonUncheckedCreateWithoutTopiclanguagedetailInput> | lessonCreateWithoutTopiclanguagedetailInput[] | lessonUncheckedCreateWithoutTopiclanguagedetailInput[]
    connectOrCreate?: lessonCreateOrConnectWithoutTopiclanguagedetailInput | lessonCreateOrConnectWithoutTopiclanguagedetailInput[]
    upsert?: lessonUpsertWithWhereUniqueWithoutTopiclanguagedetailInput | lessonUpsertWithWhereUniqueWithoutTopiclanguagedetailInput[]
    createMany?: lessonCreateManyTopiclanguagedetailInputEnvelope
    set?: lessonWhereUniqueInput | lessonWhereUniqueInput[]
    disconnect?: lessonWhereUniqueInput | lessonWhereUniqueInput[]
    delete?: lessonWhereUniqueInput | lessonWhereUniqueInput[]
    connect?: lessonWhereUniqueInput | lessonWhereUniqueInput[]
    update?: lessonUpdateWithWhereUniqueWithoutTopiclanguagedetailInput | lessonUpdateWithWhereUniqueWithoutTopiclanguagedetailInput[]
    updateMany?: lessonUpdateManyWithWhereWithoutTopiclanguagedetailInput | lessonUpdateManyWithWhereWithoutTopiclanguagedetailInput[]
    deleteMany?: lessonScalarWhereInput | lessonScalarWhereInput[]
  }

  export type submissionCreateNestedManyWithoutUserInput = {
    create?: XOR<submissionCreateWithoutUserInput, submissionUncheckedCreateWithoutUserInput> | submissionCreateWithoutUserInput[] | submissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: submissionCreateOrConnectWithoutUserInput | submissionCreateOrConnectWithoutUserInput[]
    createMany?: submissionCreateManyUserInputEnvelope
    connect?: submissionWhereUniqueInput | submissionWhereUniqueInput[]
  }

  export type submissionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<submissionCreateWithoutUserInput, submissionUncheckedCreateWithoutUserInput> | submissionCreateWithoutUserInput[] | submissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: submissionCreateOrConnectWithoutUserInput | submissionCreateOrConnectWithoutUserInput[]
    createMany?: submissionCreateManyUserInputEnvelope
    connect?: submissionWhereUniqueInput | submissionWhereUniqueInput[]
  }

  export type Enumuser_RoleFieldUpdateOperationsInput = {
    set?: $Enums.user_Role
  }

  export type submissionUpdateManyWithoutUserNestedInput = {
    create?: XOR<submissionCreateWithoutUserInput, submissionUncheckedCreateWithoutUserInput> | submissionCreateWithoutUserInput[] | submissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: submissionCreateOrConnectWithoutUserInput | submissionCreateOrConnectWithoutUserInput[]
    upsert?: submissionUpsertWithWhereUniqueWithoutUserInput | submissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: submissionCreateManyUserInputEnvelope
    set?: submissionWhereUniqueInput | submissionWhereUniqueInput[]
    disconnect?: submissionWhereUniqueInput | submissionWhereUniqueInput[]
    delete?: submissionWhereUniqueInput | submissionWhereUniqueInput[]
    connect?: submissionWhereUniqueInput | submissionWhereUniqueInput[]
    update?: submissionUpdateWithWhereUniqueWithoutUserInput | submissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: submissionUpdateManyWithWhereWithoutUserInput | submissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: submissionScalarWhereInput | submissionScalarWhereInput[]
  }

  export type submissionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<submissionCreateWithoutUserInput, submissionUncheckedCreateWithoutUserInput> | submissionCreateWithoutUserInput[] | submissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: submissionCreateOrConnectWithoutUserInput | submissionCreateOrConnectWithoutUserInput[]
    upsert?: submissionUpsertWithWhereUniqueWithoutUserInput | submissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: submissionCreateManyUserInputEnvelope
    set?: submissionWhereUniqueInput | submissionWhereUniqueInput[]
    disconnect?: submissionWhereUniqueInput | submissionWhereUniqueInput[]
    delete?: submissionWhereUniqueInput | submissionWhereUniqueInput[]
    connect?: submissionWhereUniqueInput | submissionWhereUniqueInput[]
    update?: submissionUpdateWithWhereUniqueWithoutUserInput | submissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: submissionUpdateManyWithWhereWithoutUserInput | submissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: submissionScalarWhereInput | submissionScalarWhereInput[]
  }

  export type exerciseCreateNestedManyWithoutLessionInput = {
    create?: XOR<exerciseCreateWithoutLessionInput, exerciseUncheckedCreateWithoutLessionInput> | exerciseCreateWithoutLessionInput[] | exerciseUncheckedCreateWithoutLessionInput[]
    connectOrCreate?: exerciseCreateOrConnectWithoutLessionInput | exerciseCreateOrConnectWithoutLessionInput[]
    createMany?: exerciseCreateManyLessionInputEnvelope
    connect?: exerciseWhereUniqueInput | exerciseWhereUniqueInput[]
  }

  export type topiclanguagedetailCreateNestedOneWithoutLessonInput = {
    create?: XOR<topiclanguagedetailCreateWithoutLessonInput, topiclanguagedetailUncheckedCreateWithoutLessonInput>
    connectOrCreate?: topiclanguagedetailCreateOrConnectWithoutLessonInput
    connect?: topiclanguagedetailWhereUniqueInput
  }

  export type exerciseUncheckedCreateNestedManyWithoutLessionInput = {
    create?: XOR<exerciseCreateWithoutLessionInput, exerciseUncheckedCreateWithoutLessionInput> | exerciseCreateWithoutLessionInput[] | exerciseUncheckedCreateWithoutLessionInput[]
    connectOrCreate?: exerciseCreateOrConnectWithoutLessionInput | exerciseCreateOrConnectWithoutLessionInput[]
    createMany?: exerciseCreateManyLessionInputEnvelope
    connect?: exerciseWhereUniqueInput | exerciseWhereUniqueInput[]
  }

  export type exerciseUpdateManyWithoutLessionNestedInput = {
    create?: XOR<exerciseCreateWithoutLessionInput, exerciseUncheckedCreateWithoutLessionInput> | exerciseCreateWithoutLessionInput[] | exerciseUncheckedCreateWithoutLessionInput[]
    connectOrCreate?: exerciseCreateOrConnectWithoutLessionInput | exerciseCreateOrConnectWithoutLessionInput[]
    upsert?: exerciseUpsertWithWhereUniqueWithoutLessionInput | exerciseUpsertWithWhereUniqueWithoutLessionInput[]
    createMany?: exerciseCreateManyLessionInputEnvelope
    set?: exerciseWhereUniqueInput | exerciseWhereUniqueInput[]
    disconnect?: exerciseWhereUniqueInput | exerciseWhereUniqueInput[]
    delete?: exerciseWhereUniqueInput | exerciseWhereUniqueInput[]
    connect?: exerciseWhereUniqueInput | exerciseWhereUniqueInput[]
    update?: exerciseUpdateWithWhereUniqueWithoutLessionInput | exerciseUpdateWithWhereUniqueWithoutLessionInput[]
    updateMany?: exerciseUpdateManyWithWhereWithoutLessionInput | exerciseUpdateManyWithWhereWithoutLessionInput[]
    deleteMany?: exerciseScalarWhereInput | exerciseScalarWhereInput[]
  }

  export type topiclanguagedetailUpdateOneRequiredWithoutLessonNestedInput = {
    create?: XOR<topiclanguagedetailCreateWithoutLessonInput, topiclanguagedetailUncheckedCreateWithoutLessonInput>
    connectOrCreate?: topiclanguagedetailCreateOrConnectWithoutLessonInput
    upsert?: topiclanguagedetailUpsertWithoutLessonInput
    connect?: topiclanguagedetailWhereUniqueInput
    update?: XOR<XOR<topiclanguagedetailUpdateToOneWithWhereWithoutLessonInput, topiclanguagedetailUpdateWithoutLessonInput>, topiclanguagedetailUncheckedUpdateWithoutLessonInput>
  }

  export type exerciseUncheckedUpdateManyWithoutLessionNestedInput = {
    create?: XOR<exerciseCreateWithoutLessionInput, exerciseUncheckedCreateWithoutLessionInput> | exerciseCreateWithoutLessionInput[] | exerciseUncheckedCreateWithoutLessionInput[]
    connectOrCreate?: exerciseCreateOrConnectWithoutLessionInput | exerciseCreateOrConnectWithoutLessionInput[]
    upsert?: exerciseUpsertWithWhereUniqueWithoutLessionInput | exerciseUpsertWithWhereUniqueWithoutLessionInput[]
    createMany?: exerciseCreateManyLessionInputEnvelope
    set?: exerciseWhereUniqueInput | exerciseWhereUniqueInput[]
    disconnect?: exerciseWhereUniqueInput | exerciseWhereUniqueInput[]
    delete?: exerciseWhereUniqueInput | exerciseWhereUniqueInput[]
    connect?: exerciseWhereUniqueInput | exerciseWhereUniqueInput[]
    update?: exerciseUpdateWithWhereUniqueWithoutLessionInput | exerciseUpdateWithWhereUniqueWithoutLessionInput[]
    updateMany?: exerciseUpdateManyWithWhereWithoutLessionInput | exerciseUpdateManyWithWhereWithoutLessionInput[]
    deleteMany?: exerciseScalarWhereInput | exerciseScalarWhereInput[]
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

  export type NestedEnumexercise_DifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.exercise_Difficulty | Enumexercise_DifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.exercise_Difficulty[]
    notIn?: $Enums.exercise_Difficulty[]
    not?: NestedEnumexercise_DifficultyFilter<$PrismaModel> | $Enums.exercise_Difficulty
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type NestedEnumexercise_DifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.exercise_Difficulty | Enumexercise_DifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.exercise_Difficulty[]
    notIn?: $Enums.exercise_Difficulty[]
    not?: NestedEnumexercise_DifficultyWithAggregatesFilter<$PrismaModel> | $Enums.exercise_Difficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumexercise_DifficultyFilter<$PrismaModel>
    _max?: NestedEnumexercise_DifficultyFilter<$PrismaModel>
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

  export type NestedEnumsubmission_ResultNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.submission_Result | Enumsubmission_ResultFieldRefInput<$PrismaModel> | null
    in?: $Enums.submission_Result[] | null
    notIn?: $Enums.submission_Result[] | null
    not?: NestedEnumsubmission_ResultNullableFilter<$PrismaModel> | $Enums.submission_Result | null
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

  export type NestedEnumsubmission_ResultNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.submission_Result | Enumsubmission_ResultFieldRefInput<$PrismaModel> | null
    in?: $Enums.submission_Result[] | null
    notIn?: $Enums.submission_Result[] | null
    not?: NestedEnumsubmission_ResultNullableWithAggregatesFilter<$PrismaModel> | $Enums.submission_Result | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumsubmission_ResultNullableFilter<$PrismaModel>
    _max?: NestedEnumsubmission_ResultNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedEnumtestcaseresult_ResultNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.testcaseresult_Result | Enumtestcaseresult_ResultFieldRefInput<$PrismaModel> | null
    in?: $Enums.testcaseresult_Result[] | null
    notIn?: $Enums.testcaseresult_Result[] | null
    not?: NestedEnumtestcaseresult_ResultNullableFilter<$PrismaModel> | $Enums.testcaseresult_Result | null
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

  export type NestedEnumtestcaseresult_ResultNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.testcaseresult_Result | Enumtestcaseresult_ResultFieldRefInput<$PrismaModel> | null
    in?: $Enums.testcaseresult_Result[] | null
    notIn?: $Enums.testcaseresult_Result[] | null
    not?: NestedEnumtestcaseresult_ResultNullableWithAggregatesFilter<$PrismaModel> | $Enums.testcaseresult_Result | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumtestcaseresult_ResultNullableFilter<$PrismaModel>
    _max?: NestedEnumtestcaseresult_ResultNullableFilter<$PrismaModel>
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

  export type NestedEnumuser_RoleFilter<$PrismaModel = never> = {
    equals?: $Enums.user_Role | Enumuser_RoleFieldRefInput<$PrismaModel>
    in?: $Enums.user_Role[]
    notIn?: $Enums.user_Role[]
    not?: NestedEnumuser_RoleFilter<$PrismaModel> | $Enums.user_Role
  }

  export type NestedEnumuser_RoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_Role | Enumuser_RoleFieldRefInput<$PrismaModel>
    in?: $Enums.user_Role[]
    notIn?: $Enums.user_Role[]
    not?: NestedEnumuser_RoleWithAggregatesFilter<$PrismaModel> | $Enums.user_Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuser_RoleFilter<$PrismaModel>
    _max?: NestedEnumuser_RoleFilter<$PrismaModel>
  }

  export type lessonCreateWithoutExerciseInput = {
    OrderIndex: number
    Tittle: string
    Content: string
    topiclanguagedetail: topiclanguagedetailCreateNestedOneWithoutLessonInput
  }

  export type lessonUncheckedCreateWithoutExerciseInput = {
    LsID?: number
    TLDID: number
    OrderIndex: number
    Tittle: string
    Content: string
  }

  export type lessonCreateOrConnectWithoutExerciseInput = {
    where: lessonWhereUniqueInput
    create: XOR<lessonCreateWithoutExerciseInput, lessonUncheckedCreateWithoutExerciseInput>
  }

  export type submissionCreateWithoutExerciseInput = {
    Code?: string | null
    CreatedAt?: Date | string | null
    Result?: $Enums.submission_Result | null
    user: userCreateNestedOneWithoutSubmissionInput
    testcaseresult?: testcaseresultCreateNestedManyWithoutSubmissionInput
  }

  export type submissionUncheckedCreateWithoutExerciseInput = {
    SID?: number
    UID: string
    Code?: string | null
    CreatedAt?: Date | string | null
    Result?: $Enums.submission_Result | null
    testcaseresult?: testcaseresultUncheckedCreateNestedManyWithoutSubmissionInput
  }

  export type submissionCreateOrConnectWithoutExerciseInput = {
    where: submissionWhereUniqueInput
    create: XOR<submissionCreateWithoutExerciseInput, submissionUncheckedCreateWithoutExerciseInput>
  }

  export type submissionCreateManyExerciseInputEnvelope = {
    data: submissionCreateManyExerciseInput | submissionCreateManyExerciseInput[]
    skipDuplicates?: boolean
  }

  export type testcaseCreateWithoutExerciseInput = {
    Input: string
    ExpectedOutput: string
    isHidden?: boolean | null
    testcaseresult?: testcaseresultCreateNestedManyWithoutTestcaseInput
  }

  export type testcaseUncheckedCreateWithoutExerciseInput = {
    TCID?: number
    Input: string
    ExpectedOutput: string
    isHidden?: boolean | null
    testcaseresult?: testcaseresultUncheckedCreateNestedManyWithoutTestcaseInput
  }

  export type testcaseCreateOrConnectWithoutExerciseInput = {
    where: testcaseWhereUniqueInput
    create: XOR<testcaseCreateWithoutExerciseInput, testcaseUncheckedCreateWithoutExerciseInput>
  }

  export type testcaseCreateManyExerciseInputEnvelope = {
    data: testcaseCreateManyExerciseInput | testcaseCreateManyExerciseInput[]
    skipDuplicates?: boolean
  }

  export type lessonUpsertWithoutExerciseInput = {
    update: XOR<lessonUpdateWithoutExerciseInput, lessonUncheckedUpdateWithoutExerciseInput>
    create: XOR<lessonCreateWithoutExerciseInput, lessonUncheckedCreateWithoutExerciseInput>
    where?: lessonWhereInput
  }

  export type lessonUpdateToOneWithWhereWithoutExerciseInput = {
    where?: lessonWhereInput
    data: XOR<lessonUpdateWithoutExerciseInput, lessonUncheckedUpdateWithoutExerciseInput>
  }

  export type lessonUpdateWithoutExerciseInput = {
    OrderIndex?: IntFieldUpdateOperationsInput | number
    Tittle?: StringFieldUpdateOperationsInput | string
    Content?: StringFieldUpdateOperationsInput | string
    topiclanguagedetail?: topiclanguagedetailUpdateOneRequiredWithoutLessonNestedInput
  }

  export type lessonUncheckedUpdateWithoutExerciseInput = {
    LsID?: IntFieldUpdateOperationsInput | number
    TLDID?: IntFieldUpdateOperationsInput | number
    OrderIndex?: IntFieldUpdateOperationsInput | number
    Tittle?: StringFieldUpdateOperationsInput | string
    Content?: StringFieldUpdateOperationsInput | string
  }

  export type submissionUpsertWithWhereUniqueWithoutExerciseInput = {
    where: submissionWhereUniqueInput
    update: XOR<submissionUpdateWithoutExerciseInput, submissionUncheckedUpdateWithoutExerciseInput>
    create: XOR<submissionCreateWithoutExerciseInput, submissionUncheckedCreateWithoutExerciseInput>
  }

  export type submissionUpdateWithWhereUniqueWithoutExerciseInput = {
    where: submissionWhereUniqueInput
    data: XOR<submissionUpdateWithoutExerciseInput, submissionUncheckedUpdateWithoutExerciseInput>
  }

  export type submissionUpdateManyWithWhereWithoutExerciseInput = {
    where: submissionScalarWhereInput
    data: XOR<submissionUpdateManyMutationInput, submissionUncheckedUpdateManyWithoutExerciseInput>
  }

  export type submissionScalarWhereInput = {
    AND?: submissionScalarWhereInput | submissionScalarWhereInput[]
    OR?: submissionScalarWhereInput[]
    NOT?: submissionScalarWhereInput | submissionScalarWhereInput[]
    SID?: IntFilter<"submission"> | number
    UID?: StringFilter<"submission"> | string
    EID?: IntFilter<"submission"> | number
    Code?: StringNullableFilter<"submission"> | string | null
    CreatedAt?: DateTimeNullableFilter<"submission"> | Date | string | null
    Result?: Enumsubmission_ResultNullableFilter<"submission"> | $Enums.submission_Result | null
  }

  export type testcaseUpsertWithWhereUniqueWithoutExerciseInput = {
    where: testcaseWhereUniqueInput
    update: XOR<testcaseUpdateWithoutExerciseInput, testcaseUncheckedUpdateWithoutExerciseInput>
    create: XOR<testcaseCreateWithoutExerciseInput, testcaseUncheckedCreateWithoutExerciseInput>
  }

  export type testcaseUpdateWithWhereUniqueWithoutExerciseInput = {
    where: testcaseWhereUniqueInput
    data: XOR<testcaseUpdateWithoutExerciseInput, testcaseUncheckedUpdateWithoutExerciseInput>
  }

  export type testcaseUpdateManyWithWhereWithoutExerciseInput = {
    where: testcaseScalarWhereInput
    data: XOR<testcaseUpdateManyMutationInput, testcaseUncheckedUpdateManyWithoutExerciseInput>
  }

  export type testcaseScalarWhereInput = {
    AND?: testcaseScalarWhereInput | testcaseScalarWhereInput[]
    OR?: testcaseScalarWhereInput[]
    NOT?: testcaseScalarWhereInput | testcaseScalarWhereInput[]
    TCID?: IntFilter<"testcase"> | number
    EID?: IntFilter<"testcase"> | number
    Input?: StringFilter<"testcase"> | string
    ExpectedOutput?: StringFilter<"testcase"> | string
    isHidden?: BoolNullableFilter<"testcase"> | boolean | null
  }

  export type topiclanguagedetailCreateWithoutLanguageInput = {
    lesson?: lessonCreateNestedManyWithoutTopiclanguagedetailInput
    topic: topicCreateNestedOneWithoutTopiclanguagedetailInput
  }

  export type topiclanguagedetailUncheckedCreateWithoutLanguageInput = {
    TLDID?: number
    TpID: number
    lesson?: lessonUncheckedCreateNestedManyWithoutTopiclanguagedetailInput
  }

  export type topiclanguagedetailCreateOrConnectWithoutLanguageInput = {
    where: topiclanguagedetailWhereUniqueInput
    create: XOR<topiclanguagedetailCreateWithoutLanguageInput, topiclanguagedetailUncheckedCreateWithoutLanguageInput>
  }

  export type topiclanguagedetailCreateManyLanguageInputEnvelope = {
    data: topiclanguagedetailCreateManyLanguageInput | topiclanguagedetailCreateManyLanguageInput[]
    skipDuplicates?: boolean
  }

  export type topiclanguagedetailUpsertWithWhereUniqueWithoutLanguageInput = {
    where: topiclanguagedetailWhereUniqueInput
    update: XOR<topiclanguagedetailUpdateWithoutLanguageInput, topiclanguagedetailUncheckedUpdateWithoutLanguageInput>
    create: XOR<topiclanguagedetailCreateWithoutLanguageInput, topiclanguagedetailUncheckedCreateWithoutLanguageInput>
  }

  export type topiclanguagedetailUpdateWithWhereUniqueWithoutLanguageInput = {
    where: topiclanguagedetailWhereUniqueInput
    data: XOR<topiclanguagedetailUpdateWithoutLanguageInput, topiclanguagedetailUncheckedUpdateWithoutLanguageInput>
  }

  export type topiclanguagedetailUpdateManyWithWhereWithoutLanguageInput = {
    where: topiclanguagedetailScalarWhereInput
    data: XOR<topiclanguagedetailUpdateManyMutationInput, topiclanguagedetailUncheckedUpdateManyWithoutLanguageInput>
  }

  export type topiclanguagedetailScalarWhereInput = {
    AND?: topiclanguagedetailScalarWhereInput | topiclanguagedetailScalarWhereInput[]
    OR?: topiclanguagedetailScalarWhereInput[]
    NOT?: topiclanguagedetailScalarWhereInput | topiclanguagedetailScalarWhereInput[]
    TLDID?: IntFilter<"topiclanguagedetail"> | number
    TpID?: IntFilter<"topiclanguagedetail"> | number
    LgID?: IntFilter<"topiclanguagedetail"> | number
  }

  export type exerciseCreateWithoutSubmissionInput = {
    OrderIndex: number
    Content: string
    Difficulty?: $Enums.exercise_Difficulty
    lession: lessonCreateNestedOneWithoutExerciseInput
    testcase?: testcaseCreateNestedManyWithoutExerciseInput
  }

  export type exerciseUncheckedCreateWithoutSubmissionInput = {
    EID?: number
    LsID: number
    OrderIndex: number
    Content: string
    Difficulty?: $Enums.exercise_Difficulty
    testcase?: testcaseUncheckedCreateNestedManyWithoutExerciseInput
  }

  export type exerciseCreateOrConnectWithoutSubmissionInput = {
    where: exerciseWhereUniqueInput
    create: XOR<exerciseCreateWithoutSubmissionInput, exerciseUncheckedCreateWithoutSubmissionInput>
  }

  export type userCreateWithoutSubmissionInput = {
    UID?: string
    Username?: string | null
    Email: string
    Password: string
    Role?: $Enums.user_Role
    CreatedAt?: Date | string | null
  }

  export type userUncheckedCreateWithoutSubmissionInput = {
    UID?: string
    Username?: string | null
    Email: string
    Password: string
    Role?: $Enums.user_Role
    CreatedAt?: Date | string | null
  }

  export type userCreateOrConnectWithoutSubmissionInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutSubmissionInput, userUncheckedCreateWithoutSubmissionInput>
  }

  export type testcaseresultCreateWithoutSubmissionInput = {
    ActualOutput: string
    Result?: $Enums.testcaseresult_Result | null
    ExecutionTime?: number | null
    testcase: testcaseCreateNestedOneWithoutTestcaseresultInput
  }

  export type testcaseresultUncheckedCreateWithoutSubmissionInput = {
    TCRID?: number
    TCID: number
    ActualOutput: string
    Result?: $Enums.testcaseresult_Result | null
    ExecutionTime?: number | null
  }

  export type testcaseresultCreateOrConnectWithoutSubmissionInput = {
    where: testcaseresultWhereUniqueInput
    create: XOR<testcaseresultCreateWithoutSubmissionInput, testcaseresultUncheckedCreateWithoutSubmissionInput>
  }

  export type testcaseresultCreateManySubmissionInputEnvelope = {
    data: testcaseresultCreateManySubmissionInput | testcaseresultCreateManySubmissionInput[]
    skipDuplicates?: boolean
  }

  export type exerciseUpsertWithoutSubmissionInput = {
    update: XOR<exerciseUpdateWithoutSubmissionInput, exerciseUncheckedUpdateWithoutSubmissionInput>
    create: XOR<exerciseCreateWithoutSubmissionInput, exerciseUncheckedCreateWithoutSubmissionInput>
    where?: exerciseWhereInput
  }

  export type exerciseUpdateToOneWithWhereWithoutSubmissionInput = {
    where?: exerciseWhereInput
    data: XOR<exerciseUpdateWithoutSubmissionInput, exerciseUncheckedUpdateWithoutSubmissionInput>
  }

  export type exerciseUpdateWithoutSubmissionInput = {
    OrderIndex?: IntFieldUpdateOperationsInput | number
    Content?: StringFieldUpdateOperationsInput | string
    Difficulty?: Enumexercise_DifficultyFieldUpdateOperationsInput | $Enums.exercise_Difficulty
    lession?: lessonUpdateOneRequiredWithoutExerciseNestedInput
    testcase?: testcaseUpdateManyWithoutExerciseNestedInput
  }

  export type exerciseUncheckedUpdateWithoutSubmissionInput = {
    EID?: IntFieldUpdateOperationsInput | number
    LsID?: IntFieldUpdateOperationsInput | number
    OrderIndex?: IntFieldUpdateOperationsInput | number
    Content?: StringFieldUpdateOperationsInput | string
    Difficulty?: Enumexercise_DifficultyFieldUpdateOperationsInput | $Enums.exercise_Difficulty
    testcase?: testcaseUncheckedUpdateManyWithoutExerciseNestedInput
  }

  export type userUpsertWithoutSubmissionInput = {
    update: XOR<userUpdateWithoutSubmissionInput, userUncheckedUpdateWithoutSubmissionInput>
    create: XOR<userCreateWithoutSubmissionInput, userUncheckedCreateWithoutSubmissionInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutSubmissionInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutSubmissionInput, userUncheckedUpdateWithoutSubmissionInput>
  }

  export type userUpdateWithoutSubmissionInput = {
    UID?: StringFieldUpdateOperationsInput | string
    Username?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Role?: Enumuser_RoleFieldUpdateOperationsInput | $Enums.user_Role
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type userUncheckedUpdateWithoutSubmissionInput = {
    UID?: StringFieldUpdateOperationsInput | string
    Username?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Role?: Enumuser_RoleFieldUpdateOperationsInput | $Enums.user_Role
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type testcaseresultUpsertWithWhereUniqueWithoutSubmissionInput = {
    where: testcaseresultWhereUniqueInput
    update: XOR<testcaseresultUpdateWithoutSubmissionInput, testcaseresultUncheckedUpdateWithoutSubmissionInput>
    create: XOR<testcaseresultCreateWithoutSubmissionInput, testcaseresultUncheckedCreateWithoutSubmissionInput>
  }

  export type testcaseresultUpdateWithWhereUniqueWithoutSubmissionInput = {
    where: testcaseresultWhereUniqueInput
    data: XOR<testcaseresultUpdateWithoutSubmissionInput, testcaseresultUncheckedUpdateWithoutSubmissionInput>
  }

  export type testcaseresultUpdateManyWithWhereWithoutSubmissionInput = {
    where: testcaseresultScalarWhereInput
    data: XOR<testcaseresultUpdateManyMutationInput, testcaseresultUncheckedUpdateManyWithoutSubmissionInput>
  }

  export type testcaseresultScalarWhereInput = {
    AND?: testcaseresultScalarWhereInput | testcaseresultScalarWhereInput[]
    OR?: testcaseresultScalarWhereInput[]
    NOT?: testcaseresultScalarWhereInput | testcaseresultScalarWhereInput[]
    TCRID?: IntFilter<"testcaseresult"> | number
    SID?: IntFilter<"testcaseresult"> | number
    TCID?: IntFilter<"testcaseresult"> | number
    ActualOutput?: StringFilter<"testcaseresult"> | string
    Result?: Enumtestcaseresult_ResultNullableFilter<"testcaseresult"> | $Enums.testcaseresult_Result | null
    ExecutionTime?: FloatNullableFilter<"testcaseresult"> | number | null
  }

  export type exerciseCreateWithoutTestcaseInput = {
    OrderIndex: number
    Content: string
    Difficulty?: $Enums.exercise_Difficulty
    lession: lessonCreateNestedOneWithoutExerciseInput
    submission?: submissionCreateNestedManyWithoutExerciseInput
  }

  export type exerciseUncheckedCreateWithoutTestcaseInput = {
    EID?: number
    LsID: number
    OrderIndex: number
    Content: string
    Difficulty?: $Enums.exercise_Difficulty
    submission?: submissionUncheckedCreateNestedManyWithoutExerciseInput
  }

  export type exerciseCreateOrConnectWithoutTestcaseInput = {
    where: exerciseWhereUniqueInput
    create: XOR<exerciseCreateWithoutTestcaseInput, exerciseUncheckedCreateWithoutTestcaseInput>
  }

  export type testcaseresultCreateWithoutTestcaseInput = {
    ActualOutput: string
    Result?: $Enums.testcaseresult_Result | null
    ExecutionTime?: number | null
    submission: submissionCreateNestedOneWithoutTestcaseresultInput
  }

  export type testcaseresultUncheckedCreateWithoutTestcaseInput = {
    TCRID?: number
    SID: number
    ActualOutput: string
    Result?: $Enums.testcaseresult_Result | null
    ExecutionTime?: number | null
  }

  export type testcaseresultCreateOrConnectWithoutTestcaseInput = {
    where: testcaseresultWhereUniqueInput
    create: XOR<testcaseresultCreateWithoutTestcaseInput, testcaseresultUncheckedCreateWithoutTestcaseInput>
  }

  export type testcaseresultCreateManyTestcaseInputEnvelope = {
    data: testcaseresultCreateManyTestcaseInput | testcaseresultCreateManyTestcaseInput[]
    skipDuplicates?: boolean
  }

  export type exerciseUpsertWithoutTestcaseInput = {
    update: XOR<exerciseUpdateWithoutTestcaseInput, exerciseUncheckedUpdateWithoutTestcaseInput>
    create: XOR<exerciseCreateWithoutTestcaseInput, exerciseUncheckedCreateWithoutTestcaseInput>
    where?: exerciseWhereInput
  }

  export type exerciseUpdateToOneWithWhereWithoutTestcaseInput = {
    where?: exerciseWhereInput
    data: XOR<exerciseUpdateWithoutTestcaseInput, exerciseUncheckedUpdateWithoutTestcaseInput>
  }

  export type exerciseUpdateWithoutTestcaseInput = {
    OrderIndex?: IntFieldUpdateOperationsInput | number
    Content?: StringFieldUpdateOperationsInput | string
    Difficulty?: Enumexercise_DifficultyFieldUpdateOperationsInput | $Enums.exercise_Difficulty
    lession?: lessonUpdateOneRequiredWithoutExerciseNestedInput
    submission?: submissionUpdateManyWithoutExerciseNestedInput
  }

  export type exerciseUncheckedUpdateWithoutTestcaseInput = {
    EID?: IntFieldUpdateOperationsInput | number
    LsID?: IntFieldUpdateOperationsInput | number
    OrderIndex?: IntFieldUpdateOperationsInput | number
    Content?: StringFieldUpdateOperationsInput | string
    Difficulty?: Enumexercise_DifficultyFieldUpdateOperationsInput | $Enums.exercise_Difficulty
    submission?: submissionUncheckedUpdateManyWithoutExerciseNestedInput
  }

  export type testcaseresultUpsertWithWhereUniqueWithoutTestcaseInput = {
    where: testcaseresultWhereUniqueInput
    update: XOR<testcaseresultUpdateWithoutTestcaseInput, testcaseresultUncheckedUpdateWithoutTestcaseInput>
    create: XOR<testcaseresultCreateWithoutTestcaseInput, testcaseresultUncheckedCreateWithoutTestcaseInput>
  }

  export type testcaseresultUpdateWithWhereUniqueWithoutTestcaseInput = {
    where: testcaseresultWhereUniqueInput
    data: XOR<testcaseresultUpdateWithoutTestcaseInput, testcaseresultUncheckedUpdateWithoutTestcaseInput>
  }

  export type testcaseresultUpdateManyWithWhereWithoutTestcaseInput = {
    where: testcaseresultScalarWhereInput
    data: XOR<testcaseresultUpdateManyMutationInput, testcaseresultUncheckedUpdateManyWithoutTestcaseInput>
  }

  export type submissionCreateWithoutTestcaseresultInput = {
    Code?: string | null
    CreatedAt?: Date | string | null
    Result?: $Enums.submission_Result | null
    exercise: exerciseCreateNestedOneWithoutSubmissionInput
    user: userCreateNestedOneWithoutSubmissionInput
  }

  export type submissionUncheckedCreateWithoutTestcaseresultInput = {
    SID?: number
    UID: string
    EID: number
    Code?: string | null
    CreatedAt?: Date | string | null
    Result?: $Enums.submission_Result | null
  }

  export type submissionCreateOrConnectWithoutTestcaseresultInput = {
    where: submissionWhereUniqueInput
    create: XOR<submissionCreateWithoutTestcaseresultInput, submissionUncheckedCreateWithoutTestcaseresultInput>
  }

  export type testcaseCreateWithoutTestcaseresultInput = {
    Input: string
    ExpectedOutput: string
    isHidden?: boolean | null
    exercise: exerciseCreateNestedOneWithoutTestcaseInput
  }

  export type testcaseUncheckedCreateWithoutTestcaseresultInput = {
    TCID?: number
    EID: number
    Input: string
    ExpectedOutput: string
    isHidden?: boolean | null
  }

  export type testcaseCreateOrConnectWithoutTestcaseresultInput = {
    where: testcaseWhereUniqueInput
    create: XOR<testcaseCreateWithoutTestcaseresultInput, testcaseUncheckedCreateWithoutTestcaseresultInput>
  }

  export type submissionUpsertWithoutTestcaseresultInput = {
    update: XOR<submissionUpdateWithoutTestcaseresultInput, submissionUncheckedUpdateWithoutTestcaseresultInput>
    create: XOR<submissionCreateWithoutTestcaseresultInput, submissionUncheckedCreateWithoutTestcaseresultInput>
    where?: submissionWhereInput
  }

  export type submissionUpdateToOneWithWhereWithoutTestcaseresultInput = {
    where?: submissionWhereInput
    data: XOR<submissionUpdateWithoutTestcaseresultInput, submissionUncheckedUpdateWithoutTestcaseresultInput>
  }

  export type submissionUpdateWithoutTestcaseresultInput = {
    Code?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Result?: NullableEnumsubmission_ResultFieldUpdateOperationsInput | $Enums.submission_Result | null
    exercise?: exerciseUpdateOneRequiredWithoutSubmissionNestedInput
    user?: userUpdateOneRequiredWithoutSubmissionNestedInput
  }

  export type submissionUncheckedUpdateWithoutTestcaseresultInput = {
    SID?: IntFieldUpdateOperationsInput | number
    UID?: StringFieldUpdateOperationsInput | string
    EID?: IntFieldUpdateOperationsInput | number
    Code?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Result?: NullableEnumsubmission_ResultFieldUpdateOperationsInput | $Enums.submission_Result | null
  }

  export type testcaseUpsertWithoutTestcaseresultInput = {
    update: XOR<testcaseUpdateWithoutTestcaseresultInput, testcaseUncheckedUpdateWithoutTestcaseresultInput>
    create: XOR<testcaseCreateWithoutTestcaseresultInput, testcaseUncheckedCreateWithoutTestcaseresultInput>
    where?: testcaseWhereInput
  }

  export type testcaseUpdateToOneWithWhereWithoutTestcaseresultInput = {
    where?: testcaseWhereInput
    data: XOR<testcaseUpdateWithoutTestcaseresultInput, testcaseUncheckedUpdateWithoutTestcaseresultInput>
  }

  export type testcaseUpdateWithoutTestcaseresultInput = {
    Input?: StringFieldUpdateOperationsInput | string
    ExpectedOutput?: StringFieldUpdateOperationsInput | string
    isHidden?: NullableBoolFieldUpdateOperationsInput | boolean | null
    exercise?: exerciseUpdateOneRequiredWithoutTestcaseNestedInput
  }

  export type testcaseUncheckedUpdateWithoutTestcaseresultInput = {
    TCID?: IntFieldUpdateOperationsInput | number
    EID?: IntFieldUpdateOperationsInput | number
    Input?: StringFieldUpdateOperationsInput | string
    ExpectedOutput?: StringFieldUpdateOperationsInput | string
    isHidden?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type topiclanguagedetailCreateWithoutTopicInput = {
    lesson?: lessonCreateNestedManyWithoutTopiclanguagedetailInput
    language: languageCreateNestedOneWithoutTopiclanguagedetailInput
  }

  export type topiclanguagedetailUncheckedCreateWithoutTopicInput = {
    TLDID?: number
    LgID: number
    lesson?: lessonUncheckedCreateNestedManyWithoutTopiclanguagedetailInput
  }

  export type topiclanguagedetailCreateOrConnectWithoutTopicInput = {
    where: topiclanguagedetailWhereUniqueInput
    create: XOR<topiclanguagedetailCreateWithoutTopicInput, topiclanguagedetailUncheckedCreateWithoutTopicInput>
  }

  export type topiclanguagedetailCreateManyTopicInputEnvelope = {
    data: topiclanguagedetailCreateManyTopicInput | topiclanguagedetailCreateManyTopicInput[]
    skipDuplicates?: boolean
  }

  export type topiclanguagedetailUpsertWithWhereUniqueWithoutTopicInput = {
    where: topiclanguagedetailWhereUniqueInput
    update: XOR<topiclanguagedetailUpdateWithoutTopicInput, topiclanguagedetailUncheckedUpdateWithoutTopicInput>
    create: XOR<topiclanguagedetailCreateWithoutTopicInput, topiclanguagedetailUncheckedCreateWithoutTopicInput>
  }

  export type topiclanguagedetailUpdateWithWhereUniqueWithoutTopicInput = {
    where: topiclanguagedetailWhereUniqueInput
    data: XOR<topiclanguagedetailUpdateWithoutTopicInput, topiclanguagedetailUncheckedUpdateWithoutTopicInput>
  }

  export type topiclanguagedetailUpdateManyWithWhereWithoutTopicInput = {
    where: topiclanguagedetailScalarWhereInput
    data: XOR<topiclanguagedetailUpdateManyMutationInput, topiclanguagedetailUncheckedUpdateManyWithoutTopicInput>
  }

  export type lessonCreateWithoutTopiclanguagedetailInput = {
    OrderIndex: number
    Tittle: string
    Content: string
    exercise?: exerciseCreateNestedManyWithoutLessionInput
  }

  export type lessonUncheckedCreateWithoutTopiclanguagedetailInput = {
    LsID?: number
    OrderIndex: number
    Tittle: string
    Content: string
    exercise?: exerciseUncheckedCreateNestedManyWithoutLessionInput
  }

  export type lessonCreateOrConnectWithoutTopiclanguagedetailInput = {
    where: lessonWhereUniqueInput
    create: XOR<lessonCreateWithoutTopiclanguagedetailInput, lessonUncheckedCreateWithoutTopiclanguagedetailInput>
  }

  export type lessonCreateManyTopiclanguagedetailInputEnvelope = {
    data: lessonCreateManyTopiclanguagedetailInput | lessonCreateManyTopiclanguagedetailInput[]
    skipDuplicates?: boolean
  }

  export type topicCreateWithoutTopiclanguagedetailInput = {
    Name: string
    Description?: string | null
  }

  export type topicUncheckedCreateWithoutTopiclanguagedetailInput = {
    TpID?: number
    Name: string
    Description?: string | null
  }

  export type topicCreateOrConnectWithoutTopiclanguagedetailInput = {
    where: topicWhereUniqueInput
    create: XOR<topicCreateWithoutTopiclanguagedetailInput, topicUncheckedCreateWithoutTopiclanguagedetailInput>
  }

  export type languageCreateWithoutTopiclanguagedetailInput = {
    Name: string
    Logo?: string | null
  }

  export type languageUncheckedCreateWithoutTopiclanguagedetailInput = {
    LgID?: number
    Name: string
    Logo?: string | null
  }

  export type languageCreateOrConnectWithoutTopiclanguagedetailInput = {
    where: languageWhereUniqueInput
    create: XOR<languageCreateWithoutTopiclanguagedetailInput, languageUncheckedCreateWithoutTopiclanguagedetailInput>
  }

  export type lessonUpsertWithWhereUniqueWithoutTopiclanguagedetailInput = {
    where: lessonWhereUniqueInput
    update: XOR<lessonUpdateWithoutTopiclanguagedetailInput, lessonUncheckedUpdateWithoutTopiclanguagedetailInput>
    create: XOR<lessonCreateWithoutTopiclanguagedetailInput, lessonUncheckedCreateWithoutTopiclanguagedetailInput>
  }

  export type lessonUpdateWithWhereUniqueWithoutTopiclanguagedetailInput = {
    where: lessonWhereUniqueInput
    data: XOR<lessonUpdateWithoutTopiclanguagedetailInput, lessonUncheckedUpdateWithoutTopiclanguagedetailInput>
  }

  export type lessonUpdateManyWithWhereWithoutTopiclanguagedetailInput = {
    where: lessonScalarWhereInput
    data: XOR<lessonUpdateManyMutationInput, lessonUncheckedUpdateManyWithoutTopiclanguagedetailInput>
  }

  export type lessonScalarWhereInput = {
    AND?: lessonScalarWhereInput | lessonScalarWhereInput[]
    OR?: lessonScalarWhereInput[]
    NOT?: lessonScalarWhereInput | lessonScalarWhereInput[]
    LsID?: IntFilter<"lesson"> | number
    TLDID?: IntFilter<"lesson"> | number
    OrderIndex?: IntFilter<"lesson"> | number
    Tittle?: StringFilter<"lesson"> | string
    Content?: StringFilter<"lesson"> | string
  }

  export type topicUpsertWithoutTopiclanguagedetailInput = {
    update: XOR<topicUpdateWithoutTopiclanguagedetailInput, topicUncheckedUpdateWithoutTopiclanguagedetailInput>
    create: XOR<topicCreateWithoutTopiclanguagedetailInput, topicUncheckedCreateWithoutTopiclanguagedetailInput>
    where?: topicWhereInput
  }

  export type topicUpdateToOneWithWhereWithoutTopiclanguagedetailInput = {
    where?: topicWhereInput
    data: XOR<topicUpdateWithoutTopiclanguagedetailInput, topicUncheckedUpdateWithoutTopiclanguagedetailInput>
  }

  export type topicUpdateWithoutTopiclanguagedetailInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type topicUncheckedUpdateWithoutTopiclanguagedetailInput = {
    TpID?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type languageUpsertWithoutTopiclanguagedetailInput = {
    update: XOR<languageUpdateWithoutTopiclanguagedetailInput, languageUncheckedUpdateWithoutTopiclanguagedetailInput>
    create: XOR<languageCreateWithoutTopiclanguagedetailInput, languageUncheckedCreateWithoutTopiclanguagedetailInput>
    where?: languageWhereInput
  }

  export type languageUpdateToOneWithWhereWithoutTopiclanguagedetailInput = {
    where?: languageWhereInput
    data: XOR<languageUpdateWithoutTopiclanguagedetailInput, languageUncheckedUpdateWithoutTopiclanguagedetailInput>
  }

  export type languageUpdateWithoutTopiclanguagedetailInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Logo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type languageUncheckedUpdateWithoutTopiclanguagedetailInput = {
    LgID?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Logo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type submissionCreateWithoutUserInput = {
    Code?: string | null
    CreatedAt?: Date | string | null
    Result?: $Enums.submission_Result | null
    exercise: exerciseCreateNestedOneWithoutSubmissionInput
    testcaseresult?: testcaseresultCreateNestedManyWithoutSubmissionInput
  }

  export type submissionUncheckedCreateWithoutUserInput = {
    SID?: number
    EID: number
    Code?: string | null
    CreatedAt?: Date | string | null
    Result?: $Enums.submission_Result | null
    testcaseresult?: testcaseresultUncheckedCreateNestedManyWithoutSubmissionInput
  }

  export type submissionCreateOrConnectWithoutUserInput = {
    where: submissionWhereUniqueInput
    create: XOR<submissionCreateWithoutUserInput, submissionUncheckedCreateWithoutUserInput>
  }

  export type submissionCreateManyUserInputEnvelope = {
    data: submissionCreateManyUserInput | submissionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type submissionUpsertWithWhereUniqueWithoutUserInput = {
    where: submissionWhereUniqueInput
    update: XOR<submissionUpdateWithoutUserInput, submissionUncheckedUpdateWithoutUserInput>
    create: XOR<submissionCreateWithoutUserInput, submissionUncheckedCreateWithoutUserInput>
  }

  export type submissionUpdateWithWhereUniqueWithoutUserInput = {
    where: submissionWhereUniqueInput
    data: XOR<submissionUpdateWithoutUserInput, submissionUncheckedUpdateWithoutUserInput>
  }

  export type submissionUpdateManyWithWhereWithoutUserInput = {
    where: submissionScalarWhereInput
    data: XOR<submissionUpdateManyMutationInput, submissionUncheckedUpdateManyWithoutUserInput>
  }

  export type exerciseCreateWithoutLessionInput = {
    OrderIndex: number
    Content: string
    Difficulty?: $Enums.exercise_Difficulty
    submission?: submissionCreateNestedManyWithoutExerciseInput
    testcase?: testcaseCreateNestedManyWithoutExerciseInput
  }

  export type exerciseUncheckedCreateWithoutLessionInput = {
    EID?: number
    OrderIndex: number
    Content: string
    Difficulty?: $Enums.exercise_Difficulty
    submission?: submissionUncheckedCreateNestedManyWithoutExerciseInput
    testcase?: testcaseUncheckedCreateNestedManyWithoutExerciseInput
  }

  export type exerciseCreateOrConnectWithoutLessionInput = {
    where: exerciseWhereUniqueInput
    create: XOR<exerciseCreateWithoutLessionInput, exerciseUncheckedCreateWithoutLessionInput>
  }

  export type exerciseCreateManyLessionInputEnvelope = {
    data: exerciseCreateManyLessionInput | exerciseCreateManyLessionInput[]
    skipDuplicates?: boolean
  }

  export type topiclanguagedetailCreateWithoutLessonInput = {
    topic: topicCreateNestedOneWithoutTopiclanguagedetailInput
    language: languageCreateNestedOneWithoutTopiclanguagedetailInput
  }

  export type topiclanguagedetailUncheckedCreateWithoutLessonInput = {
    TLDID?: number
    TpID: number
    LgID: number
  }

  export type topiclanguagedetailCreateOrConnectWithoutLessonInput = {
    where: topiclanguagedetailWhereUniqueInput
    create: XOR<topiclanguagedetailCreateWithoutLessonInput, topiclanguagedetailUncheckedCreateWithoutLessonInput>
  }

  export type exerciseUpsertWithWhereUniqueWithoutLessionInput = {
    where: exerciseWhereUniqueInput
    update: XOR<exerciseUpdateWithoutLessionInput, exerciseUncheckedUpdateWithoutLessionInput>
    create: XOR<exerciseCreateWithoutLessionInput, exerciseUncheckedCreateWithoutLessionInput>
  }

  export type exerciseUpdateWithWhereUniqueWithoutLessionInput = {
    where: exerciseWhereUniqueInput
    data: XOR<exerciseUpdateWithoutLessionInput, exerciseUncheckedUpdateWithoutLessionInput>
  }

  export type exerciseUpdateManyWithWhereWithoutLessionInput = {
    where: exerciseScalarWhereInput
    data: XOR<exerciseUpdateManyMutationInput, exerciseUncheckedUpdateManyWithoutLessionInput>
  }

  export type exerciseScalarWhereInput = {
    AND?: exerciseScalarWhereInput | exerciseScalarWhereInput[]
    OR?: exerciseScalarWhereInput[]
    NOT?: exerciseScalarWhereInput | exerciseScalarWhereInput[]
    EID?: IntFilter<"exercise"> | number
    LsID?: IntFilter<"exercise"> | number
    OrderIndex?: IntFilter<"exercise"> | number
    Content?: StringFilter<"exercise"> | string
    Difficulty?: Enumexercise_DifficultyFilter<"exercise"> | $Enums.exercise_Difficulty
  }

  export type topiclanguagedetailUpsertWithoutLessonInput = {
    update: XOR<topiclanguagedetailUpdateWithoutLessonInput, topiclanguagedetailUncheckedUpdateWithoutLessonInput>
    create: XOR<topiclanguagedetailCreateWithoutLessonInput, topiclanguagedetailUncheckedCreateWithoutLessonInput>
    where?: topiclanguagedetailWhereInput
  }

  export type topiclanguagedetailUpdateToOneWithWhereWithoutLessonInput = {
    where?: topiclanguagedetailWhereInput
    data: XOR<topiclanguagedetailUpdateWithoutLessonInput, topiclanguagedetailUncheckedUpdateWithoutLessonInput>
  }

  export type topiclanguagedetailUpdateWithoutLessonInput = {
    topic?: topicUpdateOneRequiredWithoutTopiclanguagedetailNestedInput
    language?: languageUpdateOneRequiredWithoutTopiclanguagedetailNestedInput
  }

  export type topiclanguagedetailUncheckedUpdateWithoutLessonInput = {
    TLDID?: IntFieldUpdateOperationsInput | number
    TpID?: IntFieldUpdateOperationsInput | number
    LgID?: IntFieldUpdateOperationsInput | number
  }

  export type submissionCreateManyExerciseInput = {
    SID?: number
    UID: string
    Code?: string | null
    CreatedAt?: Date | string | null
    Result?: $Enums.submission_Result | null
  }

  export type testcaseCreateManyExerciseInput = {
    TCID?: number
    Input: string
    ExpectedOutput: string
    isHidden?: boolean | null
  }

  export type submissionUpdateWithoutExerciseInput = {
    Code?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Result?: NullableEnumsubmission_ResultFieldUpdateOperationsInput | $Enums.submission_Result | null
    user?: userUpdateOneRequiredWithoutSubmissionNestedInput
    testcaseresult?: testcaseresultUpdateManyWithoutSubmissionNestedInput
  }

  export type submissionUncheckedUpdateWithoutExerciseInput = {
    SID?: IntFieldUpdateOperationsInput | number
    UID?: StringFieldUpdateOperationsInput | string
    Code?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Result?: NullableEnumsubmission_ResultFieldUpdateOperationsInput | $Enums.submission_Result | null
    testcaseresult?: testcaseresultUncheckedUpdateManyWithoutSubmissionNestedInput
  }

  export type submissionUncheckedUpdateManyWithoutExerciseInput = {
    SID?: IntFieldUpdateOperationsInput | number
    UID?: StringFieldUpdateOperationsInput | string
    Code?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Result?: NullableEnumsubmission_ResultFieldUpdateOperationsInput | $Enums.submission_Result | null
  }

  export type testcaseUpdateWithoutExerciseInput = {
    Input?: StringFieldUpdateOperationsInput | string
    ExpectedOutput?: StringFieldUpdateOperationsInput | string
    isHidden?: NullableBoolFieldUpdateOperationsInput | boolean | null
    testcaseresult?: testcaseresultUpdateManyWithoutTestcaseNestedInput
  }

  export type testcaseUncheckedUpdateWithoutExerciseInput = {
    TCID?: IntFieldUpdateOperationsInput | number
    Input?: StringFieldUpdateOperationsInput | string
    ExpectedOutput?: StringFieldUpdateOperationsInput | string
    isHidden?: NullableBoolFieldUpdateOperationsInput | boolean | null
    testcaseresult?: testcaseresultUncheckedUpdateManyWithoutTestcaseNestedInput
  }

  export type testcaseUncheckedUpdateManyWithoutExerciseInput = {
    TCID?: IntFieldUpdateOperationsInput | number
    Input?: StringFieldUpdateOperationsInput | string
    ExpectedOutput?: StringFieldUpdateOperationsInput | string
    isHidden?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type topiclanguagedetailCreateManyLanguageInput = {
    TLDID?: number
    TpID: number
  }

  export type topiclanguagedetailUpdateWithoutLanguageInput = {
    lesson?: lessonUpdateManyWithoutTopiclanguagedetailNestedInput
    topic?: topicUpdateOneRequiredWithoutTopiclanguagedetailNestedInput
  }

  export type topiclanguagedetailUncheckedUpdateWithoutLanguageInput = {
    TLDID?: IntFieldUpdateOperationsInput | number
    TpID?: IntFieldUpdateOperationsInput | number
    lesson?: lessonUncheckedUpdateManyWithoutTopiclanguagedetailNestedInput
  }

  export type topiclanguagedetailUncheckedUpdateManyWithoutLanguageInput = {
    TLDID?: IntFieldUpdateOperationsInput | number
    TpID?: IntFieldUpdateOperationsInput | number
  }

  export type testcaseresultCreateManySubmissionInput = {
    TCRID?: number
    TCID: number
    ActualOutput: string
    Result?: $Enums.testcaseresult_Result | null
    ExecutionTime?: number | null
  }

  export type testcaseresultUpdateWithoutSubmissionInput = {
    ActualOutput?: StringFieldUpdateOperationsInput | string
    Result?: NullableEnumtestcaseresult_ResultFieldUpdateOperationsInput | $Enums.testcaseresult_Result | null
    ExecutionTime?: NullableFloatFieldUpdateOperationsInput | number | null
    testcase?: testcaseUpdateOneRequiredWithoutTestcaseresultNestedInput
  }

  export type testcaseresultUncheckedUpdateWithoutSubmissionInput = {
    TCRID?: IntFieldUpdateOperationsInput | number
    TCID?: IntFieldUpdateOperationsInput | number
    ActualOutput?: StringFieldUpdateOperationsInput | string
    Result?: NullableEnumtestcaseresult_ResultFieldUpdateOperationsInput | $Enums.testcaseresult_Result | null
    ExecutionTime?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type testcaseresultUncheckedUpdateManyWithoutSubmissionInput = {
    TCRID?: IntFieldUpdateOperationsInput | number
    TCID?: IntFieldUpdateOperationsInput | number
    ActualOutput?: StringFieldUpdateOperationsInput | string
    Result?: NullableEnumtestcaseresult_ResultFieldUpdateOperationsInput | $Enums.testcaseresult_Result | null
    ExecutionTime?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type testcaseresultCreateManyTestcaseInput = {
    TCRID?: number
    SID: number
    ActualOutput: string
    Result?: $Enums.testcaseresult_Result | null
    ExecutionTime?: number | null
  }

  export type testcaseresultUpdateWithoutTestcaseInput = {
    ActualOutput?: StringFieldUpdateOperationsInput | string
    Result?: NullableEnumtestcaseresult_ResultFieldUpdateOperationsInput | $Enums.testcaseresult_Result | null
    ExecutionTime?: NullableFloatFieldUpdateOperationsInput | number | null
    submission?: submissionUpdateOneRequiredWithoutTestcaseresultNestedInput
  }

  export type testcaseresultUncheckedUpdateWithoutTestcaseInput = {
    TCRID?: IntFieldUpdateOperationsInput | number
    SID?: IntFieldUpdateOperationsInput | number
    ActualOutput?: StringFieldUpdateOperationsInput | string
    Result?: NullableEnumtestcaseresult_ResultFieldUpdateOperationsInput | $Enums.testcaseresult_Result | null
    ExecutionTime?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type testcaseresultUncheckedUpdateManyWithoutTestcaseInput = {
    TCRID?: IntFieldUpdateOperationsInput | number
    SID?: IntFieldUpdateOperationsInput | number
    ActualOutput?: StringFieldUpdateOperationsInput | string
    Result?: NullableEnumtestcaseresult_ResultFieldUpdateOperationsInput | $Enums.testcaseresult_Result | null
    ExecutionTime?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type topiclanguagedetailCreateManyTopicInput = {
    TLDID?: number
    LgID: number
  }

  export type topiclanguagedetailUpdateWithoutTopicInput = {
    lesson?: lessonUpdateManyWithoutTopiclanguagedetailNestedInput
    language?: languageUpdateOneRequiredWithoutTopiclanguagedetailNestedInput
  }

  export type topiclanguagedetailUncheckedUpdateWithoutTopicInput = {
    TLDID?: IntFieldUpdateOperationsInput | number
    LgID?: IntFieldUpdateOperationsInput | number
    lesson?: lessonUncheckedUpdateManyWithoutTopiclanguagedetailNestedInput
  }

  export type topiclanguagedetailUncheckedUpdateManyWithoutTopicInput = {
    TLDID?: IntFieldUpdateOperationsInput | number
    LgID?: IntFieldUpdateOperationsInput | number
  }

  export type lessonCreateManyTopiclanguagedetailInput = {
    LsID?: number
    OrderIndex: number
    Tittle: string
    Content: string
  }

  export type lessonUpdateWithoutTopiclanguagedetailInput = {
    OrderIndex?: IntFieldUpdateOperationsInput | number
    Tittle?: StringFieldUpdateOperationsInput | string
    Content?: StringFieldUpdateOperationsInput | string
    exercise?: exerciseUpdateManyWithoutLessionNestedInput
  }

  export type lessonUncheckedUpdateWithoutTopiclanguagedetailInput = {
    LsID?: IntFieldUpdateOperationsInput | number
    OrderIndex?: IntFieldUpdateOperationsInput | number
    Tittle?: StringFieldUpdateOperationsInput | string
    Content?: StringFieldUpdateOperationsInput | string
    exercise?: exerciseUncheckedUpdateManyWithoutLessionNestedInput
  }

  export type lessonUncheckedUpdateManyWithoutTopiclanguagedetailInput = {
    LsID?: IntFieldUpdateOperationsInput | number
    OrderIndex?: IntFieldUpdateOperationsInput | number
    Tittle?: StringFieldUpdateOperationsInput | string
    Content?: StringFieldUpdateOperationsInput | string
  }

  export type submissionCreateManyUserInput = {
    SID?: number
    EID: number
    Code?: string | null
    CreatedAt?: Date | string | null
    Result?: $Enums.submission_Result | null
  }

  export type submissionUpdateWithoutUserInput = {
    Code?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Result?: NullableEnumsubmission_ResultFieldUpdateOperationsInput | $Enums.submission_Result | null
    exercise?: exerciseUpdateOneRequiredWithoutSubmissionNestedInput
    testcaseresult?: testcaseresultUpdateManyWithoutSubmissionNestedInput
  }

  export type submissionUncheckedUpdateWithoutUserInput = {
    SID?: IntFieldUpdateOperationsInput | number
    EID?: IntFieldUpdateOperationsInput | number
    Code?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Result?: NullableEnumsubmission_ResultFieldUpdateOperationsInput | $Enums.submission_Result | null
    testcaseresult?: testcaseresultUncheckedUpdateManyWithoutSubmissionNestedInput
  }

  export type submissionUncheckedUpdateManyWithoutUserInput = {
    SID?: IntFieldUpdateOperationsInput | number
    EID?: IntFieldUpdateOperationsInput | number
    Code?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Result?: NullableEnumsubmission_ResultFieldUpdateOperationsInput | $Enums.submission_Result | null
  }

  export type exerciseCreateManyLessionInput = {
    EID?: number
    OrderIndex: number
    Content: string
    Difficulty?: $Enums.exercise_Difficulty
  }

  export type exerciseUpdateWithoutLessionInput = {
    OrderIndex?: IntFieldUpdateOperationsInput | number
    Content?: StringFieldUpdateOperationsInput | string
    Difficulty?: Enumexercise_DifficultyFieldUpdateOperationsInput | $Enums.exercise_Difficulty
    submission?: submissionUpdateManyWithoutExerciseNestedInput
    testcase?: testcaseUpdateManyWithoutExerciseNestedInput
  }

  export type exerciseUncheckedUpdateWithoutLessionInput = {
    EID?: IntFieldUpdateOperationsInput | number
    OrderIndex?: IntFieldUpdateOperationsInput | number
    Content?: StringFieldUpdateOperationsInput | string
    Difficulty?: Enumexercise_DifficultyFieldUpdateOperationsInput | $Enums.exercise_Difficulty
    submission?: submissionUncheckedUpdateManyWithoutExerciseNestedInput
    testcase?: testcaseUncheckedUpdateManyWithoutExerciseNestedInput
  }

  export type exerciseUncheckedUpdateManyWithoutLessionInput = {
    EID?: IntFieldUpdateOperationsInput | number
    OrderIndex?: IntFieldUpdateOperationsInput | number
    Content?: StringFieldUpdateOperationsInput | string
    Difficulty?: Enumexercise_DifficultyFieldUpdateOperationsInput | $Enums.exercise_Difficulty
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