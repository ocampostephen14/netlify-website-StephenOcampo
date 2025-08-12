// netlify/functions/hello.js
exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello, world!", time: new Date().toISOString() })
  };
};
