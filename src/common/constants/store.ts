export enum Role {
    SYS_ADMIN = 'SYS_ADMIN',
    RND_EXPERT = 'RND_EXPERT',
    INDIVIDUAL = 'INDIVIDUAL',
    COMPANY = 'COMPANY',
    COLLABORATOR = 'COLLABORATOR',
    SUB_INDIVIDUAL = 'SUB_INDIVIDUAL'
  }

export enum STATUS {
    IDLE ="IDLE",
    PENDING = "PENDING",
    SUCCEEDED = "SUCCEEDED",
    FAILED = "FAILED"
}

export enum UnAuthorized {
  text="Your access token has been expired please login again",
  error="token_decode_unauthorized"
}

export enum VeriffStatus {
  IDLE="user_verification_not_started",
  CREATED="user_verification_created",
  STARTED="user_verification_started",
  SUBMITTED="user_verification_submitted",
  APPROVED="",
  DECLINED="user_verification_declined",
  MESSAGE="You're not verified, Please verfiy your account.",
}