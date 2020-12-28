const express = require("express");
const axios = require("axios");

const app = express();
const port = 9000 || process.env.PORT;

app.get("/", (req, res) => {
  res.send("This is home route!");
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

// Current token: MnRLkhCXRxrATaXrFRTMkAheFTEGejxUwagMDGJc
// Consumer Key	YsKfxARGgRXqEBDOmDkP
// Consumer Secret	WxvDNaGVHmHdpiwwkWkbNumHkzLFmHoT
// Request Token URL	https://api.discogs.com/oauth/request_token
// Authorize URL	https://www.discogs.com/oauth/authorize
// Access Token URL	https://api.discogs.com/oauth/access_token
