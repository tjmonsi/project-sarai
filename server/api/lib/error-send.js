export default (err, res) => {
  res.writeHead(500, {
    'Content-Type': 'application/json'
  });
  const json = JSON.stringify({
    error: err
  });
  res.end(json);
};
