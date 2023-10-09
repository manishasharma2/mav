import './App.css';
import layout from './images/img.png';
function App() {
  return (
    <><div className="logo">
        <div className="logo_image"></div>
        <div className="logo_name">Mavtrix</div>
      </div>
      <div className="Mavtrix" >Mavtrix</div>
      <div className="discription">First Indian video conferencing application with sound spatialization features</div>
      <button className="join" >Join</button>
      <img className='layout1' src={layout} />
      <img className='layout2' src={layout} />
      <img className='layout3' src={layout} />
    </>
  );
}

export default App;
