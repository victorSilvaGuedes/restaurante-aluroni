import React from 'react';
import { CgSearch } from 'react-icons/cg';
import style from './Searcher.module.scss';

interface searcherProps {
	search: string;
	setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export function Searcher({ search, setSearch }: searcherProps) {
	return (
		<div className={style.buscador}>
			<input
			placeholder='Digite uma receita...'
				type="text"
				value={search}
				onChange={(event) => {
					setSearch(event.target.value);
				}}
			/>
			<CgSearch
				size={24}
				color="#4c4d5e"
			/>
		</div>
	);
}
