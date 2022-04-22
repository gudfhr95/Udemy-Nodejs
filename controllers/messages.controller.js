function getMessages(req, res) {
  res.send("<ul><li>Helloo Albert!</li></ul>");
}

function postMessage(req, res) {
  console.log("Updating messgaes...");
}

module.exports = {
  getMessages,
  postMessage,
};
