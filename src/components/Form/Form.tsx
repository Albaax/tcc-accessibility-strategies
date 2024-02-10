import React from 'react'
import './Form.css'

export function InaccessibleForm() {
  return (
    <form className="form">
      <h1 className="form__title">Formulário de cadastro</h1>
      <div>
        <label className="form__label">Digite seu nome</label>
        <input type="text" className="form__input" />
      </div>

      <div>
        <label className="form__label">Digite seu email</label>
        <input type="email" className="form__input" />
      </div>

      <div>
        <button type="submit" className="form__button">
          Enviar
        </button>
      </div>
    </form>
  )
}

export function AccessibleForm() {
  return (
    <form className="form">
      <h1 className="form__title">Formulário de cadastro</h1>
      <div>
        <label className="form__label">
          Digite seu nome
          <input type="text" className="form__input" />
        </label>
      </div>

      <div>
        <label className="form__label">
          Digite seu email
          <input type="email" className="form__input" />
        </label>
      </div>

      <div>
        <button type="submit" className="form__button">
          Enviar
        </button>
      </div>
    </form>
  )
}
