import React, { useEffect, useState } from 'react'
import fashion from "./../images/fashion.jpg"
import Footer from './Footer'
import Swal from 'sweetalert2'



const Fashion = () => {
  
   const [data,setData] = useState(JSON.parse(localStorage.getItem("comment")));
   const[text,setText]=useState();

   useEffect(() => {
 localStorage.setItem("comment",JSON.stringify(data))
},[data])
   
   const create = (e) => {
    e.preventDefault();

    if(text){
      setData((pre) => {

        if(pre) {

        return [...pre,{name:"login",comment:text}] 

       } else return [{name:"login",comment:text}] })

       Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Your comment has been saved",
        showConfirmButton: false,
        timer: 1000
      });


    } 
       
       setText("")
      
    
   }

   
   
  return (
    <>
     <h1 className=' bg-[#f3a20d] text-white font-bold text-center py-3 text-2xl md:py-6 md:text-4xl'>Fashion</h1>
    
    <div className='py-5 md:py-20'> <img  src={fashion} /></div>



     <div className=' mx-auto container md:max-w-[80%]  '>

      <form onSubmit={(e) => create(e)}  className=' md:mx-20 justify-center '   >
        <textarea required  value={text} onChange={(e) => setText(e.target.value) } placeholder='say something...' className=' border w-full  border-gray-400 mb-5 p-4'/>
        <button type='submit'   className=' mb-5 w-40 px-2 py-1 bg-indigo-600 rounded-md text-sm md:text-lg text-white'>Add comment</button>
      </form>

      {data?.map((cm,index) => <div key={index} className=' bg-gray-200 mb-2 p-2 md:p-5'>

<div className=' '>
<div className=' flex flex-col items-start gap-2 md:gap-4'>
<p className='  flex justify-center items-center text-white w-10 h-10  rounded-full bg-gray-400'>
  <img src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'/>
</p>

<p className='  text-pretty  ms-3'>{cm.comment}</p>
</div>

</div>

 <div className=' ms-14'>
 {cm.list}
 </div>


</div> )}


      
     </div>


     <Footer/>
    
    </>
  )
}

export default Fashion