const express = require("express");
const app = express();

app.get("/api/timestamp/:date?", (req, res, next) => {
  let param = req.params.date;
  console.log(req.params);
  console.log(param);
  let date;
  if (param == undefined) {
    date = new Date();
  } else {
    date = new Date(param);
  }

  console.log(date);
  if (date.toString() == "Invalid Date") {
    res.json({ error: "Invalid Date" });
  } else {
    res.json({
      unix: date.getTime(),
      utc: date.toUTCString()
    });
  }

  /* if (validatedDate) {
    if (validatedDate == "") {
      validatedDate = new Date().toISOString();
    }

    res.json({
      unix: validatedDate.getTime(),
      utc: validatedDate.toUTCString()
    });
  } else {
    res.json({ error: "Invalid Date" });
  } */
});

app.listen(3000, () => console.log("Server running on port 3000"));
