import React, { useEffect, useState } from 'react';
import './app.css'
const hoursList24 = ["01","02","03","04","05","06","07","08","09",10,11,12,13,14,15,16,17,18,19,20,21,22,23,"00"]
const minutesList = []
for(let i=1;i<=60;i++){
    minutesList.push(i<10?`0${i}`:i)
}
export default function TimePicker({value,setValue,is24Hours=true}) {
    const [hours,setHours] = useState("00")
    const [min,setMin] = useState("00")
    // const [value,setValue] = useState()
    useEffect(()=>{
        if(value.length) {
            const splitedValue = value.split(":")
            setHours(splitedValue[0])
            setMin(splitedValue[1])
        }
    },[value])
    const onChangeHours = (value) =>{
        console.log("Here")
        setHours(value)
        setValue(`${value}:${min}`)
    }
    const onChangeMin = (value) =>{
        console.log("Here")
        setMin(value)
        setValue(`${hours}:${value}`)
    }
    return(
        <div className="d-flex time-picker-container ms-2">
            <select className="select-one" onChange={({target:{value}})=>onChangeHours(value)} value={`${hours}:`}>
                {
                    hoursList24.map(hour=>{
                        if(!is24Hours && (hour>12 || hour ==="00")){
                            return ''
                        }
                        return(
                            <option value={hour}>{hour}</option>
                        )
                    })
                }
            </select>
            <span>:</span>
            <select className="select-two" onChange={({target:{value}})=>onChangeMin(value)} value={`${min}:`}>
                {
                    minutesList.map((minutes)=>{
                        return(
                            <option value={30}>{minutes}</option>
                        )
                    })
                }
            </select>
            {is24Hours ?null:<><span>:</span>
            <select className="select-am" onChange={({target:{value}})=>onChangeMin(value)}>
                <option value={"am"}>AM</option>
                <option value={"pm"}>PM</option> 
            </select></>}
        </div>
        
    )
}