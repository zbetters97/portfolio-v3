import { GoogleAuth } from "google-auth-library";
import { google } from "googleapis";

const authConfig = {
  client_id:
    "372848443884-245al70ovek15hoi1msoovda8kfs1m17.apps.googleusercontent.com",
  client_secret: "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",
  redirect_uri: "YOUR_REDIRECT_URI",
};

export const auth = new GoogleAuth(authConfig);
//export const gmail = google.gmail({ version: "v1", auth });
