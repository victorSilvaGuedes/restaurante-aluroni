interface props extends React.SVGProps<SVGSVGElement>{

}

export function Logo({...props}:props) {
	return (
		<svg
			width={152}
			height={64}
			viewBox='0 0 152 64'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<rect
				width={152}
				height={64}
				rx={4}
				fill='#D73B3B'
			/>
			<mask
				id='a'
				style={{
					maskType: 'alpha',
				}}
				maskUnits='userSpaceOnUse'
				x={0}
				y={0}
				width={152}
				height={64}
			>
				<rect
					width={152}
					height={64}
					rx={4}
					fill='#D73B3B'
				/>
			</mask>
			<g mask='url(#a)'>
				<path
					transform='rotate(-15 40 69.24)'
					fill='#C53333'
					d='M40 69.2401H222.522V142.0675H40z'
				/>
				<path
					transform='rotate(-15 63.182 63.029)'
					fill='#fff'
					d='M63.1822 63.0285H75.1822V75.0129H63.1822z'
				/>
				<path
					transform='rotate(-15 86.364 56.817)'
					fill='#fff'
					d='M86.3644 56.8168H98.3644V68.8012H86.3644z'
				/>
				<path
					transform='rotate(-15 109.547 50.605)'
					fill='#fff'
					d='M109.547 50.6052H121.547V62.589600000000004H109.547z'
				/>
				<path
					transform='rotate(-15 132.729 44.394)'
					fill='#fff'
					d='M132.729 44.3935H144.729V56.377900000000004H132.729z'
				/>
				<path
					transform='rotate(-15 147.422 52.864)'
					fill='#fff'
					d='M147.422 52.8637H159.422V64.8481H147.422z'
				/>
				<path
					transform='rotate(-15 124.24 59.075)'
					fill='#fff'
					d='M124.24 59.0753H136.24V71.05969999999999H124.24z'
				/>
				<path
					transform='rotate(-15 101.057 65.287)'
					fill='#fff'
					d='M101.057 65.287H113.057V77.2714H101.057z'
				/>
				<path
					d='M35.008 40h-.288l7.176-16.8.264-.12L48.208 40h-2.04l-1.872-5.28h-7.008L35.008 40zm6.144-14.208l-3.768 8.688h6.84l-3.072-8.688zM57.815 40h-9.12V23.2h1.992v16.56h7.128V40zm11.549-16.8h.312v9.6c0 2.512-.496 4.36-1.488 5.544-.992 1.168-2.288 1.752-3.888 1.752-1.008 0-1.864-.088-2.568-.264A5.524 5.524 0 0159.74 38.8c-1.28-.992-1.92-2.992-1.92-6v-9.6h1.992v9.576c0 2.912.44 4.856 1.32 5.832.448.48.912.808 1.392.984.496.176 1.088.264 1.776.264 1.536 0 2.76-.56 3.672-1.68.928-1.136 1.392-2.936 1.392-5.4V23.2zm1.635.192a72.464 72.464 0 014.92-.192c3.952 0 5.928 1.32 5.928 3.96 0 1.12-.272 2.12-.816 3-.544.88-1.48 1.464-2.808 1.752l4.8 8.088h-2.232l-4.704-7.944h-3.096V40H71V23.392zm4.92.048c-.928 0-1.904.056-2.928.168v8.208h3.552c2.256-.096 3.384-1.632 3.384-4.608 0-1.216-.336-2.144-1.008-2.784-.672-.656-1.672-.984-3-.984zm6.608 8.568c0-2.912.704-5.12 2.112-6.624 1.424-1.52 3.248-2.28 5.472-2.28s3.992.656 5.304 1.968c1.328 1.312 1.992 3.408 1.992 6.288 0 2.88-.704 5.056-2.112 6.528-1.408 1.472-3.288 2.208-5.64 2.208-2.032 0-3.696-.584-4.992-1.752-.672-.608-1.2-1.448-1.584-2.52-.368-1.088-.552-2.36-.552-3.816zm7.512-8.664c-1.616 0-2.944.72-3.984 2.16-1.024 1.44-1.536 3.552-1.536 6.336 0 2.784.488 4.816 1.464 6.096.976 1.28 2.272 1.92 3.888 1.92 1.632 0 2.96-.72 3.984-2.16 1.04-1.456 1.56-3.56 1.56-6.312 0-2.768-.496-4.8-1.488-6.096-.976-1.296-2.272-1.944-3.888-1.944zM98.558 40h-.312V23.2h.816l9.984 15.528V23.2h.312V40h-1.752l-9.048-13.92V40zm12.354-16.56v-.24h4.272v.24h-1.176v16.32h1.176V40h-4.272v-.24h1.104V23.44h-1.104z'
					fill='#FAFAFA'
				/>
			</g>
		</svg>
	);
}
