import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import Store from './PresidentStore';

import './index.css';

import TableModel from  './components/TableModel/TableModel';

const model = {
    maxRowsIncrements: '50,100,500,1000',
    maxRows: 1000,
    link: '"/blurbs',
    table: {
        width: '100%',
        cellpadding: '10',
        theme: 'jmesa jmesa2 jmesa-maximized jmesa-rows1',
        styleClass: 'draggable',
        row: {
            uniqueProperty: 'id',
            highlighter: false,
            columns: [
                {
                    property: 'id',
                },
                {
                    property: 'firstName',
                },
                {
                    property: 'lastName',
                },
                {
                    property: 'nickName',
                },
                {
                    property: 'term',
                    pattern: 'MM/dd/yyyy',
                    cellEditor: 'dateTimeCellEditor',
                },
                {
                    property: 'born',
                    pattern: 'MM/dd/yyyy',
                    cellEditor: 'dateTimeCellEditor',
                },
                {
                    property: 'died',
                    pattern: 'MM/dd/yyyy',
                    cellEditor: 'dateTimeCellEditor',
                },
                {
                    property: 'education',
                },
                {
                    property: 'career',
                },
                {
                    property: 'politicalParty',
                },
            ]
        }
    }
};

fetch('https://react-table-de1e0.firebaseio.com/presidents.json')
    .then(response => response.json())
    .then(data => {
        const items = Object.keys(data).map(key => (data[key]));

        ReactDOM.render(
            <React.StrictMode><Provider   store={new Store(items)}><TableModel model= { model } /></Provider></React.StrictMode>,
            document.getElementById('root'));
    });


