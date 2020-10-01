import React, { Suspense } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import Home from "./Home";
import ReadBook from "./ReadBook";
import AddBook from "./AddBook";
import View from "./View";
import MyAccount from "./MyAccount";
import Books from "./Books";
import EditBook from "./EditBook";


const loading = () => (
	<div className="animated fadeIn pt-3 text-center">Loading..</div>
  );

  export default function() {
	  return(
		  <HashRouter>
			  <Suspense fallback={loading}>
				  <Switch>
					  	<Route
							exact
							path="/M/Home"
							name="Home"
							render={(props) => <Home {...props}/>}
						/>
					  	<Route
							exact
							path="/M/ReadBook"
							name="ReadBook"
							render={(props) => <ReadBook {...props}/>}
						/>
					  	<Route
							exact
							path="/M/AddBook"
							name="AddBook"
							render={(props) => <AddBook {...props}/>}
						/>
					  	<Route
							exact
							path="/M/Books"
							name="Books"
							render={(props) => <Books {...props}/>}
						/>
					  	<Route
							exact
							path="/M/MyAccount"
							name="MyAccount"
							render={(props) => <MyAccount {...props}/>}
						/>
					  	<Route
							exact
							path="/M/View"
							name="View"
							render={(props) => <View {...props}/>}
						/>
					  	<Route
							exact
							path="/M/EditBook"
							name="EditBook"
							render={(props) => <EditBook {...props}/>}
						/>
					  
				  </Switch>
			  </Suspense>
		  </HashRouter>
	  );
  }