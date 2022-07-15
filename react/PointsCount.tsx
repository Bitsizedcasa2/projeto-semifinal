import React from 'react'
// import { useCssHandles } from 'vtex.css-handles'
import s from './styles.module.css'

// const CSS_HANDLES = [
//   "pointsCountContainer",
//   "pointsCountTitle",
//   "pointsCountValue"
// ]

export default function PointsCount(){

  // const s = useCssHandles(CSS_HANDLES)

  return (
    <div className={s.pointsCountContainer}>
      <p className={s.pointsCountTitle}>Pontos: <span className={s.pointsCountValue}>20000</span></p>
    </div>
  )
}
