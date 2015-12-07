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
    install(tree) {
      tree.map((path, name, node) => {
        switch (node.type) {
          case 'file':
            return mockFs.file(Object.assign({
              content: node.content,
            }, node.stats));

          case 'directory':
            return mockFs.directory(Object.assign({
              items: node.items
            }, node.stats));

          case 'symlink':
            return mockFs.symlink(Object.assign({
              path: node.path
            }, node.stats));
        }
      });

      mockFs({
        'mock-root': tree.structure
      });
    },

    restore() {
      mockFs.restore();
    }
  }
});
