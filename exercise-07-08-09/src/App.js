import React, { useState } from 'react'
import Contact from './components/contact'
import Form from './components/form'
import './App.css'

function App () {
	const list = [
		{ name: 'Jose', isConected: true },
		{ name: 'Maria', isConected: false }
	]

  	const [changeList, setList] = useState(list)

	const changeState = (contact) => {
		const newList = changeList.map( elem => {
			if(elem === contact) elem.isConected = !elem.isConected
			return elem
		})
		setList(newList)
	}

	const rmvContact = (contact) => {
		const newList = changeList.filter( elem => elem !== contact )
		setList(newList)
	}

	const onAddContact = (contact) => { 
		const newList = [...changeList]
		newList.push(contact)
		setList(newList)
	}

	return (
		<div className='App-header'>
			<div className='container'>
				<section>
					<h2>Agenda:</h2>
					<ul>
						{ changeList.map((elem, i) => <Contact key={i} contact={elem} changeState={changeState} rmvContact={rmvContact}/>) }						
					</ul>
				</section>
				<Form addContact={onAddContact}/>				
			</div>
		</div>
	)
}

export default App
