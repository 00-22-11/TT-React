import { TezosToolkit } from '@taquito/taquito';

const RpcRrl = new TezosToolkit('https://mainnet-node.madfish.solutions');

export const getBalance = async (key: string): Promise<number> => {
  const response = await RpcRrl.tz.getBalance(key);
  const content = await response.toNumber();

  return content;
};
