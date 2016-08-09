import React, {Component, PropTypes} from 'react';

class CoursesPage extends Component {
    render() {
        return (
            <div>
               <h1>Courses</h1>
            </div>
        );
    }
}

CoursesPage.propTypes = {
    children: PropTypes.object.isRequired
};

export default CoursesPage;
