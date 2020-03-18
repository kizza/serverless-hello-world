import { APIGatewayEvent } from "aws-lambda";

export const world = async (event: APIGatewayEvent) => ({
  statusCode: 200,
  body: JSON.stringify({
    message: "Hello world",
    input: event
  })
});
