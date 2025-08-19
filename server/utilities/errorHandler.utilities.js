class ErrorHandler extends Error {
    constructor(message, statuscode) {
        super(message)
        this.statuscode = statuscode
        Error.captureStackTrace(this, this.constructor)
    }
}

// export const ErrorHandler = ErrorHandler
export default ErrorHandler;