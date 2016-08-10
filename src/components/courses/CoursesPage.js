import React, {Component, PropTypes} from 'react';
import { connect,  } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            course: {
                title: ''
            }
        }

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }
    onTitleChange(e) {
        const course = this.state.course;
        course.title = e.target.value;
        this.setState({course: course});
    }

    onClickSave(e) {
        e.preventDefault();
        //this.props.dispatch(courseActions.createCourse(this.state.course)); //if you didn't connect mapDispatchToProps
        this.props.actions.createCourse(this.state.course);
    }

    courseRow(course, index) {
        return <div key={index}>{course.title}</div>;
    }

    render() {
        return (
            <div>
               <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}
                <h2>Add a course</h2>
                <form>
                    <input
                        type="text"
                        onChange={this.onTitleChange}
                        value={this.state.course.title}
                    />
                    <input
                        type="submit"
                        value="Save"
                        onClick={this.onClickSave}
                    />
                </form>
            </div>
        );
    }
}

CoursesPage.propTypes = {
    children: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch) {
    return {
//        createCourse: (course) => {
//            dispatch(courseActions.createCourse(course));
//        }
        actions: bindActionCreators(courseActions, dispatch)
    }
}

const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
export default connectedStateAndProps(CoursesPage);
