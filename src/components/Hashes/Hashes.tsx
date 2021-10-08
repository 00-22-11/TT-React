import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Hash } from '../Hash/Hash';
import './Hashes.scss';

interface Props {
  hashes: HashKeysAndBalance[];
}

const Hashes: React.FC<Props> = ({ hashes }) => {
  return (
    <>
      {hashes.map((hash: HashKeysAndBalance) => <Hash hash={hash} key={uuidv4()} />)}
    </>
  );
};

export default Hashes;
