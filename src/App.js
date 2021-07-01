import React,{Component} from 'react';

import './App.css';
import CardList  from './homepage/card-List/cardList.component'
import Header  from './homepage/header/header.component'
import { Footer } from './homepage/footer/footer.component'
import { Route,Redirect,Switch } from 'react-router-dom';
import { AboutPage} from './Pages/about-us/about_us.component'
import { ContactPage} from './Pages/contact-us/contact_us.component'
import ShopPage from './Pages/shop/shop.component'
import SignInAndSignUpPage  from './Pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import {auth,createUserProfileDocument} from './firebase/firebase.utils'
import { connect } from 'react-redux';
import {createStructuredSelector} from  'reselect'
import {setCurrentUser} from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selector'
import Checkout from './Pages/checkout/checkout.component'

class App extends Component{
  
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      console.log(userAuth)
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div >
        <Header />
        <Switch>
          <Route exact path='/' component={CardList} />
          <Route path='/about-us' component={AboutPage} />
          <Route path='/contact-us' component={ContactPage} />
          <Route path='/shop' component={ShopPage} /> 
           <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});
const mapDispatchToProps = dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
