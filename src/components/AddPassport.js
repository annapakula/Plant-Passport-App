import React, { useEffect, useRef, useState } from "react";
import "../styles/AddPassport.scss";
import gatunki from "../nazwa-gatunkowa.txt";
import odmiany from "../nazwa-odmianowa.txt";

const AddPassport = ({ addPlant, year }) => {
	const [id, setId] = useState(`ID A01/${year}`);
	const [name, setName] = useState("");
	const [variety, setVariety] = useState("");
	const [amount, setAmount] = useState("");
	const [error, setError] = useState("");
	const nameRef = useRef("");
	const [plantsNames, setPlantsNames] = useState(null);
	const [plantsVarieties, setPlantsVarieties] = useState(null);

	function fetchFromTxt(txt, callback) {
		fetch(txt)
        .then(response => response.arrayBuffer())
        .then(text => {
			const decoder = new TextDecoder("UTF-8");
			const decoded = decoder.decode(text);
			
			const splitted = decoded.split('\r\n')
				.map(el => el.match(/[A-Za-zĄąĆćĘęŁłŃńÓóŚśŹźŻż'.() ]+/g).flat() )
				.sort()
				
			
				callback(splitted);
        })
        .catch(error => {
			console.log(error)
        });
	}
	
    useEffect(() => {
        nameRef.current.focus();
		fetchFromTxt(gatunki, setPlantsNames);
		fetchFromTxt(odmiany, setPlantsVarieties);
    }, []);
	useEffect(() => {
		setError("");
	}, [id, name]);

	const resetInputs = () => {
		// setName("");
		setVariety("");
		setAmount("");
	}

	const handleChange = (e) => {
		e.preventDefault();
		switch (e.target.id) {
			case "plantId": setId(e.target.value); break;
			case "plantName": setName(e.target.value); break;
			case "plantVariety": setVariety(e.target.value); break;
			case "plantAmount": setAmount(e.target.value); break;
		}
	}

	const handleClick = (e) => {
		e.preventDefault();
		
		if(id && name) {
			addPlant(id, name, variety, amount);
			resetInputs();
			nameRef.current.focus();
		} else {
			setError("Nazwa rośliny oraz id muszą być podane");
		}
	}

	return (
		<section className="AddPassport no-print">
			<h1 className="AddPassport__header">Generator paszportów roślin</h1>
			<p>Podaj dane rośliny:</p>
			<form className="AddPassport__form" action="">
				<input
					className="AddPassport__input"
					ref={nameRef}
					id="plantName"
					list="plants-list"
					type="text"
					placeholder="Nazwa*"
					value={name}
					onChange={handleChange}
					required />
                <datalist id="plants-list">{ plantsNames && plantsNames.map((el,i) => <option key={ i } value={ el } />) }</datalist>
				<input
					className="AddPassport__input"
					id="plantVariety"
					list="varieties-list"
					type="text"
					placeholder="Odmiana"
					value={variety}
					onChange={handleChange}
				/>
                <datalist id="varieties-list">{ plantsVarieties && plantsVarieties.map((el,i) => <option key={ i } value={ el } /> ) }</datalist>
				<input
					className="AddPassport__input"
					id="plantAmount"
					type="number"
					min="1"
					placeholder="Ilość"
					value={amount}
					onChange={handleChange}
				/>
				<input
					className="AddPassport__input"
					id="plantId"
					type="text"
					placeholder="Id*"
					value={id}
					onChange={handleChange}
					required
				/>
				{ error ? <p className="AddPassport__error">{ error }</p> : null }
				<button
					className="AddPassport__button button"
					id="button-add"
					type="submit"
					onClick={handleClick}
				>
					Dodaj paszport
				</button>
			</form>
		</section>
	);
};

export default AddPassport;
