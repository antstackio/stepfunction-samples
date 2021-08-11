exports.lambdaHandler = async (event, context) => {
    try {
        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'hello world 1',
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};
