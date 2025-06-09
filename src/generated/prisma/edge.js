
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/edge.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}





/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.ExerciseScalarFieldEnum = {
  EID: 'EID',
  TpID: 'TpID',
  Content: 'Content',
  Difficulty: 'Difficulty',
  template: 'template'
};

exports.Prisma.SubmissionScalarFieldEnum = {
  SID: 'SID',
  UID: 'UID',
  EID: 'EID',
  Code: 'Code',
  CreatedAt: 'CreatedAt',
  Result: 'Result',
  isPublic: 'isPublic'
};

exports.Prisma.TestcaseScalarFieldEnum = {
  TCID: 'TCID',
  EID: 'EID',
  Input: 'Input',
  ExpectedOutput: 'ExpectedOutput',
  isHidden: 'isHidden'
};

exports.Prisma.TestcaseresultScalarFieldEnum = {
  TCRID: 'TCRID',
  SID: 'SID',
  TCID: 'TCID',
  ActualOutput: 'ActualOutput',
  Result: 'Result',
  ExecutionTime: 'ExecutionTime'
};

exports.Prisma.TopicScalarFieldEnum = {
  TpID: 'TpID',
  Name: 'Name'
};

exports.Prisma.UserScalarFieldEnum = {
  UID: 'UID',
  Username: 'Username',
  Email: 'Email',
  Password: 'Password',
  Role: 'Role',
  CreatedAt: 'CreatedAt'
};

exports.Prisma.FriendshipScalarFieldEnum = {
  FID: 'FID',
  requester: 'requester',
  addressee: 'addressee',
  status: 'status',
  CreatedAt: 'CreatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.exerciseOrderByRelevanceFieldEnum = {
  Content: 'Content',
  template: 'template'
};

exports.Prisma.submissionOrderByRelevanceFieldEnum = {
  UID: 'UID',
  Code: 'Code'
};

exports.Prisma.testcaseOrderByRelevanceFieldEnum = {
  Input: 'Input',
  ExpectedOutput: 'ExpectedOutput'
};

exports.Prisma.testcaseresultOrderByRelevanceFieldEnum = {
  ActualOutput: 'ActualOutput'
};

exports.Prisma.topicOrderByRelevanceFieldEnum = {
  Name: 'Name'
};

exports.Prisma.userOrderByRelevanceFieldEnum = {
  UID: 'UID',
  Username: 'Username',
  Email: 'Email',
  Password: 'Password'
};

exports.Prisma.friendshipOrderByRelevanceFieldEnum = {
  requester: 'requester',
  addressee: 'addressee'
};
exports.exercise_Difficulty = exports.$Enums.exercise_Difficulty = {
  Easy: 'Easy',
  Medium: 'Medium',
  Hard: 'Hard'
};

exports.user_Role = exports.$Enums.user_Role = {
  User: 'User',
  Admin: 'Admin'
};

exports.submission_Result = exports.$Enums.submission_Result = {
  Pass: 'Pass',
  Fail: 'Fail',
  Pending: 'Pending'
};

exports.friendship_status = exports.$Enums.friendship_status = {
  Pending: 'Pending',
  Accepted: 'Accepted'
};

exports.testcaseresult_Result = exports.$Enums.testcaseresult_Result = {
  Correct: 'Correct',
  Partial: 'Partial',
  Wrong: 'Wrong',
  Error: 'Error',
  Pending: 'Pending'
};

