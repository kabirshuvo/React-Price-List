import './App.css';

function App() {

  const routes = [
    {id: 0, name: 'home', path: '/' },
    {id: 1, name: 'About', path: '/about' },
    {id: 2, name: 'contact', path: '/contact'},
    {id: 3, name: 'Products', path: '/products'},
    {id: 4, name: 'Services', path: '/services'},
  ]
  
  return (
    <div>
      
      <h1>Straglling{routes.length}</h1>
      {
        routes.map(route => <li key={route.id}> {route.name}</li>)
      }
      <p>{}</p>
    </div>
  );
}

export default App
