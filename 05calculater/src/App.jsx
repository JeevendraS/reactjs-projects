import { useState } from 'react'
import './App.css'

function App() {
  let buttons = document.querySelectorAll('.btn');
  let screenval = document.querySelector('#screen h2')
  screenval.val = ''
  let arr = Array.from(buttons)
  arr.forEach(element => {
    element.addEventListener("click", (e)=>{
        let val = e.target.dataset.num;
        screenval.val += val; 
    })
});

  return (
    <>
     <div id="main">
        <div id="box">
          <div id="screen"><h2 >709</h2></div>
          <div id="buttons">
            <button type="button" class='btn button' data-num='1'>1</button>
            <button type="button" class='btn button' data-num='2'>2</button>
            <button type="button" class='btn button' data-num='3'>3</button>
            <button type="button" class='btn button' data-num='4'>4</button>
            <button type="button" class='btn button' data-num='5'>5</button>
            <button type="button" class='btn button' data-num='6'>6</button>
            <button type="button" class='btn button' data-num='7'>7</button>
            <button type="button" class='btn button' data-num='8'>8</button>
            <button type="button" class='btn button' data-num='9'>9</button>
            <button type="button" class='btn button' data-num='0'>0</button>
            <button type="button" class='btn button' data-num='.'>.</button>

            <button type="button" class='btn button orange' data-num='+'>+</button>
            <button type="button" class='btn button orange' data-num='-'>-</button>
            <button type="button" class='btn button orange' data-num='*'>*</button>
            <button type="button" class='btn button orange' data-num='/'>/</button>

            <button type="button" class='button yellow'>C</button>
            <button type="button" class='button red'>DEL</button>
            <button type="button" class='button green'>=</button>




          </div>
        </div>
     </div>
    </>
  )
}

export default App
