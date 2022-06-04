import Layout from "app/Layout";
import axios from "axios";
import { backendURL } from "utils/envs";

const globalHeader: string = "application/json";

axios.defaults.baseURL = backendURL;
axios.defaults.headers.common["Content-Type"] = globalHeader;

const App: React.FC = () => <Layout />;

export default App;
