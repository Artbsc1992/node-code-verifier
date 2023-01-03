/**
 * Basic JSON response for controllers.
 */

export type BasicResponse = {
  message: string,
};

/**
 * Error JSON response for controllers.
 */
export type ErrorResponse = {
  error: string,
  message: string,
};

/**
 * goodbye response
 */
export type GoodbyeResponse = {
  message : string,
  date : Date
}