import React, { Suspense } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import Login from "./Login";
import CreateAccount from "./CreateAccount";
import ForgotPassword from "./ForgotPassword";

const loading = () => (
	<div className="animated fadeIn pt-3 text-center">Loading..</div>
  );

export default function(){
	return(
		<HashRouter>
			<Suspense fallback={loading}>
				<Switch>
					<Route
						exact
						path="/L/CreateAccount"
						name="CreateAccount"
						render={(props) => <CreateAccount {...props}/>}
					/>
					<Route
						exact
						path="/L/Login"
						name="Login"
						render={(props) => <Login {...props}/>}
					/>
					<Route
						exact
						path="/L/ForgotPassword"
						name="ForgotPassword"
						render={(props) => <ForgotPassword {...props}/>}
					/>
					
				</Switch>
			</Suspense>
		</HashRouter>
	);
}