import React, {useEffect} from "react";
import {connect} from "react-redux";
import { fetchUser } from "../actions";

const UserHeader = (props) => {

    useEffect(() => { 
        props.fetchUser(props.userId);
    },[]);

    return (
        <div className="header">{!props.user ? "Loading..." : props.user.name}</div>
    );

}

const mapStateToProps = (state, ownProps) => {
    console.log(state.users);
    return {user: state.users.find(user => user.id === ownProps.userId)};
}

export default connect(mapStateToProps,{fetchUser})(UserHeader);