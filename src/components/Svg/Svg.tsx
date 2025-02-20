interface SvgProps {
	src: string
	width?: number
	height?: number
	alt?: string
}

const Svg = ({ src, width = 24, height = 24, alt = "" }: SvgProps) => {
	return (
		<img
			src={src}
			width={width}
			height={height}
			alt={alt}
		/>
	)
}

export default Svg