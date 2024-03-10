import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import useMarvelService from '../../services/MarvelService';

import './charInfo.scss';
import setContent from '../../utils/setContent';

const CharInfo = (props) => {
  const [char, setChar] = useState(null);

  const { loading, error, getCharacter, clearError, process, setProcess } =
    useMarvelService();

  const updateChar = () => {
    const { charId } = props;
    if (!charId) {
      return;
    }
    clearError();
    getCharacter(charId)
      .then(onCharLoaded)
      .then(() => setProcess('confirmed'));
  };

  useEffect(() => {
    updateChar();
  }, [props.charId]);

  const onCharLoaded = (char) => {
    setChar(char);
  };

  // const skeleton = char || loading || error ? null : <Skeleton />;
  // const errorMessage = error ? <ErrorMessage /> : null;
  // const spinner = loading ? <Spiner /> : null;
  // const content = !(loading || error || !char) ? <View char={char} /> : null;

  return (
    <div className="char__info">
      {/* {skeleton}
      {errorMessage}
      {spinner}
      {content} */}
      {setContent(process, View, char)}
    </div>
  );
};

const View = ({ data }) => {
  const { name, description, thumbnail, homepage, wiki, comics } = data;
  const style = thumbnail.includes('image_not_available')
    ? { objectFit: 'contain' }
    : { objectFit: 'cover' };

  return (
    <>
      <div className="char__basics">
        <img src={thumbnail} alt={name} style={style} />

        <div>
          <div className="char__info-name">{name}</div>

          <div className="char__btns">
            <a href={homepage} className="button button__main">
              <div className="inner">homepage</div>
            </a>

            <a href={wiki} className="button button__secondary">
              <div className="inner">Wiki</div>
            </a>
          </div>
        </div>
      </div>
      <div className="char__descr">{description}</div>
      <div className="char__comics">Comics:</div>
      {comics.length === 0 ? (
        'The is no comics with this character'
      ) : (
        <ul className="char__comics-list">
          {comics.map((item, i) => {
            if (i > 9) return;
            return (
              <li className="char__comics-list" key={i}>
                {item.name}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

CharInfo.propTypes = {
  charId: PropTypes.number,
};

export default CharInfo;
