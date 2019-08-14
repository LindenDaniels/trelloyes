import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';



describe('List component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List
                         cards = {[]} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders the ui as expected', () => {
        const tree = renderer
        .create(<List
                  name = "list"
                  cards = {[]} />
                  ).toJSON();
        expect(tree).toMatchSnapshot();
    
    });
});