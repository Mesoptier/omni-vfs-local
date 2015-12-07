import { omniBaseTest } from 'omni-vfs/test';
import mockFs from 'mock-fs';

import OmniLocal from '../src/omni-local';

omniBaseTest({
  name: 'OmniLocal',
  impl: OmniLocal,

  init() {
    return new OmniLocal('mock-root');
  },

  mock: {
    install(data) {
      mockFs({
        'mock-root': data
      });
    },

    restore() {
      mockFs.restore();
    }
  }
});
