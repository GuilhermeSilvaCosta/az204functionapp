module.exports = async function (context, req) {
    context.log('Javascript HTTP trigger function processed a request')

    const name = req.query.name || 'world!';

    const message = `Hello ${name}`;

    context.res = {
        status: 200,
        body: message
    }
}