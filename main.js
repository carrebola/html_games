import './style.css'

import { header } from './src/componentes/header'
import { footer } from './src/componentes/footer'
import { home } from './src/vistas/home'

import { usuarios } from './src/datos/usuarios'
import { adminUsuarios } from './src/vistas/adminUsuarios'


document.querySelector('header').innerHTML = header.template
header.script()
document.querySelector('footer').innerHTML = footer
document.querySelector('main').innerHTML = adminUsuarios.template
adminUsuarios.script()

