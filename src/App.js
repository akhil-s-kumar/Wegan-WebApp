import { BrowserRouter, Route } from "react-router-dom";
import Base from "./pages/Base"

function App() {

  return (  
      <BrowserRouter>
          <Route exact path="/" component={Base} />
          <Route exact path="/Disease" component={Base} />
      </BrowserRouter>
  );
}

export default App;
