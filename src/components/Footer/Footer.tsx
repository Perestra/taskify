import style from './Footer.module.scss'

export const Footer = () => {
  return (
    <footer className={ style.footer }>
        <span className={ style.footer__span }>Developed by <strong><i>Danilo Perestrelo</i></strong></span>
    </footer>
  )
}
