import { useState } from 'react'

function App() {
  var [temp1,settemp1]=useState('');
  var [temp2,settemp2]=useState([]);

  var [temp3,settemp3]=useState('');
  var [temp4,settemp4]=useState([]);

  var work=(event)=>{
    settemp1(temp1=event.target.value);
  };

  var work2=()=>{
    settemp2(temp2=[...temp2,temp1]);
    work4();
  };

  var work6=(event)=>{
    settemp3(event.target.value);
  };

  var work4=()=>{
    settemp4(temp4=[...temp4,temp3]);
  };

  var work3=()=>{
    var temp=[...temp2]
    temp.splice((temp.length)-1);
    settemp2(temp);

    var haha=[...temp4];
    haha.splice((haha.length)-1);
    settemp4(haha);
  };

  var del=(index: number)=>{
    var ok=[...temp2];
    ok.splice(index,1);
    settemp2(ok);
    settemp1('');

    var hehe=[...temp4];
    hehe.splice(index,1);
    settemp4(hehe);
    settemp3('');
  };


  return(
    <>
    <div className='flex h-[3cm]'>
      <img src="https://www.freeiconspng.com/uploads/black-checkmark-png-4.png" alt="" />
      <h1 className=' text-center text-[5.2em] font-semibold ml-[16cm] italic'>To-do List</h1>
    </div>

    <div className='justify-around flex mt-[3cm]'>
      <input type="text" className='bg-slate-400 p-[0.3cm] shadow-xl h-[2cm] w-[14cm] rounded-lg hover:border-rose-900 text-white' placeholder='Enter task' onChange={work}/>
      <input type="date" className='bg-slate-400 p-[0.3cm] shadow-xl h-[2cm] w-[14cm] rounded-lg' onChange={work6}/>
      <button onClick={work2} className='h-[2cm] w-[4cm] bg-rose-700 rounded-lg text-white hover:shadow-xl duration-75'>Enter</button>
      <button onClick={work3} className='h-[2cm] w-[4cm] bg-rose-700 rounded-lg text-white hover:shadow-xl duration-75'>Delete</button>
    </div>
      
        <div className='justify-center mt-[2cm]'>
          <table className=''>
            <tr className=''>
              <th className='p-2 w-[16cm] text-center'></th>
              <th className='w-[16cm] text-center'></th>
            </tr>
            {temp2.map((t,index)=>
            <tr className='p-2 h-[2cm]'>
              <td className='font-semibold italic p-2 text-center text-[2em]' onClick={()=>del(index)}>{temp2[index]}</td>
              <td className='font-semibold italic p-2 text-center text-[2em]' onClick={()=>del(index)}>{temp4[index]}</td>
            </tr>)}
          </table>
        </div>
    </>
  )
}

export default App
