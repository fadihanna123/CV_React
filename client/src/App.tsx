import Layout from "app/Layout";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/";
axios.defaults.headers["Content-Type"] = "application/json";

const App: React.FC = () => <Layout />;

export default App;
