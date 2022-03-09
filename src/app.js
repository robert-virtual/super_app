require("dotenv").config();
const express = require("express");
const { transporter, genPin } = require("./config/mailer");
const app = express();
const port = process.env.PORT || 3000;

//middleware
app.use(express.json());

//routes
app.put("/resetpasswd", async (req, res) => {
  const { email } = req.body;
  let pin = genPin();
  await transporter.sendMail({
    from: `"MyCompany INC <${process.env.GMAIL_USER}>"`,
    to: email,
    subject: "Pin de recuperacion",
    html: `<h1>${pin}</h1>`,
  });
  res.json({ msg: "mail send", pin });
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
