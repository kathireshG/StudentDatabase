const express = require("express");
const router = express.Router();
const studentSchema = require("../schema/studentSchema");

router.post("/create-student", (req, res, next) => {
  studentSchema.create(req.body, (err, data) => {
    if (err) {
      return next(err);
    } else {
      return res.json(data);
    }
  });
});

router.get("/", (req, res, next) => {
  studentSchema.find((err, data) => {
    if (err) {
      return next(err);
    } else {
      return res.json(data);
    }
  });
});

router.post("/login", (req, res) => {
  const { name, email, password } = req.body;
  studentSchema.findOne({ email: email }).then((student) => {
    if (student) {
      if (student.password === password) {
        res.json("Login Successfull");
      } else {
        res.json("Login Incorrect");
      }
    } else {
      console.log("No Record Exists");
    }
  });
});

router.delete("/delete-student/:id", (req, res, next) => {
  studentSchema.findByIdAndRemove(req.params.id, (err, data) => {
    if (err) {
      return next(err);
    } else {
      return res.json(data);
    }
  });
});

router
  .route("/update-student/:id")
  .get((req, res, next) => {
    studentSchema.findById(req.params.id, (err, data) => {
      if (err) {
        return next(err);
      } else {
        return res.json(data);
      }
    });
  })
  .put((req, res, next) => {
    studentSchema.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      (err, data) => {
        if (err) {
          return next(err);
        } else {
          return res.json(data);
        }
      }
    );
  });

module.exports = router;
