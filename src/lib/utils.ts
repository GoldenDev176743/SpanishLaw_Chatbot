import { customAlphabet } from "nanoid";

export const nanoId = customAlphabet(
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  10
); // 10-character random string
