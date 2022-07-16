import React, { ReactNode } from 'react'
import s from './styles.module.css'
import { IoWalletOutline } from 'react-icons/io5'

interface PointCountButtonProps {
  children?: ReactNode;
  handleActiveMenu: (value: boolean) => void;
  menuIsActive: boolean;
}

export default function PointCountButton({ children, handleActiveMenu, menuIsActive }: PointCountButtonProps){
  return (
    <div className={s.pointsCountContainer}>
      <button
        className={s.pointsCountBtn}
        onClick={() => handleActiveMenu(!menuIsActive)}
        onBlur={() => handleActiveMenu(false)}
      >
        <IoWalletOutline/>
      </button>
      { children }
    </div>
  )
}



