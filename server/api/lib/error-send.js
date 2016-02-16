export default (err, res) => {
  res.writeHead(404, {
    'Content-Type': 'application/json'
  });
  const json = JSON.stringify({
    error: err,
    errorMessage: err.message
  });
  res.end(json);
};
