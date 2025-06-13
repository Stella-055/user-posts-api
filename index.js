import express from "express";
import { PrismaClient } from "@prisma/client";
const app = express();
app.use(express.json());
const prisma = new PrismaClient();

app.get("/", (_req, res) => {
  res.send("<h1> Welcome user </h1>");
});

app.post("/users", async (req, res) => {
  try {
    const { firstName, lastName, emailAddress, username } = req.body;
    const user = await prisma.users.create({
      data: { firstName, lastName, emailAddress, username },
    });
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
});

app.get("/users", async (_req, res) => {
  try {
    const user = await prisma.users.findMany({
      include: {
        posts: true,
      },
    });
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
});

app.get("/users:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await prisma.users.findFirst({
      where: { id },
      include: {
        posts: true,
      },
    });
    user
      ? res.json(user)
      : res.json({ message: "something might have gone wrong" });
  } catch (error) {
    console.log(error);
  }
});

app.post("/posts", async (req, res) => {
  try {
    const { title, content, userId } = req.body;
    const post = await prisma.posts.create({
      data: { title, content, userId },
    });
    res.status(200).json(post);
  } catch (error) {
    console.log(error);
  }
});

app.get("/posts", async (_req, res) => {
  try {
    const post = await prisma.posts.findMany({
      include: {
        user: true,
      },
    });
    res.status(200).json(post);
  } catch (error) {
    console.log(error);
  }
});

app.get("/posts:id", async (req, res) => {
  try {
    const { id } = req.params;
    const post = await prisma.posts.findFirst({
      where: { id },
      include: {
        user: true,
      },
    });
    post
      ? res.json(post)
      : res.json({ message: "something might have gone wrong" });
  } catch (error) {
    console.log(error);
  }
});

app.put("/posts:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, isDeleted } = req.body;
    const updatedPost = await prisma.posts.findFirst({
      where: { id },
      data: { title, content, isDeleted },
    });
    updatedPost
      ? res.json(updatedPost)
      : res.json({ message: "something must have gone wrong" });
  } catch (error) {
    console.log(error);
  }
});

app.delete("/posts:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletedPost = await prisma.posts.delete({
      where: { id },
    });
    deletedPost
      ? res.json(deletedPost)
      : res.json({ message: "Unable to delete , something went wrong " });
  } catch (error) {
    console.log(error);
  }
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("server is up and running");
});
