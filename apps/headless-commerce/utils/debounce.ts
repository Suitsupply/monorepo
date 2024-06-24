const _records: Record<string, unknown> = {};

export const debounce = (key: string, cb: Function, rate: number = 100) => {
  if (!_records[key]) {
    _records[key] = setTimeout(() => {
      cb();

      delete _records[key];
    }, rate);
  }
};
