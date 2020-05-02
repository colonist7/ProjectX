import React from 'react';
// import { connect } from 'react-redux';
import HomeShell from './Home.shell';
 
const Home = (props) => {
    // const {} = props;
    return <HomeShell />
}

// const mapStateToProps = (state) => {
//     let {userName, userPassword} = state.HomeReducer;
//     return {userName, userPassword};
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         checkCredentials: () => {dispatch()},
//     };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Home);

export default Home;