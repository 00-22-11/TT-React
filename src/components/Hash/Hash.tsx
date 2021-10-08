import React from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../../redux/store/hashReducer';
import './Hash.scss';

interface Props {
  hash: HashKeysAndBalance;
}

export const Hash: React.FC<Props> = ({ hash }) => {
  const dispatch = useDispatch();

  const removeHash = (hashKey: string) => {
    dispatch(actions.remove(hashKey));
  };

  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            {hash.hash}
          </h5>
          <h5 className="card-title">
            {hash.balance}
          </h5>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={() => removeHash(hash.hash)}
          >
          </button>
        </div>
      </div>
    </>
  );
};

export default Hash;
