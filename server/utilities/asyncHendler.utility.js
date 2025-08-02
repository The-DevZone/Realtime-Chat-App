
export const asyncHandler = (fn) => (req, res, next) => { // req, res ka order galat tha
  Promise.resolve(fn(req, res, next)).catch((error) => next(error))
}
