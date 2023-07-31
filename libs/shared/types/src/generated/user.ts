


/**
 * EmailLogin
 */
export interface EmailLogin {
  /**
   * email
   */
  email: string;
  /**
   * password
   */
  password: string;
}

/**
 * MeInput
 */
export interface MeInput {
  /**
   * token
   */
  token: string;
}

/**
 * MobileLogin
 */
export interface MobileLogin {
  /**
   * code
   */
  code: string;
  /**
   * mobile
   */
  mobile: string;
}

/**
 * TokenReturn
 */
export interface TokenReturn {
  /**
   * token
   */
  token: string;
}

/**
 * UserCreate
 */
export interface UserCreate {
  /**
   * email
   */
  email: string;
  /**
   * firstName
   */
  firstName: string;
  /**
   * lastName
   */
  lastName: string;
  /**
   * mobile
   */
  mobile: string;
  /**
   * password
   */
  password: string;
}

/**
 * UserDelete
 */
export interface UserDelete {
  /**
   * user_id
   */
  user_id: string;
}

/**
 * UserGet
 */
export interface UserGet {
  /**
   * user_id
   */
  user_id: string;
}

/**
 * UserGetByEmail
 */
export interface UserGetByEmail {
  /**
   * email
   */
  email: string;
}

/**
 * UserGetByMobile
 */
export interface UserGetByMobile {
  /**
   * mobile
   */
  mobile: string;
}

/**
 * UserLogin
 */
export interface UserLogin {
  /**
   * archived
   */
  archived: boolean;
  /**
   * archivedAt
   */
  archivedAt: Date;
  /**
   * archivedBy
   */
  archivedBy: string;
  /**
   * createdAt
   */
  createdAt: Date;
  /**
   * createdBy
   */
  createdBy: string;
  /**
   * email
   */
  email: string;
  /**
   * firstName
   */
  firstName: string;
  /**
   * lastName
   */
  lastName: string;
  /**
   * mobile
   */
  mobile: string;
  /**
   * password
   */
  password?: undefined;
  /**
   * role
   */
  role: 'ADMIN' | 'FREE' | 'PAID';
  /**
   * token
   */
  token: string;
  /**
   * updatedAt
   */
  updatedAt: Date;
  /**
   * updatedBy
   */
  updatedBy: string;
  /**
   * user_id
   */
  user_id: string;
}

/**
 * UserProtected
 */
export interface UserProtected {
  /**
   * archived
   */
  archived: boolean;
  /**
   * archivedAt
   */
  archivedAt: Date;
  /**
   * archivedBy
   */
  archivedBy: string;
  /**
   * createdAt
   */
  createdAt: Date;
  /**
   * createdBy
   */
  createdBy: string;
  /**
   * email
   */
  email: string;
  /**
   * firstName
   */
  firstName: string;
  /**
   * lastName
   */
  lastName: string;
  /**
   * mobile
   */
  mobile: string;
  /**
   * password
   */
  password?: undefined;
  /**
   * role
   */
  role: 'ADMIN' | 'FREE' | 'PAID';
  /**
   * updatedAt
   */
  updatedAt: Date;
  /**
   * updatedBy
   */
  updatedBy: string;
  /**
   * user_id
   */
  user_id: string;
}

/**
 * UserUnprotected
 */
export interface UserUnprotected {
  /**
   * archived
   */
  archived: boolean;
  /**
   * archivedAt
   */
  archivedAt: Date;
  /**
   * archivedBy
   */
  archivedBy: string;
  /**
   * createdAt
   */
  createdAt: Date;
  /**
   * createdBy
   */
  createdBy: string;
  /**
   * email
   */
  email: string;
  /**
   * firstName
   */
  firstName: string;
  /**
   * lastName
   */
  lastName: string;
  /**
   * mobile
   */
  mobile: string;
  /**
   * password
   */
  password: string;
  /**
   * role
   */
  role: 'ADMIN' | 'FREE' | 'PAID';
  /**
   * updatedAt
   */
  updatedAt: Date;
  /**
   * updatedBy
   */
  updatedBy: string;
  /**
   * user_id
   */
  user_id: string;
}

/**
 * UserUpdate
 */
export interface UserUpdate {
  /**
   * email
   */
  email: string;
  /**
   * firstName
   */
  firstName: string;
  /**
   * lastName
   */
  lastName: string;
  /**
   * mobile
   */
  mobile: string;
  /**
   * password
   */
  password: string;
  /**
   * user_id
   */
  user_id: string;
}
