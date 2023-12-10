// const mime = require('mime');
import mime from 'mime';

export const getMimeType = (path: string) => {
  return mime.getType(path);
};

export const getMimeExtension = (mimeType: string) => {
  return mime.getExtension(mimeType);
};
