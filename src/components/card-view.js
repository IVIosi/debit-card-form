import React from 'react';

import ShetabLogo from '../static/shetab.png';
import PasargadLogo from '../static/pasargad.png';

export default function CardView({ cardInfo, focusOnInput, focusedField }) {
  const { number, holderName, expirationMonth, expirationYear } = cardInfo;

  return (
    <div className="card-view">
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
          {number
            .padEnd(16, '#')
            .match(/(.{1,4})/g)
            .map((part) => (
              <span key={part}>{part}</span>
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
              focusedField === 'expirationMonth' ? ' focused' : '',
            )}
            onClick={() => focusOnInput('expirationMonth')}
          >
            <label htmlFor="expirationMonth">Expires at</label>
            <span>{`${expirationMonth}/${expirationYear}`}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

CardView.defaultProps = {};
