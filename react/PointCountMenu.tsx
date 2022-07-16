import React from 'react'
import s from './styles.module.css'

interface IUserData {
  isAuthenticated: boolean;
  userId: string;
  email: string;
}

interface PointCountMenuProps{
  menuIsActive: boolean;
  userData?: IUserData;
}

export default function PointCountMenu({menuIsActive, userData}: PointCountMenuProps){
  return (
    <>
      {
        userData?.isAuthenticated
        ?
        <div className={`${s.pointsCountMenu}
          ${menuIsActive ? s.isActive : ""}`}
         >
          <p className={s.pointsCountTitle}>Disponível:</p>
          <p className={s.pointsCountValue}>2000 pts</p>
        </div>

        :
        <div className={`${s.pointsCountMenu}
          ${menuIsActive ? s.isActive : ""}`}
        >
          <p className={s.pointsCountTitle}>
            Logue para ver seus  pontos
          </p>
        </div>
      }
    </>
  )
}
