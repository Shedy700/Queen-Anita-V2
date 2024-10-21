let options = {
  disables: {
    type: Array,
    default: []
  }
};
const mongoose = require("mongoose");
const GroupSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
    required: true
  },
  events: {
    type: String,
    default: "true"
  },
  nsfw: {
    type: String,
    default: "true"
  },
  pdm: {
    type: String,
    default: "true"
  },
  antipromote: {
    type: String,
    default: "false"
  },
  antidemote: {
    type: String,
    default: "false"
  },
  goodbye: {
    type: String,
    default: global.gdbye
  },
  welcome: {
    type: String,
    default: global.wlcm
  },
  welcometext: {
    type: String,
    default: "*@user @pp welcome to @gname"
  },
  goodbyetext: {
    type: String,
    default: "*@user @pp left @gname"
  },
  botenable: {
    type: String,
    default: "true"
  },
  antilink: {
    type: String,
    default: "true"
  },
  antiword: {
    type: Object,
    default: {}
  },
  antifake: {
    type: String,
    default: "true"
  },
  antispam: {
    type: String,
    default: "true"
  },
  antibot: {
    type: String,
    default: "true"
  },
  antitag: {
    type: String,
    default: "false"
  },
  onlyadmin: {
    type: String,
    default: "false"
  },
  economy: {
    type: String,
    default: "true"
  },
  disablecmds: {
    type: String,
    default: "false"
  },
  chatbot: {
    type: String,
    default: "true"
  },
  mute: {
    type: String,
    default: "true"
  },
  unmute: {
    type: String,
    default: "true"
  },
  ...options
});
const sck = mongoose.model("Sck", GroupSchema);
module.exports = {
  sck: sck
};
