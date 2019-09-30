import React, { useEffect, useState } from 'react'
import moment from 'moment'

import { getApplications } from '../../services/applications'
import './applications.css'

const Applications = () => {
  // React Hooks
  const [apps, setApps] = useState([])
  const [selectedApp, setSelectedApp] = useState(null)

  useEffect(() => {
    getApplications().then((apps) => {
      setApps(apps)
    })
  }, [])
  // End React Hooks

  const selectApp = (id) => {
    if (selectedApp === id) {
      return setSelectedApp(null)
    }
    setSelectedApp(id)
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
          <div className="uptime">{metrics.uptime}%</div>
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

  return (
    <div className="applications">
      {apps.map(renderApp)}
    </div>
  )
}

export default Applications
