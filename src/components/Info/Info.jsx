import React from "react";
import "./Info.sass";
import Arrow from '../../img/Vector.svg'

export default function Info() {
  return (
    <div className='info'>
      <div className='info__cell'>
        <div className='info__title'><img className="arrow" src={Arrow} />Название</div>
      </div>
      <div className='info__cell'>
        <div className='info__title'>Язык</div>
      </div>
      <div className='info__cell'>
        <div className='info__title'>Число форков</div>
      </div>
      <div className='info__cell'>
        <div className='info__title'>Число звезд</div>
      </div>
      <div className='info__cell'>
        <div className='info__title'>Дата обновления</div>
      </div>
    </div>
  );
}
