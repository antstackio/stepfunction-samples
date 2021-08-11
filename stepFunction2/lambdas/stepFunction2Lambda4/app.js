exports.lambdaHandler = async (event, context) => {
    if (event.Cause)
        event.Cause = JSON.parse(event.Cause)
    return event
};
