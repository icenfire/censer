import * as React from "react";
import * as ReactDOM from "react-dom";

import Button from "@material-ui/core/Button";

declare let module: any;

const App = () => (
  <Button variant="contained" color="primary">
    Hello World! Testing
  </Button>
);

ReactDOM.render(<App />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}