exports.Prisma.ModelName = {
  exercise: 'exercise',
  submission: 'submission',
  testcase: 'testcase',
  testcaseresult: 'testcaseresult',
  topic: 'topic',
  user: 'user',
  friendship: 'friendship'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "D:\\LuanVanTotNghiep\\codechallenge\\src\\generated\\prisma",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "D:\\LuanVanTotNghiep\\codechallenge\\prisma\\schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../../../prisma",
  "clientVersion": "6.6.0",
  "engineVersion": "f676762280b54cd07c770017ed3711ddde35f37a",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider = \"prisma-client-js\"\n  output   = \"../src/generated/prisma\"\n}\n\ndatasource db {\n  provider = \"mysql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel exercise {\n  EID        Int                 @id @default(autoincrement())\n  TpID       Int\n  Content    String              @db.Text\n  Difficulty exercise_Difficulty @default(Easy)\n  template   String?             @db.Text\n  topic      topic               @relation(fields: [TpID], references: [TpID], onDelete: NoAction, onUpdate: NoAction, map: \"exercise_ibfk_1\")\n  submission submission[]\n  testcase   testcase[]\n\n  @@index([TpID], map: \"TpID\")\n}\n\nmodel submission {\n  SID            Int                @id @default(autoincrement())\n  UID            String             @db.Char(36)\n  EID            Int\n  Code           String?            @db.Text\n  CreatedAt      DateTime?          @default(now()) @db.Timestamp(0)\n  Result         submission_Result? @default(Pending)\n  isPublic       Boolean?           @default(false)\n  exercise       exercise           @relation(fields: [EID], references: [EID], onDelete: NoAction, onUpdate: NoAction, map: \"submission_ibfk_1\")\n  user           user               @relation(fields: [UID], references: [UID], onDelete: NoAction, onUpdate: NoAction, map: \"submission_ibfk_2\")\n  testcaseresult testcaseresult[]\n\n  @@index([EID], map: \"EID\")\n  @@index([UID], map: \"UID\")\n}\n\nmodel testcase {\n  TCID           Int              @id @default(autoincrement())\n  EID            Int\n  Input          String           @db.Text\n  ExpectedOutput String           @db.Text\n  isHidden       Boolean?         @default(false)\n  exercise       exercise         @relation(fields: [EID], references: [EID], onDelete: NoAction, onUpdate: NoAction, map: \"testcase_ibfk_1\")\n  testcaseresult testcaseresult[]\n\n  @@index([EID], map: \"EID\")\n}\n\nmodel testcaseresult {\n  TCRID         Int                   @id @default(autoincrement())\n  SID           Int\n  TCID          Int\n  ActualOutput  String                @db.Text\n  Result        testcaseresult_Result @default(Pending)\n  ExecutionTime Float?                @db.Float\n  submission    submission            @relation(fields: [SID], references: [SID], onDelete: NoAction, onUpdate: NoAction, map: \"testcaseresult_ibfk_1\")\n  testcase      testcase              @relation(fields: [TCID], references: [TCID], onDelete: NoAction, onUpdate: NoAction, map: \"testcaseresult_ibfk_2\")\n\n  @@index([SID], map: \"SID\")\n  @@index([TCID], map: \"TCID\")\n}\n\nmodel topic {\n  TpID     Int        @id @default(autoincrement())\n  Name     String     @db.VarChar(50)\n  exercise exercise[]\n}\n\nmodel user {\n  UID                                   String       @id @default(dbgenerated(\"(uuid())\")) @db.Char(36)\n  Username                              String       @db.VarChar(50)\n  Email                                 String       @unique(map: \"Email\") @db.VarChar(50)\n  Password                              String       @db.VarChar(255)\n  Role                                  user_Role    @default(User)\n  CreatedAt                             DateTime?    @default(now()) @db.Timestamp(0)\n  friendship_friendship_requesterTouser friendship[] @relation(\"friendship_requesterTouser\")\n  friendship_friendship_addresseeTouser friendship[] @relation(\"friendship_addresseeTouser\")\n  submission                            submission[]\n}\n\nmodel friendship {\n  FID                             Int               @id @default(autoincrement())\n  requester                       String            @db.Char(36)\n  addressee                       String            @db.Char(36)\n  status                          friendship_status @default(Pending)\n  CreatedAt                       DateTime?         @default(now()) @db.Timestamp(0)\n  user_friendship_requesterTouser user              @relation(\"friendship_requesterTouser\", fields: [requester], references: [UID], onDelete: NoAction, onUpdate: NoAction, map: \"friendship_ibfk_1\")\n  user_friendship_addresseeTouser user              @relation(\"friendship_addresseeTouser\", fields: [addressee], references: [UID], onDelete: NoAction, onUpdate: NoAction, map: \"friendship_ibfk_2\")\n\n  @@unique([requester, addressee], map: \"requester\")\n  @@index([addressee], map: \"addressee\")\n}\n\nenum exercise_Difficulty {\n  Easy\n  Medium\n  Hard\n}\n\nenum user_Role {\n  User\n  Admin\n}\n\nenum submission_Result {\n  Pass\n  Fail\n  Pending\n}\n\nenum friendship_status {\n  Pending\n  Accepted\n}\n\nenum testcaseresult_Result {\n  Correct\n  Partial\n  Wrong\n  Error\n  Pending\n}\n",
  "inlineSchemaHash": "10736ae22931805eb0ba135373ec9254fc290e4b080e7c31e46632a33b2566c8",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"exercise\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"EID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TpID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Difficulty\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"exercise_Difficulty\",\"nativeType\":null,\"default\":\"Easy\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"template\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"topic\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"topic\",\"nativeType\":null,\"relationName\":\"exerciseTotopic\",\"relationFromFields\":[\"TpID\"],\"relationToFields\":[\"TpID\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"submission\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"submission\",\"nativeType\":null,\"relationName\":\"exerciseTosubmission\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"testcase\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"testcase\",\"nativeType\":null,\"relationName\":\"exerciseTotestcase\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"submission\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"SID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"36\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CreatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Result\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"submission_Result\",\"nativeType\":null,\"default\":\"Pending\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isPublic\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"exercise\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"exercise\",\"nativeType\":null,\"relationName\":\"exerciseTosubmission\",\"relationFromFields\":[\"EID\"],\"relationToFields\":[\"EID\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"user\",\"nativeType\":null,\"relationName\":\"submissionTouser\",\"relationFromFields\":[\"UID\"],\"relationToFields\":[\"UID\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"testcaseresult\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"testcaseresult\",\"nativeType\":null,\"relationName\":\"submissionTotestcaseresult\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"testcase\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"TCID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Input\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ExpectedOutput\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isHidden\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"exercise\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"exercise\",\"nativeType\":null,\"relationName\":\"exerciseTotestcase\",\"relationFromFields\":[\"EID\"],\"relationToFields\":[\"EID\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"testcaseresult\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"testcaseresult\",\"nativeType\":null,\"relationName\":\"testcaseTotestcaseresult\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"testcaseresult\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"TCRID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TCID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ActualOutput\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Result\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"testcaseresult_Result\",\"nativeType\":null,\"default\":\"Pending\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ExecutionTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":[\"Float\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"submission\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"submission\",\"nativeType\":null,\"relationName\":\"submissionTotestcaseresult\",\"relationFromFields\":[\"SID\"],\"relationToFields\":[\"SID\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"testcase\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"testcase\",\"nativeType\":null,\"relationName\":\"testcaseTotestcaseresult\",\"relationFromFields\":[\"TCID\"],\"relationToFields\":[\"TCID\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"topic\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"TpID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"exercise\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"exercise\",\"nativeType\":null,\"relationName\":\"exerciseTotopic\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"user\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"UID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Char\",[\"36\"]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"(uuid())\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Username\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Role\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"user_Role\",\"nativeType\":null,\"default\":\"User\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CreatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"friendship_friendship_requesterTouser\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"friendship\",\"nativeType\":null,\"relationName\":\"friendship_requesterTouser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"friendship_friendship_addresseeTouser\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"friendship\",\"nativeType\":null,\"relationName\":\"friendship_addresseeTouser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"submission\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"submission\",\"nativeType\":null,\"relationName\":\"submissionTouser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"friendship\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"FID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"requester\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"36\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"addressee\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"36\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"friendship_status\",\"nativeType\":null,\"default\":\"Pending\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CreatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_friendship_requesterTouser\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"user\",\"nativeType\":null,\"relationName\":\"friendship_requesterTouser\",\"relationFromFields\":[\"requester\"],\"relationToFields\":[\"UID\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_friendship_addresseeTouser\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"user\",\"nativeType\":null,\"relationName\":\"friendship_addresseeTouser\",\"relationFromFields\":[\"addressee\"],\"relationToFields\":[\"UID\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"requester\",\"addressee\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"requester\",\"addressee\"]}],\"isGenerated\":false}},\"enums\":{\"exercise_Difficulty\":{\"values\":[{\"name\":\"Easy\",\"dbName\":null},{\"name\":\"Medium\",\"dbName\":null},{\"name\":\"Hard\",\"dbName\":null}],\"dbName\":null},\"user_Role\":{\"values\":[{\"name\":\"User\",\"dbName\":null},{\"name\":\"Admin\",\"dbName\":null}],\"dbName\":null},\"submission_Result\":{\"values\":[{\"name\":\"Pass\",\"dbName\":null},{\"name\":\"Fail\",\"dbName\":null},{\"name\":\"Pending\",\"dbName\":null}],\"dbName\":null},\"friendship_status\":{\"values\":[{\"name\":\"Pending\",\"dbName\":null},{\"name\":\"Accepted\",\"dbName\":null}],\"dbName\":null},\"testcaseresult_Result\":{\"values\":[{\"name\":\"Correct\",\"dbName\":null},{\"name\":\"Partial\",\"dbName\":null},{\"name\":\"Wrong\",\"dbName\":null},{\"name\":\"Error\",\"dbName\":null},{\"name\":\"Pending\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

