import React from 'react'
import './Structure.css'

export const InaccessibleStructure = () => {
  return (
    <main className="main-content">
      <section>
        <h1>Conteúdo principal da página</h1>

        <p>
          Descrição do conteúdo principal da página. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </section>
      <section>
        <h2>Conteúdo secundário da página</h2>

        <div>
          <p>
            Descrição do conteúdo secundário da página. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
          </p>
        </div>

        <section className="row">
          {['X', 'Y', 'Z'].map((letter) => (
            <div key={letter} className="card">
              <h4>Produto {letter}</h4>
              <p>
                Descrição do produto {letter}. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
            </div>
          ))}
        </section>
      </section>
      <section>
        <h5>Conteúdo adicional</h5>

        <p>Informações do conteúdo adicional</p>
      </section>
    </main>
  )
}

export const AccessibleStructure = () => {
  return (
    <main className="main-content">
      <section>
        <h1>Conteúdo principal da página</h1>

        <p>
          Descrição do conteúdo principal da página. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </section>
      <section>
        <h2>Conteúdo secundário da página</h2>

        <div>
          <p>
            Descrição do conteúdo secundário da página. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
          </p>
        </div>

        <section className="row">
          {['X', 'Y', 'Z'].map((letter) => (
            <section key={letter} className="card">
              <h3>Produto {letter}</h3>
              <p>
                Descrição do produto {letter}. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
            </section>
          ))}
        </section>
      </section>
      <section>
        <h2>Conteúdo adicional</h2>

        <p>Informações do conteúdo adicional</p>
      </section>
    </main>
  )
}
