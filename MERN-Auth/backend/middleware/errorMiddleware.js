const notFound = (req, res, next) => {
    const error = new Error(`Not Found: ${req.originalUrl}`);
    req.status(404);
    next(error);
};

const errorHandler = (error, req, res, next) => {
    let statusCode = res.statusCode === 200 ? 500 : req.statusCode;
    let message = error.message;

    if (err.name === "CasteError" && err.kind === "ObjectId") {
        statusCode = 404;
        message = "Resource not found";
    }

    res.status(statusCode).json({
        message,
        stack: process.env.NODE_ENV === "production" ? null : err.stack,
    });
};

export { notFound, errorHandler };
