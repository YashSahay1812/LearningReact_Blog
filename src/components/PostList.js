import React, {useEffect} from "react";
import {connect} from "react-redux";
import { fetchPosts } from "../actions";
import UserHeader from "./UserHeader";

const PostList = (props) => {
    
    const renderedList = props.posts.map(post => {
        return (
            <div className="item" key={post.id}>
                <i className="large middle aligned icon user" />
                <div className="content">
                    <div className="description">
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        <UserHeader userId={post.userId} />
                    </div>
                </div>
            </div>
        );
    })

    useEffect(() => {

        props.fetchPosts();
        
    },[]);

    return (
        <div className="ui relaxed divided list">
            {renderedList}
        </div>
    );

}

const mapStateToProps = (state) => {
    return {posts: state.posts};
}

export default connect(mapStateToProps,{fetchPosts})(PostList);