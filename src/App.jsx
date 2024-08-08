import './App.css'



function App() {
  return (
    <>
  <div className="todolist">
    <Heading />
    <ul id="liste"></ul>

    <Addvegarbage />
    <Modal />
  </div>
    </>
  )
}

function Heading(){
  return (
    <div className="heading">
    <h2>Yapılıcaklar Listesi</h2>
  </div>
  )
}

function Addvegarbage(){

  function handleModal(){
    modal.showModal();
  }


  return (
    <div className="addvegarbage">
        
    <div className="add" onClick={handleModal}>
      <svg className="addBtn" width="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 12H20M12 4V20" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>


    <div className="clearStorage" id="clearStorage">
      <button className="garbage">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path
          d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" />
      </svg>
    </button>
      
    <p className="garbageText"> Listeyi Temizle</p>
    </div>


    </div>
  )
}

function Modal(){

  function handleCloseModal(){
    modal.close();
  }

  return (
    <dialog id="modal">
    <div className="modalDiv">
      
    <div className="cancel" onClick={handleCloseModal}>
      <svg width="800px" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <title>cancel</title>
      <g id="Page-1" stroke="white" strokeWidth="1" fill="white" fillRule="evenodd">
          <g id="work-case" fill="white" transform="translate(91.520000, 91.520000)">
              <polygon id="Close" points="328.96 30.2933333 298.666667 1.42108547e-14 164.48 134.4 30.2933333 1.42108547e-14 1.42108547e-14 30.2933333 134.4 164.48 1.42108547e-14 298.666667 30.2933333 328.96 164.48 194.56 298.666667 328.96 328.96 298.666667 194.56 164.48">
  
  </polygon>
          </g>
      </g>
  </svg></div>
    <form id="form">
      <div className="form-group">
        <input required type="text" name="todoitem" id="todolist" placeholder="Lütfen Yapılıcak Bir iş Yazın " autoComplete="off" />
        <input type="hidden" name="id" value="" />
      </div>
    </form>

    </div>
  </dialog>
  )
}



export default App
