import fs from 'fs';
import mpath from 'path';
import mime from 'mime-types';
import Promise from 'bluebird';

import { OmniBase, Stats } from 'omni';

Promise.promisifyAll(fs);

export default class OmniLocal extends OmniBase {

  constructor(root) {
    super();

    this._root = root;
  }

  readdir(path) {
    let fullPath = this._getFullPath(path);

    return fs.readdirAsync(fullPath);
  }

  readfile(path) {
    let fullPath = this._getFullPath(path);

    return new Promise((resolve) => {
      resolve(fs.createReadStream(fullPath));
    });
  }

  stat(path) {
    let fullPath = this._getFullPath(path);

    return fs.statAsync(fullPath)
      .then((stats) => new Stats({
        type: this._getTypeFromStats(stats),
        mime: mime.lookup(path)
      }));
  }

  _getFullPath(path) {
    return mpath.join(this._root, path);
  }

  _getTypeFromStats(stats) {
    if (stats.isFile()) return 'file';
    if (stats.isDirectory()) return 'directory';
    throw new Error('unknown type');
  }

}
