import React from 'react'
import styles from "../assets/styles/components/AllFilters.module.css";
const AllFilters = () => {

  return (
		<div className={styles.content}>

			<div>
				<h3>Order by Name</h3>
				<select name="" id="">
					<option value="default">Default</option>
					<option value="ascendente">upward</option>
					<option value="descendete">falling</option>
				</select>
			</div>

			<div>
				<h3>Order by Id</h3>
				<select name="" id="">
					<option value="default">Default</option>
					<option value="ascendente">upward</option>
					<option value="descendete">falling</option>
				</select>
			</div>

			<div>
				<h3>Filter by Live</h3>
				<select name="" id="">
					<option value="default">Default</option>
					<option value="alive">Alive</option>
					<option value="dead">Dead</option>
					<option value="unknown">Unknown</option>
				</select>
			</div>

			<div>
				<h3>Filter by Gender</h3>
				<select name="" id="">
					<option value="default">Default</option>
					<option value="hombre">Male</option>
					<option value="mujer">Female</option>
					<option value="unknown">Unknown</option>
				</select>
			</div>
      
		</div>
	);
}

export default AllFilters
