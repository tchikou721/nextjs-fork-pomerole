import path from 'path';
//const fs = require('fs');

type File = {
  type: 'file';
  name: string;
};

type Directory = {
  type: 'directory';
  name: string;
  children: (File | Directory)[];
};

/**
 * Traverse files & directories.
 *
 * Return a list of every files filtered by given function.
 */
export const visitFiles = (
  root: string, // TODO
  filterFn: (file: File) => boolean // TODO
): File[] => {
  const directoryPath = path.join(__dirname, root);

  /*fs.readdir(__dirname, (err, files) => {
    if (err) console.error(err);
    else {
      console.log('files', files);
      files.filter((file) => filterFn(file));
    }
  });*/
  return [];
};

// Use example
const filteredFiles = visitFiles(
  '../exercices', // TODO use a concrete root example
  (file) => {
    const name = file.name;

    for (let i = 0; i < Math.floor(name.length) / 2; i++) {
      if (name[i] != name[name.length - 1 - i]) {
        return false;
      }
    }
    return true;
  }
);
