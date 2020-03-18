export const world = async (event: any) => ({
  statusCode: 200,
  body: JSON.stringify({
    message: "Hello world",
    input: event
  })
});
