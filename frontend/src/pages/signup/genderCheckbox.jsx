const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
	return (
		<div className='flex pt-2 pb-2 gap-5 ml-20'>
			<div className='form-control'>
				<label
					className={`label gap-2 curson-pointer ${
						selectedGender === 'male' ? 'selected' : ''
					}`}>
					<span className='label-text'> Male </span>
					<input
						type='checkbox'
						className='checkbox border-slate-900 checked:bg-accent-content checked:p-0'
						checked={selectedGender === 'male'}
						onChange={() => onCheckboxChange('male')}
					/>
				</label>
			</div>
			<div className='form-control'>
				<label
					className={`label gap-2 curson-pointer${
						selectedGender === 'female' ? 'selected' : ''
					}`}>
					<span className='label-text'> Female </span>
					<input
						type='checkbox'
						className='checkbox border-slate-900 checked:bg-accent-content'
						checked={selectedGender === 'female'}
						onChange={() => onCheckboxChange('female')}
					/>
				</label>
			</div>
		</div>
	);
};

export default GenderCheckbox;
