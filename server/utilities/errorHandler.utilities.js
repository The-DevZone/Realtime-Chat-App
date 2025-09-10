class ErrorHandler extends Error {

    constructor(message, statuscode) {
        super(message) // Call the parent Error constructor with the message
        this.statuscode = statuscode
        Error.captureStackTrace(this, this.constructor) // Capture the stack trace for better debugging
    }
}

export default ErrorHandler;