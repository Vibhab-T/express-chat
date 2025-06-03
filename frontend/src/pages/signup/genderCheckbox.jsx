const GenderCheckbox = () => {
	return (
		<div className='flex pt-2 pb-2 gap-5'>
			<div className='form-control'>
				<label className={`label gap-2 curson-pointer`}>
					<span className='label-text'> Male </span>
					<input
						type='checkbox'
						className='checkbox border-slate-900 checked:bg-accent-content checked:p-0'
					/>
				</label>
			</div>
			<div className='form-control'>
				<label className={`label gap-2 curson-pointer`}>
					<span className='label-text'> Female </span>
					<input
						type='checkbox'
						className='checkbox border-slate-900 checked:bg-accent-content'
					/>
				</label>
			</div>
		</div>
	);
};

export default GenderCheckbox;
