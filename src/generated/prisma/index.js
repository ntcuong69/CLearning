
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
} = require('./runtime/library.js')


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




  const path = require('path')

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
  SPIID: 'SPIID',
  Name: 'Name',
  Slug: 'Slug',
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
  Result: 'Result'
};

exports.Prisma.TopicScalarFieldEnum = {
  TpID: 'TpID',
  Name: 'Name',
  Slug: 'Slug'
};

exports.Prisma.UserScalarFieldEnum = {
  UID: 'UID',
  Username: 'Username',
  Email: 'Email',
  isVerified: 'isVerified',
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

exports.Prisma.ChapterScalarFieldEnum = {
  CID: 'CID',
  ChapterIndex: 'ChapterIndex',
  Name: 'Name'
};

exports.Prisma.CommentScalarFieldEnum = {
  CoID: 'CoID',
  UID: 'UID',
  LID: 'LID',
  EID: 'EID',
  Content: 'Content',
  CreatedAt: 'CreatedAt'
};

exports.Prisma.CommentlikeScalarFieldEnum = {
  CLID: 'CLID',
  UID: 'UID',
  CoID: 'CoID',
  CreatedAt: 'CreatedAt'
};

exports.Prisma.ExerciselikeScalarFieldEnum = {
  ELID: 'ELID',
  UID: 'UID',
  EID: 'EID',
  CreatedAt: 'CreatedAt'
};

exports.Prisma.LessonScalarFieldEnum = {
  LID: 'LID',
  CID: 'CID',
  LessonIndex: 'LessonIndex',
  Title: 'Title',
  Slug: 'Slug'
};

exports.Prisma.NotificationScalarFieldEnum = {
  NID: 'NID',
  UID: 'UID',
  Type: 'Type',
  FromUser: 'FromUser',
  Message: 'Message',
  CoID: 'CoID',
  CreatedAt: 'CreatedAt',
  isRead: 'isRead'
};

exports.Prisma.StudyplanScalarFieldEnum = {
  SPID: 'SPID',
  Name: 'Name',
  Description: 'Description',
  StartTime: 'StartTime',
  EndTime: 'EndTime',
  Icon: 'Icon',
  Slug: 'Slug'
};

exports.Prisma.StudyplanitemScalarFieldEnum = {
  SPIID: 'SPIID',
  SPID: 'SPID',
  Name: 'Name'
};

exports.Prisma.ExerciseprogressScalarFieldEnum = {
  ID: 'ID',
  UID: 'UID',
  EID: 'EID',
  Status: 'Status',
  UpdatedAt: 'UpdatedAt'
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
  Name: 'Name',
  Slug: 'Slug',
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
  Name: 'Name',
  Slug: 'Slug'
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

exports.Prisma.chapterOrderByRelevanceFieldEnum = {
  Name: 'Name'
};

exports.Prisma.commentOrderByRelevanceFieldEnum = {
  UID: 'UID',
  Content: 'Content'
};

exports.Prisma.commentlikeOrderByRelevanceFieldEnum = {
  UID: 'UID'
};

exports.Prisma.exerciselikeOrderByRelevanceFieldEnum = {
  UID: 'UID'
};

exports.Prisma.lessonOrderByRelevanceFieldEnum = {
  Title: 'Title',
  Slug: 'Slug'
};

exports.Prisma.notificationOrderByRelevanceFieldEnum = {
  UID: 'UID',
  FromUser: 'FromUser',
  Message: 'Message'
};

exports.Prisma.studyplanOrderByRelevanceFieldEnum = {
  Name: 'Name',
  Description: 'Description',
  Icon: 'Icon',
  Slug: 'Slug'
};

exports.Prisma.studyplanitemOrderByRelevanceFieldEnum = {
  Name: 'Name'
};

exports.Prisma.exerciseprogressOrderByRelevanceFieldEnum = {
  UID: 'UID'
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

exports.notification_Type = exports.$Enums.notification_Type = {
  Comment: 'Comment',
  Friendship: 'Friendship',
  Like: 'Like'
};

exports.exerciseprogress_Status = exports.$Enums.exerciseprogress_Status = {
  Attempting: 'Attempting',
  Solved: 'Solved'
};

exports.Prisma.ModelName = {
  exercise: 'exercise',
  submission: 'submission',
  testcase: 'testcase',
  testcaseresult: 'testcaseresult',
  topic: 'topic',
  user: 'user',
  friendship: 'friendship',
  chapter: 'chapter',
  comment: 'comment',
  commentlike: 'commentlike',
  exerciselike: 'exerciselike',
  lesson: 'lesson',
  notification: 'notification',
  studyplan: 'studyplan',
  studyplanitem: 'studyplanitem',
  exerciseprogress: 'exerciseprogress'
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
  "inlineSchema": "generator client {\n  provider = \"prisma-client-js\"\n  output   = \"../src/generated/prisma\"\n}\n\ndatasource db {\n  provider = \"mysql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel exercise {\n  EID              Int                 @id @default(autoincrement())\n  TpID             Int?\n  SPIID            Int?\n  Name             String              @db.VarChar(50)\n  Slug             String              @unique(map: \"Slug\") @db.VarChar(50)\n  Content          String              @db.Text\n  Difficulty       exercise_Difficulty @default(Easy)\n  template         String?             @db.Text\n  comment          comment[]\n  topic            topic?              @relation(fields: [TpID], references: [TpID], onDelete: NoAction, onUpdate: NoAction, map: \"exercise_ibfk_1\")\n  studyplanitem    studyplanitem?      @relation(fields: [SPIID], references: [SPIID], onDelete: NoAction, onUpdate: NoAction, map: \"exercise_ibfk_2\")\n  exerciselike     exerciselike[]\n  exerciseprogress exerciseprogress[]\n  submission       submission[]\n  testcase         testcase[]\n\n  @@index([TpID], map: \"TpID\")\n  @@index([SPIID], map: \"SPIID\")\n}\n\nmodel submission {\n  SID            Int                @id @default(autoincrement())\n  UID            String             @db.Char(36)\n  EID            Int\n  Code           String?            @db.Text\n  CreatedAt      DateTime?          @default(now()) @db.Timestamp(0)\n  Result         submission_Result? @default(Pending)\n  isPublic       Boolean?           @default(false)\n  exercise       exercise           @relation(fields: [EID], references: [EID], onDelete: NoAction, onUpdate: NoAction, map: \"submission_ibfk_1\")\n  user           user               @relation(fields: [UID], references: [UID], onDelete: NoAction, onUpdate: NoAction, map: \"submission_ibfk_2\")\n  testcaseresult testcaseresult[]\n\n  @@index([EID], map: \"EID\")\n  @@index([UID], map: \"UID\")\n}\n\nmodel testcase {\n  TCID           Int              @id @default(autoincrement())\n  EID            Int\n  Input          String?          @db.Text\n  ExpectedOutput String           @db.Text\n  isHidden       Boolean?         @default(false)\n  exercise       exercise         @relation(fields: [EID], references: [EID], onDelete: NoAction, onUpdate: NoAction, map: \"testcase_ibfk_1\")\n  testcaseresult testcaseresult[]\n\n  @@index([EID], map: \"EID\")\n}\n\nmodel testcaseresult {\n  TCRID        Int                   @id @default(autoincrement())\n  SID          Int\n  TCID         Int\n  ActualOutput String                @db.Text\n  Result       testcaseresult_Result @default(Pending)\n  submission   submission            @relation(fields: [SID], references: [SID], onDelete: NoAction, onUpdate: NoAction, map: \"testcaseresult_ibfk_1\")\n  testcase     testcase              @relation(fields: [TCID], references: [TCID], onDelete: NoAction, onUpdate: NoAction, map: \"testcaseresult_ibfk_2\")\n\n  @@index([SID], map: \"SID\")\n  @@index([TCID], map: \"TCID\")\n}\n\nmodel topic {\n  TpID     Int        @id @default(autoincrement())\n  Name     String     @db.VarChar(50)\n  Slug     String     @unique(map: \"Slug\") @db.VarChar(50)\n  exercise exercise[]\n}\n\nmodel user {\n  UID                                      String             @id @default(dbgenerated(\"(uuid())\")) @db.Char(36)\n  Username                                 String             @db.VarChar(50)\n  Email                                    String             @unique(map: \"Email\") @db.VarChar(50)\n  isVerified                               Boolean?           @default(false)\n  Password                                 String             @db.VarChar(255)\n  Role                                     user_Role          @default(User)\n  CreatedAt                                DateTime?          @default(now()) @db.Timestamp(0)\n  comment                                  comment[]\n  commentlike                              commentlike[]\n  exerciselike                             exerciselike[]\n  exerciseprogress                         exerciseprogress[]\n  friendship_friendship_requesterTouser    friendship[]       @relation(\"friendship_requesterTouser\")\n  friendship_friendship_addresseeTouser    friendship[]       @relation(\"friendship_addresseeTouser\")\n  notification_notification_UIDTouser      notification[]     @relation(\"notification_UIDTouser\")\n  notification_notification_FromUserTouser notification[]     @relation(\"notification_FromUserTouser\")\n  submission                               submission[]\n}\n\nmodel friendship {\n  FID                             Int               @id @default(autoincrement())\n  requester                       String            @db.Char(36)\n  addressee                       String            @db.Char(36)\n  status                          friendship_status @default(Pending)\n  CreatedAt                       DateTime?         @default(now()) @db.Timestamp(0)\n  user_friendship_requesterTouser user              @relation(\"friendship_requesterTouser\", fields: [requester], references: [UID], onDelete: NoAction, onUpdate: NoAction, map: \"friendship_ibfk_1\")\n  user_friendship_addresseeTouser user              @relation(\"friendship_addresseeTouser\", fields: [addressee], references: [UID], onDelete: NoAction, onUpdate: NoAction, map: \"friendship_ibfk_2\")\n\n  @@unique([requester, addressee], map: \"requester\")\n  @@index([addressee], map: \"addressee\")\n}\n\nmodel chapter {\n  CID          Int      @id @default(autoincrement())\n  ChapterIndex Int\n  Name         String   @db.VarChar(50)\n  lesson       lesson[]\n}\n\nmodel comment {\n  CoID         Int            @id @default(autoincrement())\n  UID          String         @db.Char(36)\n  LID          Int?\n  EID          Int?\n  Content      String         @db.Text\n  CreatedAt    DateTime?      @default(now()) @db.Timestamp(0)\n  user         user           @relation(fields: [UID], references: [UID], onDelete: NoAction, onUpdate: NoAction, map: \"comment_ibfk_1\")\n  lesson       lesson?        @relation(fields: [LID], references: [LID], onDelete: NoAction, onUpdate: NoAction, map: \"comment_ibfk_2\")\n  exercise     exercise?      @relation(fields: [EID], references: [EID], onDelete: NoAction, onUpdate: NoAction, map: \"comment_ibfk_3\")\n  commentlike  commentlike[]\n  notification notification[]\n\n  @@index([EID], map: \"EID\")\n  @@index([LID], map: \"LID\")\n  @@index([UID], map: \"UID\")\n}\n\nmodel commentlike {\n  CLID      Int       @id @default(autoincrement())\n  UID       String    @db.Char(36)\n  CoID      Int\n  CreatedAt DateTime? @default(now()) @db.Timestamp(0)\n  user      user      @relation(fields: [UID], references: [UID], onDelete: NoAction, onUpdate: NoAction, map: \"commentlike_ibfk_1\")\n  comment   comment   @relation(fields: [CoID], references: [CoID], onDelete: NoAction, onUpdate: NoAction, map: \"commentlike_ibfk_2\")\n\n  @@unique([UID, CoID], map: \"UID\")\n  @@index([CoID], map: \"CoID\")\n}\n\nmodel exerciselike {\n  ELID      Int       @id @default(autoincrement())\n  UID       String    @db.Char(36)\n  EID       Int\n  CreatedAt DateTime? @default(now()) @db.Timestamp(0)\n  user      user      @relation(fields: [UID], references: [UID], onDelete: NoAction, onUpdate: NoAction, map: \"exerciselike_ibfk_1\")\n  exercise  exercise  @relation(fields: [EID], references: [EID], onDelete: NoAction, onUpdate: NoAction, map: \"exerciselike_ibfk_2\")\n\n  @@unique([UID, EID], map: \"UID\")\n  @@index([EID], map: \"EID\")\n}\n\nmodel lesson {\n  LID         Int       @id @default(autoincrement())\n  CID         Int\n  LessonIndex Int\n  Title       String    @db.VarChar(100)\n  Slug        String    @unique(map: \"Slug\") @db.VarChar(50)\n  comment     comment[]\n  chapter     chapter   @relation(fields: [CID], references: [CID], onDelete: NoAction, onUpdate: NoAction, map: \"lesson_ibfk_1\")\n\n  @@index([CID], map: \"CID\")\n}\n\nmodel notification {\n  NID                              Int               @id @default(autoincrement())\n  UID                              String            @db.Char(36)\n  Type                             notification_Type\n  FromUser                         String            @db.Char(36)\n  Message                          String            @db.Text\n  CoID                             Int?\n  CreatedAt                        DateTime?         @default(now()) @db.Timestamp(0)\n  isRead                           Boolean?          @default(false)\n  user_notification_UIDTouser      user              @relation(\"notification_UIDTouser\", fields: [UID], references: [UID], onDelete: NoAction, onUpdate: NoAction, map: \"notification_ibfk_1\")\n  user_notification_FromUserTouser user              @relation(\"notification_FromUserTouser\", fields: [FromUser], references: [UID], onDelete: NoAction, onUpdate: NoAction, map: \"notification_ibfk_2\")\n  comment                          comment?          @relation(fields: [CoID], references: [CoID], onDelete: NoAction, onUpdate: NoAction, map: \"notification_ibfk_3\")\n\n  @@index([CoID], map: \"CoID\")\n  @@index([FromUser], map: \"FromUser\")\n  @@index([UID], map: \"UID\")\n}\n\nmodel studyplan {\n  SPID          Int             @id @default(autoincrement())\n  Name          String          @db.VarChar(50)\n  Description   String          @db.Text\n  StartTime     DateTime?       @db.Timestamp(0)\n  EndTime       DateTime?       @db.Timestamp(0)\n  Icon          String?         @db.VarChar(100)\n  Slug          String?         @unique(map: \"Slug\") @db.VarChar(50)\n  studyplanitem studyplanitem[]\n}\n\nmodel studyplanitem {\n  SPIID     Int        @id @default(autoincrement())\n  SPID      Int\n  Name      String     @db.VarChar(50)\n  exercise  exercise[]\n  studyplan studyplan  @relation(fields: [SPID], references: [SPID], onDelete: NoAction, onUpdate: NoAction, map: \"studyplanitem_ibfk_1\")\n\n  @@index([SPID], map: \"SPID\")\n}\n\nmodel exerciseprogress {\n  ID        Int                      @id @default(autoincrement())\n  UID       String                   @db.Char(36)\n  EID       Int\n  Status    exerciseprogress_Status?\n  UpdatedAt DateTime?                @default(now()) @db.DateTime(0)\n  user      user                     @relation(fields: [UID], references: [UID], onDelete: NoAction, onUpdate: NoAction, map: \"exerciseprogress_ibfk_1\")\n  exercise  exercise                 @relation(fields: [EID], references: [EID], onDelete: NoAction, onUpdate: NoAction, map: \"exerciseprogress_ibfk_2\")\n\n  @@unique([UID, EID], map: \"unique_user_exercise\")\n  @@index([EID], map: \"EID\")\n}\n\nenum exercise_Difficulty {\n  Easy\n  Medium\n  Hard\n}\n\nenum user_Role {\n  User\n  Admin\n}\n\nenum submission_Result {\n  Pass\n  Fail\n  Pending\n}\n\nenum friendship_status {\n  Pending\n  Accepted\n}\n\nenum testcaseresult_Result {\n  Correct\n  Partial\n  Wrong\n  Error\n  Pending\n}\n\nenum notification_Type {\n  Comment\n  Friendship\n  Like\n}\n\nenum exerciseprogress_Status {\n  Attempting\n  Solved\n}\n",
  "inlineSchemaHash": "b99dc6e58182030b4df04a0a096dac01b7a216592b3ddc4cccf661d850c60cee",
  "copyEngine": true
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "src/generated/prisma",
    "generated/prisma",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"exercise\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"EID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TpID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SPIID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Slug\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Difficulty\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"exercise_Difficulty\",\"nativeType\":null,\"default\":\"Easy\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"template\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"comment\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"comment\",\"nativeType\":null,\"relationName\":\"commentToexercise\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"topic\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"topic\",\"nativeType\":null,\"relationName\":\"exerciseTotopic\",\"relationFromFields\":[\"TpID\"],\"relationToFields\":[\"TpID\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"studyplanitem\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"studyplanitem\",\"nativeType\":null,\"relationName\":\"exerciseTostudyplanitem\",\"relationFromFields\":[\"SPIID\"],\"relationToFields\":[\"SPIID\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"exerciselike\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"exerciselike\",\"nativeType\":null,\"relationName\":\"exerciseToexerciselike\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"exerciseprogress\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"exerciseprogress\",\"nativeType\":null,\"relationName\":\"exerciseToexerciseprogress\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"submission\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"submission\",\"nativeType\":null,\"relationName\":\"exerciseTosubmission\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"testcase\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"testcase\",\"nativeType\":null,\"relationName\":\"exerciseTotestcase\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"submission\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"SID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"36\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CreatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Result\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"submission_Result\",\"nativeType\":null,\"default\":\"Pending\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isPublic\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"exercise\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"exercise\",\"nativeType\":null,\"relationName\":\"exerciseTosubmission\",\"relationFromFields\":[\"EID\"],\"relationToFields\":[\"EID\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"user\",\"nativeType\":null,\"relationName\":\"submissionTouser\",\"relationFromFields\":[\"UID\"],\"relationToFields\":[\"UID\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"testcaseresult\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"testcaseresult\",\"nativeType\":null,\"relationName\":\"submissionTotestcaseresult\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"testcase\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"TCID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Input\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ExpectedOutput\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isHidden\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"exercise\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"exercise\",\"nativeType\":null,\"relationName\":\"exerciseTotestcase\",\"relationFromFields\":[\"EID\"],\"relationToFields\":[\"EID\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"testcaseresult\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"testcaseresult\",\"nativeType\":null,\"relationName\":\"testcaseTotestcaseresult\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"testcaseresult\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"TCRID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TCID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ActualOutput\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Result\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"testcaseresult_Result\",\"nativeType\":null,\"default\":\"Pending\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"submission\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"submission\",\"nativeType\":null,\"relationName\":\"submissionTotestcaseresult\",\"relationFromFields\":[\"SID\"],\"relationToFields\":[\"SID\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"testcase\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"testcase\",\"nativeType\":null,\"relationName\":\"testcaseTotestcaseresult\",\"relationFromFields\":[\"TCID\"],\"relationToFields\":[\"TCID\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"topic\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"TpID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Slug\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"exercise\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"exercise\",\"nativeType\":null,\"relationName\":\"exerciseTotopic\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"user\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"UID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Char\",[\"36\"]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"(uuid())\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Username\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isVerified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Role\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"user_Role\",\"nativeType\":null,\"default\":\"User\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CreatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"comment\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"comment\",\"nativeType\":null,\"relationName\":\"commentTouser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"commentlike\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"commentlike\",\"nativeType\":null,\"relationName\":\"commentlikeTouser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"exerciselike\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"exerciselike\",\"nativeType\":null,\"relationName\":\"exerciselikeTouser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"exerciseprogress\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"exerciseprogress\",\"nativeType\":null,\"relationName\":\"exerciseprogressTouser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"friendship_friendship_requesterTouser\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"friendship\",\"nativeType\":null,\"relationName\":\"friendship_requesterTouser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"friendship_friendship_addresseeTouser\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"friendship\",\"nativeType\":null,\"relationName\":\"friendship_addresseeTouser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"notification_notification_UIDTouser\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"notification\",\"nativeType\":null,\"relationName\":\"notification_UIDTouser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"notification_notification_FromUserTouser\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"notification\",\"nativeType\":null,\"relationName\":\"notification_FromUserTouser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"submission\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"submission\",\"nativeType\":null,\"relationName\":\"submissionTouser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"friendship\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"FID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"requester\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"36\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"addressee\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"36\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"friendship_status\",\"nativeType\":null,\"default\":\"Pending\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CreatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_friendship_requesterTouser\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"user\",\"nativeType\":null,\"relationName\":\"friendship_requesterTouser\",\"relationFromFields\":[\"requester\"],\"relationToFields\":[\"UID\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_friendship_addresseeTouser\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"user\",\"nativeType\":null,\"relationName\":\"friendship_addresseeTouser\",\"relationFromFields\":[\"addressee\"],\"relationToFields\":[\"UID\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"requester\",\"addressee\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"requester\",\"addressee\"]}],\"isGenerated\":false},\"chapter\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"CID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ChapterIndex\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lesson\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"lesson\",\"nativeType\":null,\"relationName\":\"chapterTolesson\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"comment\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"CoID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"36\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CreatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"user\",\"nativeType\":null,\"relationName\":\"commentTouser\",\"relationFromFields\":[\"UID\"],\"relationToFields\":[\"UID\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lesson\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"lesson\",\"nativeType\":null,\"relationName\":\"commentTolesson\",\"relationFromFields\":[\"LID\"],\"relationToFields\":[\"LID\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"exercise\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"exercise\",\"nativeType\":null,\"relationName\":\"commentToexercise\",\"relationFromFields\":[\"EID\"],\"relationToFields\":[\"EID\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"commentlike\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"commentlike\",\"nativeType\":null,\"relationName\":\"commentTocommentlike\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"notification\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"notification\",\"nativeType\":null,\"relationName\":\"commentTonotification\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"commentlike\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"CLID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"36\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CoID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CreatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"user\",\"nativeType\":null,\"relationName\":\"commentlikeTouser\",\"relationFromFields\":[\"UID\"],\"relationToFields\":[\"UID\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"comment\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"comment\",\"nativeType\":null,\"relationName\":\"commentTocommentlike\",\"relationFromFields\":[\"CoID\"],\"relationToFields\":[\"CoID\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"UID\",\"CoID\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"UID\",\"CoID\"]}],\"isGenerated\":false},\"exerciselike\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"ELID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"36\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CreatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"user\",\"nativeType\":null,\"relationName\":\"exerciselikeTouser\",\"relationFromFields\":[\"UID\"],\"relationToFields\":[\"UID\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"exercise\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"exercise\",\"nativeType\":null,\"relationName\":\"exerciseToexerciselike\",\"relationFromFields\":[\"EID\"],\"relationToFields\":[\"EID\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"UID\",\"EID\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"UID\",\"EID\"]}],\"isGenerated\":false},\"lesson\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"LID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LessonIndex\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Slug\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"comment\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"comment\",\"nativeType\":null,\"relationName\":\"commentTolesson\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"chapter\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"chapter\",\"nativeType\":null,\"relationName\":\"chapterTolesson\",\"relationFromFields\":[\"CID\"],\"relationToFields\":[\"CID\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"notification\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"NID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"36\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"notification_Type\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FromUser\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"36\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Message\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CoID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CreatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isRead\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_notification_UIDTouser\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"user\",\"nativeType\":null,\"relationName\":\"notification_UIDTouser\",\"relationFromFields\":[\"UID\"],\"relationToFields\":[\"UID\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_notification_FromUserTouser\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"user\",\"nativeType\":null,\"relationName\":\"notification_FromUserTouser\",\"relationFromFields\":[\"FromUser\"],\"relationToFields\":[\"UID\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"comment\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"comment\",\"nativeType\":null,\"relationName\":\"commentTonotification\",\"relationFromFields\":[\"CoID\"],\"relationToFields\":[\"CoID\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"studyplan\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"SPID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"StartTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EndTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Icon\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Slug\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"studyplanitem\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"studyplanitem\",\"nativeType\":null,\"relationName\":\"studyplanTostudyplanitem\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"studyplanitem\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"SPIID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SPID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"exercise\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"exercise\",\"nativeType\":null,\"relationName\":\"exerciseTostudyplanitem\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"studyplan\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"studyplan\",\"nativeType\":null,\"relationName\":\"studyplanTostudyplanitem\",\"relationFromFields\":[\"SPID\"],\"relationToFields\":[\"SPID\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"exerciseprogress\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"36\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"exerciseprogress_Status\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UpdatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"user\",\"nativeType\":null,\"relationName\":\"exerciseprogressTouser\",\"relationFromFields\":[\"UID\"],\"relationToFields\":[\"UID\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"exercise\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"exercise\",\"nativeType\":null,\"relationName\":\"exerciseToexerciseprogress\",\"relationFromFields\":[\"EID\"],\"relationToFields\":[\"EID\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"UID\",\"EID\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"UID\",\"EID\"]}],\"isGenerated\":false}},\"enums\":{\"exercise_Difficulty\":{\"values\":[{\"name\":\"Easy\",\"dbName\":null},{\"name\":\"Medium\",\"dbName\":null},{\"name\":\"Hard\",\"dbName\":null}],\"dbName\":null},\"user_Role\":{\"values\":[{\"name\":\"User\",\"dbName\":null},{\"name\":\"Admin\",\"dbName\":null}],\"dbName\":null},\"submission_Result\":{\"values\":[{\"name\":\"Pass\",\"dbName\":null},{\"name\":\"Fail\",\"dbName\":null},{\"name\":\"Pending\",\"dbName\":null}],\"dbName\":null},\"friendship_status\":{\"values\":[{\"name\":\"Pending\",\"dbName\":null},{\"name\":\"Accepted\",\"dbName\":null}],\"dbName\":null},\"testcaseresult_Result\":{\"values\":[{\"name\":\"Correct\",\"dbName\":null},{\"name\":\"Partial\",\"dbName\":null},{\"name\":\"Wrong\",\"dbName\":null},{\"name\":\"Error\",\"dbName\":null},{\"name\":\"Pending\",\"dbName\":null}],\"dbName\":null},\"notification_Type\":{\"values\":[{\"name\":\"Comment\",\"dbName\":null},{\"name\":\"Friendship\",\"dbName\":null},{\"name\":\"Like\",\"dbName\":null}],\"dbName\":null},\"exerciseprogress_Status\":{\"values\":[{\"name\":\"Attempting\",\"dbName\":null},{\"name\":\"Solved\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "src/generated/prisma/query_engine-windows.dll.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "src/generated/prisma/schema.prisma")
