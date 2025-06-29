
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


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

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

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
  SPIID: 'SPIID',
  Name: 'Name',
  Slug: 'Slug',
  Content: 'Content',
  Difficulty: 'Difficulty',
  template: 'template',
  status: 'status'
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
exports.exercise_Difficulty = exports.$Enums.exercise_Difficulty = {
  Easy: 'Easy',
  Medium: 'Medium',
  Hard: 'Hard'
};

exports.exercise_status = exports.$Enums.exercise_status = {
  Solved: 'Solved',
  Unattempted: 'Unattempted'
};

exports.submission_Result = exports.$Enums.submission_Result = {
  Pass: 'Pass',
  Fail: 'Fail',
  Pending: 'Pending'
};

exports.testcaseresult_Result = exports.$Enums.testcaseresult_Result = {
  Correct: 'Correct',
  Partial: 'Partial',
  Wrong: 'Wrong',
  Error: 'Error',
  Pending: 'Pending'
};

exports.user_Role = exports.$Enums.user_Role = {
  User: 'User',
  Admin: 'Admin'
};

exports.friendship_status = exports.$Enums.friendship_status = {
  Pending: 'Pending',
  Accepted: 'Accepted'
};

exports.notification_Type = exports.$Enums.notification_Type = {
  Comment: 'Comment',
  Friendship: 'Friendship',
  Like: 'Like'
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
  studyplanitem: 'studyplanitem'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
