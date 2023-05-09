import React from 'react'

import styles from "../assets/styles/components/RecurringError.module.css";

const RecurringError = ({tipo,mensaje}) => {
    console.log(tipo);
  return (
		<div className={styles.content}>
            
			<div className={tipo ? styles.errorContent : styles.successContent}>
				<p className={styles.errorMessege}>{mensaje}</p>
			</div>
			
		</div>
	);
}

export default RecurringError
