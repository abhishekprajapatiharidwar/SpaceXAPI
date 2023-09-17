# SpaceX Authentication API Documentation

## Introduction

Welcome to the SpaceX Authentication API documentation. This API serves as an intermediary authentication layer for accessing the SpaceX API. You must provide a valid authentication token to access the SpaceX data at [https://spacexapi.onrender.com/v3/capsules](https://spacexapi.onrender.com/v3/capsules). This documentation will guide you on how to use the SpaceX Authentication API effectively.

## Authentication

To access the SpaceX data, you must first authenticate through this API. You need to include an authentication token in the request body. The token should be sent as a JSON object with the key "token" and your token value as its value.

**Authentication Token Format:**

```json
{
  "token": "your_token_here"
}
