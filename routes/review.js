const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js")
const ExpressErrors = require("../utils/ExpressErros.js")
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {validateReview,isLoggedin,isReviewAuthor} = require("../middleware.js");
const reviewController = require("../controllers/reviews.js");


//reviews
//post reivew route
router.post("/", isLoggedin,validateReview, wrapAsync(reviewController.createReview));  
  
  //delete review route
  router.delete("/:reviewId", isLoggedin,isReviewAuthor, wrapAsync(reviewController.destroyReview)
  );


  module.exports = router;