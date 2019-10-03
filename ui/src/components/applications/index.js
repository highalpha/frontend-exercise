import React, { useEffect, useState } from 'react'
import moment from 'moment'
import plus from '../../plus-sign.png'
import { getApplications, createApplication } from '../../services/applications'
import './applications.css'

const Applications = () => {
  // React Hooks
  const [apps, setApps] = useState([])
  const [selectedApp, setSelectedApp] = useState(null)
  const [openForm, setOpenForm] = useState(false)

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('')
  const [cpu, setCpu]=useState();
  const [mem, setMem] = useState();
  const [watcher, setWatcher] = useState(false)

  useEffect(() => {
    getApplications().then((apps) => {
      setApps(apps)
    })
  }, [watcher])
  // End React Hooks

  const selectApp = (id) => {
    if (selectedApp === id) {
      return setSelectedApp(null)
    }
    setSelectedApp(id)
  }

  const setApp = () => {
    let resources = {
      requested:{
        mem:mem, 
        cpu:cpu
      }
    }
    if(name === '' || type === '' || mem === '' || cpu === '' || description === ''){
      alert('The entire form needs to be filled out')
    } else{
      createApplication(name, type ,resources).then(data => setWatcher(!watcher))
     
    }
  }
  const renderApp = (app) => {
    const { id, name, description, type, createdOn, location, resources, metrics } = app
    const isSelected = selectedApp === id
    const selectedCls = isSelected ? 'selected' : ''
    return (
      <div key={id} className={`application ${selectedCls}`} onClick={() => selectApp(id)}>
        <div className="row-data">
          <div className="name">{name}</div>
          <div className="description">{description}</div>
          { metrics ? <div className="uptime">{metrics.uptime}%</div> : <div className="uptime">0%</div> }
        </div>
        {
          isSelected
            ? (<div className="extended-info">
              <div className="left">
                <div className="data-field">
                  <label>Type</label>
                  <span>{type}</span>
                </div>
                <div className="data-field">
                  <label>Created</label>
                  <span>{moment(createdOn).format('YYYY-MM-DD h:mm:ss a')}</span>
                </div>
                <div className="data-field">
                  <label>Location</label>
                  <pre className="code">
                    {JSON.stringify(location, null, 2)}
                  </pre>
                </div>
              </div>
              <div className="right">
                <div className="data-field">
                  <label>Resources</label>
                  <pre>{JSON.stringify(resources, null, 2)}</pre>
                </div>
              </div>
            </div>)
            : null
        }
      </div>
    )
  }

  const addNewApp = () =>{
    const openCls = openForm ? 'selected' : ''
    return(
      <div className={!openForm?'addApplication':''}>
      { openForm ? 
      (<div className={`application ${openCls}`}>
        <div className="row-data">
          <div className="extended-info">
              <div className="left">
                <div className="data-field">
                  <label>Name</label>
                  <input type="text" onChange={(e) =>{setName(e.target.value)}} placeholder='New Application'/>
                </div>
                <div className="data-field">
                  <label>Description</label>
                  <textarea type="text" onChange={(e) =>setDescription(e.target.value)} />
                </div>
              </div>
              <div className='right'>
                <div className="data-field">
                  <label>Type</label>
                  <select name="type" onChange={(e) =>setType(e.target.value)}>
                    <option value="Message Queue">Message Queue</option>
                    <option value="Test Apparatus">Test Apparatus</option>
                    <option value="Database">Database</option>
                    <option value="service">service</option>
                  </select>
                </div>
                <div className="data-field">
                  <label>Request Memory</label>
                  <input type="number" onChange={(e) =>setMem(e.target.value)}/>
                </div>
                <div className="data-field">
                  <label>Request CPU</label>
                  <input type="number" onChange={(e) =>setCpu(e.target.value)} />
                </div>
              </div> 
            </div>
          </div>
          <button onClick={()=> setApp()}>Submit</button>
          <button onClick={()=>setOpenForm(!openForm)}>Cancel</button>
      </div>
      
      ) :
     <img  src={plus} alt="help" onClick={() =>setOpenForm(!openForm)} />
    }
    </div>
    )
  }

  return (
    <div className="applications">
      {apps.map(renderApp)}
        {addNewApp()}
    </div>
  )
}

export default Applications
