const asyncHandler = (requestHandler) => {
    Promise.resolve(requestHandler(req, res, next))
        .catch((err) => next(err))
}

export { asyncHandler }


// Second method for asyncHandler
// const asyncHandler = (requestHandler) => async (req, res, next) => {
//     try {
//         await requestHandler(req, res, next);

//     } catch (error) {
//         console.log(error);
//     }

// }