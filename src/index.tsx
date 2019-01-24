import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import TaskList from './ts/components/TaskList'; 
import Store from './ts/Store';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './ts/components/FoundationStyles';

const container = document.getElementById('root') as HTMLElement;

ReactDom.render(
    <div>
        <Provider store={Store}>
            <TaskList />
        </Provider>
        <ThemeProvider theme={{}}>
            <GlobalStyle theme="" />
        </ThemeProvider>
    </div>,
    container,
);

// ReactDom.render(
//     <Provider store={Store}>
//         <TaskList />
//     </Provider>,
//     document.getElementById('contents') as HTMLElement
// );