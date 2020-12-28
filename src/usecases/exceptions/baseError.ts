// import ErrorObject from "./errorObject";
// import ErrorSeverity from "./errorSeverity";
// import IssueType from "./issueType";

// export default abstract class BaseError extends Error {
//   public stack: any;
//   public reason: string;
//   public data: any;
//   public code: string;
//   public diagnostics?: string;
//   public severity: ErrorSeverity;
//   public issue: IssueType;

//   constructor(errorObj: ErrorObject,  data: any = {}) {
//     super(errorObj.message);

//     this.code = errorObj.code;
//     this.diagnostics = errorObj.diagnostics;
//     this.severity = errorObj.severity;
//     this.issue = errorObj.issue;
//     this.data = data;
//     this.reason = errorObj.error.message;
//     this.stack = errorObj.error.stack;
//   }
// }
