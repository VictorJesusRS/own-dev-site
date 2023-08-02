
import { Metadata } from 'next'

import { Content } from '@/app/landing/components/Content';

export const metadata: Metadata = {
  title: 'Victor Rivas | Desarrollador Full Stack',
  description: `Automatiza, agiliza y posicionate en la web con mis servicios de consultoría y desarrollos a medida con
  PHP, Laravel, React.js, Javascript, HTML, CSS`,
  openGraph: {
    title: 'Victor Rivas | Desarrollador Full Stack',
    description: 'Automatiza, agiliza y posicionate en la web con mis servicios de consultoría y desarrollos a medida',
    type: 'website',
    // images: 'https://victorjesusrs.vercel.app/imgs/page-preview.png',
  },
}

export default function Home() {
  return (
    <>
      <Content />
    </>
  )
}
