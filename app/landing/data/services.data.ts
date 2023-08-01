
import React from 'react'
import { ServiceBenefit } from '../types/services.types'
import BannerImg from '@/app/landing/assets/imgs/2.svg'
import ConsultingImg from '@/app/landing/assets/imgs/services/consulting.svg'
import LayoutImg from '@/app/landing/assets/imgs/services/layout.svg'
import Custom2Img from '@/app/landing/assets/imgs/services/custom2.svg'
import SupportImg from '@/app/landing/assets/imgs/services/support.svg'



export const serviceBenefitData : Array<ServiceBenefit> = [
    {
        title: 'Desarrollos a Medida',
        subtitle: `Un sitio web personalizado puede proporcionar una serie de beneficios sobre uno estándar. 
        Si bien un sitio web estándar puede ser más económico a corto plazo, un sitio web personalizado se puede adaptar 
        a sus necesidades y objetivos específicos. Puede proporcionar un diseño único, una funcionalidad mejorada y una mejor experiencia 
        de usuario. Además, un sitio web personalizado se puede optimizar para los motores de búsqueda, lo que puede ayudar a aumentar el 
        tráfico y la visibilidad. En última instancia, la inversión en un sitio web personalizado puede dar sus frutos a largo plazo al ayudar a
        atraer y retener clientes e impulsar su negocio.`,
        thumb: Custom2Img
    },
    {
        title: 'Consultoría Tecnológica',
        subtitle: `La consultoría aporta conocimientos y experiencia que pueden no 
        existir dentro de su equipo actual. También puede ayudar a identificar áreas en 
        las que se puede aprovechar la tecnología para mejorar los procesos comerciales y 
        aumentar la eficiencia. Además, los consultores de TI pueden ayudar a garantizar que 
        su organización utilice la tecnología más actualizada y segura, lo que puede ser 
        fundamental en el panorama digital actual.`,
        thumb: ConsultingImg
    },

    {
        title: 'Soporte y Mantenimiento',
        subtitle: `Acompaño a la empresa en su crecimiento administrando 
        la infraestructura informática en base a las necesidades 
        cambiantes del mercado.`,
        thumb: SupportImg
    },
    {
        title: 'Diseño y maquetado',
        subtitle: `Cuento con perfiles de diseño, maquetado y desarrollo frontend, 
        para lograr la mejor experiencia para el usuario.`,
        thumb: LayoutImg,
    },

]

const serviceBenefitDataOld : Array<ServiceBenefit> = [
    {
        title: 'Desarrollos a Medida',
        subtitle: `Un sitio web personalizado puede proporcionar una serie de beneficios sobre uno estándar. 
        Si bien un sitio web estándar puede ser más económico a corto plazo, un sitio web personalizado se puede adaptar 
        a sus necesidades y objetivos específicos. Puede proporcionar un diseño único, una funcionalidad mejorada y una mejor experiencia 
        de usuario. Además, un sitio web personalizado se puede optimizar para los motores de búsqueda, lo que puede ayudar a aumentar el 
        tráfico y la visibilidad. En última instancia, la inversión en un sitio web personalizado puede dar sus frutos a largo plazo al ayudar a
        atraer y retener clientes e impulsar su negocio.`,
        thumb: Custom2Img
    },
    {
        title: 'Consultoría en Tecnológias de la información',
        subtitle: `La consultoría aporta conocimientos y experiencia que pueden no 
        existir dentro de su equipo actual. También puede ayudar a identificar áreas en 
        las que se puede aprovechar la tecnología para mejorar los procesos comerciales y 
        aumentar la eficiencia. Además, los consultores de TI pueden ayudar a garantizar que 
        su organización utilice la tecnología más actualizada y segura, lo que puede ser 
        fundamental en el panorama digital actual.`,
        thumb: ConsultingImg
    },

    {
        title: 'Soporte y Mantenimiento',
        subtitle: `Acompañamos a la empresa en su crecimiento administrando 
        la infraestructura tecnológica en base a las necesidades 
        cambiantes del mercado.`,
        thumb: SupportImg
    },
    {
        title: 'Diseño y maquetado',
        subtitle: `Contamos con perfiles de diseño, maquetado y desarrollo frontend, 
        capaces de interactuar entre si buscando lograr 
        la mejor experiencia para el usuario.`,
        thumb: LayoutImg,
    },

]