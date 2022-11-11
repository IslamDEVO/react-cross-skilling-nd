import './styles/layout.css';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <main className='App main-layout'>
      <section className='side-navbar-section'>Logo</section>
      <section className='todo-list-section'>
        <h1>Todo List</h1>
        <hr />
        <TodoList />
      </section>
    </main>
  );
}

export default App;
