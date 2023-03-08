import './App.css';
import catSound from './assets/cat.mp3'
import navBarCat from './assets/navbarcat.png';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import React, { useState } from 'react';
import MeowButton from './MeowButton';




function App() {
  const [open, setOpen] = useState(false);
  const [code, setCode ] = useState('');
  const [meowSound, setMeowSound] = useState(false);

  const status =[100,101,102,103,200,201,202,203,204,206,207,300,301,302,303,304,305,307,308,400,401,402,403,404,
  405,406,407,408,409,410,411,412,413,414,415,416,417,418,420,421,422,423,424,425,426,429,431,444,450,451,497,
498,499,500,501,502,503,504,506,507,508,509,510,511,521,522,523,525,599];
const handleClickOpen = (value) => {
  setOpen(true);
  setCode(value);
  if(meowSound){
    new Audio(catSound).play();
  }
};

const handleClose = () => {
  setOpen(false);
};
return (
    <div className="App">
      <div className='navbar'><h1>{"<"}Cat Requests{"/>"}</h1>
      <img src={navBarCat} alt='a cat'></img>
      <MeowButton setMeowSound={setMeowSound}/></div>
      <div className='objective'>
        <h4>Catty will tell you the meaning of different status codes retured by an api.</h4>
      </div>
      <div className='cat-codes'>
      {status.map((item, index) => (
        <div  onClick={(event)=>{event.stopPropagation(); handleClickOpen(item)}} className={`item-div ${`item-color-${item.toString()[0]}00`}`} key={index}><h2>
          {item}</h2></div>
      ))}
      </div>
      <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent style={{overflow:'hidden'}}>
         <img className='dialog-img' alt='model-img' src={`https://http.cat/${code}`}></img>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
      </div>
      
      
  );
}

export default App;
