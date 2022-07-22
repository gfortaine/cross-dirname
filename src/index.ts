const DIRNAME_POSIX_REGEX = /^((?:\.(?![^\/]))|(?:(?:\/?|)(?:[\s\S]*?)))(?:\/+?|)(?:(?:\.{1,2}|[^\/]+?|)(?:\.[^.\/]*|))(?:[\/]*)$/;
const DIRNAME_WIN32_REGEX = /^((?:\.(?![^\\]))|(?:(?:\\?|)(?:[\s\S]*?)))(?:\\+?|)(?:(?:\.{1,2}|[^\\]+?|)(?:\.[^.\\]*|))(?:[\\]*)$/;
const EXTRACT_PATH_REGEX = /@?(?<path>[file:\/\/]?[^\(\s]+):[0-9]+:[0-9]+/;
const WIN_POSIX_DRIVE_REGEX = /^\/[A-Z]:\/*/;

const pathDirname = (path: string) => {
  let dirname = DIRNAME_POSIX_REGEX.exec(path)?.[1];

  if (!dirname) {
    dirname = DIRNAME_WIN32_REGEX.exec(path)?.[1];
  }

  if(!dirname) {
    throw new Error(`Can't extract dirname from ${path}`);
  }

  return dirname;
}

const getPathFromErrorStack = () => {
  let path: string | undefined;
  const stack = new Error().stack;

  if(!stack) {
    throw new Error("Error has no stack!");
  }

  // Node.js
  let initiator: string | undefined = stack.split('\n').slice(4, 5)[0]

  // Other
  if(!initiator) {
    initiator = stack.split('\n').slice(3, 4)[0]
  }

  if (initiator) {
    path = EXTRACT_PATH_REGEX.exec(initiator)?.groups?.path
  }

  if(!initiator || !path) {
    throw new Error("Can't get __dirname!");
  }

  return path;
}

export const getPath = () => {
  let path = getPathFromErrorStack();

  if(!path) {
    throw new Error("Can't get path!");
  }

  // Remove protocol
  const protocol = "file://";
  if (path.indexOf(protocol) >= 0) {
    path = path.slice(protocol.length);
  }

  // Transform to win32 path
  if (WIN_POSIX_DRIVE_REGEX.test(path)) {
    path = path.slice(1).replace(/\//g, '\\');
  }

  return path;
}

/**
 * Cross platform implementation for `__dirname`.
 * @returns What `__dirname` would return in CJS
 */
export const dirname = () => {
  let path = getPath();
  const dirname = pathDirname(path)
  return dirname
}

/**
 * Cross platform implementation for `__filename`.
 * @returns What `__filename` would return in CJS
 */
export const filename = () => {
  let path = getPath();
  return path
}
