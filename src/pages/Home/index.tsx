import Store from 'assets/images/store.png';
import BaseButton from 'components/BaseButton';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Cep } from 'types/cep';
import './styles.css';

const Home = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Cep>();

  const onSubmit = (formData: Cep) => {
    navigate(`/${formData.number}/products`);
  };

  return (
    <div className="home-container">
      <h1 className="home-title">Compra Fácil Carrefour</h1>
      <div className="home-subtitle-content">
        <p className="home-subtitle">
          Com o Compra Fácil Carrefour ficou mais fácil encontrar os produtos mais próximos de você,
          basta digitar seu CEP que iremos te ajudar:
        </p>
        <img src={Store} />
      </div>
      <form className="home-card-content base-card" onSubmit={handleSubmit(onSubmit)}>
        <div className="home-input-cep-container">
          <input
            {...register('number', {
              required: 'Informe um CEP para efetuar a busca',
              pattern: {
                value: /\d{5}-?\d{3}/,
                message: 'CEP inválido'
              }
            })}
            type="text"
            className={`form-control base-input input-cep ${errors.number ? 'is-invalid' : ''}`}
            placeholder="Digite seu CEP"
          />
          <div className="invalid-feedback d-block">{errors.number?.message}</div>
        </div>
        <BaseButton text="Buscar" />
      </form>
    </div>
  );
};

export default Home;
