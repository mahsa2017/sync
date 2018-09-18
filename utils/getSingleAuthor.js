module.exports = function(cb) {
  setTimeout(() => {
    if (cb.name === "test") {
      cb(Error());
    } else {
      cb(null, "AGATHA CHRISTIE");
    }
  }, Math.random() * 1000);
};
