
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Prompt
 * 
 */
export type Prompt = $Result.DefaultSelection<Prisma.$PromptPayload>
/**
 * Model MarketData
 * 
 */
export type MarketData = $Result.DefaultSelection<Prisma.$MarketDataPayload>
/**
 * Model Trade
 * 
 */
export type Trade = $Result.DefaultSelection<Prisma.$TradePayload>
/**
 * Model Market
 * 
 */
export type Market = $Result.DefaultSelection<Prisma.$MarketPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model Position
 * 
 */
export type Position = $Result.DefaultSelection<Prisma.$PositionPayload>
/**
 * Model DiscussionThread
 * 
 */
export type DiscussionThread = $Result.DefaultSelection<Prisma.$DiscussionThreadPayload>
/**
 * Model DiscussionMessage
 * 
 */
export type DiscussionMessage = $Result.DefaultSelection<Prisma.$DiscussionMessagePayload>
/**
 * Model CreatorProfile
 * 
 */
export type CreatorProfile = $Result.DefaultSelection<Prisma.$CreatorProfilePayload>
/**
 * Model Embed
 * 
 */
export type Embed = $Result.DefaultSelection<Prisma.$EmbedPayload>
/**
 * Model MemoryPointer
 * 
 */
export type MemoryPointer = $Result.DefaultSelection<Prisma.$MemoryPointerPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prompt`: Exposes CRUD operations for the **Prompt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prompts
    * const prompts = await prisma.prompt.findMany()
    * ```
    */
  get prompt(): Prisma.PromptDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.marketData`: Exposes CRUD operations for the **MarketData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MarketData
    * const marketData = await prisma.marketData.findMany()
    * ```
    */
  get marketData(): Prisma.MarketDataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trade`: Exposes CRUD operations for the **Trade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trades
    * const trades = await prisma.trade.findMany()
    * ```
    */
  get trade(): Prisma.TradeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.market`: Exposes CRUD operations for the **Market** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Markets
    * const markets = await prisma.market.findMany()
    * ```
    */
  get market(): Prisma.MarketDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.position`: Exposes CRUD operations for the **Position** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Positions
    * const positions = await prisma.position.findMany()
    * ```
    */
  get position(): Prisma.PositionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.discussionThread`: Exposes CRUD operations for the **DiscussionThread** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DiscussionThreads
    * const discussionThreads = await prisma.discussionThread.findMany()
    * ```
    */
  get discussionThread(): Prisma.DiscussionThreadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.discussionMessage`: Exposes CRUD operations for the **DiscussionMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DiscussionMessages
    * const discussionMessages = await prisma.discussionMessage.findMany()
    * ```
    */
  get discussionMessage(): Prisma.DiscussionMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.creatorProfile`: Exposes CRUD operations for the **CreatorProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CreatorProfiles
    * const creatorProfiles = await prisma.creatorProfile.findMany()
    * ```
    */
  get creatorProfile(): Prisma.CreatorProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.embed`: Exposes CRUD operations for the **Embed** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Embeds
    * const embeds = await prisma.embed.findMany()
    * ```
    */
  get embed(): Prisma.EmbedDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.memoryPointer`: Exposes CRUD operations for the **MemoryPointer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MemoryPointers
    * const memoryPointers = await prisma.memoryPointer.findMany()
    * ```
    */
  get memoryPointer(): Prisma.MemoryPointerDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.1.0
   * Query Engine version: ab635e6b9d606fa5c8fb8b1a7f909c3c3c1c98ba
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    User: 'User',
    Prompt: 'Prompt',
    MarketData: 'MarketData',
    Trade: 'Trade',
    Market: 'Market',
    Order: 'Order',
    Position: 'Position',
    DiscussionThread: 'DiscussionThread',
    DiscussionMessage: 'DiscussionMessage',
    CreatorProfile: 'CreatorProfile',
    Embed: 'Embed',
    MemoryPointer: 'MemoryPointer'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "prompt" | "marketData" | "trade" | "market" | "order" | "position" | "discussionThread" | "discussionMessage" | "creatorProfile" | "embed" | "memoryPointer"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Prompt: {
        payload: Prisma.$PromptPayload<ExtArgs>
        fields: Prisma.PromptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PromptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PromptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptPayload>
          }
          findFirst: {
            args: Prisma.PromptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PromptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptPayload>
          }
          findMany: {
            args: Prisma.PromptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptPayload>[]
          }
          create: {
            args: Prisma.PromptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptPayload>
          }
          createMany: {
            args: Prisma.PromptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PromptCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptPayload>[]
          }
          delete: {
            args: Prisma.PromptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptPayload>
          }
          update: {
            args: Prisma.PromptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptPayload>
          }
          deleteMany: {
            args: Prisma.PromptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PromptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PromptUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptPayload>[]
          }
          upsert: {
            args: Prisma.PromptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptPayload>
          }
          aggregate: {
            args: Prisma.PromptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrompt>
          }
          groupBy: {
            args: Prisma.PromptGroupByArgs<ExtArgs>
            result: $Utils.Optional<PromptGroupByOutputType>[]
          }
          count: {
            args: Prisma.PromptCountArgs<ExtArgs>
            result: $Utils.Optional<PromptCountAggregateOutputType> | number
          }
        }
      }
      MarketData: {
        payload: Prisma.$MarketDataPayload<ExtArgs>
        fields: Prisma.MarketDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MarketDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MarketDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketDataPayload>
          }
          findFirst: {
            args: Prisma.MarketDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MarketDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketDataPayload>
          }
          findMany: {
            args: Prisma.MarketDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketDataPayload>[]
          }
          create: {
            args: Prisma.MarketDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketDataPayload>
          }
          createMany: {
            args: Prisma.MarketDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MarketDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketDataPayload>[]
          }
          delete: {
            args: Prisma.MarketDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketDataPayload>
          }
          update: {
            args: Prisma.MarketDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketDataPayload>
          }
          deleteMany: {
            args: Prisma.MarketDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MarketDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MarketDataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketDataPayload>[]
          }
          upsert: {
            args: Prisma.MarketDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketDataPayload>
          }
          aggregate: {
            args: Prisma.MarketDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMarketData>
          }
          groupBy: {
            args: Prisma.MarketDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<MarketDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.MarketDataCountArgs<ExtArgs>
            result: $Utils.Optional<MarketDataCountAggregateOutputType> | number
          }
        }
      }
      Trade: {
        payload: Prisma.$TradePayload<ExtArgs>
        fields: Prisma.TradeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TradeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TradeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>
          }
          findFirst: {
            args: Prisma.TradeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TradeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>
          }
          findMany: {
            args: Prisma.TradeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>[]
          }
          create: {
            args: Prisma.TradeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>
          }
          createMany: {
            args: Prisma.TradeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TradeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>[]
          }
          delete: {
            args: Prisma.TradeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>
          }
          update: {
            args: Prisma.TradeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>
          }
          deleteMany: {
            args: Prisma.TradeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TradeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TradeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>[]
          }
          upsert: {
            args: Prisma.TradeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>
          }
          aggregate: {
            args: Prisma.TradeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrade>
          }
          groupBy: {
            args: Prisma.TradeGroupByArgs<ExtArgs>
            result: $Utils.Optional<TradeGroupByOutputType>[]
          }
          count: {
            args: Prisma.TradeCountArgs<ExtArgs>
            result: $Utils.Optional<TradeCountAggregateOutputType> | number
          }
        }
      }
      Market: {
        payload: Prisma.$MarketPayload<ExtArgs>
        fields: Prisma.MarketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MarketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MarketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>
          }
          findFirst: {
            args: Prisma.MarketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MarketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>
          }
          findMany: {
            args: Prisma.MarketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>[]
          }
          create: {
            args: Prisma.MarketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>
          }
          createMany: {
            args: Prisma.MarketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MarketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>[]
          }
          delete: {
            args: Prisma.MarketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>
          }
          update: {
            args: Prisma.MarketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>
          }
          deleteMany: {
            args: Prisma.MarketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MarketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MarketUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>[]
          }
          upsert: {
            args: Prisma.MarketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>
          }
          aggregate: {
            args: Prisma.MarketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMarket>
          }
          groupBy: {
            args: Prisma.MarketGroupByArgs<ExtArgs>
            result: $Utils.Optional<MarketGroupByOutputType>[]
          }
          count: {
            args: Prisma.MarketCountArgs<ExtArgs>
            result: $Utils.Optional<MarketCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      Position: {
        payload: Prisma.$PositionPayload<ExtArgs>
        fields: Prisma.PositionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PositionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PositionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>
          }
          findFirst: {
            args: Prisma.PositionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PositionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>
          }
          findMany: {
            args: Prisma.PositionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>[]
          }
          create: {
            args: Prisma.PositionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>
          }
          createMany: {
            args: Prisma.PositionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PositionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>[]
          }
          delete: {
            args: Prisma.PositionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>
          }
          update: {
            args: Prisma.PositionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>
          }
          deleteMany: {
            args: Prisma.PositionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PositionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PositionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>[]
          }
          upsert: {
            args: Prisma.PositionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>
          }
          aggregate: {
            args: Prisma.PositionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePosition>
          }
          groupBy: {
            args: Prisma.PositionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PositionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PositionCountArgs<ExtArgs>
            result: $Utils.Optional<PositionCountAggregateOutputType> | number
          }
        }
      }
      DiscussionThread: {
        payload: Prisma.$DiscussionThreadPayload<ExtArgs>
        fields: Prisma.DiscussionThreadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiscussionThreadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionThreadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiscussionThreadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionThreadPayload>
          }
          findFirst: {
            args: Prisma.DiscussionThreadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionThreadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiscussionThreadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionThreadPayload>
          }
          findMany: {
            args: Prisma.DiscussionThreadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionThreadPayload>[]
          }
          create: {
            args: Prisma.DiscussionThreadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionThreadPayload>
          }
          createMany: {
            args: Prisma.DiscussionThreadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DiscussionThreadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionThreadPayload>[]
          }
          delete: {
            args: Prisma.DiscussionThreadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionThreadPayload>
          }
          update: {
            args: Prisma.DiscussionThreadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionThreadPayload>
          }
          deleteMany: {
            args: Prisma.DiscussionThreadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DiscussionThreadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DiscussionThreadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionThreadPayload>[]
          }
          upsert: {
            args: Prisma.DiscussionThreadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionThreadPayload>
          }
          aggregate: {
            args: Prisma.DiscussionThreadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiscussionThread>
          }
          groupBy: {
            args: Prisma.DiscussionThreadGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiscussionThreadGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiscussionThreadCountArgs<ExtArgs>
            result: $Utils.Optional<DiscussionThreadCountAggregateOutputType> | number
          }
        }
      }
      DiscussionMessage: {
        payload: Prisma.$DiscussionMessagePayload<ExtArgs>
        fields: Prisma.DiscussionMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiscussionMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiscussionMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionMessagePayload>
          }
          findFirst: {
            args: Prisma.DiscussionMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiscussionMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionMessagePayload>
          }
          findMany: {
            args: Prisma.DiscussionMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionMessagePayload>[]
          }
          create: {
            args: Prisma.DiscussionMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionMessagePayload>
          }
          createMany: {
            args: Prisma.DiscussionMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DiscussionMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionMessagePayload>[]
          }
          delete: {
            args: Prisma.DiscussionMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionMessagePayload>
          }
          update: {
            args: Prisma.DiscussionMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionMessagePayload>
          }
          deleteMany: {
            args: Prisma.DiscussionMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DiscussionMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DiscussionMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionMessagePayload>[]
          }
          upsert: {
            args: Prisma.DiscussionMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionMessagePayload>
          }
          aggregate: {
            args: Prisma.DiscussionMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiscussionMessage>
          }
          groupBy: {
            args: Prisma.DiscussionMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiscussionMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiscussionMessageCountArgs<ExtArgs>
            result: $Utils.Optional<DiscussionMessageCountAggregateOutputType> | number
          }
        }
      }
      CreatorProfile: {
        payload: Prisma.$CreatorProfilePayload<ExtArgs>
        fields: Prisma.CreatorProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CreatorProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreatorProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CreatorProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreatorProfilePayload>
          }
          findFirst: {
            args: Prisma.CreatorProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreatorProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CreatorProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreatorProfilePayload>
          }
          findMany: {
            args: Prisma.CreatorProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreatorProfilePayload>[]
          }
          create: {
            args: Prisma.CreatorProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreatorProfilePayload>
          }
          createMany: {
            args: Prisma.CreatorProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CreatorProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreatorProfilePayload>[]
          }
          delete: {
            args: Prisma.CreatorProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreatorProfilePayload>
          }
          update: {
            args: Prisma.CreatorProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreatorProfilePayload>
          }
          deleteMany: {
            args: Prisma.CreatorProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CreatorProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CreatorProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreatorProfilePayload>[]
          }
          upsert: {
            args: Prisma.CreatorProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreatorProfilePayload>
          }
          aggregate: {
            args: Prisma.CreatorProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCreatorProfile>
          }
          groupBy: {
            args: Prisma.CreatorProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<CreatorProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.CreatorProfileCountArgs<ExtArgs>
            result: $Utils.Optional<CreatorProfileCountAggregateOutputType> | number
          }
        }
      }
      Embed: {
        payload: Prisma.$EmbedPayload<ExtArgs>
        fields: Prisma.EmbedFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmbedFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmbedPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmbedFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmbedPayload>
          }
          findFirst: {
            args: Prisma.EmbedFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmbedPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmbedFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmbedPayload>
          }
          findMany: {
            args: Prisma.EmbedFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmbedPayload>[]
          }
          create: {
            args: Prisma.EmbedCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmbedPayload>
          }
          createMany: {
            args: Prisma.EmbedCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmbedCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmbedPayload>[]
          }
          delete: {
            args: Prisma.EmbedDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmbedPayload>
          }
          update: {
            args: Prisma.EmbedUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmbedPayload>
          }
          deleteMany: {
            args: Prisma.EmbedDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmbedUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmbedUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmbedPayload>[]
          }
          upsert: {
            args: Prisma.EmbedUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmbedPayload>
          }
          aggregate: {
            args: Prisma.EmbedAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmbed>
          }
          groupBy: {
            args: Prisma.EmbedGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmbedGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmbedCountArgs<ExtArgs>
            result: $Utils.Optional<EmbedCountAggregateOutputType> | number
          }
        }
      }
      MemoryPointer: {
        payload: Prisma.$MemoryPointerPayload<ExtArgs>
        fields: Prisma.MemoryPointerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MemoryPointerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryPointerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MemoryPointerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryPointerPayload>
          }
          findFirst: {
            args: Prisma.MemoryPointerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryPointerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MemoryPointerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryPointerPayload>
          }
          findMany: {
            args: Prisma.MemoryPointerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryPointerPayload>[]
          }
          create: {
            args: Prisma.MemoryPointerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryPointerPayload>
          }
          createMany: {
            args: Prisma.MemoryPointerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MemoryPointerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryPointerPayload>[]
          }
          delete: {
            args: Prisma.MemoryPointerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryPointerPayload>
          }
          update: {
            args: Prisma.MemoryPointerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryPointerPayload>
          }
          deleteMany: {
            args: Prisma.MemoryPointerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MemoryPointerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MemoryPointerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryPointerPayload>[]
          }
          upsert: {
            args: Prisma.MemoryPointerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryPointerPayload>
          }
          aggregate: {
            args: Prisma.MemoryPointerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMemoryPointer>
          }
          groupBy: {
            args: Prisma.MemoryPointerGroupByArgs<ExtArgs>
            result: $Utils.Optional<MemoryPointerGroupByOutputType>[]
          }
          count: {
            args: Prisma.MemoryPointerCountArgs<ExtArgs>
            result: $Utils.Optional<MemoryPointerCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    prompt?: PromptOmit
    marketData?: MarketDataOmit
    trade?: TradeOmit
    market?: MarketOmit
    order?: OrderOmit
    position?: PositionOmit
    discussionThread?: DiscussionThreadOmit
    discussionMessage?: DiscussionMessageOmit
    creatorProfile?: CreatorProfileOmit
    embed?: EmbedOmit
    memoryPointer?: MemoryPointerOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    prompts: number
    trades: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prompts?: boolean | UserCountOutputTypeCountPromptsArgs
    trades?: boolean | UserCountOutputTypeCountTradesArgs
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
  export type UserCountOutputTypeCountPromptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromptWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTradesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TradeWhereInput
  }


  /**
   * Count Type MarketDataCountOutputType
   */

  export type MarketDataCountOutputType = {
    trades: number
  }

  export type MarketDataCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trades?: boolean | MarketDataCountOutputTypeCountTradesArgs
  }

  // Custom InputTypes
  /**
   * MarketDataCountOutputType without action
   */
  export type MarketDataCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketDataCountOutputType
     */
    select?: MarketDataCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MarketDataCountOutputType without action
   */
  export type MarketDataCountOutputTypeCountTradesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TradeWhereInput
  }


  /**
   * Count Type MarketCountOutputType
   */

  export type MarketCountOutputType = {
    orders: number
    positions: number
    embeds: number
  }

  export type MarketCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | MarketCountOutputTypeCountOrdersArgs
    positions?: boolean | MarketCountOutputTypeCountPositionsArgs
    embeds?: boolean | MarketCountOutputTypeCountEmbedsArgs
  }

  // Custom InputTypes
  /**
   * MarketCountOutputType without action
   */
  export type MarketCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketCountOutputType
     */
    select?: MarketCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MarketCountOutputType without action
   */
  export type MarketCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * MarketCountOutputType without action
   */
  export type MarketCountOutputTypeCountPositionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PositionWhereInput
  }

  /**
   * MarketCountOutputType without action
   */
  export type MarketCountOutputTypeCountEmbedsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmbedWhereInput
  }


  /**
   * Count Type DiscussionThreadCountOutputType
   */

  export type DiscussionThreadCountOutputType = {
    messages: number
  }

  export type DiscussionThreadCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | DiscussionThreadCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * DiscussionThreadCountOutputType without action
   */
  export type DiscussionThreadCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscussionThreadCountOutputType
     */
    select?: DiscussionThreadCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DiscussionThreadCountOutputType without action
   */
  export type DiscussionThreadCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiscussionMessageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    userId: string | null
    walletAddress: string | null
    safeAddress: string | null
    network: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    walletAddress: string | null
    safeAddress: string | null
    network: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    userId: number
    walletAddress: number
    safeAddress: number
    safeOwners: number
    network: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    userId?: true
    walletAddress?: true
    safeAddress?: true
    network?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    userId?: true
    walletAddress?: true
    safeAddress?: true
    network?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    userId?: true
    walletAddress?: true
    safeAddress?: true
    safeOwners?: true
    network?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    userId: string
    walletAddress: string | null
    safeAddress: string | null
    safeOwners: string[]
    network: string | null
    role: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
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


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    walletAddress?: boolean
    safeAddress?: boolean
    safeOwners?: boolean
    network?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    prompts?: boolean | User$promptsArgs<ExtArgs>
    trades?: boolean | User$tradesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    walletAddress?: boolean
    safeAddress?: boolean
    safeOwners?: boolean
    network?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    walletAddress?: boolean
    safeAddress?: boolean
    safeOwners?: boolean
    network?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    userId?: boolean
    walletAddress?: boolean
    safeAddress?: boolean
    safeOwners?: boolean
    network?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "walletAddress" | "safeAddress" | "safeOwners" | "network" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prompts?: boolean | User$promptsArgs<ExtArgs>
    trades?: boolean | User$tradesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      prompts: Prisma.$PromptPayload<ExtArgs>[]
      trades: Prisma.$TradePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      walletAddress: string | null
      safeAddress: string | null
      safeOwners: string[]
      network: string | null
      role: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
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
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prompts<T extends User$promptsArgs<ExtArgs> = {}>(args?: Subset<T, User$promptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    trades<T extends User$tradesArgs<ExtArgs> = {}>(args?: Subset<T, User$tradesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly userId: FieldRef<"User", 'String'>
    readonly walletAddress: FieldRef<"User", 'String'>
    readonly safeAddress: FieldRef<"User", 'String'>
    readonly safeOwners: FieldRef<"User", 'String[]'>
    readonly network: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.prompts
   */
  export type User$promptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInclude<ExtArgs> | null
    where?: PromptWhereInput
    orderBy?: PromptOrderByWithRelationInput | PromptOrderByWithRelationInput[]
    cursor?: PromptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PromptScalarFieldEnum | PromptScalarFieldEnum[]
  }

  /**
   * User.trades
   */
  export type User$tradesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    where?: TradeWhereInput
    orderBy?: TradeOrderByWithRelationInput | TradeOrderByWithRelationInput[]
    cursor?: TradeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TradeScalarFieldEnum | TradeScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Prompt
   */

  export type AggregatePrompt = {
    _count: PromptCountAggregateOutputType | null
    _avg: PromptAvgAggregateOutputType | null
    _sum: PromptSumAggregateOutputType | null
    _min: PromptMinAggregateOutputType | null
    _max: PromptMaxAggregateOutputType | null
  }

  export type PromptAvgAggregateOutputType = {
    tokens: number | null
  }

  export type PromptSumAggregateOutputType = {
    tokens: number | null
  }

  export type PromptMinAggregateOutputType = {
    id: string | null
    userId: string | null
    content: string | null
    response: string | null
    tokens: number | null
    createdAt: Date | null
  }

  export type PromptMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    content: string | null
    response: string | null
    tokens: number | null
    createdAt: Date | null
  }

  export type PromptCountAggregateOutputType = {
    id: number
    userId: number
    content: number
    response: number
    tokens: number
    createdAt: number
    _all: number
  }


  export type PromptAvgAggregateInputType = {
    tokens?: true
  }

  export type PromptSumAggregateInputType = {
    tokens?: true
  }

  export type PromptMinAggregateInputType = {
    id?: true
    userId?: true
    content?: true
    response?: true
    tokens?: true
    createdAt?: true
  }

  export type PromptMaxAggregateInputType = {
    id?: true
    userId?: true
    content?: true
    response?: true
    tokens?: true
    createdAt?: true
  }

  export type PromptCountAggregateInputType = {
    id?: true
    userId?: true
    content?: true
    response?: true
    tokens?: true
    createdAt?: true
    _all?: true
  }

  export type PromptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prompt to aggregate.
     */
    where?: PromptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prompts to fetch.
     */
    orderBy?: PromptOrderByWithRelationInput | PromptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PromptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prompts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Prompts
    **/
    _count?: true | PromptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PromptAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PromptSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PromptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PromptMaxAggregateInputType
  }

  export type GetPromptAggregateType<T extends PromptAggregateArgs> = {
        [P in keyof T & keyof AggregatePrompt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrompt[P]>
      : GetScalarType<T[P], AggregatePrompt[P]>
  }




  export type PromptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromptWhereInput
    orderBy?: PromptOrderByWithAggregationInput | PromptOrderByWithAggregationInput[]
    by: PromptScalarFieldEnum[] | PromptScalarFieldEnum
    having?: PromptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PromptCountAggregateInputType | true
    _avg?: PromptAvgAggregateInputType
    _sum?: PromptSumAggregateInputType
    _min?: PromptMinAggregateInputType
    _max?: PromptMaxAggregateInputType
  }

  export type PromptGroupByOutputType = {
    id: string
    userId: string
    content: string
    response: string | null
    tokens: number | null
    createdAt: Date
    _count: PromptCountAggregateOutputType | null
    _avg: PromptAvgAggregateOutputType | null
    _sum: PromptSumAggregateOutputType | null
    _min: PromptMinAggregateOutputType | null
    _max: PromptMaxAggregateOutputType | null
  }

  type GetPromptGroupByPayload<T extends PromptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PromptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PromptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PromptGroupByOutputType[P]>
            : GetScalarType<T[P], PromptGroupByOutputType[P]>
        }
      >
    >


  export type PromptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    content?: boolean
    response?: boolean
    tokens?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prompt"]>

  export type PromptSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    content?: boolean
    response?: boolean
    tokens?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prompt"]>

  export type PromptSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    content?: boolean
    response?: boolean
    tokens?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prompt"]>

  export type PromptSelectScalar = {
    id?: boolean
    userId?: boolean
    content?: boolean
    response?: boolean
    tokens?: boolean
    createdAt?: boolean
  }

  export type PromptOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "content" | "response" | "tokens" | "createdAt", ExtArgs["result"]["prompt"]>
  export type PromptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PromptIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PromptIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PromptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Prompt"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      content: string
      response: string | null
      tokens: number | null
      createdAt: Date
    }, ExtArgs["result"]["prompt"]>
    composites: {}
  }

  type PromptGetPayload<S extends boolean | null | undefined | PromptDefaultArgs> = $Result.GetResult<Prisma.$PromptPayload, S>

  type PromptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PromptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PromptCountAggregateInputType | true
    }

  export interface PromptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Prompt'], meta: { name: 'Prompt' } }
    /**
     * Find zero or one Prompt that matches the filter.
     * @param {PromptFindUniqueArgs} args - Arguments to find a Prompt
     * @example
     * // Get one Prompt
     * const prompt = await prisma.prompt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PromptFindUniqueArgs>(args: SelectSubset<T, PromptFindUniqueArgs<ExtArgs>>): Prisma__PromptClient<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Prompt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PromptFindUniqueOrThrowArgs} args - Arguments to find a Prompt
     * @example
     * // Get one Prompt
     * const prompt = await prisma.prompt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PromptFindUniqueOrThrowArgs>(args: SelectSubset<T, PromptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PromptClient<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prompt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptFindFirstArgs} args - Arguments to find a Prompt
     * @example
     * // Get one Prompt
     * const prompt = await prisma.prompt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PromptFindFirstArgs>(args?: SelectSubset<T, PromptFindFirstArgs<ExtArgs>>): Prisma__PromptClient<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prompt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptFindFirstOrThrowArgs} args - Arguments to find a Prompt
     * @example
     * // Get one Prompt
     * const prompt = await prisma.prompt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PromptFindFirstOrThrowArgs>(args?: SelectSubset<T, PromptFindFirstOrThrowArgs<ExtArgs>>): Prisma__PromptClient<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Prompts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prompts
     * const prompts = await prisma.prompt.findMany()
     * 
     * // Get first 10 Prompts
     * const prompts = await prisma.prompt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const promptWithIdOnly = await prisma.prompt.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PromptFindManyArgs>(args?: SelectSubset<T, PromptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Prompt.
     * @param {PromptCreateArgs} args - Arguments to create a Prompt.
     * @example
     * // Create one Prompt
     * const Prompt = await prisma.prompt.create({
     *   data: {
     *     // ... data to create a Prompt
     *   }
     * })
     * 
     */
    create<T extends PromptCreateArgs>(args: SelectSubset<T, PromptCreateArgs<ExtArgs>>): Prisma__PromptClient<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Prompts.
     * @param {PromptCreateManyArgs} args - Arguments to create many Prompts.
     * @example
     * // Create many Prompts
     * const prompt = await prisma.prompt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PromptCreateManyArgs>(args?: SelectSubset<T, PromptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Prompts and returns the data saved in the database.
     * @param {PromptCreateManyAndReturnArgs} args - Arguments to create many Prompts.
     * @example
     * // Create many Prompts
     * const prompt = await prisma.prompt.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Prompts and only return the `id`
     * const promptWithIdOnly = await prisma.prompt.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PromptCreateManyAndReturnArgs>(args?: SelectSubset<T, PromptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Prompt.
     * @param {PromptDeleteArgs} args - Arguments to delete one Prompt.
     * @example
     * // Delete one Prompt
     * const Prompt = await prisma.prompt.delete({
     *   where: {
     *     // ... filter to delete one Prompt
     *   }
     * })
     * 
     */
    delete<T extends PromptDeleteArgs>(args: SelectSubset<T, PromptDeleteArgs<ExtArgs>>): Prisma__PromptClient<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Prompt.
     * @param {PromptUpdateArgs} args - Arguments to update one Prompt.
     * @example
     * // Update one Prompt
     * const prompt = await prisma.prompt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PromptUpdateArgs>(args: SelectSubset<T, PromptUpdateArgs<ExtArgs>>): Prisma__PromptClient<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Prompts.
     * @param {PromptDeleteManyArgs} args - Arguments to filter Prompts to delete.
     * @example
     * // Delete a few Prompts
     * const { count } = await prisma.prompt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PromptDeleteManyArgs>(args?: SelectSubset<T, PromptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prompts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prompts
     * const prompt = await prisma.prompt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PromptUpdateManyArgs>(args: SelectSubset<T, PromptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prompts and returns the data updated in the database.
     * @param {PromptUpdateManyAndReturnArgs} args - Arguments to update many Prompts.
     * @example
     * // Update many Prompts
     * const prompt = await prisma.prompt.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Prompts and only return the `id`
     * const promptWithIdOnly = await prisma.prompt.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PromptUpdateManyAndReturnArgs>(args: SelectSubset<T, PromptUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Prompt.
     * @param {PromptUpsertArgs} args - Arguments to update or create a Prompt.
     * @example
     * // Update or create a Prompt
     * const prompt = await prisma.prompt.upsert({
     *   create: {
     *     // ... data to create a Prompt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prompt we want to update
     *   }
     * })
     */
    upsert<T extends PromptUpsertArgs>(args: SelectSubset<T, PromptUpsertArgs<ExtArgs>>): Prisma__PromptClient<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Prompts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptCountArgs} args - Arguments to filter Prompts to count.
     * @example
     * // Count the number of Prompts
     * const count = await prisma.prompt.count({
     *   where: {
     *     // ... the filter for the Prompts we want to count
     *   }
     * })
    **/
    count<T extends PromptCountArgs>(
      args?: Subset<T, PromptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PromptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prompt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PromptAggregateArgs>(args: Subset<T, PromptAggregateArgs>): Prisma.PrismaPromise<GetPromptAggregateType<T>>

    /**
     * Group by Prompt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptGroupByArgs} args - Group by arguments.
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
      T extends PromptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PromptGroupByArgs['orderBy'] }
        : { orderBy?: PromptGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PromptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPromptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Prompt model
   */
  readonly fields: PromptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Prompt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PromptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Prompt model
   */
  interface PromptFieldRefs {
    readonly id: FieldRef<"Prompt", 'String'>
    readonly userId: FieldRef<"Prompt", 'String'>
    readonly content: FieldRef<"Prompt", 'String'>
    readonly response: FieldRef<"Prompt", 'String'>
    readonly tokens: FieldRef<"Prompt", 'Int'>
    readonly createdAt: FieldRef<"Prompt", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Prompt findUnique
   */
  export type PromptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInclude<ExtArgs> | null
    /**
     * Filter, which Prompt to fetch.
     */
    where: PromptWhereUniqueInput
  }

  /**
   * Prompt findUniqueOrThrow
   */
  export type PromptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInclude<ExtArgs> | null
    /**
     * Filter, which Prompt to fetch.
     */
    where: PromptWhereUniqueInput
  }

  /**
   * Prompt findFirst
   */
  export type PromptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInclude<ExtArgs> | null
    /**
     * Filter, which Prompt to fetch.
     */
    where?: PromptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prompts to fetch.
     */
    orderBy?: PromptOrderByWithRelationInput | PromptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prompts.
     */
    cursor?: PromptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prompts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prompts.
     */
    distinct?: PromptScalarFieldEnum | PromptScalarFieldEnum[]
  }

  /**
   * Prompt findFirstOrThrow
   */
  export type PromptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInclude<ExtArgs> | null
    /**
     * Filter, which Prompt to fetch.
     */
    where?: PromptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prompts to fetch.
     */
    orderBy?: PromptOrderByWithRelationInput | PromptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prompts.
     */
    cursor?: PromptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prompts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prompts.
     */
    distinct?: PromptScalarFieldEnum | PromptScalarFieldEnum[]
  }

  /**
   * Prompt findMany
   */
  export type PromptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInclude<ExtArgs> | null
    /**
     * Filter, which Prompts to fetch.
     */
    where?: PromptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prompts to fetch.
     */
    orderBy?: PromptOrderByWithRelationInput | PromptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Prompts.
     */
    cursor?: PromptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prompts.
     */
    skip?: number
    distinct?: PromptScalarFieldEnum | PromptScalarFieldEnum[]
  }

  /**
   * Prompt create
   */
  export type PromptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInclude<ExtArgs> | null
    /**
     * The data needed to create a Prompt.
     */
    data: XOR<PromptCreateInput, PromptUncheckedCreateInput>
  }

  /**
   * Prompt createMany
   */
  export type PromptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Prompts.
     */
    data: PromptCreateManyInput | PromptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Prompt createManyAndReturn
   */
  export type PromptCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * The data used to create many Prompts.
     */
    data: PromptCreateManyInput | PromptCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Prompt update
   */
  export type PromptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInclude<ExtArgs> | null
    /**
     * The data needed to update a Prompt.
     */
    data: XOR<PromptUpdateInput, PromptUncheckedUpdateInput>
    /**
     * Choose, which Prompt to update.
     */
    where: PromptWhereUniqueInput
  }

  /**
   * Prompt updateMany
   */
  export type PromptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Prompts.
     */
    data: XOR<PromptUpdateManyMutationInput, PromptUncheckedUpdateManyInput>
    /**
     * Filter which Prompts to update
     */
    where?: PromptWhereInput
    /**
     * Limit how many Prompts to update.
     */
    limit?: number
  }

  /**
   * Prompt updateManyAndReturn
   */
  export type PromptUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * The data used to update Prompts.
     */
    data: XOR<PromptUpdateManyMutationInput, PromptUncheckedUpdateManyInput>
    /**
     * Filter which Prompts to update
     */
    where?: PromptWhereInput
    /**
     * Limit how many Prompts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Prompt upsert
   */
  export type PromptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInclude<ExtArgs> | null
    /**
     * The filter to search for the Prompt to update in case it exists.
     */
    where: PromptWhereUniqueInput
    /**
     * In case the Prompt found by the `where` argument doesn't exist, create a new Prompt with this data.
     */
    create: XOR<PromptCreateInput, PromptUncheckedCreateInput>
    /**
     * In case the Prompt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PromptUpdateInput, PromptUncheckedUpdateInput>
  }

  /**
   * Prompt delete
   */
  export type PromptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInclude<ExtArgs> | null
    /**
     * Filter which Prompt to delete.
     */
    where: PromptWhereUniqueInput
  }

  /**
   * Prompt deleteMany
   */
  export type PromptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prompts to delete
     */
    where?: PromptWhereInput
    /**
     * Limit how many Prompts to delete.
     */
    limit?: number
  }

  /**
   * Prompt without action
   */
  export type PromptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInclude<ExtArgs> | null
  }


  /**
   * Model MarketData
   */

  export type AggregateMarketData = {
    _count: MarketDataCountAggregateOutputType | null
    _avg: MarketDataAvgAggregateOutputType | null
    _sum: MarketDataSumAggregateOutputType | null
    _min: MarketDataMinAggregateOutputType | null
    _max: MarketDataMaxAggregateOutputType | null
  }

  export type MarketDataAvgAggregateOutputType = {
    volume: number | null
    probability: number | null
  }

  export type MarketDataSumAggregateOutputType = {
    volume: number | null
    probability: number | null
  }

  export type MarketDataMinAggregateOutputType = {
    id: string | null
    marketId: string | null
    question: string | null
    volume: number | null
    probability: number | null
    source: string | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type MarketDataMaxAggregateOutputType = {
    id: string | null
    marketId: string | null
    question: string | null
    volume: number | null
    probability: number | null
    source: string | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type MarketDataCountAggregateOutputType = {
    id: number
    marketId: number
    question: number
    volume: number
    probability: number
    source: number
    data: number
    updatedAt: number
    createdAt: number
    _all: number
  }


  export type MarketDataAvgAggregateInputType = {
    volume?: true
    probability?: true
  }

  export type MarketDataSumAggregateInputType = {
    volume?: true
    probability?: true
  }

  export type MarketDataMinAggregateInputType = {
    id?: true
    marketId?: true
    question?: true
    volume?: true
    probability?: true
    source?: true
    updatedAt?: true
    createdAt?: true
  }

  export type MarketDataMaxAggregateInputType = {
    id?: true
    marketId?: true
    question?: true
    volume?: true
    probability?: true
    source?: true
    updatedAt?: true
    createdAt?: true
  }

  export type MarketDataCountAggregateInputType = {
    id?: true
    marketId?: true
    question?: true
    volume?: true
    probability?: true
    source?: true
    data?: true
    updatedAt?: true
    createdAt?: true
    _all?: true
  }

  export type MarketDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MarketData to aggregate.
     */
    where?: MarketDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketData to fetch.
     */
    orderBy?: MarketDataOrderByWithRelationInput | MarketDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MarketDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MarketData
    **/
    _count?: true | MarketDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MarketDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MarketDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MarketDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MarketDataMaxAggregateInputType
  }

  export type GetMarketDataAggregateType<T extends MarketDataAggregateArgs> = {
        [P in keyof T & keyof AggregateMarketData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMarketData[P]>
      : GetScalarType<T[P], AggregateMarketData[P]>
  }




  export type MarketDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarketDataWhereInput
    orderBy?: MarketDataOrderByWithAggregationInput | MarketDataOrderByWithAggregationInput[]
    by: MarketDataScalarFieldEnum[] | MarketDataScalarFieldEnum
    having?: MarketDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MarketDataCountAggregateInputType | true
    _avg?: MarketDataAvgAggregateInputType
    _sum?: MarketDataSumAggregateInputType
    _min?: MarketDataMinAggregateInputType
    _max?: MarketDataMaxAggregateInputType
  }

  export type MarketDataGroupByOutputType = {
    id: string
    marketId: string
    question: string
    volume: number | null
    probability: number | null
    source: string
    data: JsonValue | null
    updatedAt: Date
    createdAt: Date
    _count: MarketDataCountAggregateOutputType | null
    _avg: MarketDataAvgAggregateOutputType | null
    _sum: MarketDataSumAggregateOutputType | null
    _min: MarketDataMinAggregateOutputType | null
    _max: MarketDataMaxAggregateOutputType | null
  }

  type GetMarketDataGroupByPayload<T extends MarketDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MarketDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MarketDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MarketDataGroupByOutputType[P]>
            : GetScalarType<T[P], MarketDataGroupByOutputType[P]>
        }
      >
    >


  export type MarketDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    marketId?: boolean
    question?: boolean
    volume?: boolean
    probability?: boolean
    source?: boolean
    data?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    trades?: boolean | MarketData$tradesArgs<ExtArgs>
    _count?: boolean | MarketDataCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["marketData"]>

  export type MarketDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    marketId?: boolean
    question?: boolean
    volume?: boolean
    probability?: boolean
    source?: boolean
    data?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["marketData"]>

  export type MarketDataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    marketId?: boolean
    question?: boolean
    volume?: boolean
    probability?: boolean
    source?: boolean
    data?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["marketData"]>

  export type MarketDataSelectScalar = {
    id?: boolean
    marketId?: boolean
    question?: boolean
    volume?: boolean
    probability?: boolean
    source?: boolean
    data?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }

  export type MarketDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "marketId" | "question" | "volume" | "probability" | "source" | "data" | "updatedAt" | "createdAt", ExtArgs["result"]["marketData"]>
  export type MarketDataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trades?: boolean | MarketData$tradesArgs<ExtArgs>
    _count?: boolean | MarketDataCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MarketDataIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MarketDataIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MarketDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MarketData"
    objects: {
      trades: Prisma.$TradePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      marketId: string
      question: string
      volume: number | null
      probability: number | null
      source: string
      data: Prisma.JsonValue | null
      updatedAt: Date
      createdAt: Date
    }, ExtArgs["result"]["marketData"]>
    composites: {}
  }

  type MarketDataGetPayload<S extends boolean | null | undefined | MarketDataDefaultArgs> = $Result.GetResult<Prisma.$MarketDataPayload, S>

  type MarketDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MarketDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MarketDataCountAggregateInputType | true
    }

  export interface MarketDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MarketData'], meta: { name: 'MarketData' } }
    /**
     * Find zero or one MarketData that matches the filter.
     * @param {MarketDataFindUniqueArgs} args - Arguments to find a MarketData
     * @example
     * // Get one MarketData
     * const marketData = await prisma.marketData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MarketDataFindUniqueArgs>(args: SelectSubset<T, MarketDataFindUniqueArgs<ExtArgs>>): Prisma__MarketDataClient<$Result.GetResult<Prisma.$MarketDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MarketData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MarketDataFindUniqueOrThrowArgs} args - Arguments to find a MarketData
     * @example
     * // Get one MarketData
     * const marketData = await prisma.marketData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MarketDataFindUniqueOrThrowArgs>(args: SelectSubset<T, MarketDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MarketDataClient<$Result.GetResult<Prisma.$MarketDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MarketData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketDataFindFirstArgs} args - Arguments to find a MarketData
     * @example
     * // Get one MarketData
     * const marketData = await prisma.marketData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MarketDataFindFirstArgs>(args?: SelectSubset<T, MarketDataFindFirstArgs<ExtArgs>>): Prisma__MarketDataClient<$Result.GetResult<Prisma.$MarketDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MarketData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketDataFindFirstOrThrowArgs} args - Arguments to find a MarketData
     * @example
     * // Get one MarketData
     * const marketData = await prisma.marketData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MarketDataFindFirstOrThrowArgs>(args?: SelectSubset<T, MarketDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__MarketDataClient<$Result.GetResult<Prisma.$MarketDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MarketData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MarketData
     * const marketData = await prisma.marketData.findMany()
     * 
     * // Get first 10 MarketData
     * const marketData = await prisma.marketData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const marketDataWithIdOnly = await prisma.marketData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MarketDataFindManyArgs>(args?: SelectSubset<T, MarketDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MarketData.
     * @param {MarketDataCreateArgs} args - Arguments to create a MarketData.
     * @example
     * // Create one MarketData
     * const MarketData = await prisma.marketData.create({
     *   data: {
     *     // ... data to create a MarketData
     *   }
     * })
     * 
     */
    create<T extends MarketDataCreateArgs>(args: SelectSubset<T, MarketDataCreateArgs<ExtArgs>>): Prisma__MarketDataClient<$Result.GetResult<Prisma.$MarketDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MarketData.
     * @param {MarketDataCreateManyArgs} args - Arguments to create many MarketData.
     * @example
     * // Create many MarketData
     * const marketData = await prisma.marketData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MarketDataCreateManyArgs>(args?: SelectSubset<T, MarketDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MarketData and returns the data saved in the database.
     * @param {MarketDataCreateManyAndReturnArgs} args - Arguments to create many MarketData.
     * @example
     * // Create many MarketData
     * const marketData = await prisma.marketData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MarketData and only return the `id`
     * const marketDataWithIdOnly = await prisma.marketData.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MarketDataCreateManyAndReturnArgs>(args?: SelectSubset<T, MarketDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketDataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MarketData.
     * @param {MarketDataDeleteArgs} args - Arguments to delete one MarketData.
     * @example
     * // Delete one MarketData
     * const MarketData = await prisma.marketData.delete({
     *   where: {
     *     // ... filter to delete one MarketData
     *   }
     * })
     * 
     */
    delete<T extends MarketDataDeleteArgs>(args: SelectSubset<T, MarketDataDeleteArgs<ExtArgs>>): Prisma__MarketDataClient<$Result.GetResult<Prisma.$MarketDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MarketData.
     * @param {MarketDataUpdateArgs} args - Arguments to update one MarketData.
     * @example
     * // Update one MarketData
     * const marketData = await prisma.marketData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MarketDataUpdateArgs>(args: SelectSubset<T, MarketDataUpdateArgs<ExtArgs>>): Prisma__MarketDataClient<$Result.GetResult<Prisma.$MarketDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MarketData.
     * @param {MarketDataDeleteManyArgs} args - Arguments to filter MarketData to delete.
     * @example
     * // Delete a few MarketData
     * const { count } = await prisma.marketData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MarketDataDeleteManyArgs>(args?: SelectSubset<T, MarketDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MarketData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MarketData
     * const marketData = await prisma.marketData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MarketDataUpdateManyArgs>(args: SelectSubset<T, MarketDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MarketData and returns the data updated in the database.
     * @param {MarketDataUpdateManyAndReturnArgs} args - Arguments to update many MarketData.
     * @example
     * // Update many MarketData
     * const marketData = await prisma.marketData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MarketData and only return the `id`
     * const marketDataWithIdOnly = await prisma.marketData.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MarketDataUpdateManyAndReturnArgs>(args: SelectSubset<T, MarketDataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketDataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MarketData.
     * @param {MarketDataUpsertArgs} args - Arguments to update or create a MarketData.
     * @example
     * // Update or create a MarketData
     * const marketData = await prisma.marketData.upsert({
     *   create: {
     *     // ... data to create a MarketData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MarketData we want to update
     *   }
     * })
     */
    upsert<T extends MarketDataUpsertArgs>(args: SelectSubset<T, MarketDataUpsertArgs<ExtArgs>>): Prisma__MarketDataClient<$Result.GetResult<Prisma.$MarketDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MarketData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketDataCountArgs} args - Arguments to filter MarketData to count.
     * @example
     * // Count the number of MarketData
     * const count = await prisma.marketData.count({
     *   where: {
     *     // ... the filter for the MarketData we want to count
     *   }
     * })
    **/
    count<T extends MarketDataCountArgs>(
      args?: Subset<T, MarketDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MarketDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MarketData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MarketDataAggregateArgs>(args: Subset<T, MarketDataAggregateArgs>): Prisma.PrismaPromise<GetMarketDataAggregateType<T>>

    /**
     * Group by MarketData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketDataGroupByArgs} args - Group by arguments.
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
      T extends MarketDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MarketDataGroupByArgs['orderBy'] }
        : { orderBy?: MarketDataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MarketDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarketDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MarketData model
   */
  readonly fields: MarketDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MarketData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MarketDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trades<T extends MarketData$tradesArgs<ExtArgs> = {}>(args?: Subset<T, MarketData$tradesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the MarketData model
   */
  interface MarketDataFieldRefs {
    readonly id: FieldRef<"MarketData", 'String'>
    readonly marketId: FieldRef<"MarketData", 'String'>
    readonly question: FieldRef<"MarketData", 'String'>
    readonly volume: FieldRef<"MarketData", 'Float'>
    readonly probability: FieldRef<"MarketData", 'Float'>
    readonly source: FieldRef<"MarketData", 'String'>
    readonly data: FieldRef<"MarketData", 'Json'>
    readonly updatedAt: FieldRef<"MarketData", 'DateTime'>
    readonly createdAt: FieldRef<"MarketData", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MarketData findUnique
   */
  export type MarketDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketData
     */
    select?: MarketDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketData
     */
    omit?: MarketDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketDataInclude<ExtArgs> | null
    /**
     * Filter, which MarketData to fetch.
     */
    where: MarketDataWhereUniqueInput
  }

  /**
   * MarketData findUniqueOrThrow
   */
  export type MarketDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketData
     */
    select?: MarketDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketData
     */
    omit?: MarketDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketDataInclude<ExtArgs> | null
    /**
     * Filter, which MarketData to fetch.
     */
    where: MarketDataWhereUniqueInput
  }

  /**
   * MarketData findFirst
   */
  export type MarketDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketData
     */
    select?: MarketDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketData
     */
    omit?: MarketDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketDataInclude<ExtArgs> | null
    /**
     * Filter, which MarketData to fetch.
     */
    where?: MarketDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketData to fetch.
     */
    orderBy?: MarketDataOrderByWithRelationInput | MarketDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MarketData.
     */
    cursor?: MarketDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MarketData.
     */
    distinct?: MarketDataScalarFieldEnum | MarketDataScalarFieldEnum[]
  }

  /**
   * MarketData findFirstOrThrow
   */
  export type MarketDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketData
     */
    select?: MarketDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketData
     */
    omit?: MarketDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketDataInclude<ExtArgs> | null
    /**
     * Filter, which MarketData to fetch.
     */
    where?: MarketDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketData to fetch.
     */
    orderBy?: MarketDataOrderByWithRelationInput | MarketDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MarketData.
     */
    cursor?: MarketDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MarketData.
     */
    distinct?: MarketDataScalarFieldEnum | MarketDataScalarFieldEnum[]
  }

  /**
   * MarketData findMany
   */
  export type MarketDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketData
     */
    select?: MarketDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketData
     */
    omit?: MarketDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketDataInclude<ExtArgs> | null
    /**
     * Filter, which MarketData to fetch.
     */
    where?: MarketDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketData to fetch.
     */
    orderBy?: MarketDataOrderByWithRelationInput | MarketDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MarketData.
     */
    cursor?: MarketDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketData.
     */
    skip?: number
    distinct?: MarketDataScalarFieldEnum | MarketDataScalarFieldEnum[]
  }

  /**
   * MarketData create
   */
  export type MarketDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketData
     */
    select?: MarketDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketData
     */
    omit?: MarketDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketDataInclude<ExtArgs> | null
    /**
     * The data needed to create a MarketData.
     */
    data: XOR<MarketDataCreateInput, MarketDataUncheckedCreateInput>
  }

  /**
   * MarketData createMany
   */
  export type MarketDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MarketData.
     */
    data: MarketDataCreateManyInput | MarketDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MarketData createManyAndReturn
   */
  export type MarketDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketData
     */
    select?: MarketDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MarketData
     */
    omit?: MarketDataOmit<ExtArgs> | null
    /**
     * The data used to create many MarketData.
     */
    data: MarketDataCreateManyInput | MarketDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MarketData update
   */
  export type MarketDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketData
     */
    select?: MarketDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketData
     */
    omit?: MarketDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketDataInclude<ExtArgs> | null
    /**
     * The data needed to update a MarketData.
     */
    data: XOR<MarketDataUpdateInput, MarketDataUncheckedUpdateInput>
    /**
     * Choose, which MarketData to update.
     */
    where: MarketDataWhereUniqueInput
  }

  /**
   * MarketData updateMany
   */
  export type MarketDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MarketData.
     */
    data: XOR<MarketDataUpdateManyMutationInput, MarketDataUncheckedUpdateManyInput>
    /**
     * Filter which MarketData to update
     */
    where?: MarketDataWhereInput
    /**
     * Limit how many MarketData to update.
     */
    limit?: number
  }

  /**
   * MarketData updateManyAndReturn
   */
  export type MarketDataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketData
     */
    select?: MarketDataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MarketData
     */
    omit?: MarketDataOmit<ExtArgs> | null
    /**
     * The data used to update MarketData.
     */
    data: XOR<MarketDataUpdateManyMutationInput, MarketDataUncheckedUpdateManyInput>
    /**
     * Filter which MarketData to update
     */
    where?: MarketDataWhereInput
    /**
     * Limit how many MarketData to update.
     */
    limit?: number
  }

  /**
   * MarketData upsert
   */
  export type MarketDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketData
     */
    select?: MarketDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketData
     */
    omit?: MarketDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketDataInclude<ExtArgs> | null
    /**
     * The filter to search for the MarketData to update in case it exists.
     */
    where: MarketDataWhereUniqueInput
    /**
     * In case the MarketData found by the `where` argument doesn't exist, create a new MarketData with this data.
     */
    create: XOR<MarketDataCreateInput, MarketDataUncheckedCreateInput>
    /**
     * In case the MarketData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MarketDataUpdateInput, MarketDataUncheckedUpdateInput>
  }

  /**
   * MarketData delete
   */
  export type MarketDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketData
     */
    select?: MarketDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketData
     */
    omit?: MarketDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketDataInclude<ExtArgs> | null
    /**
     * Filter which MarketData to delete.
     */
    where: MarketDataWhereUniqueInput
  }

  /**
   * MarketData deleteMany
   */
  export type MarketDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MarketData to delete
     */
    where?: MarketDataWhereInput
    /**
     * Limit how many MarketData to delete.
     */
    limit?: number
  }

  /**
   * MarketData.trades
   */
  export type MarketData$tradesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    where?: TradeWhereInput
    orderBy?: TradeOrderByWithRelationInput | TradeOrderByWithRelationInput[]
    cursor?: TradeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TradeScalarFieldEnum | TradeScalarFieldEnum[]
  }

  /**
   * MarketData without action
   */
  export type MarketDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketData
     */
    select?: MarketDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketData
     */
    omit?: MarketDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketDataInclude<ExtArgs> | null
  }


  /**
   * Model Trade
   */

  export type AggregateTrade = {
    _count: TradeCountAggregateOutputType | null
    _avg: TradeAvgAggregateOutputType | null
    _sum: TradeSumAggregateOutputType | null
    _min: TradeMinAggregateOutputType | null
    _max: TradeMaxAggregateOutputType | null
  }

  export type TradeAvgAggregateOutputType = {
    amount: number | null
  }

  export type TradeSumAggregateOutputType = {
    amount: number | null
  }

  export type TradeMinAggregateOutputType = {
    id: string | null
    userId: string | null
    marketDataId: string | null
    amount: number | null
    side: string | null
    status: string | null
    txHash: string | null
    createdAt: Date | null
  }

  export type TradeMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    marketDataId: string | null
    amount: number | null
    side: string | null
    status: string | null
    txHash: string | null
    createdAt: Date | null
  }

  export type TradeCountAggregateOutputType = {
    id: number
    userId: number
    marketDataId: number
    amount: number
    side: number
    status: number
    txHash: number
    createdAt: number
    _all: number
  }


  export type TradeAvgAggregateInputType = {
    amount?: true
  }

  export type TradeSumAggregateInputType = {
    amount?: true
  }

  export type TradeMinAggregateInputType = {
    id?: true
    userId?: true
    marketDataId?: true
    amount?: true
    side?: true
    status?: true
    txHash?: true
    createdAt?: true
  }

  export type TradeMaxAggregateInputType = {
    id?: true
    userId?: true
    marketDataId?: true
    amount?: true
    side?: true
    status?: true
    txHash?: true
    createdAt?: true
  }

  export type TradeCountAggregateInputType = {
    id?: true
    userId?: true
    marketDataId?: true
    amount?: true
    side?: true
    status?: true
    txHash?: true
    createdAt?: true
    _all?: true
  }

  export type TradeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trade to aggregate.
     */
    where?: TradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trades to fetch.
     */
    orderBy?: TradeOrderByWithRelationInput | TradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Trades
    **/
    _count?: true | TradeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TradeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TradeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TradeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TradeMaxAggregateInputType
  }

  export type GetTradeAggregateType<T extends TradeAggregateArgs> = {
        [P in keyof T & keyof AggregateTrade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrade[P]>
      : GetScalarType<T[P], AggregateTrade[P]>
  }




  export type TradeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TradeWhereInput
    orderBy?: TradeOrderByWithAggregationInput | TradeOrderByWithAggregationInput[]
    by: TradeScalarFieldEnum[] | TradeScalarFieldEnum
    having?: TradeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TradeCountAggregateInputType | true
    _avg?: TradeAvgAggregateInputType
    _sum?: TradeSumAggregateInputType
    _min?: TradeMinAggregateInputType
    _max?: TradeMaxAggregateInputType
  }

  export type TradeGroupByOutputType = {
    id: string
    userId: string
    marketDataId: string
    amount: number
    side: string
    status: string
    txHash: string | null
    createdAt: Date
    _count: TradeCountAggregateOutputType | null
    _avg: TradeAvgAggregateOutputType | null
    _sum: TradeSumAggregateOutputType | null
    _min: TradeMinAggregateOutputType | null
    _max: TradeMaxAggregateOutputType | null
  }

  type GetTradeGroupByPayload<T extends TradeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TradeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TradeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TradeGroupByOutputType[P]>
            : GetScalarType<T[P], TradeGroupByOutputType[P]>
        }
      >
    >


  export type TradeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    marketDataId?: boolean
    amount?: boolean
    side?: boolean
    status?: boolean
    txHash?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    market?: boolean | MarketDataDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trade"]>

  export type TradeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    marketDataId?: boolean
    amount?: boolean
    side?: boolean
    status?: boolean
    txHash?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    market?: boolean | MarketDataDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trade"]>

  export type TradeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    marketDataId?: boolean
    amount?: boolean
    side?: boolean
    status?: boolean
    txHash?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    market?: boolean | MarketDataDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trade"]>

  export type TradeSelectScalar = {
    id?: boolean
    userId?: boolean
    marketDataId?: boolean
    amount?: boolean
    side?: boolean
    status?: boolean
    txHash?: boolean
    createdAt?: boolean
  }

  export type TradeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "marketDataId" | "amount" | "side" | "status" | "txHash" | "createdAt", ExtArgs["result"]["trade"]>
  export type TradeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    market?: boolean | MarketDataDefaultArgs<ExtArgs>
  }
  export type TradeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    market?: boolean | MarketDataDefaultArgs<ExtArgs>
  }
  export type TradeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    market?: boolean | MarketDataDefaultArgs<ExtArgs>
  }

  export type $TradePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Trade"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      market: Prisma.$MarketDataPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      marketDataId: string
      amount: number
      side: string
      status: string
      txHash: string | null
      createdAt: Date
    }, ExtArgs["result"]["trade"]>
    composites: {}
  }

  type TradeGetPayload<S extends boolean | null | undefined | TradeDefaultArgs> = $Result.GetResult<Prisma.$TradePayload, S>

  type TradeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TradeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TradeCountAggregateInputType | true
    }

  export interface TradeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Trade'], meta: { name: 'Trade' } }
    /**
     * Find zero or one Trade that matches the filter.
     * @param {TradeFindUniqueArgs} args - Arguments to find a Trade
     * @example
     * // Get one Trade
     * const trade = await prisma.trade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TradeFindUniqueArgs>(args: SelectSubset<T, TradeFindUniqueArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Trade that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TradeFindUniqueOrThrowArgs} args - Arguments to find a Trade
     * @example
     * // Get one Trade
     * const trade = await prisma.trade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TradeFindUniqueOrThrowArgs>(args: SelectSubset<T, TradeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeFindFirstArgs} args - Arguments to find a Trade
     * @example
     * // Get one Trade
     * const trade = await prisma.trade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TradeFindFirstArgs>(args?: SelectSubset<T, TradeFindFirstArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeFindFirstOrThrowArgs} args - Arguments to find a Trade
     * @example
     * // Get one Trade
     * const trade = await prisma.trade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TradeFindFirstOrThrowArgs>(args?: SelectSubset<T, TradeFindFirstOrThrowArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Trades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trades
     * const trades = await prisma.trade.findMany()
     * 
     * // Get first 10 Trades
     * const trades = await prisma.trade.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tradeWithIdOnly = await prisma.trade.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TradeFindManyArgs>(args?: SelectSubset<T, TradeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Trade.
     * @param {TradeCreateArgs} args - Arguments to create a Trade.
     * @example
     * // Create one Trade
     * const Trade = await prisma.trade.create({
     *   data: {
     *     // ... data to create a Trade
     *   }
     * })
     * 
     */
    create<T extends TradeCreateArgs>(args: SelectSubset<T, TradeCreateArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Trades.
     * @param {TradeCreateManyArgs} args - Arguments to create many Trades.
     * @example
     * // Create many Trades
     * const trade = await prisma.trade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TradeCreateManyArgs>(args?: SelectSubset<T, TradeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Trades and returns the data saved in the database.
     * @param {TradeCreateManyAndReturnArgs} args - Arguments to create many Trades.
     * @example
     * // Create many Trades
     * const trade = await prisma.trade.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Trades and only return the `id`
     * const tradeWithIdOnly = await prisma.trade.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TradeCreateManyAndReturnArgs>(args?: SelectSubset<T, TradeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Trade.
     * @param {TradeDeleteArgs} args - Arguments to delete one Trade.
     * @example
     * // Delete one Trade
     * const Trade = await prisma.trade.delete({
     *   where: {
     *     // ... filter to delete one Trade
     *   }
     * })
     * 
     */
    delete<T extends TradeDeleteArgs>(args: SelectSubset<T, TradeDeleteArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Trade.
     * @param {TradeUpdateArgs} args - Arguments to update one Trade.
     * @example
     * // Update one Trade
     * const trade = await prisma.trade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TradeUpdateArgs>(args: SelectSubset<T, TradeUpdateArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Trades.
     * @param {TradeDeleteManyArgs} args - Arguments to filter Trades to delete.
     * @example
     * // Delete a few Trades
     * const { count } = await prisma.trade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TradeDeleteManyArgs>(args?: SelectSubset<T, TradeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trades
     * const trade = await prisma.trade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TradeUpdateManyArgs>(args: SelectSubset<T, TradeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trades and returns the data updated in the database.
     * @param {TradeUpdateManyAndReturnArgs} args - Arguments to update many Trades.
     * @example
     * // Update many Trades
     * const trade = await prisma.trade.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Trades and only return the `id`
     * const tradeWithIdOnly = await prisma.trade.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TradeUpdateManyAndReturnArgs>(args: SelectSubset<T, TradeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Trade.
     * @param {TradeUpsertArgs} args - Arguments to update or create a Trade.
     * @example
     * // Update or create a Trade
     * const trade = await prisma.trade.upsert({
     *   create: {
     *     // ... data to create a Trade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trade we want to update
     *   }
     * })
     */
    upsert<T extends TradeUpsertArgs>(args: SelectSubset<T, TradeUpsertArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Trades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeCountArgs} args - Arguments to filter Trades to count.
     * @example
     * // Count the number of Trades
     * const count = await prisma.trade.count({
     *   where: {
     *     // ... the filter for the Trades we want to count
     *   }
     * })
    **/
    count<T extends TradeCountArgs>(
      args?: Subset<T, TradeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TradeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TradeAggregateArgs>(args: Subset<T, TradeAggregateArgs>): Prisma.PrismaPromise<GetTradeAggregateType<T>>

    /**
     * Group by Trade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeGroupByArgs} args - Group by arguments.
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
      T extends TradeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TradeGroupByArgs['orderBy'] }
        : { orderBy?: TradeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TradeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTradeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Trade model
   */
  readonly fields: TradeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Trade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TradeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    market<T extends MarketDataDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MarketDataDefaultArgs<ExtArgs>>): Prisma__MarketDataClient<$Result.GetResult<Prisma.$MarketDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Trade model
   */
  interface TradeFieldRefs {
    readonly id: FieldRef<"Trade", 'String'>
    readonly userId: FieldRef<"Trade", 'String'>
    readonly marketDataId: FieldRef<"Trade", 'String'>
    readonly amount: FieldRef<"Trade", 'Float'>
    readonly side: FieldRef<"Trade", 'String'>
    readonly status: FieldRef<"Trade", 'String'>
    readonly txHash: FieldRef<"Trade", 'String'>
    readonly createdAt: FieldRef<"Trade", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Trade findUnique
   */
  export type TradeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * Filter, which Trade to fetch.
     */
    where: TradeWhereUniqueInput
  }

  /**
   * Trade findUniqueOrThrow
   */
  export type TradeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * Filter, which Trade to fetch.
     */
    where: TradeWhereUniqueInput
  }

  /**
   * Trade findFirst
   */
  export type TradeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * Filter, which Trade to fetch.
     */
    where?: TradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trades to fetch.
     */
    orderBy?: TradeOrderByWithRelationInput | TradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trades.
     */
    cursor?: TradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trades.
     */
    distinct?: TradeScalarFieldEnum | TradeScalarFieldEnum[]
  }

  /**
   * Trade findFirstOrThrow
   */
  export type TradeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * Filter, which Trade to fetch.
     */
    where?: TradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trades to fetch.
     */
    orderBy?: TradeOrderByWithRelationInput | TradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trades.
     */
    cursor?: TradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trades.
     */
    distinct?: TradeScalarFieldEnum | TradeScalarFieldEnum[]
  }

  /**
   * Trade findMany
   */
  export type TradeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * Filter, which Trades to fetch.
     */
    where?: TradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trades to fetch.
     */
    orderBy?: TradeOrderByWithRelationInput | TradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Trades.
     */
    cursor?: TradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trades.
     */
    skip?: number
    distinct?: TradeScalarFieldEnum | TradeScalarFieldEnum[]
  }

  /**
   * Trade create
   */
  export type TradeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * The data needed to create a Trade.
     */
    data: XOR<TradeCreateInput, TradeUncheckedCreateInput>
  }

  /**
   * Trade createMany
   */
  export type TradeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Trades.
     */
    data: TradeCreateManyInput | TradeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Trade createManyAndReturn
   */
  export type TradeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * The data used to create many Trades.
     */
    data: TradeCreateManyInput | TradeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trade update
   */
  export type TradeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * The data needed to update a Trade.
     */
    data: XOR<TradeUpdateInput, TradeUncheckedUpdateInput>
    /**
     * Choose, which Trade to update.
     */
    where: TradeWhereUniqueInput
  }

  /**
   * Trade updateMany
   */
  export type TradeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Trades.
     */
    data: XOR<TradeUpdateManyMutationInput, TradeUncheckedUpdateManyInput>
    /**
     * Filter which Trades to update
     */
    where?: TradeWhereInput
    /**
     * Limit how many Trades to update.
     */
    limit?: number
  }

  /**
   * Trade updateManyAndReturn
   */
  export type TradeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * The data used to update Trades.
     */
    data: XOR<TradeUpdateManyMutationInput, TradeUncheckedUpdateManyInput>
    /**
     * Filter which Trades to update
     */
    where?: TradeWhereInput
    /**
     * Limit how many Trades to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trade upsert
   */
  export type TradeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * The filter to search for the Trade to update in case it exists.
     */
    where: TradeWhereUniqueInput
    /**
     * In case the Trade found by the `where` argument doesn't exist, create a new Trade with this data.
     */
    create: XOR<TradeCreateInput, TradeUncheckedCreateInput>
    /**
     * In case the Trade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TradeUpdateInput, TradeUncheckedUpdateInput>
  }

  /**
   * Trade delete
   */
  export type TradeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * Filter which Trade to delete.
     */
    where: TradeWhereUniqueInput
  }

  /**
   * Trade deleteMany
   */
  export type TradeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trades to delete
     */
    where?: TradeWhereInput
    /**
     * Limit how many Trades to delete.
     */
    limit?: number
  }

  /**
   * Trade without action
   */
  export type TradeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
  }


  /**
   * Model Market
   */

  export type AggregateMarket = {
    _count: MarketCountAggregateOutputType | null
    _min: MarketMinAggregateOutputType | null
    _max: MarketMaxAggregateOutputType | null
  }

  export type MarketMinAggregateOutputType = {
    id: string | null
    slug: string | null
    title: string | null
    description: string | null
    category: string | null
    status: string | null
    resolutionTime: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MarketMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    title: string | null
    description: string | null
    category: string | null
    status: string | null
    resolutionTime: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MarketCountAggregateOutputType = {
    id: number
    slug: number
    title: number
    description: number
    category: number
    status: number
    resolutionTime: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MarketMinAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    description?: true
    category?: true
    status?: true
    resolutionTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MarketMaxAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    description?: true
    category?: true
    status?: true
    resolutionTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MarketCountAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    description?: true
    category?: true
    status?: true
    resolutionTime?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MarketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Market to aggregate.
     */
    where?: MarketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Markets to fetch.
     */
    orderBy?: MarketOrderByWithRelationInput | MarketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MarketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Markets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Markets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Markets
    **/
    _count?: true | MarketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MarketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MarketMaxAggregateInputType
  }

  export type GetMarketAggregateType<T extends MarketAggregateArgs> = {
        [P in keyof T & keyof AggregateMarket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMarket[P]>
      : GetScalarType<T[P], AggregateMarket[P]>
  }




  export type MarketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarketWhereInput
    orderBy?: MarketOrderByWithAggregationInput | MarketOrderByWithAggregationInput[]
    by: MarketScalarFieldEnum[] | MarketScalarFieldEnum
    having?: MarketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MarketCountAggregateInputType | true
    _min?: MarketMinAggregateInputType
    _max?: MarketMaxAggregateInputType
  }

  export type MarketGroupByOutputType = {
    id: string
    slug: string
    title: string
    description: string | null
    category: string | null
    status: string
    resolutionTime: Date | null
    createdAt: Date
    updatedAt: Date
    _count: MarketCountAggregateOutputType | null
    _min: MarketMinAggregateOutputType | null
    _max: MarketMaxAggregateOutputType | null
  }

  type GetMarketGroupByPayload<T extends MarketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MarketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MarketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MarketGroupByOutputType[P]>
            : GetScalarType<T[P], MarketGroupByOutputType[P]>
        }
      >
    >


  export type MarketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    status?: boolean
    resolutionTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orders?: boolean | Market$ordersArgs<ExtArgs>
    positions?: boolean | Market$positionsArgs<ExtArgs>
    embeds?: boolean | Market$embedsArgs<ExtArgs>
    discussion?: boolean | Market$discussionArgs<ExtArgs>
    _count?: boolean | MarketCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["market"]>

  export type MarketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    status?: boolean
    resolutionTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["market"]>

  export type MarketSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    status?: boolean
    resolutionTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["market"]>

  export type MarketSelectScalar = {
    id?: boolean
    slug?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    status?: boolean
    resolutionTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MarketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "title" | "description" | "category" | "status" | "resolutionTime" | "createdAt" | "updatedAt", ExtArgs["result"]["market"]>
  export type MarketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | Market$ordersArgs<ExtArgs>
    positions?: boolean | Market$positionsArgs<ExtArgs>
    embeds?: boolean | Market$embedsArgs<ExtArgs>
    discussion?: boolean | Market$discussionArgs<ExtArgs>
    _count?: boolean | MarketCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MarketIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MarketIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MarketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Market"
    objects: {
      orders: Prisma.$OrderPayload<ExtArgs>[]
      positions: Prisma.$PositionPayload<ExtArgs>[]
      embeds: Prisma.$EmbedPayload<ExtArgs>[]
      discussion: Prisma.$DiscussionThreadPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      title: string
      description: string | null
      category: string | null
      status: string
      resolutionTime: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["market"]>
    composites: {}
  }

  type MarketGetPayload<S extends boolean | null | undefined | MarketDefaultArgs> = $Result.GetResult<Prisma.$MarketPayload, S>

  type MarketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MarketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MarketCountAggregateInputType | true
    }

  export interface MarketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Market'], meta: { name: 'Market' } }
    /**
     * Find zero or one Market that matches the filter.
     * @param {MarketFindUniqueArgs} args - Arguments to find a Market
     * @example
     * // Get one Market
     * const market = await prisma.market.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MarketFindUniqueArgs>(args: SelectSubset<T, MarketFindUniqueArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Market that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MarketFindUniqueOrThrowArgs} args - Arguments to find a Market
     * @example
     * // Get one Market
     * const market = await prisma.market.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MarketFindUniqueOrThrowArgs>(args: SelectSubset<T, MarketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Market that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketFindFirstArgs} args - Arguments to find a Market
     * @example
     * // Get one Market
     * const market = await prisma.market.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MarketFindFirstArgs>(args?: SelectSubset<T, MarketFindFirstArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Market that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketFindFirstOrThrowArgs} args - Arguments to find a Market
     * @example
     * // Get one Market
     * const market = await prisma.market.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MarketFindFirstOrThrowArgs>(args?: SelectSubset<T, MarketFindFirstOrThrowArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Markets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Markets
     * const markets = await prisma.market.findMany()
     * 
     * // Get first 10 Markets
     * const markets = await prisma.market.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const marketWithIdOnly = await prisma.market.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MarketFindManyArgs>(args?: SelectSubset<T, MarketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Market.
     * @param {MarketCreateArgs} args - Arguments to create a Market.
     * @example
     * // Create one Market
     * const Market = await prisma.market.create({
     *   data: {
     *     // ... data to create a Market
     *   }
     * })
     * 
     */
    create<T extends MarketCreateArgs>(args: SelectSubset<T, MarketCreateArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Markets.
     * @param {MarketCreateManyArgs} args - Arguments to create many Markets.
     * @example
     * // Create many Markets
     * const market = await prisma.market.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MarketCreateManyArgs>(args?: SelectSubset<T, MarketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Markets and returns the data saved in the database.
     * @param {MarketCreateManyAndReturnArgs} args - Arguments to create many Markets.
     * @example
     * // Create many Markets
     * const market = await prisma.market.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Markets and only return the `id`
     * const marketWithIdOnly = await prisma.market.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MarketCreateManyAndReturnArgs>(args?: SelectSubset<T, MarketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Market.
     * @param {MarketDeleteArgs} args - Arguments to delete one Market.
     * @example
     * // Delete one Market
     * const Market = await prisma.market.delete({
     *   where: {
     *     // ... filter to delete one Market
     *   }
     * })
     * 
     */
    delete<T extends MarketDeleteArgs>(args: SelectSubset<T, MarketDeleteArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Market.
     * @param {MarketUpdateArgs} args - Arguments to update one Market.
     * @example
     * // Update one Market
     * const market = await prisma.market.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MarketUpdateArgs>(args: SelectSubset<T, MarketUpdateArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Markets.
     * @param {MarketDeleteManyArgs} args - Arguments to filter Markets to delete.
     * @example
     * // Delete a few Markets
     * const { count } = await prisma.market.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MarketDeleteManyArgs>(args?: SelectSubset<T, MarketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Markets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Markets
     * const market = await prisma.market.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MarketUpdateManyArgs>(args: SelectSubset<T, MarketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Markets and returns the data updated in the database.
     * @param {MarketUpdateManyAndReturnArgs} args - Arguments to update many Markets.
     * @example
     * // Update many Markets
     * const market = await prisma.market.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Markets and only return the `id`
     * const marketWithIdOnly = await prisma.market.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MarketUpdateManyAndReturnArgs>(args: SelectSubset<T, MarketUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Market.
     * @param {MarketUpsertArgs} args - Arguments to update or create a Market.
     * @example
     * // Update or create a Market
     * const market = await prisma.market.upsert({
     *   create: {
     *     // ... data to create a Market
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Market we want to update
     *   }
     * })
     */
    upsert<T extends MarketUpsertArgs>(args: SelectSubset<T, MarketUpsertArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Markets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketCountArgs} args - Arguments to filter Markets to count.
     * @example
     * // Count the number of Markets
     * const count = await prisma.market.count({
     *   where: {
     *     // ... the filter for the Markets we want to count
     *   }
     * })
    **/
    count<T extends MarketCountArgs>(
      args?: Subset<T, MarketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MarketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Market.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MarketAggregateArgs>(args: Subset<T, MarketAggregateArgs>): Prisma.PrismaPromise<GetMarketAggregateType<T>>

    /**
     * Group by Market.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketGroupByArgs} args - Group by arguments.
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
      T extends MarketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MarketGroupByArgs['orderBy'] }
        : { orderBy?: MarketGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MarketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Market model
   */
  readonly fields: MarketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Market.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MarketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends Market$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Market$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    positions<T extends Market$positionsArgs<ExtArgs> = {}>(args?: Subset<T, Market$positionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    embeds<T extends Market$embedsArgs<ExtArgs> = {}>(args?: Subset<T, Market$embedsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmbedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    discussion<T extends Market$discussionArgs<ExtArgs> = {}>(args?: Subset<T, Market$discussionArgs<ExtArgs>>): Prisma__DiscussionThreadClient<$Result.GetResult<Prisma.$DiscussionThreadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Market model
   */
  interface MarketFieldRefs {
    readonly id: FieldRef<"Market", 'String'>
    readonly slug: FieldRef<"Market", 'String'>
    readonly title: FieldRef<"Market", 'String'>
    readonly description: FieldRef<"Market", 'String'>
    readonly category: FieldRef<"Market", 'String'>
    readonly status: FieldRef<"Market", 'String'>
    readonly resolutionTime: FieldRef<"Market", 'DateTime'>
    readonly createdAt: FieldRef<"Market", 'DateTime'>
    readonly updatedAt: FieldRef<"Market", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Market findUnique
   */
  export type MarketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * Filter, which Market to fetch.
     */
    where: MarketWhereUniqueInput
  }

  /**
   * Market findUniqueOrThrow
   */
  export type MarketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * Filter, which Market to fetch.
     */
    where: MarketWhereUniqueInput
  }

  /**
   * Market findFirst
   */
  export type MarketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * Filter, which Market to fetch.
     */
    where?: MarketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Markets to fetch.
     */
    orderBy?: MarketOrderByWithRelationInput | MarketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Markets.
     */
    cursor?: MarketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Markets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Markets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Markets.
     */
    distinct?: MarketScalarFieldEnum | MarketScalarFieldEnum[]
  }

  /**
   * Market findFirstOrThrow
   */
  export type MarketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * Filter, which Market to fetch.
     */
    where?: MarketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Markets to fetch.
     */
    orderBy?: MarketOrderByWithRelationInput | MarketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Markets.
     */
    cursor?: MarketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Markets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Markets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Markets.
     */
    distinct?: MarketScalarFieldEnum | MarketScalarFieldEnum[]
  }

  /**
   * Market findMany
   */
  export type MarketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * Filter, which Markets to fetch.
     */
    where?: MarketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Markets to fetch.
     */
    orderBy?: MarketOrderByWithRelationInput | MarketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Markets.
     */
    cursor?: MarketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Markets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Markets.
     */
    skip?: number
    distinct?: MarketScalarFieldEnum | MarketScalarFieldEnum[]
  }

  /**
   * Market create
   */
  export type MarketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * The data needed to create a Market.
     */
    data: XOR<MarketCreateInput, MarketUncheckedCreateInput>
  }

  /**
   * Market createMany
   */
  export type MarketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Markets.
     */
    data: MarketCreateManyInput | MarketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Market createManyAndReturn
   */
  export type MarketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * The data used to create many Markets.
     */
    data: MarketCreateManyInput | MarketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Market update
   */
  export type MarketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * The data needed to update a Market.
     */
    data: XOR<MarketUpdateInput, MarketUncheckedUpdateInput>
    /**
     * Choose, which Market to update.
     */
    where: MarketWhereUniqueInput
  }

  /**
   * Market updateMany
   */
  export type MarketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Markets.
     */
    data: XOR<MarketUpdateManyMutationInput, MarketUncheckedUpdateManyInput>
    /**
     * Filter which Markets to update
     */
    where?: MarketWhereInput
    /**
     * Limit how many Markets to update.
     */
    limit?: number
  }

  /**
   * Market updateManyAndReturn
   */
  export type MarketUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * The data used to update Markets.
     */
    data: XOR<MarketUpdateManyMutationInput, MarketUncheckedUpdateManyInput>
    /**
     * Filter which Markets to update
     */
    where?: MarketWhereInput
    /**
     * Limit how many Markets to update.
     */
    limit?: number
  }

  /**
   * Market upsert
   */
  export type MarketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * The filter to search for the Market to update in case it exists.
     */
    where: MarketWhereUniqueInput
    /**
     * In case the Market found by the `where` argument doesn't exist, create a new Market with this data.
     */
    create: XOR<MarketCreateInput, MarketUncheckedCreateInput>
    /**
     * In case the Market was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MarketUpdateInput, MarketUncheckedUpdateInput>
  }

  /**
   * Market delete
   */
  export type MarketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * Filter which Market to delete.
     */
    where: MarketWhereUniqueInput
  }

  /**
   * Market deleteMany
   */
  export type MarketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Markets to delete
     */
    where?: MarketWhereInput
    /**
     * Limit how many Markets to delete.
     */
    limit?: number
  }

  /**
   * Market.orders
   */
  export type Market$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Market.positions
   */
  export type Market$positionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    where?: PositionWhereInput
    orderBy?: PositionOrderByWithRelationInput | PositionOrderByWithRelationInput[]
    cursor?: PositionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PositionScalarFieldEnum | PositionScalarFieldEnum[]
  }

  /**
   * Market.embeds
   */
  export type Market$embedsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Embed
     */
    select?: EmbedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Embed
     */
    omit?: EmbedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbedInclude<ExtArgs> | null
    where?: EmbedWhereInput
    orderBy?: EmbedOrderByWithRelationInput | EmbedOrderByWithRelationInput[]
    cursor?: EmbedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmbedScalarFieldEnum | EmbedScalarFieldEnum[]
  }

  /**
   * Market.discussion
   */
  export type Market$discussionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscussionThread
     */
    select?: DiscussionThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscussionThread
     */
    omit?: DiscussionThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionThreadInclude<ExtArgs> | null
    where?: DiscussionThreadWhereInput
  }

  /**
   * Market without action
   */
  export type MarketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    price: number | null
    size: number | null
    remaining: number | null
  }

  export type OrderSumAggregateOutputType = {
    price: number | null
    size: number | null
    remaining: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    marketId: string | null
    side: string | null
    price: number | null
    size: number | null
    remaining: number | null
    status: string | null
    createdAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    marketId: string | null
    side: string | null
    price: number | null
    size: number | null
    remaining: number | null
    status: string | null
    createdAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    marketId: number
    side: number
    price: number
    size: number
    remaining: number
    status: number
    createdAt: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    price?: true
    size?: true
    remaining?: true
  }

  export type OrderSumAggregateInputType = {
    price?: true
    size?: true
    remaining?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    marketId?: true
    side?: true
    price?: true
    size?: true
    remaining?: true
    status?: true
    createdAt?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    marketId?: true
    side?: true
    price?: true
    size?: true
    remaining?: true
    status?: true
    createdAt?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    marketId?: true
    side?: true
    price?: true
    size?: true
    remaining?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: string
    marketId: string
    side: string
    price: number
    size: number
    remaining: number
    status: string
    createdAt: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    marketId?: boolean
    side?: boolean
    price?: boolean
    size?: boolean
    remaining?: boolean
    status?: boolean
    createdAt?: boolean
    market?: boolean | MarketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    marketId?: boolean
    side?: boolean
    price?: boolean
    size?: boolean
    remaining?: boolean
    status?: boolean
    createdAt?: boolean
    market?: boolean | MarketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    marketId?: boolean
    side?: boolean
    price?: boolean
    size?: boolean
    remaining?: boolean
    status?: boolean
    createdAt?: boolean
    market?: boolean | MarketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    marketId?: boolean
    side?: boolean
    price?: boolean
    size?: boolean
    remaining?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "marketId" | "side" | "price" | "size" | "remaining" | "status" | "createdAt", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    market?: boolean | MarketDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    market?: boolean | MarketDefaultArgs<ExtArgs>
  }
  export type OrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    market?: boolean | MarketDefaultArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      market: Prisma.$MarketPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      marketId: string
      side: string
      price: number
      size: number
      remaining: number
      status: string
      createdAt: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
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
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    market<T extends MarketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MarketDefaultArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'String'>
    readonly marketId: FieldRef<"Order", 'String'>
    readonly side: FieldRef<"Order", 'String'>
    readonly price: FieldRef<"Order", 'Float'>
    readonly size: FieldRef<"Order", 'Float'>
    readonly remaining: FieldRef<"Order", 'Float'>
    readonly status: FieldRef<"Order", 'String'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model Position
   */

  export type AggregatePosition = {
    _count: PositionCountAggregateOutputType | null
    _avg: PositionAvgAggregateOutputType | null
    _sum: PositionSumAggregateOutputType | null
    _min: PositionMinAggregateOutputType | null
    _max: PositionMaxAggregateOutputType | null
  }

  export type PositionAvgAggregateOutputType = {
    size: number | null
    collateralLocked: number | null
  }

  export type PositionSumAggregateOutputType = {
    size: number | null
    collateralLocked: number | null
  }

  export type PositionMinAggregateOutputType = {
    id: string | null
    marketId: string | null
    owner: string | null
    size: number | null
    collateralLocked: number | null
    createdAt: Date | null
  }

  export type PositionMaxAggregateOutputType = {
    id: string | null
    marketId: string | null
    owner: string | null
    size: number | null
    collateralLocked: number | null
    createdAt: Date | null
  }

  export type PositionCountAggregateOutputType = {
    id: number
    marketId: number
    owner: number
    size: number
    collateralLocked: number
    createdAt: number
    _all: number
  }


  export type PositionAvgAggregateInputType = {
    size?: true
    collateralLocked?: true
  }

  export type PositionSumAggregateInputType = {
    size?: true
    collateralLocked?: true
  }

  export type PositionMinAggregateInputType = {
    id?: true
    marketId?: true
    owner?: true
    size?: true
    collateralLocked?: true
    createdAt?: true
  }

  export type PositionMaxAggregateInputType = {
    id?: true
    marketId?: true
    owner?: true
    size?: true
    collateralLocked?: true
    createdAt?: true
  }

  export type PositionCountAggregateInputType = {
    id?: true
    marketId?: true
    owner?: true
    size?: true
    collateralLocked?: true
    createdAt?: true
    _all?: true
  }

  export type PositionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Position to aggregate.
     */
    where?: PositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Positions to fetch.
     */
    orderBy?: PositionOrderByWithRelationInput | PositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Positions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Positions
    **/
    _count?: true | PositionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PositionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PositionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PositionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PositionMaxAggregateInputType
  }

  export type GetPositionAggregateType<T extends PositionAggregateArgs> = {
        [P in keyof T & keyof AggregatePosition]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePosition[P]>
      : GetScalarType<T[P], AggregatePosition[P]>
  }




  export type PositionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PositionWhereInput
    orderBy?: PositionOrderByWithAggregationInput | PositionOrderByWithAggregationInput[]
    by: PositionScalarFieldEnum[] | PositionScalarFieldEnum
    having?: PositionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PositionCountAggregateInputType | true
    _avg?: PositionAvgAggregateInputType
    _sum?: PositionSumAggregateInputType
    _min?: PositionMinAggregateInputType
    _max?: PositionMaxAggregateInputType
  }

  export type PositionGroupByOutputType = {
    id: string
    marketId: string
    owner: string
    size: number
    collateralLocked: number
    createdAt: Date
    _count: PositionCountAggregateOutputType | null
    _avg: PositionAvgAggregateOutputType | null
    _sum: PositionSumAggregateOutputType | null
    _min: PositionMinAggregateOutputType | null
    _max: PositionMaxAggregateOutputType | null
  }

  type GetPositionGroupByPayload<T extends PositionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PositionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PositionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PositionGroupByOutputType[P]>
            : GetScalarType<T[P], PositionGroupByOutputType[P]>
        }
      >
    >


  export type PositionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    marketId?: boolean
    owner?: boolean
    size?: boolean
    collateralLocked?: boolean
    createdAt?: boolean
    market?: boolean | MarketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["position"]>

  export type PositionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    marketId?: boolean
    owner?: boolean
    size?: boolean
    collateralLocked?: boolean
    createdAt?: boolean
    market?: boolean | MarketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["position"]>

  export type PositionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    marketId?: boolean
    owner?: boolean
    size?: boolean
    collateralLocked?: boolean
    createdAt?: boolean
    market?: boolean | MarketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["position"]>

  export type PositionSelectScalar = {
    id?: boolean
    marketId?: boolean
    owner?: boolean
    size?: boolean
    collateralLocked?: boolean
    createdAt?: boolean
  }

  export type PositionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "marketId" | "owner" | "size" | "collateralLocked" | "createdAt", ExtArgs["result"]["position"]>
  export type PositionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    market?: boolean | MarketDefaultArgs<ExtArgs>
  }
  export type PositionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    market?: boolean | MarketDefaultArgs<ExtArgs>
  }
  export type PositionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    market?: boolean | MarketDefaultArgs<ExtArgs>
  }

  export type $PositionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Position"
    objects: {
      market: Prisma.$MarketPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      marketId: string
      owner: string
      size: number
      collateralLocked: number
      createdAt: Date
    }, ExtArgs["result"]["position"]>
    composites: {}
  }

  type PositionGetPayload<S extends boolean | null | undefined | PositionDefaultArgs> = $Result.GetResult<Prisma.$PositionPayload, S>

  type PositionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PositionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PositionCountAggregateInputType | true
    }

  export interface PositionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Position'], meta: { name: 'Position' } }
    /**
     * Find zero or one Position that matches the filter.
     * @param {PositionFindUniqueArgs} args - Arguments to find a Position
     * @example
     * // Get one Position
     * const position = await prisma.position.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PositionFindUniqueArgs>(args: SelectSubset<T, PositionFindUniqueArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Position that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PositionFindUniqueOrThrowArgs} args - Arguments to find a Position
     * @example
     * // Get one Position
     * const position = await prisma.position.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PositionFindUniqueOrThrowArgs>(args: SelectSubset<T, PositionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Position that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionFindFirstArgs} args - Arguments to find a Position
     * @example
     * // Get one Position
     * const position = await prisma.position.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PositionFindFirstArgs>(args?: SelectSubset<T, PositionFindFirstArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Position that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionFindFirstOrThrowArgs} args - Arguments to find a Position
     * @example
     * // Get one Position
     * const position = await prisma.position.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PositionFindFirstOrThrowArgs>(args?: SelectSubset<T, PositionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Positions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Positions
     * const positions = await prisma.position.findMany()
     * 
     * // Get first 10 Positions
     * const positions = await prisma.position.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const positionWithIdOnly = await prisma.position.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PositionFindManyArgs>(args?: SelectSubset<T, PositionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Position.
     * @param {PositionCreateArgs} args - Arguments to create a Position.
     * @example
     * // Create one Position
     * const Position = await prisma.position.create({
     *   data: {
     *     // ... data to create a Position
     *   }
     * })
     * 
     */
    create<T extends PositionCreateArgs>(args: SelectSubset<T, PositionCreateArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Positions.
     * @param {PositionCreateManyArgs} args - Arguments to create many Positions.
     * @example
     * // Create many Positions
     * const position = await prisma.position.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PositionCreateManyArgs>(args?: SelectSubset<T, PositionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Positions and returns the data saved in the database.
     * @param {PositionCreateManyAndReturnArgs} args - Arguments to create many Positions.
     * @example
     * // Create many Positions
     * const position = await prisma.position.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Positions and only return the `id`
     * const positionWithIdOnly = await prisma.position.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PositionCreateManyAndReturnArgs>(args?: SelectSubset<T, PositionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Position.
     * @param {PositionDeleteArgs} args - Arguments to delete one Position.
     * @example
     * // Delete one Position
     * const Position = await prisma.position.delete({
     *   where: {
     *     // ... filter to delete one Position
     *   }
     * })
     * 
     */
    delete<T extends PositionDeleteArgs>(args: SelectSubset<T, PositionDeleteArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Position.
     * @param {PositionUpdateArgs} args - Arguments to update one Position.
     * @example
     * // Update one Position
     * const position = await prisma.position.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PositionUpdateArgs>(args: SelectSubset<T, PositionUpdateArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Positions.
     * @param {PositionDeleteManyArgs} args - Arguments to filter Positions to delete.
     * @example
     * // Delete a few Positions
     * const { count } = await prisma.position.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PositionDeleteManyArgs>(args?: SelectSubset<T, PositionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Positions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Positions
     * const position = await prisma.position.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PositionUpdateManyArgs>(args: SelectSubset<T, PositionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Positions and returns the data updated in the database.
     * @param {PositionUpdateManyAndReturnArgs} args - Arguments to update many Positions.
     * @example
     * // Update many Positions
     * const position = await prisma.position.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Positions and only return the `id`
     * const positionWithIdOnly = await prisma.position.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PositionUpdateManyAndReturnArgs>(args: SelectSubset<T, PositionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Position.
     * @param {PositionUpsertArgs} args - Arguments to update or create a Position.
     * @example
     * // Update or create a Position
     * const position = await prisma.position.upsert({
     *   create: {
     *     // ... data to create a Position
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Position we want to update
     *   }
     * })
     */
    upsert<T extends PositionUpsertArgs>(args: SelectSubset<T, PositionUpsertArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Positions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionCountArgs} args - Arguments to filter Positions to count.
     * @example
     * // Count the number of Positions
     * const count = await prisma.position.count({
     *   where: {
     *     // ... the filter for the Positions we want to count
     *   }
     * })
    **/
    count<T extends PositionCountArgs>(
      args?: Subset<T, PositionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PositionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Position.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PositionAggregateArgs>(args: Subset<T, PositionAggregateArgs>): Prisma.PrismaPromise<GetPositionAggregateType<T>>

    /**
     * Group by Position.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionGroupByArgs} args - Group by arguments.
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
      T extends PositionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PositionGroupByArgs['orderBy'] }
        : { orderBy?: PositionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PositionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPositionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Position model
   */
  readonly fields: PositionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Position.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PositionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    market<T extends MarketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MarketDefaultArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Position model
   */
  interface PositionFieldRefs {
    readonly id: FieldRef<"Position", 'String'>
    readonly marketId: FieldRef<"Position", 'String'>
    readonly owner: FieldRef<"Position", 'String'>
    readonly size: FieldRef<"Position", 'Float'>
    readonly collateralLocked: FieldRef<"Position", 'Float'>
    readonly createdAt: FieldRef<"Position", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Position findUnique
   */
  export type PositionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * Filter, which Position to fetch.
     */
    where: PositionWhereUniqueInput
  }

  /**
   * Position findUniqueOrThrow
   */
  export type PositionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * Filter, which Position to fetch.
     */
    where: PositionWhereUniqueInput
  }

  /**
   * Position findFirst
   */
  export type PositionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * Filter, which Position to fetch.
     */
    where?: PositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Positions to fetch.
     */
    orderBy?: PositionOrderByWithRelationInput | PositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Positions.
     */
    cursor?: PositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Positions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Positions.
     */
    distinct?: PositionScalarFieldEnum | PositionScalarFieldEnum[]
  }

  /**
   * Position findFirstOrThrow
   */
  export type PositionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * Filter, which Position to fetch.
     */
    where?: PositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Positions to fetch.
     */
    orderBy?: PositionOrderByWithRelationInput | PositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Positions.
     */
    cursor?: PositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Positions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Positions.
     */
    distinct?: PositionScalarFieldEnum | PositionScalarFieldEnum[]
  }

  /**
   * Position findMany
   */
  export type PositionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * Filter, which Positions to fetch.
     */
    where?: PositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Positions to fetch.
     */
    orderBy?: PositionOrderByWithRelationInput | PositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Positions.
     */
    cursor?: PositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Positions.
     */
    skip?: number
    distinct?: PositionScalarFieldEnum | PositionScalarFieldEnum[]
  }

  /**
   * Position create
   */
  export type PositionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * The data needed to create a Position.
     */
    data: XOR<PositionCreateInput, PositionUncheckedCreateInput>
  }

  /**
   * Position createMany
   */
  export type PositionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Positions.
     */
    data: PositionCreateManyInput | PositionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Position createManyAndReturn
   */
  export type PositionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * The data used to create many Positions.
     */
    data: PositionCreateManyInput | PositionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Position update
   */
  export type PositionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * The data needed to update a Position.
     */
    data: XOR<PositionUpdateInput, PositionUncheckedUpdateInput>
    /**
     * Choose, which Position to update.
     */
    where: PositionWhereUniqueInput
  }

  /**
   * Position updateMany
   */
  export type PositionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Positions.
     */
    data: XOR<PositionUpdateManyMutationInput, PositionUncheckedUpdateManyInput>
    /**
     * Filter which Positions to update
     */
    where?: PositionWhereInput
    /**
     * Limit how many Positions to update.
     */
    limit?: number
  }

  /**
   * Position updateManyAndReturn
   */
  export type PositionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * The data used to update Positions.
     */
    data: XOR<PositionUpdateManyMutationInput, PositionUncheckedUpdateManyInput>
    /**
     * Filter which Positions to update
     */
    where?: PositionWhereInput
    /**
     * Limit how many Positions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Position upsert
   */
  export type PositionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * The filter to search for the Position to update in case it exists.
     */
    where: PositionWhereUniqueInput
    /**
     * In case the Position found by the `where` argument doesn't exist, create a new Position with this data.
     */
    create: XOR<PositionCreateInput, PositionUncheckedCreateInput>
    /**
     * In case the Position was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PositionUpdateInput, PositionUncheckedUpdateInput>
  }

  /**
   * Position delete
   */
  export type PositionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * Filter which Position to delete.
     */
    where: PositionWhereUniqueInput
  }

  /**
   * Position deleteMany
   */
  export type PositionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Positions to delete
     */
    where?: PositionWhereInput
    /**
     * Limit how many Positions to delete.
     */
    limit?: number
  }

  /**
   * Position without action
   */
  export type PositionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
  }


  /**
   * Model DiscussionThread
   */

  export type AggregateDiscussionThread = {
    _count: DiscussionThreadCountAggregateOutputType | null
    _min: DiscussionThreadMinAggregateOutputType | null
    _max: DiscussionThreadMaxAggregateOutputType | null
  }

  export type DiscussionThreadMinAggregateOutputType = {
    id: string | null
    marketId: string | null
    createdBy: string | null
    status: string | null
    createdAt: Date | null
  }

  export type DiscussionThreadMaxAggregateOutputType = {
    id: string | null
    marketId: string | null
    createdBy: string | null
    status: string | null
    createdAt: Date | null
  }

  export type DiscussionThreadCountAggregateOutputType = {
    id: number
    marketId: number
    createdBy: number
    status: number
    createdAt: number
    _all: number
  }


  export type DiscussionThreadMinAggregateInputType = {
    id?: true
    marketId?: true
    createdBy?: true
    status?: true
    createdAt?: true
  }

  export type DiscussionThreadMaxAggregateInputType = {
    id?: true
    marketId?: true
    createdBy?: true
    status?: true
    createdAt?: true
  }

  export type DiscussionThreadCountAggregateInputType = {
    id?: true
    marketId?: true
    createdBy?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type DiscussionThreadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiscussionThread to aggregate.
     */
    where?: DiscussionThreadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscussionThreads to fetch.
     */
    orderBy?: DiscussionThreadOrderByWithRelationInput | DiscussionThreadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiscussionThreadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscussionThreads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscussionThreads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DiscussionThreads
    **/
    _count?: true | DiscussionThreadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiscussionThreadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiscussionThreadMaxAggregateInputType
  }

  export type GetDiscussionThreadAggregateType<T extends DiscussionThreadAggregateArgs> = {
        [P in keyof T & keyof AggregateDiscussionThread]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiscussionThread[P]>
      : GetScalarType<T[P], AggregateDiscussionThread[P]>
  }




  export type DiscussionThreadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiscussionThreadWhereInput
    orderBy?: DiscussionThreadOrderByWithAggregationInput | DiscussionThreadOrderByWithAggregationInput[]
    by: DiscussionThreadScalarFieldEnum[] | DiscussionThreadScalarFieldEnum
    having?: DiscussionThreadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiscussionThreadCountAggregateInputType | true
    _min?: DiscussionThreadMinAggregateInputType
    _max?: DiscussionThreadMaxAggregateInputType
  }

  export type DiscussionThreadGroupByOutputType = {
    id: string
    marketId: string
    createdBy: string | null
    status: string
    createdAt: Date
    _count: DiscussionThreadCountAggregateOutputType | null
    _min: DiscussionThreadMinAggregateOutputType | null
    _max: DiscussionThreadMaxAggregateOutputType | null
  }

  type GetDiscussionThreadGroupByPayload<T extends DiscussionThreadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiscussionThreadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiscussionThreadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiscussionThreadGroupByOutputType[P]>
            : GetScalarType<T[P], DiscussionThreadGroupByOutputType[P]>
        }
      >
    >


  export type DiscussionThreadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    marketId?: boolean
    createdBy?: boolean
    status?: boolean
    createdAt?: boolean
    market?: boolean | MarketDefaultArgs<ExtArgs>
    messages?: boolean | DiscussionThread$messagesArgs<ExtArgs>
    _count?: boolean | DiscussionThreadCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["discussionThread"]>

  export type DiscussionThreadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    marketId?: boolean
    createdBy?: boolean
    status?: boolean
    createdAt?: boolean
    market?: boolean | MarketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["discussionThread"]>

  export type DiscussionThreadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    marketId?: boolean
    createdBy?: boolean
    status?: boolean
    createdAt?: boolean
    market?: boolean | MarketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["discussionThread"]>

  export type DiscussionThreadSelectScalar = {
    id?: boolean
    marketId?: boolean
    createdBy?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type DiscussionThreadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "marketId" | "createdBy" | "status" | "createdAt", ExtArgs["result"]["discussionThread"]>
  export type DiscussionThreadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    market?: boolean | MarketDefaultArgs<ExtArgs>
    messages?: boolean | DiscussionThread$messagesArgs<ExtArgs>
    _count?: boolean | DiscussionThreadCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DiscussionThreadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    market?: boolean | MarketDefaultArgs<ExtArgs>
  }
  export type DiscussionThreadIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    market?: boolean | MarketDefaultArgs<ExtArgs>
  }

  export type $DiscussionThreadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DiscussionThread"
    objects: {
      market: Prisma.$MarketPayload<ExtArgs>
      messages: Prisma.$DiscussionMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      marketId: string
      createdBy: string | null
      status: string
      createdAt: Date
    }, ExtArgs["result"]["discussionThread"]>
    composites: {}
  }

  type DiscussionThreadGetPayload<S extends boolean | null | undefined | DiscussionThreadDefaultArgs> = $Result.GetResult<Prisma.$DiscussionThreadPayload, S>

  type DiscussionThreadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DiscussionThreadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiscussionThreadCountAggregateInputType | true
    }

  export interface DiscussionThreadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DiscussionThread'], meta: { name: 'DiscussionThread' } }
    /**
     * Find zero or one DiscussionThread that matches the filter.
     * @param {DiscussionThreadFindUniqueArgs} args - Arguments to find a DiscussionThread
     * @example
     * // Get one DiscussionThread
     * const discussionThread = await prisma.discussionThread.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiscussionThreadFindUniqueArgs>(args: SelectSubset<T, DiscussionThreadFindUniqueArgs<ExtArgs>>): Prisma__DiscussionThreadClient<$Result.GetResult<Prisma.$DiscussionThreadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DiscussionThread that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DiscussionThreadFindUniqueOrThrowArgs} args - Arguments to find a DiscussionThread
     * @example
     * // Get one DiscussionThread
     * const discussionThread = await prisma.discussionThread.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiscussionThreadFindUniqueOrThrowArgs>(args: SelectSubset<T, DiscussionThreadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DiscussionThreadClient<$Result.GetResult<Prisma.$DiscussionThreadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DiscussionThread that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscussionThreadFindFirstArgs} args - Arguments to find a DiscussionThread
     * @example
     * // Get one DiscussionThread
     * const discussionThread = await prisma.discussionThread.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiscussionThreadFindFirstArgs>(args?: SelectSubset<T, DiscussionThreadFindFirstArgs<ExtArgs>>): Prisma__DiscussionThreadClient<$Result.GetResult<Prisma.$DiscussionThreadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DiscussionThread that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscussionThreadFindFirstOrThrowArgs} args - Arguments to find a DiscussionThread
     * @example
     * // Get one DiscussionThread
     * const discussionThread = await prisma.discussionThread.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiscussionThreadFindFirstOrThrowArgs>(args?: SelectSubset<T, DiscussionThreadFindFirstOrThrowArgs<ExtArgs>>): Prisma__DiscussionThreadClient<$Result.GetResult<Prisma.$DiscussionThreadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DiscussionThreads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscussionThreadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DiscussionThreads
     * const discussionThreads = await prisma.discussionThread.findMany()
     * 
     * // Get first 10 DiscussionThreads
     * const discussionThreads = await prisma.discussionThread.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const discussionThreadWithIdOnly = await prisma.discussionThread.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DiscussionThreadFindManyArgs>(args?: SelectSubset<T, DiscussionThreadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscussionThreadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DiscussionThread.
     * @param {DiscussionThreadCreateArgs} args - Arguments to create a DiscussionThread.
     * @example
     * // Create one DiscussionThread
     * const DiscussionThread = await prisma.discussionThread.create({
     *   data: {
     *     // ... data to create a DiscussionThread
     *   }
     * })
     * 
     */
    create<T extends DiscussionThreadCreateArgs>(args: SelectSubset<T, DiscussionThreadCreateArgs<ExtArgs>>): Prisma__DiscussionThreadClient<$Result.GetResult<Prisma.$DiscussionThreadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DiscussionThreads.
     * @param {DiscussionThreadCreateManyArgs} args - Arguments to create many DiscussionThreads.
     * @example
     * // Create many DiscussionThreads
     * const discussionThread = await prisma.discussionThread.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DiscussionThreadCreateManyArgs>(args?: SelectSubset<T, DiscussionThreadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DiscussionThreads and returns the data saved in the database.
     * @param {DiscussionThreadCreateManyAndReturnArgs} args - Arguments to create many DiscussionThreads.
     * @example
     * // Create many DiscussionThreads
     * const discussionThread = await prisma.discussionThread.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DiscussionThreads and only return the `id`
     * const discussionThreadWithIdOnly = await prisma.discussionThread.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DiscussionThreadCreateManyAndReturnArgs>(args?: SelectSubset<T, DiscussionThreadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscussionThreadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DiscussionThread.
     * @param {DiscussionThreadDeleteArgs} args - Arguments to delete one DiscussionThread.
     * @example
     * // Delete one DiscussionThread
     * const DiscussionThread = await prisma.discussionThread.delete({
     *   where: {
     *     // ... filter to delete one DiscussionThread
     *   }
     * })
     * 
     */
    delete<T extends DiscussionThreadDeleteArgs>(args: SelectSubset<T, DiscussionThreadDeleteArgs<ExtArgs>>): Prisma__DiscussionThreadClient<$Result.GetResult<Prisma.$DiscussionThreadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DiscussionThread.
     * @param {DiscussionThreadUpdateArgs} args - Arguments to update one DiscussionThread.
     * @example
     * // Update one DiscussionThread
     * const discussionThread = await prisma.discussionThread.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DiscussionThreadUpdateArgs>(args: SelectSubset<T, DiscussionThreadUpdateArgs<ExtArgs>>): Prisma__DiscussionThreadClient<$Result.GetResult<Prisma.$DiscussionThreadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DiscussionThreads.
     * @param {DiscussionThreadDeleteManyArgs} args - Arguments to filter DiscussionThreads to delete.
     * @example
     * // Delete a few DiscussionThreads
     * const { count } = await prisma.discussionThread.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DiscussionThreadDeleteManyArgs>(args?: SelectSubset<T, DiscussionThreadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DiscussionThreads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscussionThreadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DiscussionThreads
     * const discussionThread = await prisma.discussionThread.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DiscussionThreadUpdateManyArgs>(args: SelectSubset<T, DiscussionThreadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DiscussionThreads and returns the data updated in the database.
     * @param {DiscussionThreadUpdateManyAndReturnArgs} args - Arguments to update many DiscussionThreads.
     * @example
     * // Update many DiscussionThreads
     * const discussionThread = await prisma.discussionThread.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DiscussionThreads and only return the `id`
     * const discussionThreadWithIdOnly = await prisma.discussionThread.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DiscussionThreadUpdateManyAndReturnArgs>(args: SelectSubset<T, DiscussionThreadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscussionThreadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DiscussionThread.
     * @param {DiscussionThreadUpsertArgs} args - Arguments to update or create a DiscussionThread.
     * @example
     * // Update or create a DiscussionThread
     * const discussionThread = await prisma.discussionThread.upsert({
     *   create: {
     *     // ... data to create a DiscussionThread
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DiscussionThread we want to update
     *   }
     * })
     */
    upsert<T extends DiscussionThreadUpsertArgs>(args: SelectSubset<T, DiscussionThreadUpsertArgs<ExtArgs>>): Prisma__DiscussionThreadClient<$Result.GetResult<Prisma.$DiscussionThreadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DiscussionThreads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscussionThreadCountArgs} args - Arguments to filter DiscussionThreads to count.
     * @example
     * // Count the number of DiscussionThreads
     * const count = await prisma.discussionThread.count({
     *   where: {
     *     // ... the filter for the DiscussionThreads we want to count
     *   }
     * })
    **/
    count<T extends DiscussionThreadCountArgs>(
      args?: Subset<T, DiscussionThreadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiscussionThreadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DiscussionThread.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscussionThreadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DiscussionThreadAggregateArgs>(args: Subset<T, DiscussionThreadAggregateArgs>): Prisma.PrismaPromise<GetDiscussionThreadAggregateType<T>>

    /**
     * Group by DiscussionThread.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscussionThreadGroupByArgs} args - Group by arguments.
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
      T extends DiscussionThreadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiscussionThreadGroupByArgs['orderBy'] }
        : { orderBy?: DiscussionThreadGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DiscussionThreadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiscussionThreadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DiscussionThread model
   */
  readonly fields: DiscussionThreadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DiscussionThread.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiscussionThreadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    market<T extends MarketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MarketDefaultArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    messages<T extends DiscussionThread$messagesArgs<ExtArgs> = {}>(args?: Subset<T, DiscussionThread$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscussionMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the DiscussionThread model
   */
  interface DiscussionThreadFieldRefs {
    readonly id: FieldRef<"DiscussionThread", 'String'>
    readonly marketId: FieldRef<"DiscussionThread", 'String'>
    readonly createdBy: FieldRef<"DiscussionThread", 'String'>
    readonly status: FieldRef<"DiscussionThread", 'String'>
    readonly createdAt: FieldRef<"DiscussionThread", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DiscussionThread findUnique
   */
  export type DiscussionThreadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscussionThread
     */
    select?: DiscussionThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscussionThread
     */
    omit?: DiscussionThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionThreadInclude<ExtArgs> | null
    /**
     * Filter, which DiscussionThread to fetch.
     */
    where: DiscussionThreadWhereUniqueInput
  }

  /**
   * DiscussionThread findUniqueOrThrow
   */
  export type DiscussionThreadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscussionThread
     */
    select?: DiscussionThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscussionThread
     */
    omit?: DiscussionThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionThreadInclude<ExtArgs> | null
    /**
     * Filter, which DiscussionThread to fetch.
     */
    where: DiscussionThreadWhereUniqueInput
  }

  /**
   * DiscussionThread findFirst
   */
  export type DiscussionThreadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscussionThread
     */
    select?: DiscussionThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscussionThread
     */
    omit?: DiscussionThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionThreadInclude<ExtArgs> | null
    /**
     * Filter, which DiscussionThread to fetch.
     */
    where?: DiscussionThreadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscussionThreads to fetch.
     */
    orderBy?: DiscussionThreadOrderByWithRelationInput | DiscussionThreadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiscussionThreads.
     */
    cursor?: DiscussionThreadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscussionThreads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscussionThreads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiscussionThreads.
     */
    distinct?: DiscussionThreadScalarFieldEnum | DiscussionThreadScalarFieldEnum[]
  }

  /**
   * DiscussionThread findFirstOrThrow
   */
  export type DiscussionThreadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscussionThread
     */
    select?: DiscussionThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscussionThread
     */
    omit?: DiscussionThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionThreadInclude<ExtArgs> | null
    /**
     * Filter, which DiscussionThread to fetch.
     */
    where?: DiscussionThreadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscussionThreads to fetch.
     */
    orderBy?: DiscussionThreadOrderByWithRelationInput | DiscussionThreadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiscussionThreads.
     */
    cursor?: DiscussionThreadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscussionThreads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscussionThreads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiscussionThreads.
     */
    distinct?: DiscussionThreadScalarFieldEnum | DiscussionThreadScalarFieldEnum[]
  }

  /**
   * DiscussionThread findMany
   */
  export type DiscussionThreadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscussionThread
     */
    select?: DiscussionThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscussionThread
     */
    omit?: DiscussionThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionThreadInclude<ExtArgs> | null
    /**
     * Filter, which DiscussionThreads to fetch.
     */
    where?: DiscussionThreadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscussionThreads to fetch.
     */
    orderBy?: DiscussionThreadOrderByWithRelationInput | DiscussionThreadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DiscussionThreads.
     */
    cursor?: DiscussionThreadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscussionThreads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscussionThreads.
     */
    skip?: number
    distinct?: DiscussionThreadScalarFieldEnum | DiscussionThreadScalarFieldEnum[]
  }

  /**
   * DiscussionThread create
   */
  export type DiscussionThreadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscussionThread
     */
    select?: DiscussionThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscussionThread
     */
    omit?: DiscussionThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionThreadInclude<ExtArgs> | null
    /**
     * The data needed to create a DiscussionThread.
     */
    data: XOR<DiscussionThreadCreateInput, DiscussionThreadUncheckedCreateInput>
  }

  /**
   * DiscussionThread createMany
   */
  export type DiscussionThreadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DiscussionThreads.
     */
    data: DiscussionThreadCreateManyInput | DiscussionThreadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DiscussionThread createManyAndReturn
   */
  export type DiscussionThreadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscussionThread
     */
    select?: DiscussionThreadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DiscussionThread
     */
    omit?: DiscussionThreadOmit<ExtArgs> | null
    /**
     * The data used to create many DiscussionThreads.
     */
    data: DiscussionThreadCreateManyInput | DiscussionThreadCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionThreadIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DiscussionThread update
   */
  export type DiscussionThreadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscussionThread
     */
    select?: DiscussionThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscussionThread
     */
    omit?: DiscussionThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionThreadInclude<ExtArgs> | null
    /**
     * The data needed to update a DiscussionThread.
     */
    data: XOR<DiscussionThreadUpdateInput, DiscussionThreadUncheckedUpdateInput>
    /**
     * Choose, which DiscussionThread to update.
     */
    where: DiscussionThreadWhereUniqueInput
  }

  /**
   * DiscussionThread updateMany
   */
  export type DiscussionThreadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DiscussionThreads.
     */
    data: XOR<DiscussionThreadUpdateManyMutationInput, DiscussionThreadUncheckedUpdateManyInput>
    /**
     * Filter which DiscussionThreads to update
     */
    where?: DiscussionThreadWhereInput
    /**
     * Limit how many DiscussionThreads to update.
     */
    limit?: number
  }

  /**
   * DiscussionThread updateManyAndReturn
   */
  export type DiscussionThreadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscussionThread
     */
    select?: DiscussionThreadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DiscussionThread
     */
    omit?: DiscussionThreadOmit<ExtArgs> | null
    /**
     * The data used to update DiscussionThreads.
     */
    data: XOR<DiscussionThreadUpdateManyMutationInput, DiscussionThreadUncheckedUpdateManyInput>
    /**
     * Filter which DiscussionThreads to update
     */
    where?: DiscussionThreadWhereInput
    /**
     * Limit how many DiscussionThreads to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionThreadIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DiscussionThread upsert
   */
  export type DiscussionThreadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscussionThread
     */
    select?: DiscussionThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscussionThread
     */
    omit?: DiscussionThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionThreadInclude<ExtArgs> | null
    /**
     * The filter to search for the DiscussionThread to update in case it exists.
     */
    where: DiscussionThreadWhereUniqueInput
    /**
     * In case the DiscussionThread found by the `where` argument doesn't exist, create a new DiscussionThread with this data.
     */
    create: XOR<DiscussionThreadCreateInput, DiscussionThreadUncheckedCreateInput>
    /**
     * In case the DiscussionThread was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiscussionThreadUpdateInput, DiscussionThreadUncheckedUpdateInput>
  }

  /**
   * DiscussionThread delete
   */
  export type DiscussionThreadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscussionThread
     */
    select?: DiscussionThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscussionThread
     */
    omit?: DiscussionThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionThreadInclude<ExtArgs> | null
    /**
     * Filter which DiscussionThread to delete.
     */
    where: DiscussionThreadWhereUniqueInput
  }

  /**
   * DiscussionThread deleteMany
   */
  export type DiscussionThreadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiscussionThreads to delete
     */
    where?: DiscussionThreadWhereInput
    /**
     * Limit how many DiscussionThreads to delete.
     */
    limit?: number
  }

  /**
   * DiscussionThread.messages
   */
  export type DiscussionThread$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscussionMessage
     */
    select?: DiscussionMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscussionMessage
     */
    omit?: DiscussionMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionMessageInclude<ExtArgs> | null
    where?: DiscussionMessageWhereInput
    orderBy?: DiscussionMessageOrderByWithRelationInput | DiscussionMessageOrderByWithRelationInput[]
    cursor?: DiscussionMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiscussionMessageScalarFieldEnum | DiscussionMessageScalarFieldEnum[]
  }

  /**
   * DiscussionThread without action
   */
  export type DiscussionThreadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscussionThread
     */
    select?: DiscussionThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscussionThread
     */
    omit?: DiscussionThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionThreadInclude<ExtArgs> | null
  }


  /**
   * Model DiscussionMessage
   */

  export type AggregateDiscussionMessage = {
    _count: DiscussionMessageCountAggregateOutputType | null
    _min: DiscussionMessageMinAggregateOutputType | null
    _max: DiscussionMessageMaxAggregateOutputType | null
  }

  export type DiscussionMessageMinAggregateOutputType = {
    id: string | null
    threadId: string | null
    userId: string | null
    role: string | null
    content: string | null
    author: string | null
    createdAt: Date | null
  }

  export type DiscussionMessageMaxAggregateOutputType = {
    id: string | null
    threadId: string | null
    userId: string | null
    role: string | null
    content: string | null
    author: string | null
    createdAt: Date | null
  }

  export type DiscussionMessageCountAggregateOutputType = {
    id: number
    threadId: number
    userId: number
    role: number
    content: number
    author: number
    createdAt: number
    _all: number
  }


  export type DiscussionMessageMinAggregateInputType = {
    id?: true
    threadId?: true
    userId?: true
    role?: true
    content?: true
    author?: true
    createdAt?: true
  }

  export type DiscussionMessageMaxAggregateInputType = {
    id?: true
    threadId?: true
    userId?: true
    role?: true
    content?: true
    author?: true
    createdAt?: true
  }

  export type DiscussionMessageCountAggregateInputType = {
    id?: true
    threadId?: true
    userId?: true
    role?: true
    content?: true
    author?: true
    createdAt?: true
    _all?: true
  }

  export type DiscussionMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiscussionMessage to aggregate.
     */
    where?: DiscussionMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscussionMessages to fetch.
     */
    orderBy?: DiscussionMessageOrderByWithRelationInput | DiscussionMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiscussionMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscussionMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscussionMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DiscussionMessages
    **/
    _count?: true | DiscussionMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiscussionMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiscussionMessageMaxAggregateInputType
  }

  export type GetDiscussionMessageAggregateType<T extends DiscussionMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateDiscussionMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiscussionMessage[P]>
      : GetScalarType<T[P], AggregateDiscussionMessage[P]>
  }




  export type DiscussionMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiscussionMessageWhereInput
    orderBy?: DiscussionMessageOrderByWithAggregationInput | DiscussionMessageOrderByWithAggregationInput[]
    by: DiscussionMessageScalarFieldEnum[] | DiscussionMessageScalarFieldEnum
    having?: DiscussionMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiscussionMessageCountAggregateInputType | true
    _min?: DiscussionMessageMinAggregateInputType
    _max?: DiscussionMessageMaxAggregateInputType
  }

  export type DiscussionMessageGroupByOutputType = {
    id: string
    threadId: string
    userId: string
    role: string
    content: string
    author: string | null
    createdAt: Date
    _count: DiscussionMessageCountAggregateOutputType | null
    _min: DiscussionMessageMinAggregateOutputType | null
    _max: DiscussionMessageMaxAggregateOutputType | null
  }

  type GetDiscussionMessageGroupByPayload<T extends DiscussionMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiscussionMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiscussionMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiscussionMessageGroupByOutputType[P]>
            : GetScalarType<T[P], DiscussionMessageGroupByOutputType[P]>
        }
      >
    >


  export type DiscussionMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    threadId?: boolean
    userId?: boolean
    role?: boolean
    content?: boolean
    author?: boolean
    createdAt?: boolean
    thread?: boolean | DiscussionThreadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["discussionMessage"]>

  export type DiscussionMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    threadId?: boolean
    userId?: boolean
    role?: boolean
    content?: boolean
    author?: boolean
    createdAt?: boolean
    thread?: boolean | DiscussionThreadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["discussionMessage"]>

  export type DiscussionMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    threadId?: boolean
    userId?: boolean
    role?: boolean
    content?: boolean
    author?: boolean
    createdAt?: boolean
    thread?: boolean | DiscussionThreadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["discussionMessage"]>

  export type DiscussionMessageSelectScalar = {
    id?: boolean
    threadId?: boolean
    userId?: boolean
    role?: boolean
    content?: boolean
    author?: boolean
    createdAt?: boolean
  }

  export type DiscussionMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "threadId" | "userId" | "role" | "content" | "author" | "createdAt", ExtArgs["result"]["discussionMessage"]>
  export type DiscussionMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    thread?: boolean | DiscussionThreadDefaultArgs<ExtArgs>
  }
  export type DiscussionMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    thread?: boolean | DiscussionThreadDefaultArgs<ExtArgs>
  }
  export type DiscussionMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    thread?: boolean | DiscussionThreadDefaultArgs<ExtArgs>
  }

  export type $DiscussionMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DiscussionMessage"
    objects: {
      thread: Prisma.$DiscussionThreadPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      threadId: string
      userId: string
      role: string
      content: string
      author: string | null
      createdAt: Date
    }, ExtArgs["result"]["discussionMessage"]>
    composites: {}
  }

  type DiscussionMessageGetPayload<S extends boolean | null | undefined | DiscussionMessageDefaultArgs> = $Result.GetResult<Prisma.$DiscussionMessagePayload, S>

  type DiscussionMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DiscussionMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiscussionMessageCountAggregateInputType | true
    }

  export interface DiscussionMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DiscussionMessage'], meta: { name: 'DiscussionMessage' } }
    /**
     * Find zero or one DiscussionMessage that matches the filter.
     * @param {DiscussionMessageFindUniqueArgs} args - Arguments to find a DiscussionMessage
     * @example
     * // Get one DiscussionMessage
     * const discussionMessage = await prisma.discussionMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiscussionMessageFindUniqueArgs>(args: SelectSubset<T, DiscussionMessageFindUniqueArgs<ExtArgs>>): Prisma__DiscussionMessageClient<$Result.GetResult<Prisma.$DiscussionMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DiscussionMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DiscussionMessageFindUniqueOrThrowArgs} args - Arguments to find a DiscussionMessage
     * @example
     * // Get one DiscussionMessage
     * const discussionMessage = await prisma.discussionMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiscussionMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, DiscussionMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DiscussionMessageClient<$Result.GetResult<Prisma.$DiscussionMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DiscussionMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscussionMessageFindFirstArgs} args - Arguments to find a DiscussionMessage
     * @example
     * // Get one DiscussionMessage
     * const discussionMessage = await prisma.discussionMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiscussionMessageFindFirstArgs>(args?: SelectSubset<T, DiscussionMessageFindFirstArgs<ExtArgs>>): Prisma__DiscussionMessageClient<$Result.GetResult<Prisma.$DiscussionMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DiscussionMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscussionMessageFindFirstOrThrowArgs} args - Arguments to find a DiscussionMessage
     * @example
     * // Get one DiscussionMessage
     * const discussionMessage = await prisma.discussionMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiscussionMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, DiscussionMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__DiscussionMessageClient<$Result.GetResult<Prisma.$DiscussionMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DiscussionMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscussionMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DiscussionMessages
     * const discussionMessages = await prisma.discussionMessage.findMany()
     * 
     * // Get first 10 DiscussionMessages
     * const discussionMessages = await prisma.discussionMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const discussionMessageWithIdOnly = await prisma.discussionMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DiscussionMessageFindManyArgs>(args?: SelectSubset<T, DiscussionMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscussionMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DiscussionMessage.
     * @param {DiscussionMessageCreateArgs} args - Arguments to create a DiscussionMessage.
     * @example
     * // Create one DiscussionMessage
     * const DiscussionMessage = await prisma.discussionMessage.create({
     *   data: {
     *     // ... data to create a DiscussionMessage
     *   }
     * })
     * 
     */
    create<T extends DiscussionMessageCreateArgs>(args: SelectSubset<T, DiscussionMessageCreateArgs<ExtArgs>>): Prisma__DiscussionMessageClient<$Result.GetResult<Prisma.$DiscussionMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DiscussionMessages.
     * @param {DiscussionMessageCreateManyArgs} args - Arguments to create many DiscussionMessages.
     * @example
     * // Create many DiscussionMessages
     * const discussionMessage = await prisma.discussionMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DiscussionMessageCreateManyArgs>(args?: SelectSubset<T, DiscussionMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DiscussionMessages and returns the data saved in the database.
     * @param {DiscussionMessageCreateManyAndReturnArgs} args - Arguments to create many DiscussionMessages.
     * @example
     * // Create many DiscussionMessages
     * const discussionMessage = await prisma.discussionMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DiscussionMessages and only return the `id`
     * const discussionMessageWithIdOnly = await prisma.discussionMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DiscussionMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, DiscussionMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscussionMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DiscussionMessage.
     * @param {DiscussionMessageDeleteArgs} args - Arguments to delete one DiscussionMessage.
     * @example
     * // Delete one DiscussionMessage
     * const DiscussionMessage = await prisma.discussionMessage.delete({
     *   where: {
     *     // ... filter to delete one DiscussionMessage
     *   }
     * })
     * 
     */
    delete<T extends DiscussionMessageDeleteArgs>(args: SelectSubset<T, DiscussionMessageDeleteArgs<ExtArgs>>): Prisma__DiscussionMessageClient<$Result.GetResult<Prisma.$DiscussionMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DiscussionMessage.
     * @param {DiscussionMessageUpdateArgs} args - Arguments to update one DiscussionMessage.
     * @example
     * // Update one DiscussionMessage
     * const discussionMessage = await prisma.discussionMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DiscussionMessageUpdateArgs>(args: SelectSubset<T, DiscussionMessageUpdateArgs<ExtArgs>>): Prisma__DiscussionMessageClient<$Result.GetResult<Prisma.$DiscussionMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DiscussionMessages.
     * @param {DiscussionMessageDeleteManyArgs} args - Arguments to filter DiscussionMessages to delete.
     * @example
     * // Delete a few DiscussionMessages
     * const { count } = await prisma.discussionMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DiscussionMessageDeleteManyArgs>(args?: SelectSubset<T, DiscussionMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DiscussionMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscussionMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DiscussionMessages
     * const discussionMessage = await prisma.discussionMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DiscussionMessageUpdateManyArgs>(args: SelectSubset<T, DiscussionMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DiscussionMessages and returns the data updated in the database.
     * @param {DiscussionMessageUpdateManyAndReturnArgs} args - Arguments to update many DiscussionMessages.
     * @example
     * // Update many DiscussionMessages
     * const discussionMessage = await prisma.discussionMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DiscussionMessages and only return the `id`
     * const discussionMessageWithIdOnly = await prisma.discussionMessage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DiscussionMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, DiscussionMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscussionMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DiscussionMessage.
     * @param {DiscussionMessageUpsertArgs} args - Arguments to update or create a DiscussionMessage.
     * @example
     * // Update or create a DiscussionMessage
     * const discussionMessage = await prisma.discussionMessage.upsert({
     *   create: {
     *     // ... data to create a DiscussionMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DiscussionMessage we want to update
     *   }
     * })
     */
    upsert<T extends DiscussionMessageUpsertArgs>(args: SelectSubset<T, DiscussionMessageUpsertArgs<ExtArgs>>): Prisma__DiscussionMessageClient<$Result.GetResult<Prisma.$DiscussionMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DiscussionMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscussionMessageCountArgs} args - Arguments to filter DiscussionMessages to count.
     * @example
     * // Count the number of DiscussionMessages
     * const count = await prisma.discussionMessage.count({
     *   where: {
     *     // ... the filter for the DiscussionMessages we want to count
     *   }
     * })
    **/
    count<T extends DiscussionMessageCountArgs>(
      args?: Subset<T, DiscussionMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiscussionMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DiscussionMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscussionMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DiscussionMessageAggregateArgs>(args: Subset<T, DiscussionMessageAggregateArgs>): Prisma.PrismaPromise<GetDiscussionMessageAggregateType<T>>

    /**
     * Group by DiscussionMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscussionMessageGroupByArgs} args - Group by arguments.
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
      T extends DiscussionMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiscussionMessageGroupByArgs['orderBy'] }
        : { orderBy?: DiscussionMessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DiscussionMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiscussionMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DiscussionMessage model
   */
  readonly fields: DiscussionMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DiscussionMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiscussionMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    thread<T extends DiscussionThreadDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DiscussionThreadDefaultArgs<ExtArgs>>): Prisma__DiscussionThreadClient<$Result.GetResult<Prisma.$DiscussionThreadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DiscussionMessage model
   */
  interface DiscussionMessageFieldRefs {
    readonly id: FieldRef<"DiscussionMessage", 'String'>
    readonly threadId: FieldRef<"DiscussionMessage", 'String'>
    readonly userId: FieldRef<"DiscussionMessage", 'String'>
    readonly role: FieldRef<"DiscussionMessage", 'String'>
    readonly content: FieldRef<"DiscussionMessage", 'String'>
    readonly author: FieldRef<"DiscussionMessage", 'String'>
    readonly createdAt: FieldRef<"DiscussionMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DiscussionMessage findUnique
   */
  export type DiscussionMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscussionMessage
     */
    select?: DiscussionMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscussionMessage
     */
    omit?: DiscussionMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionMessageInclude<ExtArgs> | null
    /**
     * Filter, which DiscussionMessage to fetch.
     */
    where: DiscussionMessageWhereUniqueInput
  }

  /**
   * DiscussionMessage findUniqueOrThrow
   */
  export type DiscussionMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscussionMessage
     */
    select?: DiscussionMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscussionMessage
     */
    omit?: DiscussionMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionMessageInclude<ExtArgs> | null
    /**
     * Filter, which DiscussionMessage to fetch.
     */
    where: DiscussionMessageWhereUniqueInput
  }

  /**
   * DiscussionMessage findFirst
   */
  export type DiscussionMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscussionMessage
     */
    select?: DiscussionMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscussionMessage
     */
    omit?: DiscussionMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionMessageInclude<ExtArgs> | null
    /**
     * Filter, which DiscussionMessage to fetch.
     */
    where?: DiscussionMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscussionMessages to fetch.
     */
    orderBy?: DiscussionMessageOrderByWithRelationInput | DiscussionMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiscussionMessages.
     */
    cursor?: DiscussionMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscussionMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscussionMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiscussionMessages.
     */
    distinct?: DiscussionMessageScalarFieldEnum | DiscussionMessageScalarFieldEnum[]
  }

  /**
   * DiscussionMessage findFirstOrThrow
   */
  export type DiscussionMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscussionMessage
     */
    select?: DiscussionMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscussionMessage
     */
    omit?: DiscussionMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionMessageInclude<ExtArgs> | null
    /**
     * Filter, which DiscussionMessage to fetch.
     */
    where?: DiscussionMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscussionMessages to fetch.
     */
    orderBy?: DiscussionMessageOrderByWithRelationInput | DiscussionMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiscussionMessages.
     */
    cursor?: DiscussionMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscussionMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscussionMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiscussionMessages.
     */
    distinct?: DiscussionMessageScalarFieldEnum | DiscussionMessageScalarFieldEnum[]
  }

  /**
   * DiscussionMessage findMany
   */
  export type DiscussionMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscussionMessage
     */
    select?: DiscussionMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscussionMessage
     */
    omit?: DiscussionMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionMessageInclude<ExtArgs> | null
    /**
     * Filter, which DiscussionMessages to fetch.
     */
    where?: DiscussionMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscussionMessages to fetch.
     */
    orderBy?: DiscussionMessageOrderByWithRelationInput | DiscussionMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DiscussionMessages.
     */
    cursor?: DiscussionMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscussionMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscussionMessages.
     */
    skip?: number
    distinct?: DiscussionMessageScalarFieldEnum | DiscussionMessageScalarFieldEnum[]
  }

  /**
   * DiscussionMessage create
   */
  export type DiscussionMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscussionMessage
     */
    select?: DiscussionMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscussionMessage
     */
    omit?: DiscussionMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a DiscussionMessage.
     */
    data: XOR<DiscussionMessageCreateInput, DiscussionMessageUncheckedCreateInput>
  }

  /**
   * DiscussionMessage createMany
   */
  export type DiscussionMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DiscussionMessages.
     */
    data: DiscussionMessageCreateManyInput | DiscussionMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DiscussionMessage createManyAndReturn
   */
  export type DiscussionMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscussionMessage
     */
    select?: DiscussionMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DiscussionMessage
     */
    omit?: DiscussionMessageOmit<ExtArgs> | null
    /**
     * The data used to create many DiscussionMessages.
     */
    data: DiscussionMessageCreateManyInput | DiscussionMessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DiscussionMessage update
   */
  export type DiscussionMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscussionMessage
     */
    select?: DiscussionMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscussionMessage
     */
    omit?: DiscussionMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a DiscussionMessage.
     */
    data: XOR<DiscussionMessageUpdateInput, DiscussionMessageUncheckedUpdateInput>
    /**
     * Choose, which DiscussionMessage to update.
     */
    where: DiscussionMessageWhereUniqueInput
  }

  /**
   * DiscussionMessage updateMany
   */
  export type DiscussionMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DiscussionMessages.
     */
    data: XOR<DiscussionMessageUpdateManyMutationInput, DiscussionMessageUncheckedUpdateManyInput>
    /**
     * Filter which DiscussionMessages to update
     */
    where?: DiscussionMessageWhereInput
    /**
     * Limit how many DiscussionMessages to update.
     */
    limit?: number
  }

  /**
   * DiscussionMessage updateManyAndReturn
   */
  export type DiscussionMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscussionMessage
     */
    select?: DiscussionMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DiscussionMessage
     */
    omit?: DiscussionMessageOmit<ExtArgs> | null
    /**
     * The data used to update DiscussionMessages.
     */
    data: XOR<DiscussionMessageUpdateManyMutationInput, DiscussionMessageUncheckedUpdateManyInput>
    /**
     * Filter which DiscussionMessages to update
     */
    where?: DiscussionMessageWhereInput
    /**
     * Limit how many DiscussionMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionMessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DiscussionMessage upsert
   */
  export type DiscussionMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscussionMessage
     */
    select?: DiscussionMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscussionMessage
     */
    omit?: DiscussionMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the DiscussionMessage to update in case it exists.
     */
    where: DiscussionMessageWhereUniqueInput
    /**
     * In case the DiscussionMessage found by the `where` argument doesn't exist, create a new DiscussionMessage with this data.
     */
    create: XOR<DiscussionMessageCreateInput, DiscussionMessageUncheckedCreateInput>
    /**
     * In case the DiscussionMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiscussionMessageUpdateInput, DiscussionMessageUncheckedUpdateInput>
  }

  /**
   * DiscussionMessage delete
   */
  export type DiscussionMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscussionMessage
     */
    select?: DiscussionMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscussionMessage
     */
    omit?: DiscussionMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionMessageInclude<ExtArgs> | null
    /**
     * Filter which DiscussionMessage to delete.
     */
    where: DiscussionMessageWhereUniqueInput
  }

  /**
   * DiscussionMessage deleteMany
   */
  export type DiscussionMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiscussionMessages to delete
     */
    where?: DiscussionMessageWhereInput
    /**
     * Limit how many DiscussionMessages to delete.
     */
    limit?: number
  }

  /**
   * DiscussionMessage without action
   */
  export type DiscussionMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscussionMessage
     */
    select?: DiscussionMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscussionMessage
     */
    omit?: DiscussionMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionMessageInclude<ExtArgs> | null
  }


  /**
   * Model CreatorProfile
   */

  export type AggregateCreatorProfile = {
    _count: CreatorProfileCountAggregateOutputType | null
    _min: CreatorProfileMinAggregateOutputType | null
    _max: CreatorProfileMaxAggregateOutputType | null
  }

  export type CreatorProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    walletAddress: string | null
    role: string | null
    name: string | null
    bio: string | null
    avatarUrl: string | null
    portfolioConnected: boolean | null
    verificationStatus: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CreatorProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    walletAddress: string | null
    role: string | null
    name: string | null
    bio: string | null
    avatarUrl: string | null
    portfolioConnected: boolean | null
    verificationStatus: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CreatorProfileCountAggregateOutputType = {
    id: number
    userId: number
    walletAddress: number
    role: number
    name: number
    bio: number
    avatarUrl: number
    profileData: number
    portfolioStats: number
    portfolioConnected: number
    verificationStatus: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CreatorProfileMinAggregateInputType = {
    id?: true
    userId?: true
    walletAddress?: true
    role?: true
    name?: true
    bio?: true
    avatarUrl?: true
    portfolioConnected?: true
    verificationStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CreatorProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    walletAddress?: true
    role?: true
    name?: true
    bio?: true
    avatarUrl?: true
    portfolioConnected?: true
    verificationStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CreatorProfileCountAggregateInputType = {
    id?: true
    userId?: true
    walletAddress?: true
    role?: true
    name?: true
    bio?: true
    avatarUrl?: true
    profileData?: true
    portfolioStats?: true
    portfolioConnected?: true
    verificationStatus?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CreatorProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CreatorProfile to aggregate.
     */
    where?: CreatorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreatorProfiles to fetch.
     */
    orderBy?: CreatorProfileOrderByWithRelationInput | CreatorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CreatorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreatorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreatorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CreatorProfiles
    **/
    _count?: true | CreatorProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CreatorProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CreatorProfileMaxAggregateInputType
  }

  export type GetCreatorProfileAggregateType<T extends CreatorProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateCreatorProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCreatorProfile[P]>
      : GetScalarType<T[P], AggregateCreatorProfile[P]>
  }




  export type CreatorProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreatorProfileWhereInput
    orderBy?: CreatorProfileOrderByWithAggregationInput | CreatorProfileOrderByWithAggregationInput[]
    by: CreatorProfileScalarFieldEnum[] | CreatorProfileScalarFieldEnum
    having?: CreatorProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CreatorProfileCountAggregateInputType | true
    _min?: CreatorProfileMinAggregateInputType
    _max?: CreatorProfileMaxAggregateInputType
  }

  export type CreatorProfileGroupByOutputType = {
    id: string
    userId: string
    walletAddress: string | null
    role: string | null
    name: string | null
    bio: string | null
    avatarUrl: string | null
    profileData: JsonValue | null
    portfolioStats: JsonValue | null
    portfolioConnected: boolean | null
    verificationStatus: string | null
    createdAt: Date
    updatedAt: Date
    _count: CreatorProfileCountAggregateOutputType | null
    _min: CreatorProfileMinAggregateOutputType | null
    _max: CreatorProfileMaxAggregateOutputType | null
  }

  type GetCreatorProfileGroupByPayload<T extends CreatorProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CreatorProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CreatorProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CreatorProfileGroupByOutputType[P]>
            : GetScalarType<T[P], CreatorProfileGroupByOutputType[P]>
        }
      >
    >


  export type CreatorProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    walletAddress?: boolean
    role?: boolean
    name?: boolean
    bio?: boolean
    avatarUrl?: boolean
    profileData?: boolean
    portfolioStats?: boolean
    portfolioConnected?: boolean
    verificationStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["creatorProfile"]>

  export type CreatorProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    walletAddress?: boolean
    role?: boolean
    name?: boolean
    bio?: boolean
    avatarUrl?: boolean
    profileData?: boolean
    portfolioStats?: boolean
    portfolioConnected?: boolean
    verificationStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["creatorProfile"]>

  export type CreatorProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    walletAddress?: boolean
    role?: boolean
    name?: boolean
    bio?: boolean
    avatarUrl?: boolean
    profileData?: boolean
    portfolioStats?: boolean
    portfolioConnected?: boolean
    verificationStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["creatorProfile"]>

  export type CreatorProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    walletAddress?: boolean
    role?: boolean
    name?: boolean
    bio?: boolean
    avatarUrl?: boolean
    profileData?: boolean
    portfolioStats?: boolean
    portfolioConnected?: boolean
    verificationStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CreatorProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "walletAddress" | "role" | "name" | "bio" | "avatarUrl" | "profileData" | "portfolioStats" | "portfolioConnected" | "verificationStatus" | "createdAt" | "updatedAt", ExtArgs["result"]["creatorProfile"]>

  export type $CreatorProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CreatorProfile"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      walletAddress: string | null
      role: string | null
      name: string | null
      bio: string | null
      avatarUrl: string | null
      profileData: Prisma.JsonValue | null
      portfolioStats: Prisma.JsonValue | null
      portfolioConnected: boolean | null
      verificationStatus: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["creatorProfile"]>
    composites: {}
  }

  type CreatorProfileGetPayload<S extends boolean | null | undefined | CreatorProfileDefaultArgs> = $Result.GetResult<Prisma.$CreatorProfilePayload, S>

  type CreatorProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CreatorProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CreatorProfileCountAggregateInputType | true
    }

  export interface CreatorProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CreatorProfile'], meta: { name: 'CreatorProfile' } }
    /**
     * Find zero or one CreatorProfile that matches the filter.
     * @param {CreatorProfileFindUniqueArgs} args - Arguments to find a CreatorProfile
     * @example
     * // Get one CreatorProfile
     * const creatorProfile = await prisma.creatorProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CreatorProfileFindUniqueArgs>(args: SelectSubset<T, CreatorProfileFindUniqueArgs<ExtArgs>>): Prisma__CreatorProfileClient<$Result.GetResult<Prisma.$CreatorProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CreatorProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CreatorProfileFindUniqueOrThrowArgs} args - Arguments to find a CreatorProfile
     * @example
     * // Get one CreatorProfile
     * const creatorProfile = await prisma.creatorProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CreatorProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, CreatorProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CreatorProfileClient<$Result.GetResult<Prisma.$CreatorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CreatorProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreatorProfileFindFirstArgs} args - Arguments to find a CreatorProfile
     * @example
     * // Get one CreatorProfile
     * const creatorProfile = await prisma.creatorProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CreatorProfileFindFirstArgs>(args?: SelectSubset<T, CreatorProfileFindFirstArgs<ExtArgs>>): Prisma__CreatorProfileClient<$Result.GetResult<Prisma.$CreatorProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CreatorProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreatorProfileFindFirstOrThrowArgs} args - Arguments to find a CreatorProfile
     * @example
     * // Get one CreatorProfile
     * const creatorProfile = await prisma.creatorProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CreatorProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, CreatorProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__CreatorProfileClient<$Result.GetResult<Prisma.$CreatorProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CreatorProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreatorProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CreatorProfiles
     * const creatorProfiles = await prisma.creatorProfile.findMany()
     * 
     * // Get first 10 CreatorProfiles
     * const creatorProfiles = await prisma.creatorProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const creatorProfileWithIdOnly = await prisma.creatorProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CreatorProfileFindManyArgs>(args?: SelectSubset<T, CreatorProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreatorProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CreatorProfile.
     * @param {CreatorProfileCreateArgs} args - Arguments to create a CreatorProfile.
     * @example
     * // Create one CreatorProfile
     * const CreatorProfile = await prisma.creatorProfile.create({
     *   data: {
     *     // ... data to create a CreatorProfile
     *   }
     * })
     * 
     */
    create<T extends CreatorProfileCreateArgs>(args: SelectSubset<T, CreatorProfileCreateArgs<ExtArgs>>): Prisma__CreatorProfileClient<$Result.GetResult<Prisma.$CreatorProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CreatorProfiles.
     * @param {CreatorProfileCreateManyArgs} args - Arguments to create many CreatorProfiles.
     * @example
     * // Create many CreatorProfiles
     * const creatorProfile = await prisma.creatorProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CreatorProfileCreateManyArgs>(args?: SelectSubset<T, CreatorProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CreatorProfiles and returns the data saved in the database.
     * @param {CreatorProfileCreateManyAndReturnArgs} args - Arguments to create many CreatorProfiles.
     * @example
     * // Create many CreatorProfiles
     * const creatorProfile = await prisma.creatorProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CreatorProfiles and only return the `id`
     * const creatorProfileWithIdOnly = await prisma.creatorProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CreatorProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, CreatorProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreatorProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CreatorProfile.
     * @param {CreatorProfileDeleteArgs} args - Arguments to delete one CreatorProfile.
     * @example
     * // Delete one CreatorProfile
     * const CreatorProfile = await prisma.creatorProfile.delete({
     *   where: {
     *     // ... filter to delete one CreatorProfile
     *   }
     * })
     * 
     */
    delete<T extends CreatorProfileDeleteArgs>(args: SelectSubset<T, CreatorProfileDeleteArgs<ExtArgs>>): Prisma__CreatorProfileClient<$Result.GetResult<Prisma.$CreatorProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CreatorProfile.
     * @param {CreatorProfileUpdateArgs} args - Arguments to update one CreatorProfile.
     * @example
     * // Update one CreatorProfile
     * const creatorProfile = await prisma.creatorProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CreatorProfileUpdateArgs>(args: SelectSubset<T, CreatorProfileUpdateArgs<ExtArgs>>): Prisma__CreatorProfileClient<$Result.GetResult<Prisma.$CreatorProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CreatorProfiles.
     * @param {CreatorProfileDeleteManyArgs} args - Arguments to filter CreatorProfiles to delete.
     * @example
     * // Delete a few CreatorProfiles
     * const { count } = await prisma.creatorProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CreatorProfileDeleteManyArgs>(args?: SelectSubset<T, CreatorProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CreatorProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreatorProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CreatorProfiles
     * const creatorProfile = await prisma.creatorProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CreatorProfileUpdateManyArgs>(args: SelectSubset<T, CreatorProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CreatorProfiles and returns the data updated in the database.
     * @param {CreatorProfileUpdateManyAndReturnArgs} args - Arguments to update many CreatorProfiles.
     * @example
     * // Update many CreatorProfiles
     * const creatorProfile = await prisma.creatorProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CreatorProfiles and only return the `id`
     * const creatorProfileWithIdOnly = await prisma.creatorProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CreatorProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, CreatorProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreatorProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CreatorProfile.
     * @param {CreatorProfileUpsertArgs} args - Arguments to update or create a CreatorProfile.
     * @example
     * // Update or create a CreatorProfile
     * const creatorProfile = await prisma.creatorProfile.upsert({
     *   create: {
     *     // ... data to create a CreatorProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CreatorProfile we want to update
     *   }
     * })
     */
    upsert<T extends CreatorProfileUpsertArgs>(args: SelectSubset<T, CreatorProfileUpsertArgs<ExtArgs>>): Prisma__CreatorProfileClient<$Result.GetResult<Prisma.$CreatorProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CreatorProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreatorProfileCountArgs} args - Arguments to filter CreatorProfiles to count.
     * @example
     * // Count the number of CreatorProfiles
     * const count = await prisma.creatorProfile.count({
     *   where: {
     *     // ... the filter for the CreatorProfiles we want to count
     *   }
     * })
    **/
    count<T extends CreatorProfileCountArgs>(
      args?: Subset<T, CreatorProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CreatorProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CreatorProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreatorProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CreatorProfileAggregateArgs>(args: Subset<T, CreatorProfileAggregateArgs>): Prisma.PrismaPromise<GetCreatorProfileAggregateType<T>>

    /**
     * Group by CreatorProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreatorProfileGroupByArgs} args - Group by arguments.
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
      T extends CreatorProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CreatorProfileGroupByArgs['orderBy'] }
        : { orderBy?: CreatorProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CreatorProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCreatorProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CreatorProfile model
   */
  readonly fields: CreatorProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CreatorProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CreatorProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the CreatorProfile model
   */
  interface CreatorProfileFieldRefs {
    readonly id: FieldRef<"CreatorProfile", 'String'>
    readonly userId: FieldRef<"CreatorProfile", 'String'>
    readonly walletAddress: FieldRef<"CreatorProfile", 'String'>
    readonly role: FieldRef<"CreatorProfile", 'String'>
    readonly name: FieldRef<"CreatorProfile", 'String'>
    readonly bio: FieldRef<"CreatorProfile", 'String'>
    readonly avatarUrl: FieldRef<"CreatorProfile", 'String'>
    readonly profileData: FieldRef<"CreatorProfile", 'Json'>
    readonly portfolioStats: FieldRef<"CreatorProfile", 'Json'>
    readonly portfolioConnected: FieldRef<"CreatorProfile", 'Boolean'>
    readonly verificationStatus: FieldRef<"CreatorProfile", 'String'>
    readonly createdAt: FieldRef<"CreatorProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"CreatorProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CreatorProfile findUnique
   */
  export type CreatorProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatorProfile
     */
    select?: CreatorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreatorProfile
     */
    omit?: CreatorProfileOmit<ExtArgs> | null
    /**
     * Filter, which CreatorProfile to fetch.
     */
    where: CreatorProfileWhereUniqueInput
  }

  /**
   * CreatorProfile findUniqueOrThrow
   */
  export type CreatorProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatorProfile
     */
    select?: CreatorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreatorProfile
     */
    omit?: CreatorProfileOmit<ExtArgs> | null
    /**
     * Filter, which CreatorProfile to fetch.
     */
    where: CreatorProfileWhereUniqueInput
  }

  /**
   * CreatorProfile findFirst
   */
  export type CreatorProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatorProfile
     */
    select?: CreatorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreatorProfile
     */
    omit?: CreatorProfileOmit<ExtArgs> | null
    /**
     * Filter, which CreatorProfile to fetch.
     */
    where?: CreatorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreatorProfiles to fetch.
     */
    orderBy?: CreatorProfileOrderByWithRelationInput | CreatorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreatorProfiles.
     */
    cursor?: CreatorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreatorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreatorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreatorProfiles.
     */
    distinct?: CreatorProfileScalarFieldEnum | CreatorProfileScalarFieldEnum[]
  }

  /**
   * CreatorProfile findFirstOrThrow
   */
  export type CreatorProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatorProfile
     */
    select?: CreatorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreatorProfile
     */
    omit?: CreatorProfileOmit<ExtArgs> | null
    /**
     * Filter, which CreatorProfile to fetch.
     */
    where?: CreatorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreatorProfiles to fetch.
     */
    orderBy?: CreatorProfileOrderByWithRelationInput | CreatorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreatorProfiles.
     */
    cursor?: CreatorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreatorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreatorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreatorProfiles.
     */
    distinct?: CreatorProfileScalarFieldEnum | CreatorProfileScalarFieldEnum[]
  }

  /**
   * CreatorProfile findMany
   */
  export type CreatorProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatorProfile
     */
    select?: CreatorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreatorProfile
     */
    omit?: CreatorProfileOmit<ExtArgs> | null
    /**
     * Filter, which CreatorProfiles to fetch.
     */
    where?: CreatorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreatorProfiles to fetch.
     */
    orderBy?: CreatorProfileOrderByWithRelationInput | CreatorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CreatorProfiles.
     */
    cursor?: CreatorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreatorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreatorProfiles.
     */
    skip?: number
    distinct?: CreatorProfileScalarFieldEnum | CreatorProfileScalarFieldEnum[]
  }

  /**
   * CreatorProfile create
   */
  export type CreatorProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatorProfile
     */
    select?: CreatorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreatorProfile
     */
    omit?: CreatorProfileOmit<ExtArgs> | null
    /**
     * The data needed to create a CreatorProfile.
     */
    data: XOR<CreatorProfileCreateInput, CreatorProfileUncheckedCreateInput>
  }

  /**
   * CreatorProfile createMany
   */
  export type CreatorProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CreatorProfiles.
     */
    data: CreatorProfileCreateManyInput | CreatorProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CreatorProfile createManyAndReturn
   */
  export type CreatorProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatorProfile
     */
    select?: CreatorProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CreatorProfile
     */
    omit?: CreatorProfileOmit<ExtArgs> | null
    /**
     * The data used to create many CreatorProfiles.
     */
    data: CreatorProfileCreateManyInput | CreatorProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CreatorProfile update
   */
  export type CreatorProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatorProfile
     */
    select?: CreatorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreatorProfile
     */
    omit?: CreatorProfileOmit<ExtArgs> | null
    /**
     * The data needed to update a CreatorProfile.
     */
    data: XOR<CreatorProfileUpdateInput, CreatorProfileUncheckedUpdateInput>
    /**
     * Choose, which CreatorProfile to update.
     */
    where: CreatorProfileWhereUniqueInput
  }

  /**
   * CreatorProfile updateMany
   */
  export type CreatorProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CreatorProfiles.
     */
    data: XOR<CreatorProfileUpdateManyMutationInput, CreatorProfileUncheckedUpdateManyInput>
    /**
     * Filter which CreatorProfiles to update
     */
    where?: CreatorProfileWhereInput
    /**
     * Limit how many CreatorProfiles to update.
     */
    limit?: number
  }

  /**
   * CreatorProfile updateManyAndReturn
   */
  export type CreatorProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatorProfile
     */
    select?: CreatorProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CreatorProfile
     */
    omit?: CreatorProfileOmit<ExtArgs> | null
    /**
     * The data used to update CreatorProfiles.
     */
    data: XOR<CreatorProfileUpdateManyMutationInput, CreatorProfileUncheckedUpdateManyInput>
    /**
     * Filter which CreatorProfiles to update
     */
    where?: CreatorProfileWhereInput
    /**
     * Limit how many CreatorProfiles to update.
     */
    limit?: number
  }

  /**
   * CreatorProfile upsert
   */
  export type CreatorProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatorProfile
     */
    select?: CreatorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreatorProfile
     */
    omit?: CreatorProfileOmit<ExtArgs> | null
    /**
     * The filter to search for the CreatorProfile to update in case it exists.
     */
    where: CreatorProfileWhereUniqueInput
    /**
     * In case the CreatorProfile found by the `where` argument doesn't exist, create a new CreatorProfile with this data.
     */
    create: XOR<CreatorProfileCreateInput, CreatorProfileUncheckedCreateInput>
    /**
     * In case the CreatorProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CreatorProfileUpdateInput, CreatorProfileUncheckedUpdateInput>
  }

  /**
   * CreatorProfile delete
   */
  export type CreatorProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatorProfile
     */
    select?: CreatorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreatorProfile
     */
    omit?: CreatorProfileOmit<ExtArgs> | null
    /**
     * Filter which CreatorProfile to delete.
     */
    where: CreatorProfileWhereUniqueInput
  }

  /**
   * CreatorProfile deleteMany
   */
  export type CreatorProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CreatorProfiles to delete
     */
    where?: CreatorProfileWhereInput
    /**
     * Limit how many CreatorProfiles to delete.
     */
    limit?: number
  }

  /**
   * CreatorProfile without action
   */
  export type CreatorProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatorProfile
     */
    select?: CreatorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreatorProfile
     */
    omit?: CreatorProfileOmit<ExtArgs> | null
  }


  /**
   * Model Embed
   */

  export type AggregateEmbed = {
    _count: EmbedCountAggregateOutputType | null
    _min: EmbedMinAggregateOutputType | null
    _max: EmbedMaxAggregateOutputType | null
  }

  export type EmbedMinAggregateOutputType = {
    id: string | null
    marketId: string | null
    url: string | null
    type: string | null
    source: string | null
    createdAt: Date | null
  }

  export type EmbedMaxAggregateOutputType = {
    id: string | null
    marketId: string | null
    url: string | null
    type: string | null
    source: string | null
    createdAt: Date | null
  }

  export type EmbedCountAggregateOutputType = {
    id: number
    marketId: number
    url: number
    type: number
    source: number
    createdAt: number
    _all: number
  }


  export type EmbedMinAggregateInputType = {
    id?: true
    marketId?: true
    url?: true
    type?: true
    source?: true
    createdAt?: true
  }

  export type EmbedMaxAggregateInputType = {
    id?: true
    marketId?: true
    url?: true
    type?: true
    source?: true
    createdAt?: true
  }

  export type EmbedCountAggregateInputType = {
    id?: true
    marketId?: true
    url?: true
    type?: true
    source?: true
    createdAt?: true
    _all?: true
  }

  export type EmbedAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Embed to aggregate.
     */
    where?: EmbedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Embeds to fetch.
     */
    orderBy?: EmbedOrderByWithRelationInput | EmbedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmbedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Embeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Embeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Embeds
    **/
    _count?: true | EmbedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmbedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmbedMaxAggregateInputType
  }

  export type GetEmbedAggregateType<T extends EmbedAggregateArgs> = {
        [P in keyof T & keyof AggregateEmbed]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmbed[P]>
      : GetScalarType<T[P], AggregateEmbed[P]>
  }




  export type EmbedGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmbedWhereInput
    orderBy?: EmbedOrderByWithAggregationInput | EmbedOrderByWithAggregationInput[]
    by: EmbedScalarFieldEnum[] | EmbedScalarFieldEnum
    having?: EmbedScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmbedCountAggregateInputType | true
    _min?: EmbedMinAggregateInputType
    _max?: EmbedMaxAggregateInputType
  }

  export type EmbedGroupByOutputType = {
    id: string
    marketId: string
    url: string
    type: string
    source: string
    createdAt: Date
    _count: EmbedCountAggregateOutputType | null
    _min: EmbedMinAggregateOutputType | null
    _max: EmbedMaxAggregateOutputType | null
  }

  type GetEmbedGroupByPayload<T extends EmbedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmbedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmbedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmbedGroupByOutputType[P]>
            : GetScalarType<T[P], EmbedGroupByOutputType[P]>
        }
      >
    >


  export type EmbedSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    marketId?: boolean
    url?: boolean
    type?: boolean
    source?: boolean
    createdAt?: boolean
    market?: boolean | MarketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["embed"]>

  export type EmbedSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    marketId?: boolean
    url?: boolean
    type?: boolean
    source?: boolean
    createdAt?: boolean
    market?: boolean | MarketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["embed"]>

  export type EmbedSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    marketId?: boolean
    url?: boolean
    type?: boolean
    source?: boolean
    createdAt?: boolean
    market?: boolean | MarketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["embed"]>

  export type EmbedSelectScalar = {
    id?: boolean
    marketId?: boolean
    url?: boolean
    type?: boolean
    source?: boolean
    createdAt?: boolean
  }

  export type EmbedOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "marketId" | "url" | "type" | "source" | "createdAt", ExtArgs["result"]["embed"]>
  export type EmbedInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    market?: boolean | MarketDefaultArgs<ExtArgs>
  }
  export type EmbedIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    market?: boolean | MarketDefaultArgs<ExtArgs>
  }
  export type EmbedIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    market?: boolean | MarketDefaultArgs<ExtArgs>
  }

  export type $EmbedPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Embed"
    objects: {
      market: Prisma.$MarketPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      marketId: string
      url: string
      type: string
      source: string
      createdAt: Date
    }, ExtArgs["result"]["embed"]>
    composites: {}
  }

  type EmbedGetPayload<S extends boolean | null | undefined | EmbedDefaultArgs> = $Result.GetResult<Prisma.$EmbedPayload, S>

  type EmbedCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmbedFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmbedCountAggregateInputType | true
    }

  export interface EmbedDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Embed'], meta: { name: 'Embed' } }
    /**
     * Find zero or one Embed that matches the filter.
     * @param {EmbedFindUniqueArgs} args - Arguments to find a Embed
     * @example
     * // Get one Embed
     * const embed = await prisma.embed.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmbedFindUniqueArgs>(args: SelectSubset<T, EmbedFindUniqueArgs<ExtArgs>>): Prisma__EmbedClient<$Result.GetResult<Prisma.$EmbedPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Embed that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmbedFindUniqueOrThrowArgs} args - Arguments to find a Embed
     * @example
     * // Get one Embed
     * const embed = await prisma.embed.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmbedFindUniqueOrThrowArgs>(args: SelectSubset<T, EmbedFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmbedClient<$Result.GetResult<Prisma.$EmbedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Embed that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmbedFindFirstArgs} args - Arguments to find a Embed
     * @example
     * // Get one Embed
     * const embed = await prisma.embed.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmbedFindFirstArgs>(args?: SelectSubset<T, EmbedFindFirstArgs<ExtArgs>>): Prisma__EmbedClient<$Result.GetResult<Prisma.$EmbedPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Embed that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmbedFindFirstOrThrowArgs} args - Arguments to find a Embed
     * @example
     * // Get one Embed
     * const embed = await prisma.embed.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmbedFindFirstOrThrowArgs>(args?: SelectSubset<T, EmbedFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmbedClient<$Result.GetResult<Prisma.$EmbedPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Embeds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmbedFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Embeds
     * const embeds = await prisma.embed.findMany()
     * 
     * // Get first 10 Embeds
     * const embeds = await prisma.embed.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const embedWithIdOnly = await prisma.embed.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmbedFindManyArgs>(args?: SelectSubset<T, EmbedFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmbedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Embed.
     * @param {EmbedCreateArgs} args - Arguments to create a Embed.
     * @example
     * // Create one Embed
     * const Embed = await prisma.embed.create({
     *   data: {
     *     // ... data to create a Embed
     *   }
     * })
     * 
     */
    create<T extends EmbedCreateArgs>(args: SelectSubset<T, EmbedCreateArgs<ExtArgs>>): Prisma__EmbedClient<$Result.GetResult<Prisma.$EmbedPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Embeds.
     * @param {EmbedCreateManyArgs} args - Arguments to create many Embeds.
     * @example
     * // Create many Embeds
     * const embed = await prisma.embed.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmbedCreateManyArgs>(args?: SelectSubset<T, EmbedCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Embeds and returns the data saved in the database.
     * @param {EmbedCreateManyAndReturnArgs} args - Arguments to create many Embeds.
     * @example
     * // Create many Embeds
     * const embed = await prisma.embed.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Embeds and only return the `id`
     * const embedWithIdOnly = await prisma.embed.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmbedCreateManyAndReturnArgs>(args?: SelectSubset<T, EmbedCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmbedPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Embed.
     * @param {EmbedDeleteArgs} args - Arguments to delete one Embed.
     * @example
     * // Delete one Embed
     * const Embed = await prisma.embed.delete({
     *   where: {
     *     // ... filter to delete one Embed
     *   }
     * })
     * 
     */
    delete<T extends EmbedDeleteArgs>(args: SelectSubset<T, EmbedDeleteArgs<ExtArgs>>): Prisma__EmbedClient<$Result.GetResult<Prisma.$EmbedPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Embed.
     * @param {EmbedUpdateArgs} args - Arguments to update one Embed.
     * @example
     * // Update one Embed
     * const embed = await prisma.embed.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmbedUpdateArgs>(args: SelectSubset<T, EmbedUpdateArgs<ExtArgs>>): Prisma__EmbedClient<$Result.GetResult<Prisma.$EmbedPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Embeds.
     * @param {EmbedDeleteManyArgs} args - Arguments to filter Embeds to delete.
     * @example
     * // Delete a few Embeds
     * const { count } = await prisma.embed.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmbedDeleteManyArgs>(args?: SelectSubset<T, EmbedDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Embeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmbedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Embeds
     * const embed = await prisma.embed.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmbedUpdateManyArgs>(args: SelectSubset<T, EmbedUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Embeds and returns the data updated in the database.
     * @param {EmbedUpdateManyAndReturnArgs} args - Arguments to update many Embeds.
     * @example
     * // Update many Embeds
     * const embed = await prisma.embed.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Embeds and only return the `id`
     * const embedWithIdOnly = await prisma.embed.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmbedUpdateManyAndReturnArgs>(args: SelectSubset<T, EmbedUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmbedPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Embed.
     * @param {EmbedUpsertArgs} args - Arguments to update or create a Embed.
     * @example
     * // Update or create a Embed
     * const embed = await prisma.embed.upsert({
     *   create: {
     *     // ... data to create a Embed
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Embed we want to update
     *   }
     * })
     */
    upsert<T extends EmbedUpsertArgs>(args: SelectSubset<T, EmbedUpsertArgs<ExtArgs>>): Prisma__EmbedClient<$Result.GetResult<Prisma.$EmbedPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Embeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmbedCountArgs} args - Arguments to filter Embeds to count.
     * @example
     * // Count the number of Embeds
     * const count = await prisma.embed.count({
     *   where: {
     *     // ... the filter for the Embeds we want to count
     *   }
     * })
    **/
    count<T extends EmbedCountArgs>(
      args?: Subset<T, EmbedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmbedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Embed.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmbedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmbedAggregateArgs>(args: Subset<T, EmbedAggregateArgs>): Prisma.PrismaPromise<GetEmbedAggregateType<T>>

    /**
     * Group by Embed.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmbedGroupByArgs} args - Group by arguments.
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
      T extends EmbedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmbedGroupByArgs['orderBy'] }
        : { orderBy?: EmbedGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmbedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmbedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Embed model
   */
  readonly fields: EmbedFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Embed.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmbedClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    market<T extends MarketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MarketDefaultArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Embed model
   */
  interface EmbedFieldRefs {
    readonly id: FieldRef<"Embed", 'String'>
    readonly marketId: FieldRef<"Embed", 'String'>
    readonly url: FieldRef<"Embed", 'String'>
    readonly type: FieldRef<"Embed", 'String'>
    readonly source: FieldRef<"Embed", 'String'>
    readonly createdAt: FieldRef<"Embed", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Embed findUnique
   */
  export type EmbedFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Embed
     */
    select?: EmbedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Embed
     */
    omit?: EmbedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbedInclude<ExtArgs> | null
    /**
     * Filter, which Embed to fetch.
     */
    where: EmbedWhereUniqueInput
  }

  /**
   * Embed findUniqueOrThrow
   */
  export type EmbedFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Embed
     */
    select?: EmbedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Embed
     */
    omit?: EmbedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbedInclude<ExtArgs> | null
    /**
     * Filter, which Embed to fetch.
     */
    where: EmbedWhereUniqueInput
  }

  /**
   * Embed findFirst
   */
  export type EmbedFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Embed
     */
    select?: EmbedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Embed
     */
    omit?: EmbedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbedInclude<ExtArgs> | null
    /**
     * Filter, which Embed to fetch.
     */
    where?: EmbedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Embeds to fetch.
     */
    orderBy?: EmbedOrderByWithRelationInput | EmbedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Embeds.
     */
    cursor?: EmbedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Embeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Embeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Embeds.
     */
    distinct?: EmbedScalarFieldEnum | EmbedScalarFieldEnum[]
  }

  /**
   * Embed findFirstOrThrow
   */
  export type EmbedFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Embed
     */
    select?: EmbedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Embed
     */
    omit?: EmbedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbedInclude<ExtArgs> | null
    /**
     * Filter, which Embed to fetch.
     */
    where?: EmbedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Embeds to fetch.
     */
    orderBy?: EmbedOrderByWithRelationInput | EmbedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Embeds.
     */
    cursor?: EmbedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Embeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Embeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Embeds.
     */
    distinct?: EmbedScalarFieldEnum | EmbedScalarFieldEnum[]
  }

  /**
   * Embed findMany
   */
  export type EmbedFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Embed
     */
    select?: EmbedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Embed
     */
    omit?: EmbedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbedInclude<ExtArgs> | null
    /**
     * Filter, which Embeds to fetch.
     */
    where?: EmbedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Embeds to fetch.
     */
    orderBy?: EmbedOrderByWithRelationInput | EmbedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Embeds.
     */
    cursor?: EmbedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Embeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Embeds.
     */
    skip?: number
    distinct?: EmbedScalarFieldEnum | EmbedScalarFieldEnum[]
  }

  /**
   * Embed create
   */
  export type EmbedCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Embed
     */
    select?: EmbedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Embed
     */
    omit?: EmbedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbedInclude<ExtArgs> | null
    /**
     * The data needed to create a Embed.
     */
    data: XOR<EmbedCreateInput, EmbedUncheckedCreateInput>
  }

  /**
   * Embed createMany
   */
  export type EmbedCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Embeds.
     */
    data: EmbedCreateManyInput | EmbedCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Embed createManyAndReturn
   */
  export type EmbedCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Embed
     */
    select?: EmbedSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Embed
     */
    omit?: EmbedOmit<ExtArgs> | null
    /**
     * The data used to create many Embeds.
     */
    data: EmbedCreateManyInput | EmbedCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbedIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Embed update
   */
  export type EmbedUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Embed
     */
    select?: EmbedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Embed
     */
    omit?: EmbedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbedInclude<ExtArgs> | null
    /**
     * The data needed to update a Embed.
     */
    data: XOR<EmbedUpdateInput, EmbedUncheckedUpdateInput>
    /**
     * Choose, which Embed to update.
     */
    where: EmbedWhereUniqueInput
  }

  /**
   * Embed updateMany
   */
  export type EmbedUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Embeds.
     */
    data: XOR<EmbedUpdateManyMutationInput, EmbedUncheckedUpdateManyInput>
    /**
     * Filter which Embeds to update
     */
    where?: EmbedWhereInput
    /**
     * Limit how many Embeds to update.
     */
    limit?: number
  }

  /**
   * Embed updateManyAndReturn
   */
  export type EmbedUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Embed
     */
    select?: EmbedSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Embed
     */
    omit?: EmbedOmit<ExtArgs> | null
    /**
     * The data used to update Embeds.
     */
    data: XOR<EmbedUpdateManyMutationInput, EmbedUncheckedUpdateManyInput>
    /**
     * Filter which Embeds to update
     */
    where?: EmbedWhereInput
    /**
     * Limit how many Embeds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbedIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Embed upsert
   */
  export type EmbedUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Embed
     */
    select?: EmbedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Embed
     */
    omit?: EmbedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbedInclude<ExtArgs> | null
    /**
     * The filter to search for the Embed to update in case it exists.
     */
    where: EmbedWhereUniqueInput
    /**
     * In case the Embed found by the `where` argument doesn't exist, create a new Embed with this data.
     */
    create: XOR<EmbedCreateInput, EmbedUncheckedCreateInput>
    /**
     * In case the Embed was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmbedUpdateInput, EmbedUncheckedUpdateInput>
  }

  /**
   * Embed delete
   */
  export type EmbedDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Embed
     */
    select?: EmbedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Embed
     */
    omit?: EmbedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbedInclude<ExtArgs> | null
    /**
     * Filter which Embed to delete.
     */
    where: EmbedWhereUniqueInput
  }

  /**
   * Embed deleteMany
   */
  export type EmbedDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Embeds to delete
     */
    where?: EmbedWhereInput
    /**
     * Limit how many Embeds to delete.
     */
    limit?: number
  }

  /**
   * Embed without action
   */
  export type EmbedDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Embed
     */
    select?: EmbedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Embed
     */
    omit?: EmbedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbedInclude<ExtArgs> | null
  }


  /**
   * Model MemoryPointer
   */

  export type AggregateMemoryPointer = {
    _count: MemoryPointerCountAggregateOutputType | null
    _min: MemoryPointerMinAggregateOutputType | null
    _max: MemoryPointerMaxAggregateOutputType | null
  }

  export type MemoryPointerMinAggregateOutputType = {
    id: string | null
    agentId: string | null
    memoryId: string | null
    ownerType: string | null
    ownerId: string | null
    provider: string | null
    createdAt: Date | null
  }

  export type MemoryPointerMaxAggregateOutputType = {
    id: string | null
    agentId: string | null
    memoryId: string | null
    ownerType: string | null
    ownerId: string | null
    provider: string | null
    createdAt: Date | null
  }

  export type MemoryPointerCountAggregateOutputType = {
    id: number
    agentId: number
    memoryId: number
    ownerType: number
    ownerId: number
    provider: number
    tags: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type MemoryPointerMinAggregateInputType = {
    id?: true
    agentId?: true
    memoryId?: true
    ownerType?: true
    ownerId?: true
    provider?: true
    createdAt?: true
  }

  export type MemoryPointerMaxAggregateInputType = {
    id?: true
    agentId?: true
    memoryId?: true
    ownerType?: true
    ownerId?: true
    provider?: true
    createdAt?: true
  }

  export type MemoryPointerCountAggregateInputType = {
    id?: true
    agentId?: true
    memoryId?: true
    ownerType?: true
    ownerId?: true
    provider?: true
    tags?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type MemoryPointerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MemoryPointer to aggregate.
     */
    where?: MemoryPointerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemoryPointers to fetch.
     */
    orderBy?: MemoryPointerOrderByWithRelationInput | MemoryPointerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MemoryPointerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemoryPointers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemoryPointers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MemoryPointers
    **/
    _count?: true | MemoryPointerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemoryPointerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemoryPointerMaxAggregateInputType
  }

  export type GetMemoryPointerAggregateType<T extends MemoryPointerAggregateArgs> = {
        [P in keyof T & keyof AggregateMemoryPointer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMemoryPointer[P]>
      : GetScalarType<T[P], AggregateMemoryPointer[P]>
  }




  export type MemoryPointerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemoryPointerWhereInput
    orderBy?: MemoryPointerOrderByWithAggregationInput | MemoryPointerOrderByWithAggregationInput[]
    by: MemoryPointerScalarFieldEnum[] | MemoryPointerScalarFieldEnum
    having?: MemoryPointerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemoryPointerCountAggregateInputType | true
    _min?: MemoryPointerMinAggregateInputType
    _max?: MemoryPointerMaxAggregateInputType
  }

  export type MemoryPointerGroupByOutputType = {
    id: string
    agentId: string | null
    memoryId: string | null
    ownerType: string | null
    ownerId: string | null
    provider: string | null
    tags: string[]
    metadata: JsonValue | null
    createdAt: Date
    _count: MemoryPointerCountAggregateOutputType | null
    _min: MemoryPointerMinAggregateOutputType | null
    _max: MemoryPointerMaxAggregateOutputType | null
  }

  type GetMemoryPointerGroupByPayload<T extends MemoryPointerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MemoryPointerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemoryPointerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemoryPointerGroupByOutputType[P]>
            : GetScalarType<T[P], MemoryPointerGroupByOutputType[P]>
        }
      >
    >


  export type MemoryPointerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agentId?: boolean
    memoryId?: boolean
    ownerType?: boolean
    ownerId?: boolean
    provider?: boolean
    tags?: boolean
    metadata?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["memoryPointer"]>

  export type MemoryPointerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agentId?: boolean
    memoryId?: boolean
    ownerType?: boolean
    ownerId?: boolean
    provider?: boolean
    tags?: boolean
    metadata?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["memoryPointer"]>

  export type MemoryPointerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agentId?: boolean
    memoryId?: boolean
    ownerType?: boolean
    ownerId?: boolean
    provider?: boolean
    tags?: boolean
    metadata?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["memoryPointer"]>

  export type MemoryPointerSelectScalar = {
    id?: boolean
    agentId?: boolean
    memoryId?: boolean
    ownerType?: boolean
    ownerId?: boolean
    provider?: boolean
    tags?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type MemoryPointerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "agentId" | "memoryId" | "ownerType" | "ownerId" | "provider" | "tags" | "metadata" | "createdAt", ExtArgs["result"]["memoryPointer"]>

  export type $MemoryPointerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MemoryPointer"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      agentId: string | null
      memoryId: string | null
      ownerType: string | null
      ownerId: string | null
      provider: string | null
      tags: string[]
      metadata: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["memoryPointer"]>
    composites: {}
  }

  type MemoryPointerGetPayload<S extends boolean | null | undefined | MemoryPointerDefaultArgs> = $Result.GetResult<Prisma.$MemoryPointerPayload, S>

  type MemoryPointerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MemoryPointerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MemoryPointerCountAggregateInputType | true
    }

  export interface MemoryPointerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MemoryPointer'], meta: { name: 'MemoryPointer' } }
    /**
     * Find zero or one MemoryPointer that matches the filter.
     * @param {MemoryPointerFindUniqueArgs} args - Arguments to find a MemoryPointer
     * @example
     * // Get one MemoryPointer
     * const memoryPointer = await prisma.memoryPointer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MemoryPointerFindUniqueArgs>(args: SelectSubset<T, MemoryPointerFindUniqueArgs<ExtArgs>>): Prisma__MemoryPointerClient<$Result.GetResult<Prisma.$MemoryPointerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MemoryPointer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MemoryPointerFindUniqueOrThrowArgs} args - Arguments to find a MemoryPointer
     * @example
     * // Get one MemoryPointer
     * const memoryPointer = await prisma.memoryPointer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MemoryPointerFindUniqueOrThrowArgs>(args: SelectSubset<T, MemoryPointerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MemoryPointerClient<$Result.GetResult<Prisma.$MemoryPointerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MemoryPointer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemoryPointerFindFirstArgs} args - Arguments to find a MemoryPointer
     * @example
     * // Get one MemoryPointer
     * const memoryPointer = await prisma.memoryPointer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MemoryPointerFindFirstArgs>(args?: SelectSubset<T, MemoryPointerFindFirstArgs<ExtArgs>>): Prisma__MemoryPointerClient<$Result.GetResult<Prisma.$MemoryPointerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MemoryPointer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemoryPointerFindFirstOrThrowArgs} args - Arguments to find a MemoryPointer
     * @example
     * // Get one MemoryPointer
     * const memoryPointer = await prisma.memoryPointer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MemoryPointerFindFirstOrThrowArgs>(args?: SelectSubset<T, MemoryPointerFindFirstOrThrowArgs<ExtArgs>>): Prisma__MemoryPointerClient<$Result.GetResult<Prisma.$MemoryPointerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MemoryPointers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemoryPointerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MemoryPointers
     * const memoryPointers = await prisma.memoryPointer.findMany()
     * 
     * // Get first 10 MemoryPointers
     * const memoryPointers = await prisma.memoryPointer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const memoryPointerWithIdOnly = await prisma.memoryPointer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MemoryPointerFindManyArgs>(args?: SelectSubset<T, MemoryPointerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemoryPointerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MemoryPointer.
     * @param {MemoryPointerCreateArgs} args - Arguments to create a MemoryPointer.
     * @example
     * // Create one MemoryPointer
     * const MemoryPointer = await prisma.memoryPointer.create({
     *   data: {
     *     // ... data to create a MemoryPointer
     *   }
     * })
     * 
     */
    create<T extends MemoryPointerCreateArgs>(args: SelectSubset<T, MemoryPointerCreateArgs<ExtArgs>>): Prisma__MemoryPointerClient<$Result.GetResult<Prisma.$MemoryPointerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MemoryPointers.
     * @param {MemoryPointerCreateManyArgs} args - Arguments to create many MemoryPointers.
     * @example
     * // Create many MemoryPointers
     * const memoryPointer = await prisma.memoryPointer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MemoryPointerCreateManyArgs>(args?: SelectSubset<T, MemoryPointerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MemoryPointers and returns the data saved in the database.
     * @param {MemoryPointerCreateManyAndReturnArgs} args - Arguments to create many MemoryPointers.
     * @example
     * // Create many MemoryPointers
     * const memoryPointer = await prisma.memoryPointer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MemoryPointers and only return the `id`
     * const memoryPointerWithIdOnly = await prisma.memoryPointer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MemoryPointerCreateManyAndReturnArgs>(args?: SelectSubset<T, MemoryPointerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemoryPointerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MemoryPointer.
     * @param {MemoryPointerDeleteArgs} args - Arguments to delete one MemoryPointer.
     * @example
     * // Delete one MemoryPointer
     * const MemoryPointer = await prisma.memoryPointer.delete({
     *   where: {
     *     // ... filter to delete one MemoryPointer
     *   }
     * })
     * 
     */
    delete<T extends MemoryPointerDeleteArgs>(args: SelectSubset<T, MemoryPointerDeleteArgs<ExtArgs>>): Prisma__MemoryPointerClient<$Result.GetResult<Prisma.$MemoryPointerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MemoryPointer.
     * @param {MemoryPointerUpdateArgs} args - Arguments to update one MemoryPointer.
     * @example
     * // Update one MemoryPointer
     * const memoryPointer = await prisma.memoryPointer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MemoryPointerUpdateArgs>(args: SelectSubset<T, MemoryPointerUpdateArgs<ExtArgs>>): Prisma__MemoryPointerClient<$Result.GetResult<Prisma.$MemoryPointerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MemoryPointers.
     * @param {MemoryPointerDeleteManyArgs} args - Arguments to filter MemoryPointers to delete.
     * @example
     * // Delete a few MemoryPointers
     * const { count } = await prisma.memoryPointer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MemoryPointerDeleteManyArgs>(args?: SelectSubset<T, MemoryPointerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MemoryPointers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemoryPointerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MemoryPointers
     * const memoryPointer = await prisma.memoryPointer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MemoryPointerUpdateManyArgs>(args: SelectSubset<T, MemoryPointerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MemoryPointers and returns the data updated in the database.
     * @param {MemoryPointerUpdateManyAndReturnArgs} args - Arguments to update many MemoryPointers.
     * @example
     * // Update many MemoryPointers
     * const memoryPointer = await prisma.memoryPointer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MemoryPointers and only return the `id`
     * const memoryPointerWithIdOnly = await prisma.memoryPointer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MemoryPointerUpdateManyAndReturnArgs>(args: SelectSubset<T, MemoryPointerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemoryPointerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MemoryPointer.
     * @param {MemoryPointerUpsertArgs} args - Arguments to update or create a MemoryPointer.
     * @example
     * // Update or create a MemoryPointer
     * const memoryPointer = await prisma.memoryPointer.upsert({
     *   create: {
     *     // ... data to create a MemoryPointer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MemoryPointer we want to update
     *   }
     * })
     */
    upsert<T extends MemoryPointerUpsertArgs>(args: SelectSubset<T, MemoryPointerUpsertArgs<ExtArgs>>): Prisma__MemoryPointerClient<$Result.GetResult<Prisma.$MemoryPointerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MemoryPointers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemoryPointerCountArgs} args - Arguments to filter MemoryPointers to count.
     * @example
     * // Count the number of MemoryPointers
     * const count = await prisma.memoryPointer.count({
     *   where: {
     *     // ... the filter for the MemoryPointers we want to count
     *   }
     * })
    **/
    count<T extends MemoryPointerCountArgs>(
      args?: Subset<T, MemoryPointerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemoryPointerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MemoryPointer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemoryPointerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MemoryPointerAggregateArgs>(args: Subset<T, MemoryPointerAggregateArgs>): Prisma.PrismaPromise<GetMemoryPointerAggregateType<T>>

    /**
     * Group by MemoryPointer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemoryPointerGroupByArgs} args - Group by arguments.
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
      T extends MemoryPointerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MemoryPointerGroupByArgs['orderBy'] }
        : { orderBy?: MemoryPointerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MemoryPointerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemoryPointerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MemoryPointer model
   */
  readonly fields: MemoryPointerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MemoryPointer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MemoryPointerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the MemoryPointer model
   */
  interface MemoryPointerFieldRefs {
    readonly id: FieldRef<"MemoryPointer", 'String'>
    readonly agentId: FieldRef<"MemoryPointer", 'String'>
    readonly memoryId: FieldRef<"MemoryPointer", 'String'>
    readonly ownerType: FieldRef<"MemoryPointer", 'String'>
    readonly ownerId: FieldRef<"MemoryPointer", 'String'>
    readonly provider: FieldRef<"MemoryPointer", 'String'>
    readonly tags: FieldRef<"MemoryPointer", 'String[]'>
    readonly metadata: FieldRef<"MemoryPointer", 'Json'>
    readonly createdAt: FieldRef<"MemoryPointer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MemoryPointer findUnique
   */
  export type MemoryPointerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemoryPointer
     */
    select?: MemoryPointerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemoryPointer
     */
    omit?: MemoryPointerOmit<ExtArgs> | null
    /**
     * Filter, which MemoryPointer to fetch.
     */
    where: MemoryPointerWhereUniqueInput
  }

  /**
   * MemoryPointer findUniqueOrThrow
   */
  export type MemoryPointerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemoryPointer
     */
    select?: MemoryPointerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemoryPointer
     */
    omit?: MemoryPointerOmit<ExtArgs> | null
    /**
     * Filter, which MemoryPointer to fetch.
     */
    where: MemoryPointerWhereUniqueInput
  }

  /**
   * MemoryPointer findFirst
   */
  export type MemoryPointerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemoryPointer
     */
    select?: MemoryPointerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemoryPointer
     */
    omit?: MemoryPointerOmit<ExtArgs> | null
    /**
     * Filter, which MemoryPointer to fetch.
     */
    where?: MemoryPointerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemoryPointers to fetch.
     */
    orderBy?: MemoryPointerOrderByWithRelationInput | MemoryPointerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MemoryPointers.
     */
    cursor?: MemoryPointerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemoryPointers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemoryPointers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MemoryPointers.
     */
    distinct?: MemoryPointerScalarFieldEnum | MemoryPointerScalarFieldEnum[]
  }

  /**
   * MemoryPointer findFirstOrThrow
   */
  export type MemoryPointerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemoryPointer
     */
    select?: MemoryPointerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemoryPointer
     */
    omit?: MemoryPointerOmit<ExtArgs> | null
    /**
     * Filter, which MemoryPointer to fetch.
     */
    where?: MemoryPointerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemoryPointers to fetch.
     */
    orderBy?: MemoryPointerOrderByWithRelationInput | MemoryPointerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MemoryPointers.
     */
    cursor?: MemoryPointerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemoryPointers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemoryPointers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MemoryPointers.
     */
    distinct?: MemoryPointerScalarFieldEnum | MemoryPointerScalarFieldEnum[]
  }

  /**
   * MemoryPointer findMany
   */
  export type MemoryPointerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemoryPointer
     */
    select?: MemoryPointerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemoryPointer
     */
    omit?: MemoryPointerOmit<ExtArgs> | null
    /**
     * Filter, which MemoryPointers to fetch.
     */
    where?: MemoryPointerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemoryPointers to fetch.
     */
    orderBy?: MemoryPointerOrderByWithRelationInput | MemoryPointerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MemoryPointers.
     */
    cursor?: MemoryPointerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemoryPointers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemoryPointers.
     */
    skip?: number
    distinct?: MemoryPointerScalarFieldEnum | MemoryPointerScalarFieldEnum[]
  }

  /**
   * MemoryPointer create
   */
  export type MemoryPointerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemoryPointer
     */
    select?: MemoryPointerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemoryPointer
     */
    omit?: MemoryPointerOmit<ExtArgs> | null
    /**
     * The data needed to create a MemoryPointer.
     */
    data?: XOR<MemoryPointerCreateInput, MemoryPointerUncheckedCreateInput>
  }

  /**
   * MemoryPointer createMany
   */
  export type MemoryPointerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MemoryPointers.
     */
    data: MemoryPointerCreateManyInput | MemoryPointerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MemoryPointer createManyAndReturn
   */
  export type MemoryPointerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemoryPointer
     */
    select?: MemoryPointerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MemoryPointer
     */
    omit?: MemoryPointerOmit<ExtArgs> | null
    /**
     * The data used to create many MemoryPointers.
     */
    data: MemoryPointerCreateManyInput | MemoryPointerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MemoryPointer update
   */
  export type MemoryPointerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemoryPointer
     */
    select?: MemoryPointerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemoryPointer
     */
    omit?: MemoryPointerOmit<ExtArgs> | null
    /**
     * The data needed to update a MemoryPointer.
     */
    data: XOR<MemoryPointerUpdateInput, MemoryPointerUncheckedUpdateInput>
    /**
     * Choose, which MemoryPointer to update.
     */
    where: MemoryPointerWhereUniqueInput
  }

  /**
   * MemoryPointer updateMany
   */
  export type MemoryPointerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MemoryPointers.
     */
    data: XOR<MemoryPointerUpdateManyMutationInput, MemoryPointerUncheckedUpdateManyInput>
    /**
     * Filter which MemoryPointers to update
     */
    where?: MemoryPointerWhereInput
    /**
     * Limit how many MemoryPointers to update.
     */
    limit?: number
  }

  /**
   * MemoryPointer updateManyAndReturn
   */
  export type MemoryPointerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemoryPointer
     */
    select?: MemoryPointerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MemoryPointer
     */
    omit?: MemoryPointerOmit<ExtArgs> | null
    /**
     * The data used to update MemoryPointers.
     */
    data: XOR<MemoryPointerUpdateManyMutationInput, MemoryPointerUncheckedUpdateManyInput>
    /**
     * Filter which MemoryPointers to update
     */
    where?: MemoryPointerWhereInput
    /**
     * Limit how many MemoryPointers to update.
     */
    limit?: number
  }

  /**
   * MemoryPointer upsert
   */
  export type MemoryPointerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemoryPointer
     */
    select?: MemoryPointerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemoryPointer
     */
    omit?: MemoryPointerOmit<ExtArgs> | null
    /**
     * The filter to search for the MemoryPointer to update in case it exists.
     */
    where: MemoryPointerWhereUniqueInput
    /**
     * In case the MemoryPointer found by the `where` argument doesn't exist, create a new MemoryPointer with this data.
     */
    create: XOR<MemoryPointerCreateInput, MemoryPointerUncheckedCreateInput>
    /**
     * In case the MemoryPointer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MemoryPointerUpdateInput, MemoryPointerUncheckedUpdateInput>
  }

  /**
   * MemoryPointer delete
   */
  export type MemoryPointerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemoryPointer
     */
    select?: MemoryPointerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemoryPointer
     */
    omit?: MemoryPointerOmit<ExtArgs> | null
    /**
     * Filter which MemoryPointer to delete.
     */
    where: MemoryPointerWhereUniqueInput
  }

  /**
   * MemoryPointer deleteMany
   */
  export type MemoryPointerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MemoryPointers to delete
     */
    where?: MemoryPointerWhereInput
    /**
     * Limit how many MemoryPointers to delete.
     */
    limit?: number
  }

  /**
   * MemoryPointer without action
   */
  export type MemoryPointerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemoryPointer
     */
    select?: MemoryPointerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemoryPointer
     */
    omit?: MemoryPointerOmit<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    walletAddress: 'walletAddress',
    safeAddress: 'safeAddress',
    safeOwners: 'safeOwners',
    network: 'network',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PromptScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    content: 'content',
    response: 'response',
    tokens: 'tokens',
    createdAt: 'createdAt'
  };

  export type PromptScalarFieldEnum = (typeof PromptScalarFieldEnum)[keyof typeof PromptScalarFieldEnum]


  export const MarketDataScalarFieldEnum: {
    id: 'id',
    marketId: 'marketId',
    question: 'question',
    volume: 'volume',
    probability: 'probability',
    source: 'source',
    data: 'data',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt'
  };

  export type MarketDataScalarFieldEnum = (typeof MarketDataScalarFieldEnum)[keyof typeof MarketDataScalarFieldEnum]


  export const TradeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    marketDataId: 'marketDataId',
    amount: 'amount',
    side: 'side',
    status: 'status',
    txHash: 'txHash',
    createdAt: 'createdAt'
  };

  export type TradeScalarFieldEnum = (typeof TradeScalarFieldEnum)[keyof typeof TradeScalarFieldEnum]


  export const MarketScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    title: 'title',
    description: 'description',
    category: 'category',
    status: 'status',
    resolutionTime: 'resolutionTime',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MarketScalarFieldEnum = (typeof MarketScalarFieldEnum)[keyof typeof MarketScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    marketId: 'marketId',
    side: 'side',
    price: 'price',
    size: 'size',
    remaining: 'remaining',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const PositionScalarFieldEnum: {
    id: 'id',
    marketId: 'marketId',
    owner: 'owner',
    size: 'size',
    collateralLocked: 'collateralLocked',
    createdAt: 'createdAt'
  };

  export type PositionScalarFieldEnum = (typeof PositionScalarFieldEnum)[keyof typeof PositionScalarFieldEnum]


  export const DiscussionThreadScalarFieldEnum: {
    id: 'id',
    marketId: 'marketId',
    createdBy: 'createdBy',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type DiscussionThreadScalarFieldEnum = (typeof DiscussionThreadScalarFieldEnum)[keyof typeof DiscussionThreadScalarFieldEnum]


  export const DiscussionMessageScalarFieldEnum: {
    id: 'id',
    threadId: 'threadId',
    userId: 'userId',
    role: 'role',
    content: 'content',
    author: 'author',
    createdAt: 'createdAt'
  };

  export type DiscussionMessageScalarFieldEnum = (typeof DiscussionMessageScalarFieldEnum)[keyof typeof DiscussionMessageScalarFieldEnum]


  export const CreatorProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    walletAddress: 'walletAddress',
    role: 'role',
    name: 'name',
    bio: 'bio',
    avatarUrl: 'avatarUrl',
    profileData: 'profileData',
    portfolioStats: 'portfolioStats',
    portfolioConnected: 'portfolioConnected',
    verificationStatus: 'verificationStatus',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CreatorProfileScalarFieldEnum = (typeof CreatorProfileScalarFieldEnum)[keyof typeof CreatorProfileScalarFieldEnum]


  export const EmbedScalarFieldEnum: {
    id: 'id',
    marketId: 'marketId',
    url: 'url',
    type: 'type',
    source: 'source',
    createdAt: 'createdAt'
  };

  export type EmbedScalarFieldEnum = (typeof EmbedScalarFieldEnum)[keyof typeof EmbedScalarFieldEnum]


  export const MemoryPointerScalarFieldEnum: {
    id: 'id',
    agentId: 'agentId',
    memoryId: 'memoryId',
    ownerType: 'ownerType',
    ownerId: 'ownerId',
    provider: 'provider',
    tags: 'tags',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type MemoryPointerScalarFieldEnum = (typeof MemoryPointerScalarFieldEnum)[keyof typeof MemoryPointerScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    userId?: StringFilter<"User"> | string
    walletAddress?: StringNullableFilter<"User"> | string | null
    safeAddress?: StringNullableFilter<"User"> | string | null
    safeOwners?: StringNullableListFilter<"User">
    network?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    prompts?: PromptListRelationFilter
    trades?: TradeListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    walletAddress?: SortOrderInput | SortOrder
    safeAddress?: SortOrderInput | SortOrder
    safeOwners?: SortOrder
    network?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    prompts?: PromptOrderByRelationAggregateInput
    trades?: TradeOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    walletAddress?: StringNullableFilter<"User"> | string | null
    safeAddress?: StringNullableFilter<"User"> | string | null
    safeOwners?: StringNullableListFilter<"User">
    network?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    prompts?: PromptListRelationFilter
    trades?: TradeListRelationFilter
  }, "id" | "userId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    walletAddress?: SortOrderInput | SortOrder
    safeAddress?: SortOrderInput | SortOrder
    safeOwners?: SortOrder
    network?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    userId?: StringWithAggregatesFilter<"User"> | string
    walletAddress?: StringNullableWithAggregatesFilter<"User"> | string | null
    safeAddress?: StringNullableWithAggregatesFilter<"User"> | string | null
    safeOwners?: StringNullableListFilter<"User">
    network?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PromptWhereInput = {
    AND?: PromptWhereInput | PromptWhereInput[]
    OR?: PromptWhereInput[]
    NOT?: PromptWhereInput | PromptWhereInput[]
    id?: StringFilter<"Prompt"> | string
    userId?: StringFilter<"Prompt"> | string
    content?: StringFilter<"Prompt"> | string
    response?: StringNullableFilter<"Prompt"> | string | null
    tokens?: IntNullableFilter<"Prompt"> | number | null
    createdAt?: DateTimeFilter<"Prompt"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PromptOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    response?: SortOrderInput | SortOrder
    tokens?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PromptWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PromptWhereInput | PromptWhereInput[]
    OR?: PromptWhereInput[]
    NOT?: PromptWhereInput | PromptWhereInput[]
    userId?: StringFilter<"Prompt"> | string
    content?: StringFilter<"Prompt"> | string
    response?: StringNullableFilter<"Prompt"> | string | null
    tokens?: IntNullableFilter<"Prompt"> | number | null
    createdAt?: DateTimeFilter<"Prompt"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PromptOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    response?: SortOrderInput | SortOrder
    tokens?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PromptCountOrderByAggregateInput
    _avg?: PromptAvgOrderByAggregateInput
    _max?: PromptMaxOrderByAggregateInput
    _min?: PromptMinOrderByAggregateInput
    _sum?: PromptSumOrderByAggregateInput
  }

  export type PromptScalarWhereWithAggregatesInput = {
    AND?: PromptScalarWhereWithAggregatesInput | PromptScalarWhereWithAggregatesInput[]
    OR?: PromptScalarWhereWithAggregatesInput[]
    NOT?: PromptScalarWhereWithAggregatesInput | PromptScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Prompt"> | string
    userId?: StringWithAggregatesFilter<"Prompt"> | string
    content?: StringWithAggregatesFilter<"Prompt"> | string
    response?: StringNullableWithAggregatesFilter<"Prompt"> | string | null
    tokens?: IntNullableWithAggregatesFilter<"Prompt"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Prompt"> | Date | string
  }

  export type MarketDataWhereInput = {
    AND?: MarketDataWhereInput | MarketDataWhereInput[]
    OR?: MarketDataWhereInput[]
    NOT?: MarketDataWhereInput | MarketDataWhereInput[]
    id?: StringFilter<"MarketData"> | string
    marketId?: StringFilter<"MarketData"> | string
    question?: StringFilter<"MarketData"> | string
    volume?: FloatNullableFilter<"MarketData"> | number | null
    probability?: FloatNullableFilter<"MarketData"> | number | null
    source?: StringFilter<"MarketData"> | string
    data?: JsonNullableFilter<"MarketData">
    updatedAt?: DateTimeFilter<"MarketData"> | Date | string
    createdAt?: DateTimeFilter<"MarketData"> | Date | string
    trades?: TradeListRelationFilter
  }

  export type MarketDataOrderByWithRelationInput = {
    id?: SortOrder
    marketId?: SortOrder
    question?: SortOrder
    volume?: SortOrderInput | SortOrder
    probability?: SortOrderInput | SortOrder
    source?: SortOrder
    data?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    trades?: TradeOrderByRelationAggregateInput
  }

  export type MarketDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    marketId?: string
    AND?: MarketDataWhereInput | MarketDataWhereInput[]
    OR?: MarketDataWhereInput[]
    NOT?: MarketDataWhereInput | MarketDataWhereInput[]
    question?: StringFilter<"MarketData"> | string
    volume?: FloatNullableFilter<"MarketData"> | number | null
    probability?: FloatNullableFilter<"MarketData"> | number | null
    source?: StringFilter<"MarketData"> | string
    data?: JsonNullableFilter<"MarketData">
    updatedAt?: DateTimeFilter<"MarketData"> | Date | string
    createdAt?: DateTimeFilter<"MarketData"> | Date | string
    trades?: TradeListRelationFilter
  }, "id" | "marketId">

  export type MarketDataOrderByWithAggregationInput = {
    id?: SortOrder
    marketId?: SortOrder
    question?: SortOrder
    volume?: SortOrderInput | SortOrder
    probability?: SortOrderInput | SortOrder
    source?: SortOrder
    data?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    _count?: MarketDataCountOrderByAggregateInput
    _avg?: MarketDataAvgOrderByAggregateInput
    _max?: MarketDataMaxOrderByAggregateInput
    _min?: MarketDataMinOrderByAggregateInput
    _sum?: MarketDataSumOrderByAggregateInput
  }

  export type MarketDataScalarWhereWithAggregatesInput = {
    AND?: MarketDataScalarWhereWithAggregatesInput | MarketDataScalarWhereWithAggregatesInput[]
    OR?: MarketDataScalarWhereWithAggregatesInput[]
    NOT?: MarketDataScalarWhereWithAggregatesInput | MarketDataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MarketData"> | string
    marketId?: StringWithAggregatesFilter<"MarketData"> | string
    question?: StringWithAggregatesFilter<"MarketData"> | string
    volume?: FloatNullableWithAggregatesFilter<"MarketData"> | number | null
    probability?: FloatNullableWithAggregatesFilter<"MarketData"> | number | null
    source?: StringWithAggregatesFilter<"MarketData"> | string
    data?: JsonNullableWithAggregatesFilter<"MarketData">
    updatedAt?: DateTimeWithAggregatesFilter<"MarketData"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"MarketData"> | Date | string
  }

  export type TradeWhereInput = {
    AND?: TradeWhereInput | TradeWhereInput[]
    OR?: TradeWhereInput[]
    NOT?: TradeWhereInput | TradeWhereInput[]
    id?: StringFilter<"Trade"> | string
    userId?: StringFilter<"Trade"> | string
    marketDataId?: StringFilter<"Trade"> | string
    amount?: FloatFilter<"Trade"> | number
    side?: StringFilter<"Trade"> | string
    status?: StringFilter<"Trade"> | string
    txHash?: StringNullableFilter<"Trade"> | string | null
    createdAt?: DateTimeFilter<"Trade"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    market?: XOR<MarketDataScalarRelationFilter, MarketDataWhereInput>
  }

  export type TradeOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    marketDataId?: SortOrder
    amount?: SortOrder
    side?: SortOrder
    status?: SortOrder
    txHash?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    market?: MarketDataOrderByWithRelationInput
  }

  export type TradeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TradeWhereInput | TradeWhereInput[]
    OR?: TradeWhereInput[]
    NOT?: TradeWhereInput | TradeWhereInput[]
    userId?: StringFilter<"Trade"> | string
    marketDataId?: StringFilter<"Trade"> | string
    amount?: FloatFilter<"Trade"> | number
    side?: StringFilter<"Trade"> | string
    status?: StringFilter<"Trade"> | string
    txHash?: StringNullableFilter<"Trade"> | string | null
    createdAt?: DateTimeFilter<"Trade"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    market?: XOR<MarketDataScalarRelationFilter, MarketDataWhereInput>
  }, "id">

  export type TradeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    marketDataId?: SortOrder
    amount?: SortOrder
    side?: SortOrder
    status?: SortOrder
    txHash?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: TradeCountOrderByAggregateInput
    _avg?: TradeAvgOrderByAggregateInput
    _max?: TradeMaxOrderByAggregateInput
    _min?: TradeMinOrderByAggregateInput
    _sum?: TradeSumOrderByAggregateInput
  }

  export type TradeScalarWhereWithAggregatesInput = {
    AND?: TradeScalarWhereWithAggregatesInput | TradeScalarWhereWithAggregatesInput[]
    OR?: TradeScalarWhereWithAggregatesInput[]
    NOT?: TradeScalarWhereWithAggregatesInput | TradeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Trade"> | string
    userId?: StringWithAggregatesFilter<"Trade"> | string
    marketDataId?: StringWithAggregatesFilter<"Trade"> | string
    amount?: FloatWithAggregatesFilter<"Trade"> | number
    side?: StringWithAggregatesFilter<"Trade"> | string
    status?: StringWithAggregatesFilter<"Trade"> | string
    txHash?: StringNullableWithAggregatesFilter<"Trade"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Trade"> | Date | string
  }

  export type MarketWhereInput = {
    AND?: MarketWhereInput | MarketWhereInput[]
    OR?: MarketWhereInput[]
    NOT?: MarketWhereInput | MarketWhereInput[]
    id?: StringFilter<"Market"> | string
    slug?: StringFilter<"Market"> | string
    title?: StringFilter<"Market"> | string
    description?: StringNullableFilter<"Market"> | string | null
    category?: StringNullableFilter<"Market"> | string | null
    status?: StringFilter<"Market"> | string
    resolutionTime?: DateTimeNullableFilter<"Market"> | Date | string | null
    createdAt?: DateTimeFilter<"Market"> | Date | string
    updatedAt?: DateTimeFilter<"Market"> | Date | string
    orders?: OrderListRelationFilter
    positions?: PositionListRelationFilter
    embeds?: EmbedListRelationFilter
    discussion?: XOR<DiscussionThreadNullableScalarRelationFilter, DiscussionThreadWhereInput> | null
  }

  export type MarketOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    status?: SortOrder
    resolutionTime?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orders?: OrderOrderByRelationAggregateInput
    positions?: PositionOrderByRelationAggregateInput
    embeds?: EmbedOrderByRelationAggregateInput
    discussion?: DiscussionThreadOrderByWithRelationInput
  }

  export type MarketWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: MarketWhereInput | MarketWhereInput[]
    OR?: MarketWhereInput[]
    NOT?: MarketWhereInput | MarketWhereInput[]
    title?: StringFilter<"Market"> | string
    description?: StringNullableFilter<"Market"> | string | null
    category?: StringNullableFilter<"Market"> | string | null
    status?: StringFilter<"Market"> | string
    resolutionTime?: DateTimeNullableFilter<"Market"> | Date | string | null
    createdAt?: DateTimeFilter<"Market"> | Date | string
    updatedAt?: DateTimeFilter<"Market"> | Date | string
    orders?: OrderListRelationFilter
    positions?: PositionListRelationFilter
    embeds?: EmbedListRelationFilter
    discussion?: XOR<DiscussionThreadNullableScalarRelationFilter, DiscussionThreadWhereInput> | null
  }, "id" | "slug">

  export type MarketOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    status?: SortOrder
    resolutionTime?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MarketCountOrderByAggregateInput
    _max?: MarketMaxOrderByAggregateInput
    _min?: MarketMinOrderByAggregateInput
  }

  export type MarketScalarWhereWithAggregatesInput = {
    AND?: MarketScalarWhereWithAggregatesInput | MarketScalarWhereWithAggregatesInput[]
    OR?: MarketScalarWhereWithAggregatesInput[]
    NOT?: MarketScalarWhereWithAggregatesInput | MarketScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Market"> | string
    slug?: StringWithAggregatesFilter<"Market"> | string
    title?: StringWithAggregatesFilter<"Market"> | string
    description?: StringNullableWithAggregatesFilter<"Market"> | string | null
    category?: StringNullableWithAggregatesFilter<"Market"> | string | null
    status?: StringWithAggregatesFilter<"Market"> | string
    resolutionTime?: DateTimeNullableWithAggregatesFilter<"Market"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Market"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Market"> | Date | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: StringFilter<"Order"> | string
    marketId?: StringFilter<"Order"> | string
    side?: StringFilter<"Order"> | string
    price?: FloatFilter<"Order"> | number
    size?: FloatFilter<"Order"> | number
    remaining?: FloatFilter<"Order"> | number
    status?: StringFilter<"Order"> | string
    createdAt?: DateTimeFilter<"Order"> | Date | string
    market?: XOR<MarketScalarRelationFilter, MarketWhereInput>
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    marketId?: SortOrder
    side?: SortOrder
    price?: SortOrder
    size?: SortOrder
    remaining?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    market?: MarketOrderByWithRelationInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    marketId?: StringFilter<"Order"> | string
    side?: StringFilter<"Order"> | string
    price?: FloatFilter<"Order"> | number
    size?: FloatFilter<"Order"> | number
    remaining?: FloatFilter<"Order"> | number
    status?: StringFilter<"Order"> | string
    createdAt?: DateTimeFilter<"Order"> | Date | string
    market?: XOR<MarketScalarRelationFilter, MarketWhereInput>
  }, "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    marketId?: SortOrder
    side?: SortOrder
    price?: SortOrder
    size?: SortOrder
    remaining?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Order"> | string
    marketId?: StringWithAggregatesFilter<"Order"> | string
    side?: StringWithAggregatesFilter<"Order"> | string
    price?: FloatWithAggregatesFilter<"Order"> | number
    size?: FloatWithAggregatesFilter<"Order"> | number
    remaining?: FloatWithAggregatesFilter<"Order"> | number
    status?: StringWithAggregatesFilter<"Order"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
  }

  export type PositionWhereInput = {
    AND?: PositionWhereInput | PositionWhereInput[]
    OR?: PositionWhereInput[]
    NOT?: PositionWhereInput | PositionWhereInput[]
    id?: StringFilter<"Position"> | string
    marketId?: StringFilter<"Position"> | string
    owner?: StringFilter<"Position"> | string
    size?: FloatFilter<"Position"> | number
    collateralLocked?: FloatFilter<"Position"> | number
    createdAt?: DateTimeFilter<"Position"> | Date | string
    market?: XOR<MarketScalarRelationFilter, MarketWhereInput>
  }

  export type PositionOrderByWithRelationInput = {
    id?: SortOrder
    marketId?: SortOrder
    owner?: SortOrder
    size?: SortOrder
    collateralLocked?: SortOrder
    createdAt?: SortOrder
    market?: MarketOrderByWithRelationInput
  }

  export type PositionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PositionWhereInput | PositionWhereInput[]
    OR?: PositionWhereInput[]
    NOT?: PositionWhereInput | PositionWhereInput[]
    marketId?: StringFilter<"Position"> | string
    owner?: StringFilter<"Position"> | string
    size?: FloatFilter<"Position"> | number
    collateralLocked?: FloatFilter<"Position"> | number
    createdAt?: DateTimeFilter<"Position"> | Date | string
    market?: XOR<MarketScalarRelationFilter, MarketWhereInput>
  }, "id">

  export type PositionOrderByWithAggregationInput = {
    id?: SortOrder
    marketId?: SortOrder
    owner?: SortOrder
    size?: SortOrder
    collateralLocked?: SortOrder
    createdAt?: SortOrder
    _count?: PositionCountOrderByAggregateInput
    _avg?: PositionAvgOrderByAggregateInput
    _max?: PositionMaxOrderByAggregateInput
    _min?: PositionMinOrderByAggregateInput
    _sum?: PositionSumOrderByAggregateInput
  }

  export type PositionScalarWhereWithAggregatesInput = {
    AND?: PositionScalarWhereWithAggregatesInput | PositionScalarWhereWithAggregatesInput[]
    OR?: PositionScalarWhereWithAggregatesInput[]
    NOT?: PositionScalarWhereWithAggregatesInput | PositionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Position"> | string
    marketId?: StringWithAggregatesFilter<"Position"> | string
    owner?: StringWithAggregatesFilter<"Position"> | string
    size?: FloatWithAggregatesFilter<"Position"> | number
    collateralLocked?: FloatWithAggregatesFilter<"Position"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Position"> | Date | string
  }

  export type DiscussionThreadWhereInput = {
    AND?: DiscussionThreadWhereInput | DiscussionThreadWhereInput[]
    OR?: DiscussionThreadWhereInput[]
    NOT?: DiscussionThreadWhereInput | DiscussionThreadWhereInput[]
    id?: StringFilter<"DiscussionThread"> | string
    marketId?: StringFilter<"DiscussionThread"> | string
    createdBy?: StringNullableFilter<"DiscussionThread"> | string | null
    status?: StringFilter<"DiscussionThread"> | string
    createdAt?: DateTimeFilter<"DiscussionThread"> | Date | string
    market?: XOR<MarketScalarRelationFilter, MarketWhereInput>
    messages?: DiscussionMessageListRelationFilter
  }

  export type DiscussionThreadOrderByWithRelationInput = {
    id?: SortOrder
    marketId?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    market?: MarketOrderByWithRelationInput
    messages?: DiscussionMessageOrderByRelationAggregateInput
  }

  export type DiscussionThreadWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    marketId?: string
    AND?: DiscussionThreadWhereInput | DiscussionThreadWhereInput[]
    OR?: DiscussionThreadWhereInput[]
    NOT?: DiscussionThreadWhereInput | DiscussionThreadWhereInput[]
    createdBy?: StringNullableFilter<"DiscussionThread"> | string | null
    status?: StringFilter<"DiscussionThread"> | string
    createdAt?: DateTimeFilter<"DiscussionThread"> | Date | string
    market?: XOR<MarketScalarRelationFilter, MarketWhereInput>
    messages?: DiscussionMessageListRelationFilter
  }, "id" | "marketId">

  export type DiscussionThreadOrderByWithAggregationInput = {
    id?: SortOrder
    marketId?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: DiscussionThreadCountOrderByAggregateInput
    _max?: DiscussionThreadMaxOrderByAggregateInput
    _min?: DiscussionThreadMinOrderByAggregateInput
  }

  export type DiscussionThreadScalarWhereWithAggregatesInput = {
    AND?: DiscussionThreadScalarWhereWithAggregatesInput | DiscussionThreadScalarWhereWithAggregatesInput[]
    OR?: DiscussionThreadScalarWhereWithAggregatesInput[]
    NOT?: DiscussionThreadScalarWhereWithAggregatesInput | DiscussionThreadScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DiscussionThread"> | string
    marketId?: StringWithAggregatesFilter<"DiscussionThread"> | string
    createdBy?: StringNullableWithAggregatesFilter<"DiscussionThread"> | string | null
    status?: StringWithAggregatesFilter<"DiscussionThread"> | string
    createdAt?: DateTimeWithAggregatesFilter<"DiscussionThread"> | Date | string
  }

  export type DiscussionMessageWhereInput = {
    AND?: DiscussionMessageWhereInput | DiscussionMessageWhereInput[]
    OR?: DiscussionMessageWhereInput[]
    NOT?: DiscussionMessageWhereInput | DiscussionMessageWhereInput[]
    id?: StringFilter<"DiscussionMessage"> | string
    threadId?: StringFilter<"DiscussionMessage"> | string
    userId?: StringFilter<"DiscussionMessage"> | string
    role?: StringFilter<"DiscussionMessage"> | string
    content?: StringFilter<"DiscussionMessage"> | string
    author?: StringNullableFilter<"DiscussionMessage"> | string | null
    createdAt?: DateTimeFilter<"DiscussionMessage"> | Date | string
    thread?: XOR<DiscussionThreadScalarRelationFilter, DiscussionThreadWhereInput>
  }

  export type DiscussionMessageOrderByWithRelationInput = {
    id?: SortOrder
    threadId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    author?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    thread?: DiscussionThreadOrderByWithRelationInput
  }

  export type DiscussionMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DiscussionMessageWhereInput | DiscussionMessageWhereInput[]
    OR?: DiscussionMessageWhereInput[]
    NOT?: DiscussionMessageWhereInput | DiscussionMessageWhereInput[]
    threadId?: StringFilter<"DiscussionMessage"> | string
    userId?: StringFilter<"DiscussionMessage"> | string
    role?: StringFilter<"DiscussionMessage"> | string
    content?: StringFilter<"DiscussionMessage"> | string
    author?: StringNullableFilter<"DiscussionMessage"> | string | null
    createdAt?: DateTimeFilter<"DiscussionMessage"> | Date | string
    thread?: XOR<DiscussionThreadScalarRelationFilter, DiscussionThreadWhereInput>
  }, "id">

  export type DiscussionMessageOrderByWithAggregationInput = {
    id?: SortOrder
    threadId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    author?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: DiscussionMessageCountOrderByAggregateInput
    _max?: DiscussionMessageMaxOrderByAggregateInput
    _min?: DiscussionMessageMinOrderByAggregateInput
  }

  export type DiscussionMessageScalarWhereWithAggregatesInput = {
    AND?: DiscussionMessageScalarWhereWithAggregatesInput | DiscussionMessageScalarWhereWithAggregatesInput[]
    OR?: DiscussionMessageScalarWhereWithAggregatesInput[]
    NOT?: DiscussionMessageScalarWhereWithAggregatesInput | DiscussionMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DiscussionMessage"> | string
    threadId?: StringWithAggregatesFilter<"DiscussionMessage"> | string
    userId?: StringWithAggregatesFilter<"DiscussionMessage"> | string
    role?: StringWithAggregatesFilter<"DiscussionMessage"> | string
    content?: StringWithAggregatesFilter<"DiscussionMessage"> | string
    author?: StringNullableWithAggregatesFilter<"DiscussionMessage"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"DiscussionMessage"> | Date | string
  }

  export type CreatorProfileWhereInput = {
    AND?: CreatorProfileWhereInput | CreatorProfileWhereInput[]
    OR?: CreatorProfileWhereInput[]
    NOT?: CreatorProfileWhereInput | CreatorProfileWhereInput[]
    id?: StringFilter<"CreatorProfile"> | string
    userId?: StringFilter<"CreatorProfile"> | string
    walletAddress?: StringNullableFilter<"CreatorProfile"> | string | null
    role?: StringNullableFilter<"CreatorProfile"> | string | null
    name?: StringNullableFilter<"CreatorProfile"> | string | null
    bio?: StringNullableFilter<"CreatorProfile"> | string | null
    avatarUrl?: StringNullableFilter<"CreatorProfile"> | string | null
    profileData?: JsonNullableFilter<"CreatorProfile">
    portfolioStats?: JsonNullableFilter<"CreatorProfile">
    portfolioConnected?: BoolNullableFilter<"CreatorProfile"> | boolean | null
    verificationStatus?: StringNullableFilter<"CreatorProfile"> | string | null
    createdAt?: DateTimeFilter<"CreatorProfile"> | Date | string
    updatedAt?: DateTimeFilter<"CreatorProfile"> | Date | string
  }

  export type CreatorProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    walletAddress?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    profileData?: SortOrderInput | SortOrder
    portfolioStats?: SortOrderInput | SortOrder
    portfolioConnected?: SortOrderInput | SortOrder
    verificationStatus?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CreatorProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: CreatorProfileWhereInput | CreatorProfileWhereInput[]
    OR?: CreatorProfileWhereInput[]
    NOT?: CreatorProfileWhereInput | CreatorProfileWhereInput[]
    walletAddress?: StringNullableFilter<"CreatorProfile"> | string | null
    role?: StringNullableFilter<"CreatorProfile"> | string | null
    name?: StringNullableFilter<"CreatorProfile"> | string | null
    bio?: StringNullableFilter<"CreatorProfile"> | string | null
    avatarUrl?: StringNullableFilter<"CreatorProfile"> | string | null
    profileData?: JsonNullableFilter<"CreatorProfile">
    portfolioStats?: JsonNullableFilter<"CreatorProfile">
    portfolioConnected?: BoolNullableFilter<"CreatorProfile"> | boolean | null
    verificationStatus?: StringNullableFilter<"CreatorProfile"> | string | null
    createdAt?: DateTimeFilter<"CreatorProfile"> | Date | string
    updatedAt?: DateTimeFilter<"CreatorProfile"> | Date | string
  }, "id" | "userId">

  export type CreatorProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    walletAddress?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    profileData?: SortOrderInput | SortOrder
    portfolioStats?: SortOrderInput | SortOrder
    portfolioConnected?: SortOrderInput | SortOrder
    verificationStatus?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CreatorProfileCountOrderByAggregateInput
    _max?: CreatorProfileMaxOrderByAggregateInput
    _min?: CreatorProfileMinOrderByAggregateInput
  }

  export type CreatorProfileScalarWhereWithAggregatesInput = {
    AND?: CreatorProfileScalarWhereWithAggregatesInput | CreatorProfileScalarWhereWithAggregatesInput[]
    OR?: CreatorProfileScalarWhereWithAggregatesInput[]
    NOT?: CreatorProfileScalarWhereWithAggregatesInput | CreatorProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CreatorProfile"> | string
    userId?: StringWithAggregatesFilter<"CreatorProfile"> | string
    walletAddress?: StringNullableWithAggregatesFilter<"CreatorProfile"> | string | null
    role?: StringNullableWithAggregatesFilter<"CreatorProfile"> | string | null
    name?: StringNullableWithAggregatesFilter<"CreatorProfile"> | string | null
    bio?: StringNullableWithAggregatesFilter<"CreatorProfile"> | string | null
    avatarUrl?: StringNullableWithAggregatesFilter<"CreatorProfile"> | string | null
    profileData?: JsonNullableWithAggregatesFilter<"CreatorProfile">
    portfolioStats?: JsonNullableWithAggregatesFilter<"CreatorProfile">
    portfolioConnected?: BoolNullableWithAggregatesFilter<"CreatorProfile"> | boolean | null
    verificationStatus?: StringNullableWithAggregatesFilter<"CreatorProfile"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CreatorProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CreatorProfile"> | Date | string
  }

  export type EmbedWhereInput = {
    AND?: EmbedWhereInput | EmbedWhereInput[]
    OR?: EmbedWhereInput[]
    NOT?: EmbedWhereInput | EmbedWhereInput[]
    id?: StringFilter<"Embed"> | string
    marketId?: StringFilter<"Embed"> | string
    url?: StringFilter<"Embed"> | string
    type?: StringFilter<"Embed"> | string
    source?: StringFilter<"Embed"> | string
    createdAt?: DateTimeFilter<"Embed"> | Date | string
    market?: XOR<MarketScalarRelationFilter, MarketWhereInput>
  }

  export type EmbedOrderByWithRelationInput = {
    id?: SortOrder
    marketId?: SortOrder
    url?: SortOrder
    type?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    market?: MarketOrderByWithRelationInput
  }

  export type EmbedWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EmbedWhereInput | EmbedWhereInput[]
    OR?: EmbedWhereInput[]
    NOT?: EmbedWhereInput | EmbedWhereInput[]
    marketId?: StringFilter<"Embed"> | string
    url?: StringFilter<"Embed"> | string
    type?: StringFilter<"Embed"> | string
    source?: StringFilter<"Embed"> | string
    createdAt?: DateTimeFilter<"Embed"> | Date | string
    market?: XOR<MarketScalarRelationFilter, MarketWhereInput>
  }, "id">

  export type EmbedOrderByWithAggregationInput = {
    id?: SortOrder
    marketId?: SortOrder
    url?: SortOrder
    type?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    _count?: EmbedCountOrderByAggregateInput
    _max?: EmbedMaxOrderByAggregateInput
    _min?: EmbedMinOrderByAggregateInput
  }

  export type EmbedScalarWhereWithAggregatesInput = {
    AND?: EmbedScalarWhereWithAggregatesInput | EmbedScalarWhereWithAggregatesInput[]
    OR?: EmbedScalarWhereWithAggregatesInput[]
    NOT?: EmbedScalarWhereWithAggregatesInput | EmbedScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Embed"> | string
    marketId?: StringWithAggregatesFilter<"Embed"> | string
    url?: StringWithAggregatesFilter<"Embed"> | string
    type?: StringWithAggregatesFilter<"Embed"> | string
    source?: StringWithAggregatesFilter<"Embed"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Embed"> | Date | string
  }

  export type MemoryPointerWhereInput = {
    AND?: MemoryPointerWhereInput | MemoryPointerWhereInput[]
    OR?: MemoryPointerWhereInput[]
    NOT?: MemoryPointerWhereInput | MemoryPointerWhereInput[]
    id?: StringFilter<"MemoryPointer"> | string
    agentId?: StringNullableFilter<"MemoryPointer"> | string | null
    memoryId?: StringNullableFilter<"MemoryPointer"> | string | null
    ownerType?: StringNullableFilter<"MemoryPointer"> | string | null
    ownerId?: StringNullableFilter<"MemoryPointer"> | string | null
    provider?: StringNullableFilter<"MemoryPointer"> | string | null
    tags?: StringNullableListFilter<"MemoryPointer">
    metadata?: JsonNullableFilter<"MemoryPointer">
    createdAt?: DateTimeFilter<"MemoryPointer"> | Date | string
  }

  export type MemoryPointerOrderByWithRelationInput = {
    id?: SortOrder
    agentId?: SortOrderInput | SortOrder
    memoryId?: SortOrderInput | SortOrder
    ownerType?: SortOrderInput | SortOrder
    ownerId?: SortOrderInput | SortOrder
    provider?: SortOrderInput | SortOrder
    tags?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type MemoryPointerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MemoryPointerWhereInput | MemoryPointerWhereInput[]
    OR?: MemoryPointerWhereInput[]
    NOT?: MemoryPointerWhereInput | MemoryPointerWhereInput[]
    agentId?: StringNullableFilter<"MemoryPointer"> | string | null
    memoryId?: StringNullableFilter<"MemoryPointer"> | string | null
    ownerType?: StringNullableFilter<"MemoryPointer"> | string | null
    ownerId?: StringNullableFilter<"MemoryPointer"> | string | null
    provider?: StringNullableFilter<"MemoryPointer"> | string | null
    tags?: StringNullableListFilter<"MemoryPointer">
    metadata?: JsonNullableFilter<"MemoryPointer">
    createdAt?: DateTimeFilter<"MemoryPointer"> | Date | string
  }, "id">

  export type MemoryPointerOrderByWithAggregationInput = {
    id?: SortOrder
    agentId?: SortOrderInput | SortOrder
    memoryId?: SortOrderInput | SortOrder
    ownerType?: SortOrderInput | SortOrder
    ownerId?: SortOrderInput | SortOrder
    provider?: SortOrderInput | SortOrder
    tags?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: MemoryPointerCountOrderByAggregateInput
    _max?: MemoryPointerMaxOrderByAggregateInput
    _min?: MemoryPointerMinOrderByAggregateInput
  }

  export type MemoryPointerScalarWhereWithAggregatesInput = {
    AND?: MemoryPointerScalarWhereWithAggregatesInput | MemoryPointerScalarWhereWithAggregatesInput[]
    OR?: MemoryPointerScalarWhereWithAggregatesInput[]
    NOT?: MemoryPointerScalarWhereWithAggregatesInput | MemoryPointerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MemoryPointer"> | string
    agentId?: StringNullableWithAggregatesFilter<"MemoryPointer"> | string | null
    memoryId?: StringNullableWithAggregatesFilter<"MemoryPointer"> | string | null
    ownerType?: StringNullableWithAggregatesFilter<"MemoryPointer"> | string | null
    ownerId?: StringNullableWithAggregatesFilter<"MemoryPointer"> | string | null
    provider?: StringNullableWithAggregatesFilter<"MemoryPointer"> | string | null
    tags?: StringNullableListFilter<"MemoryPointer">
    metadata?: JsonNullableWithAggregatesFilter<"MemoryPointer">
    createdAt?: DateTimeWithAggregatesFilter<"MemoryPointer"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    userId: string
    walletAddress?: string | null
    safeAddress?: string | null
    safeOwners?: UserCreatesafeOwnersInput | string[]
    network?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    prompts?: PromptCreateNestedManyWithoutUserInput
    trades?: TradeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    userId: string
    walletAddress?: string | null
    safeAddress?: string | null
    safeOwners?: UserCreatesafeOwnersInput | string[]
    network?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    prompts?: PromptUncheckedCreateNestedManyWithoutUserInput
    trades?: TradeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    safeAddress?: NullableStringFieldUpdateOperationsInput | string | null
    safeOwners?: UserUpdatesafeOwnersInput | string[]
    network?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prompts?: PromptUpdateManyWithoutUserNestedInput
    trades?: TradeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    safeAddress?: NullableStringFieldUpdateOperationsInput | string | null
    safeOwners?: UserUpdatesafeOwnersInput | string[]
    network?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prompts?: PromptUncheckedUpdateManyWithoutUserNestedInput
    trades?: TradeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    userId: string
    walletAddress?: string | null
    safeAddress?: string | null
    safeOwners?: UserCreatesafeOwnersInput | string[]
    network?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    safeAddress?: NullableStringFieldUpdateOperationsInput | string | null
    safeOwners?: UserUpdatesafeOwnersInput | string[]
    network?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    safeAddress?: NullableStringFieldUpdateOperationsInput | string | null
    safeOwners?: UserUpdatesafeOwnersInput | string[]
    network?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromptCreateInput = {
    id?: string
    content: string
    response?: string | null
    tokens?: number | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPromptsInput
  }

  export type PromptUncheckedCreateInput = {
    id?: string
    userId: string
    content: string
    response?: string | null
    tokens?: number | null
    createdAt?: Date | string
  }

  export type PromptUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    response?: NullableStringFieldUpdateOperationsInput | string | null
    tokens?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPromptsNestedInput
  }

  export type PromptUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    response?: NullableStringFieldUpdateOperationsInput | string | null
    tokens?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromptCreateManyInput = {
    id?: string
    userId: string
    content: string
    response?: string | null
    tokens?: number | null
    createdAt?: Date | string
  }

  export type PromptUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    response?: NullableStringFieldUpdateOperationsInput | string | null
    tokens?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromptUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    response?: NullableStringFieldUpdateOperationsInput | string | null
    tokens?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketDataCreateInput = {
    id?: string
    marketId: string
    question: string
    volume?: number | null
    probability?: number | null
    source: string
    data?: NullableJsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
    createdAt?: Date | string
    trades?: TradeCreateNestedManyWithoutMarketInput
  }

  export type MarketDataUncheckedCreateInput = {
    id?: string
    marketId: string
    question: string
    volume?: number | null
    probability?: number | null
    source: string
    data?: NullableJsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
    createdAt?: Date | string
    trades?: TradeUncheckedCreateNestedManyWithoutMarketInput
  }

  export type MarketDataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    marketId?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    volume?: NullableFloatFieldUpdateOperationsInput | number | null
    probability?: NullableFloatFieldUpdateOperationsInput | number | null
    source?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trades?: TradeUpdateManyWithoutMarketNestedInput
  }

  export type MarketDataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    marketId?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    volume?: NullableFloatFieldUpdateOperationsInput | number | null
    probability?: NullableFloatFieldUpdateOperationsInput | number | null
    source?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trades?: TradeUncheckedUpdateManyWithoutMarketNestedInput
  }

  export type MarketDataCreateManyInput = {
    id?: string
    marketId: string
    question: string
    volume?: number | null
    probability?: number | null
    source: string
    data?: NullableJsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type MarketDataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    marketId?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    volume?: NullableFloatFieldUpdateOperationsInput | number | null
    probability?: NullableFloatFieldUpdateOperationsInput | number | null
    source?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketDataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    marketId?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    volume?: NullableFloatFieldUpdateOperationsInput | number | null
    probability?: NullableFloatFieldUpdateOperationsInput | number | null
    source?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TradeCreateInput = {
    id?: string
    amount: number
    side: string
    status: string
    txHash?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTradesInput
    market: MarketDataCreateNestedOneWithoutTradesInput
  }

  export type TradeUncheckedCreateInput = {
    id?: string
    userId: string
    marketDataId: string
    amount: number
    side: string
    status: string
    txHash?: string | null
    createdAt?: Date | string
  }

  export type TradeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    side?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    txHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTradesNestedInput
    market?: MarketDataUpdateOneRequiredWithoutTradesNestedInput
  }

  export type TradeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    marketDataId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    side?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    txHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TradeCreateManyInput = {
    id?: string
    userId: string
    marketDataId: string
    amount: number
    side: string
    status: string
    txHash?: string | null
    createdAt?: Date | string
  }

  export type TradeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    side?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    txHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TradeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    marketDataId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    side?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    txHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketCreateInput = {
    id?: string
    slug: string
    title: string
    description?: string | null
    category?: string | null
    status: string
    resolutionTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutMarketInput
    positions?: PositionCreateNestedManyWithoutMarketInput
    embeds?: EmbedCreateNestedManyWithoutMarketInput
    discussion?: DiscussionThreadCreateNestedOneWithoutMarketInput
  }

  export type MarketUncheckedCreateInput = {
    id?: string
    slug: string
    title: string
    description?: string | null
    category?: string | null
    status: string
    resolutionTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutMarketInput
    positions?: PositionUncheckedCreateNestedManyWithoutMarketInput
    embeds?: EmbedUncheckedCreateNestedManyWithoutMarketInput
    discussion?: DiscussionThreadUncheckedCreateNestedOneWithoutMarketInput
  }

  export type MarketUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    resolutionTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutMarketNestedInput
    positions?: PositionUpdateManyWithoutMarketNestedInput
    embeds?: EmbedUpdateManyWithoutMarketNestedInput
    discussion?: DiscussionThreadUpdateOneWithoutMarketNestedInput
  }

  export type MarketUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    resolutionTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutMarketNestedInput
    positions?: PositionUncheckedUpdateManyWithoutMarketNestedInput
    embeds?: EmbedUncheckedUpdateManyWithoutMarketNestedInput
    discussion?: DiscussionThreadUncheckedUpdateOneWithoutMarketNestedInput
  }

  export type MarketCreateManyInput = {
    id?: string
    slug: string
    title: string
    description?: string | null
    category?: string | null
    status: string
    resolutionTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MarketUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    resolutionTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    resolutionTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateInput = {
    id?: string
    side: string
    price: number
    size: number
    remaining: number
    status: string
    createdAt?: Date | string
    market: MarketCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateInput = {
    id?: string
    marketId: string
    side: string
    price: number
    size: number
    remaining: number
    status: string
    createdAt?: Date | string
  }

  export type OrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    side?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    size?: FloatFieldUpdateOperationsInput | number
    remaining?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    market?: MarketUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    marketId?: StringFieldUpdateOperationsInput | string
    side?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    size?: FloatFieldUpdateOperationsInput | number
    remaining?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateManyInput = {
    id?: string
    marketId: string
    side: string
    price: number
    size: number
    remaining: number
    status: string
    createdAt?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    side?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    size?: FloatFieldUpdateOperationsInput | number
    remaining?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    marketId?: StringFieldUpdateOperationsInput | string
    side?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    size?: FloatFieldUpdateOperationsInput | number
    remaining?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PositionCreateInput = {
    id?: string
    owner: string
    size: number
    collateralLocked: number
    createdAt?: Date | string
    market: MarketCreateNestedOneWithoutPositionsInput
  }

  export type PositionUncheckedCreateInput = {
    id?: string
    marketId: string
    owner: string
    size: number
    collateralLocked: number
    createdAt?: Date | string
  }

  export type PositionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    size?: FloatFieldUpdateOperationsInput | number
    collateralLocked?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    market?: MarketUpdateOneRequiredWithoutPositionsNestedInput
  }

  export type PositionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    marketId?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    size?: FloatFieldUpdateOperationsInput | number
    collateralLocked?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PositionCreateManyInput = {
    id?: string
    marketId: string
    owner: string
    size: number
    collateralLocked: number
    createdAt?: Date | string
  }

  export type PositionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    size?: FloatFieldUpdateOperationsInput | number
    collateralLocked?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PositionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    marketId?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    size?: FloatFieldUpdateOperationsInput | number
    collateralLocked?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiscussionThreadCreateInput = {
    id?: string
    createdBy?: string | null
    status?: string
    createdAt?: Date | string
    market: MarketCreateNestedOneWithoutDiscussionInput
    messages?: DiscussionMessageCreateNestedManyWithoutThreadInput
  }

  export type DiscussionThreadUncheckedCreateInput = {
    id?: string
    marketId: string
    createdBy?: string | null
    status?: string
    createdAt?: Date | string
    messages?: DiscussionMessageUncheckedCreateNestedManyWithoutThreadInput
  }

  export type DiscussionThreadUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    market?: MarketUpdateOneRequiredWithoutDiscussionNestedInput
    messages?: DiscussionMessageUpdateManyWithoutThreadNestedInput
  }

  export type DiscussionThreadUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    marketId?: StringFieldUpdateOperationsInput | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: DiscussionMessageUncheckedUpdateManyWithoutThreadNestedInput
  }

  export type DiscussionThreadCreateManyInput = {
    id?: string
    marketId: string
    createdBy?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type DiscussionThreadUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiscussionThreadUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    marketId?: StringFieldUpdateOperationsInput | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiscussionMessageCreateInput = {
    id?: string
    userId: string
    role: string
    content: string
    author?: string | null
    createdAt?: Date | string
    thread: DiscussionThreadCreateNestedOneWithoutMessagesInput
  }

  export type DiscussionMessageUncheckedCreateInput = {
    id?: string
    threadId: string
    userId: string
    role: string
    content: string
    author?: string | null
    createdAt?: Date | string
  }

  export type DiscussionMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    thread?: DiscussionThreadUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type DiscussionMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    threadId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiscussionMessageCreateManyInput = {
    id?: string
    threadId: string
    userId: string
    role: string
    content: string
    author?: string | null
    createdAt?: Date | string
  }

  export type DiscussionMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiscussionMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    threadId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreatorProfileCreateInput = {
    id?: string
    userId: string
    walletAddress?: string | null
    role?: string | null
    name?: string | null
    bio?: string | null
    avatarUrl?: string | null
    profileData?: NullableJsonNullValueInput | InputJsonValue
    portfolioStats?: NullableJsonNullValueInput | InputJsonValue
    portfolioConnected?: boolean | null
    verificationStatus?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CreatorProfileUncheckedCreateInput = {
    id?: string
    userId: string
    walletAddress?: string | null
    role?: string | null
    name?: string | null
    bio?: string | null
    avatarUrl?: string | null
    profileData?: NullableJsonNullValueInput | InputJsonValue
    portfolioStats?: NullableJsonNullValueInput | InputJsonValue
    portfolioConnected?: boolean | null
    verificationStatus?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CreatorProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileData?: NullableJsonNullValueInput | InputJsonValue
    portfolioStats?: NullableJsonNullValueInput | InputJsonValue
    portfolioConnected?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verificationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreatorProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileData?: NullableJsonNullValueInput | InputJsonValue
    portfolioStats?: NullableJsonNullValueInput | InputJsonValue
    portfolioConnected?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verificationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreatorProfileCreateManyInput = {
    id?: string
    userId: string
    walletAddress?: string | null
    role?: string | null
    name?: string | null
    bio?: string | null
    avatarUrl?: string | null
    profileData?: NullableJsonNullValueInput | InputJsonValue
    portfolioStats?: NullableJsonNullValueInput | InputJsonValue
    portfolioConnected?: boolean | null
    verificationStatus?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CreatorProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileData?: NullableJsonNullValueInput | InputJsonValue
    portfolioStats?: NullableJsonNullValueInput | InputJsonValue
    portfolioConnected?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verificationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreatorProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileData?: NullableJsonNullValueInput | InputJsonValue
    portfolioStats?: NullableJsonNullValueInput | InputJsonValue
    portfolioConnected?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verificationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmbedCreateInput = {
    id?: string
    url: string
    type: string
    source: string
    createdAt?: Date | string
    market: MarketCreateNestedOneWithoutEmbedsInput
  }

  export type EmbedUncheckedCreateInput = {
    id?: string
    marketId: string
    url: string
    type: string
    source: string
    createdAt?: Date | string
  }

  export type EmbedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    market?: MarketUpdateOneRequiredWithoutEmbedsNestedInput
  }

  export type EmbedUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    marketId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmbedCreateManyInput = {
    id?: string
    marketId: string
    url: string
    type: string
    source: string
    createdAt?: Date | string
  }

  export type EmbedUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmbedUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    marketId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemoryPointerCreateInput = {
    id?: string
    agentId?: string | null
    memoryId?: string | null
    ownerType?: string | null
    ownerId?: string | null
    provider?: string | null
    tags?: MemoryPointerCreatetagsInput | string[]
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type MemoryPointerUncheckedCreateInput = {
    id?: string
    agentId?: string | null
    memoryId?: string | null
    ownerType?: string | null
    ownerId?: string | null
    provider?: string | null
    tags?: MemoryPointerCreatetagsInput | string[]
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type MemoryPointerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
    memoryId?: NullableStringFieldUpdateOperationsInput | string | null
    ownerType?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: MemoryPointerUpdatetagsInput | string[]
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemoryPointerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
    memoryId?: NullableStringFieldUpdateOperationsInput | string | null
    ownerType?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: MemoryPointerUpdatetagsInput | string[]
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemoryPointerCreateManyInput = {
    id?: string
    agentId?: string | null
    memoryId?: string | null
    ownerType?: string | null
    ownerId?: string | null
    provider?: string | null
    tags?: MemoryPointerCreatetagsInput | string[]
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type MemoryPointerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
    memoryId?: NullableStringFieldUpdateOperationsInput | string | null
    ownerType?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: MemoryPointerUpdatetagsInput | string[]
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemoryPointerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
    memoryId?: NullableStringFieldUpdateOperationsInput | string | null
    ownerType?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: MemoryPointerUpdatetagsInput | string[]
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PromptListRelationFilter = {
    every?: PromptWhereInput
    some?: PromptWhereInput
    none?: PromptWhereInput
  }

  export type TradeListRelationFilter = {
    every?: TradeWhereInput
    some?: TradeWhereInput
    none?: TradeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PromptOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TradeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    walletAddress?: SortOrder
    safeAddress?: SortOrder
    safeOwners?: SortOrder
    network?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    walletAddress?: SortOrder
    safeAddress?: SortOrder
    network?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    walletAddress?: SortOrder
    safeAddress?: SortOrder
    network?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PromptCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    response?: SortOrder
    tokens?: SortOrder
    createdAt?: SortOrder
  }

  export type PromptAvgOrderByAggregateInput = {
    tokens?: SortOrder
  }

  export type PromptMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    response?: SortOrder
    tokens?: SortOrder
    createdAt?: SortOrder
  }

  export type PromptMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    response?: SortOrder
    tokens?: SortOrder
    createdAt?: SortOrder
  }

  export type PromptSumOrderByAggregateInput = {
    tokens?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type MarketDataCountOrderByAggregateInput = {
    id?: SortOrder
    marketId?: SortOrder
    question?: SortOrder
    volume?: SortOrder
    probability?: SortOrder
    source?: SortOrder
    data?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type MarketDataAvgOrderByAggregateInput = {
    volume?: SortOrder
    probability?: SortOrder
  }

  export type MarketDataMaxOrderByAggregateInput = {
    id?: SortOrder
    marketId?: SortOrder
    question?: SortOrder
    volume?: SortOrder
    probability?: SortOrder
    source?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type MarketDataMinOrderByAggregateInput = {
    id?: SortOrder
    marketId?: SortOrder
    question?: SortOrder
    volume?: SortOrder
    probability?: SortOrder
    source?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type MarketDataSumOrderByAggregateInput = {
    volume?: SortOrder
    probability?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
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
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type MarketDataScalarRelationFilter = {
    is?: MarketDataWhereInput
    isNot?: MarketDataWhereInput
  }

  export type TradeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    marketDataId?: SortOrder
    amount?: SortOrder
    side?: SortOrder
    status?: SortOrder
    txHash?: SortOrder
    createdAt?: SortOrder
  }

  export type TradeAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type TradeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    marketDataId?: SortOrder
    amount?: SortOrder
    side?: SortOrder
    status?: SortOrder
    txHash?: SortOrder
    createdAt?: SortOrder
  }

  export type TradeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    marketDataId?: SortOrder
    amount?: SortOrder
    side?: SortOrder
    status?: SortOrder
    txHash?: SortOrder
    createdAt?: SortOrder
  }

  export type TradeSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type PositionListRelationFilter = {
    every?: PositionWhereInput
    some?: PositionWhereInput
    none?: PositionWhereInput
  }

  export type EmbedListRelationFilter = {
    every?: EmbedWhereInput
    some?: EmbedWhereInput
    none?: EmbedWhereInput
  }

  export type DiscussionThreadNullableScalarRelationFilter = {
    is?: DiscussionThreadWhereInput | null
    isNot?: DiscussionThreadWhereInput | null
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PositionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmbedOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MarketCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    status?: SortOrder
    resolutionTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MarketMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    status?: SortOrder
    resolutionTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MarketMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    status?: SortOrder
    resolutionTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type MarketScalarRelationFilter = {
    is?: MarketWhereInput
    isNot?: MarketWhereInput
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    marketId?: SortOrder
    side?: SortOrder
    price?: SortOrder
    size?: SortOrder
    remaining?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    price?: SortOrder
    size?: SortOrder
    remaining?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    marketId?: SortOrder
    side?: SortOrder
    price?: SortOrder
    size?: SortOrder
    remaining?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    marketId?: SortOrder
    side?: SortOrder
    price?: SortOrder
    size?: SortOrder
    remaining?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    price?: SortOrder
    size?: SortOrder
    remaining?: SortOrder
  }

  export type PositionCountOrderByAggregateInput = {
    id?: SortOrder
    marketId?: SortOrder
    owner?: SortOrder
    size?: SortOrder
    collateralLocked?: SortOrder
    createdAt?: SortOrder
  }

  export type PositionAvgOrderByAggregateInput = {
    size?: SortOrder
    collateralLocked?: SortOrder
  }

  export type PositionMaxOrderByAggregateInput = {
    id?: SortOrder
    marketId?: SortOrder
    owner?: SortOrder
    size?: SortOrder
    collateralLocked?: SortOrder
    createdAt?: SortOrder
  }

  export type PositionMinOrderByAggregateInput = {
    id?: SortOrder
    marketId?: SortOrder
    owner?: SortOrder
    size?: SortOrder
    collateralLocked?: SortOrder
    createdAt?: SortOrder
  }

  export type PositionSumOrderByAggregateInput = {
    size?: SortOrder
    collateralLocked?: SortOrder
  }

  export type DiscussionMessageListRelationFilter = {
    every?: DiscussionMessageWhereInput
    some?: DiscussionMessageWhereInput
    none?: DiscussionMessageWhereInput
  }

  export type DiscussionMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DiscussionThreadCountOrderByAggregateInput = {
    id?: SortOrder
    marketId?: SortOrder
    createdBy?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type DiscussionThreadMaxOrderByAggregateInput = {
    id?: SortOrder
    marketId?: SortOrder
    createdBy?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type DiscussionThreadMinOrderByAggregateInput = {
    id?: SortOrder
    marketId?: SortOrder
    createdBy?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type DiscussionThreadScalarRelationFilter = {
    is?: DiscussionThreadWhereInput
    isNot?: DiscussionThreadWhereInput
  }

  export type DiscussionMessageCountOrderByAggregateInput = {
    id?: SortOrder
    threadId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    author?: SortOrder
    createdAt?: SortOrder
  }

  export type DiscussionMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    threadId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    author?: SortOrder
    createdAt?: SortOrder
  }

  export type DiscussionMessageMinOrderByAggregateInput = {
    id?: SortOrder
    threadId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    author?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type CreatorProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    walletAddress?: SortOrder
    role?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    avatarUrl?: SortOrder
    profileData?: SortOrder
    portfolioStats?: SortOrder
    portfolioConnected?: SortOrder
    verificationStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CreatorProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    walletAddress?: SortOrder
    role?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    avatarUrl?: SortOrder
    portfolioConnected?: SortOrder
    verificationStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CreatorProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    walletAddress?: SortOrder
    role?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    avatarUrl?: SortOrder
    portfolioConnected?: SortOrder
    verificationStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type EmbedCountOrderByAggregateInput = {
    id?: SortOrder
    marketId?: SortOrder
    url?: SortOrder
    type?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
  }

  export type EmbedMaxOrderByAggregateInput = {
    id?: SortOrder
    marketId?: SortOrder
    url?: SortOrder
    type?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
  }

  export type EmbedMinOrderByAggregateInput = {
    id?: SortOrder
    marketId?: SortOrder
    url?: SortOrder
    type?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
  }

  export type MemoryPointerCountOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    memoryId?: SortOrder
    ownerType?: SortOrder
    ownerId?: SortOrder
    provider?: SortOrder
    tags?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type MemoryPointerMaxOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    memoryId?: SortOrder
    ownerType?: SortOrder
    ownerId?: SortOrder
    provider?: SortOrder
    createdAt?: SortOrder
  }

  export type MemoryPointerMinOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    memoryId?: SortOrder
    ownerType?: SortOrder
    ownerId?: SortOrder
    provider?: SortOrder
    createdAt?: SortOrder
  }

  export type UserCreatesafeOwnersInput = {
    set: string[]
  }

  export type PromptCreateNestedManyWithoutUserInput = {
    create?: XOR<PromptCreateWithoutUserInput, PromptUncheckedCreateWithoutUserInput> | PromptCreateWithoutUserInput[] | PromptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PromptCreateOrConnectWithoutUserInput | PromptCreateOrConnectWithoutUserInput[]
    createMany?: PromptCreateManyUserInputEnvelope
    connect?: PromptWhereUniqueInput | PromptWhereUniqueInput[]
  }

  export type TradeCreateNestedManyWithoutUserInput = {
    create?: XOR<TradeCreateWithoutUserInput, TradeUncheckedCreateWithoutUserInput> | TradeCreateWithoutUserInput[] | TradeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TradeCreateOrConnectWithoutUserInput | TradeCreateOrConnectWithoutUserInput[]
    createMany?: TradeCreateManyUserInputEnvelope
    connect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
  }

  export type PromptUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PromptCreateWithoutUserInput, PromptUncheckedCreateWithoutUserInput> | PromptCreateWithoutUserInput[] | PromptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PromptCreateOrConnectWithoutUserInput | PromptCreateOrConnectWithoutUserInput[]
    createMany?: PromptCreateManyUserInputEnvelope
    connect?: PromptWhereUniqueInput | PromptWhereUniqueInput[]
  }

  export type TradeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TradeCreateWithoutUserInput, TradeUncheckedCreateWithoutUserInput> | TradeCreateWithoutUserInput[] | TradeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TradeCreateOrConnectWithoutUserInput | TradeCreateOrConnectWithoutUserInput[]
    createMany?: TradeCreateManyUserInputEnvelope
    connect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdatesafeOwnersInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PromptUpdateManyWithoutUserNestedInput = {
    create?: XOR<PromptCreateWithoutUserInput, PromptUncheckedCreateWithoutUserInput> | PromptCreateWithoutUserInput[] | PromptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PromptCreateOrConnectWithoutUserInput | PromptCreateOrConnectWithoutUserInput[]
    upsert?: PromptUpsertWithWhereUniqueWithoutUserInput | PromptUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PromptCreateManyUserInputEnvelope
    set?: PromptWhereUniqueInput | PromptWhereUniqueInput[]
    disconnect?: PromptWhereUniqueInput | PromptWhereUniqueInput[]
    delete?: PromptWhereUniqueInput | PromptWhereUniqueInput[]
    connect?: PromptWhereUniqueInput | PromptWhereUniqueInput[]
    update?: PromptUpdateWithWhereUniqueWithoutUserInput | PromptUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PromptUpdateManyWithWhereWithoutUserInput | PromptUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PromptScalarWhereInput | PromptScalarWhereInput[]
  }

  export type TradeUpdateManyWithoutUserNestedInput = {
    create?: XOR<TradeCreateWithoutUserInput, TradeUncheckedCreateWithoutUserInput> | TradeCreateWithoutUserInput[] | TradeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TradeCreateOrConnectWithoutUserInput | TradeCreateOrConnectWithoutUserInput[]
    upsert?: TradeUpsertWithWhereUniqueWithoutUserInput | TradeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TradeCreateManyUserInputEnvelope
    set?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    disconnect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    delete?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    connect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    update?: TradeUpdateWithWhereUniqueWithoutUserInput | TradeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TradeUpdateManyWithWhereWithoutUserInput | TradeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TradeScalarWhereInput | TradeScalarWhereInput[]
  }

  export type PromptUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PromptCreateWithoutUserInput, PromptUncheckedCreateWithoutUserInput> | PromptCreateWithoutUserInput[] | PromptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PromptCreateOrConnectWithoutUserInput | PromptCreateOrConnectWithoutUserInput[]
    upsert?: PromptUpsertWithWhereUniqueWithoutUserInput | PromptUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PromptCreateManyUserInputEnvelope
    set?: PromptWhereUniqueInput | PromptWhereUniqueInput[]
    disconnect?: PromptWhereUniqueInput | PromptWhereUniqueInput[]
    delete?: PromptWhereUniqueInput | PromptWhereUniqueInput[]
    connect?: PromptWhereUniqueInput | PromptWhereUniqueInput[]
    update?: PromptUpdateWithWhereUniqueWithoutUserInput | PromptUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PromptUpdateManyWithWhereWithoutUserInput | PromptUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PromptScalarWhereInput | PromptScalarWhereInput[]
  }

  export type TradeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TradeCreateWithoutUserInput, TradeUncheckedCreateWithoutUserInput> | TradeCreateWithoutUserInput[] | TradeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TradeCreateOrConnectWithoutUserInput | TradeCreateOrConnectWithoutUserInput[]
    upsert?: TradeUpsertWithWhereUniqueWithoutUserInput | TradeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TradeCreateManyUserInputEnvelope
    set?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    disconnect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    delete?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    connect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    update?: TradeUpdateWithWhereUniqueWithoutUserInput | TradeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TradeUpdateManyWithWhereWithoutUserInput | TradeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TradeScalarWhereInput | TradeScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPromptsInput = {
    create?: XOR<UserCreateWithoutPromptsInput, UserUncheckedCreateWithoutPromptsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPromptsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutPromptsNestedInput = {
    create?: XOR<UserCreateWithoutPromptsInput, UserUncheckedCreateWithoutPromptsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPromptsInput
    upsert?: UserUpsertWithoutPromptsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPromptsInput, UserUpdateWithoutPromptsInput>, UserUncheckedUpdateWithoutPromptsInput>
  }

  export type TradeCreateNestedManyWithoutMarketInput = {
    create?: XOR<TradeCreateWithoutMarketInput, TradeUncheckedCreateWithoutMarketInput> | TradeCreateWithoutMarketInput[] | TradeUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: TradeCreateOrConnectWithoutMarketInput | TradeCreateOrConnectWithoutMarketInput[]
    createMany?: TradeCreateManyMarketInputEnvelope
    connect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
  }

  export type TradeUncheckedCreateNestedManyWithoutMarketInput = {
    create?: XOR<TradeCreateWithoutMarketInput, TradeUncheckedCreateWithoutMarketInput> | TradeCreateWithoutMarketInput[] | TradeUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: TradeCreateOrConnectWithoutMarketInput | TradeCreateOrConnectWithoutMarketInput[]
    createMany?: TradeCreateManyMarketInputEnvelope
    connect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TradeUpdateManyWithoutMarketNestedInput = {
    create?: XOR<TradeCreateWithoutMarketInput, TradeUncheckedCreateWithoutMarketInput> | TradeCreateWithoutMarketInput[] | TradeUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: TradeCreateOrConnectWithoutMarketInput | TradeCreateOrConnectWithoutMarketInput[]
    upsert?: TradeUpsertWithWhereUniqueWithoutMarketInput | TradeUpsertWithWhereUniqueWithoutMarketInput[]
    createMany?: TradeCreateManyMarketInputEnvelope
    set?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    disconnect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    delete?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    connect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    update?: TradeUpdateWithWhereUniqueWithoutMarketInput | TradeUpdateWithWhereUniqueWithoutMarketInput[]
    updateMany?: TradeUpdateManyWithWhereWithoutMarketInput | TradeUpdateManyWithWhereWithoutMarketInput[]
    deleteMany?: TradeScalarWhereInput | TradeScalarWhereInput[]
  }

  export type TradeUncheckedUpdateManyWithoutMarketNestedInput = {
    create?: XOR<TradeCreateWithoutMarketInput, TradeUncheckedCreateWithoutMarketInput> | TradeCreateWithoutMarketInput[] | TradeUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: TradeCreateOrConnectWithoutMarketInput | TradeCreateOrConnectWithoutMarketInput[]
    upsert?: TradeUpsertWithWhereUniqueWithoutMarketInput | TradeUpsertWithWhereUniqueWithoutMarketInput[]
    createMany?: TradeCreateManyMarketInputEnvelope
    set?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    disconnect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    delete?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    connect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    update?: TradeUpdateWithWhereUniqueWithoutMarketInput | TradeUpdateWithWhereUniqueWithoutMarketInput[]
    updateMany?: TradeUpdateManyWithWhereWithoutMarketInput | TradeUpdateManyWithWhereWithoutMarketInput[]
    deleteMany?: TradeScalarWhereInput | TradeScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTradesInput = {
    create?: XOR<UserCreateWithoutTradesInput, UserUncheckedCreateWithoutTradesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTradesInput
    connect?: UserWhereUniqueInput
  }

  export type MarketDataCreateNestedOneWithoutTradesInput = {
    create?: XOR<MarketDataCreateWithoutTradesInput, MarketDataUncheckedCreateWithoutTradesInput>
    connectOrCreate?: MarketDataCreateOrConnectWithoutTradesInput
    connect?: MarketDataWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutTradesNestedInput = {
    create?: XOR<UserCreateWithoutTradesInput, UserUncheckedCreateWithoutTradesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTradesInput
    upsert?: UserUpsertWithoutTradesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTradesInput, UserUpdateWithoutTradesInput>, UserUncheckedUpdateWithoutTradesInput>
  }

  export type MarketDataUpdateOneRequiredWithoutTradesNestedInput = {
    create?: XOR<MarketDataCreateWithoutTradesInput, MarketDataUncheckedCreateWithoutTradesInput>
    connectOrCreate?: MarketDataCreateOrConnectWithoutTradesInput
    upsert?: MarketDataUpsertWithoutTradesInput
    connect?: MarketDataWhereUniqueInput
    update?: XOR<XOR<MarketDataUpdateToOneWithWhereWithoutTradesInput, MarketDataUpdateWithoutTradesInput>, MarketDataUncheckedUpdateWithoutTradesInput>
  }

  export type OrderCreateNestedManyWithoutMarketInput = {
    create?: XOR<OrderCreateWithoutMarketInput, OrderUncheckedCreateWithoutMarketInput> | OrderCreateWithoutMarketInput[] | OrderUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutMarketInput | OrderCreateOrConnectWithoutMarketInput[]
    createMany?: OrderCreateManyMarketInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type PositionCreateNestedManyWithoutMarketInput = {
    create?: XOR<PositionCreateWithoutMarketInput, PositionUncheckedCreateWithoutMarketInput> | PositionCreateWithoutMarketInput[] | PositionUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: PositionCreateOrConnectWithoutMarketInput | PositionCreateOrConnectWithoutMarketInput[]
    createMany?: PositionCreateManyMarketInputEnvelope
    connect?: PositionWhereUniqueInput | PositionWhereUniqueInput[]
  }

  export type EmbedCreateNestedManyWithoutMarketInput = {
    create?: XOR<EmbedCreateWithoutMarketInput, EmbedUncheckedCreateWithoutMarketInput> | EmbedCreateWithoutMarketInput[] | EmbedUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: EmbedCreateOrConnectWithoutMarketInput | EmbedCreateOrConnectWithoutMarketInput[]
    createMany?: EmbedCreateManyMarketInputEnvelope
    connect?: EmbedWhereUniqueInput | EmbedWhereUniqueInput[]
  }

  export type DiscussionThreadCreateNestedOneWithoutMarketInput = {
    create?: XOR<DiscussionThreadCreateWithoutMarketInput, DiscussionThreadUncheckedCreateWithoutMarketInput>
    connectOrCreate?: DiscussionThreadCreateOrConnectWithoutMarketInput
    connect?: DiscussionThreadWhereUniqueInput
  }

  export type OrderUncheckedCreateNestedManyWithoutMarketInput = {
    create?: XOR<OrderCreateWithoutMarketInput, OrderUncheckedCreateWithoutMarketInput> | OrderCreateWithoutMarketInput[] | OrderUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutMarketInput | OrderCreateOrConnectWithoutMarketInput[]
    createMany?: OrderCreateManyMarketInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type PositionUncheckedCreateNestedManyWithoutMarketInput = {
    create?: XOR<PositionCreateWithoutMarketInput, PositionUncheckedCreateWithoutMarketInput> | PositionCreateWithoutMarketInput[] | PositionUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: PositionCreateOrConnectWithoutMarketInput | PositionCreateOrConnectWithoutMarketInput[]
    createMany?: PositionCreateManyMarketInputEnvelope
    connect?: PositionWhereUniqueInput | PositionWhereUniqueInput[]
  }

  export type EmbedUncheckedCreateNestedManyWithoutMarketInput = {
    create?: XOR<EmbedCreateWithoutMarketInput, EmbedUncheckedCreateWithoutMarketInput> | EmbedCreateWithoutMarketInput[] | EmbedUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: EmbedCreateOrConnectWithoutMarketInput | EmbedCreateOrConnectWithoutMarketInput[]
    createMany?: EmbedCreateManyMarketInputEnvelope
    connect?: EmbedWhereUniqueInput | EmbedWhereUniqueInput[]
  }

  export type DiscussionThreadUncheckedCreateNestedOneWithoutMarketInput = {
    create?: XOR<DiscussionThreadCreateWithoutMarketInput, DiscussionThreadUncheckedCreateWithoutMarketInput>
    connectOrCreate?: DiscussionThreadCreateOrConnectWithoutMarketInput
    connect?: DiscussionThreadWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type OrderUpdateManyWithoutMarketNestedInput = {
    create?: XOR<OrderCreateWithoutMarketInput, OrderUncheckedCreateWithoutMarketInput> | OrderCreateWithoutMarketInput[] | OrderUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutMarketInput | OrderCreateOrConnectWithoutMarketInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutMarketInput | OrderUpsertWithWhereUniqueWithoutMarketInput[]
    createMany?: OrderCreateManyMarketInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutMarketInput | OrderUpdateWithWhereUniqueWithoutMarketInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutMarketInput | OrderUpdateManyWithWhereWithoutMarketInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type PositionUpdateManyWithoutMarketNestedInput = {
    create?: XOR<PositionCreateWithoutMarketInput, PositionUncheckedCreateWithoutMarketInput> | PositionCreateWithoutMarketInput[] | PositionUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: PositionCreateOrConnectWithoutMarketInput | PositionCreateOrConnectWithoutMarketInput[]
    upsert?: PositionUpsertWithWhereUniqueWithoutMarketInput | PositionUpsertWithWhereUniqueWithoutMarketInput[]
    createMany?: PositionCreateManyMarketInputEnvelope
    set?: PositionWhereUniqueInput | PositionWhereUniqueInput[]
    disconnect?: PositionWhereUniqueInput | PositionWhereUniqueInput[]
    delete?: PositionWhereUniqueInput | PositionWhereUniqueInput[]
    connect?: PositionWhereUniqueInput | PositionWhereUniqueInput[]
    update?: PositionUpdateWithWhereUniqueWithoutMarketInput | PositionUpdateWithWhereUniqueWithoutMarketInput[]
    updateMany?: PositionUpdateManyWithWhereWithoutMarketInput | PositionUpdateManyWithWhereWithoutMarketInput[]
    deleteMany?: PositionScalarWhereInput | PositionScalarWhereInput[]
  }

  export type EmbedUpdateManyWithoutMarketNestedInput = {
    create?: XOR<EmbedCreateWithoutMarketInput, EmbedUncheckedCreateWithoutMarketInput> | EmbedCreateWithoutMarketInput[] | EmbedUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: EmbedCreateOrConnectWithoutMarketInput | EmbedCreateOrConnectWithoutMarketInput[]
    upsert?: EmbedUpsertWithWhereUniqueWithoutMarketInput | EmbedUpsertWithWhereUniqueWithoutMarketInput[]
    createMany?: EmbedCreateManyMarketInputEnvelope
    set?: EmbedWhereUniqueInput | EmbedWhereUniqueInput[]
    disconnect?: EmbedWhereUniqueInput | EmbedWhereUniqueInput[]
    delete?: EmbedWhereUniqueInput | EmbedWhereUniqueInput[]
    connect?: EmbedWhereUniqueInput | EmbedWhereUniqueInput[]
    update?: EmbedUpdateWithWhereUniqueWithoutMarketInput | EmbedUpdateWithWhereUniqueWithoutMarketInput[]
    updateMany?: EmbedUpdateManyWithWhereWithoutMarketInput | EmbedUpdateManyWithWhereWithoutMarketInput[]
    deleteMany?: EmbedScalarWhereInput | EmbedScalarWhereInput[]
  }

  export type DiscussionThreadUpdateOneWithoutMarketNestedInput = {
    create?: XOR<DiscussionThreadCreateWithoutMarketInput, DiscussionThreadUncheckedCreateWithoutMarketInput>
    connectOrCreate?: DiscussionThreadCreateOrConnectWithoutMarketInput
    upsert?: DiscussionThreadUpsertWithoutMarketInput
    disconnect?: DiscussionThreadWhereInput | boolean
    delete?: DiscussionThreadWhereInput | boolean
    connect?: DiscussionThreadWhereUniqueInput
    update?: XOR<XOR<DiscussionThreadUpdateToOneWithWhereWithoutMarketInput, DiscussionThreadUpdateWithoutMarketInput>, DiscussionThreadUncheckedUpdateWithoutMarketInput>
  }

  export type OrderUncheckedUpdateManyWithoutMarketNestedInput = {
    create?: XOR<OrderCreateWithoutMarketInput, OrderUncheckedCreateWithoutMarketInput> | OrderCreateWithoutMarketInput[] | OrderUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutMarketInput | OrderCreateOrConnectWithoutMarketInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutMarketInput | OrderUpsertWithWhereUniqueWithoutMarketInput[]
    createMany?: OrderCreateManyMarketInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutMarketInput | OrderUpdateWithWhereUniqueWithoutMarketInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutMarketInput | OrderUpdateManyWithWhereWithoutMarketInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type PositionUncheckedUpdateManyWithoutMarketNestedInput = {
    create?: XOR<PositionCreateWithoutMarketInput, PositionUncheckedCreateWithoutMarketInput> | PositionCreateWithoutMarketInput[] | PositionUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: PositionCreateOrConnectWithoutMarketInput | PositionCreateOrConnectWithoutMarketInput[]
    upsert?: PositionUpsertWithWhereUniqueWithoutMarketInput | PositionUpsertWithWhereUniqueWithoutMarketInput[]
    createMany?: PositionCreateManyMarketInputEnvelope
    set?: PositionWhereUniqueInput | PositionWhereUniqueInput[]
    disconnect?: PositionWhereUniqueInput | PositionWhereUniqueInput[]
    delete?: PositionWhereUniqueInput | PositionWhereUniqueInput[]
    connect?: PositionWhereUniqueInput | PositionWhereUniqueInput[]
    update?: PositionUpdateWithWhereUniqueWithoutMarketInput | PositionUpdateWithWhereUniqueWithoutMarketInput[]
    updateMany?: PositionUpdateManyWithWhereWithoutMarketInput | PositionUpdateManyWithWhereWithoutMarketInput[]
    deleteMany?: PositionScalarWhereInput | PositionScalarWhereInput[]
  }

  export type EmbedUncheckedUpdateManyWithoutMarketNestedInput = {
    create?: XOR<EmbedCreateWithoutMarketInput, EmbedUncheckedCreateWithoutMarketInput> | EmbedCreateWithoutMarketInput[] | EmbedUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: EmbedCreateOrConnectWithoutMarketInput | EmbedCreateOrConnectWithoutMarketInput[]
    upsert?: EmbedUpsertWithWhereUniqueWithoutMarketInput | EmbedUpsertWithWhereUniqueWithoutMarketInput[]
    createMany?: EmbedCreateManyMarketInputEnvelope
    set?: EmbedWhereUniqueInput | EmbedWhereUniqueInput[]
    disconnect?: EmbedWhereUniqueInput | EmbedWhereUniqueInput[]
    delete?: EmbedWhereUniqueInput | EmbedWhereUniqueInput[]
    connect?: EmbedWhereUniqueInput | EmbedWhereUniqueInput[]
    update?: EmbedUpdateWithWhereUniqueWithoutMarketInput | EmbedUpdateWithWhereUniqueWithoutMarketInput[]
    updateMany?: EmbedUpdateManyWithWhereWithoutMarketInput | EmbedUpdateManyWithWhereWithoutMarketInput[]
    deleteMany?: EmbedScalarWhereInput | EmbedScalarWhereInput[]
  }

  export type DiscussionThreadUncheckedUpdateOneWithoutMarketNestedInput = {
    create?: XOR<DiscussionThreadCreateWithoutMarketInput, DiscussionThreadUncheckedCreateWithoutMarketInput>
    connectOrCreate?: DiscussionThreadCreateOrConnectWithoutMarketInput
    upsert?: DiscussionThreadUpsertWithoutMarketInput
    disconnect?: DiscussionThreadWhereInput | boolean
    delete?: DiscussionThreadWhereInput | boolean
    connect?: DiscussionThreadWhereUniqueInput
    update?: XOR<XOR<DiscussionThreadUpdateToOneWithWhereWithoutMarketInput, DiscussionThreadUpdateWithoutMarketInput>, DiscussionThreadUncheckedUpdateWithoutMarketInput>
  }

  export type MarketCreateNestedOneWithoutOrdersInput = {
    create?: XOR<MarketCreateWithoutOrdersInput, MarketUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: MarketCreateOrConnectWithoutOrdersInput
    connect?: MarketWhereUniqueInput
  }

  export type MarketUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<MarketCreateWithoutOrdersInput, MarketUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: MarketCreateOrConnectWithoutOrdersInput
    upsert?: MarketUpsertWithoutOrdersInput
    connect?: MarketWhereUniqueInput
    update?: XOR<XOR<MarketUpdateToOneWithWhereWithoutOrdersInput, MarketUpdateWithoutOrdersInput>, MarketUncheckedUpdateWithoutOrdersInput>
  }

  export type MarketCreateNestedOneWithoutPositionsInput = {
    create?: XOR<MarketCreateWithoutPositionsInput, MarketUncheckedCreateWithoutPositionsInput>
    connectOrCreate?: MarketCreateOrConnectWithoutPositionsInput
    connect?: MarketWhereUniqueInput
  }

  export type MarketUpdateOneRequiredWithoutPositionsNestedInput = {
    create?: XOR<MarketCreateWithoutPositionsInput, MarketUncheckedCreateWithoutPositionsInput>
    connectOrCreate?: MarketCreateOrConnectWithoutPositionsInput
    upsert?: MarketUpsertWithoutPositionsInput
    connect?: MarketWhereUniqueInput
    update?: XOR<XOR<MarketUpdateToOneWithWhereWithoutPositionsInput, MarketUpdateWithoutPositionsInput>, MarketUncheckedUpdateWithoutPositionsInput>
  }

  export type MarketCreateNestedOneWithoutDiscussionInput = {
    create?: XOR<MarketCreateWithoutDiscussionInput, MarketUncheckedCreateWithoutDiscussionInput>
    connectOrCreate?: MarketCreateOrConnectWithoutDiscussionInput
    connect?: MarketWhereUniqueInput
  }

  export type DiscussionMessageCreateNestedManyWithoutThreadInput = {
    create?: XOR<DiscussionMessageCreateWithoutThreadInput, DiscussionMessageUncheckedCreateWithoutThreadInput> | DiscussionMessageCreateWithoutThreadInput[] | DiscussionMessageUncheckedCreateWithoutThreadInput[]
    connectOrCreate?: DiscussionMessageCreateOrConnectWithoutThreadInput | DiscussionMessageCreateOrConnectWithoutThreadInput[]
    createMany?: DiscussionMessageCreateManyThreadInputEnvelope
    connect?: DiscussionMessageWhereUniqueInput | DiscussionMessageWhereUniqueInput[]
  }

  export type DiscussionMessageUncheckedCreateNestedManyWithoutThreadInput = {
    create?: XOR<DiscussionMessageCreateWithoutThreadInput, DiscussionMessageUncheckedCreateWithoutThreadInput> | DiscussionMessageCreateWithoutThreadInput[] | DiscussionMessageUncheckedCreateWithoutThreadInput[]
    connectOrCreate?: DiscussionMessageCreateOrConnectWithoutThreadInput | DiscussionMessageCreateOrConnectWithoutThreadInput[]
    createMany?: DiscussionMessageCreateManyThreadInputEnvelope
    connect?: DiscussionMessageWhereUniqueInput | DiscussionMessageWhereUniqueInput[]
  }

  export type MarketUpdateOneRequiredWithoutDiscussionNestedInput = {
    create?: XOR<MarketCreateWithoutDiscussionInput, MarketUncheckedCreateWithoutDiscussionInput>
    connectOrCreate?: MarketCreateOrConnectWithoutDiscussionInput
    upsert?: MarketUpsertWithoutDiscussionInput
    connect?: MarketWhereUniqueInput
    update?: XOR<XOR<MarketUpdateToOneWithWhereWithoutDiscussionInput, MarketUpdateWithoutDiscussionInput>, MarketUncheckedUpdateWithoutDiscussionInput>
  }

  export type DiscussionMessageUpdateManyWithoutThreadNestedInput = {
    create?: XOR<DiscussionMessageCreateWithoutThreadInput, DiscussionMessageUncheckedCreateWithoutThreadInput> | DiscussionMessageCreateWithoutThreadInput[] | DiscussionMessageUncheckedCreateWithoutThreadInput[]
    connectOrCreate?: DiscussionMessageCreateOrConnectWithoutThreadInput | DiscussionMessageCreateOrConnectWithoutThreadInput[]
    upsert?: DiscussionMessageUpsertWithWhereUniqueWithoutThreadInput | DiscussionMessageUpsertWithWhereUniqueWithoutThreadInput[]
    createMany?: DiscussionMessageCreateManyThreadInputEnvelope
    set?: DiscussionMessageWhereUniqueInput | DiscussionMessageWhereUniqueInput[]
    disconnect?: DiscussionMessageWhereUniqueInput | DiscussionMessageWhereUniqueInput[]
    delete?: DiscussionMessageWhereUniqueInput | DiscussionMessageWhereUniqueInput[]
    connect?: DiscussionMessageWhereUniqueInput | DiscussionMessageWhereUniqueInput[]
    update?: DiscussionMessageUpdateWithWhereUniqueWithoutThreadInput | DiscussionMessageUpdateWithWhereUniqueWithoutThreadInput[]
    updateMany?: DiscussionMessageUpdateManyWithWhereWithoutThreadInput | DiscussionMessageUpdateManyWithWhereWithoutThreadInput[]
    deleteMany?: DiscussionMessageScalarWhereInput | DiscussionMessageScalarWhereInput[]
  }

  export type DiscussionMessageUncheckedUpdateManyWithoutThreadNestedInput = {
    create?: XOR<DiscussionMessageCreateWithoutThreadInput, DiscussionMessageUncheckedCreateWithoutThreadInput> | DiscussionMessageCreateWithoutThreadInput[] | DiscussionMessageUncheckedCreateWithoutThreadInput[]
    connectOrCreate?: DiscussionMessageCreateOrConnectWithoutThreadInput | DiscussionMessageCreateOrConnectWithoutThreadInput[]
    upsert?: DiscussionMessageUpsertWithWhereUniqueWithoutThreadInput | DiscussionMessageUpsertWithWhereUniqueWithoutThreadInput[]
    createMany?: DiscussionMessageCreateManyThreadInputEnvelope
    set?: DiscussionMessageWhereUniqueInput | DiscussionMessageWhereUniqueInput[]
    disconnect?: DiscussionMessageWhereUniqueInput | DiscussionMessageWhereUniqueInput[]
    delete?: DiscussionMessageWhereUniqueInput | DiscussionMessageWhereUniqueInput[]
    connect?: DiscussionMessageWhereUniqueInput | DiscussionMessageWhereUniqueInput[]
    update?: DiscussionMessageUpdateWithWhereUniqueWithoutThreadInput | DiscussionMessageUpdateWithWhereUniqueWithoutThreadInput[]
    updateMany?: DiscussionMessageUpdateManyWithWhereWithoutThreadInput | DiscussionMessageUpdateManyWithWhereWithoutThreadInput[]
    deleteMany?: DiscussionMessageScalarWhereInput | DiscussionMessageScalarWhereInput[]
  }

  export type DiscussionThreadCreateNestedOneWithoutMessagesInput = {
    create?: XOR<DiscussionThreadCreateWithoutMessagesInput, DiscussionThreadUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: DiscussionThreadCreateOrConnectWithoutMessagesInput
    connect?: DiscussionThreadWhereUniqueInput
  }

  export type DiscussionThreadUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<DiscussionThreadCreateWithoutMessagesInput, DiscussionThreadUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: DiscussionThreadCreateOrConnectWithoutMessagesInput
    upsert?: DiscussionThreadUpsertWithoutMessagesInput
    connect?: DiscussionThreadWhereUniqueInput
    update?: XOR<XOR<DiscussionThreadUpdateToOneWithWhereWithoutMessagesInput, DiscussionThreadUpdateWithoutMessagesInput>, DiscussionThreadUncheckedUpdateWithoutMessagesInput>
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type MarketCreateNestedOneWithoutEmbedsInput = {
    create?: XOR<MarketCreateWithoutEmbedsInput, MarketUncheckedCreateWithoutEmbedsInput>
    connectOrCreate?: MarketCreateOrConnectWithoutEmbedsInput
    connect?: MarketWhereUniqueInput
  }

  export type MarketUpdateOneRequiredWithoutEmbedsNestedInput = {
    create?: XOR<MarketCreateWithoutEmbedsInput, MarketUncheckedCreateWithoutEmbedsInput>
    connectOrCreate?: MarketCreateOrConnectWithoutEmbedsInput
    upsert?: MarketUpsertWithoutEmbedsInput
    connect?: MarketWhereUniqueInput
    update?: XOR<XOR<MarketUpdateToOneWithWhereWithoutEmbedsInput, MarketUpdateWithoutEmbedsInput>, MarketUncheckedUpdateWithoutEmbedsInput>
  }

  export type MemoryPointerCreatetagsInput = {
    set: string[]
  }

  export type MemoryPointerUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
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
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type PromptCreateWithoutUserInput = {
    id?: string
    content: string
    response?: string | null
    tokens?: number | null
    createdAt?: Date | string
  }

  export type PromptUncheckedCreateWithoutUserInput = {
    id?: string
    content: string
    response?: string | null
    tokens?: number | null
    createdAt?: Date | string
  }

  export type PromptCreateOrConnectWithoutUserInput = {
    where: PromptWhereUniqueInput
    create: XOR<PromptCreateWithoutUserInput, PromptUncheckedCreateWithoutUserInput>
  }

  export type PromptCreateManyUserInputEnvelope = {
    data: PromptCreateManyUserInput | PromptCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TradeCreateWithoutUserInput = {
    id?: string
    amount: number
    side: string
    status: string
    txHash?: string | null
    createdAt?: Date | string
    market: MarketDataCreateNestedOneWithoutTradesInput
  }

  export type TradeUncheckedCreateWithoutUserInput = {
    id?: string
    marketDataId: string
    amount: number
    side: string
    status: string
    txHash?: string | null
    createdAt?: Date | string
  }

  export type TradeCreateOrConnectWithoutUserInput = {
    where: TradeWhereUniqueInput
    create: XOR<TradeCreateWithoutUserInput, TradeUncheckedCreateWithoutUserInput>
  }

  export type TradeCreateManyUserInputEnvelope = {
    data: TradeCreateManyUserInput | TradeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PromptUpsertWithWhereUniqueWithoutUserInput = {
    where: PromptWhereUniqueInput
    update: XOR<PromptUpdateWithoutUserInput, PromptUncheckedUpdateWithoutUserInput>
    create: XOR<PromptCreateWithoutUserInput, PromptUncheckedCreateWithoutUserInput>
  }

  export type PromptUpdateWithWhereUniqueWithoutUserInput = {
    where: PromptWhereUniqueInput
    data: XOR<PromptUpdateWithoutUserInput, PromptUncheckedUpdateWithoutUserInput>
  }

  export type PromptUpdateManyWithWhereWithoutUserInput = {
    where: PromptScalarWhereInput
    data: XOR<PromptUpdateManyMutationInput, PromptUncheckedUpdateManyWithoutUserInput>
  }

  export type PromptScalarWhereInput = {
    AND?: PromptScalarWhereInput | PromptScalarWhereInput[]
    OR?: PromptScalarWhereInput[]
    NOT?: PromptScalarWhereInput | PromptScalarWhereInput[]
    id?: StringFilter<"Prompt"> | string
    userId?: StringFilter<"Prompt"> | string
    content?: StringFilter<"Prompt"> | string
    response?: StringNullableFilter<"Prompt"> | string | null
    tokens?: IntNullableFilter<"Prompt"> | number | null
    createdAt?: DateTimeFilter<"Prompt"> | Date | string
  }

  export type TradeUpsertWithWhereUniqueWithoutUserInput = {
    where: TradeWhereUniqueInput
    update: XOR<TradeUpdateWithoutUserInput, TradeUncheckedUpdateWithoutUserInput>
    create: XOR<TradeCreateWithoutUserInput, TradeUncheckedCreateWithoutUserInput>
  }

  export type TradeUpdateWithWhereUniqueWithoutUserInput = {
    where: TradeWhereUniqueInput
    data: XOR<TradeUpdateWithoutUserInput, TradeUncheckedUpdateWithoutUserInput>
  }

  export type TradeUpdateManyWithWhereWithoutUserInput = {
    where: TradeScalarWhereInput
    data: XOR<TradeUpdateManyMutationInput, TradeUncheckedUpdateManyWithoutUserInput>
  }

  export type TradeScalarWhereInput = {
    AND?: TradeScalarWhereInput | TradeScalarWhereInput[]
    OR?: TradeScalarWhereInput[]
    NOT?: TradeScalarWhereInput | TradeScalarWhereInput[]
    id?: StringFilter<"Trade"> | string
    userId?: StringFilter<"Trade"> | string
    marketDataId?: StringFilter<"Trade"> | string
    amount?: FloatFilter<"Trade"> | number
    side?: StringFilter<"Trade"> | string
    status?: StringFilter<"Trade"> | string
    txHash?: StringNullableFilter<"Trade"> | string | null
    createdAt?: DateTimeFilter<"Trade"> | Date | string
  }

  export type UserCreateWithoutPromptsInput = {
    id?: string
    userId: string
    walletAddress?: string | null
    safeAddress?: string | null
    safeOwners?: UserCreatesafeOwnersInput | string[]
    network?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    trades?: TradeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPromptsInput = {
    id?: string
    userId: string
    walletAddress?: string | null
    safeAddress?: string | null
    safeOwners?: UserCreatesafeOwnersInput | string[]
    network?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    trades?: TradeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPromptsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPromptsInput, UserUncheckedCreateWithoutPromptsInput>
  }

  export type UserUpsertWithoutPromptsInput = {
    update: XOR<UserUpdateWithoutPromptsInput, UserUncheckedUpdateWithoutPromptsInput>
    create: XOR<UserCreateWithoutPromptsInput, UserUncheckedCreateWithoutPromptsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPromptsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPromptsInput, UserUncheckedUpdateWithoutPromptsInput>
  }

  export type UserUpdateWithoutPromptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    safeAddress?: NullableStringFieldUpdateOperationsInput | string | null
    safeOwners?: UserUpdatesafeOwnersInput | string[]
    network?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trades?: TradeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPromptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    safeAddress?: NullableStringFieldUpdateOperationsInput | string | null
    safeOwners?: UserUpdatesafeOwnersInput | string[]
    network?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trades?: TradeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TradeCreateWithoutMarketInput = {
    id?: string
    amount: number
    side: string
    status: string
    txHash?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTradesInput
  }

  export type TradeUncheckedCreateWithoutMarketInput = {
    id?: string
    userId: string
    amount: number
    side: string
    status: string
    txHash?: string | null
    createdAt?: Date | string
  }

  export type TradeCreateOrConnectWithoutMarketInput = {
    where: TradeWhereUniqueInput
    create: XOR<TradeCreateWithoutMarketInput, TradeUncheckedCreateWithoutMarketInput>
  }

  export type TradeCreateManyMarketInputEnvelope = {
    data: TradeCreateManyMarketInput | TradeCreateManyMarketInput[]
    skipDuplicates?: boolean
  }

  export type TradeUpsertWithWhereUniqueWithoutMarketInput = {
    where: TradeWhereUniqueInput
    update: XOR<TradeUpdateWithoutMarketInput, TradeUncheckedUpdateWithoutMarketInput>
    create: XOR<TradeCreateWithoutMarketInput, TradeUncheckedCreateWithoutMarketInput>
  }

  export type TradeUpdateWithWhereUniqueWithoutMarketInput = {
    where: TradeWhereUniqueInput
    data: XOR<TradeUpdateWithoutMarketInput, TradeUncheckedUpdateWithoutMarketInput>
  }

  export type TradeUpdateManyWithWhereWithoutMarketInput = {
    where: TradeScalarWhereInput
    data: XOR<TradeUpdateManyMutationInput, TradeUncheckedUpdateManyWithoutMarketInput>
  }

  export type UserCreateWithoutTradesInput = {
    id?: string
    userId: string
    walletAddress?: string | null
    safeAddress?: string | null
    safeOwners?: UserCreatesafeOwnersInput | string[]
    network?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    prompts?: PromptCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTradesInput = {
    id?: string
    userId: string
    walletAddress?: string | null
    safeAddress?: string | null
    safeOwners?: UserCreatesafeOwnersInput | string[]
    network?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    prompts?: PromptUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTradesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTradesInput, UserUncheckedCreateWithoutTradesInput>
  }

  export type MarketDataCreateWithoutTradesInput = {
    id?: string
    marketId: string
    question: string
    volume?: number | null
    probability?: number | null
    source: string
    data?: NullableJsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type MarketDataUncheckedCreateWithoutTradesInput = {
    id?: string
    marketId: string
    question: string
    volume?: number | null
    probability?: number | null
    source: string
    data?: NullableJsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type MarketDataCreateOrConnectWithoutTradesInput = {
    where: MarketDataWhereUniqueInput
    create: XOR<MarketDataCreateWithoutTradesInput, MarketDataUncheckedCreateWithoutTradesInput>
  }

  export type UserUpsertWithoutTradesInput = {
    update: XOR<UserUpdateWithoutTradesInput, UserUncheckedUpdateWithoutTradesInput>
    create: XOR<UserCreateWithoutTradesInput, UserUncheckedCreateWithoutTradesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTradesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTradesInput, UserUncheckedUpdateWithoutTradesInput>
  }

  export type UserUpdateWithoutTradesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    safeAddress?: NullableStringFieldUpdateOperationsInput | string | null
    safeOwners?: UserUpdatesafeOwnersInput | string[]
    network?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prompts?: PromptUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTradesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    safeAddress?: NullableStringFieldUpdateOperationsInput | string | null
    safeOwners?: UserUpdatesafeOwnersInput | string[]
    network?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prompts?: PromptUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MarketDataUpsertWithoutTradesInput = {
    update: XOR<MarketDataUpdateWithoutTradesInput, MarketDataUncheckedUpdateWithoutTradesInput>
    create: XOR<MarketDataCreateWithoutTradesInput, MarketDataUncheckedCreateWithoutTradesInput>
    where?: MarketDataWhereInput
  }

  export type MarketDataUpdateToOneWithWhereWithoutTradesInput = {
    where?: MarketDataWhereInput
    data: XOR<MarketDataUpdateWithoutTradesInput, MarketDataUncheckedUpdateWithoutTradesInput>
  }

  export type MarketDataUpdateWithoutTradesInput = {
    id?: StringFieldUpdateOperationsInput | string
    marketId?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    volume?: NullableFloatFieldUpdateOperationsInput | number | null
    probability?: NullableFloatFieldUpdateOperationsInput | number | null
    source?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketDataUncheckedUpdateWithoutTradesInput = {
    id?: StringFieldUpdateOperationsInput | string
    marketId?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    volume?: NullableFloatFieldUpdateOperationsInput | number | null
    probability?: NullableFloatFieldUpdateOperationsInput | number | null
    source?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateWithoutMarketInput = {
    id?: string
    side: string
    price: number
    size: number
    remaining: number
    status: string
    createdAt?: Date | string
  }

  export type OrderUncheckedCreateWithoutMarketInput = {
    id?: string
    side: string
    price: number
    size: number
    remaining: number
    status: string
    createdAt?: Date | string
  }

  export type OrderCreateOrConnectWithoutMarketInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutMarketInput, OrderUncheckedCreateWithoutMarketInput>
  }

  export type OrderCreateManyMarketInputEnvelope = {
    data: OrderCreateManyMarketInput | OrderCreateManyMarketInput[]
    skipDuplicates?: boolean
  }

  export type PositionCreateWithoutMarketInput = {
    id?: string
    owner: string
    size: number
    collateralLocked: number
    createdAt?: Date | string
  }

  export type PositionUncheckedCreateWithoutMarketInput = {
    id?: string
    owner: string
    size: number
    collateralLocked: number
    createdAt?: Date | string
  }

  export type PositionCreateOrConnectWithoutMarketInput = {
    where: PositionWhereUniqueInput
    create: XOR<PositionCreateWithoutMarketInput, PositionUncheckedCreateWithoutMarketInput>
  }

  export type PositionCreateManyMarketInputEnvelope = {
    data: PositionCreateManyMarketInput | PositionCreateManyMarketInput[]
    skipDuplicates?: boolean
  }

  export type EmbedCreateWithoutMarketInput = {
    id?: string
    url: string
    type: string
    source: string
    createdAt?: Date | string
  }

  export type EmbedUncheckedCreateWithoutMarketInput = {
    id?: string
    url: string
    type: string
    source: string
    createdAt?: Date | string
  }

  export type EmbedCreateOrConnectWithoutMarketInput = {
    where: EmbedWhereUniqueInput
    create: XOR<EmbedCreateWithoutMarketInput, EmbedUncheckedCreateWithoutMarketInput>
  }

  export type EmbedCreateManyMarketInputEnvelope = {
    data: EmbedCreateManyMarketInput | EmbedCreateManyMarketInput[]
    skipDuplicates?: boolean
  }

  export type DiscussionThreadCreateWithoutMarketInput = {
    id?: string
    createdBy?: string | null
    status?: string
    createdAt?: Date | string
    messages?: DiscussionMessageCreateNestedManyWithoutThreadInput
  }

  export type DiscussionThreadUncheckedCreateWithoutMarketInput = {
    id?: string
    createdBy?: string | null
    status?: string
    createdAt?: Date | string
    messages?: DiscussionMessageUncheckedCreateNestedManyWithoutThreadInput
  }

  export type DiscussionThreadCreateOrConnectWithoutMarketInput = {
    where: DiscussionThreadWhereUniqueInput
    create: XOR<DiscussionThreadCreateWithoutMarketInput, DiscussionThreadUncheckedCreateWithoutMarketInput>
  }

  export type OrderUpsertWithWhereUniqueWithoutMarketInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutMarketInput, OrderUncheckedUpdateWithoutMarketInput>
    create: XOR<OrderCreateWithoutMarketInput, OrderUncheckedCreateWithoutMarketInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutMarketInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutMarketInput, OrderUncheckedUpdateWithoutMarketInput>
  }

  export type OrderUpdateManyWithWhereWithoutMarketInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutMarketInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: StringFilter<"Order"> | string
    marketId?: StringFilter<"Order"> | string
    side?: StringFilter<"Order"> | string
    price?: FloatFilter<"Order"> | number
    size?: FloatFilter<"Order"> | number
    remaining?: FloatFilter<"Order"> | number
    status?: StringFilter<"Order"> | string
    createdAt?: DateTimeFilter<"Order"> | Date | string
  }

  export type PositionUpsertWithWhereUniqueWithoutMarketInput = {
    where: PositionWhereUniqueInput
    update: XOR<PositionUpdateWithoutMarketInput, PositionUncheckedUpdateWithoutMarketInput>
    create: XOR<PositionCreateWithoutMarketInput, PositionUncheckedCreateWithoutMarketInput>
  }

  export type PositionUpdateWithWhereUniqueWithoutMarketInput = {
    where: PositionWhereUniqueInput
    data: XOR<PositionUpdateWithoutMarketInput, PositionUncheckedUpdateWithoutMarketInput>
  }

  export type PositionUpdateManyWithWhereWithoutMarketInput = {
    where: PositionScalarWhereInput
    data: XOR<PositionUpdateManyMutationInput, PositionUncheckedUpdateManyWithoutMarketInput>
  }

  export type PositionScalarWhereInput = {
    AND?: PositionScalarWhereInput | PositionScalarWhereInput[]
    OR?: PositionScalarWhereInput[]
    NOT?: PositionScalarWhereInput | PositionScalarWhereInput[]
    id?: StringFilter<"Position"> | string
    marketId?: StringFilter<"Position"> | string
    owner?: StringFilter<"Position"> | string
    size?: FloatFilter<"Position"> | number
    collateralLocked?: FloatFilter<"Position"> | number
    createdAt?: DateTimeFilter<"Position"> | Date | string
  }

  export type EmbedUpsertWithWhereUniqueWithoutMarketInput = {
    where: EmbedWhereUniqueInput
    update: XOR<EmbedUpdateWithoutMarketInput, EmbedUncheckedUpdateWithoutMarketInput>
    create: XOR<EmbedCreateWithoutMarketInput, EmbedUncheckedCreateWithoutMarketInput>
  }

  export type EmbedUpdateWithWhereUniqueWithoutMarketInput = {
    where: EmbedWhereUniqueInput
    data: XOR<EmbedUpdateWithoutMarketInput, EmbedUncheckedUpdateWithoutMarketInput>
  }

  export type EmbedUpdateManyWithWhereWithoutMarketInput = {
    where: EmbedScalarWhereInput
    data: XOR<EmbedUpdateManyMutationInput, EmbedUncheckedUpdateManyWithoutMarketInput>
  }

  export type EmbedScalarWhereInput = {
    AND?: EmbedScalarWhereInput | EmbedScalarWhereInput[]
    OR?: EmbedScalarWhereInput[]
    NOT?: EmbedScalarWhereInput | EmbedScalarWhereInput[]
    id?: StringFilter<"Embed"> | string
    marketId?: StringFilter<"Embed"> | string
    url?: StringFilter<"Embed"> | string
    type?: StringFilter<"Embed"> | string
    source?: StringFilter<"Embed"> | string
    createdAt?: DateTimeFilter<"Embed"> | Date | string
  }

  export type DiscussionThreadUpsertWithoutMarketInput = {
    update: XOR<DiscussionThreadUpdateWithoutMarketInput, DiscussionThreadUncheckedUpdateWithoutMarketInput>
    create: XOR<DiscussionThreadCreateWithoutMarketInput, DiscussionThreadUncheckedCreateWithoutMarketInput>
    where?: DiscussionThreadWhereInput
  }

  export type DiscussionThreadUpdateToOneWithWhereWithoutMarketInput = {
    where?: DiscussionThreadWhereInput
    data: XOR<DiscussionThreadUpdateWithoutMarketInput, DiscussionThreadUncheckedUpdateWithoutMarketInput>
  }

  export type DiscussionThreadUpdateWithoutMarketInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: DiscussionMessageUpdateManyWithoutThreadNestedInput
  }

  export type DiscussionThreadUncheckedUpdateWithoutMarketInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: DiscussionMessageUncheckedUpdateManyWithoutThreadNestedInput
  }

  export type MarketCreateWithoutOrdersInput = {
    id?: string
    slug: string
    title: string
    description?: string | null
    category?: string | null
    status: string
    resolutionTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    positions?: PositionCreateNestedManyWithoutMarketInput
    embeds?: EmbedCreateNestedManyWithoutMarketInput
    discussion?: DiscussionThreadCreateNestedOneWithoutMarketInput
  }

  export type MarketUncheckedCreateWithoutOrdersInput = {
    id?: string
    slug: string
    title: string
    description?: string | null
    category?: string | null
    status: string
    resolutionTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    positions?: PositionUncheckedCreateNestedManyWithoutMarketInput
    embeds?: EmbedUncheckedCreateNestedManyWithoutMarketInput
    discussion?: DiscussionThreadUncheckedCreateNestedOneWithoutMarketInput
  }

  export type MarketCreateOrConnectWithoutOrdersInput = {
    where: MarketWhereUniqueInput
    create: XOR<MarketCreateWithoutOrdersInput, MarketUncheckedCreateWithoutOrdersInput>
  }

  export type MarketUpsertWithoutOrdersInput = {
    update: XOR<MarketUpdateWithoutOrdersInput, MarketUncheckedUpdateWithoutOrdersInput>
    create: XOR<MarketCreateWithoutOrdersInput, MarketUncheckedCreateWithoutOrdersInput>
    where?: MarketWhereInput
  }

  export type MarketUpdateToOneWithWhereWithoutOrdersInput = {
    where?: MarketWhereInput
    data: XOR<MarketUpdateWithoutOrdersInput, MarketUncheckedUpdateWithoutOrdersInput>
  }

  export type MarketUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    resolutionTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    positions?: PositionUpdateManyWithoutMarketNestedInput
    embeds?: EmbedUpdateManyWithoutMarketNestedInput
    discussion?: DiscussionThreadUpdateOneWithoutMarketNestedInput
  }

  export type MarketUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    resolutionTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    positions?: PositionUncheckedUpdateManyWithoutMarketNestedInput
    embeds?: EmbedUncheckedUpdateManyWithoutMarketNestedInput
    discussion?: DiscussionThreadUncheckedUpdateOneWithoutMarketNestedInput
  }

  export type MarketCreateWithoutPositionsInput = {
    id?: string
    slug: string
    title: string
    description?: string | null
    category?: string | null
    status: string
    resolutionTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutMarketInput
    embeds?: EmbedCreateNestedManyWithoutMarketInput
    discussion?: DiscussionThreadCreateNestedOneWithoutMarketInput
  }

  export type MarketUncheckedCreateWithoutPositionsInput = {
    id?: string
    slug: string
    title: string
    description?: string | null
    category?: string | null
    status: string
    resolutionTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutMarketInput
    embeds?: EmbedUncheckedCreateNestedManyWithoutMarketInput
    discussion?: DiscussionThreadUncheckedCreateNestedOneWithoutMarketInput
  }

  export type MarketCreateOrConnectWithoutPositionsInput = {
    where: MarketWhereUniqueInput
    create: XOR<MarketCreateWithoutPositionsInput, MarketUncheckedCreateWithoutPositionsInput>
  }

  export type MarketUpsertWithoutPositionsInput = {
    update: XOR<MarketUpdateWithoutPositionsInput, MarketUncheckedUpdateWithoutPositionsInput>
    create: XOR<MarketCreateWithoutPositionsInput, MarketUncheckedCreateWithoutPositionsInput>
    where?: MarketWhereInput
  }

  export type MarketUpdateToOneWithWhereWithoutPositionsInput = {
    where?: MarketWhereInput
    data: XOR<MarketUpdateWithoutPositionsInput, MarketUncheckedUpdateWithoutPositionsInput>
  }

  export type MarketUpdateWithoutPositionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    resolutionTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutMarketNestedInput
    embeds?: EmbedUpdateManyWithoutMarketNestedInput
    discussion?: DiscussionThreadUpdateOneWithoutMarketNestedInput
  }

  export type MarketUncheckedUpdateWithoutPositionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    resolutionTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutMarketNestedInput
    embeds?: EmbedUncheckedUpdateManyWithoutMarketNestedInput
    discussion?: DiscussionThreadUncheckedUpdateOneWithoutMarketNestedInput
  }

  export type MarketCreateWithoutDiscussionInput = {
    id?: string
    slug: string
    title: string
    description?: string | null
    category?: string | null
    status: string
    resolutionTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutMarketInput
    positions?: PositionCreateNestedManyWithoutMarketInput
    embeds?: EmbedCreateNestedManyWithoutMarketInput
  }

  export type MarketUncheckedCreateWithoutDiscussionInput = {
    id?: string
    slug: string
    title: string
    description?: string | null
    category?: string | null
    status: string
    resolutionTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutMarketInput
    positions?: PositionUncheckedCreateNestedManyWithoutMarketInput
    embeds?: EmbedUncheckedCreateNestedManyWithoutMarketInput
  }

  export type MarketCreateOrConnectWithoutDiscussionInput = {
    where: MarketWhereUniqueInput
    create: XOR<MarketCreateWithoutDiscussionInput, MarketUncheckedCreateWithoutDiscussionInput>
  }

  export type DiscussionMessageCreateWithoutThreadInput = {
    id?: string
    userId: string
    role: string
    content: string
    author?: string | null
    createdAt?: Date | string
  }

  export type DiscussionMessageUncheckedCreateWithoutThreadInput = {
    id?: string
    userId: string
    role: string
    content: string
    author?: string | null
    createdAt?: Date | string
  }

  export type DiscussionMessageCreateOrConnectWithoutThreadInput = {
    where: DiscussionMessageWhereUniqueInput
    create: XOR<DiscussionMessageCreateWithoutThreadInput, DiscussionMessageUncheckedCreateWithoutThreadInput>
  }

  export type DiscussionMessageCreateManyThreadInputEnvelope = {
    data: DiscussionMessageCreateManyThreadInput | DiscussionMessageCreateManyThreadInput[]
    skipDuplicates?: boolean
  }

  export type MarketUpsertWithoutDiscussionInput = {
    update: XOR<MarketUpdateWithoutDiscussionInput, MarketUncheckedUpdateWithoutDiscussionInput>
    create: XOR<MarketCreateWithoutDiscussionInput, MarketUncheckedCreateWithoutDiscussionInput>
    where?: MarketWhereInput
  }

  export type MarketUpdateToOneWithWhereWithoutDiscussionInput = {
    where?: MarketWhereInput
    data: XOR<MarketUpdateWithoutDiscussionInput, MarketUncheckedUpdateWithoutDiscussionInput>
  }

  export type MarketUpdateWithoutDiscussionInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    resolutionTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutMarketNestedInput
    positions?: PositionUpdateManyWithoutMarketNestedInput
    embeds?: EmbedUpdateManyWithoutMarketNestedInput
  }

  export type MarketUncheckedUpdateWithoutDiscussionInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    resolutionTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutMarketNestedInput
    positions?: PositionUncheckedUpdateManyWithoutMarketNestedInput
    embeds?: EmbedUncheckedUpdateManyWithoutMarketNestedInput
  }

  export type DiscussionMessageUpsertWithWhereUniqueWithoutThreadInput = {
    where: DiscussionMessageWhereUniqueInput
    update: XOR<DiscussionMessageUpdateWithoutThreadInput, DiscussionMessageUncheckedUpdateWithoutThreadInput>
    create: XOR<DiscussionMessageCreateWithoutThreadInput, DiscussionMessageUncheckedCreateWithoutThreadInput>
  }

  export type DiscussionMessageUpdateWithWhereUniqueWithoutThreadInput = {
    where: DiscussionMessageWhereUniqueInput
    data: XOR<DiscussionMessageUpdateWithoutThreadInput, DiscussionMessageUncheckedUpdateWithoutThreadInput>
  }

  export type DiscussionMessageUpdateManyWithWhereWithoutThreadInput = {
    where: DiscussionMessageScalarWhereInput
    data: XOR<DiscussionMessageUpdateManyMutationInput, DiscussionMessageUncheckedUpdateManyWithoutThreadInput>
  }

  export type DiscussionMessageScalarWhereInput = {
    AND?: DiscussionMessageScalarWhereInput | DiscussionMessageScalarWhereInput[]
    OR?: DiscussionMessageScalarWhereInput[]
    NOT?: DiscussionMessageScalarWhereInput | DiscussionMessageScalarWhereInput[]
    id?: StringFilter<"DiscussionMessage"> | string
    threadId?: StringFilter<"DiscussionMessage"> | string
    userId?: StringFilter<"DiscussionMessage"> | string
    role?: StringFilter<"DiscussionMessage"> | string
    content?: StringFilter<"DiscussionMessage"> | string
    author?: StringNullableFilter<"DiscussionMessage"> | string | null
    createdAt?: DateTimeFilter<"DiscussionMessage"> | Date | string
  }

  export type DiscussionThreadCreateWithoutMessagesInput = {
    id?: string
    createdBy?: string | null
    status?: string
    createdAt?: Date | string
    market: MarketCreateNestedOneWithoutDiscussionInput
  }

  export type DiscussionThreadUncheckedCreateWithoutMessagesInput = {
    id?: string
    marketId: string
    createdBy?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type DiscussionThreadCreateOrConnectWithoutMessagesInput = {
    where: DiscussionThreadWhereUniqueInput
    create: XOR<DiscussionThreadCreateWithoutMessagesInput, DiscussionThreadUncheckedCreateWithoutMessagesInput>
  }

  export type DiscussionThreadUpsertWithoutMessagesInput = {
    update: XOR<DiscussionThreadUpdateWithoutMessagesInput, DiscussionThreadUncheckedUpdateWithoutMessagesInput>
    create: XOR<DiscussionThreadCreateWithoutMessagesInput, DiscussionThreadUncheckedCreateWithoutMessagesInput>
    where?: DiscussionThreadWhereInput
  }

  export type DiscussionThreadUpdateToOneWithWhereWithoutMessagesInput = {
    where?: DiscussionThreadWhereInput
    data: XOR<DiscussionThreadUpdateWithoutMessagesInput, DiscussionThreadUncheckedUpdateWithoutMessagesInput>
  }

  export type DiscussionThreadUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    market?: MarketUpdateOneRequiredWithoutDiscussionNestedInput
  }

  export type DiscussionThreadUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    marketId?: StringFieldUpdateOperationsInput | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketCreateWithoutEmbedsInput = {
    id?: string
    slug: string
    title: string
    description?: string | null
    category?: string | null
    status: string
    resolutionTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutMarketInput
    positions?: PositionCreateNestedManyWithoutMarketInput
    discussion?: DiscussionThreadCreateNestedOneWithoutMarketInput
  }

  export type MarketUncheckedCreateWithoutEmbedsInput = {
    id?: string
    slug: string
    title: string
    description?: string | null
    category?: string | null
    status: string
    resolutionTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutMarketInput
    positions?: PositionUncheckedCreateNestedManyWithoutMarketInput
    discussion?: DiscussionThreadUncheckedCreateNestedOneWithoutMarketInput
  }

  export type MarketCreateOrConnectWithoutEmbedsInput = {
    where: MarketWhereUniqueInput
    create: XOR<MarketCreateWithoutEmbedsInput, MarketUncheckedCreateWithoutEmbedsInput>
  }

  export type MarketUpsertWithoutEmbedsInput = {
    update: XOR<MarketUpdateWithoutEmbedsInput, MarketUncheckedUpdateWithoutEmbedsInput>
    create: XOR<MarketCreateWithoutEmbedsInput, MarketUncheckedCreateWithoutEmbedsInput>
    where?: MarketWhereInput
  }

  export type MarketUpdateToOneWithWhereWithoutEmbedsInput = {
    where?: MarketWhereInput
    data: XOR<MarketUpdateWithoutEmbedsInput, MarketUncheckedUpdateWithoutEmbedsInput>
  }

  export type MarketUpdateWithoutEmbedsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    resolutionTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutMarketNestedInput
    positions?: PositionUpdateManyWithoutMarketNestedInput
    discussion?: DiscussionThreadUpdateOneWithoutMarketNestedInput
  }

  export type MarketUncheckedUpdateWithoutEmbedsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    resolutionTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutMarketNestedInput
    positions?: PositionUncheckedUpdateManyWithoutMarketNestedInput
    discussion?: DiscussionThreadUncheckedUpdateOneWithoutMarketNestedInput
  }

  export type PromptCreateManyUserInput = {
    id?: string
    content: string
    response?: string | null
    tokens?: number | null
    createdAt?: Date | string
  }

  export type TradeCreateManyUserInput = {
    id?: string
    marketDataId: string
    amount: number
    side: string
    status: string
    txHash?: string | null
    createdAt?: Date | string
  }

  export type PromptUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    response?: NullableStringFieldUpdateOperationsInput | string | null
    tokens?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromptUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    response?: NullableStringFieldUpdateOperationsInput | string | null
    tokens?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromptUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    response?: NullableStringFieldUpdateOperationsInput | string | null
    tokens?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TradeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    side?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    txHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    market?: MarketDataUpdateOneRequiredWithoutTradesNestedInput
  }

  export type TradeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    marketDataId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    side?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    txHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TradeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    marketDataId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    side?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    txHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TradeCreateManyMarketInput = {
    id?: string
    userId: string
    amount: number
    side: string
    status: string
    txHash?: string | null
    createdAt?: Date | string
  }

  export type TradeUpdateWithoutMarketInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    side?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    txHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTradesNestedInput
  }

  export type TradeUncheckedUpdateWithoutMarketInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    side?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    txHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TradeUncheckedUpdateManyWithoutMarketInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    side?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    txHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateManyMarketInput = {
    id?: string
    side: string
    price: number
    size: number
    remaining: number
    status: string
    createdAt?: Date | string
  }

  export type PositionCreateManyMarketInput = {
    id?: string
    owner: string
    size: number
    collateralLocked: number
    createdAt?: Date | string
  }

  export type EmbedCreateManyMarketInput = {
    id?: string
    url: string
    type: string
    source: string
    createdAt?: Date | string
  }

  export type OrderUpdateWithoutMarketInput = {
    id?: StringFieldUpdateOperationsInput | string
    side?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    size?: FloatFieldUpdateOperationsInput | number
    remaining?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateWithoutMarketInput = {
    id?: StringFieldUpdateOperationsInput | string
    side?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    size?: FloatFieldUpdateOperationsInput | number
    remaining?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyWithoutMarketInput = {
    id?: StringFieldUpdateOperationsInput | string
    side?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    size?: FloatFieldUpdateOperationsInput | number
    remaining?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PositionUpdateWithoutMarketInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    size?: FloatFieldUpdateOperationsInput | number
    collateralLocked?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PositionUncheckedUpdateWithoutMarketInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    size?: FloatFieldUpdateOperationsInput | number
    collateralLocked?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PositionUncheckedUpdateManyWithoutMarketInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    size?: FloatFieldUpdateOperationsInput | number
    collateralLocked?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmbedUpdateWithoutMarketInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmbedUncheckedUpdateWithoutMarketInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmbedUncheckedUpdateManyWithoutMarketInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiscussionMessageCreateManyThreadInput = {
    id?: string
    userId: string
    role: string
    content: string
    author?: string | null
    createdAt?: Date | string
  }

  export type DiscussionMessageUpdateWithoutThreadInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiscussionMessageUncheckedUpdateWithoutThreadInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiscussionMessageUncheckedUpdateManyWithoutThreadInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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