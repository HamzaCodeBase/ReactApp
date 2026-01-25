// function App() {
//   return (
//     <div className="App">
//       <h1>Hello World!</h1>
//     </div>
//   );
// }

function App(){
  return (  // Parentheses: Used to safely and clearly return multi-line JSX from a React component without triggering JavaScript’s automatic semicolon insertion.
    <>  {/* Fragment: Groups elements without extra DOM wrapper */}
      <h2>Welcome to React with TypeScript!</h2> 
      <p> Hello World!</p>
    </>
  );
}

export default App;