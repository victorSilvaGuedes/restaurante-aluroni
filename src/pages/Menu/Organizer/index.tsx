import classNames from 'classnames';
import React, { useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import styles from './Organizer.module.scss';
import options from './options.json';

interface Props {
	organizer: string;
	setOrganizer: React.Dispatch<React.SetStateAction<string>>;
}

export function Organizer({ organizer, setOrganizer }: Props) {
	const [aberto, setAberto] = useState(false);
	const nomeOrdenador =
		organizer && options.find((opcao) => opcao.value === organizer)?.nome;
	return (
		<button
			className={classNames({
				[styles.ordenador]: true,
				[styles['ordenador--ativo']]: organizer !== '',
			})}
			onClick={() => setAberto(!aberto)}
			onBlur={() => setAberto(false)}
		>
			<span>{nomeOrdenador || 'Ordenar Por'}</span>
			{aberto ? (
				<MdKeyboardArrowUp size={20} />
			) : (
				<MdKeyboardArrowDown size={20} />
			)}
			<div
				className={classNames({
					[styles.ordenador__options]: true,
					[styles['ordenador__options--ativo']]: aberto,
				})}
			>
				{options.map((opcao) => (
					<div
						className={styles.ordenador__option}
						key={opcao.value}
						onClick={() => setOrganizer(opcao.value)}
					>
						{opcao.nome}
					</div>
				))}
			</div>
		</button>
	);
}
