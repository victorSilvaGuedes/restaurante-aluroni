import classNames from 'classnames';
import style from './Filters.module.scss';
import filters from './filters.json';

interface iOption {
	id: number;
	label: string;
}

interface filterProps {
	filter: number | null;
	setFilter: React.Dispatch<React.SetStateAction<number | null>>;
}

export function Filters({ filter, setFilter }: filterProps) {
	function selectFilter({ id }: iOption) {
		if (filter === id) return setFilter(null);
		return setFilter(id);
	}
	
	return (
		<div className={style.filtros}>
			{filters.map((option) => (
				<button
					className={classNames({
						[style.filtros__filtro]: true,
						[style['filtros__filtro--ativo']]: filter === option.id
					})}
					key={option.id}
					onClick={() => selectFilter(option)}
				>
					{option.label}
				</button>
			))}
		</div>
	);
}
