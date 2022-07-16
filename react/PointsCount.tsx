import React, { useState } from 'react'
// import { useCssHandles } from 'vtex.css-handles'
import s from './styles.module.css'
import { IoWalletOutline } from 'react-icons/io5'

// const CSS_HANDLES = [
//   "pointsCountContainer",
//   "button",
//   "pointsCountTitle",
//   "pointsCountValue"
// ]

export default function PointsCount(){
  const [ menuIsActive, setMenuIsActive ] = useState(false);

  // const s = useCssHandles(CSS_HANDLES)

  return (
    <div className={s.pointsCountContainer}>
      <button
        className={s.pointsCountBtn}
        onClick={() => setMenuIsActive(!menuIsActive)}
        onBlur={() => setMenuIsActive(!menuIsActive)}
      >
        <IoWalletOutline/>
      </button>

      <div className={`${s.pointsCountMenu}
      ${menuIsActive ? s.isActive : ""}`}>
        <p className={s.pointsCountTitle}>Disponível:
        </p>
        <p className={s.pointsCountValue}>2000 pts</p>

      </div>

    </div>
  )
}
