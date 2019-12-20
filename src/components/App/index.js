import React, { useState } from 'react';

import Header from '../Header';
import Name from '../Name';
import Footer from '../Footer';
import './style';

const App = () => {
    const [names, setNames] = useState(['', '']);
    

    const updateName = (index, newName) => {
        const namesArray = [].concat(names);
        namesArray[index] = newName;
        setNames(namesArray);
    }

    const addNewName = () => {
        const namesArray = [].concat(names);
        namesArray.push('');
        setNames(namesArray);
    }

    const generateNames = () => {
        const namesArray = [].concat(names);
        namesArray.sort(() => 0.5 - Math.random());
        const namePairs = [];
        while (namesArray.length >= 2) {
            const pair = [namesArray.pop(), namesArray.pop()];
            namePairs.push(pair);
        }
        console.log('============');
        console.log('all pairs', namePairs);
        console.log('============');
        //setNames();
    }

    
    
    return (
        <div className="app">
            <Header title="app header"/>
            <div className="app__content">
                {
                    names.map((name, index) => {
                        return <Name key={index} name={name} handleChange={(val) => updateName(index, val)}/>
                    })
                }
                <button onClick={addNewName}>Add New Name</button>
                <button onClick={generateNames}>Generate Secret Santas!</button>
            </div>
            <Footer />
        </div>
    )
}

export default App;