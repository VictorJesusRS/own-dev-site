
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
        subtitle: `Brindo soluciones de Software a medida de las necesidades de su empresa. 
        Evalúo cuál es la solución tecnológica más adecuada para la 
        resolución de problemas, mejora y automatización de procesos, modelos de negocio basado en software
        (como una tienda en línea), entre otros.`,
        thumb: Custom2Img
    },
    {
        title: 'Consultoría Tecnológica',
        subtitle: `Actúo como socio informático de su empresa, brindando
         asesoramiento y apoyo en las decisiones estratégicas 
         relacionadas con las tecnologías de la información y procesos.`,
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
        subtitle: `Brindamos soluciones de Software a medida de las necesidades de su empresa. 
        Evaluamos cuál es la solución tecnológica más adecuada para la 
        resolución del problema, diseñando e implementando la misma como producto de 
        un análisis previo tendiente a arribar a la mejor solución.`,
        thumb: Custom2Img
    },
    {
        title: 'Consultoría Tecnológica',
        subtitle: `Actuamos como socios tecnológicos de su empresa, brindando
         asesoramiento y apoyo en las decisiones estratégicas 
         relacionadas con tecnología y procesos.`,
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