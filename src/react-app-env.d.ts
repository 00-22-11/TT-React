type HashKeysAndBalance = {
  hash: string;
  balance: number;
};

type Action = {
  type: string;
  hash: string;
  balance: number;
  store: HashKeysAndBalance[];
};
