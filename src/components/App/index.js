import React, { useState } from 'react';

import Header from '../Header';
import Name from '../Name';
import Footer from '../Footer';
import './style';

const App = () => {
    const [names, setNames] = useState([{id: 0, name: ''}, {id: 1, name: ''}]);
    const [results, setResults] = useState(null);

    const updateName = (index, newName) => {
        const namesArray = [].concat(names);
        namesArray[index] = {
            id: index,
            name: newName
        };
        setNames(namesArray);
    }

    const addNewName = () => {
        const namesArray = [].concat(names);
        namesArray.push({ id: namesArray.length, name: ''});
        setNames(namesArray);
    }

    const generateNames = () => {
        const mapping = [];
        // generate list of name
        // loop over list so people can be asssigned a person
        // people can't give to themselves
        // pick a person
        // people can't give to the same person twice
        // remove that person from future receivers
        // store people in object/map for assigning.
        
        let receivers = [].concat(names);
        names.forEach(currentPerson => {
            
            const potentialReceivers = receivers.filter((person) => {
                return person.id !== currentPerson.id
            });
            
            const randomIndex = Math.floor(Math.random() * potentialReceivers.length);
            const randomReceiver = potentialReceivers[randomIndex];

            receivers = receivers.filter(rec => {
                return randomReceiver.id !== rec.id;
            });
            
            mapping.push({ 
                giver: currentPerson.name,
                receiver: randomReceiver.name
             });
        });
        setResults(mapping);
    }
    
    return (
        <div className="app">
            <Header title="Secret Santa Generator"/>
            <div className="app__content">
                {
                    names.map((person, index) => {
                        return <Name key={index} name={person.name} handleChange={(val) => updateName(index, val)}/>
                    })
                }
                <button className="app__button" onClick={addNewName}>Add New Name</button>
                <button className="app__button" onClick={generateNames}>Generate Secret Santas!</button>
                <div className="app__result-container">
                    {

                        results ? <table className="app__result-table">
                            <thead>
                                <tr>
                                    <th className="app__table-header">Giver</th>
                                    <th className="app__table-header">Receiver</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                results.map((result, index) => {
                                    return (
                                        <tr key={index} >
                                            <td className="app__table-cells">{result.giver}</td>
                                            <td className="app__table-cells">{result.receiver}</td>
                                        </tr>
                                    );
                                })
                            }
                            </tbody>
                            {/*JSON.stringify(result)*/}
                        </table> : ''
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default App;