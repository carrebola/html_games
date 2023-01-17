import './style.css'

import { header } from './src/componentes/header'
import { footer } from './src/componentes/footer'
import { home } from './src/vistas/home'

import { setLocal } from './src/datos/usuarios'
//cargamos usuarios ejemplo en localstorage
setLocal()

document.querySelector('header').innerHTML = header.template
header.script()
document.querySelector('footer').innerHTML = footer
document.querySelector('main').innerHTML = home
