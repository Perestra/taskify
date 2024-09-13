import React from 'react'
import style from './Task.module.scss'

import { CheckBox } from '../CheckBox/CheckBox'
import { HiOutlineDotsHorizontal } from "react-icons/hi";

export const Task = () => {
  return (
    <div className={ style.task }>
        <CheckBox />
        <span className={ style.task__name }>Comer arroz e carne moidaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</span>
        <HiOutlineDotsHorizontal className={ style.task__icon }/>
    </div>
  )
}
