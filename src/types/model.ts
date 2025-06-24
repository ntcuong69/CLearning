export type Exercise = {
  EID: number;
  TpID: number;
  Name: string;
  Slug: string;
  Content: string;
  Difficulty: ExerciseDifficulty;
  template?: string | null;
  comment?: Comment[];
  topic?: Topic;
  exerciselike?: ExerciseLike[];
  submission?: Submission[];
  testcase?: Testcase[];
};

export type Submission = {
  SID: number;
  UID: string;
  EID: number;
  Code?: string | null;
  CreatedAt?: Date;
  Result?: SubmissionResult;
  isPublic?: boolean | null;
  exercise?: Exercise;
  user?: User;
  testcaseresult?: TestcaseResult[];
};

export type Testcase = {
  TCID: number;
  EID: number;
  Input: string;
  ExpectedOutput: string;
  isHidden?: boolean | null;
  exercise?: Exercise;
  testcaseresult?: TestcaseResult[];
};

export type TestcaseResult = {
  TCRID: number;
  SID: number;
  TCID: number;
  ActualOutput: string;
  Result: TestcaseResultResult;
  submission?: Submission;
  testcase?: Testcase;
};

export type Topic = {
  TpID: number;
  Name: string;
  Slug: string;
  exercise?: Exercise[];
};

export type User = {
  UID: string;
  Username: string;
  Email: string;
  isVerified?: boolean | null;
  Password: string;
  Role: UserRole;
  CreatedAt?: Date;
  comment?: Comment[];
  commentlike?: CommentLike[];
  exerciselike?: ExerciseLike[];
  friendship_friendship_requesterTouser?: Friendship[];
  friendship_friendship_addresseeTouser?: Friendship[];
  notification_notification_UIDTouser?: Notification[];
  notification_notification_FromUserTouser?: Notification[];
  submission?: Submission[];
};

export type Friendship = {
  FID: number;
  requester: string;
  addressee: string;
  status: FriendshipStatus;
  CreatedAt?: Date;
  user_friendship_requesterTouser?: User;
  user_friendship_addresseeTouser?: User;
};

export type Chapter = {
  CID: number;
  ChapterIndex: number;
  Name: string;
  lesson?: Lesson[];
};

export type Comment = {
  CoID: number;
  UID: string;
  LID?: number | null;
  EID?: number | null;
  Content: string;
  ParentID?: number | null;
  CreatedAt?: Date;
  user?: User;
  lesson?: Lesson;
  exercise?: Exercise;
  commentlike?: CommentLike[];
  notification?: Notification[];
};

export type CommentLike = {
  CLID: number;
  UID: string;
  CoID: number;
  CreatedAt?: Date;
  user?: User;
  comment?: Comment;
};

export type ExerciseLike = {
  ELID: number;
  UID: string;
  EID: number;
  CreatedAt?: Date;
  user?: User;
  exercise?: Exercise;
};

export type Lesson = {
  LID: number;
  CID: number;
  LessonIndex: number;
  Title: string;
  Slug: string;
  comment?: Comment[];
  chapter?: Chapter;
};

export type Notification = {
  NID: number;
  UID: string;
  Type: NotificationType;
  FromUser: string;
  Message: string;
  CoID?: number | null;
  CreatedAt?: Date;
  isRead?: boolean | null;
  user_notification_UIDTouser?: User;
  user_notification_FromUserTouser?: User;
  comment?: Comment;
};

// Enums
export enum ExerciseDifficulty {
  Easy = "Easy",
  Medium = "Medium",
  Hard = "Hard",
}

export enum UserRole {
  User = "User",
  Admin = "Admin",
}

export enum SubmissionResult {
  Pass = "Pass",
  Fail = "Fail",
  Pending = "Pending",
}

export enum FriendshipStatus {
  Pending = "Pending",
  Accepted = "Accepted",
}

export enum TestcaseResultResult {
  Correct = "Correct",
  Partial = "Partial",
  Wrong = "Wrong",
  Error = "Error",
  Pending = "Pending",
}

export enum NotificationType {
  Comment = "Comment",
  Friendship = "Friendship",
  Like = "Like",
}