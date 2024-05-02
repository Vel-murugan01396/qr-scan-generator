import React, { useState } from "react";

function App() {

const [img,Setimg]=useState("")
const[loading,setloading]=useState(false)
const [qrData,setQrData]=useState("https://web.whatsapp.com/")


async function GenerateQrCode(){
 setloading(true)
 try {
  const URL=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrData)} `
  Setimg(URL)
 } catch (error) {
  console.error("Error generator QR Scan",error)
 }
 finally{
  setloading(false)
 }
}

  return (
    <>
     
      <section className="bg-lime-500 w-full h-screen flex-col flex justify-center items-center ">
        <div>
          <h1>QR Code Generator</h1>
          {loading &&  <p>please wait...</p>}
         
          {img && <img src={img}/>}
          

        </div>
        <div className="p-2 flex-col ">
          <div className="p-2 ">
          <label className="p-2 text-sm font-medium">Data For Qr Scan:</label>
          <input placeholder="Data For Qr Scan" value={qrData} className="p-2 outline-none rounded w-full" onChange={(e)=>setQrData(e.target.value)}/></div>
          <div className="p-2 ">
          <label className="p-2 text-sm font-medium">Image Size:</label>
          <input placeholder="Image Size" className="p-2 outline-none rounded w-full"/></div>

        </div>
        <div>
          <button className=" bg-sky-800 text-slate-50 text-sm hover:bg-sky-950 p-2 rounded" onClick={GenerateQrCode}>Generate Qr Code</button>
          <button className=" bg-orange-600 text-slate-50 text-sm hover:bg-orange-800 p-2 ml-1 rounded" >Download Qr Code</button>
        </div>


      </section>
    </>
  );
}

export default App;
