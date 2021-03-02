import nodemailer from "nodemailer";

import { server } from "./config/GlobalSettings";
import "./config/settings";
import routes from "./api/routes";

const port: number = parseInt(<string>process.env.PORT) || 5000;

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "XXX",
    pass: "XX",
  },
});

server.use(routes);

server.listen(port, () => console.log(`Server listening on port ${port}...`));
