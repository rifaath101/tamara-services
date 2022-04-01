import React from 'react'

const Pagination = ({ customersPerPage, totalCustomers, paginate }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalCustomers / customersPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav style={{ display: 'flex' }}>
      <ul className='pagination' style={{ display: 'flex' }}>
        {pageNumbers.map((number) => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='!#' className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination
