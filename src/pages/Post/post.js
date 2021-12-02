import React from 'react'
import { Header } from '../../components/Header/Header';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';

import './styles.css';

const validationPost = yup.object().shape({
  title: yup.string().required("O título é obrigatorio").max(40, "O titulo pode ter até 40 cracteres"),
  description: yup.string().required("A descrição é obrigatoria").max(150, "A descrição pode ter até 150 caracteres"),
  content: yup.string().required("O conteúdo é obrigatorio").max(500, "O conteudo pode ter até 500 caracteres")

})

export const Post = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationPost)
  });

  const addPost = data => axios.post("https://upload-my-api.herokuapp.com/post/create", data).then(() => {
    console.log('Deu certo');
  }).catch(() => {
    console.log('Deu errado');

  })

  return (
    <div>
      <Header />

      <main>
        <div className="card-post">
          <h1>Criar Postagem</h1>
          <div className="line-post">
            <div className="card-body-post">

              <form onSubmit={handleSubmit(addPost)}>
                <div className="fields">
                  <label>Título</label>
                  <input type="text" name="title" {...register("title")} />
                  <p className="error-message">{errors.title?.message}</p>

                </div>
                <div className="fields">
                  <label>Descrição</label>
                  <input type="text" name="description" {...register("description")} />
                  <p className="error-message">{errors.description?.message}</p>
                </div>
                <div className="fields">
                  <label>Conteúdo</label>
                  <textarea type="text" name="content" {...register("content")} />
                  <p className="error-message">{errors.content?.message}</p>

                </div>
                <div className="btn-post">
                  <button type="submit"  >Enviar</button>
                </div>
              </form>

            </div>

          </div>
        </div>
      </main>

    </div>
  )
}
