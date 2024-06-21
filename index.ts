export interface Test {
  /**
   * An optional filesystem path input that is set internally if not specified by the user.
   *
   * @defaultValue Node.js {@link https://nodejs.org/api/process.html#processexecpath| `process.execPath`} value
   */
  path?: string;

  /**
   * An optional filesystem path input that is set internally if not specified by the user.
   *
   * @defaultValue Node.js {@link https://nodejs.org/api/process.html#processexecpath| `process.execPath`} value `beep boop`
   */
  path2?: string;
}
