const curry = (fn, ...args) =>
  args.length >= fn.length ? 
  fn(...args) : 
  (...more) => curry(fn, ...args, ...more);

const methods = [
  ["add", (a, b) => a + b],
  ["subtract", (a, b) => a - b],
  ["multiply", (a, b) => a * b],
  ["divide", (a, b) => a / b],
  ["exp", (a, b) => a ** b],
  ["mod", (a, b) => a % b],
  ["eq", (a, b) => a == b],
  ["neq", (a, b) => a != b],
  ["seq", (a, b) => a === b],
  ["sneq", (a, b) => a !== b],
  ["gt", (a, b) => a > b],
  ["gte", (a, b) => a >= b],
  ["lt", (a, b) => a < b],
  ["lte", (a, b) => a <= b],
  ["inc", a => a + 1],
  ["dec", a => a - 1],
  ["band", (a, b) => a & b],
  ["bor", (a, b) => a | b],
  ["bnot", a => ~a],
  ["and", (a, b) => a && b],
  ["or", (a, b) => a || b],
  ["xor", (a, b) => !a != !b],
  ["not", a => !a],
  ["ternary", (a, b, c) => a ? b : c],
  ["typeof", a => typeof a],
  ["delete", (a, b) => delete a[b]],
  ["fdelete", (a, b) => delete b[a]],
  ["instanceof", (a, b) => a instanceof b],
  ["finstanceof", (a, b) => b instanceof a],
  ["in", (a, b) => a in b],
  ["fin", (a, b) => b in a],
  ["new", (a) => (...b) => new a(...b)],
  ["get", (a, b) => a[b]],
  ["fget", (a, b) => b[a]],
  ["set", (a, b, c) => a[b] = c],
  ["fset", (a, b, c) => b[a] = c],
]

const aliases = [
  ["!", "not"],
  ["+", "add"],
  ["-", "subtract"],
  ["*", "multiply"],
  ["/", "divide"],
  ["**", "exp"],
  ["%", "mod"],
  ["?", "ternary"],
  [">", "gt"],
  ["<", "lt"],
  [">=", "gte"],
  ["<=", "lte"],
  ["++", "inc"],
  ["--", "dec"],
  ["==", "eq"],
  ["!=", "neq"],
  ["===", "seq"],
  ["!==", "sneq"],
  ["&&", "and"],
  ["||", "or"],
  ["&", "band"],
  ["|", "bor"],
  ["^", "bxor"],
  ["~", "bnot"],
  ["?:", "ternary"],
  [".", "get"],
  ["[]", "get"],
  [".=", "set"],
  ["[]=", "set"],
];

methods.forEach(([name, f]) => exports[name] = curry(f));
aliases.forEach(([alias, name]) => exports[alias] = exports[name]);

