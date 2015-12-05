# omni-vfs-local

> Local file system implementation for [omni-vfs].

## Install

```sh
$ npm install omni-vfs-local
```

## Usage

```javascript
import OmniLocal from 'omni-vfs-local';

const root = '/path/to/root';
const vfs = new OmniLocal(root);

vfs.readdir('some/directory').then((files) => {
  console.log(files);
});
```

## API

> Check out the [Base API][omni-vfs#api] for more methods.

##### `new OmniLocal(root: string)`
`root` is the path in which the VFS will be rooted, all method calls are relative to this.

[omni-vfs]: https://github.com/Mesoptier/omni-vfs
[omni-vfs#api]: https://github.com/Mesoptier/omni-vfs#class-omnibase
