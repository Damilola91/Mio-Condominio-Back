import init from "./db";
import cors from "cors";
import express, { Request, Response } from "express";

const server = express();
const PORT = process.env.PORT || 4253;

server.use(express.json());
server.use(cors());

const start = async () => {
  await init();
  server.listen(PORT, () =>
    console.log(`🚀 Server running at http://localhost:${PORT}`)
  );
};

start();
