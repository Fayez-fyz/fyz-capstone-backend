import express from "express";
import formidable from "express-formidable";

const router = express.Router();

//from middlewares
import { requiresSignin, canEditDeletePost } from "../middlewares";

//from controllers
import {
  createPost,
  uploadImage,
  postByUser,
  userPost,
  updatePost,
  deletePost,
  newsFeed,
  likePost,
  unlikePost,
  addComment,
  removeComment,
  totalPosts,
} from "../controllers/post";

router.post("/create-post", requiresSignin, createPost);
router.post(
  "/upload-image",
  requiresSignin,
  formidable({ maxFileSize: 10 * 1024 * 1024 }),
  uploadImage
);
router.get("/user-posts", requiresSignin, postByUser);
router.get("/user-post/:_id", requiresSignin, userPost);
router.put("/update-post/:_id", requiresSignin, canEditDeletePost, updatePost);
router.delete(
  "/delete-post/:_id",
  requiresSignin,
  canEditDeletePost,
  deletePost
);
router.get("/news-feed/:page", requiresSignin, newsFeed);
router.put("/like-post", requiresSignin, likePost);
router.put("/unlike-post", requiresSignin, unlikePost);
router.put("/add-comment", requiresSignin, addComment);
router.put("/remove-comment", requiresSignin, removeComment);
router.get("/total-posts", totalPosts);

module.exports = router;
