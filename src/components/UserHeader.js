import React, {useEffect} from "react";
import {connect} from "react-redux";
import { fetchUser } from "../actions";

const UserHeader = (props) => {

    const renderedUser = props.users.find(user => props.userId === user.id);

    useEffect(() => { 
        props.fetchUser(props.userId);
    },[]);

    return (
        <div className="header">{!renderedUser ? "Loading..." : renderedUser.name}</div>
    );

}

// class UserHeader extends React.Component {
//     componentDidMount() {
//         this.props.fetchUser(this.props.userId);
//     }

//     render() {
//         const user = this.props.users.find(user => user.id === this.props.userId);

//         if(!user){
//             return <div className="header">Loading...</div>;
//         }

//         return (
//             <div className="header">{user.name}</div>
//         );
//     }
// }

const mapStateToProps = (state) => {
    console.log(state.users);
    return {users: state.users};
}

export default connect(mapStateToProps,{fetchUser})(UserHeader);