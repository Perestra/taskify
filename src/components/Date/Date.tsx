import style from './Date.module.scss'

import { weekDay, month, day, year } from '../../helpers/getCurrentDate';

export const Date = () => {
  return (
    <div className={ style.current }>
      <h1 className={ style.current__weekDay }>{ weekDay }</h1>
      <h3 className={ style.current__date }>{ `${day} ${month}, ${year}` }</h3>
    </div>
  )
}
