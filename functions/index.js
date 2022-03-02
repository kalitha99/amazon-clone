/* eslint-disable max-len */
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")( "sk_test_51KWFYGDXB1RTaY3BfmZ3lH27lbZFShCU0ykKNsDQCIs56T5ctPxY3iefKP8gqETePjEkZv8brlFOt6k5SnNGZMKK00u4Ry62Wp"
);

// - App config
const app = express();

// - Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
exports.api = functions.https.onRequest(app);

// sample end point = http://localhost:5001/clone-aa4c0/us-central1/api
