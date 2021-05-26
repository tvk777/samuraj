import React from 'react';
import classes from './Paginator.module.css';


export const Paginator = ({totalItemsCount, pageSize, onPageChanged, currentPage}) => {
    const pagesCount = Math.ceil(totalItemsCount/pageSize);
    let pages = [];
    for(let i=1; i<=pagesCount; i++){
      pages.push(i);
    }
    return (
        <div>
        {pages.map((p, i) => {
          return (
            <span
              key={i}
              onClick={() => onPageChanged(p)}
              className={p === currentPage ? classes.selectedPage : ''}
            >
              {p}
            </span>
          );
        })}
      </div>
    )
  
}