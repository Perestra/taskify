import style from './NotFound.module.scss'

export const NotFound = () => {
  return (
    <main className={ style.main }>
        <h1 className={ style.main__title }>404</h1>
        <span className={ style.main__description }>Essa tarefa é difícil demais para mim</span>    
    </main>
  )
}
