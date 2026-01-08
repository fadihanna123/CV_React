import fs from 'fs';

/**
 * Clean log and error files.
 */

export const fileCleaner = () => {
  const logsPath: string = './src/logs/debug.log';
  const errorPath: string = './src/logs/error.log';
  const newValue: string = '';

  fs.promises
    .readFile(logsPath)
    .then(() => {
      fs.promises.writeFile(errorPath, newValue).catch((err: Error) => {
        if (err) {
          throw err;
        }
      });
    })
    .catch((err: Error) => {
      if (err) {
        throw err;
      }
    });
};
