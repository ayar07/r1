import './App.css';

function Title(props) {
  console.log(props);
  return (
    <>
      <h1>{props.text}</h1>
      <h1>{props.title}</h1>
      <p>{props.test}</p>
      <p>{props.url}</p>

    </>
  )
}


function Header() {
  return (
    <>
      <Title title="header content" />
    </>
  )
}


function Body() {
  return (
    <>
      <Title title="BoDy" />
    </>
  )
}


function Footer(props) {
  return (
    <>
      <p>
        <Title text="some text" url="22222" />
      </p>
    </>
  )
}


function Inner() {
  return (
    <>
      <Title test="content inner" />
    </>
  )
}



function App(props) {
  return (
    <div className="App">
      <div>
        <Title />
        <Footer />
        <Body />
        <Inner />
      </div>

    </div>
  );
}

export default App;
