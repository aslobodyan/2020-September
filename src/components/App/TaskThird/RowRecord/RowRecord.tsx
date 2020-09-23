import React from 'react';
import css from './RowRecord.module.css';

const RowRecord = (props: any) => {
    const { name,  rate, percent, sell, buy } = props;

    return (
        <div className={css.container}>
            <div className={css.flexColumn40}>
                <h2 className={css.name}>{name}</h2>
                <p className={css.description}>
                    <span className={css.rate} data-color={rate.color}>{rate.value}/({percent}%)</span>
                </p>
            </div>
            <div className={css.flexColumn25 + ' ' + css.square} data-color={sell.color}>
                <span>sell</span>
                <strong>{sell.value}</strong>
            </div>
            <div className={css.flexColumn25 + ' ' + css.square} data-color={buy.color}>
                <span>buy</span>
                <strong>{buy.value}</strong>
            </div>
            <div className={css.flexColumn10 + ' ' + css.dots}>
                <button className={css.btn}>&hellip;</button>
            </div>
        </div>
    )
};

export default RowRecord;