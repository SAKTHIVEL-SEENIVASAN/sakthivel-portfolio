 
import { useState } from 'react'
import { Tab, Tabs, Card, CardMedia } from '@mui/material'

export default function BioCatchCase() {
  const [tab, setTab] = useState(0)
  
  return (
    <section>
      <Tabs value={tab} onChange={(e, v) => setTab(v)}>
        <Tab label="Problem" />
        <Tab label="Solution" />
        <Tab label="Impact" />
      </Tabs>
      
      {tab === 0 && (
        <Card>
          <CardMedia component="img" image="/bio-problem.jpg" />
          <h3>Fishermen wasting fuel searching for fish</h3>
        </Card>
      )}
      {/* Add other tabs */}
    </section>
  )
}