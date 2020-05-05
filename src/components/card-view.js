import React from 'react';

import { chunk } from '../helpers';
import ShetabLogo from '../static/shetab.png';
import PasargadLogo from '../static/pasargad.png';

export default function CardView({ cardInfo, focusOnInput, focusedField }) {
  const { number, holderName, expirationMonth, expirationYear, cvv } = cardInfo;

  return (
    <div className="card-view">
      <div
        className={'card-view__side'.concat(
          focusedField === 'cvv' ? ' flipped' : '',
        )}
      >
        <div className="card-view--front">
          <div className="card-view--front__top">
            <div className="card-view--front__shetab-logo">
              <img src={ShetabLogo} />
            </div>
            <div className="card-view--front__bank-logo">
              <img src={PasargadLogo} />
            </div>
          </div>
          <div
            className={'card-view--front__number'.concat(
              focusedField === 'number' ? ' focused' : '',
            )}
            onClick={() => focusOnInput('number')}
          >
            {chunk(number.padEnd(16, '#'), 4).map((part, index) => (
              <span key={index}>{part}</span>
            ))}
          </div>
          <div className="card-view--front__bottom">
            <div
              className={'card-view--front__info card-view--front__info--holder'.concat(
                focusedField === 'holderName' ? ' focused' : '',
              )}
              onClick={() => focusOnInput('holderName')}
            >
              <label htmlFor="holderName">Holder Name</label>
              <span>{holderName}</span>
            </div>
            <div
              className={'card-view--front__info'.concat(
                focusedField === 'expirationMonth' ||
                  focusedField === 'expirationYear'
                  ? ' focused'
                  : '',
              )}
              onClick={() => focusOnInput('expirationMonth')}
            >
              <label htmlFor="expirationMonth">Expiration Date</label>
              <span>{`${expirationYear.padEnd(2, 'y')}/${expirationMonth.padEnd(
                2,
                'm',
              )}`}</span>
            </div>
          </div>
        </div>
        <div className="card-view--back">
          <div className="card-view--back__bar" />
          <div className="card-view--back__cvv">
            <label htmlFor="cvv">CVV</label>
            <span>{cvv}</span>
          </div>
          <div className="card-view--back__bank-logo">
            <img src={PasargadLogo} />
          </div>
        </div>
      </div>
    </div>
  );
}

CardView.defaultProps = {
  cardInfo: {},
  focusOnInput: () => {},
  focusedField: '',
};
