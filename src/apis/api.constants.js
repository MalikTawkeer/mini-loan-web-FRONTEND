export const API_BASE_URL = "http://localhost:5000/";

// AUTH APIS
export const LOGIN_ENDPOINT = "api/auth/login";
export const REGISTER_ENDPOINT = "api/auth/register";

// LOAN APIS
export const RETRIVE_USER_LOANS_ENDPOINT = "api/loan/applications";
export const CREATE_LOAN_REQ_ENDPOINT = "api/loan/applications";
export const RETRIVE_LOAN_REPAYMENTS_ENDPOINT =
  "api/repayment/loans/repayments/history/67485bedfdb3bdb6246a7b14"; // loanID

// REPAYMENT APIS
export const PAY_LOAN_REPAYMENT_ENDPOINT = "api/repayment/loans/repayments/"; // loanId/repaymentId

//************** */ ADMIN ENDPONINTS
export const RETRIVE_LOANS_BY_LOAN_STATUS =
  "api/loan/admin/loans/status"; //?status=PENDING

export const APPROVE_LOAN_BY_LOAN_ID =
  "api/loan/admin/loans/approve/";
