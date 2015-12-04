import fs from 'fs';
import path from 'path';
import mime from 'mime-types';
import Promise from 'bluebird';

import { OmniBase, Stats } from 'omni';

export default class OmniLocal extends OmniBase {

  constructor(root) {
    super();

    this._root = root;
  }

}
