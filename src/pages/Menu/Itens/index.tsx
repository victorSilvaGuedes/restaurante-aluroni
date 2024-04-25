import { useEffect, useState } from 'react';
import { Item } from './Item';
import styles from './Itens.module.scss';
import cardapio from './itens.json';

interface Props {
	search: string;
	filter: number | null;
	organizer: string;
}

export function Itens(props: Props) {
	const [lista, setLista] = useState(cardapio);
	const { search, filter, organizer } = props;

	function testaBusca(title: string) {
		const regex = new RegExp(search, 'i');
		return regex.test(title);
	}

	function testaFiltro(id: number) {
		if (filter !== null) return filter === id;
		return true;
	}

	function ordenar(novaLista: typeof cardapio) {
		switch (organizer) {
			case 'porcao':
				return novaLista.sort((a, b) => (a.size > b.size ? 1 : -1));
			case 'qtd_pessoas':
				return novaLista.sort((a, b) => (a.serving > b.serving ? 1 : -1));
			case 'preco':
				return novaLista.sort((a, b) => (a.price > b.price ? 1 : -1));
			default:
				return novaLista;
		}
	}

	useEffect(() => {
		const novaLista = cardapio.filter(
			(item) => testaBusca(item.title) && testaFiltro(item.category.id)
		);
		setLista(ordenar(novaLista));
	}, [search, filter, organizer]);

	return (
		<div className={styles.itens}>
			{lista.map((item) => (
				<Item
					key={item.id}
					{...item}
				/>
			))}
		</div>
	);
}
