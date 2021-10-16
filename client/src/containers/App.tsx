import Layout from "app/Layout";
import axios from "axios";

const { REACT_APP_BACKEND_URL } = process.env;
axios.defaults.baseURL = REACT_APP_BACKEND_URL;
axios.defaults.headers["Content-Type"] = "application/json";

const App: React.FC = () => <Layout />;

export default App;
