import React from 'react'
import hikingMenImg from '../../assets/img-case/man-hiking-in-mountains.png'

export function InacessibleImage(): React.JSX.Element {
  return <img src={hikingMenImg} width={250} height={400} />
}

export function AcessibleImage(): React.JSX.Element {
  return (
    <img
      src={hikingMenImg}
      alt="Homem de costas caminhando nas montanhas"
      width={250}
      height={400}
    />
  )
}
