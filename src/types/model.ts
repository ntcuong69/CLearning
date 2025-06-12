export type Exercise = {
  EID: number;
  TpID: number;
  Content: string;
  Difficulty: ExerciseDifficulty;
  template?: string | null;
  topic?: Topic;
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
  ExecutionTime?: number | null;
  submission?: Submission;
  testcase?: Testcase;
};

export type Topic = {
  TpID: number;
  Name: string;
  exercise: Exercise[];
};

export type User = {
  UID: string;
  Username: string;
  Email: string;
  Password: string;
  Role: UserRole;
  CreatedAt?: Date;
  friendship_friendship_requesterTouser?: Friendship[];
  friendship_friendship_addresseeTouser?: Friendship[];
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