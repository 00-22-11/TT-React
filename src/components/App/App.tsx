import React, { useState, createRef, useEffect } from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../redux/store/hashReducer';
import Hashes from '../Hashes/Hashes';
import { getBalance } from '../../api/api';
import './App.scss';

export const App: React.FC = () => {
  const dispatch = useDispatch();
  const hashes = useSelector((state: HashKeysAndBalance[]) => state);

  const [validHash, setValidHash] = useState(false);
  const textInput = createRef<HTMLInputElement>();

  useEffect(() => {
    const store = localStorage.getItem('hash-store');

    if (store) {
      dispatch(actions.storage(JSON.parse(store)));
    }
  }, []);

  const addHash = async (hash: string) => {
    const duplicate = hashes.find(hashKey => hashKey.hash === hash);

    if (hash.length === 36 && !duplicate) {
      const response = await getBalance(hash);

      dispatch(actions.add(hash, response));

      setValidHash(false);

      return;
    }

    setValidHash(true);
  };

  return (
    <form className="form">
      <div className="input-group mb-1">
        <input
          type="text"
          className={classNames('form-control', { 'invalid-hash': validHash })}
          ref={textInput}
          onChange={() => {
            setValidHash(false);
          }}
          placeholder="Enter the KeyHash.."
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary btn-block"
            type="button"
            onClick={() => {
              if (textInput.current?.value) {
                addHash(textInput.current.value);
                textInput.current.value = '';
              }
            }}
          >
            Add
          </button>
        </div>
      </div>
      {validHash && (
        <div className="valid-hash">Enter a valid hash</div>
      )}
      {hashes.length
        ? <Hashes hashes={hashes} />
        : <div className="hashes-not-entered">hash keys were not entered</div>}
    </form>
  );
};

export default App;
