const crypto = require("crypto");
const fs = require("fs");

const decryptFile = (inputFile, outputFile, password) => {
  const key = crypto.createHash("sha256").update(password).digest();
  const encrypted = fs.readFileSync(inputFile);
  const iv = encrypted.slice(0, 16);
  const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
  const decrypted = Buffer.concat([decipher.update(encrypted.slice(16)), decipher.final()]);
  fs.writeFileSync(outputFile, decrypted);
};

decryptFile("public/models/character.enc", "public/models/decrypted.glb", "Character3D#@");
