import { Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './Layout/Layout';
import AddProd from './page/Add/AddProd';
import AddUser from './page/Add/AddUser';
import Chart from './page/Overview/Chart';
import ProductItem from './page/Products/ProductItem';
import ProductList from './page/Products/ProductList';
import EditUser from './page/Users/EditUser';
import User from './page/Users/User';

function App() {
  return (
    <div style={{width:'100%'}} className="App">
      <Layout>
        <Routes>
          <Route index element={<Chart />} />
          <Route path={'/overview'} element={<Chart />} />
          <Route path={'/users'} element={<User />} />
          <Route path={'/users/add'} element={<AddUser />} />
          <Route path={'/products'} element={<ProductList />} />
          <Route path={'/products/add'} element={<AddProd />} />
          <Route path={'/products/edit/*'} element={<ProductItem />} />
          <Route path={'/users/edit/*'} element={<EditUser />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
