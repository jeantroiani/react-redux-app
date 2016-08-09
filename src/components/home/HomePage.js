import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <h1>Administration</h1>
                <p>Test</p>
                <Link to="about" className="btn">Learn more</Link>
            </div>
        )
    }
}

export default HomePage;
