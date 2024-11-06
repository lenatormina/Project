import { useEffect, useState } from 'react';
import styled from 'styled-components';

const FooterContainer = ({ className }) => {
	const [city, setCity] = useState('');
	const [temprature, setTemprature] = useState('');
	const [weather, setWeather] = useState('');

	useEffect(() => {
		fetch(
			'https://api.openweathermap.org/data/2.5/weather? q=Moscow&units=metric&lang=ru&appid=30071f835a3b62f827efd91b38bba90c',
		)
			.then((res) => res.json())
			.then(({ name, main, weather }) => {
				setCity(name);
				setTemprature(Math.round(main.temp));
				setWeather(weather[0].description);
			});
	}, []);
	return (
		<div className={className}>
			<div>
				<div>По вопросам обращаться:</div>
				<div>lena.tormina2001@mail.ru</div>
			</div>
			<div>
				<div>
					{city},{' '}
					{new Date().toLocaleTimeString('ru', {
						day: 'numeric',
						month: 'long',
					})}
				</div>
				<div>
					{temprature} °C, {weather}
				</div>
			</div>
		</div>
	);
};

export const Footer = styled(FooterContainer)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 1000px;
	height: 50px;
	padding: 20px 40px;
	font-weight: 600;
	background-color: #fff;
	box-shadow: 0px 2px 17px #000;
`;
