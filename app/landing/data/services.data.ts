
import React from 'react'
import { ServiceBenefit } from '../types/services.types'
import BannerImg from '@/app/landing/assets/imgs/2.svg'


export const serviceBenefitData : Array<ServiceBenefit> = [
    {
        title: 'Diseño y maquetado',
        subtitle: `Contamos con perfiles de diseño, maquetado y desarrollo frontend, 
        capaces de interactuar entre si buscando lograr 
        la mejor experiencia para el usuario.`,
        thumb: BannerImg,
    },
    {
        title: 'Consultoría Tecnológica',
        subtitle: `Actuamos como socios tecnológicos de su empresa, brindando
         asesoramiento y apoyo en las decisiones estratégicas 
         relacionadas con tecnología y procesos.`,
        thumb: BannerImg
    },
    {
        title: 'Desarrollos a Medida',
        subtitle: `Brindamos soluciones de Software a medida de las necesidades de su empresa. 
        Evaluamos cuál es la solución tecnológica más adecuada para la 
        resolución del problema, diseñando e implementando la misma como producto de 
        un análisis previo tendiente a arribar a la mejor solución.`,
        thumb: BannerImg
    },
    {
        title: 'Soporte y Mantenimiento',
        subtitle: `Acompañamos a la empresa en su crecimiento administrando 
        la infraestructura tecnológica en base a las necesidades 
        cambiantes del mercado.`,
        thumb: BannerImg
    },
]