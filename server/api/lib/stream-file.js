import errorSend from './error-send';

export default (file, metadata, res) => {
  const {contentType, size, cacheControl, contentEncoding,
        contentDisposition, contentLanguage} = metadata;
  file.createReadStream()
    .on('response', () => {
      const headers = JSON.parse(JSON.stringify({
        'Content-Type': contentType,
        'Content-Length': size,
        'Cache-Control': cacheControl,
        'Content-Encoding': contentEncoding,
        'Content-Disposition': contentDisposition,
        'Content-Language': contentLanguage,
      }));
      res.writeHead(200, headers);
    })
    .on('end', () => {
      res.end();
    })
    .on('error', (err) => {
      errorSend(err, res);
    })
    .pipe(res);
};