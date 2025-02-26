import React from 'react'
import { ItemContainer } from './styles';

function ItemRepo({ name, description, url, onRemove }) {
  return (
    <ItemContainer>
      <h3>{name}</h3>
      <p>{description}</p>
      <a href={url} className='acess' target="_blank" rel="noopener noreferrer">Acessar Repositório</a><br />
      <a href='#' className='remove' onClick={onRemove}>Remover</a>
      <hr />
    </ItemContainer>
  )
}

export default ItemRepo;
