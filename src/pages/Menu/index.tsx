import { useState } from 'react';
import { Logo } from '../../assets/svg/logo';
import { Filters } from './Filters';
import { Itens } from './Itens';
import style from './Menu.module.scss';
import { Organizer } from './Organizer';
import { Searcher } from './Searcher';

export default function Menu() {
	const [search, setSearch] = useState('');
	const [filter, setFilter] = useState<number | null>(null);
	const [organizer, setOrganizer] = useState('');

	return (
		<main>
			<nav className={style.menu}>
				<Logo />
			</nav>
			<header className={style.header}>
				<div className={style.header__text}>
					O lugar da melhor comida caseira!
				</div>
			</header>
			<section className={style.cardapio}>
				<h3 className={style.cardapio__titulo}>Cardápio</h3>
				<Searcher
					search={search}
					setSearch={setSearch}
				/>
				<div className={style.cardapio__filtros}>
					<Filters
						filter={filter}
						setFilter={setFilter}
					/>
					<Organizer
						organizer={organizer}
						setOrganizer={setOrganizer}
					/>
				</div>
				<Itens
					search={search}
					filter={filter}
					organizer={organizer}
				/>
			</section>
		</main>
	);
}
