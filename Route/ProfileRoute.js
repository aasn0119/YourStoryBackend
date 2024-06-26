const express = require("express");
const { protect } = require("../middleware/authmiddleware");
const {
  FetchProfileDetail,
  UpdateProfileDetail,
  MatchProfile,
  AddMentors,
  RemoveMentors,
  MyAllMentors,
} = require("../Controller/ProfileContainer");
const router = express.Router();
router.route("/update/:id").put(UpdateProfileDetail);
router.route("/:id").get(protect, FetchProfileDetail);
router.route("/suggestion/:userId").get(MatchProfile);
router.route("/add-mentors/:userId").post(AddMentors);
router.route("/remove-mentor/:userId").delete(RemoveMentors);
router.route("/my-mentors/:userId").get(MyAllMentors);
module.exports = router;
