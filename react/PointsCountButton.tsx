import React, { ReactNode } from 'react'
import s from './styles.module.css'
import { IoWalletOutline } from 'react-icons/io5'

interface PointCountButtonProps {
  children?: ReactNode;
  handleActiveMenu: () => void;
}

export default function PointCountButton({ children, handleActiveMenu }: PointCountButtonProps){
  return (
    <div className={s.pointsCountContainer}>
      <button
        className={s.pointsCountBtn}
        onClick={handleActiveMenu}
        onBlur={handleActiveMenu}
      >
        <IoWalletOutline/>
      </button>
      { children }
    </div>
  )
}



